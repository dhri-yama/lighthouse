import React from 'react'

const Card = ({link, name, desc}) => {
    const imgsrc=`//logo.clearbit.com/${link}?size=120`;
    console.log(imgsrc)
    


    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div style={{backgroundColor:"rgba(255,255,255,0.06)", backdropFilter: "blur(20px)"}}
                className=" h-64 rounded shadow-sm flex flex-col justify-around items-center">
            
                <div style={{backgroundColor:"rgba(255,255,255,0.06)", backdropFilter: "blur(40px)"}} 
                    className="w-24 h-24 rounded-full ">
                    <img src={imgsrc} style={{clipPath:"circle()"}} alt=""
                        className="w-24 h-24 object-cover"/>  
                </div>
                
                <div className="text-center text-white ">
                    <h2 className="text-lg ">{name}</h2>
                    <p className="italic text-sm px-6">{desc}</p>
                </div>

            </div>
        </a>
    )
}

export default Card
