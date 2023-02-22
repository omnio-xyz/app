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
import Button from '../../../../components/bootstrap/Button';
import useDarkMode from '../../../../hooks/useDarkMode';
import Spinner from '../../../../components/bootstrap/Spinner';

interface IFavoriteProductRow {
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

const FavoriteProducts = () => {
	const { userData, removeWishlistItem, loading } = useOmnio();

	const addToWishListData: IFavoriteProductRow[] = [];
	userData?.wishlist?.forEach((favorite) => {
		const product = favorite?.data?.product;
		addToWishListData.push({
			id: product?.gtin,
			image: product?.image,
			name: product?.name,
			credentialType: 'Favorite Product',
			category: product?.category,
			description: product?.description,
			price: product?.unit_price,
			brand: product?.brand_id,
			seller: favorite?.data?.seller,
			date: moment(favorite?.date),
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
						<CardLabel icon='Star' iconColor='info'>
							<CardTitle>Favorite Products</CardTitle>
						</CardLabel>
						<CardLabel>
							A data credential is generated when you favorite a product.
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
									{dataPagination(addToWishListData, currentPage, perPage).map(
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
															removeWishlistItem(
																(userData?.wishlist || [])[
																	addToWishListData.indexOf(i)
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
						data={addToWishListData}
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

export default FavoriteProducts;
