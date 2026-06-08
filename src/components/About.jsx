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
  section: {
    padding: '5rem 3rem',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
  },
  sectionLeft: {
    flex: 1,
  },
  sectionRight: {
    flex: 1,
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
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '1.5rem',
    lineHeight: '1.3',
  },
  text: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1rem',
    color: '#5C3D2E',
    lineHeight: '1.9',
    marginBottom: '1rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  statCard: {
    backgroundColor: '#FDF6E3',
    border: '1px solid #C8972B',
    padding: '1.5rem',
    textAlign: 'center',
  },
  statNumber: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#C8972B',
  },
  statLabel: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.8rem',
    color: '#5C3D2E',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  teamSection: {
    backgroundColor: '#FDF6E3',
    padding: '5rem 3rem',
    textAlign: 'center',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '900px',
    margin: '3rem auto 0',
  },
  teamCard: {
    backgroundColor: '#F5F0E8',
    border: '1px solid #e8dcc8',
    padding: '2rem 1.5rem',
    textAlign: 'center',
  },
  teamAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#2C1810',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '2rem',
  },
  teamName: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.3rem',
  },
  teamRole: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#C8972B',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  valuesSection: {
    padding: '5rem 3rem',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginTop: '3rem',
  },
  valueCard: {
    padding: '2rem',
    borderTop: '3px solid #C8972B',
    textAlign: 'left',
  },
  valueIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  valueTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.7rem',
  },
  valueText: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.9rem',
    color: '#5C3D2E',
    lineHeight: '1.7',
  },
}

const team = [
  { emoji: '👨‍💼', name: 'Arjun Sharma', role: 'Founder & CEO' },
  { emoji: '👩‍💻', name: 'Priya Mehta', role: 'Head of Curation' },
  { emoji: '👨‍🎨', name: 'Rohan Patel', role: 'Creative Director' },
]

const values = [
  { icon: '📚', title: 'Passion for Books', text: 'Every book we carry is hand picked with love. We believe every great book deserves to find its perfect reader.' },
  { icon: '🤝', title: 'Community First', text: 'We are more than a store. We are a community of readers who share a deep love for the written word.' },
  { icon: '✨', title: 'Quality Always', text: 'From rare classics to modern bestsellers, we ensure every book meets our high standards of quality.' },
]

function About() {
  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={styles.hero}>
        <p style={styles.heroTag}>★ Our Story</p>
        <h1 style={styles.heroHeading}>About The Book Nook</h1>
        <p style={styles.heroSubtext}>
          Born out of a love for literature, The Book Nook has been connecting readers
          with their next great read since 2010.
        </p>
      </div>

      {/* Story Section */}
      <div style={styles.section}>
        <div style={styles.sectionLeft}>
          <p style={styles.tag}>★ Who We Are</p>
          <h2 style={styles.heading}>A Home For Every Book Lover</h2>
          <p style={styles.text}>
            The Book Nook was founded with one simple belief — that the right book
            can change your life. What started as a small corner shop in Mumbai has
            grown into one of India's most beloved online bookstores.
          </p>
          <p style={styles.text}>
            We curate our collection with care, ensuring that every genre, every
            age group, and every taste is represented. Whether you're a lifelong
            reader or just getting started, there's something here for you.
          </p>
        </div>
        <div style={styles.sectionRight}>
          <div style={styles.statsGrid}>
            {[
              { number: '10K+', label: 'Books Available' },
              { number: '50K+', label: 'Happy Readers' },
              { number: '500+', label: 'Authors' },
              { number: '15+', label: 'Years of Service' },
            ].map((stat, i) => (
              <div key={i} style={styles.statCard}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={styles.valuesSection}>
        <p style={styles.tag}>★ What We Stand For</p>
        <h2 style={styles.heading}>Our Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} style={styles.valueCard}>
              <div style={styles.valueIcon}>{v.icon}</div>
              <div style={styles.valueTitle}>{v.title}</div>
              <div style={styles.valueText}>{v.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={styles.teamSection}>
        <p style={styles.tag}>★ The People Behind It</p>
        <h2 style={styles.heading}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} style={styles.teamCard}>
              <div style={styles.teamAvatar}>{member.emoji}</div>
              <div style={styles.teamName}>{member.name}</div>
              <div style={styles.teamRole}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About