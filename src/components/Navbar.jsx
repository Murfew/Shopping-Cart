import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-background text-primary shadow">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">FakeStore</h1>
        <nav className="space-x-6">
          <Link to={"/"} className="text-secondary hover:text-accent transition-colors">Home</Link>
          <Link to={"/shop"} className="text-secondary hover:text-accent transition-colors">Shop</Link>
        </nav>
        <Link to={"/cart"}><ShoppingCart /></Link>
      </div>
    </header>

  )
}
