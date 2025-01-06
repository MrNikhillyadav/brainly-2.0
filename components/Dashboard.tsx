"use client"

import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { ShareIcon } from '../components/icons/ShareIcon';
import { PlusIcon } from '../components/icons/PlusIcon';
import { Sidebar } from '../components/ui/Sidebar';
import { CreateContentModal } from '../components/ui/CreateContentModal'

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className=' flex bg-slate-100  '>
      <CreateContentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Left-content */}
      <Sidebar/>

      {/* Right-Content */}
        <div className=' w-full h-full min-h-screen flex flex-col p-10'>

              {/* share and add button */}
              <div className='flex items-center mb-8  p-2 justify-between'>
                <div className='text-3xl text-center font-bold'>All Notes</div>
                <div className='flex  gap-4  '>
                  <Button  variant='secondary' title='Share Brain' size='md' startIcon={<ShareIcon size='md'/>} />
                  <Button onClick={() => setIsModalOpen(true)} variant='primary' title='Add Content' size='md'  startIcon={<PlusIcon size='md'/>}/>
                </div>
              </div>

              {/* cards */}
              <div className=' flex flex-wrap gap-6 p-2 '>
                {/* { contents.map(({title,link,type}) => (
                    <Card 
                      key={title}
                      type={type} 
                      title={title} 
                      link={link} 
                    />
                ))} */}

              </div>
             
      </div>

    </div>
  )
}

