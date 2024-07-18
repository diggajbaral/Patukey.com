import React from 'react'
import Header from './Component/Header'
import Banner from './Pages/LandingPage/Banner'
import NewArrive from './Pages/LandingPage/NewArrive'
import Categories from './Pages/LandingPage/Categories'
import TrendingStyle from './Pages/LandingPage/TrendingStyle'
import FastSelling from './Pages/LandingPage/FastSelling'
import GridGallery from './Pages/LandingPage/GridGallery'
import ContactRow from './Pages/LandingPage/ContactRow'
import CustomerStories from './Pages/LandingPage/CustomerStories'
import AboutPatuki from './Pages/LandingPage/AboutPatuki'
import Footer from './Component/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <NewArrive />
      <Categories />
      <div className="Topic">
        <p>Patukey trending style's</p>
      </div>
      <TrendingStyle />
      <div className="Topic">
        <p>Fast Selling</p>
      </div>
      <FastSelling />
      <GridGallery />
      <ContactRow />
      <div className="Topic">
        <p>Customer Stories</p>
      </div>
      <CustomerStories />
      <AboutPatuki />
      {/* <Footer /> */}
    </>
  )
}

export default App
