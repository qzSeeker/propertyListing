import React from 'react'

function PropertyList({ filteredProperties }) {

    return (
        <div className='h-full w-full'>
            <div className='h-full w-full bg-[#fc9b2d6a] rounded-3xl overflow-scroll relative p-10'>
                <div className='bg-[#ff9d2d] w-full mb-20 rounded-xl py-6'>
                    <h1 className='text-3xl font-semibold text-center text-white'>Property List</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8'>
                {filteredProperties.map((property) => (
                        <div 
                            key={property.id}
                            className='bg-[#ffffff] border- border-[#ff9d2d] w-[24rem] h-[20rem] rounded-xl shadow-md flex flex-col overflow-hidden'
                        >
                            <img src={property.image}
                                className='h-48 shadow-md'
                            ></img>
                            <div className='text-[#ff9d2d] text-lg font-semibold mx-4 my-2'>{property.category}</div>
                            <div className='flex justify-between items-center m-4'>
                                <h1 className='bg-[#ff9d2d] text-white px-3 py-2 rounded-lg'>{property.title}</h1>
                                <p className='text-green-500'><span className='text-[#ff9d2d]'>Price:</span> ${property.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertyList;
