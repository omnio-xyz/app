export const dashboardPagesMenu = {
  login: {
		id: 'login',
		text: 'Launch',
		path: 'auth-pages/login',
		icon: 'Login',
	},
	dashboard: {
		id: 'dashboard',
		text: 'Consumer Profile',
		path: '/',
		icon: 'PersonAdd',
		subMenu: null,
	},
};


export const userMenu = {
  login: {
		id: 'login',
		text: 'Launch',
		path: 'auth-pages/login',
		icon: 'Login',
	},
};

export const demoMenu = {
  demo: {
		id: 'demo',
		text: 'Consumer Data',
		icon: 'Extension',
	},
  dashboardBdooking: {
		id: 'dashboard-booking',
		text: 'Engagement',
		path: 'dashboard-booking',
		icon: 'emoji_transportation',
		subMenu: {
      editMeodern: {
				id: 'editModern',
				text: 'Search',
				path: 'edit-pages/modern',
				icon: 'AutoAwesomeMosaic',
			},
			editModern: {
				id: 'editModern',
				text: 'Page View',
				path: 'edit-pages/modern',
				icon: 'AutoAwesomeMosaic',
			},
		},
	},
	dashboardBooking: {
		id: 'dashboard-booking',
		text: 'Purchase History',
		path: 'dashboard-booking',
		icon: 'emoji_transportation',
		subMenu: null,
	},
};

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	editPages: {
		id: 'editPages',
		text: 'Edit Pages',
		path: 'edit-pages',
		icon: 'drive_file_rename_outline ',
		subMenu: {
			editModern: {
				id: 'editModern',
				text: 'Modern Edit',
				path: 'edit-pages/modern',
				icon: 'AutoAwesomeMosaic',
			},
			editFluid: {
				id: 'editFluid',
				text: 'Fluid Edit',
				path: 'edit-pages/fluid',
				icon: 'ViewDay',
			},
			editWizard: {
				id: 'editWizard',
				text: 'Wizard Edit',
				path: 'edit-pages/wizard',
				icon: 'LinearScale',
			},
		},
	},

	app: {
		id: 'app',
		text: 'Apps',
		icon: 'Extension',
	},
	projectManagement: {
		id: 'projectManagement',
		text: 'Project Management',
		path: 'project-management',
		icon: 'AutoStories',
		subMenu: {
			list: {
				id: 'list',
				text: 'Projects',
				path: 'project-management/list',
				icon: 'AutoStories',
			},
			itemID: {
				id: 'projectID',
				text: 'projectID',
				path: 'project-management/project',
				hide: true,
			},
			item: {
				id: 'item',
				text: 'Project',
				path: 'project-management/project/1',
				icon: 'Book',
			},
		},
	},
	knowledge: {
		id: 'knowledge',
		text: 'Knowledge',
		path: 'knowledge',
		icon: 'AutoStories',
		subMenu: {
			grid: {
				id: 'grid',
				text: 'Knowledge Grid',
				path: 'knowledge/grid',
				icon: 'AutoStories',
			},
			itemID: {
				id: 'itemID',
				text: 'itemID',
				path: 'knowledge/item',
				hide: true,
			},
			item: {
				id: 'item',
				text: 'Item',
				path: 'knowledge/item/1',
				icon: 'Book',
			},
		},
	},
	sales: {
		id: 'sales',
		text: 'Sales',
		path: 'sales',
		icon: 'Store',
		subMenu: {
			dashboard: dashboardPagesMenu.dashboard,
			salesList: {
				id: 'products',
				text: 'Sales List',
				path: 'sales/sales-list',
				icon: 'FactCheck',
			},
			productsGrid: {
				id: 'productsGrid',
				text: 'Products Grid',
				path: 'sales/grid',
				icon: 'CalendarViewMonth',
			},
			productID: {
				id: 'productID',
				text: 'productID',
				path: 'sales/product',
				hide: true,
			},
			product: {
				id: 'product',
				text: 'Product',
				path: 'sales/product/1',
				icon: 'QrCode2',
			},
			transactions: {
				id: 'transactions',
				text: 'Transactions',
				path: 'sales/transactions',
				icon: 'PublishedWithChanges',
			},
		},
	},
	appointment: {
		id: 'appointment',
		text: 'Appointment',
		path: 'appointment',
		icon: 'Today',
		subMenu: {
			dashboard: demoMenu.dashboardBooking,
			calendar: {
				id: 'calendar',
				text: 'Calendar',
				path: 'appointment/calendar',
				icon: 'EditCalendar',
			},
			employeeList: {
				id: 'employeeList',
				text: 'Employee List',
				path: 'appointment/employee-list',
				icon: 'PersonSearch',
			},
			employeeID: {
				id: 'employeeID',
				text: 'employeeID',
				path: 'appointment/employee',
				hide: true,
			},
			employee: {
				id: 'employee',
				text: 'Employee',
				path: 'appointment/employee/1',
				icon: 'QrCode2',
			},
			appointmentList: {
				id: 'appointmentList',
				text: 'Appointment List',
				path: 'appointment/appointment-list',
				icon: 'Event',
			},
		},
	},
	crm: {
		id: 'crm',
		text: 'CRM',
		path: 'crm',
		icon: 'Contacts',
		subMenu: {
			dashboard: {
				id: 'dashboard',
				text: 'CRM Dashboard',
				path: 'crm/dashboard',
				icon: 'RecentActors',
			},
			customersList: {
				id: 'customersList',
				text: 'Customers',
				path: 'crm/customers',
				icon: 'PersonSearch',
			},
			customerID: {
				id: 'customerID',
				text: 'customerID',
				path: 'crm/customer',
				hide: true,
			},
			customer: {
				id: 'customer',
				text: 'Customer',
				path: 'crm/customer/1',
				icon: 'Badge',
			},
			// sales: {
			// 	id: 'sales',
			// 	text: 'Sales',
			// 	path: 'crm/sales',
			// 	icon: 'Storefront',
			// },
			// invoiceID: {
			// 	id: 'invoiceID',
			// 	text: 'invoiceID',
			// 	path: 'crm/invoice',
			// 	hide: true,
			// },
			// invoice: {
			// 	id: 'invoice',
			// 	text: 'Invoice',
			// 	path: 'crm/invoice/1',
			// 	icon: 'Receipt',
			// },
		},
	},
};

export const gettingStartedPagesMenu = {
	gettingStarted: {
		id: 'gettingStarted',
		text: 'About',
		path: 'getting-started',
		icon: 'Book',
		subMenu: {
			installation: {
				id: 'installation',
				text: 'Omnio Protocol',
				path: 'getting-started/installation',
				icon: 'BuildCircle',
			},
		},
	},
};

export const productsExampleMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
