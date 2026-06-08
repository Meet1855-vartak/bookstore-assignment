import { Link, useLocation } from 'react-router-dom'

const styles = {
  navbar: {
    backgroundColor: '#F5F0E8',
    padding: '1.2rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #C8972B',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    boxShadow: '0 2px 10px rgba(44, 24, 16, 0.08)',
  },
  logo: {
    color: '#2C1810',
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.6rem',
    fontWeight: '700',
    textDecoration: 'none',
  },
  logoAccent: {
    color: '#C8972B',
    fontStyle: 'italic',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
  },
  link: {
    color: '#2C1810',
    textDecoration: 'none',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s',
  },
  activeLink: {
    color: '#C8972B',
    textDecoration: 'none',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    paddingBottom: '4px',
    borderBottom: '2px solid #C8972B',
  },
  cartBtn: {
    backgroundColor: '#C8972B',
    color: '#F5F0E8',
    border: 'none',
    padding: '0.6rem 1.5rem',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  }
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/bookcards', label: 'Books' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        The <span style={styles.logoAccent}>Book</span> Nook
      </Link>
      <ul style={styles.links}>
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              style={location.pathname === item.to ? styles.activeLink : styles.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button style={styles.cartBtn}>🛒 Cart</button>
    </nav>
  )
}

export default Navbar