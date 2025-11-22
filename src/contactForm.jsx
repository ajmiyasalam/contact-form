import React, { useState } from 'react'

function ContactForm({onSubmit}) {
        const [form,setForm] = useState({name:"",email:"",phone:"",}) 
        const [error,seterror] = useState("")


        function handlechange (e) {
            setForm({
                ...form,[e.target.name] : e.target.value
            })
        }
        function handlesubmit(e) {
            e.preventDefault()

            if(!form.name || !form.email || !form.phone){
                return seterror("all fields are required")
            }
            if(!form.email.includes('@')){
                return seterror("email must contain '@'")
            }
            if(form.phone.length < 10){
                return seterror("phnone num must be 10 numbers")
            }
             onSubmit(form)
            setForm({name:"",email:"",phone:""})
            seterror("")
        }
    

  return (
    <div>
      <h2>contact form</h2>
      <h2>{error && <div>{error}</div>}</h2>

      <form onSubmit={handlesubmit}>
        <input type="text" name='name' placeholder='entername' value={form.name} onChange={handlechange} /> <br /><br />
           <input type="email" name='email' placeholder='enteremail' value={form.email} onChange={handlechange} /> <br /><br />
              <input type="number" name='phone' placeholder='enterphone number' value={form.phone} onChange={handlechange} /> <br /><br />

              <button type='submit'>submit</button>
      </form>
      
    </div>
  )
}

export default ContactForm
