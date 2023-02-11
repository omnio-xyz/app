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
import ViewContentTableRow, { IViewContentTableRowProps } from './ViewContentTableRow';

const DashboardBookingPage = () => {
	const { userData } = useOmnio();

	const viewContentData: IViewContentTableRowProps[] = [];
	userData?.content_view?.forEach((content) => {
		viewContentData.push({
			url: content?.data?.url,
			seller: content?.data?.seller,
			date: content?.date,
		});
	});

	let count = 0;
	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='WebAsset' iconColor='info'>
							<CardTitle>View Content</CardTitle>
						</CardLabel>
					</CardHeader>
					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>URL</th>
									<th scope='col'>Seller</th>
									<th scope='col'>Date</th>
								</tr>
							</thead>
							<tbody>
								{viewContentData.map((i) => (
									<ViewContentTableRow
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
