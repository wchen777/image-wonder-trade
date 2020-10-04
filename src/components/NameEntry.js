import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const NameEntry = ({onSubmit}) => {
    
    const [note, setNote] = useState("");
    
    const handleChange = (event) => {
        setNote(event.target.value);
      }

    return (
        <div>
            <h2>Enter a name:</h2>
            <form className = "name-entry">

            <textarea 
            className= "text-input"
            onChange={handleChange}
            onSubmit= {() => onSubmit(note)}
            // value={note.content}
            placeholder= "This will be your display name (leave blank for anonymous)"
            rows={1}
            />
            </form>
            <Button className = "buttons" variant="contained" size="large" onClick = {() => onSubmit(note)}> Next </Button>

        </div>

    )
}


export default NameEntry;