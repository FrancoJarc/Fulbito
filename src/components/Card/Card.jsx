export function Card(props) { 
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <b>{props.nombre}</b>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Precio por hora:</b> {props.precio} </p >
                    <p className="card-text"><b>Capacidad:</b> {props.capacidad}</p>
                    <p className="card-text"><b>Dirección:</b> {props.calle}</p>
                    <p className="card-text"><b>Teléfono:</b> {props.telefono}</p>
                    <a href="#" className="btn btn-primary">Reservar ahora</a>
                </div>
                <div className="card-footer text-body-secondary">
                </div>
            </div>
        
        </>
    )
}