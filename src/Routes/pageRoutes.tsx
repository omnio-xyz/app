import Launch from '../pages/account/Launch';
import { brandOnboardingMenu, brandProfileMenu, brandStudioMenu, consumerDataMenu, consumerOnboardingMenu, consumerProfileMenu, launchMenu } from '../menu';
import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const Brand = {
  Onboarding: lazy(() => import('../pages/brand/brandOnboarding')),
  Profile: lazy(() => import('../pages/brand/brandProfile')),
  productCatalog: lazy(() => import('../pages/brand/productCatalog')),
  Query: lazy(() => import('../pages/brand/query')),
  brandProduct: lazy(() => import('../pages/brand/brandProduct')),
};

const Consumer = {
  Onboarding: lazy(() => import('../pages/consumer/consumerOnboarding')),
  Profile: lazy(() => import('../pages/consumer/consumerProfle')),
  Feature: {
    viewProduct: lazy(() => import('../pages/consumer/viewProduct')),
    Search: lazy(() => import('../pages/consumer/search')),
    favoriteProduct: lazy(() => import('../pages/consumer/favoriteProduct')),
    addToCart: lazy(() => import('../pages/consumer/addtoCart')),
    initiatePurchase: lazy(() => import('../pages/consumer/initiatePurchase')),
  },
  purchaseHistory: lazy(() => import('../pages/consumer/purchaseHistory')),
  Product: lazy(() => import('../pages/consumer/productIdentity')),
  Requests: lazy(() => import('../pages/consumer/requests')),
};

const AUTH = {
  PAGE_404: lazy(() => import('../pages/account/404')),
};


const presentation: RouteProps[] = [
  /**
   * Onboarding
   */
  {
    path: consumerOnboardingMenu.launch.path,
    element: <Consumer.Onboarding />,
  },
  /**
   * Profile
   */
  {
    path: consumerProfileMenu.profile.path,
    element: <Consumer.Profile />,
  },
  /** ************************************************** */
  /**
   * View Content
   */
  {
    path: consumerDataMenu.engagement.subMenu.viewContent.path,
    element: <Consumer.Feature.viewProduct />,
  },
  /**
   * Search
   */
  {
    path: consumerDataMenu.engagement.subMenu.search.path,
    element: <Consumer.Feature.Search />,
  },
  /**
   * Favorite Product
   */
  {
    path: consumerDataMenu.engagement.subMenu.addToWishlist.path,
    element: <Consumer.Feature.favoriteProduct />,
  },
  /**
  * Add to Cart
  */
  {
    path: consumerDataMenu.engagement.subMenu.addToCart.path,
    element: <Consumer.Feature.addToCart />,
  },
  /**
  * Initiate Purchase
  */
  {
    path: consumerDataMenu.engagement.subMenu.initiateCheckout.path,
    element: <Consumer.Feature.initiatePurchase />,
  },
  /** ************************************************** */
  /**
   * Purchase History
   */
  {
    path: consumerDataMenu.purchaseData.path,
    element: <Consumer.purchaseHistory />,
  },
  /** ************************************************** */
  /**
   * Requests
   */
  {
    path: consumerDataMenu.requests.path,
    element: <Consumer.Requests />,
  },



  /**
  * Add Payment Information
  */
  {
    path: brandStudioMenu.addBillingInformation.path,
    element: <Brand.Query />,
  },

  {
    path: brandOnboardingMenu.launch.path,
    element: <Brand.Onboarding />,
  },

  /**
   * END - Pages
   */

  /**
   * Auth Page
   */
  {
    path: launchMenu.launch.path,
    element: <Launch />,
  },

  /**
   * App
   */

  /**
   * App > Knowledge
   */
  {
    path: brandProfileMenu.knowledge.path,
    element: <Consumer.Onboarding />,
  },

  /**
   * App > Sales
   */
  {
    path: brandStudioMenu.Catalog.path,
    element: <Brand.productCatalog />,
  },

  {
    path: `${brandStudioMenu.productID.path}/:id`,
    element: <Brand.brandProduct />,
  },

  {
    path: `${consumerDataMenu.productIdentity.path}/:id`,
    element: <Consumer.Product />,
  },

];

const contents = [...presentation];

export default contents;