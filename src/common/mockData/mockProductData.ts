import BeveledCone from '../../assets/abstract/beveled-cone.png';

const productData: {
	id: number;
	image: string;
	name: string;
	category: string;
	series: { data: number[] }[];
	color: string;
	stock: number;
	price: number;
	store: string;
}[] = [
	{
		id: 1,
		image: BeveledCone,
		name: 'Beveled Cone',
		category: '3D Shapes',
		series: [
			{
				data: [25, 66, 41, 89, 63],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 30,
		price: 14.5,
		store: 'Company A',
	},
	{
		id: 2,
		image: BeveledCone,
		name: 'Cloud Ball',
		category: '3D Shapes',
		series: [
			{
				data: [12, 24, 33, 12, 48],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 12,
		store: 'Company A',
	},
	{
		id: 3,
		image: BeveledCone,
		name: 'Quadrilateral',
		category: '3D Shapes',
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		color: String(process.env.REACT_APP_WARNING_COLOR),
		stock: 300,
		price: 12.8,
		store: 'Company D',
	},
	{
		id: 4,
		image: BeveledCone,
		name: 'Bendy Rectangle',
		category: '3D Shapes',
		series: [
			{
				data: [54, 34, 42, 23, 12],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 16,
		store: 'Company C',
	},
	{
		id: 5,
		image: BeveledCone,
		name: 'Bendy Rectangle',
		category: '3D Shapes',
		series: [
			{
				data: [23, 21, 12, 34, 14],
			},
		],
		color: String(process.env.REACT_APP_DANGER_COLOR),
		stock: 300,
		price: 16,
		store: 'Company A',
	},
	{
		id: 6,
		image: BeveledCone,
		name: 'Bendy Rectangle',
		category: '3D Shapes',
		series: [
			{
				data: [23, 13, 34, 41, 38],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
		store: 'Company C',
	},
	{
		id: 7,
		image: BeveledCone,
		name: 'Octahedron',
		category: '3D Shapes',
		series: [
			{
				data: [21, 34, 23, 12, 67],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 18,
		store: 'Company B',
	},
	{
		id: 8,
		image: BeveledCone,
		name: 'Triangle',
		category: '3D Shapes',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
		store: 'Company B',
	},
	{
		id: 9,
		image: BeveledCone,
		name: 'SquiglyGlobe',
		category: '3D Shapes',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 300,
		price: 16,
		store: 'Company C',
	},
	{
		id: 10,
		image: BeveledCone,
		name: 'Dodecagon',
		category: '3D Shapes',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
		store: 'Company A',
	},
	{
		id: 11,
		image: BeveledCone,
		name: 'Beveled Cube',
		category: '3D Shapes',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
		store: 'Company A',
	},
	{
		id: 12,
		image: BeveledCone,
		name: 'Cylinder',
		category: '3D Shapes',
		series: [
			{
				data: [18, 32, 26, 15, 34],
			},
		],
		color: String(process.env.REACT_APP_SUCCESS_COLOR),
		stock: 219,
		price: 16,
		store: 'Company B',
	},
];
export default productData;