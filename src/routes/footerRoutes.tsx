import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../Pages/_layout/DefaultFooter';

const footers: RouteProps[] = [
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
