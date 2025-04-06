import React from 'react'

const SkeletonLoader = ({count = 5}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {Array.from({length:count}).map((_,idx)=>(
            <div key={idx} className="border overflow-hidden shadow-sm animate-pulse">
               <div className="w-full h-52 bg-gray-300"></div>
               <div className="p-4">
               <div className="h-5 w-32 bg-gray-300 mb-2"></div>
              <div className="h-4 w-20 bg-gray-300 mb-1"></div>
              <div className="h-3 w-16 bg-gray-300"></div>
             </div>
            <div className="h-10 bg-gray-300"></div>
          </div>
        ))}
    </div>
  )
}
export default SkeletonLoader;