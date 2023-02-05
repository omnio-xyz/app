import { RouteProps } from 'react-router-dom';
import DefaultAside from '../Pages/Layout/Console/DefaultConsole';

const asides: RouteProps[] = [
  { path: '*', element: <DefaultAside /> },
];

export default asides;
