import Image from 'next/image';
import React from 'react';

function Header() {
  return (
  <header className="object-contain text-gray-300">
    <div>
      <HeaderItem title='HOME' Icon={}/>
    </div>
      <Image src="hulu-clone/public/hulu.svg"
            width={200} height={100}/>
  </header>
  );
}

export default Header;
