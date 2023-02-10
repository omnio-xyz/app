import React from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import CommonTableRow, { ICommonTableRowProps } from '../../../_common/CommonTableRow';
import useOmnio from '../../../../contexts/omnioContext';

const DashboardBookingPage = () => {
	const { userData } = useOmnio();

	const addToCartData: ICommonTableRowProps[] = [];
	userData?.add_to_cart?.forEach((addToCart) => {
		const product = addToCart?.data?.product;
		addToCartData.push({
			id: product?.gtin,
			image: product?.image,
			name: product?.name,
			category: product?.category,
			description: product?.description,
			price: product?.unit_price,
			brand: product?.brand_id,
			seller: addToCart?.data?.seller,
			date: addToCart?.date,
		});
	});

	let count = 0;
	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='WebAsset' iconColor='info'>
							<CardTitle>Add to Cart</CardTitle>
						</CardLabel>
					</CardHeader>
					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Category</th>
									<th scope='col'>Description</th>
									<th scope='col'>Price</th>
									<th scope='col'>Brand</th>
									<th scope='col'>Seller</th>
									<th scope='col'>Date</th>
								</tr>
							</thead>
							<tbody>
								{addToCartData.map((i) => (
									<CommonTableRow
										key={count++}
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...i}
									/>
								))}
							</tbody>
						</table>
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default DashboardBookingPage;
