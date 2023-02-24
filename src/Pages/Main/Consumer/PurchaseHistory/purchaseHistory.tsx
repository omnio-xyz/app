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
import { useFormik } from 'formik';
import SubHeader, { SubHeaderLeft } from '../../../../layout/SubHeader/SubHeader';
import Icon from '../../../../components/icon/Icon';
import Input from '../../../../components/bootstrap/forms/Input';

interface IPurchaseProductRow {
	id: string | number;
	image: string;
	name: string;
	credentialType: string;
	category: string;
	description: string;
	price: number;
	brand: string;
	seller: string;
	date: Moment;
}

const PurchaseHistory = () => {
	const { userData } = useOmnio();

	const purchaseProductsHistoryData: IPurchaseProductRow[] = [];
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
				date: moment(purchase?.date),
			});
		});
	});

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
	const { darkModeStatus } = useDarkMode();

	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {},
	});

	const filteredData = purchaseProductsHistoryData.filter((f) =>
		f.name.toLowerCase().includes(formik.values.searchInput.toLowerCase()),
	);

	return (
		<PageWrapper>
			<SubHeader>
				<SubHeaderLeft>
					<label
						className='border-0 bg-transparent cursor-pointer me-0'
						htmlFor='searchInput'>
						<Icon icon='Search' size='2x' color='primary' />
					</label>
					<Input
						id='searchInput'
						type='search'
						className='border-0 shadow-none bg-transparent'
						placeholder='Search purchase product'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
			</SubHeader>
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
									<th scope='col'>GTIN</th>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Date</th>
									<th scope='col'>Category</th>
									<th scope='col'>Price</th>
									<th scope='col'>Brand</th>
									<th scope='col'>Seller</th>
								</tr>
							</thead>
							<tbody>
								{dataPagination(filteredData, currentPage, perPage).map((i) => (
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
											<div
												className={classNames('fw-bold', {
													'link-dark': !darkModeStatus,
													'link-light': darkModeStatus,
												})}>
												{i.category}
											</div>
										</td>
										<td>
											<span>{i.price}</span>
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
						data={filteredData}
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

export default PurchaseHistory;
