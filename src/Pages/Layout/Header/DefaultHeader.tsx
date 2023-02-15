import CommonHeaderRight from './CommonHeaderRight';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Logo from '../../../components/Logo';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import { Link } from 'react-router-dom';

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
