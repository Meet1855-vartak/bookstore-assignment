const styles = {
  page: {
    backgroundColor: '#F5F0E8',
    minHeight: '100vh',
  },
  hero: {
    backgroundColor: '#2C1810',
    padding: '5rem 3rem',
    textAlign: 'center',
  },
  heroTag: {
    color: '#C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heroHeading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '3rem',
    fontWeight: '700',
    color: '#F5F0E8',
    marginBottom: '1rem',
  },
  heroSubtext: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1rem',
    color: '#F5F0E8',
    opacity: '0.8',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.8',
  },
  mainSection: {
    padding: '5rem 3rem',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '4rem',
    alignItems: 'flex-start',
  },
  formSide: {
    flex: '1.5',
    backgroundColor: '#FDF6E3',
    padding: '3rem',
    border: '1px solid #e8dcc8',
  },
  formTag: {
    color: '#C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  formHeading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '2rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#2C1810',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.85rem 1rem',
    backgroundColor: '#F5F0E8',
    border: '1px solid #C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.95rem',
    color: '#2C1810',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '0.85rem 1rem',
    backgroundColor: '#F5F0E8',
    border: '1px solid #C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.95rem',
    color: '#2C1810',
    outline: 'none',
    resize: 'vertical',
    minHeight: '150px',
    boxSizing: 'border-box',
  },
  submitBtn: {
    backgroundColor: '#C8972B',
    color: '#F5F0E8',
    border: 'none',
    padding: '1rem 2.5rem',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '100%',
    marginTop: '0.5rem',
  },
  infoSide: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoCard: {
    backgroundColor: '#FDF6E3',
    border: '1px solid #e8dcc8',
    borderTop: '3px solid #C8972B',
    padding: '1.5rem',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: '1.5rem',
    marginTop: '0.2rem',
  },
  infoTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.3rem',
  },
  infoText: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#5C3D2E',
    lineHeight: '1.6',
  },
  mapBox: {
    backgroundColor: '#2C1810',
    padding: '2rem',
    textAlign: 'center',
    marginTop: '0.5rem',
  },
  mapText: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1rem',
    color: '#C8972B',
    marginBottom: '0.5rem',
  },
  mapSubtext: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#F5F0E8',
    opacity: '0.7',
  },
}

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    text: '123 Book Street, Bandra West\nMumbai, Maharashtra 400050',
  },
  {
    icon: '📞',
    title: 'Call Us',
    text: '+91 98765 43210\nMon - Sat: 9am - 8pm',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    text: 'hello@thebooknook.com\nWe reply within 24 hours',
  },
]

function Contact() {
  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={styles.hero}>
        <p style={styles.heroTag}>★ Get In Touch</p>
        <h1 style={styles.heroHeading}>Contact Us</h1>
        <p style={styles.heroSubtext}>
          Have a question, suggestion, or just want to talk books?
          We'd love to hear from you!
        </p>
      </div>

      {/* Main Section */}
      <div style={styles.mainSection}>

        {/* Form */}
        <div style={styles.formSide}>
          <p style={styles.formTag}>★ Send a Message</p>
          <h2 style={styles.formHeading}>We'd Love to Hear From You</h2>

          <div style={styles.formGroup}>
            <label style={styles.label}>Your Name</label>
            <input style={styles.input} type="text" placeholder="John Doe" />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input style={styles.input} type="email" placeholder="john@example.com" />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Subject</label>
            <input style={styles.input} type="text" placeholder="Book Enquiry..." />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea} placeholder="Write your message here..." />
          </div>

          <button style={styles.submitBtn}>Send Message ✉️</button>
        </div>

        {/* Info */}
        <div style={styles.infoSide}>
          {contactInfo.map((info, i) => (
            <div key={i} style={styles.infoCard}>
              <div style={styles.infoIcon}>{info.icon}</div>
              <div>
                <div style={styles.infoTitle}>{info.title}</div>
                <div style={styles.infoText}>{info.text}</div>
              </div>
            </div>
          ))}
          <div style={styles.mapBox}>
            <div style={styles.mapText}>📍 The Book Nook</div>
            <div style={styles.mapSubtext}>123 Book Street, Mumbai</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact