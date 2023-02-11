import React, { FC } from 'react';
import Badge from '../../../../components/bootstrap/Badge';

export interface IViewContentTableRowProps {
	url: string;
	seller: string;
	date: string;
}

const ViewContentTableRow: FC<IViewContentTableRowProps> = ({ url, seller, date }) => {
	return (
		<tr>
			<td>
				<span>{url}</span>
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

export default ViewContentTableRow;
