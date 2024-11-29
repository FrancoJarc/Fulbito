export function Footer() {
    return (
        <footer className="navbar navbar-expand-lg bg-primary fixed-bottom py-4 ">
            <div className="container-fluid text-center">
                <p className="mb-0 text-white" style={{ fontSize: '1.2rem' }}>© 2024 Fulbito - Todos los derechos reservados</p>
                <div>
                    <a href="#" className="text-white text-decoration-none me-3" style={{ fontSize: '1.1rem' }}>Términos y condiciones</a>
                    <a href="#" className="text-white text-decoration-none" style={{ fontSize: '1.1rem' }}>Política de privacidad</a>
                </div>
            </div>
        </footer>
    );
}
