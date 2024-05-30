import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProviderContex';

const Transaction = () => {
  const [myData, setMyData] = useState({ description: '', amount: '', type: '' });
  const navigate = useNavigate();
  const { setData } = useContext(DataContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Description:', myData.description);
    console.log('Amount:', myData.amount);
    console.log('Type:', myData.type);
  
    setData(prevData => [...prevData, myData]);
    

    setMyData({ description: '', amount: '', type: '' });

    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Enter Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={myData.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Enter Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={myData.amount}
              onChange={handleChange}
              placeholder="Amount"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center">
              <label className={`mr-4 ${myData.type === 'expense' ? 'text-red-600' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={myData.type === 'expense'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Expense
              </label>
              <label className={`mr-4 ${myData.type === 'income' ? 'text-blue-600' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={myData.type === 'income'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Income
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <Link to="/" className="text-blue-500 hover:underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
