import DefaultHeader from '../pages/layout/Header/DefaultHeader';
import { RouteProps } from 'react-router-dom';

const headers: RouteProps[] = [{ path: '*', element: <DefaultHeader /> }];

export default headers;
