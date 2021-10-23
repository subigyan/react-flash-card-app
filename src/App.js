import { useState } from "react";
import Card from "./components/Card";
import AddBtn from "./components/AddBtn";
import Modal from "./components/Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState([
        {
            id: 1,
            question: "Question?",
            answer: "Answer",
        },
    ]);

    function addQuestionCard(newCard) {
        console.log(newCard);
        setCards((prevCards) => [...prevCards, newCard]);
    }

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function deleteCard(id) {
        const updatedCards = cards.filter((card) => {
            return card.id !== id;
        });

        console.log(id, updatedCards);
        setCards(updatedCards);
    }

    return (
        <div>
            <h1>Flash Cards</h1>
            <div className="container">
                {cards.map(({ id, question, answer }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            question={question}
                            answer={answer}
                            onDelete={deleteCard}
                        />
                    );
                })}
            </div>

            <AddBtn onClick={openModal} />
            <Modal
                open={isOpen}
                onClose={closeModal}
                addCard={addQuestionCard}
                cardList={cards}
            ></Modal>

            {/* <button onClick={() => console.log("hi")}>123121</button> */}
        </div>
    );
}

export default App;
