import ReactDOM from "react-dom";

export function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">
                {children}
            </div>
        </div>,
        document.getElementById("modal")

    );
}