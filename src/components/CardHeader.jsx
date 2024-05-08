import React from 'react';
import { BiHome } from 'react-icons/bi';

const FlashcardBanner = () => {
  return (
    <div className=" text-white flex  flex-col  h-20 rounded-lg  justify-between"> 
     <div className='flex flex-start mt-5 ml-10'>
      <span className="mr-2 text-sm text-black flex items-center">
        <BiHome /> <p>{`> Mathematics > Relation and Function`}</p> 
      </span> 
      </div>
      <span className="text-xl font-bold text-blue-600 pl-11">Relations and Functions (Mathematics)</span>
    </div>
  );
};

export default FlashcardBanner;
