import React from "react";
import { Button, Form } from "react-bootstrap";

export default function AddCard({ cards, setCards }) {
    const [card, setCard] = React.useState();
    
    const handleCardTitle = (title) => {
        setCard( { ...card, title } );
    }
    
    const handleCardText = (text) => { 
        setCard( { ...card, text } );
    }

    const handleSubmit = (e) => {
        let newCards = [...cards]; // ? On clone l'état initial
        newCards.push(card);
        setCards(newCards);
        e.preventDefault();
    }

    return (
        <div>
            <br />

            <Form.Control size="lg" type="text" placeholder="Title" onChange={ (e) => handleCardTitle(e.target.value) } />

            <br />

            <Form.Control size="lg" type="text" placeholder="Description" onChange={ (e) => handleCardText(e.target.value) } />

            <br />

            <Button type="submit" onClick={ (e) => handleSubmit(e) }>Add</Button>
        </div>
    )
}