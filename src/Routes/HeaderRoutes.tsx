import DefaultHeader from '../pages/layout/DefaultHeader';
import { RouteProps } from 'react-router-dom';

const headers: RouteProps[] = [{ path: '*', element: <DefaultHeader /> }];

export default headers;
