export const launchMenu = {
  launch: {
    id: 'launch',
    text: 'Launch',
    path: 'auth-pages/login',
    icon: 'Login',
  },
};

// Brand Studo

export const brandOnboardingMenu = {
  launch: {
    id: 'launch',
    text: 'Launch',
    path: 'edit-pages/wizard',
    icon: 'Login',
  },
};

export const brandProfileMenu = {
  knowledge: {
    id: 'knowledge',
    text: 'Profile',
    path: 'knowledge/grid',
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
    text: 'Product Catalog',
    path: 'sales/grid',
    icon: 'Store',
    subMenu: null,
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
  sales: {
    id: 'sales',
    text: 'Sales',
    path: 'sales/grid',
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
  crm: {
    id: 'crm',
    text: 'CRM',
    path: 'crm',
    icon: 'Contacts',
    subMenu: {
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
        hide: true,
      },
    },
  },
};