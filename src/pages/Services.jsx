import ServiceCard from "../components/ServiceCard";
function Services() {
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
    )
}

export default Services;