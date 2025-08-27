import { useState } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Logo */}
                    <a href="/" className="text-xl font-bold text-gray-800">
                        CCS
                    </a>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 font-semibold">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-xl text-gray-700 hover:text-red-700 transition-colors">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-red-700 focus:outline-none">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu with Smooth Transition */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-400 ease-linear ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center space-y-4 py-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.ref}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;