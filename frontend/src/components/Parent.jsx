import React from 'react'
import Childs from './Childs'
const Parent = () => {
  return (
    <div>
      <Childs name="Tharru" age={18}
      marks={[57,69,88,78,99]}
      person={{name:"Tharru",dept:["AI&DS"]}}/>
    </div>
  )
}

export default Parent


