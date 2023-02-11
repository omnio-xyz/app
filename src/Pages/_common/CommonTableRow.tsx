import React, { FC } from 'react';
import classNames from 'classnames';
import Badge from '../../components/bootstrap/Badge';
import useDarkMode from '../../hooks/useDarkMode';

export interface ICommonTableRowProps {
	id: string | number;
	image: string;
	name: string;
	category: string;
	description: string;
	price: number;
	brand: string;
	seller: string;
	date: string;
}

function shortenText(str: string): string {
	var endValue = Math.floor(parseInt('600px') / 10);
	return str.substring(0, endValue) + '...';
}

const CommonTableRow: FC<ICommonTableRowProps> = ({
	id,
	image,
	name,
	category,
	description,
	price,
	brand,
	seller,
	date,
}) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<tr>
			<td>
				<img src={image} alt={name} width={54} height={54} />
			</td>
			<td>
				<div
					className={classNames('fw-bold', {
						'link-dark': !darkModeStatus,
						'link-light': darkModeStatus,
					})}>
					{name}
				</div>
			</td>
			<td>
				<div
					className={classNames('fw-bold', {
						'link-dark': !darkModeStatus,
						'link-light': darkModeStatus,
					})}>
					{category}
				</div>
			</td>
			<td>
				<span>{shortenText(description)}</span>
			</td>
			<td>
				<span>{price}</span>
			</td>
			<td className='h5'>
				<Badge color={'success'}>{brand}</Badge>
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

export default CommonTableRow;
