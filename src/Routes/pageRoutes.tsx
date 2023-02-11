import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { LaunchMenu } from '../menu';
import Login from '../Pages/Main/Account/Launch';

const LANDING = {
	DASHBOARD: lazy(() => import('../Pages/Main/Consumer/Profle')),
	PURCHASE_HISTORY: lazy(() => import('../Pages/Main/DataHub/purchaseHistory/purchaseHistory')),
	REQUESTS: lazy(() => import('../Pages/Main/DataHub/purchaseHistory/purchaseHistory')),
};

const ENGANGEMENT = {
	ADD_TO_CART: lazy(() => import('../Pages/Main/DataHub/Engagement/addToCart')),
	ADD_TO_WISHLIST: lazy(() => import('../Pages/Main/DataHub/Engagement/addToWishlist')),
	VIEW_CONTENT: lazy(() => import('../Pages/Main/DataHub/Engagement/viewContent')),
	INITIATED_CHECKOUTS: lazy(() => import('../Pages/Main/DataHub/Engagement/initiatedCheckouts')),
};

const routes: RouteProps[] = [
	/**
	 * Landing
	 */
	{
		path: '/',
		element: <LANDING.DASHBOARD />,
	},
	/**
	 * Auth Page
	 */
	{
		path: LaunchMenu.launch.path,
		element: <Login />,
	},
	/**
	 * Purchase history
	 */
	{
		path: 'purchase-history',
		element: <LANDING.PURCHASE_HISTORY />,
	},
	/**
	 * Engangement
	 */
	{
		path: 'view-content',
		element: <ENGANGEMENT.VIEW_CONTENT />,
	},
	{
		path: 'add-to-wishlist',
		element: <ENGANGEMENT.ADD_TO_WISHLIST />,
	},
	{
		path: 'add-to-cart',
		element: <ENGANGEMENT.ADD_TO_CART />,
	},
	{
		path: 'initiate-checkout',
		element: <ENGANGEMENT.INITIATED_CHECKOUTS />,
	},

	/**
	 * Requests
	 */
	{
		path: 'requests',
		element: <LANDING.REQUESTS />,
	},
];

export default routes;
