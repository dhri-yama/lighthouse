import React from 'react';

const About = () => {
    return (
        <div > 
            <div>
                <img src={process.env.PUBLIC_URL+ '/assets/images/about-background.jpg'} 
                    alt="about section"
                    className="absolute h-screen w-screen object-cover object-center"
                />
                <div className=" absolute h-screen w-screen insert-y-0 bg-gray-900 bg-opacity-50 max-w-full"></div>
                <h1 
                    className="px-6 py-4 text-6xl font-black relative top inset-0 text-white z-2 lg:px-16"
                >About</h1>
                <div
                className="relative z-10 bg-gray-100 w-4/5 mx-auto mt-4 rounded
                            lg:flex lg:flex-row lg:px-4">
                    <img src={process.env.PUBLIC_URL+ '/assets/images/potrait.jpg'} alt="about section"
                        className="mx-auto object-center object-cover w-60 lg:w-96 " style={{clipPath:"circle()" }}
                    />
                    <div className="lg:py-8 lg:pl-8 lg:pr-4" >
                        <h2 className="text-center text-4xl"> Manish Rawal</h2>
                        <p className="text-md px-8 mt-4 pb-8 lg:pl-4 lg:pr-2" 
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Veritatis quos culpa distinctio porro iusto dolorum sunt voluptas necessitatibus
                            placeat dolore iure similique tempore suscipit eveniet, adipisci nihil modi quod. 
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Veritatis quos culpa distinctio porro iusto dolorum sunt voluptas necessitatibus
                            placeat dolore iure similique tempore suscipit eveniet, adipisci nihil modi 
                            quodLorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Veritatis quos culpa distinctio porro iusto dolorum sunt voluptas necessitatibus
                           </p>

                    </div>
                    
                </div>
                
            </div>
            
            
        </div>
    )
}

export default About;
