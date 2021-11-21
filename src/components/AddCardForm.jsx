import React, { useRef } from "react";

export const AddCardForm = ({ addNewCard, cards, whenSubmitted }) => {
    const questionInputRef = useRef(null);
    const answerInputRef = useRef(null);
    function addCard(e) {
        e.preventDefault();
        const newCard = {
            id: cards.length + 1,
            question: questionInputRef.current.value,
            answer: answerInputRef.current.value,
        };
        addNewCard(newCard);
        whenSubmitted();
    }
    return (
        <>
            <form onSubmit={addCard} action="" className="addCardForm">
                <input
                    ref={questionInputRef}
                    name="question"
                    type="text"
                    placeholder="Enter Question"
                    required
                />
                <textarea
                    ref={answerInputRef}
                    name="answer"
                    placeholder="Enter Answer"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};
