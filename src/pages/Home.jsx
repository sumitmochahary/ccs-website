import { BsDot } from "react-icons/bs"
import ServiceCard from "../components/ServiceCard";
function Home() {

    const service = [
        "TAX AND ACCOUNTING CONSULTANT",
        "ONLINE AFFILIATION SERVICES",
        "MEDIA PRODUCTION",
        "WEBSITE DESIGNING",
        "GRAPHIC DESIGNING",
        "TELECALLERS (BPO SERVICES)",
        "APP DEVELOPMENT (ANDROID & IOS)",
        "TENDER BIDDING SERVICES",
        "IT SOLUTIONS",
        "NEFA CAB SERVICES",
        "ADMISSION ASSISTANCE",
        "LEAD GENERATION SERVICES",
        "SOCIAL MEDIA PROMOTION",
        "INTERIOR DESIGNER",
    ];

    const services = [
        {
            image: "https://img.icons8.com/color/96/affiliate-marketing.png",
            title: "Online Affiliation Services",
            description: "Monetize online content through affiliate marketing."
        },
        {
            image: "https://img.icons8.com/color/96/conference.png",
            title: "Admission Assistance",
            description: "An overview guidance for an admission process"
        },
        {
            image: "https://img.icons8.com/color/96/design.png",
            title: "Graphic Designing",
            description: "Helps in creating designs for Logos, Branding material"
        }
    ];

    return (
        <>
            <section className="relative bg-gray-100 py-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <div className="border-8 border-red-700 rounded-xl transform rotate-2 shadow-lg">
                            <img
                                src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg"
                                alt="Business Team"
                                className="w-full max-w-sm rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="bg-white/90 p-8 rounded-lg shadow-xl">
                        <h3 className="text-lg font-semibold text-gray-700">Welcome to</h3>
                        <h1 className="text-3xl md:text-4xl font-bold mt-2">
                            CREW CAPTIVATORS <br />
                            <span className="text-red-700">SOLUTIONS PVT. LTD.</span>
                        </h1>
                        <p className="mt-3 text-sm uppercase tracking-wide text-gray-600">
                            Vision of your dreams a corporate consultants
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We are a corporate consulting enterprise located in Naharlagun,
                            offering business development services to help you create a digital
                            environment with highly beneficial schemes for every business.
                        </p>
                        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-red-700 transition">
                            Know More
                        </button>
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="relative z-10 mt-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
                    <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg">Trusted Services</h4>
                        <p className="text-sm mt-2">
                            Vetted, reliable services with trust.
                        </p>
                    </div>
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg">24/7 Support</h4>
                        <p className="text-sm mt-2">+91 92334 95319</p>
                    </div>
                    <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-lg">Expert & Professional</h4>
                        <p className="text-sm mt-2">
                            Trusted, expert and professional services.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-red-700 font-bold text-lg uppercase tracking-wide">
                            About Us
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
                            We are IT Solution Experts here with <br />
                            <span className="text-red-700">1 years of experience</span>
                        </h2>
                        <div className="w-16 h-1 bg-red-700 mt-4"></div>

                        <p className="mt-6 text-gray-700 leading-relaxed">
                            Web designing is not just a profession, but a powerful passion for
                            our company. We strongly believe that the appearance of a website
                            leaves the first impression on visitors. Therefore, the smart design
                            of a website serves as the starting point.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We have a special team for website style who has been involved in
                            designing professional websites of all categories.
                        </p>

                        {/* Services List */}
                        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2">
                            {service.map((service, index) => (
                                <div key={index} className="flex items-center text-sm">
                                    <BsDot className="text-red-600 text-lg" />
                                    <span className="text-gray-800">{service}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 px-6 py-2 bg-black text-white rounded-full hover:bg-red-700 transition">
                            Know More
                        </button>
                    </div>

                    {/* Right Images */}
                    <div className="space-y-6">
                        <div className="relative">
                            <img
                                src="https://img.freepik.com/free-photo/smiling-businesswoman-working-with-colleagues_23-2148822263.jpg"
                                alt="Team 1"
                                className="rounded-xl shadow-lg"
                            />
                            <div className="absolute top-4 right-4 bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                                Crew Captivators <br /> Solutions Pvt. Ltd.
                            </div>
                        </div>
                        <img
                            src="https://img.freepik.com/free-photo/team-collaborating-office_23-2147805994.jpg"
                            alt="Team 2"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="relative w-full py-16 px-6 lg:px-24 bg-white text-center">
                {/* Header */}
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                    Services Overview
                </h2>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                    We run all kinds of services in form of <br />
                    <span className="text-red-700">Information & Technologies</span>
                </h1>

                {/* Slider Arrows */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer">
                    <span className="text-3xl">&#8249;</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                    <span className="text-3xl">&#8250;</span>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    <span className="h-2 w-2 rounded-full bg-black"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                </div>

                {/* View More Button */}
                <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                    View More
                </button>
            </section>
        </>
    )
}

export default Home