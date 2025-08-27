import React, { useEffect, useRef, useState } from 'react';
import {
    CheckCircle, ArrowRight, Phone, Shield, Clock,
    Award, Users, Zap, ChevronLeft, ChevronRight,
    Star, TrendingUp
} from 'lucide-react';

const Home = () => {
    const [isVisible, setIsVisible] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredService, setHoveredService] = useState(null);
    const observerRef = useRef();

    const services = [
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

    const featuredServices = [
        {
            image: "https://img.icons8.com/color/96/affiliate-marketing.png",
            title: "Online Affiliation Services",
            description: "Monetize online content through affiliate marketing.",
            gradient: "from-blue-500 to-purple-500",
            bgGradient: "from-blue-50 to-purple-50"
        },
        {
            image: "https://img.icons8.com/color/96/conference.png",
            title: "Admission Assistance",
            description: "An overview guidance for an admission process",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            image: "https://img.icons8.com/color/96/design.png",
            title: "Graphic Designing",
            description: "Helps in creating designs for Logos, Branding material",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            image: "https://img.icons8.com/color/96/smartphone.png",
            title: "App Development",
            description: "Custom mobile applications for Android & iOS platforms",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            image: "https://img.icons8.com/color/96/web.png",
            title: "Website Designing",
            description: "Professional responsive websites that drive results",
            gradient: "from-cyan-500 to-blue-500",
            bgGradient: "from-cyan-50 to-blue-50"
        },
        {
            image: "https://img.icons8.com/color/96/businessman.png",
            title: "IT Solutions",
            description: "Comprehensive technology solutions for your business",
            gradient: "from-gray-600 to-gray-800",
            bgGradient: "from-gray-50 to-slate-50"
        }
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredServices.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredServices.length / 3)) % Math.ceil(featuredServices.length / 3));
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-red-900 to-pink-900 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Dynamic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/40 to-black/60"></div>

                    {/* Floating particles */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Geometric patterns */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-64 h-64 bg-red-400 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mt-10 lg:mt-0 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div
                        id="hero-image"
                        data-animate
                        className={`flex justify-center transition-all duration-1000 ${isVisible['hero-image']
                                ? 'opacity-100 translate-x-0 rotate-0'
                                : 'opacity-0 -translate-x-10 -rotate-12'
                            }`}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-80"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg"
                                    alt="Business Team"
                                    className="w-full max-w-sm rounded-2xl"
                                />
                            </div>
                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full font-bold text-sm">
                                <Star className="inline w-4 h-4 mr-1" />
                                Trusted
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-full font-bold text-sm" style={{ animationDelay: '0.5s' }}>
                                <TrendingUp className="inline w-4 h-4 mr-1" />
                                Growing
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div
                        id="hero-content"
                        data-animate
                        className={`transition-all duration-1000 delay-300 ${isVisible['hero-content']
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <div className="bg-white/10 backdrop-blur-lg p-8 mb-25 lg:mb-0 rounded-3xl shadow-2xl border border-white/20">
                            <h3 className="text-lg font-semibold text-red-300 animate-pulse">Welcome to</h3>
                            <h1 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                CREW CAPTIVATORS
                                <br />
                                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                                    SOLUTIONS PVT. LTD.
                                </span>
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mt-4 animate-pulse"></div>

                            <p className="mt-4 text-sm uppercase tracking-wider text-red-300 font-semibold">
                                Vision of your dreams • Corporate consultants
                            </p>
                            <p className="mt-6 text-white/90 leading-relaxed text-lg">
                                We are a corporate consulting enterprise located in Naharlagun,
                                offering business development services to help you create a digital
                                environment with highly beneficial schemes for every business.
                            </p>
                            <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl font-bold flex items-center">
                                Know More
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-red-50">
                <div
                    id="feature-cards"
                    data-animate
                    className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible['feature-cards']
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-red-400/30 hover:scale-105 transition-transform duration-300 group">
                            <div className="flex items-center mb-3">
                                <Shield className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform" />
                                <h4 className="font-bold text-lg">Trusted Services</h4>
                            </div>
                            <p className="text-red-100">Vetted, reliable services with complete trust and transparency.</p>
                        </div>
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-600/30 hover:scale-105 transition-transform duration-300 group">
                            <div className="flex items-center mb-3">
                                <Clock className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform" />
                                <h4 className="font-bold text-lg">24/7 Support</h4>
                            </div>
                            <p className="text-gray-300">+91 92334 95319 • Always here when you need us</p>
                        </div>
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-red-400/30 hover:scale-105 transition-transform duration-300 group">
                            <div className="flex items-center mb-3">
                                <Award className="w-8 h-8 mr-3 group-hover:rotate-12 transition-transform" />
                                <h4 className="font-bold text-lg">Expert & Professional</h4>
                            </div>
                            <p className="text-red-100">Trusted, expert and professional services delivered excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="relative py-20 bg-gradient-to-br from-white via-red-50 to-pink-50 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
                    {/* Left Content */}
                    <div
                        id="about-content"
                        data-animate
                        className={`transition-all duration-1000 ${isVisible['about-content']
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="mb-6">
                            <h3 className="text-red-600 font-bold text-lg uppercase tracking-wide mb-2">
                                About Us
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                We are IT Solution Experts here with
                                <br />
                                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                    1+ years of experience
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-4"></div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Web designing is not just a profession, but a powerful passion for
                                our company. We strongly believe that the appearance of a website
                                leaves the first impression on visitors. Therefore, the smart design
                                of a website serves as the starting point.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                We have a special team for website style who has been involved in
                                designing professional websites of all categories.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="mt-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
                            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <Zap className="w-6 h-6 mr-2 text-red-500" />
                                Our Services
                            </h4>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center text-sm group hover:bg-red-50 p-2 rounded-lg transition-all duration-300"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-2xl font-bold flex items-center">
                            Learn More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Images */}
                    <div
                        id="about-images"
                        data-animate
                        className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible['about-images']
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 opacity-20"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/smiling-businesswoman-working-with-colleagues_23-2148822263.jpg"
                                    alt="Team 1"
                                    className="rounded-2xl w-full"
                                />
                                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="font-black text-lg">Crew Captivators</div>
                                        <div className="text-red-200 text-xs">Solutions Pvt. Ltd.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 to-red-500 rounded-3xl transform -translate-x-4 -translate-y-4 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 opacity-20"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/team-collaborating-office_23-2147805994.jpg"
                                    alt="Team 2"
                                    className="rounded-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
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

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div
                        id="services-header"
                        data-animate
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible['services-header']
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h3 className="text-xl font-semibold text-red-600 mb-2">
                            Services Overview
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            We run all kinds of services in form of
                            <br />
                            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                Information & Technologies
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto mt-6"></div>
                    </div>

                    {/* Services Carousel */}
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border border-gray-200"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border border-gray-200"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
                        </button>

                        {/* Cards Container */}
                        <div
                            id="services-cards"
                            data-animate
                            className={`grid grid-cols-1 md:grid-cols-3 gap-8 px-16 transition-all duration-1000 ${isVisible['services-cards']
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                        >
                            {featuredServices.slice(currentSlide * 3, currentSlide * 3 + 3).map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative transition-all duration-500 hover:scale-105"
                                    onMouseEnter={() => setHoveredService(index + currentSlide * 3)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    {/* Card background with gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transition-all duration-500 ${hoveredService === index + currentSlide * 3 ? 'scale-105' : 'scale-100'
                                        }`}></div>

                                    {/* Gradient border effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl p-0.5 transition-opacity duration-500 ${hoveredService === index + currentSlide * 3 ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="w-full h-full bg-white rounded-3xl"></div>
                                    </div>

                                    {/* Card content */}
                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 text-center">
                                        {/* Icon */}
                                        <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 shadow-lg transform transition-all duration-500 ${hoveredService === index + currentSlide * 3 ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                                            }`}>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-contain filter brightness-0 invert"
                                            />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                                            {service.description}
                                        </p>

                                        {/* Hover effect overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-3 mt-12">
                            {Array.from({ length: Math.ceil(featuredServices.length / 3) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                            ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* View More Button */}
                        <div className="text-center mt-12">
                            <button className="group px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-2xl font-bold flex items-center mx-auto">
                                View All Services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
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
                    id="home-cta"
                    data-animate
                    className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible['home-cta']
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
                        Join hundreds of satisfied clients who have transformed their businesses with our expert solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group px-8 py-4 bg-white text-red-800 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center">
                            <Phone className="mr-2 w-5 h-5" />
                            Call Now: +91 92334 95319
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-red-800 transition-all duration-300 hover:scale-105">
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;