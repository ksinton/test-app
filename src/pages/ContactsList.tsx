import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactsList.css';

function ContactsList() {

    const navigate = useNavigate();
    const [contactsData, setContactsData] = useState<any[]>([]);
    const [contacts, setContacts] = useState(contactsData);
    const [selectedContact, setSelectedContact] = useState(contactsData[contactsData.length - 1]);

    useEffect(() => {
        axios.get("http://localhost:8000/contacts").then((contacts) => {
            console.log("contacts", contacts);
            setContacts(contacts.data);
        });
    }, []);

    const List: React.FC = () => {
        return <table className="list">

            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
            {
                contacts ? contacts.map((contact, index) =>
                    <tr
                        className="item"
                        onClick={() => {
                                navigate(`/contact-detail/${contact.contact_id}/`);
                            }
                        }
                        key={index}>
                        <td className="fullName">{contact.first_name} {contact.last_name}</td>
                        <td className="firstName">{contact.first_name}</td>
                        <td className="lastName">{contact.last_name}</td>
                        <td className="email">{contact.email}</td>
                        <td className="phone">{contact.phone}</td>
                    </tr>
                ) : null
            }
            </tbody>
        </table>
    }

    const Detail: React.FC = () => {
        return selectedContact ? (<div className="detail">
            <h2>{selectedContact.first_name} {selectedContact.last_name}</h2>
            <div className="table">
                <span>Phone:</span>
                <span>{selectedContact.phone}</span>
                <span>Email:</span>
                <span>{selectedContact.email}</span>
            </div>
        </div>) : null;
    }

    const selectContact = (contact_id: number)  => {

        const selectedContact:any | undefined = contacts.find((contact) => contact.contact_id === contact_id);

        if (selectedContact !== undefined) {
            setSelectedContact(selectedContact);
        }
    };

    return <div className="contacts-list">
        <List/>
    </div>;
}

export default ContactsList;