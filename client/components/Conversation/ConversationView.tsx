import React, {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import { fakeMessages } from '../../constants/messages';
import { Message, Conversation } from '../../constants/interfaces';
import MessageView from './MessageView';

export default function ConversationView() {

	const [messages, setMessages] = useState<Conversation | null>(null)

	useEffect(() => {
		setMessages(fakeMessages);
	}, [fakeMessages])

	return(
		<div>
			{
				messages == null ? (
					<Card >
						Loading...
					</Card>
				) :
				messages.map((message: Message, index) => (
					<MessageView message={message} key={index}/>
					)
				)
			}
		</div>
	)
	
}