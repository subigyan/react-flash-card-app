import React from "react";
import { useRef } from "react";

import { FaChevronDown, FaTimes } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Card = ({ id, question, answer, onDelete }) => {
    function toggleActive() {
        cardRef.current.classList.toggle("active");
    }

    const cardRef = useRef(null);

    return (
        <div className={`card`} onClick={toggleActive} ref={cardRef}>
            <div className="title">
                <h3>{question}</h3>
            </div>
            <div className="text">
                <p>{answer}</p>
            </div>
            <div className="toggle">
                <i className="chevron-down">
                    <FaChevronDown />
                </i>
                <div className="times">
                    <FaTimes />
                </div>
            </div>
            <button
                className="delete-btn"
                onClick={() => {
                    onDelete(id);
                    console.log("dell");
                }}
            >
                <AiFillDelete />
            </button>
        </div>
    );
};

export default Card;
