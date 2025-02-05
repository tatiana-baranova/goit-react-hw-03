import { useState } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);


  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact])
  }


  return (
    <>
    <div>
  <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={ addContact} />
  <SearchBox value={searchQuery}  onChange={setSearchQuery}/>
  <ContactList contacts={filteredContacts}/>
</div>
    </>
  )
}

export default App
