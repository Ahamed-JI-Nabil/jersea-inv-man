import React from 'react';
import useInvItems from '../../../hooks/useInvItems';
import ItemsTable from './ItemsTable/ItemsTable';

const ManageItems = () => {

    const [invItems] = useInvItems([])


    return (
        <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs  uppercase  dar ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Supplier Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>

            </table>
            {
                invItems.map(invItem => <ItemsTable
                    key={invItem._id}
                    invItem={invItem}
                ></ItemsTable>)

            }
        </div>
    );
};

export default ManageItems;