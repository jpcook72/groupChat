import React, {useState, useCallback, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fakeMessages } from '../constants/messages';
import { Message, Conversation } from '../constants/interfaces';

export default function ConvoView() {

	const [messages, setMessages] = useState<Conversation | null>(fakeMessages)

	return(
		<div>
			{
				!messages ? (
					<Card >
						Loading...
					</Card>
				) :
				messages.map((message, index) => (
					<Card key={index}>
						<Card.Body>
							<Card.Title>{message.sender}</Card.Title>
							<Card.Text>
								{message.text}
							</Card.Text>
							<Card.Text>
								{message.date.toString()}
							</Card.Text>
						</Card.Body>
					</Card>
					)
				)
			}
		</div>
	)
	
}