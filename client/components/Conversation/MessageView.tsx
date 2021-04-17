import React, {useState, useCallback, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import { Message, Person } from '../../constants/interfaces';
import { CaretUp, CaretUpFill } from 'react-bootstrap-icons';

interface Props {
    message: Message,
    currentUser: Person,
    toggleMessageLike: (message: Message) => void
}

export default function MessageView(props: Props) {

    const {message, currentUser, toggleMessageLike } = props

    const toggleMessageLikeCallback = () => toggleMessageLike(message)
    console.log(message.likes)

    return(
        <Card className="messageCard">
            <Card.Body className="fullMessage">
                <div className="messageHeader">
                    <img src={message.sender.profilePictureURL} className="profilePicture" />
                    <Card.Title>{message.sender.name}</Card.Title>
                </div>
                <div className="messageBody">
                    <Card.Text className="messageText">
                        {message.text}
                    </Card.Text>
                    {
                        (message.likes.length ?
                        <CaretUpFill onClick={toggleMessageLikeCallback} /> :
                        <CaretUp onClick={toggleMessageLikeCallback} />
                        )
                    }
                </div>
                <Card.Text>
                    {message.date.toLocaleString()}
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

