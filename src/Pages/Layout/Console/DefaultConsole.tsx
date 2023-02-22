import React, { useContext } from 'react';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { BrandMenu, BrandProfileMenu, ConsumerDataMenu, ConsumerProfileMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';
import useOmnioBrand from '../../../contexts/omnioBrandContext';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);
	const { omnioBrandConnected } = useOmnioBrand();
	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				{omnioBrandConnected ? (
					<>
						<Navigation menu={BrandProfileMenu} id='aside-dashboard' />
						<NavigationLine />
						<Navigation menu={BrandMenu} id='aside-dashboard' />
					</>
				) : (
					<>
						<Navigation menu={ConsumerProfileMenu} id='aside-dashboard' />
						<NavigationLine />
						<Navigation menu={ConsumerDataMenu} id='aside-dashboard' />
					</>
				)}
			</AsideBody>
			<AsideFoot>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
