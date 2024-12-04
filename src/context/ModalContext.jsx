import { createContext, useContext, useState } from "react";
import { Modal } from "../components/modal/Modal";


const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState({
        title: "",
        text: "",
    });
    const [resolveCallback, setResolveCallback] = useState(null);

    const openModal = ({ title, text }) => {
        setContent({ title, text });
        setIsOpen(true);

        return new Promise((resolve) => {
            setResolveCallback(() => resolve);
        });
    };

    const closeModal = (isConfirm) => {
        setIsOpen(false);
        setContent({ title: "", text: "" });

        if (resolveCallback) {
            resolveCallback(isConfirm);
        }
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
            }}
        >
            {children}

            {isOpen && (
                <Modal>
                    <h2 className="text-center fw-bold fs-2">{content.title}</h2>
                    <p className="text-center text-secondary fs-4">{content.text}</p>

                    <div className="mt-4 d-flex justify-content-center gap-3">
                        <button
                            className="btn btn-success px-4 py-2"
                            onClick={() => closeModal(true)}
                        >
                            Confirmar
                        </button>
                        <button
                            className="btn btn-danger px-4 py-2"
                            onClick={() => closeModal(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </Modal>
            )}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
