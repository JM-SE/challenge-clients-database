import { deleteClient } from '../../firebase/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function ClientCard({ client }) {
    const navigate = useNavigate();

    const { id, name, lastName, age, birthday } = client;
    const date = new Date(birthday);
    const birthdayFormatted = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    const onDeleteClient = async (id) => {
        if (window.confirm('Está seguro que quiere eliminar al cliente?')) {
            await deleteClient(id);

            navigate(0);

            toast('Cliente eliminado correctamente', {
                type: 'error',
                autoClose: 2000,
            });
        }
    };

    return (
        <div
            className="card mb-3 card-website"
            key={id}
            onClick={() => navigate(`/analisis/${id}`)}
        >
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h4>{`${name} ${lastName}`}</h4>
                    <button
                        className="btn btn-danger btn-sm d-flex align-items-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeleteClient(id);
                        }}
                    >
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <div>Edad: {age} años</div>
                <div>Fecha de nacimiento: {birthdayFormatted}</div>
                <div>Esperanza de vida: {80 - age} años</div>
            </div>
        </div>
    );
}
