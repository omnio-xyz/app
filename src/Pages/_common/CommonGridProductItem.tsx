import React, { FC } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Badge from '../../components/bootstrap/Badge';
import { priceFormat } from '../../helpers/helpers';
import useDarkMode from '../../hooks/useDarkMode';

interface ICommonGridProductItemProps {
	id: string | number;
	name: string;
	category: string;
	img: string;
	unit_price: number;
	brand_id: string;
	editAction: any;
	deleteAction: any;
}

function shortenText(str: string): string {
	var endValue = Math.floor(parseInt('200px') / 10);
	return str.substring(0, endValue) + '...';
}

const CommonGridProductItem: FC<ICommonGridProductItemProps> = ({
	id,
	name,
	category,
	img,
	unit_price,
	brand_id,
	editAction,
	deleteAction,
}) => {
	const { themeStatus } = useDarkMode();
	return (
		<Card>
			<CardHeader>
				<CardLabel>
					<CardTitle>
						<Badge color='info' isLight className='ms-2'>
							{'GTIN: ' + id}
						</Badge>
						{unit_price && (
							<Badge color='success' isLight className='ms-2'>
								{priceFormat(unit_price)}
							</Badge>
						)}
					</CardTitle>
					<CardSubTitle>{shortenText(name)}</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button icon='MoreHoriz' color={themeStatus} shadow='default' />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem>
								<Button icon='Edit' onClick={() => editAction()}>
									Edit
								</Button>
							</DropdownItem>
							<DropdownItem isDivider />
							<DropdownItem>
								<Button icon='Delete' onClick={() => deleteAction()}>
									Delete
								</Button>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</CardActions>
			</CardHeader>
			<CardBody>
				<img
					src={img}
					alt=''
					height={56}
					style={{ maxHeight: 56 }}
					className='mx-auto d-block img-fluid mb-3'
				/>
				<div className='row align-items-center'>
					<div className='col'>{category}</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default CommonGridProductItem;
