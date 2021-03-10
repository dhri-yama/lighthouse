import React from 'react';

const Header = () => {
    return (
        <div style={{backgroundColor:"rgba(255,255,255,0.06)", backdropFilter: "blur(20px)"}} 
            className="h-28 flex flex-col justify-center ">
            <h1
                className="text-white text-3xl text-center">Design Resources for WebDevelopers
            </h1>
        </div>
    )
}

export default Header;
