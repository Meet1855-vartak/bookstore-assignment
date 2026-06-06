const styles = {
  section: {
    backgroundColor: '#F5F0E8',
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
    backgroundColor: '#FDF6E3',
    border: '1px solid #e8dcc8',
    textAlign: 'left',
    overflow: 'hidden',
  },
  imgWrapper: {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '1.2rem',
  },
  genre: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.75rem',
    color: '#C8972B',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '0.3rem',
  },
  author: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.85rem',
    color: '#5C3D2E',
    marginBottom: '1rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2C1810',
  },
  btn: {
    backgroundColor: '#C8972B',
    color: '#F5F0E8',
    border: 'none',
    padding: '0.5rem 1rem',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
  },
}

const books = [
  {
    img: 'https://rekhtabooks.com/cdn/shop/files/9789390183524.jpg?v=1688453070',
    genre: 'Classic',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '₹599',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    genre: 'Fiction',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '₹649',
  },
  {
    img: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg',
    genre: 'Dystopian',
    title: '1984',
    author: 'George Orwell',
    price: '₹799',
  },
  {
    img: 'https://m.media-amazon.com/images/I/817HaeblezL.jpg',
    genre: 'Self-Help',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '₹499',
  },
]

function BookCards() {
  return (
    <section style={styles.section}>
      <p style={styles.tag}>★ Hand Picked For You</p>
      <h2 style={styles.heading}>Featured Books</h2>
      <p style={styles.subtext}>Explore our most loved titles this season</p>
      <div style={styles.grid}>
        {books.map((book, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imgWrapper}>
              <img src={book.img} alt={book.title} style={styles.img} />
            </div>
            <div style={styles.cardBody}>
              <div style={styles.genre}>{book.genre}</div>
              <div style={styles.title}>{book.title}</div>
              <div style={styles.author}>by {book.author}</div>
              <div style={styles.footer}>
                <span style={styles.price}>{book.price}</span>
                <button style={styles.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BookCards