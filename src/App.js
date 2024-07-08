import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ScrollToTop from './Components/ScrollToTop'
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
