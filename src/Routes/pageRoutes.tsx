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
	FAVORITE_PRODUCTS: lazy(() => import('../Pages/Main/DataHub/Engagement/favoriteProducts')),
	VIEW_PRODUCT: lazy(() => import('../Pages/Main/DataHub/Engagement/viewProduct')),
	INITIATED_PURCHASES: lazy(() => import('../Pages/Main/DataHub/Engagement/initiatedPurchases')),
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
		path: 'view-product',
		element: <ENGANGEMENT.VIEW_PRODUCT />,
	},
	{
		path: 'favorite-product',
		element: <ENGANGEMENT.FAVORITE_PRODUCTS />,
	},
	{
		path: 'add-to-cart',
		element: <ENGANGEMENT.ADD_TO_CART />,
	},
	{
		path: 'initiate-purchase',
		element: <ENGANGEMENT.INITIATED_PURCHASES />,
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
