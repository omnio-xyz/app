import DefaultFooter from '../pages/layout/DefaultFooter';
import { RouteProps } from 'react-router-dom';

const footers: RouteProps[] = [{ path: '*', element: <DefaultFooter /> }];

export default footers;