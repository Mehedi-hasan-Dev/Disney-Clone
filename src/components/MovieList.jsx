import React, { useEffect, useState, useRef } from 'react';
import MovieCard from './MovieCard';
import GlobalApi from './../services/GlobalApi'; 
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import HrMovideCard from './HrMovieCard';

export default function MovieList({ genreId,index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(); 
  const screenWidth = window.innerWidth; 

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = async () => {
    try {
      const gApi = await GlobalApi.getMovieByGenreId(genreId);
      setMovieList(gApi.data.results);
      console.log(gApi.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110; 
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110; 
  };

  return (
    <div className="relative w-full">
      <FaAngleLeft
        className={"text-white text-[30px] absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${index_%3==0?'mt-[100px]'} "}
        onClick={() => sliderLeft(elementRef.current)}
      />
      
      <div 
        className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-10' 
        ref={elementRef} 
      >
        {movieList.map((item, index) => (
          <>
         {index_%3==0?<HrMovideCard movie={item}/> :  <MovieCard key={index} movie={item}  />}
          </>
        ))}
      </div>
      
      <FaAngleRight
        className="text-white text-[30px] absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer {index_%3==0?'mt-[80px]'}"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
}
