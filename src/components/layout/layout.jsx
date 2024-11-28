import React, { useState } from 'react'
import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'
import sampleProperties from '../dashboard/sampelProp'
import PropertyList from '../dashboard/PropertyLists';

function Layout() {
    const [filteredProperties, setFilteredProperties] = useState(sampleProperties);

    const handleFilterChange = (newFilteredProperties) => {
        setFilteredProperties(newFilteredProperties);
    };
    return (
        <div className='h-full flex justify-between gap-4'>
            <Sidebar/>
            <PropertyList filteredProperties={filteredProperties} />
            <RightSidebar sampleProperties={sampleProperties} onFilterChange={handleFilterChange} />
        </div>
    )
}

export default Layout
