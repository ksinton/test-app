import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/ContactsList.css';
import {useParams} from "react-router-dom";

function ContactDetail() {

    const { contact_id } = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/contact/${contact_id}`).then((contact) => {
            console.log("contacts", contact);
            setContact(contact.data);
        });
    }, []);

    return (<div>Contact Detail {contact_id}</div>);
}

export default ContactDetail;