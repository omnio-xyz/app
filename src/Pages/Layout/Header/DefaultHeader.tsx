import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';
import Brand from '../../../layout/Brand/Brand';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';

const DefaultHeader = () => {
	const { width } = useDeviceScreen();
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
