import React, {useState, useCallback, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fakeMessages } from '../constants/messages';
import { Message, Conversation } from '../constants/interfaces';

export default function ConvoView() {

	const [messages, setMessages] = useState<Conversation | null>(fakeMessages)
	console.log(messages)
	return(
		<div>
			{
				messages == null ? (
					<Card >
						Loading...
					</Card>
				) :
				messages.map((message, index) => (
					<Card key={index}>
						<Card.Body>
							<div>
								<img src={message.sender.profilePictureURL} className="profilePicture" />
								<Card.Title>{message.sender.name}</Card.Title>
							</div>
							<Card.Text>
								{message.text}
							</Card.Text>
							<Card.Text>
								{message.date.toLocaleString()}
							</Card.Text>
						</Card.Body>
					</Card>
					)
				)
			}
		</div>
	)
	
}