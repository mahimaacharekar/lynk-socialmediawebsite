import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-[#3B2E2A] shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white"> <Link to="/home" className="hover:opacity-80">Lynk</Link></h1>
     <div className="flex gap-4">
  <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
  <Link to="/signup" className="text-white hover:text-gray-200">Sign Up</Link>
</div>

    </nav>
  );
}
