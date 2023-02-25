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
		name: 'Product A',
		category: 'Product Category',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 30,
		price: 10,
	},
	{
		id: 2,
		image: mockProductImage,
		name: 'Product B',
		category: 'Product Category',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 3,
		image: mockProductImage,
		name: 'Product C',
		category: 'Product Category',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: String(process.env.REACT_APP_WARNING_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 4,
		image: mockProductImage,
		name: 'Product D',
		category: 'Product Category',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 5,
		image: mockProductImage,
		name: 'Product E',
		category: 'Product Category',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 6,
		image: mockProductImage,
		name: 'Product F',
		category: 'Product Category',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 7,
		image: mockProductImage,
		name: 'Product G',
		category: 'Product Category',
		series: [
			{
				data: [21, 34, 23, 12, 67],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 8,
		image: mockProductImage,
		name: 'Product H',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 9,
		image: mockProductImage,
		name: 'Product I',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 10,
	},
	{
		id: 10,
		image: mockProductImage,
		name: 'Product J',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
	{
		id: 11,
		image: mockProductImage,
		name: 'Product K',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
	{
		id: 12,
		image: mockProductImage,
		name: 'Product L',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 13,
		image: mockProductImage,
		name: 'Product M',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 14,
		image: mockProductImage,
		name: 'Product N',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 15,
		image: mockProductImage,
		name: 'Product O',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 16,
		image: mockProductImage,
		name: 'Product P',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 17,
		image: mockProductImage,
		name: 'Product Q',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 18,
		image: mockProductImage,
		name: 'Product R',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 19,
		image: mockProductImage,
		name: 'Product S',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 20,
		image: mockProductImage,
		name: 'Product T',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 21,
		image: mockProductImage,
		name: 'Product U',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 22,
		image: mockProductImage,
		name: 'Product V',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 23,
		image: mockProductImage,
		name: 'Product W',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 24,
		image: mockProductImage,
		name: 'Product X',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 25,
		image: mockProductImage,
		name: 'Product Y',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
  {
		id: 26,
		image: mockProductImage,
		name: 'Product Z',
		category: 'Product Category',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 10,
	},
];
export default productData;
