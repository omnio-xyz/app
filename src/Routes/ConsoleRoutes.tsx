import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultAside from '../Pages/Layout/Console/DefaultConsole';
import { LaunchMenu } from '../menu';

const asides: RouteProps[] = [
	{ path: LaunchMenu.launch.path, element: <div></div> },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
