import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const styles = {
  page: {
    backgroundColor: '#F5F0E8',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  },
  box: {
    backgroundColor: '#FDF6E3',
    border: '1px solid #C8972B',
    padding: '3rem',
    maxWidth: '420px',
    width: '100%',
  },
  tag: {
    color: '#C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '2rem',
  },
  formGroup: {
    marginBottom: '1.2rem',
  },
  label: {
    display: 'block',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#2C1810',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.4rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: '#F5F0E8',
    border: '1px solid #C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.95rem',
    color: '#2C1810',
    outline: 'none',
    boxSizing: 'border-box',
  },
  submitBtn: {
    backgroundColor: '#C8972B',
    color: '#F5F0E8',
    border: 'none',
    padding: '0.85rem 2rem',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '100%',
    marginTop: '0.5rem',
  },
  toggleText: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#5C3D2E',
    marginTop: '1.5rem',
    textAlign: 'center',
  },
  toggleLink: {
    color: '#C8972B',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  error: {
    color: '#b3261e',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    marginBottom: '1rem',
  },
}

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUp, signIn } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit() {
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    const err = isSignUp ? await signUp(email, password) : await signIn(email, password)
    if (err) {
      setError(err.message)
    } else {
      navigate('/')
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <p style={styles.tag}>★ {isSignUp ? 'Join Us' : 'Welcome Back'}</p>
        <h2 style={styles.heading}>{isSignUp ? 'Create Account' : 'Sign In'}</h2>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={styles.submitBtn} onClick={handleSubmit}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <p style={styles.toggleText}>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span style={styles.toggleLink} onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Auth