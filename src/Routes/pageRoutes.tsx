import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { LaunchMenu } from '../menu';
import Login from '../Pages/Main/Account/Launch';

const CONSUMER = {
	PROFILE: lazy(() => import('../Pages/Main/Consumer/Profile')),
	PURCHASE_HISTORY: lazy(() => import('../Pages/Main/Consumer/PurchaseHistory/purchaseHistory')),
	REQUESTS: lazy(() => import('../Pages/Main/Consumer/PurchaseHistory/purchaseHistory')),
};

const CONSUMER_ENGAGEMENT = {
	ADD_TO_CART: lazy(() => import('../Pages/Main/Consumer/Engagement/addToCart')),
	FAVORITE_PRODUCTS: lazy(() => import('../Pages/Main/Consumer/Engagement/favoriteProducts')),
	VIEW_PRODUCT: lazy(() => import('../Pages/Main/Consumer/Engagement/viewProduct')),
	INITIATED_PURCHASES: lazy(() => import('../Pages/Main/Consumer/Engagement/initiatedPurchases')),
};

const BRAND = {
	PROFILE: lazy(() => import('../Pages/Main/Brand/Profile')),
	CATALOG: lazy(() => import('../Pages/Main/Brand/ProductsCatalog')),
};

const routes: RouteProps[] = [
	/**
	 * Auth Page
	 */
	{
		path: LaunchMenu.launch.path,
		element: <Login />,
	},

	/**
	 * ==== Consumer Pages ====
	 * Landing
	 */
	{
		path: '/',
		element: <CONSUMER.PROFILE />,
	},
	/**
	 * Purchase history
	 */
	{
		path: 'purchase-history',
		element: <CONSUMER.PURCHASE_HISTORY />,
	},
	/**
	 * Engangement
	 */
	{
		path: 'view-product',
		element: <CONSUMER_ENGAGEMENT.VIEW_PRODUCT />,
	},
	{
		path: 'favorite-product',
		element: <CONSUMER_ENGAGEMENT.FAVORITE_PRODUCTS />,
	},
	{
		path: 'add-to-cart',
		element: <CONSUMER_ENGAGEMENT.ADD_TO_CART />,
	},
	{
		path: 'initiate-purchase',
		element: <CONSUMER_ENGAGEMENT.INITIATED_PURCHASES />,
	},
	/**
	 * Requests
	 */
	{
		path: 'requests',
		element: <CONSUMER.REQUESTS />,
	},

	/**
	 * ==== Brand Pages ====
	 * Landing
	 */
	{
		path: 'brand',
		element: <BRAND.PROFILE />,
	},
	/**
	 * Product Catalog
	 */
	{
		path: 'brand/catalog',
		element: <BRAND.CATALOG />,
	},
];

export default routes;
