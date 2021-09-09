import React, { useState, useEffect } from 'react';

const SalesOrderListFilter = (props) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    country: ''
  })

  if (!props.show) { return null; }

  const applyFilters = (e) => {
    e.preventDefault();
    props.onApply(formData);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Filters
                </h3>
                <p>Select criteria filter in listing</p>
                <div className="mt-2">
                  <form id="filterForm" className="mt-4 space-y-4">
                    <div className="grid grid-cols-6">
                      <p>Created date</p>
                      <div className="col-span-5">
                        Display range from
                        <input type="date" className="mx-2 border rounded-md" />
                        to
                        <input type="date" className="mx-2 border rounded-md" />
                      </div>
                    </div>
                    <div className="grid grid-cols-6">
                      <p>Customer name</p>
                      <div className="col-span-5">
                        <input
                          type="text"
                          className="border rounded-md"
                          name="customer_name"
                          value={formData.customer_name}
                          onChange={e => setFormData({ ...formData, customer_name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-6">
                      <p>Status</p>
                      <div>
                        <input id="status_all" type="checkbox" name="status" className="rounded mr-2" />
                        <label htmlFor="status_all">All</label>
                      </div>
                      <div>
                        <input id="status_open" type="checkbox" name="status" className="rounded mr-2" />
                        <label htmlFor="status_open">Open</label>
                      </div>
                      <div>
                        <input id="status_processing" type="checkbox" name="status" className="rounded mr-2" />
                        <label htmlFor="status_processing">Processing</label>
                      </div>
                      <div>
                        <input id="status_accepted" type="checkbox" name="status" className="rounded mr-2" />
                        <label htmlFor="status_accepted">Accepted</label>
                      </div>
                      <div>
                        <input id="status_rejected" type="checkbox" name="status" className="rounded mr-2" />
                        <label htmlFor="status_rejected">Rejected</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-6">
                      <p>Category</p>
                      <div>
                        <input id="category_all" type="checkbox" name="category" className="rounded mr-2" />
                        <label htmlFor="category_all">All</label>
                      </div>
                      <div>
                        <input id="category_electronics" type="checkbox" name="category" className="rounded mr-2" />
                        <label htmlFor="category_electronics">Electronics</label>
                      </div>
                      <div>
                        <input id="category_furniture" type="checkbox" name="category" className="rounded mr-2" />
                        <label htmlFor="category_furniture">Furniture</label>
                      </div>
                      <div>
                        <input id="category_others" type="checkbox" name="category" className="rounded mr-2" />
                        <label htmlFor="category_others">Others</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-6">
                      <p>Country</p>
                      <div className="col-span-5">
                        <input
                          type="text"
                          className="border rounded-md"
                          name="country"
                          value={formData.country}
                          onChange={e => setFormData({ ...formData, country: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button type="reset" className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white focus:outline-black">
                        Reset
                      </button>
                      <div className="space-x-2">
                        <button
                          className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
                          onClick={applyFilters}
                        >
                          Apply
                        </button>
                        <button
                          className="px-4 py-2 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
                          onClick={props.onClose}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderListFilter;