import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	dashboardPagesMenu,
	demoPagesMenu,
	gettingStartedPagesMenu,
  demoMenu,
} from '../menu';
import Login from '../Pages/Main/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../Pages/Main/Consumer/ConsumerProfle')),
	DASHBOARD_BOOKING: lazy(() => import('../Pages/Main/Consumer/PurchaseHistory')),
};
const SINGLE = {
	FLUID: lazy(() => import('../Pages/Main/Engagement/Search')),
};
const EDIT = {
	MODERN: lazy(() => import('../Pages/Main/demo-pages/EditModernPage')),
	FLUID: lazy(() => import('../Pages/Main/demo-pages/EditFluidPage')),
	WIZARD: lazy(() => import('../Pages/Main/demo-pages/EditWizardPage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../Pages/Main/auth/Page404')),
};
const APP = {
	PROJECT_MANAGEMENT: {
		PROJECTS_LIST: lazy(
			() => import('../Pages/Main/project-management/ProjectManagementsList'),
		),
		PROJECT: lazy(
			() => import('../Pages/Main/project-management/ProjectManagementsProject'),
		),
	},
	KNOWLEDGE: {
		GRID: lazy(() => import('../Pages/Main/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../Pages/Main/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		TRANSACTIONS: lazy(() => import('../Pages/Main/sales/TransActionsPage')),
		PRODUCTS: lazy(() => import('../Pages/Main/sales/SalesListPage')),
		PRODUCTS_GRID: lazy(() => import('../Pages/Main/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../Pages/Main/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		CALENDAR: lazy(() => import('../Pages/Main/appointment/CalendarPage')),
		EMPLOYEE_LIST: lazy(() => import('../Pages/Main/appointment/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../Pages/Main/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../Pages/Main/appointment/AppointmentList')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../Pages/Main/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../Pages/Main/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../Pages/Main/crm/Customer')),
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
		path: dashboardPagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
	{
		path: demoMenu.dashboardBooking.path,
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
		path: dashboardPagesMenu.login.path,
		element: <Login />,
	},

	/**
	 * App
	 */

	/**
	 * App > Project Management
	 */
	{
		path: demoPagesMenu.projectManagement.subMenu.list.path,
		element: <APP.PROJECT_MANAGEMENT.PROJECTS_LIST />,
	},
	{
		path: `${demoPagesMenu.projectManagement.subMenu.itemID.path}/:id`,
		element: <APP.PROJECT_MANAGEMENT.PROJECT />,
	},

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
		path: demoPagesMenu.sales.subMenu.transactions.path,
		element: <APP.SALES.TRANSACTIONS />,
	},
	{
		path: demoPagesMenu.sales.subMenu.salesList.path,
		element: <APP.SALES.PRODUCTS />,
	},
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
		path: demoPagesMenu.appointment.subMenu.calendar.path,
		element: <APP.APPOINTMENT.CALENDAR />,
	},
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
