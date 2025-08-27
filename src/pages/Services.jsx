import { useEffect, useRef, useState } from 'react';
import {
    Home, Cpu, Smartphone, Palette, Users, Phone, Share2,
    Video, Car, Monitor, GraduationCap, Calculator,
    FileText, Link, Server
} from 'lucide-react';

const Services = () => {
    const [isVisible, setIsVisible] = useState({});
    const [hoveredCard, setHoveredCard] = useState(null);
    const observerRef = useRef();

    // Service icons mapping
    const serviceIcons = {
        "Interior Design": Home,
        "Drone Technology": Cpu,
        "App Development (Android & IOS)": Smartphone,
        "Graphic Designing": Palette,
        "Lead Generation": Users,
        "Tele Callers (BPO Services)": Phone,
        "Social Media Promotion": Share2,
        "Media Production": Video,
        "NEFA Cab Services": Car,
        "Website Designing": Monitor,
        "Admission Assistance": GraduationCap,
        "Tax & Accounts Consultant": Calculator,
        "Tender Bidding Services": FileText,
        "Online Affiliation Services": Link,
        "IT Solutions": Server
    };

    const servicesData = [
        {
            title: "Interior Design",
            items: [
                "Space Planning and Layout Design",
                "Concept Development and Design Themes",
                "Furniture and Fixture Selection",
                "Material and Finish Selection",
                "Custom Millwork and Cabinetry Design",
            ],
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            title: "Drone Technology",
            items: [
                "Target Audience Identification",
                "Content Marketing",
                "Email Marketing",
                "Social Media Marketing",
                "Search Engine Marketing (SEM)",
            ],
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            title: "App Development (Android & IOS)",
            items: [
                "Platform Selection",
                "Requirement Analysis and Planning",
                "User Experience (UX) and User Interface (UI) Design",
                "Development Framework and Tools",
                "Backend Development and APIs",
            ],
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            title: "Graphic Designing",
            items: [
                "Pre-Production Services",
                "Production Services",
                "Post-Production Services",
                "Digital Media Production",
                "Distribution and Delivery",
            ],
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            title: "Lead Generation",
            items: [
                "Target Audience Identification",
                "Lead Capture and Acquisition",
                "Content Marketing",
                "Social Media Marketing",
                "Lead Scoring and Qualification",
            ],
            gradient: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-50 to-purple-50"
        },
        {
            title: "Tele Callers (BPO Services)",
            items: [
                "Inbound Customer Support",
                "Outbound Sales and Marketing",
                "Lead Generation and Appointment Setting",
                "Customer Retention and Loyalty Programs",
                "Technical Support and Help Desk Services",
            ],
            gradient: "from-teal-500 to-blue-500",
            bgGradient: "from-teal-50 to-blue-50"
        },
        {
            title: "Social Media Promotion",
            items: [
                "Social Media Strategy Development",
                "Content Creation and Curation",
                "Community Management",
                "Paid Advertising Campaigns",
                "Influencer Partnerships and Collaborations",
            ],
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            title: "Media Production",
            items: [
                "Creative Conceptualization",
                "Scriptwriting & Storyboarding",
                "Pre-Production Planning",
                "Production & Filming",
                "Post-Production & Editing",
            ],
            gradient: "from-yellow-500 to-orange-500",
            bgGradient: "from-yellow-50 to-orange-50"
        },
        {
            title: "NEFA Cab Services",
            items: [
                "Taxi Booking",
                "Cab Fleet Management",
                "Driver Training and Safety",
                "Customer Support",
                "Route Optimization",
            ],
            gradient: "from-gray-600 to-gray-800",
            bgGradient: "from-gray-50 to-slate-50"
        },
        {
            title: "Website Designing",
            items: [
                "User Experience (UX) Design",
                "User Interface (UI) Design",
                "Responsive Design",
                "Visual Design",
                "Prototyping",
            ],
            gradient: "from-violet-500 to-indigo-500",
            bgGradient: "from-violet-50 to-indigo-50"
        },
        {
            title: "Admission Assistance",
            items: [
                "College/University Research",
                "Application Guidance",
                "Document Preparation",
                "Interview Preparation",
                "Financial Aid Assistance",
            ],
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50"
        },
        {
            title: "Tax & Accounts Consultant",
            items: [
                "Tax Planning",
                "Financial Reporting",
                "Audit Support",
                "Compliance Services",
                "Business Advisory",
            ],
            gradient: "from-amber-500 to-yellow-500",
            bgGradient: "from-amber-50 to-yellow-50"
        },
        {
            title: "Tender Bidding Services",
            items: [
                "Tender Identification",
                "Tender Documentation Review",
                "Bid Strategy Development",
                "Proposal Writing",
                "Bid Management",
            ],
            gradient: "from-red-500 to-pink-500",
            bgGradient: "from-red-50 to-pink-50"
        },
        {
            title: "Online Affiliation Services",
            items: [
                "Affiliate Network Management",
                "Affiliate Recruitment & Onboarding",
                "Commission Structure Design",
                "Performance Tracking & Reporting",
                "Creative Assets Development",
            ],
            gradient: "from-cyan-500 to-blue-500",
            bgGradient: "from-cyan-50 to-blue-50"
        },
        {
            title: "IT Solutions",
            items: [
                "Infrastructure Solutions",
                "Cybersecurity Solutions",
                "Servers (Physical / Cloud)",
                "Managed IT Services",
                "Networking",
            ],
            gradient: "from-slate-600 to-gray-700",
            bgGradient: "from-slate-50 to-gray-50"
        },
    ];

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach(section => observerRef.current.observe(section));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">
                {/* Dynamic background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900">
                    {/* Animated mesh gradient */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
                        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    {/* Floating geometric shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-bounce"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            >
                                <div className="w-3 h-3 bg-white/20 rotate-45 rounded-sm"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6">
                    <div className="mb-8">
                        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 animate-pulse">
                            Services
                        </h1>
                        <div className="flex justify-center space-x-4">
                            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-400 animate-pulse"></div>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                    <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide animate-pulse" style={{ animationDelay: '1.5s' }}>
                        Comprehensive Solutions for Your Business
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="relative py-20 bg-gradient-to-br from-white via-red-50 to-pink-50 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div
                    id="intro"
                    data-animate
                    className={`text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible['intro']
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="mb-8">
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-900 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Our Services
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        At <span className="font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Crew Captivators Solutions Pvt Ltd</span>,
                        we offer a comprehensive range of business development services to help you succeed in today's digital world.
                        Our team of experts will work with you to create a customized plan that meets your unique needs and goals.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
                {/* Background patterns */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-red-400 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, idx) => {
                            const IconComponent = serviceIcons[service.title];
                            const isCardVisible = isVisible[`service-${idx}`];

                            return (
                                <div
                                    key={idx}
                                    id={`service-${idx}`}
                                    data-animate
                                    className={`group relative transition-all duration-700 delay-${idx * 50} ${isCardVisible
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-10 scale-95'
                                        }`}
                                    onMouseEnter={() => setHoveredCard(idx)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Card background with gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transform transition-all duration-500 ${hoveredCard === idx ? 'scale-105 rotate-1' : 'scale-100'
                                        }`}></div>

                                    {/* Gradient border effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl p-0.5 transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="w-full h-full bg-white rounded-3xl"></div>
                                    </div>

                                    {/* Card content */}
                                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
                                        {/* Icon and Title */}
                                        <div className="flex items-center mb-6">
                                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg transform transition-all duration-500 ${hoveredCard === idx ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                                                }`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 ml-4 group-hover:text-gray-900 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Service items */}
                                        <ul className="space-y-3">
                                            {service.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={`flex items-start transition-all duration-300 delay-${i * 100} ${hoveredCard === idx ? 'translate-x-2' : 'translate-x-0'
                                                        }`}
                                                >
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 mr-3 flex-shrink-0 transition-transform duration-300 ${hoveredCard === idx ? 'scale-125' : 'scale-100'
                                                        }`}></div>
                                                    <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Hover effect overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-20 bg-gradient-to-r from-red-900 via-red-800 to-pink-800 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-pink-900/90"></div>
                    {[...Array(100)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${1 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div
                    id="services-cta"
                    data-animate
                    className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible['services-cta']
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's Bring Your Vision to Life
                    </h2>
                    <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
                        Ready to transform your business with our comprehensive services?
                        Our expert team is here to deliver solutions that drive real results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-red-800 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                            Get Started Today
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-red-800 transition-all duration-300 hover:scale-105">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;