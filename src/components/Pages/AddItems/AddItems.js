import React from 'react';

const AddItems = () => {

    const handleAddItems = event => {
        event.preventDefault()

        const jerseyName = event.target.jerseyName.value
        const price = event.target.price.value
        const supplierName = event.target.supplierName.value
        const quantity = event.target.quantity.value
        const imgUrl = event.target.imgUrl.value

        const item = { jerseyName, price, supplierName, quantity, imgUrl }
        // console.log(jerseyName, price, supplierName, quantity, imgUrl);


        fetch('https://aqueous-forest-31171.herokuapp.com/items', {
            method: 'POST',
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
                                Add Items To Inventory!
                            </h1>
                        </div>
                        <form onSubmit={handleAddItems}>
                            <div className=''>
                                <input
                                    name="jerseyName"
                                    type="text"
                                    placeholder="Jersey Name"
                                    required
                                    className={
                                        "w-full p-2 text-primary border rounded-md outline-none text-base transition duration-150 ease-in-out mb-4"
                                    }
                                />
                                <input
                                    name="price"
                                    type="number"
                                    placeholder="Price"
                                    required
                                    className={
                                        "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                    }
                                />
                            </div>
                            <input
                                name="supplierName"
                                type="text"
                                placeholder="Supplier Name"
                                required
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="quantity"
                                type="number"
                                placeholder="Quantity"
                                required
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <input
                                name="imgUrl"
                                type="text"
                                placeholder="Image Link"
                                required
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <button
                                    className={
                                        "bg-gray-900 hover:bg-rose-700 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                                    }
                                    value="Login"
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </figure>
        </div>
    );
};

export default AddItems;