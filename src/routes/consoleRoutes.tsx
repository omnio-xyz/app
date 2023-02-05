import { RouteProps } from 'react-router-dom';
import DefaultAside from '../Pages/Layout/Console/DefaultConsole';
import LaunchConsole from '../Pages/Layout/Console/LaunchConsole';
import { LaunchMenu } from '../menu';

const asides: RouteProps[] = [
	{ path: LaunchMenu.login.path, element: <DefaultAside /> },
  { path: '*', element: <DefaultAside /> },
];

export default asides;
