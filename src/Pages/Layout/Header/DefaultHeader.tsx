import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import CommonHeaderRight from './CommonHeaderRight';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';

const DefaultHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<Link to='/'>
					<Logo height={32} />
				</Link>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default DefaultHeader;
