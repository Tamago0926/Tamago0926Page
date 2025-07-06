import './App.css';
import Footer from './materials/Footer';
import Header from './materials/Header';
import MainPage from './materials/MainPage';
import SubPage from './materials/SubPage';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

          <Header />

        <Routes>
          <Route path='/' element= {<MainPage />} />
          <Route path='/SubPage' element= {<SubPage />} />
        </Routes>

        <Footer />
    </div>
    </Router>
  );
}

export default App;
