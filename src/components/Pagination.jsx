import React from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = ({ currentPage, totalPages, handleNext, handlePrev }) => {
  return (
    <div className='bg-gray-400 p-4 m-8 flex justify-center font-bold hover:cursor-pointer'>
        <div 
            className={`px-8 ${currentPage === 1 ? 'text-gray-500' : ''}`} 
            onClick={handlePrev}
            style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
        >
            <SlArrowLeft />
        </div>
        <div>{currentPage}</div>
        <div 
            className={`px-8 ${currentPage === totalPages ? 'text-gray-500' : ''}`} 
            onClick={handleNext}
            style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
        >
            <SlArrowRight />
        </div>
    </div>
  )
}

export default Pagination;
