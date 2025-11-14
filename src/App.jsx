import React from 'react'
import RoutesList from './routes/Routes'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <RoutesList />
      </main>
      <Footer />
    </div>
  )
}
