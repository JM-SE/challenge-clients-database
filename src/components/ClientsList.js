import { useEffect, useState } from 'react';
import { getClients } from '../firebase/api';
import { ClientCard } from './ClientCard/ClientCard';
import { getAgeAverage } from '../util/getAgeAverage';
import { getStandardDeviation } from '../util/getStandardDeviation';

export const ClientsList = () => {
    const [clients, setClients] = useState([]);

    const ages = clients.map((client) => Number(client.age));
    const agesHasData = ages.length > 0;
    const ageAverage = agesHasData && getAgeAverage(ages);
    const stdDeviation = agesHasData && getStandardDeviation(ages);

    const onGetClients = async () => {
        const querySnapshot = await getClients();
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setClients(docs);
    };

    useEffect(() => {
        onGetClients();
    }, []);

    return (
        <>
            {clients.map((client) => (
                <div className="col-md-4" key={client.id}>
                    <ClientCard client={client} />
                </div>
            ))}
            {agesHasData && (
                <>
                    <div>
                        Promedio de edad de los clientes: {ageAverage} años.
                    </div>
                    <div>
                        Desviación estándar de edad de los clientes:{' '}
                        {stdDeviation} años.
                    </div>
                </>
            )}
        </>
    );
};
