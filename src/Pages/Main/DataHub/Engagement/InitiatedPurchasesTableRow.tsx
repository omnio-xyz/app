import React, { FC } from 'react';
import classNames from 'classnames';
import useDarkMode from '../../../../hooks/useDarkMode';
import Badge from '../../../../components/bootstrap/Badge';

export interface IInitiatedCheckoutTableRowProps {
	image: string;
	products: string[];
	subtotal: number;
	credentialType: string;
	seller: string;
	date: string;
}

const InitiatedCheckoutTableRow: FC<IInitiatedCheckoutTableRowProps> = ({
	image,
	products,
	subtotal,
	credentialType,
	seller,
	date,
}) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<tr>
			<td>
				<img src={image} alt={'checkout ' + date} width={54} height={54} />
			</td>
			<td>
				<div
					className={classNames('fw-bold', {
						'link-dark': !darkModeStatus,
						'link-light': darkModeStatus,
					})}>
					{products}
				</div>
			</td>
			<td>
				<span>{subtotal}</span>
			</td>
			<td>
				<span>{credentialType}</span>
			</td>
			<td className='h5'>
				<Badge color={'info'}>{seller}</Badge>
			</td>
			<td>
				<span>{date && new Date(date)?.toISOString()?.substring(0, 10)}</span>
			</td>
		</tr>
	);
};

export default InitiatedCheckoutTableRow;
