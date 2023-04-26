import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Input } from './Input/Input';
import { DayPicker } from './DayPicker/DayPicker';

import { saveClient } from '../firebase/api';

const formsInitialState = {
    name: '',
    lastName: '',
    age: 0,
};

export const ClientForm = () => {
    const [client, setClient] = useState(formsInitialState);
    const [dateSelected, setDateSelected] = useState();
    const navigate = useNavigate();

    const { name, lastName, age } = client;
    const formValid = name && lastName && age && dateSelected;

    const handleInputChange = ({ target: { name, value } }) =>
        setClient({ ...client, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await saveClient({ ...client, birthday: dateSelected.toString() });
        toast('Nuevo cliente creado', {
            type: 'success',
        });

        setClient(formsInitialState);
        navigate('/');
    };

    const formOptions = [
        {
            label: 'Nombre',
            type: 'text',
            name: 'name',
            placeholder: 'Nombre',
            value: name,
        },
        {
            label: 'Apellido',
            type: 'text',
            name: 'lastName',
            placeholder: 'Apellido',
            value: lastName,
        },
        {
            label: 'Edad',
            type: 'number',
            name: 'age',
            placeholder: 'Edad del cliente',
            value: age,
            onKeyPress: (event) =>
                !/[0-9]/.test(event.key) && event.preventDefault(),
        },
    ];

    return (
        <div className="col-md-4 offset-md-4">
            <form
                onSubmit={handleSubmit}
                className="card card-body bg-secondary"
            >
                {formOptions.map((input) => (
                    <Input
                        key={input.name}
                        label={input.label}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={handleInputChange}
                        onKeyPress={input.onKeyPress}
                    />
                ))}
                <DayPicker onSelect={setDateSelected} selected={dateSelected} />
                <button
                    className="btn btn-primary btn-block"
                    disabled={!formValid}
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};
