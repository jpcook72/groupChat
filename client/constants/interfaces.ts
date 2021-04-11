export interface Person {
	name: string;
    profilePictureURL: string | undefined;
}

export interface Message {
	sender: Person;
	text: string;
	date: Date;
    likes: Person[] | null
}

export type Conversation = Message[] | null