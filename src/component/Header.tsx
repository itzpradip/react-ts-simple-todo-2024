import React, { ReactNode } from 'react'

type HeaderType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Header = ({image, children}: HeaderType) => {
  return (
    <header>
      <img {...image} /* src={image.src} alt={image.alt} */ />
      {children}
    </header>
  )
}

export default Header