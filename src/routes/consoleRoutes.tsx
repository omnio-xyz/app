import { RouteProps } from 'react-router-dom';
import DefaultAside from '../Pages/_layout/DefaultAside';

const asides: RouteProps[] = [
  { path: '*', element: <DefaultAside /> },
];

export default asides;
