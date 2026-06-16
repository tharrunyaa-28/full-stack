import React from 'react'

const Childs = ({name,age,marks,person}) => {
  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    {marks.map((val,i)=>(
        <p key={i}>{`${i+1} : ${val}`}</p>   
    )) }
    <div>
        <h1>user</h1>
        <p>name:{person.name}</p>
        <p>department:{person.dept.map((v)=>(
            <>
            <b>{v}</b>
            <b>{""}</b>
            </>
        ) )}</p>
    </div>
    </>
  )
}

export default Childs
