import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { useAuth } from '../AuthContext'

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
    marginBottom: '2rem',
  },
  sellBtn: {
    backgroundColor: '#2C1810',
    color: '#F5F0E8',
    border: 'none',
    padding: '0.85rem 2rem',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    marginBottom: '3rem',
  },
  form: {
    backgroundColor: '#FDF6E3',
    border: '1px solid #C8972B',
    padding: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
    textAlign: 'left',
  },
  formHeading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2C1810',
    marginBottom: '1.5rem',
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
  formButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
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
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    color: '#2C1810',
    border: '1px solid #2C1810',
    padding: '0.85rem 2rem',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
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
    backgroundColor: '#3E2010',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgPlaceholder: {
    color: '#C8972B',
    fontFamily: 'Playfair Display, serif',
    fontSize: '1rem',
    textAlign: 'center',
    padding: '1rem',
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
  badge: {
    backgroundColor: '#2C1810',
    color: '#C8972B',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '0.7rem',
    fontWeight: '600',
    padding: '0.2rem 0.6rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
}

const defaultBooks = [
  {
    id: 'default-1',
    image: 'https://rekhtabooks.com/cdn/shop/files/9789390183524.jpg?v=1688453070',
    genre: 'Classic',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '₹299',
    isDefault: true,
  },
  {
    id: 'default-2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    genre: 'Fiction',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '₹349',
    isDefault: true,
  },
  {
    id: 'default-3',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg',
    genre: 'Dystopian',
    title: '1984',
    author: 'George Orwell',
    price: '₹279',
    isDefault: true,
  },
  {
    id: 'default-4',
    image: 'https://m.media-amazon.com/images/I/817HaeblezL.jpg',
    genre: 'Self-Help',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: '₹499',
    isDefault: true,
  },
]

function BookCards() {
  const [showForm, setShowForm] = useState(false)
  const [dbBooks, setDbBooks] = useState([])
  const { user } = useAuth()
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    image: '',
    condition: '',
  })

  async function fetchBooks() {
    const { data } = await supabase.from('books').select('*')
    if (data) setDbBooks(data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  async function handleSubmit() {
    if (!form.title || !form.author || !form.genre || !form.price || !form.condition) return
    await supabase.from('books').insert({
      title: form.title,
      author: form.author,
      genre: form.genre,
      price: form.price,
      image: form.image,
      condition: form.condition,
    })
    setForm({ title: '', author: '', genre: '', price: '', image: '', condition: '' })
    setShowForm(false)
    fetchBooks()
  }

  const allBooks = [...defaultBooks, ...dbBooks]

  return (
    <section style={styles.section}>
      <p style={styles.tag}>★ Hand Picked For You</p>
      <h2 style={styles.heading}>Featured Books</h2>
      <p style={styles.subtext}>Explore our most loved titles this season</p>
      {user && (
        <button style={styles.sellBtn} onClick={() => setShowForm(!showForm)}>
          📖 Sell Your Old Book
        </button>
      )}    

      {showForm && (
        <div style={styles.form}>
          <h3 style={styles.formHeading}>List Your Book For Sale</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Book Title *</label>
            <input
              style={styles.input}
              placeholder="Enter book title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Author *</label>
            <input
              style={styles.input}
              placeholder="Enter author name"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Genre *</label>
            <input
              style={styles.input}
              placeholder="Fiction, Science, Self-Help..."
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price *</label>
            <input
              style={styles.input}
              placeholder="₹199"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Book Condition *</label>
            <select
              style={styles.input}
              value={form.condition}
              onChange={(e) => setForm({ ...form, condition: e.target.value })}
            >
              <option value="">Select condition...</option>
              <option value="Like New">Like New</option>
              <option value="Good">Good</option>
              <option value="Old">Old</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Image URL (optional)</label>
            <input
              style={styles.input}
              placeholder="https://..."
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>
          <div style={styles.formButtons}>
            <button style={styles.submitBtn} onClick={handleSubmit}>
              Submit Book
            </button>
            <button style={styles.cancelBtn} onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={styles.grid}>
        {allBooks.map((book) => (
          <div key={book.id} style={styles.card}>
            <div style={styles.imgWrapper}>
              {book.image ? (
                <img src={book.image} alt={book.title} style={styles.img} />
              ) : (
                <div style={styles.imgPlaceholder}>📚 {book.title}</div>
              )}
            </div>
            <div style={styles.cardBody}>
              <div style={styles.genre}>
                {book.genre}
                {!book.isDefault && (
                  <span style={{ ...styles.badge, marginLeft: '0.5rem' }}>
                    {book.condition || 'Used'}
                  </span>
                )}
              </div>
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