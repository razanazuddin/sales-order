import React, { useState, useEffect } from 'react';
import SalesOrderListDataService from '../services/SalesOrderListService.js';

import SalesOrderListFilter from './SalesOrderListFilter.jsx';

const SalesOrderList = () => {
  const [salesOrders, setSalesOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveSalesOrders();
  }, []);

  const retrieveSalesOrders = async () => {
    setLoading(true);
    await SalesOrderListDataService.getAll()
      .then((response) => {
        setSalesOrders(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <SalesOrderListFilter />
      {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Order number</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Customer's name</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Status</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Category</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Country</th>
                <th className="py-4 px-6 border-b border-gray-300 text-left">Created date</th>
              </tr>
            </thead>
            <tbody>
              {salesOrders && salesOrders.map((salesOrder, lindex) => (
                <tr key={lindex}>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.order_number}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.customer_name}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.status}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.category}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.country}</td>
                  <td className="py-4 px-6 border-b border-gray-300">{salesOrder.created_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
};

export default SalesOrderList;