import { RouteProps } from 'react-router-dom';
import DefaultHeader from '../Pages/Layout/Header/DefaultHeader';

const headers: RouteProps[] = [
  { path: '*', element: <DefaultHeader /> },
];

export default headers;
