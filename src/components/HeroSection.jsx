const styles = {
  hero: {
    backgroundColor: '#F5F0E8',
    padding: '5rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '90vh',
  },
  left: {
    maxWidth: '550px',
  },
  tag: {
    color: '#C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#2C1810',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
  },
  headingAccent: {
    color: '#C8972B',
    fontStyle: 'italic',
  },
  subtext: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1rem',
    color: '#5C3D2E',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
  },
  buttonRow: {
    display: 'flex',
    gap: '1rem',
  },
  primaryBtn: {
    backgroundColor: '#C8972B',
    color: '#F5F0E8',
    padding: '0.85rem 2rem',
    border: 'none',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#2C1810',
    padding: '0.85rem 2rem',
    border: '1px solid #2C1810',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  right: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-end',
  },
  bookCover: {
    width: '160px',
    height: '220px',
    backgroundColor: '#3E2010',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C8972B',
    fontFamily: 'Playfair Display, serif',
    fontSize: '0.85rem',
    textAlign: 'center',
    overflow: 'hidden',
  },
  bookCoverTall: {
    width: '160px',
    height: '260px',
    backgroundColor: '#5C3D2E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F5F0E8',
    fontFamily: 'Playfair Display, serif',
    fontSize: '0.85rem',
    textAlign: 'center',
    overflow: 'hidden',
  },
  stats: {
    display: 'flex',
    gap: '3rem',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid #C8972B',
  },
  statNumber: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2C1810',
  },
  statLabel: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.75rem',
    color: '#5C3D2E',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  }
}

function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.left}>
        <p style={styles.tag}>★ Welcome to The Book Nook</p>
        <h1 style={styles.heading}>
          Discover Your <br />
          <span style={styles.headingAccent}>Next Great</span> Read
        </h1>
        <p style={styles.subtext}>
          Explore thousands of books across every genre. From timeless classics
          to modern bestsellers — your perfect book is waiting for you.
        </p>
        <div style={styles.buttonRow}>
          <button style={styles.primaryBtn}>Explore Books</button>
          <button style={styles.secondaryBtn}>Browse Categories</button>
        </div>
        
      </div>
      <div style={styles.right}>
        <div style={styles.bookCover}>
          <img src="https://rekhtabooks.com/cdn/shop/files/9789390183524.jpg?v=1688453070" alt="The Great Gatsby"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={styles.bookCoverTall}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" alt="To Kill a Mockingbird"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={styles.bookCover}>
          <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg" alt="1984"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection