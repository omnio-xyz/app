export const LaunchMenu = {
	launch: {
		id: 'launch',
		text: 'Launch',
		path: 'login',
		icon: 'Login',
	},
};

export const ConsumerMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Profile',
		path: '/',
		icon: 'Person',
		subMenu: null,
	},
};

export const ConsumerDataMenu = {
	demo: {
		id: 'demo',
		text: 'Consumer Data',
		icon: 'Extension',
	},
	dashboardBdooking: {
		id: 'engangement',
		text: 'Engagement',
		path: 'dashboard-booking',
		icon: 'PanTool',
		subMenu: {
			viewContent: {
				id: 'view-content',
				text: 'View Content',
				path: 'view-content',
				icon: 'WebAsset',
			},
			addToWishlist: {
				id: 'add-to-wishlist',
				text: 'Add to Wishlist',
				path: 'add-to-wishlist',
				icon: 'Star',
			},
			addToCart: {
				id: 'add-to-cart',
				text: 'Add to Cart',
				path: 'add-to-cart',
				icon: 'Add',
			},
			initiateCheckout: {
				id: 'initiate-checkout',
				text: 'Initiate Checkout',
				path: 'initiate-checkout',
				icon: 'ShoppingBasket',
			},
		},
	},
	dashboardBooking: {
		id: 'purchase-history',
		text: 'Purchase History',
		path: 'purchase-history',
		icon: 'History',
		subMenu: null,
	},
	dashboardBooking1: {
		id: 'requests',
		text: 'Requests',
		path: 'requests',
		icon: 'Notifications',
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
		},
	},
	appointment: {
		id: 'appointment',
		text: 'Appointment',
		path: 'appointment',
		icon: 'Today',
		subMenu: {
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
