import React, { useState } from 'react';
import './Dropdown.css'
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <button className='dropdown'>Filter By</button>
    );
};

export default Dropdown;