import React, { useState } from 'react';

interface FormData{
    name: string;
    email: string;
    age: number;
}
const MultiInputForm: React.FC = () => {
const [formData, setFormData] = useState<FormData>({
    name: ' ',
    email: ' ',
    age: 0,
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    
    setFormData(Prev => ({
        ...Prev,
        [name]: name === 'age' ? Number(value): value,
    }))
}
const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submoitted: ', formData);
    alert(`Submitted: \n name: ${formData.name}: \n email: ${formData.email}: \n age  `);
}
return(
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}>

            </input>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}>
                </input>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange}>
                </input>
            </div>

           
        </div>
        <button type="submit">Submit</button>

    </form>
    </>


)
}

export default MultiInputForm;