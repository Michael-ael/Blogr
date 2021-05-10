import React from 'react'
import Header from './components/Header'
// import { ReactComponent as Illustration} from '../src/images/illustration-editor-desktop.svg'
import './index.css'
import Main from './components/Main'
import MainSecond from './components/MainSecond'
import MainThird from './components/MainThird'
import Footer from './components/Footer'
import './hamburger.js'

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Main />

      <MainSecond />

      <MainThird />

      <Footer />
    </div>
  );
}

export default App;
