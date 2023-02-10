import { IPurchaseItem } from '../../consumerData/purchaseItem/purchaseItem';
import { IConsumerUserProfile } from './profile';
import { IAddToCartItem } from '../../consumerData/addToCartItem/addToCartItem';
import { IWishlistItem } from '../../consumerData/wishlistItem/wishlistItem';
import { IContentViewItem } from '../../consumerData/contentViewItem/contentViewItem';
import { IInitiatedCheckoutItem } from '../../consumerData/initiatedCheckoutItem/initiatedCheckoutItem';

export interface IConsumerUser {
	profile?: IConsumerUserProfile;
	purchase_history?: IPurchaseItem[];
	add_to_cart?: IAddToCartItem[];
	wishlist?: IWishlistItem[];
	content_view?: IContentViewItem[];
	initiate_checkouts?: IInitiatedCheckoutItem[];
}
