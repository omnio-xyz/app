import { IPurchasedProduct } from '../../product/product';
import { IBaseConsumerData } from '../baseConsumerData';

export interface IPurchaseItem extends IBaseConsumerData {
	data: {
		seller: string;
		products: IPurchasedProduct[];
		transaction: {
			amount: string;
			currency: string;
		};
	};
}
