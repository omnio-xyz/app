import React from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import useOmnio from '../../../../contexts/omnioContext';
import InitiatedCheckoutTableRow, {
	IInitiatedCheckoutTableRowProps,
} from './InitiatedPurchasesTableRow';

const DashboardBookingPage = () => {
	const { userData } = useOmnio();

	const initiatedCheckoutData: IInitiatedCheckoutTableRowProps[] = [];
	userData?.initiated_checkouts?.forEach((initiatedCheckout) => {
		const products = initiatedCheckout?.data?.products?.map((p) => p.name);
		const subtotal = initiatedCheckout?.data?.products
			?.map((p) => p?.unit_price || 0)
			.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
		initiatedCheckoutData.push({
			image: initiatedCheckout?.data?.products[0]?.image,
			products: products,
			subtotal: subtotal,
			credentialType: 'Initiate Purchase',
			seller: initiatedCheckout?.data?.seller,
			date: initiatedCheckout?.date,
		});
	});

	let count = 0;
	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='ShoppingBasket' iconColor='info'>
							<CardTitle>Initiated Purchases</CardTitle>
						</CardLabel>
						<CardLabel>
							A data credential is generated when you initiate a purchase.
						</CardLabel>
					</CardHeader>
					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>Products</th>
									<th scope='col'>Subtotal</th>
									<th scope='col'>Data Credential</th>
									<th scope='col'>Seller</th>
									<th scope='col'>Date</th>
								</tr>
							</thead>
							<tbody>
								{initiatedCheckoutData.map((i) => (
									<InitiatedCheckoutTableRow
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
