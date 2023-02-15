export const launchMenu = {
  launch: {
    icon: 'Login',
    id: 'launch',
    path: 'auth-pages/login',
    text: 'Launch',
  },
};

// Brand Studo

export const brandOnboardingMenu = {
  launch: {
    id: 'launch',
    text: 'Launch',
    path: 'brand/onboarding',
    icon: 'Login',
  },
};

export const brandProfileMenu = {
  knowledge: {
    id: 'knowledge',
    text: 'Brand Profile',
    path: 'brand/profile',
    icon: 'Person',
  },
};

export const brandStudioMenu = {
  demo: {
    id: 'demo',
    text: 'Brand Studio',
    icon: 'Extension',
  },
  profile: {
    id: 'sales',
    text: 'Sales',
    path: 'sales/grid',
    icon: 'Store',
    subMenu: {
      productsGrid: {
        id: 'productsGrid',
        text: 'Purchase History',
        path: 'sales/grid',
        icon: 'CalendarViewMonth',
      },
      productID: {
        id: 'productID',
        text: 'productID',
        path: 'product',
        hide: true,
      },
      product: {
        id: 'product',
        text: 'Product',
        path: 'sales/product/1',
        icon: 'QrCode2',
        hide: true,
      },
    },
  },
  addBillingInformation: {
    id: 'pageView',
    text: 'Query',
    path: 'add-billing-information',
    icon: 'LocationSearching',
  },
};

// Consumer

export const consumerOnboardingMenu = {
  launch: {
    id: 'launch',
    text: 'Launch',
    path: 'edit-pages/wizard',
    icon: 'Login',
  },
};

export const consumerProfileMenu = {
  profile: {
    id: 'dashboard',
    text: 'Profile',
    path: '/',
    icon: 'Person',
    subMenu: null,
  },
};

export const consumerDataMenu = {

  engagement: {
    id: 'dashboard-booking',
    text: 'Engagement',
    path: 'dashboard-booking',
    icon: 'Menu',
    subMenu: {
      viewContent: {
        id: 'pagedView',
        text: 'View Product',
        path: 'view-product',
        icon: 'WebAsset',
      },
      search: {
        id: 'search',
        text: 'Search',
        path: 'search',
        icon: 'Search',
      },
      addToWishlist: {
        id: 'pageView',
        text: 'Favorite Product',
        path: 'favorite-product',
        icon: 'Star',
      },
      addToCart: {
        id: 'pageView',
        text: 'Add to Cart',
        path: 'add-to-cart',
        icon: 'AddShoppingCart',
      },
      initiateCheckout: {
        id: 'pageView',
        text: 'Initiate Purchase',
        path: 'initiate-purchase',
        icon: 'CreditCard',
      },
    },
  },
  purchaseData: {
    id: 'purchase-history',
    text: 'Purchase History',
    path: 'purchase-history',
    icon: 'History',
    subMenu: null,
  },
  requests: {
    id: 'purchase-history',
    text: 'Requests',
    path: 'appointment/employee-list',
    icon: 'Notifications',
    subMenu: null,
  },
  product: {
    id: 'productID',
    text: 'productID',
    path: 'product',
    hide: true,
  },
};