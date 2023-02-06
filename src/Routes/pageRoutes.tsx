import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	ConsumerMenu,
	demoPagesMenu,
	gettingStartedPagesMenu,
  ConsumerDataMenu,
  LaunchMenu,
} from '../menu';
import Login from '../Pages/Main/Account/Launch';

const LANDING = {
	DASHBOARD: lazy(() => import('../Pages/Main/Consumer/Profle')),
	DASHBOARD_BOOKING: lazy(() => import('../Pages/Main/DataHub/PurchaseHistory')),
};
const SINGLE = {
	FLUID: lazy(() => import('../Pages/Main/DataHub/Engagement/Search')),
};
const EDIT = {
	MODERN: lazy(() => import('../Pages/Main/Onboarding/EditModernPage')),
	FLUID: lazy(() => import('../Pages/Main/Onboarding/EditFluidPage')),
	WIZARD: lazy(() => import('../Pages/Main/Onboarding/EditWizardPage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../Pages/Main/Account/404')),
};
const APP = {
	KNOWLEDGE: {
		GRID: lazy(() => import('../Pages/Main/BrandStudio/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../Pages/Main/BrandStudio/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		PRODUCTS_GRID: lazy(() => import('../Pages/Main/BrandStudio/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../Pages/Main/BrandStudio/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		EMPLOYEE_LIST: lazy(() => import('../Pages/Main/BrandStudio/appointment/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../Pages/Main/BrandStudio/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../Pages/Main/BrandStudio/appointment/AppointmentList')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../Pages/Main/BrandStudio/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../Pages/Main/BrandStudio/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../Pages/Main/BrandStudio/crm/Customer')),
	},
};
const GETTING_STARTED = {
	INSTALLATION: lazy(() => import('../Pages/documentation/getting-started/InstallationPage')),
};

const presentation: RouteProps[] = [
	/**
	 * Landing
	 */
	{
		path: ConsumerMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
	{
		path: ConsumerDataMenu.dashboardBooking.path,
		element: <LANDING.DASHBOARD_BOOKING />,
	},
  
	/** ************************************************** */

	/**
	 * Pages
	 */

	/**
	 * Edit
	 */
	{
		path: demoPagesMenu.editPages.subMenu.editModern.path,
		element: <EDIT.MODERN />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editFluid.path,
		element: <EDIT.FLUID />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editWizard.path,
		element: <EDIT.WIZARD />,
	},

	/**
	 * END - Pages
	 */

	/**
	 * Auth Page
	 */
	{
		path: LaunchMenu.launch.path,
		element: <Login />,
	},

	/**
	 * App
	 */

	/**
	 * App > Knowledge
	 */
	{
		path: demoPagesMenu.knowledge.subMenu.grid.path,
		element: <APP.KNOWLEDGE.GRID />,
	},
	{
		path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/:id`,
		element: <APP.KNOWLEDGE.VIEW />,
	},

	/**
	 * App > Sales
	 */
	{
		path: demoPagesMenu.sales.subMenu.productsGrid.path,
		element: <APP.SALES.PRODUCTS_GRID />,
	},
	{
		path: `${demoPagesMenu.sales.subMenu.productID.path}/:id`,
		element: <APP.SALES.PRODUCTS_VIEW />,
	},

	/**
	 * App > Appointment
	 */
	{
		path: demoPagesMenu.appointment.subMenu.employeeList.path,
		element: <APP.APPOINTMENT.EMPLOYEE_LIST />,
	},
	{
		path: `${demoPagesMenu.appointment.subMenu.employeeID.path}/:id`,
		element: <APP.APPOINTMENT.EMPLOYEE_VIEW />,
	},
	{
		path: demoPagesMenu.appointment.subMenu.appointmentList.path,
		element: <APP.APPOINTMENT.APPOINTMENT_LIST />,
	},

	/**
	 * App > CRM
	 */
	{
		path: demoPagesMenu.crm.subMenu.dashboard.path,
		element: <APP.CRM.CRM_DASHBOARD />,
	},
	{
		path: demoPagesMenu.crm.subMenu.customersList.path,
		element: <APP.CRM.CUSTOMERS />,
	},
	{
		path: `${demoPagesMenu.crm.subMenu.customerID.path}/:id`,
		element: <APP.CRM.CUSTOMER />,
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
