import { IProduct } from '../../product/product';
import { IBaseConsumerData } from '../baseConsumerData';

export interface IInitiatedCheckoutItem extends IBaseConsumerData {
	data: {
		seller: string;
		products: IProduct[];
	};
}
