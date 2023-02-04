import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	dashboardPagesMenu,
	demoPagesMenu,
	gettingStartedPagesMenu,
  demoMenu,
} from '../menu';
import Login from '../pages/console/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/console/dashboard/DashboardPage')),
	DASHBOARD_BOOKING: lazy(() => import('../pages/console/dashboard/DashboardBookingPage')),
};
const SINGLE = {
	FLUID: lazy(() => import('../pages/console/single-pages/SingleFluidPage')),
};
const EDIT = {
	MODERN: lazy(() => import('../pages/console/demo-pages/EditModernPage')),
	FLUID: lazy(() => import('../pages/console/demo-pages/EditFluidPage')),
	WIZARD: lazy(() => import('../pages/console/demo-pages/EditWizardPage')),
};
const PRICING = {
	PRICING_TABLE: lazy(() => import('../pages/console/pricing/PricingTablePage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/console/auth/Page404')),
};
const APP = {
	PROJECT_MANAGEMENT: {
		PROJECTS_LIST: lazy(
			() => import('../pages/console/project-management/ProjectManagementsList'),
		),
		PROJECT: lazy(
			() => import('../pages/console/project-management/ProjectManagementsProject'),
		),
	},
	KNOWLEDGE: {
		GRID: lazy(() => import('../pages/console/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../pages/console/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		TRANSACTIONS: lazy(() => import('../pages/console/sales/TransActionsPage')),
		PRODUCTS: lazy(() => import('../pages/console/sales/SalesListPage')),
		PRODUCTS_GRID: lazy(() => import('../pages/console/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../pages/console/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		CALENDAR: lazy(() => import('../pages/console/appointment/CalendarPage')),
		EMPLOYEE_LIST: lazy(() => import('../pages/console/appointment/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../pages/console/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../pages/console/appointment/AppointmentList')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../pages/console/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../pages/console/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../pages/console/crm/Customer')),
	},
};
const GETTING_STARTED = {
	INSTALLATION: lazy(() => import('../pages/documentation/getting-started/InstallationPage')),
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
	 * Single Pages
	 */
	{
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <SINGLE.FLUID />,
	},

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
	{
		path: demoPagesMenu.pricingTable.path,
		element: <PRICING.PRICING_TABLE />,
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
