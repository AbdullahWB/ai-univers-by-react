import React from 'react';

const Modal = (props) => {
    // console.log(props.singleData)
    const { description, features, image_link, input_output_examples
        , integrations, pricing, tool_name } = props.singleData;
    console.log(input_output_examples ? input_output_examples[0].input : '')
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex justify-between flex-row-reverse'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={image_link && image_link[0]} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{input_output_examples ? input_output_examples[0].input : ''}</h2>
                                <p>{input_output_examples ? input_output_examples[0].output : ''}</p>
                            </div>
                        </div>


                        <div className="card p-5 w-96 bg-secondary text-neutral border-primary border-2">
                            <div className="card-body p-0">
                                <h2 className="text-left font-bold text-2xl mb-3">{description}</h2>
                                <div className="card-actions justify-between">
                                    <div>
                                        <h1 className='font-bold text-2xl text-left'>Features</h1>
                                        {
                                            features && Object.values(features || {}).map((value) => <p className='text-left'>{value.feature_name ? value.feature_name : 'not found'}</p>)
                                        }
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-2xl'>Integrations</h1>
                                        {
                                            integrations && integrations.map((integration) => <p className='text-left'>{integration ? integration : "not found"}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-primary text-white">OK</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;