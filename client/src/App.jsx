import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const fetch = async () => {
    let res = await axios.get('http://localhost:3000/add', {withCredentials: true})
    console.log(res)
  }

  useEffect(() => {
    fetch()
  }, [])
  return (
    <div>
      Hello
    </div>
  )
}

export default App