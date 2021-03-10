import React from 'react';
import Card from './Card';


const Cardcontainer = ({resources,section}) => {
    const temp= resources.filter(resource=> resource.category===section)

    return (
        <div className="px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-auto items-center mx:8 md:mx-12 lg:mx-20 xl:mx-40">
            {
              temp.map(res => {
                return <Card key={res.link} link={res.link} name={res.name} desc={res.description} />})
            }
        </div>
    )
}

export default Cardcontainer;
