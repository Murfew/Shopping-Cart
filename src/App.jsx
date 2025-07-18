import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>}/>
        <Route path="/cart" element={<MainLayout><Cart /></MainLayout>}/>
      </Routes>
    </Router>
  )
}
