import React, { useState } from 'react'

function PriceSlider({ onPriceChange }) {
    const [priceRange, setPriceRange] = useState([0, 1000000]);

    function handlePriceChange(e) {
        const value = parseInt(e.target.value);
        setPriceRange([0, value]);
        onPriceChange([0, value]);
    };

    return (
        <div className='px-4'>
            <div className='flex flex-col mb-2 mt-6 gap-4'>
                <label 
                    htmlFor='price-range' 
                    className='text-white'
                >
                    Set Price Range: ${priceRange[1]}
                </label>
                <input 
                    type='range'
                    id='price-range'
                    min={0}
                    max={1000000}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className='w-full h-3 bg-white rounded-lg appearance-none cursor-pointer
                    # Webkit (Chrome, Safari) thumb styling
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:bg-[#ff9d2d]
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:hover:bg-[#fc9b2dae]

                    # Firefox thumb styling
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:bg-[#ff9d2d]
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:hover:bg-[#fc9b2dae]

                    # Webkit track styling
                    [&::-webkit-slider-runnable-track]:w-full
                    [&::-webkit-slider-runnable-track]:h-2
                    [&::-webkit-slider-runnable-track]:bg-white
                    [&::-webkit-slider-runnable-track]:rounded-lg

                    # Firefox track styling
                    [&::-moz-range-track]:w-full
                    [&::-moz-range-track]:h-2
                    [&::-moz-range-track]:bg-white
                    [&::-moz-range-track]:rounded-lg
                    '
                    />
            </div>
            <div className='flex justify-between text-sm text-[#d2d2d2]'>
                <span className='text-white font-semibold'>${priceRange[0].toLocaleString()}</span>
                <span className='text-white font-semibold'>${priceRange[1].toLocaleString()}</span>
            </div>
        </div>
    )
}

export default PriceSlider
