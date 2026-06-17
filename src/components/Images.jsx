import React from 'react'
// import image files
import logo from "../assets/tempus-logo.svg"
import grid from "../assets/grid.svg"

const Images = () => {
  return (
    <div className="overflow-clip grid items-center rounded-b-lg 2xs:rounded-b-lg xs:rounded-b-lg sm:rounded-b-lg md:rounded-b-lg lg:rounded-r-lg lg:rounded-l-none bg-[#161950] p-4 text-white">
        <div className=" relative text-center flex flex-col items-center justify-center">
            <img src={logo} alt="" className="center tempus_logo max-w-80 bg-center "/>
            <p className="tempus_text opacity-50 text-center">Közös küldetés</p>
            <img src={grid} style={{transform: "rotate(180deg)"}} alt="" className="absolute bottom-4 left-6  object-cover"/>
            <img src={grid} alt="" className="absolute top-4 right-6  object-cover"/>
        </div>
    </div>
  )
}

export default Images