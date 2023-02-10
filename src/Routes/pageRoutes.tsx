import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { demoPagesMenu, gettingStartedPagesMenu, LaunchMenu } from '../menu';
import Login from '../Pages/Main/Account/Launch';

const LANDING = {
	DASHBOARD: lazy(() => import('../Pages/Main/Consumer/Profle')),
	DASHBOARD_BOOKING: lazy(() => import('../Pages/Main/DataHub/purchaseHistory/purchaseHistory')),
};

const EDIT = {
	MODERN: lazy(() => import('../Pages/Main/DataHub/Engagement/viewContent')),
	FLUID: lazy(() => import('../Pages/Main/DataHub/Engagement/addToWishlist')),
	WIZARD: lazy(() => import('../Pages/Main/Onboarding/EditWizardPage')),
};

const APP = {
	KNOWLEDGE: {
		GRID: lazy(() => import('../Pages/Main/BrandStudio/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../Pages/Main/BrandStudio/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		PRODUCTS_GRID: lazy(() => import('../Pages/Main/BrandStudio/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../Pages/Main/DataHub/purchaseHistory/productView')),
	},
	APPOINTMENT: {
		EMPLOYEE_LIST: lazy(() => import('../Pages/Main/DataHub/Engagement/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../Pages/Main/BrandStudio/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../Pages/Main/DataHub/Engagement/addToCart')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../Pages/Main/DataHub/Engagement/initiateCheckout')),
		CUSTOMERS: lazy(() => import('../Pages/Main/DataHub/Engagement/addBillingInformation')),
		CUSTOMER: lazy(() => import('../Pages/Main/BrandStudio/crm/Customer')),
	},
};
const GETTING_STARTED = {
	INSTALLATION: lazy(() => import('../Pages/Main/DataHub/Engagement/Search')),
};

const presentation: RouteProps[] = [
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
		element: <LANDING.DASHBOARD_BOOKING />,
	},
	/**
	 * Engangement
	 */
	{
		path: 'view-content',
		element: <EDIT.MODERN />,
	},
	{
		path: 'add-to-wishlist',
		element: <EDIT.FLUID />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editWizard.path,
		element: <EDIT.WIZARD />,
	},
	{
		path: 'add-to-cart',
		element: <APP.APPOINTMENT.APPOINTMENT_LIST />,
	},
	{
		path: 'initiate-checkout',
		element: <APP.CRM.CRM_DASHBOARD />,
	},

	/**
	 * Requests
	 */
	{
		path: 'requests',
		element: <APP.APPOINTMENT.EMPLOYEE_LIST />,
	},
];

const documentation: RouteProps[] = [
	/**
	 * Getting Started
	 */
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.installation.path,
		element: <GETTING_STARTED.INSTALLATION />,
	},
];
const contents = [...presentation, ...documentation];

export default contents;
