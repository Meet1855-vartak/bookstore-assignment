const styles = {
  section: {
    backgroundColor: '#FDF6E3',
    padding: '5rem 3rem',
    textAlign: 'center',
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
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.5rem',
  },
  subtext: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1rem',
    color: '#5C3D2E',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#F5F0E8',
    border: '1px solid #C8972B',
    padding: '2rem 1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#5C3D2E',
  },
}

const categories = [
  { icon: '🗡️', title: 'Fiction', desc: 'Novels, short stories & more' },
  { icon: '🌍', title: 'Non-Fiction', desc: 'Real stories, real world' },
  { icon: '🔬', title: 'Science', desc: 'Explore the universe' },
  { icon: '📜', title: 'History', desc: 'Learn from the past' },
  { icon: '🧠', title: 'Self-Help', desc: 'Grow & improve yourself' },
  { icon: '💰', title: 'Business', desc: 'Finance, startups & more' },
]

function Categories() {
  return (
    <section style={styles.section}>
      <p style={styles.tag}>★ Browse By Genre</p>
      <h2 style={styles.heading}>Explore Our Categories</h2>
      <p style={styles.subtext}>Find the perfect book for every mood and interest</p>
      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{cat.icon}</div>
            <div style={styles.cardTitle}>{cat.title}</div>
            <div style={styles.cardDesc}>{cat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories