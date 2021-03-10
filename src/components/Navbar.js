import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" h-16 mb-4"
        style={{backgroundColor:"rgba(255,255,255,0.06)", backdropFilter: "blur(20px)"}}>
            <div className="h-16 mx-0 xl:mx-40 text-white font-thin flex justify-center items-center">
                <Link to="/uigraphics">UI Graphics</Link>
                <h1 className="mx-2 lg:mx-4" > | </h1>
                <Link to="/fonts">Fonts</Link>
                <h1 className="mx-2 lg:mx-4" > | </h1>
                <Link to="/images-videos">Images and Videos</Link>
                <h1 className="mx-2  lg:mx-4" > | </h1>
                <Link to="/designinspiration">Design Inspiration</Link>
                <h1 className="mx-2  lg:mx-4" > | </h1>
                <Link to="/cssanimation">CSS Animation</Link>
                <h1 className="mx-2  lg:mx-4" > | </h1>
                <Link to="/jsanimation">JS Animation</Link>
                <h1 className="mx-2  lg:mx-4" > | </h1>
                <Link to="/templates">Templates</Link>
            </div>
            
        </div>
    )
}

export default Navbar;
