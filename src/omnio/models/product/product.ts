export interface IProduct {
	gtin: string;
	name: string;
	category: string;
	description: string;
	brand_id: string;
	image: string;
	unit_price: number;
}

export interface IPurchasedProduct extends IProduct {
	quantity: number;
}
