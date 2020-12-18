import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import AddMovies from './components/AddMovies';

export default function App() {
  return (
    <div>
      Hello from react app
      <Header />
      <Movies />
      <AddMovies />
      <Footer />
    </div>
  )
}
