import React from 'react';

const LastPortion = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className='flex items-start justify-evenly w-full mt-5'>
        <div className='bg-slate-100 shadow-lg w-[45%] pl-2 rounded-sm'>
          <h2 className='font-bold text-lg text-red-700 bg-slate-100 z-10 sticky top-0 pb-2'>Expense</h2>
          {data.map(e => 
            e.type === 'expense' && (
              <div key={e.description} className='w-[95%] ml-2 mt-2 mb-2 bg-red-200 p-2 flex items-center justify-between rounded-md'>
                <h3>{e.description}</h3>
                <h3>Rs.{e.amount}</h3>
              </div>
            )
          )}
        </div>

        <div className='bg-slate-100 shadow-lg w-[45%] pl-2 rounded-sm'>
          <h2 className='font-bold text-lg text-blue-700 bg-slate-100 z-10 sticky top-0 pb-2'>Income</h2>
          {data.map(e => 
            e.type === 'income' && (
              <div key={e.description} className='w-[95%] ml-2 mt-2 p-2 mb-2 bg-blue-200 flex items-center justify-between rounded-md'>
                <h3>{e.description}</h3>
                <h3>Rs.{e.amount}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default LastPortion;
