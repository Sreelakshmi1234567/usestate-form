import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')

    const [submittedData, setSubmittedData] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault()
       setSubmittedData({name,email,age})
       setName(' ')
       setEmail(' ')
       setAge(' ')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text' 
            placeholder='enter name' 
            value={name} onChange={(e)=>setName(e.target.value)}
            /><br/>
            <input
            type='text' 
            placeholder='enter email' 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            /><br/>
            <input
            type='text' 
            placeholder='enter age' 
            value={age} onChange={(e)=>setAge(e.target.value)}
            /><br/>



            <button type='submit'>submit</button>

        </form>

       { <p>Name: {submittedData.name}</p>}
          {<p>Email: {submittedData.email}</p>}
         { <p>Age: {submittedData.age}</p>}

        
        
    </div>
   
  )
}

export default Form









  