import ContactForm from './contactForm.jsx'

function App() {
  const [contact,setContact] = useState([])

  const addcontact  =(data) => {
    setContact([...contact,data])

  }
  return (
    <div>
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