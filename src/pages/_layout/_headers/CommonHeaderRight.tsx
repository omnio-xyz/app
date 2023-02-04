import { FC, ReactNode, useContext, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useTour } from '@reactour/tour';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import Icon from '../../../components/icon/Icon';
import ThemeContext from '../../../contexts/themeContext';
import { getLangWithKey, ILang } from '../../../lang';
import showNotification from '../../../components/extras/showNotification';
import useDarkMode from '../../../hooks/useDarkMode';
import Popovers from '../../../components/bootstrap/Popovers';

interface ICommonHeaderRightProps {
  beforeChildren?: ReactNode;
  afterChildren?: ReactNode;
}
const CommonHeaderRight: FC<ICommonHeaderRightProps> = ({ beforeChildren, afterChildren }) => {
  const { darkModeStatus, setDarkModeStatus } = useDarkMode();

  const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
  const styledBtn: IButtonProps = {
    color: darkModeStatus ? 'dark' : 'light',
    hoverShadow: 'default',
    isLight: !darkModeStatus,
    size: 'lg',
  };

  const [offcanvasStatus, setOffcanvasStatus] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng: ILang['key']['lng']) => {
    i18n.changeLanguage(lng).then();
    showNotification(
      <span className='d-flex align-items-center'>
        <Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
        <span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
      </span>,
      'You updated the language of the site. (Only "Aside" was prepared as an example.)',
    );
  };

  /**
   * Language attribute
   */
  useLayoutEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language.substring(0, 2));
  });

  const { setIsOpen } = useTour();

  return (
    <HeaderRight>
      <div className='row g-3'>
        {beforeChildren}
        {/* Tour Modal */}
        {localStorage.getItem('tourModalStarted') === 'shown' && (
          <div className='col-auto position-relative'>
            <Popovers trigger='hover' desc='Help'>
              <Button
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...styledBtn}
                icon='Tour'
                onClick={() => setIsOpen(true)}
                aria-label='Help'
              />
            </Popovers>
            <Icon
              icon='Circle'
              className={classNames(
                'position-absolute start-65',
                'text-danger',
                'animate__animated animate__heartBeat animate__infinite animate__slower',
              )}
            />
          </div>
        )}
        {afterChildren}
      </div>


    </HeaderRight>
  );
};
CommonHeaderRight.propTypes = {
  beforeChildren: PropTypes.node,
  afterChildren: PropTypes.node,
};
CommonHeaderRight.defaultProps = {
  beforeChildren: null,
  afterChildren: null,
};

export default CommonHeaderRight;
