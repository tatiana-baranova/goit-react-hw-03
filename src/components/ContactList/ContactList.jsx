import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={s.container}>
            {contacts.map(contact => (
                <li className={s.contactsList} key={contact.id}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}onDelete={onDeleteContact} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;