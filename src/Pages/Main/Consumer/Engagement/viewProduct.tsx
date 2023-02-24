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
import Button from '../../../../components/bootstrap/Button';
import Spinner from '../../../../components/bootstrap/Spinner';
import { useFormik } from 'formik';
import SubHeader, { SubHeaderLeft } from '../../../../layout/SubHeader/SubHeader';
import Icon from '../../../../components/icon/Icon';
import Input from '../../../../components/bootstrap/forms/Input';

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
	const { userData, removeContentViewItem, loading } = useOmnio();

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

	const formik = useFormik({
		initialValues: {
			searchInput: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {},
	});

	const filteredData = viewProductData.filter((f) =>
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
						placeholder='Search viewed product'
						onChange={formik.handleChange}
						value={formik.values.searchInput}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='WebAsset' iconColor='info'>
							<CardTitle>Viewed Products</CardTitle>
						</CardLabel>
						<CardLabel>A credential is generated when you view a product.</CardLabel>
					</CardHeader>
					<CardBody className='table-responsive' isScrollable>
						{loading ? (
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<Spinner size={45} className='row' />
							</div>
						) : (
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
										<th scope='col' className='text-end'>
											Actions
										</th>
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
												<span>{i.url}</span>
											</td>
											<td className='h5'>
												<Badge color={'success'}>{i.brand}</Badge>
											</td>
											<td className='h5'>
												<Badge color={'info'}>{i.seller}</Badge>
											</td>
											<td className='text-end'>
												<Button
													color='dark'
													isLight
													icon='Delete'
													onClick={async () =>
														removeContentViewItem(
															(userData?.content_view || [])[
																viewProductData.indexOf(i)
															]!,
														)
													}
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
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

export default DashboardBookingPage;
