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

	const purchaseProductsHistoryData: ICommonTableRowProps[] = [];
	userData?.purchase_history?.forEach((purchase) => {
		purchase?.data?.products?.forEach((product) => {
			purchaseProductsHistoryData.push({
				id: product?.gtin,
				image: product?.image,
				name: product?.name,
				credentialType: 'Purchase',
				category: product?.category,
				description: product?.description,
				price: product?.unit_price,
				brand: product?.brand_id,
				seller: purchase?.data?.seller,
				date: purchase?.date,
			});
		});
	});

	let count = 0;
	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='WebAsset' iconColor='info'>
							<CardTitle>Purchase Products History</CardTitle>
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
									<th scope='col'>Name</th>
									<th scope='col'>Data Credential</th>
									<th scope='col'>Category</th>
									<th scope='col'>Description</th>
									<th scope='col'>Price</th>
									<th scope='col'>Brand</th>
									<th scope='col'>Seller</th>
									<th scope='col'>Date</th>
								</tr>
							</thead>
							<tbody>
								{purchaseProductsHistoryData.map((i) => (
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
