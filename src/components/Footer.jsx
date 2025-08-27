import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
function Footer() {

    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Here you can handle subscription logic
        alert(`Subscribed with ${email}`);
        setEmail("");
    };

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
                    <div className="text-center md:text-left md:w-1/3 md:mr-10">
                        <a href="/" className="text-2xl font-bold text-white">
                            CCS Website
                        </a>
                        <p className="mt-2 text-gray-400">
                            We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. About more than 1 years of experience and 1000 of innovative achievements.
                        </p>
                        <div className="text-center md:text-left md:w-1/3 mt-3">
                            <h3 className="text-lg font-semibold mb-3">Follow On Us</h3>
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

                    {/* Newsletter */}
                    <div className="md:w-1/3 text-center md:text-left md:mr-10">
                        <h3 className="text-lg font-semibold">News Letter</h3>
                        <p className="mt-2 text-gray-400 mb-2">Sign up today for hints, tips and the latest service news</p>
                        <p className="mt-2 text-gray-400 mb-2">Talk To Our Support & Mail Us</p>
                        <p className="mt-2 text-gray-400 mb-2">+91-9XXXXXXXXX8</p>
                        <p className="mt-2 text-gray-400 mb-2">info@example.com</p>
                        <p className="mt-2 text-gray-400 mb-2">Sign up today for hints, tips and the latest service news</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                            <input
                                id="email"
                                autoComplete="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="px-4 py-2 rounded-md bg-white text-black w-full sm:w-auto flex-2"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="md:w-1/3">
                        <h3 className="text-lg text-left font-bold mb-3">Our Location</h3>
                        <div className="w-full h-48 md:h-40 rounded overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.7962897369252!2d93.6904174!3d27.099718400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744013242eb5f8b%3A0x8ef728adba03aeb!2sNEFA%20Cabs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1756228904465!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="CCS Location"
                            ></iframe>
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