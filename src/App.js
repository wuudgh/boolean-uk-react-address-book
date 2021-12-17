import { useState, useEffect } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);

  // [TODO] Write a useEffect to fetch contacts here...
  useEffect(() => {
    const fetchContact = async() => {
      try{
        const res = await fetch('http://localhost:3030/contacts')
        const data = await res.json();
        console.log(data);
        setContacts(data)
      }
      catch(error){
        console.log('error', error);
      }
    }

    fetchContact();

  }, [])

  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
      />
      <main>{!hideForm && <CreateContactForm />}</main>
    </>
  );
}
