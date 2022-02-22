import React from "react";
import { Card, CardGroup, Button } from 'react-bootstrap';


export default function CreateCard(props) {
    return (
        <div>

            {/* <CardGroup>
                <Card style={{ width: '300px', height: 'auto'}}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title><b>{props.title}</b></Card.Title>
                        <Card.Text>
                            <i>{props.text}</i>
                        </Card.Text>
                        <Button variant="primary">Débuter avec {props.title}</Button>
                    </Card.Body>
                </Card>
            </CardGroup> */}

            <CardGroup>
                <Card style={{ width: '300px'}}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title><b>{props.title}</b></Card.Title>
                        <Card.Text>
                            <i>{props.text}</i>
                        </Card.Text>
                        <Button variant="primary">Débuter avec {props.title}</Button>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
}