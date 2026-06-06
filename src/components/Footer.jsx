const styles = {
  footer: {
    backgroundColor: '#2C1810',
    padding: '4rem 3rem 2rem',
    color: '#F5F0E8',
    borderTop: '3px solid #C8972B',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto 3rem',
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#F5F0E8',
    marginBottom: '1rem',
  },
  logoAccent: {
    color: '#C8972B',
  },
  desc: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#F5F0E8',
    opacity: '0.7',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  socialBtn: {
    backgroundColor: '#3E2010',
    color: '#C8972B',
    border: '1px solid #C8972B',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  colTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#C8972B',
    marginBottom: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
  },
  link: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#F5F0E8',
    opacity: '0.7',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  contactItem: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#F5F0E8',
    opacity: '0.7',
    marginBottom: '0.7rem',
  },
  divider: {
    borderColor: '#3E2010',
    marginBottom: '1.5rem',
  },
  bottom: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#F5F0E8',
    opacity: '0.5',
  },
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>

        {/* Brand */}
        <div>
          <div style={styles.logo}>
            The <span style={styles.logoAccent}>Book</span> Nook
          </div>
          <p style={styles.desc}>
            Your favourite destination for books of every genre. Curated with love for every kind of reader.
          </p>
          <div style={styles.socials}>
            <div style={styles.socialBtn}><i className="fab fa-facebook-f"></i></div>
            <div style={styles.socialBtn}><i className="fab fa-linkedin-in"></i></div>
            <div style={styles.socialBtn}><i className="fab fa-twitter"></i></div>
            <div style={styles.socialBtn}><i className="fab fa-instagram"></i></div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={styles.colTitle}>Quick Links</div>
          <ul style={styles.links}>
            <li><a href="#" style={styles.link}>Home</a></li>
            <li><a href="#" style={styles.link}>Books</a></li>
            <li><a href="#" style={styles.link}>Categories</a></li>
            <li><a href="#" style={styles.link}>About Us</a></li>
            <li><a href="#" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <div style={styles.colTitle}>Categories</div>
          <ul style={styles.links}>
            <li><a href="#" style={styles.link}>Fiction</a></li>
            <li><a href="#" style={styles.link}>Non-Fiction</a></li>
            <li><a href="#" style={styles.link}>Science</a></li>
            <li><a href="#" style={styles.link}>History</a></li>
            <li><a href="#" style={styles.link}>Self-Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={styles.colTitle}>Contact Us</div>
          <p style={styles.contactItem}>📍 123 Book Street, Mumbai, India</p>
          <p style={styles.contactItem}>📞 +91 98765 43210</p>
          <p style={styles.contactItem}>✉️ hello@thebooknook.com</p>
          <p style={styles.contactItem}>🕐 Mon - Sat: 9am - 8pm</p>
        </div>

      </div>
      <hr style={styles.divider} />
      <p style={styles.bottom}>© 2026 The Book Nook. All rights reserved.</p>
    </footer>
  )
}

export default Footer