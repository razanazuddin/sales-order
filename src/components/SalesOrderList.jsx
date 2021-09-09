import React, { useState, useEffect } from 'react';
import SalesOrderListDataService from '../services/SalesOrderListService.js';

import SalesOrderListFilter from './SalesOrderListFilter.jsx';

const SalesOrderList = () => {
  const [salesOrders, setSalesOrders] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
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
      {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="table-auto w-full my-4">
            <thead>
              <tr>
                <th colSpan="5" className="text-left">
                  <h2>Sales Order</h2>
                </th>
                <th className="text-right">
                  <button
                    className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
                    onClick={() => setShowFilters(true)}
                  >
                    Filter list
                  </button>
                </th>
              </tr>
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
      <SalesOrderListFilter show={showFilters} onClose={() => setShowFilters(false)} />
    </div>
  );
};

export default SalesOrderList;