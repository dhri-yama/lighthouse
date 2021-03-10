import React from 'react';

const Home = () => {
    return (
        <div style={{backgroundColor:"rgba(255,255,255,0.06)", backdropFilter: "blur(20px)"}}
            className="h-screen my-8 md:mx-16 xl:mx-32 flex flex-col md:flex-row-reverse justify-center items-center">
               <div className="transform md:-translate-x-16">
                    <h1 className="text-7xl lg:text-8xl my-6 text-white text-center transform md:-translate-y-12 font-PoiretOne"
                    >Lighthouse</h1>    
                    <h2 className="text-center lg:text-xl px-24 md:px-2 lg:px-4 font-light font-mono text-white text-lg">
                        A Curated list of design and UI resources from stock photos, illustrations, web templates, CSS Libraries, UI libraries and much more
                        </h2>
               </div>
                <img src={process.env.PUBLIC_URL + '/assets/saly-1.svg'} alt=""
                    className="w-3/5 object-cover "/>
            
        </div>
    )
}

export default Home;
