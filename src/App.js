import { ClientsList } from './components/ClientsList';
import { ClientForm } from './components/ClientForm';
import { ClientAnalisis } from './components/ClientAnalisis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<ClientsList />} />
                    <Route path="add" element={<ClientForm />} />
                    <Route path="analisis/:id" element={<ClientAnalisis />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
