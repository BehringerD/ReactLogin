import React from 'react'
// import image files
import logo from "../assets/tempus-logo.svg"
import grid from "../assets/grid.svg"
const Images = () => {
  return (
    <div className="grid items-center xs:rounded-b-lg sm:rounded-b-lg md:rounded-b-lg lg:rounded-r-lg lg:rounded-l-none bg-[#161950] p-4 text-white">
        <div className="text-center flex flex-col items-center justify-center">
            <img src={logo} alt="" style={{'--image-url': `url(${grid})`}} className="center tempus_logo max-w-80 bg-center bg-no-repeat bg-[image:var(--image-url)]"/>
            <p className="tempus_text opacity-50 text-center">Közös küldetés</p>
        </div>
    </div>
  )
}

export default Images