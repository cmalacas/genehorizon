import React from 'react'

const Agent = ({ agent }) => {
  return (
    <div>
        <span className="text-sm flex h-4 inline-flex mr-2 relative">
          <span className="animate-ping absolute inline-flex h-full rounded-full"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 mr-2"></span>
          { agent } is online
        </span>
    </div>
  )
}

export default Agent