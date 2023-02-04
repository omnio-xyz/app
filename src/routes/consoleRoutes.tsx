import { RouteProps } from 'react-router-dom';
import DefaultAside from '../pages/_layout/DefaultAside';

const asides: RouteProps[] = [
  { path: '*', element: <DefaultAside /> },
];

export default asides;
