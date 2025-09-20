import React, { useContext } from 'react'
import Button from '../component/ui/atom/button/Button'
import { AuthContextt } from '../context/AuthContext'

export default function Homepage() {
    const {logout} = useContext(AuthContextt)
  return (
    <div>
      <h1>Homepage</h1>
      <Button onClick={()=>logout()}>logout</Button>
    </div>
  )
}
