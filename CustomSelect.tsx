//EXAMPLE-{2} SELECT COMPONENTS
import React, { useState } from 'react';

interface Option{
    value: string;
    label: string;
}

interface IProps{
    options: Option[];
    placeholder: string;
}

const CustomSelect:React.FC<IProps> = ({options, placeholder}) => {
const [selected, setSelected] =  useState<string>(" ");

return(
    <>
    <div>
        <div>{selected || placeholder || "select an option"}</div>
        <ul>
            {options.map((option) => (
                <li key={option.value} onClick={() => setSelected(option.value)}>
                    {option.label}
                </li>
            ))}
        </ul>
    </div>
    </>
)
}

export default CustomSelect;