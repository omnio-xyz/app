import { IProduct } from '../product/product';

enum DataTypeEnum {
	purchase = 'purchase',
}

export interface IPurchase {
	type: DataTypeEnum.purchase;
	data: {
		seller: string;
		products: IProduct[];
		transaction: {
			date: string;
			amount: string;
			currency: string;
		};
	};
}
