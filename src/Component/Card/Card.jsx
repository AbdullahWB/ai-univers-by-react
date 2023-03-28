import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const lodeData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const data = await res.json();
            // console.log(data.data.tools);
            setData(data.data.tools);
        }
        lodeData();
    }, [])
    // console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12'>
                {
                    // data.map(singleData => {
                    //     console.log(singleData)
                    //     return <SingleData
                    //         key={singleData.id}
                    //         singleData={singleData}
                    //     ></SingleData>
                    // })
                }
                {
                    data.map((singleData) => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                    ></SingleData>)
                }
            </div>
        </div>
    );
};

export default Card;