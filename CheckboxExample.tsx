import React, { useState, ChangeEvent } from 'react';

const CheckboxExample: React.FC = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return(
        <>
        <div>
            <label>
                <input type="CheckBox" checked={isChecked} onChange={handleCheckboxChange}>

                </input>
                 Accept Terms and Conditions
            </label>
            <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
        </div>
        </>
    )
 }

 export default CheckboxExample;