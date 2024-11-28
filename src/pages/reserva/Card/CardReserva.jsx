export function CardReserva(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <b>{props.nombreCancha}</b>
            </div>
            <div className="card-body">
                <p className="card-text"><b>Nombre cancha:</b> {props.nombreCancha}</p>
                <p className="card-text"><b>Precio por hora:</b> {props.precio}</p>
                <p className="card-text"><b>Dirección:</b> {props.calle}</p>
                <p className="card-text"><b>Teléfono:</b> {props.telefono}</p>
            </div>
            <div className="card-footer text-body-secondary">
                <button onClick={props.onEliminar} className="btn btn-danger">
                    Eliminar Reserva
                </button>
            </div>
        </div>
    );
}