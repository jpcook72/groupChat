import React, {useState, useCallback, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import { Message } from '../constants/interfaces';
import { CaretUp } from 'react-bootstrap-icons';

type Props = {
    message: Message,
    index: number
}

export default function MessageView(props: Props) {

    const {message, index} = props

    return(
        <Card key={index}>
            <Card.Body className="fullMessage">
                <div className="messageHeader">
                    <img src={message.sender.profilePictureURL} className="profilePicture" />
                    <Card.Title>{message.sender.name}</Card.Title>
                </div>
                <div className="messageBody">
                    <Card.Text className="messageText">
                        {message.text}
                    </Card.Text>
                    <CaretUp />
                </div>
                <Card.Text>
                    {message.date.toLocaleString()}
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

