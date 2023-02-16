import mockProductImage from '../../assets/mockProductImage.png';

const productData: {
	id: number;
	image: string;
	name: string;
	category: string;
	series: { data: number[] }[];
	color: string;
	stock: number;
	price: number;
}[] = [
	{
		id: 1,
		image: mockProductImage,
		name: 'Product #1',
		category: 'Product Category',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 30,
		price: 14.5,
	},
	{
		id: 2,
		image: mockProductImage,
		name: 'Product #2',
		category: 'Product Category',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 12,
	},
	{
		id: 3,
		image: mockProductImage,
		name: 'Product #3',
		category: 'Product Category',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: String(process.env.REACT_APP_WARNING_COLOR),
		stock: 300,
		price: 12.8,
	},
	{
		id: 4,
		image: mockProductImage,
		name: 'Product #4',
		category: 'Product Category',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 16,
	},
	{
		id: 5,
		image: mockProductImage,
		name: 'Product #5',
		category: 'Product Category',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 16,
	},
	{
		id: 6,
		image: mockProductImage,
		name: 'Product #6',
		category: 'Product Category',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
	},
	{
		id: 7,
		image: mockProductImage,
		name: 'Product #7',
		category: 'Product Category',
		series: [
			{
				data: [21, 34, 23, 12, 67],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 18,
	},
	{
		id: 8,
		image: mockProductImage,
		name: 'Product #8',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
	},
	{
		id: 9,
		image: mockProductImage,
		name: 'Product #9',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
	},
	{
		id: 10,
		image: mockProductImage,
		name: 'Product #10',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
	},
	{
		id: 11,
		image: mockProductImage,
		name: 'Product #11',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
	},
	{
		id: 12,
		image: mockProductImage,
		name: 'Product #12',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
	},
];
export default productData;
