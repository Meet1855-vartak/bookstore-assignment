import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import BookCards from './components/BookCards'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Contact from './components/Contact'

function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <BookCards />
      <WhyChooseUs />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/bookcards" element={<BookCards />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App