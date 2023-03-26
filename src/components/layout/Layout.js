import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
