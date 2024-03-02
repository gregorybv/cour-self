import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { HomePage, SingleCoursePage, CartPage, CoursesPage } from "./pages";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/courses/:id" element={<SingleCoursePage/>}/>
        <Route path="/category/:category" element={<CoursesPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
