export interface Registry {
	_id: string,
	budget: string,
	pictures: [
		{
			url: string
		},
	],
	age: number,
	name: {
		first: string,
		last: string
	},
	company: string,
	email: string,
	phone: string,
	address: string,
	about: string,
	registered: Date,
	latitude: string,
	longitude: string,
	contactTimeline: [
		{
			id: number,
			broker: string,
			date: Date
		},
	],
	channel: string
}
