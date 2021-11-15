import { useState, useEffect } from "react";
import Card from "./components/Card";
import AddBtn from "./components/AddBtn";
import Modal from "./components/Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const questions = localStorage.getItem("questions");
        setCards(JSON.parse(questions));
    }, []);

    function addQuestionCard(newCard) {
        // console.log(newCard);
        // console.log([...cards, newCard]);
        localStorage.setItem("questions", JSON.stringify([...cards, newCard]));
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
        localStorage.setItem("questions", JSON.stringify(updatedCards));
        console.log(id, updatedCards);
        setCards(updatedCards);
    }

    return (
        <div>
            <h1>Flash Cards</h1>
            <div className="container">
                {cards === null || cards.length === 0 ? (
                    <p>
                        No Question Cards. CLick the button on the bottom right
                        to add cards
                    </p>
                ) : null}
                {cards &&
                    cards.map(({ id, question, answer }) => {
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
