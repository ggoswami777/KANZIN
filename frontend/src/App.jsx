import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import "remixicon/fonts/remixicon.css";
import Kanzin from './pages/Kanzin/Kanzin';
import Basics from './pages/Basics/Basics';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Kanzin' element={<Kanzin/>}/>
      <Route path='/kanzin/basics/introduction' element={<Basics/>}/>
    </Routes>
  )
}

