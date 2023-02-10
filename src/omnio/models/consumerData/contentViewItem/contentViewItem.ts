import { IProduct } from '../../product/product';
import { IBaseConsumerData } from '../baseConsumerData';

export interface IContentViewItem extends IBaseConsumerData {
	data: {
		url: string;
		seller: string;
		product: IProduct;
	};
}
