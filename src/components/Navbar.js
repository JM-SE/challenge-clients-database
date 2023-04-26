import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-dark bg-dark">
            {pathname !== '/' ? (
                <Link className="navbar-brand m-lg-4 m-sm-3" to="/">
                    Volver a listado
                </Link>
            ) : (
                <div />
            )}
            <Link
                className="btn btn-primary shadow-none m-lg-4 m-sm-3 float-right"
                to="/add"
            >
                Crear Cliente
            </Link>
        </nav>
    );
};
