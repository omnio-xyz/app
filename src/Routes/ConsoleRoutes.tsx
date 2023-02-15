import DefaultAside from '../pages/Layout/Console/DefaultConsole';
import { consumerOnboardingMenu, launchMenu } from '../menu';
import { RouteProps } from 'react-router-dom';

const asides: RouteProps[] = [
	{ path: launchMenu.launch.path, element: null },
  { path: consumerOnboardingMenu.launch.path, element: null },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
