import { useEffect, useRef, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState({});
    const observerRef = useRef();

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
                {/* Background with parallax effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-pink-900/30 z-10"></div>
                    <img
                        src="https://img.freepik.com/free-photo/top-view-workspace-with-laptop-coffee-plant_23-2148430843.jpg"
                        alt="About Us Banner"
                        className="w-full h-full object-cover scale-110 animate-pulse"
                        style={{ animationDuration: '4s' }}
                    />
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/40 to-black/60 animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Hero Text */}
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-pulse">
                        About Us
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto animate-pulse"></div>
                    <p className="text-xl md:text-2xl text-white/90 mt-6 font-light tracking-wide animate-pulse" style={{ animationDelay: '0.5s' }}>
                        Discover Our Journey
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Company Header */}
            <section className="relative py-20 bg-gradient-to-br from-white via-red-50 to-pink-50 overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div
                    id="company-header"
                    data-animate
                    className={`text-center transition-all duration-1000 ${isVisible['company-header']
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="inline-block">
                        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-900 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            CCS
                        </h1>
                        <div className="w-full h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4"></div>
                    </div>
                    <p className="text-2xl md:text-3xl text-gray-700 font-light tracking-wide">
                        Business Development Services
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-red-200 to-pink-200 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-red-300 to-pink-300 rounded-full opacity-15 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                        {/* Image */}
                        <div
                            id="mission-image"
                            data-animate
                            className={`relative group transition-all duration-1000 ${isVisible['mission-image']
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-16'
                                }`}
                        >
                            <div className="absolute inset-0 transform translate-x-6 translate-y-6 bg-gradient-to-br from-red-900 via-red-600 to-pink-400 rounded-3xl -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                                    alt="Team collaborating with sticky notes"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Mission Text */}
                        <div
                            id="mission-text"
                            data-animate
                            className={`transition-all duration-1000 delay-200 ${isVisible['mission-text']
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-16'
                                }`}
                        >
                            <div className="mb-6">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent mb-2">
                                    Our Mission
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                            </div>
                            <div className="relative">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    At Crew Captivators Solutions Pvt. Ltd., we aim to help businesses grow
                                    and succeed in a competitive digital environment. Our team of expert
                                    consultants provides personalized solutions to ensure that your business
                                    benefits from highly effective schemes. We specialize in business
                                    development services that help increase your online presence and drive
                                    more traffic to your website. Let us help you take your business to the
                                    next level.
                                </p>
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-pink-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="relative py-20 bg-gradient-to-bl from-pink-50 via-white to-red-50 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                        {/* Purpose Text */}
                        <div
                            id="purpose-text"
                            data-animate
                            className={`lg:order-1 transition-all duration-1000 ${isVisible['purpose-text']
                                    ? 'opacity-100 -translate-x-0'
                                    : 'opacity-0 -translate-x-16'
                                }`}
                        >
                            <div className="mb-6">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-800 to-gray-900 bg-clip-text text-transparent mb-2">
                                    Our Purpose
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                            </div>
                            <div className="relative">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    At Crew Captivators Solutions Pvt. Ltd., our purpose is to provide
                                    innovative solutions that help businesses achieve their goals. Our
                                    team of experts is dedicated to providing personalized services that
                                    are tailored to your specific needs. We believe that every business
                                    is unique, and we work hard to ensure that our solutions are designed
                                    to meet your specific requirements. Whether you need help with digital
                                    marketing, web development, or other business development services, we
                                    are here to help you succeed.
                                </p>
                                <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-pink-400 to-red-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            id="purpose-image"
                            data-animate
                            className={`lg:order-2 relative group transition-all duration-1000 delay-200 ${isVisible['purpose-image']
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-16'
                                }`}
                        >
                            <div className="absolute inset-0 transform -translate-x-6 -translate-y-6 bg-gradient-to-tl from-pink-400 via-red-600 to-red-900 rounded-3xl -z-10 group-hover:-translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/group-people-working-together-project_23-2148946402.jpg"
                                    alt="Team collaborating in office"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative py-20 bg-gradient-to-br from-red-50 via-pink-50 to-white overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-200 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                        {/* Image */}
                        <div
                            id="story-image"
                            data-animate
                            className={`relative group transition-all duration-1000 ${isVisible['story-image']
                                    ? 'opacity-100 translate-x-0 rotate-0'
                                    : 'opacity-0 -translate-x-16 -rotate-2'
                                }`}
                        >
                            <div className="absolute inset-0 transform translate-x-6 translate-y-6 bg-gradient-to-br from-red-900 via-pink-600 to-red-400 rounded-3xl -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                                    alt="Team meeting collaboration"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Story Text */}
                        <div
                            id="story-text"
                            data-animate
                            className={`transition-all duration-1000 delay-300 ${isVisible['story-text']
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-16'
                                }`}
                        >
                            <div className="mb-6">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-700 to-pink-600 bg-clip-text text-transparent mb-2">
                                    Our Story
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                            </div>
                            <div className="relative">
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Crew Captivators Solutions Pvt. Ltd. was founded with a vision to help
                                    businesses succeed in a digital world. Our team of experienced
                                    professionals has a deep understanding of the challenges that
                                    businesses face in today's competitive market. We have worked with
                                    businesses of all sizes and industries, and our success is a testament
                                    to our commitment to excellence and customer satisfaction. We are proud
                                    to have helped businesses achieve their goals and look forward to
                                    helping you succeed too.
                                </p>
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-pink-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-20 bg-gradient-to-r from-red-900 via-red-800 to-pink-800 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-pink-900/90"></div>
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
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
                    id="cta"
                    data-animate
                    className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible['cta']
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
                        Let's work together to take your business to the next level
                    </p>
                    <button className="px-12 py-4 bg-white text-red-800 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                        Contact Us Today
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;