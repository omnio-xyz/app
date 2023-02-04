import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../pages/_layout/DefaultFooter';

const footers: RouteProps[] = [
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
