import React from 'react'
import { useRouter } from 'next/router'

const post = () => {
    const router = useRouter()
  return (
    <div>post 
        {router.query.id}
    </div>  
    
    )
}

export default post