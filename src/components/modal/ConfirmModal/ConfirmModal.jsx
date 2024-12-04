export function ConfirmModal({ show, message, onConfirm, onCancel }) {
    if (!show) return null;

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
            <div className="bg-white p-4 rounded shadow w-50">
                <h2 className="fs-4 fw-bold">{message}</h2>
                <div className="d-flex justify-content-end mt-3">
                    <button
                        className="btn btn-danger me-2"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>

    )
}