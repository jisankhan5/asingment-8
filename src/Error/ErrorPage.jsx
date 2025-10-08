import React from 'react';
import error from "../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <img className='w-[500px] h-[500px]' src={error} alt="" /> 
           <h1 className='font-semibold text-5xl'>Oops, page not found!</h1>
           <p className='text-[#627382] text-2xl'>The page you are looking for is not available.</p>
        </div>
    );
};

export default ErrorPage;