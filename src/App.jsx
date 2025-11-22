import  React, { useState } from 'react'
import ContactForm from './contactForm.jsx'
import JsonForm from './jsonform.jsx'


function App() {
  const [contact,setContact] = useState([])

  const addcontact  =(data) => {
    setContact([...contact,data])

  }
  return (
    <div>

      <JsonForm/>
         <ContactForm onSubmit={addcontact} />
      <ul>
        {contact.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email} - {item.phone}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App