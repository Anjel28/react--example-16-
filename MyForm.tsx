import React, { useState } from 'react';

const MyForm: React.FC = () => {
    const [textValue, setTextValue] = useState<string>(" ");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="myTextarea">
               Write
            </label>
            <textarea
            id="myTextarea"
            value={textValue}
            onChange={handleChange}
            rows={4}
            cols={50}/>
            <button type="submit"  style={{color: 'blue', margin: '10px'}}>Submit
            
            </button>
           <p>Current value: {textValue}</p>
        </form>
        </>
    )
}

export default MyForm;