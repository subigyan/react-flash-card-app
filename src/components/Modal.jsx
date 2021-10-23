import React from "react";

import { AddCardForm } from "./AddCardForm";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ open, onClose, addCard, cardList }) => {
    const OVERLAY = {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.6)",
    };
    if (!open) {
        return null;
    }
    return (
        <>
            <div style={OVERLAY} onClick={() => onClose()}>
                <div
                    className="modal"
                    onClick={(ev) => {
                        ev.stopPropagation();
                    }}
                >
                    <div className="modal-content">
                        <AddCardForm
                            addNewCard={addCard}
                            cards={cardList}
                            whenSubmitted={onClose}
                        />
                        <button onClick={onClose} className="close-btn">
                            {" "}
                            <AiFillCloseCircle />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
