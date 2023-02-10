enum DataTypeEnum {
	purchase = 'purchase',
	add_to_cart = 'add_to_cart',
	add_to_wishlist = 'add_to_wishlist',
	content_view = 'content_view',
	initiate_checkout = 'initiate_checkout',
}

export interface IBaseConsumerData {
	type: DataTypeEnum;
	date: string;
}
