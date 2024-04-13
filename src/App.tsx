import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Offers from './components/Offers'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="container main">
        <Offers />
        <Info />
      </main>
      <Footer />
    </>
  )
}

export default App
