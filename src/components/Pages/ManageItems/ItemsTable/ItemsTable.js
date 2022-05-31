import React from 'react';
import { toast } from 'react-toastify';
import useInvItems from '../../../../hooks/useInvItems';


const ItemsTable = ({ invItem }) => {
    const { _id, jerseyName, price, supplierName, quantity, imgUrl } = invItem

    const [invItems, setInvItems] = useInvItems()

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            fetch(`https://aqueous-forest-31171.herokuapp.com/items/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item Deleted!')
                    const remaining = invItems.filter(item => item._id !== id)
                    setInvItems(remaining)
                })
        }
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left ">
                    <tbody>
                        <tr className="bg-white border-b ">
                            <th className="pl-6 pr-0 py-4 font-medium text-gray-900  ">
                                <img className='w-16 h-16' src={imgUrl} alt="" />
                            </th>
                            <th className="pl-6 pr-0 py-4 font-medium text-gray-900  ">
                                {jerseyName}
                            </th>
                            <td className="px-6 py-4">
                                {quantity}
                            </td>
                            <td className="px-6 py-4">
                                {supplierName}
                            </td>
                            <td className="px-6 py-4">
                                ${price}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleDeleteItem(_id)} className='hover:bg-rose-700 bg-gray-900 text-gray-50 px-6 py-1 rounded-lg'>Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemsTable;