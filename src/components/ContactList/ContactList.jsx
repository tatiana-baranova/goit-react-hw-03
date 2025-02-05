import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li className={s.contactsList} key={contact.id}>
                    <Contact name={contact.name} number={contact.number} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;