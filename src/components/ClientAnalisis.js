import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getClient, addProjection } from '../firebase/api';

import { Input } from './Input/Input';

export const ClientAnalisis = () => {
    const [client, setClient] = useState({});
    const [textarea, setTextarea] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    const { name, lastName } = client;

    const getClientById = async (id) => {
        try {
            const doc = await getClient(id);
            setClient({ ...doc.data() });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getClientById(params.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    useEffect(() => {
        if (client.analisis) {
            setTextarea(client.analisis);
        }
    }, [client]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addProjection(params.id, { ...client, analisis: textarea });
        toast('Datos agregados correctamente', {
            type: 'success',
        });

        setClient([]);
        navigate('/');
    };

    return (
        name && (
            <>
                <h2>
                    {name} {lastName}
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="card card-body bg-secondary"
                >
                    <Input
                        key="textarea"
                        label="Ingrese análisis y proyección del cliente"
                        type="textarea"
                        name="analisis"
                        placeholder=""
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
                    />
                    <button
                        className="btn btn-primary btn-block"
                        disabled={!textarea}
                    >
                        Guardar
                    </button>
                </form>
            </>
        )
    );
};
