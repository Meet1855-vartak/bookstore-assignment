const styles = {
  navbar: {
    backgroundColor: '#F5F0E8',
    padding: '1.2rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #C8972B',
  },
  logo: {
    color: '#2C1810',
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  logoAccent: {
    color: '#C8972B',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '2.5rem',
  },
  link: {
    color: '#2C1810',
    textDecoration: 'none',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }
}

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        The <span style={styles.logoAccent}>Book</span> Nook
      </div>
      <ul style={styles.links}>
        <li><a href="#" style={styles.link}>Home</a></li>
        <li><a href="#" style={styles.link}>Books</a></li>
        <li><a href="#" style={styles.link}>Categories</a></li>
        <li><a href="#" style={styles.link}>About</a></li>
        <li><a href="#" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar