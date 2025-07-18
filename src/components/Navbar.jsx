import { ShoppingCart } from "lucide-react"

export default function Navbar() {
  return (
    <nav>
      <h1>Creative Shop Name</h1>
      <div id="pages">
        <h2>Home</h2>
        <h2>Shop</h2>
      </div>
      <ShoppingCart />
    </nav>
  )
}
