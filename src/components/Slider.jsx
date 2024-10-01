import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
const screenWidth=window.innerWidth;

export default function Slider() {
  const [movie, setMovie] = useState({});
  const elementRef=useRef();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/157336?api_key=6abe04c43fb8e4a0e515c552004fcf54&append_to_response=images")
      .then(res => res.json())
      .then(data => setMovie(data));
  }, []);

  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }


  return (
    <div>
       <FaAngleLeft className='text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block' onClick={()=>sliderLeft(elementRef.current)} />
       <FaAngleRight className='text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer hidden md:block' onClick={()=>sliderRight(elementRef.current)} />
       
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}> 
      {movie.images && movie.images.backdrops ? (
        movie.images.backdrops.map((item, index) => (
          <img key={index} src={`${imageBaseUrl}${item.file_path}`} alt="Backdrop" className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 duration-200 ease-in' />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}
