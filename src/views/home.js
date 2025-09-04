import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Resto-Wise</title>
        <meta property="og:title" content="Resto-Wise" />
      </Helmet>
    </div>
  )
}

export default Home
