import React from 'react';

const Footer = () => {
    return (
        <div>
            <div 
            className="bg-primary h-60 mt-8 flex flex-col ">
                
                <a href="" className="m-auto">
                    <img style={{clipPath:"circle()"}} className="w-16" 
                        src="//logo.clearbit.com/github.com/?size=120" alt=""/>
                </a>
                
                <p className="text-2xl text-white text-center mb-8"
                >Resources taken from  
                <a className="text-white hover:text-gray-600"
                    href="https://github.com/bradtraversy/design-resources-for-developers" rel="noreferrer" target="_blank">
                         Here </a></p>
                
            </div>
            
        </div>
    )
}

export default Footer;
