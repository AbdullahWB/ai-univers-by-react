import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [uniqueId, setUniqueId] = useState(null)
    const [singleData, setSingleData] = useState({});

    const dataShowAll = () => {
        setShowAll(true);
    }


    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId])

    // console.log(singleData)

    useEffect(() => {
        const lodeData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools);
        }
        lodeData();
    }, [])


    // console.log(data)


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12'>
                {
                    data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                        setUniqueId={setUniqueId}
                    ></SingleData>)
                }
            </div>
            {
                !showAll && (<samp onClick={dataShowAll}>
                    <Button>See More</Button>
                </samp>)
            }
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Card;