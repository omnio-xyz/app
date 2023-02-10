import { IProduct } from '../../product/product';
import { IBaseConsumerData } from '../baseConsumerData';

export interface IWishlistItem extends IBaseConsumerData {
	data: {
		seller: string;
		product: IProduct;
	};
}
