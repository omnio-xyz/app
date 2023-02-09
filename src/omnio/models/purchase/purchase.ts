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
			date: Date;
			amount: string;
			currency: string;
		};
	};
}
