import React from 'react'

const Home = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
      <div className="w-full bg-amber-400 text-white  px-10 py-3 flex items-center justify-between">
        <div className="flex flex-col g">
          <h5 className='text-sm font-semibold'>Update KYC Information</h5>
          <p className='text-text-50 text-sm'>Submit your KYC information to unlock the rest of paytron features.</p>
        </div>

        <div>
          <button className='py-2 px-4 bg-white text-text-900 text-sm rounded-full'>Update KYC</button>
        </div>
      </div>

      <div className="px-10 w-full">

      <div className="text-xl font-light">Welcome back <span className='font-normal'>, KD constrcutions 👋🏾</span></div>
      </div>
    </div>
  )
}

export default Home