import React, { useState, useEffect } from "react";

function JsonForm() {
  const [contacts, setContacts] = useState([]);
  const [form,setForm] =useState({name:"",email:"",phone:""})

  
 useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts)
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const handlechange = (e) => {
   setForm({
    ...form,[e.target.name] : e.target. value
   })
  }

  const addContact = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      alert("Please fill all fields!");
      return;
    }

    setContacts([...contacts, form])

    setForm({ name: "", phone: "", email: "" });
  };

  const deleteContact = (index) => {
    const updatedList = contacts.filter((_, i) => i !== index);
    setContacts(updatedList);
  };


 return (
  <div>
    <h2>Contact List</h2>

    <input type="text" placeholder="Name" name="name" value={form.name} onChange={handlechange}
    /><br /><br />
 <input type="text" placeholder="Phone" name="phone" value={form.phone} onChange={handlechange}
    /><br /><br />
<input type="email" placeholder="Email" name="email" value={form.email} onChange={handlechange}
    /><br /><br />
 <button onClick={addContact}>Add Contact</button>

    <ul>
      {contacts.map((c, index) => (
        <li key={index}>
          {c.name} - {c.phone} - {c.email}
          <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
)
}

export default JsonForm