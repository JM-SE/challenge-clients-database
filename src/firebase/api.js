import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import { db } from './config';

const collectionName = 'clientes';

export const saveClient = (newLink) =>
    addDoc(collection(db, collectionName), newLink);

export const onGetClients = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
};

export const getClient = (id) => getDoc(doc(db, collectionName, id));

export const addProjection = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);

export const getClients = () => getDocs(collection(db, collectionName));

export const deleteClient = (id) => deleteDoc(doc(db, collectionName, id));
