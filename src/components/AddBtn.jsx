import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddBtn = ({ onClick }) => {
    return (
        <div className="add" onClick={onClick}>
            <AiOutlinePlus />
        </div>
    );
};

export default AddBtn;
