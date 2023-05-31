const Shimmer = () => {
    return (
        <div className='restaurant-list flex flex-wrap gap-4'>
            {Array(10).fill("").map((item, index) => (<div key={index} className="card w-52 h-64 border-2 bg-gray-300 p-2 m-4 rounded-lg"></div>))}

        </div>
    )
}

export default Shimmer