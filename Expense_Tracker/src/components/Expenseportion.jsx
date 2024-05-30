import React, { useEffect, useState } from 'react';

const Expenseportion = ({ data }) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  // Calculate total expense and total income
  useEffect(() => {
    let expense = 0;
    let income = 0;

    data.forEach(item => {
      if (item.type === 'expense') {
        expense += parseFloat(item.amount);
      } else if (item.type === 'income') {
        income += parseFloat(item.amount);
      }
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [data]);

  // Calculate balance
  const balance = totalIncome - totalExpense;

  return (
    <div className='w-1/2 mt-10 h-auto p-4 flex flex-col items-center'>
      <h1 className='font-semibold opacity-70 text-lg'>Total balance Rs. {balance}</h1>
      <div className='w-full text-center mt-5'>
        <h1 className='font-bold text-xl'>Rs. {totalExpense}</h1>
        <h3 className='font-semibold text-sm opacity-50'>Total Expense</h3>
      </div>
      <div className='w-full text-center mt-5'>
        <h1 className='font-bold text-xl'>Rs. {totalIncome}</h1>
        <h3 className='font-semibold text-sm opacity-50'>Total Income</h3>
      </div>
    </div>
  );
};

export default Expenseportion;
