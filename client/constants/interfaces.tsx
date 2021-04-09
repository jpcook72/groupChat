export interface Person {
	name: string;
    image?: string | null;
}

export interface Message {
	sender: Person;
	text: string;
	date: Date;
    likes: Person[] | null
}

export type Conversation = Message[] | null