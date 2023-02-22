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
import useDarkMode from '../../../../hooks/useDarkMode';
import classNames from 'classnames';
import Badge from '../../../../components/bootstrap/Badge';
import Button from '../../../../components/bootstrap/Button';
import Spinner from '../../../../components/bootstrap/Spinner';

interface IAddToCartRow {
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

const AddToCart = () => {
	const { userData, removeAddToCartItem, loading } = useOmnio();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
	const { darkModeStatus } = useDarkMode();

	const addToCartData: IAddToCartRow[] = [];
	userData?.add_to_cart?.forEach((addToCart) => {
		const product = addToCart?.data?.product;
		addToCartData.push({
			id: product?.gtin,
			image: product?.image,
			name: product?.name,
			credentialType: 'Add to Cart',
			category: product?.category,
			description: product?.description,
			price: product?.unit_price,
			brand: product?.brand_id,
			seller: addToCart?.data?.seller,
			date: moment(addToCart?.date),
		});
	});

	return (
		<PageWrapper>
			<Page container='fluid'>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='AddShoppingCart' iconColor='info'>
							<CardTitle>Added to Cart</CardTitle>
						</CardLabel>
						<CardLabel>
							A data credential is generated when a product is added to your cart.
						</CardLabel>
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
										<th scope='col'>Category</th>
										<th scope='col'>Price</th>
										<th scope='col'>Brand</th>
										<th scope='col'>Seller</th>
										<th scope='col' className='text-end'>
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{dataPagination(addToCartData, currentPage, perPage).map(
										(i) => (
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
													<div className='fs-6'>
														{i.date.format('LLL')}
													</div>
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
												<td className='text-end'>
													<Button
														color='dark'
														isLight
														icon='Delete'
														onClick={async () =>
															removeAddToCartItem(
																(userData?.add_to_cart || [])[
																	addToCartData.indexOf(i)
																]!,
															)
														}
													/>
												</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						)}
					</CardBody>
					<PaginationButtons
						data={addToCartData}
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

export default AddToCart;
