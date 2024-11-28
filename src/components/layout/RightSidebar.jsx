import React, { useState } from 'react'
import { Filter } from 'lucide-react'
import PriceSlider from './PriceSlider';
import sampleProperties from '../dashboard/sampelProp';

function RightSidebar({ onFilterChange }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const categories = ["Apartment", "Villa", "House"];

    // Handle categories
    const handleCategoryToggle = (category) => {
        const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories, category];
        
        setSelectedCategories(newCategories);
        filterProperties(newCategories, priceRange);
    };

    // Handle price ranges
    const handlePriceChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
        filterProperties(selectedCategories, newPriceRange);
    };
    
    // Filterout properties
    const filterProperties = (categories, range) => {
        const filtered = sampleProperties.filter((property) =>
            property.price >= range[0] && property.price <= range[1] && (categories.length === 0 || categories.includes(property.category))
        );
        onFilterChange(filtered);
    };
    

    return (
        <div className='h-full w-[24rem] bg-[#fc9b2d6a] rounded-3xl p-3'>
            <div className='h-full w-full bg-[#ff9d2d] rounded-2xl'>
                <h1 className='text-xl gap-2 p-3 text-white font-semibold flex items-center'>
                    <Filter size={20}/>
                    Filters
                </h1>
                <div className=''>
                    <PriceSlider onPriceChange={handlePriceChange} />
                    <div className='mt-28 flex flex-col gap-4 p-4'>
                        <h1 className='text-xl p-3 text-white font-semibold text-start'>Categories</h1>
                        {categories.map(category => (
                            <div key={category} className='bg-white shadow-md rounded-lg px-3 py-2 flex justify-between items-center'>
                                <label 
                                    htmlFor={category}
                                    className='text-[#ff9d2d]'
                                    >
                                    {category}
                                </label>
                                <input 
                                    type='checkbox'
                                    id={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryToggle(category)}
                                ></input>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
