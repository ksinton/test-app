import React, {useRef} from 'react';
import {addContact} from "../store/feature/contactSlice";
import {useDispatch} from "react-redux";

const Add = () => {

    const name=useRef<string>("");
    const dispatch = useDispatch();

    return <form>
        <label htmlFor="name">First Name:</label>
        <input
            onChange={(e) => (name.current = e.target.value)}
        />
        <button
            onClick={() => dispatch(addContact({name: name.current}))}
            type="button"
        >
            Add
        </button>
    </form>;
}

export default Add;