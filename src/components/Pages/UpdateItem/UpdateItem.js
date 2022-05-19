import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateItem = () => {
    const { id } = useParams()

    const [invItems, setInvItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setInvItems(data))
    }, [])


    const handleUpdateItem = event => {
        event.preventDefault()
        const jerseyName = event.target.jerseyName.value
        const price = event.target.price.value
        const supplierName = event.target.supplierName.value
        const quantity = event.target.quantity.value
        const imgUrl = event.target.imgUrl.value

        const item = { jerseyName, price, supplierName, quantity, imgUrl }
        // console.log(jerseyName, price, supplierName, quantity, imgUrl);


        fetch(`http://localhost:5000/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                alert("Item added Successfully")
                event.target.reset()
            })
    }

    return (
        <div>
            <figure className="h-screen flex bg-gray-100">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                    <div className="text-primary m-6">
                        <div className='text-center mb-3'>
                        </div>
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-2xl font-medium text-primary mt-2 mb-6">
                                Update Item
                            </h1>
                        </div>
                        <div className='w-60 mx-auto my-6'>
                            <div className=''>
                                <img className='w-40 h-40 mx-auto' src={invItems.imgUrl} alt="" />
                                <h4 className='font-medium'>{invItems.jerseyName}</h4>
                                <p className='font-thin'>Supplier Name: {invItems.supplierName}</p>
                            </div>
                            <div className='flex justify-between'>
                                <h6 className='font-semibold'>Price: {invItems.price}</h6>
                                <h6 className='font-semibold mb-4'>Quantity: {invItems.quantity}</h6>
                            </div>
                            <form onSubmit={handleUpdateItem}>
                                <input
                                    name="quantity"
                                    type="number"
                                    placeholder="Quantity"
                                    required
                                    className={
                                        "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                    }
                                />
                            </form>

                            <div className='flex justify-evenly'>
                                <button className='bg-gray-900 text-gray-50 px-6 py-1 rounded-lg mt-4'>Delivered</button>
                                <button className='bg-gray-900 text-gray-50 px-6 py-1 rounded-lg mt-4'>Update</button>
                            </div>
                        </div>


                    </div>

                </div>
            </figure>
        </div>
    );
};

export default UpdateItem;