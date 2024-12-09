import React from 'react';
import {useAppSelector} from "../store/store";
import {Contact} from "../store/feature/contactSlice";

const List = () => {

    const contacts=useAppSelector(state=>state.contact.contacts);

    console.log("contacts", contacts);

    return <div>
        <p>This is the list component</p>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact:Contact) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default List;