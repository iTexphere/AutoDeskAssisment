import React from 'react'
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  import { v4 as uuidv4 } from 'uuid';

const ApiCard = (props) => {
    return (
        <div>
        <Card className="cardApi" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title><i className={props.api.icon}>{props.api.title}</i></Card.Title>
            <Card.Text>
            {props.api.description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            {
                props.api.links.map(link => (
                    <Link
                    key={uuidv4()}
                    to={link.link}
                    >
                    <ListGroupItem>{link.label}</ListGroupItem>
                    </Link>
                ))
            }
        </ListGroup>
        </Card>
        </div>
    )
}

export default ApiCard;
