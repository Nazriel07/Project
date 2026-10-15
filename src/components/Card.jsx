const Card = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-md p-6 transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card