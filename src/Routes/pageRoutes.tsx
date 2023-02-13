import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
  launchMenu,
  consumerProfileMenu,
  consumerDataMenu,
  demoPagesMenu,
  brandProfileMenu,
  brandStudioMenu,
} from '../menu';
import Login from '../pages/account/Launch';

const LANDING = {
  DASHBOARD: lazy(() => import('../pages/consumer/consumerProfle')),
  DASHBOARD_BOOKING: lazy(() => import('../pages/consumer/purchaseHistory')),
};

const SINGLE = {
  FLUID: lazy(() => import('../pages/Main/oldSearch')),
};

const EDIT = {
  MODERN: lazy(() => import('../pages/consumer/viewProduct')),
  FLUID: lazy(() => import('../pages/consumer/favoriteProduct')),
  WIZARD: lazy(() => import('../pages/account/consumerOnboarding')),
};

const AUTH = {
  PAGE_404: lazy(() => import('../pages/account/404')),
};

const APP = {
  KNOWLEDGE: {
    GRID: lazy(() => import('../pages/Main/brand/brandProfile')),
  },
  SALES: {
    PRODUCTS_GRID: lazy(() => import('../pages/Main/brand/brandStudio/productCatalog')),
    PRODUCTS_VIEW: lazy(() => import('../pages/consumer/product')),
  },
  APPOINTMENT: {
    EMPLOYEE_LIST: lazy(() => import('../pages/consumer/requests')),
    EMPLOYEE_VIEW: lazy(() => import('../pages/Main/brand/appointment/EmployeePage')),
    APPOINTMENT_LIST: lazy(
      () => import('../pages/consumer/addtoCart'),
    ),
  },
  CRM: {
    CRM_DASHBOARD: lazy(() => import('../pages/consumer/initiatePurchase')),
    CUSTOMERS: lazy(() => import('../pages/Main/brand/query')),
    CUSTOMER: lazy(() => import('../pages/Main/brand/crm/Customer')),
  },
};

const GETTING_STARTED = {
  INSTALLATION: lazy(() => import('../pages/consumer/search')),
};

const presentation: RouteProps[] = [
  /**
   * Profile
   */
  {
    path: consumerProfileMenu.profile.path,
    element: <LANDING.DASHBOARD />,
  },
  /** ************************************************** */
  /**
   * View Content
   */
  {
    path: consumerDataMenu.engagement.subMenu.viewContent.path,
    element: <EDIT.MODERN />,
  },
  /**
   * Search
   */
  {
    path: consumerDataMenu.engagement.subMenu.search.path,
    element: <GETTING_STARTED.INSTALLATION />,
  },
  /**
   * Add to Wishlist
   */
  {
    path: consumerDataMenu.engagement.subMenu.addToWishlist.path,
    element: <EDIT.FLUID />,
  },
  /**
  * Add to Cart
  */
  {
    path: consumerDataMenu.engagement.subMenu.addToCart.path,
    element: <APP.APPOINTMENT.APPOINTMENT_LIST />,
  },
  /**
  * Initiate Checkout
  */
  {
    path: consumerDataMenu.engagement.subMenu.initiateCheckout.path,
    element: <APP.CRM.CRM_DASHBOARD />,
  },
  /**
  * Add Payment Information
  */
  {
    path: brandStudioMenu.addBillingInformation.path,
    element: <APP.CRM.CUSTOMERS />,
  },
  /** ************************************************** */
  /**
   * Purchase History
   */
  {
    path: consumerDataMenu.purchaseData.path,
    element: <LANDING.DASHBOARD_BOOKING />,
  },
  /** ************************************************** */
  /**
   * Requests
   */
  {
    path: consumerDataMenu.requests.path,
    element: <APP.APPOINTMENT.EMPLOYEE_LIST />,
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
    path: launchMenu.launch.path,
    element: <Login />,
  },

  /**
   * App
   */

  /**
   * App > Knowledge
   */
  {
    path: brandProfileMenu.knowledge.path,
    element: <APP.KNOWLEDGE.GRID />,
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
   * App > CRM
   */

  {
    path: `${demoPagesMenu.crm.subMenu.customerID.path}/:id`,
    element: <APP.CRM.CUSTOMER />,
  },
];

const contents = [...presentation];

export default contents;