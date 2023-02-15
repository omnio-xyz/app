import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import useOmnio from '../../../../contexts/omnioConsumerContext';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../../components/PaginationButtons';
import classNames from 'classnames';
import Badge from '../../../../components/bootstrap/Badge';
import useDarkMode from '../../../../hooks/useDarkMode';
import { IProduct } from '../../../../omnio/models/product/product';

interface IViewProductRow {
	id: string;
	image: string;
	name: string;
	url: string;
	credentialType: string;
	brand: string;
	seller: string;
	date: Moment;
}

const DashboardBookingPage = () => {
	const { userData } = useOmnio();

	const viewProductData: IViewProductRow[] = [];
	userData?.content_view?.forEach((content) => {
		const product: IProduct = content?.data?.product;
		viewProductData.push({
			id: product?.gtin,
			name: product?.name,
			image: product?.image,
			url: content?.data?.url,
			credentialType: 'View Product',
			brand: product?.brand_id,
			seller: content?.data?.seller,
			date: moment(content?.date),
		});
	});

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
	const { darkModeStatus } = useDarkMode();

	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='WebAsset' iconColor='info'>
							<CardTitle>View Product</CardTitle>
						</CardLabel>
						<CardLabel>A credential is generated when you view a product.</CardLabel>
					</CardHeader>
					<CardBody className='table-responsive' isScrollable>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>GTIN</th>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Date</th>
									<th scope='col'>URL</th>
									<th scope='col'>Brand</th>
									<th scope='col'>Seller</th>
								</tr>
							</thead>
							<tbody>
								{dataPagination(viewProductData, currentPage, perPage).map((i) => (
									<tr key={i.id}>
										<td>
											<div className='fs-6'>{i.id}</div>
										</td>
										<td>
											<img
												src={i.image}
												alt={i.name}
												width={54}
												height={54}
											/>
										</td>
										<td>
											<div
												className={classNames('fw-bold', {
													'link-dark': !darkModeStatus,
													'link-light': darkModeStatus,
												})}>
												{i.name}
											</div>
										</td>
										<td>
											<div className='fs-6'>{i.date.format('LLL')}</div>
										</td>
										<td>
											<span>{i.url}</span>
										</td>
										<td className='h5'>
											<Badge color={'success'}>{i.brand}</Badge>
										</td>
										<td className='h5'>
											<Badge color={'info'}>{i.seller}</Badge>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
					<PaginationButtons
						data={viewProductData}
						label='Data Credentials'
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						perPage={perPage}
						setPerPage={setPerPage}
					/>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default DashboardBookingPage;
