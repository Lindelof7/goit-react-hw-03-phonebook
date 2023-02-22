import nextId from "react-id-generator";
import css from './App.module.css'

export const ContactList = ({ contacts, removeContact }) => {
    return (<ul className={(css.contactList)}>{contacts.map
        (contact =>
            <li key={nextId()}>{contact.name} : {contact.number}
                <button onClick={() => { removeContact(contact.id) }} className={(css.contactListBtn)}>Delete</button>
            </li>)}
    </ul>
    )
}