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
import useOmnio from '../../../../contexts/omnioContext';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../../components/PaginationButtons';
import classNames from 'classnames';
import Badge from '../../../../components/bootstrap/Badge';
import useDarkMode from '../../../../hooks/useDarkMode';

interface IInitiatedPurchaseRow {
	image: string;
	products: string[];
	subtotal: number;
	credentialType: string;
	seller: string;
	date: Moment;
}

const InitiatedPurchases = () => {
	const { userData } = useOmnio();

	const initiatedCheckoutData: IInitiatedPurchaseRow[] = [];
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
			date: moment(initiatedCheckout?.date),
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
									<th scope='col'>Date</th>
									<th scope='col'>Subtotal</th>
									<th scope='col'>Seller</th>
								</tr>
							</thead>
							<tbody>
								{dataPagination(initiatedCheckoutData, currentPage, perPage).map(
									(i) => (
										<tr key={i.id}>
											<td>
												<img
													src={i.image}
													alt={'checkout ' + i.date}
													width={54}
													height={54}
												/>
											</td>
											<td>
												{i.products.map((prod: string) => (
													<div
														key={prod}
														className={classNames('fw-bold', {
															'link-dark': !darkModeStatus,
															'link-light': darkModeStatus,
														})}>
														{prod}
													</div>
												))}
											</td>
											<td>
												<div className='fs-6'>{i.date.format('LLL')}</div>
											</td>
											<td>
												<span>{i.subtotal}</span>
											</td>
											<td className='h5'>
												<Badge color={'info'}>{i.seller}</Badge>
											</td>
										</tr>
									),
								)}
							</tbody>
						</table>
					</CardBody>
					<PaginationButtons
						data={initiatedCheckoutData}
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

export default InitiatedPurchases;
