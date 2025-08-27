function ServiceCard({ image, title, description }) {
    return(
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="mx-auto mb-4 h-24 w-24 object-contain" />
            <h3 className="text-lg font-semibold text-red-600">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    )
}

export default ServiceCard;