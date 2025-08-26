import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
function Footer() {

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    const socialIcons = [
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaInstagram />, href: "https://www.instagram.com" }
    ]
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w ax-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left md:w-1/3">
                        <a href="/" className="text-2xl font-bold text-white">
                            CCS Website
                        </a>
                        <p className="mt-2 text-gray-400">
                            We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 1 years of experience and 1000 of innovative achievements.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:w-1/3">
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="text-center md:text-left md:w-1/3">
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} CCS Website. All rights reserved.
                </div>
            </div>

        </footer>
    )
}

export default Footer