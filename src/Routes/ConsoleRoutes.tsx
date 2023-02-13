import { RouteProps } from 'react-router-dom';
import DefaultAside from '../pages/Layout/Console/DefaultConsole';
import { launchMenu, consumerOnboardingMenu } from '../menu';

const asides: RouteProps[] = [
	{ path: launchMenu.launch.path, element: null },
  { path: consumerOnboardingMenu.launch.path, element: null },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
