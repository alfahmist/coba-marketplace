const category = ['dapur', 'audio', 'elektronik', 'gaming', 'makanan'];
const description = [
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
	"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
	'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
	'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
	'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
];
const title = [
	'wajan grill',
	'monitor 14 inch',
	'speaker bluetooth',
	'stick ps',
	'nasi padang',
];

const price = [1000, 2000, 3000, 4000, 5000];

// const random = () => {
// 	for (let index = 0; index < 4; index++) {
// 		if (index !== 86 && index !== 97) {
// 			const imageRandom = `https://picsum.photos/id/${index}/200`;
// 			const titleRandom = title[Math.floor(Math.random() * 5)];
// 			const priceRandom = price[Math.floor(Math.random() * 5)];
// 			const categoryRandom = category[Math.floor(Math.random() * 5)];
// 			const descriptionRandom = description[Math.floor(Math.random() * 5)];
// 			const element = {
// 				id: index,
// 				title: titleRandom,
// 				price: priceRandom,
// 				category: categoryRandom,
// 				description: descriptionRandom,
// 				image: imageRandom,
// 			};
// 			data.push(element);
// 		}
// 	}
// };

// const updateData = () => {
// 	for (let index = 0; index < title.length; index++) {
// 		// console.log(index);
// 		const element = {
// 			id: index + 1,
// 			title: title[index],
// 			price: price[index],
// 			category: category[index],
// 			description: description[index],
// 			image: `https://picsum.photos/id/${index}/200`,
// 		};
// 		data.push(element);
// 	}
// };
export const data = [
	{
		id: 1,
		title: 'Laptop',
		price: '1000',
		category: 'Elektronik',
		description:
			'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		image: 'https://picsum.photos/id/12/200',
	},
	{
		id: 2,
		title: 'Panci',
		price: '2000',
		category: 'dapur',
		description:
			'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		image: 'https://picsum.photos/id/24/200',
	},
	{
		id: 3,
		title: 'Martabak',
		price: '3000',
		category: 'Makanan',
		description:
			'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		image: 'https://picsum.photos/id/32/200',
	},
	{
		id: 4,
		title: 'Ikan bakar',
		price: '4000',
		category: 'Makanan',
		description:
			'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		image: 'https://picsum.photos/id/21/200',
	},
	{
		id: 5,
		title: 'Speaker',
		price: '5000',
		category: 'Audio',
		description:
			'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		image: 'https://picsum.photos/id/5/200',
	},
];
// random();
// updateData();
