import { useEffect, useState } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

const LOCAL_STORAGE_KEY = 'contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact])
  }

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter(contact => contact.id !== id));
  }


  return (
    <>
    <div>
  <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={ addContact} />
  <SearchBox value={searchQuery}  onChange={setSearchQuery}/>
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
</div>
    </>
  )
}

export default App
