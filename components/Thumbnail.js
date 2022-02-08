import React from 'react';
import Image from 'next/image';
import {ThumbUpIcon} from '@heroicons/react/outline';
import {forwardRef} from 'react';

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
  <div ref={ref} className="p-2 group cursor-pointer transition ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
      src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
      layout = "responsive"
        width={1920}
        height={1080}
      />
      <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.original_name || result.title}</h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} • `}{" "}
            {result.release_date || result.first_air_date} • {" "}
            <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
          </p>
      </div>
  </div>    
  );
}
)
export default Thumbnail;
