import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateItem = () => {
    const { id } = useParams()

    const [invItems, setInvItems] = useState([])

    const url = `http://localhost:5000/items/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setInvItems(data))
    }, [])

    const { _id, jerseyName, price, supplierName, quantity, imgUrl } = invItems
    const quantityRef = useRef()


    const handleUpdateQuantity = event => {
        event.preventDefault()

        const quantity = quantityRef.current.value
        const updateQuantity = parseInt(+invItems.quantity) + parseInt(quantity)

        const updatedQuantity = { _id, jerseyName, price, supplierName, quantity: updateQuantity, imgUrl }
        setInvItems(updatedQuantity)

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity),
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset()
            })
    }

    const handleDeliveredItem = event => {
        event.preventDefault()

        const updateQuantity = parseInt(+invItems.quantity) - 1

        const updatedQuantity = { _id, jerseyName, price, supplierName, quantity: updateQuantity, imgUrl }
        setInvItems(updatedQuantity)

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity),
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
                                <img className='w-40 h-40 mx-auto' src={imgUrl} alt="" />
                                <h4 className='font-medium'>{jerseyName}</h4>
                                <p className='font-thin'>Supplier Name: {supplierName}</p>
                            </div>
                            <div className='flex justify-between'>
                                <h6 className='font-semibold'>Price: {invItems.price}</h6>
                                <h6 className='font-semibold mb-4'>Quantity: {quantity}</h6>
                            </div>
                            <form onSubmit={handleUpdateQuantity}>
                                <input
                                    name="quantity"
                                    type="number"
                                    ref={quantityRef}
                                    placeholder="Quantity"
                                    required
                                    className={
                                        "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                    }
                                />
                                <div className='flex justify-center'>
                                    <button className='bg-gray-900 text-gray-50 px-8 py-1 rounded-lg mt-4 mb-4'>Update Quantity</button>
                                </div>
                            </form>

                            <div className='flex justify-center'>
                                <button onClick={handleDeliveredItem} className='bg-gray-900 text-gray-50 px-14 py-1 rounded-lg mt-4'>Delivered</button>
                            </div>
                        </div>


                    </div>

                </div>
            </figure>
        </div>
    );
};

export default UpdateItem;