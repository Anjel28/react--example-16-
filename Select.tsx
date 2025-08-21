//EXAMPLE-{1}
import React from 'react';

interface IProps{
    options: {label: string; value: string}[];
    onChange: (value: string) =>void;
    value: string;
}

const Select:React.FC<IProps> = ({ options, onChange, value }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }
return(
    <>
    <select value={value} onChange={handleChange}>
        {options.map((option) => (
        <option key={option.value} value={option.value}>
      {option.label}
        </option>
       ) )}

    </select>
    </>
)

}
export default Select;