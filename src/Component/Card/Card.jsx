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
    console.log(data)
    return (
        <div>
            {
                data.map(singleData => {
                    console.log(singleData)
                    return <SingleData></SingleData>
                })
            }
        </div>
    );
};

export default Card;