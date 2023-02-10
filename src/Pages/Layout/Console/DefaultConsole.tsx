import React, { useContext } from 'react';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { ConsumerDataMenu, ConsumerMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<>
					<Navigation menu={ConsumerMenu} id='aside-dashboard' />
					<NavigationLine />
					<Navigation menu={ConsumerDataMenu} id='aside-dashboard' />
				</>
			</AsideBody>
			<AsideFoot>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
