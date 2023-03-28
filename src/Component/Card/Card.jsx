import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    const [showAll, setShowAll] = useState(false)
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
    const dataShowAll = () => {
        setShowAll(true);

    }
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
                    data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                    ></SingleData>)
                }
            </div>
            {
                !showAll && (<samp onClick={dataShowAll}>
                    <Button>See More</Button>
                </samp>)
            }
            <Modal></Modal>
        </div>
    );
};

export default Card;