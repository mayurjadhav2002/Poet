import { ScrollArea } from '@radix-ui/themes'
import React from 'react'

function HomePage() {
  return (
    <div className='w-full'>
      <ScrollArea type="always" scrollbars="vertical" className='w-full p-4  ' style={{height: "100vh"}} >
        {[...Array(100)].map((_, i) => (
          <div key={i} className='h-20  border-b'>
            Item {i}
          </div>
        ))}
        
</ScrollArea>
    </div>
  )
}

export default HomePage