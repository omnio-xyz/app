import DefaultHeader from '../pages/Layout/Header/DefaultHeader';
import { RouteProps } from 'react-router-dom';

const headers: RouteProps[] = [{ path: '*', element: <DefaultHeader /> }];

export default headers;
