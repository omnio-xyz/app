import { IProduct } from '../../product/product';
import { IBaseConsumerData } from '../baseConsumerData';

export interface IAddToCartItem extends IBaseConsumerData {
	data: {
		seller: string;
		product: IProduct;
	};
}
