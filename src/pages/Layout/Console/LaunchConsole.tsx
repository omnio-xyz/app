import { ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { LaunchMenu, ConsumerDataMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';

import useDarkMode from '../../../hooks/useDarkMode';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';

const LaunchConsole = () => {
  const { asideStatus, setAsideStatus } = useContext(ThemeContext);

  const [doc, setDoc] = useState(
    localStorage.getItem('facit_asideDocStatus') === 'true' || false,
  );

  const { t } = useTranslation(['translation', 'menu']);

  const { darkModeStatus } = useDarkMode();

  return (
    <Aside>
      <AsideHead>
        <Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
      </AsideHead>
      <AsideBody>
        {!doc && (
          <>
            <Navigation menu={LaunchMenu} id='aside-dashboard' />
            <NavigationLine />
          </>
        )}
      </AsideBody>
      <AsideFoot>
        <User />
      </AsideFoot>
    </Aside>
  );
};

export default LaunchConsole;