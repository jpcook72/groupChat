import React, {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import { fakeMessages, John } from '../../constants/messages';
import { Message, Conversation } from '../../constants/interfaces';
import MessageView from './MessageView';

export default function ConversationView() {

	const [messages, setMessages] = useState<Conversation | null>(null)
	const [currentUser] = useState(John)

	function toggleMessageLike(message: Message): void {
		if (messages) {
			const likeArray = message.likes
			likeArray.includes(currentUser) ? 
				likeArray.splice(likeArray.indexOf(currentUser), 1) :
				likeArray.push(currentUser)
				
			setMessages([...messages])
		}
	} 

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
					<MessageView 
						key={index} 
						currentUser={currentUser} 
						message={message} 
						toggleMessageLike={toggleMessageLike}
					/>
					)
				)
			}
		</div>
	)
	
}