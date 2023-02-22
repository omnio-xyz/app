export const LaunchMenu = {
	launch: {
		id: 'launch',
		text: 'Launch',
		path: 'login',
		icon: 'Login',
	},
};

export const ConsumerProfileMenu = {
	profile: {
		id: 'profile',
		text: 'Profile',
		path: '/',
		icon: 'Person',
		subMenu: null,
	},
};

export const ConsumerDataMenu = {
	engagement: {
		id: 'engangement',
		text: 'Engagement',
		path: '/',
		icon: 'Menu',
		subMenu: {
			viewContent: {
				id: 'view-product',
				text: 'View Product',
				path: 'view-product',
				icon: 'WebAsset',
			},
			addToWishlist: {
				id: 'favorite-product',
				text: 'Favorite Product',
				path: 'favorite-product',
				icon: 'Star',
			},
			addToCart: {
				id: 'add-to-cart',
				text: 'Add to Cart',
				path: 'add-to-cart',
				icon: 'AddShoppingCart',
			},
			initiateCheckout: {
				id: 'initiate-purchase',
				text: 'Initiate Purchase',
				path: 'initiate-purchase',
				icon: 'ShoppingBasket',
			},
		},
	},
	purchaseHistory: {
		id: 'purchase-history',
		text: 'Purchase History',
		path: 'purchase-history',
		icon: 'History',
		subMenu: null,
	},
};

export const BrandProfileMenu = {
	profile: {
		id: 'brand',
		text: 'Brand',
		path: '/brand',
		icon: 'LocalOffer',
		subMenu: null,
	},
};

export const BrandMenu = {
	productCatalog: {
		id: 'productCatalog',
		text: 'Catalog',
		path: 'brand/catalog',
		icon: 'Store',
		subMenu: null,
	},
};
