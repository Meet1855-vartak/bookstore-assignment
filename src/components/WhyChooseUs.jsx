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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#F5F0E8',
    border: '1px solid #e8dcc8',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1.2rem',
  },
  cardTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.7rem',
  },
  cardDesc: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#5C3D2E',
    lineHeight: '1.7',
  },
}

const reasons = [
  {
    icon: '🚚',
    title: 'Free Delivery',
    desc: 'Free shipping on all orders above ₹499. Delivered right to your doorstep.',
  },
  {
    icon: '📚',
    title: '10,000+ Books',
    desc: 'Massive collection across every genre, language and age group.',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    desc: 'Not satisfied? Return within 7 days — no questions asked.',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    desc: 'Your payments are 100% safe with our encrypted checkout system.',
  },
]

function WhyChooseUs() {
  return (
    <section style={styles.section}>
      <p style={styles.tag}>★ Why Book Lovers Trust Us</p>
      <h2 style={styles.heading}>Why Choose The Book Nook?</h2>
      <p style={styles.subtext}>We make sure every reader has the best experience</p>
      <div style={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{reason.icon}</div>
            <div style={styles.cardTitle}>{reason.title}</div>
            <div style={styles.cardDesc}>{reason.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs