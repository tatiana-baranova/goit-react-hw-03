import s from "./Contact.module.css"
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id }) => {

    return (
        <div className={s.contact}>
            <ul className={s.contactList}>
                <li className={s.list}>
                    <FaUserLarge className={s.icon} size="18"/>
                    {name}
                </li>
                <li className={s.list}>
                    <FaPhone className={s.icon} size="18"/>
                    {number}
                </li>
            </ul>
            <button className={s.btn}>
                Delete
            </button>
        </div>
    )

}

export default Contact;