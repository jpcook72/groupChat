export const John = {
	name: 'John',
	profilePictureURL: 'test-img.jpg'
}

export const Ryan = {
	name: 'Ryan',
	profilePictureURL: 'test-img.jpg'
}

export const fakeMessage = {
	sender: John,
	text: 'Hello, this is a test message',
	date: new Date(),
	likes: []
}

export const fakeMessages = [
	{
		sender: John,
		text: 'Hello, what is going on',
		date: new Date(),
		likes: []
	},
	{
		sender: Ryan,
		text: 'Hello, what is going on. I would really like to see what the long messages tend to look like',
		date: new Date(),
		likes: []
	},
	{
		sender: John,
		text: 'Nothing much, what about you',
		date: new Date(),
		likes: []
	}
]
