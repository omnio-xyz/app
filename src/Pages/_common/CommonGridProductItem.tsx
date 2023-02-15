import React, { FC } from 'react';
import Card, {
  CardActions,
  CardBody,
  CardFooter,
  CardHeader,
  CardLabel,
  CardSubTitle,
  CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Chart from '../../components/extras/Chart';
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Badge from '../../components/bootstrap/Badge';
import { priceFormat } from '../../helpers/helpers';
import showNotification from '../../components/extras/showNotification';
import Icon from '../../components/icon/Icon';
import { brandStudioMenu } from '../../menu';
import useDarkMode from '../../hooks/useDarkMode';
import { ApexOptions } from 'apexcharts';

interface ICommonGridProductItemProps {
  id: string | number;
  name: string;
  category: string;
  img: string;
  color: string;
  series: ApexOptions['series'];
  price: number;
  editAction: any;
  deleteAction: any;
}
const CommonGridProductItem: FC<ICommonGridProductItemProps> = ({
  id,
  name,
  category,
  img,
  color,
  series,
  price,
  editAction,
  deleteAction,
}) => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  const dummyOptions: ApexOptions = {
    colors: [color],
    chart: {
      type: 'line',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          formatter(seriesName: string) {
            return '';
          },
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
  };
  return (
    <Card>
      <CardHeader>
        <CardLabel>
          <CardTitle>
            {name}{' '}
          </CardTitle>
          <CardSubTitle>{category}</CardSubTitle>
        </CardLabel>
      </CardHeader>
      <CardBody>
        <img
          src={img}
          alt=''
          width={150}
          height={150}
          className='mx-auto d-block img-fluid mb-3'
        />
        <div className='row align-items-center'>
          <div className='col'>
            {priceFormat(price)}
          </div>
        </div>
      </CardBody>
      <CardFooter className='shadow-3d-container'>
        <Button
          color='dark'
          className={`w-100 mb-4 ${darkModeStatus ? 'light' : 'dark'
            }`}
          size='lg'
          tag='a'
          to={`../${brandStudioMenu.profile.subMenu.productID.path}/${id}`}>
          View Product
        </Button>
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
            <DropdownItem>
              <Button
                icon='FileCopy'
                onClick={() => {
                  showNotification(
                    <span className='d-flex align-items-center'>
                      <Icon icon='Info' size='lg' className='me-1' />
                      <span>{name} duplicated.</span>
                    </span>,
                    `A copy of the ${name} product was created.`,
                  );
                }}>
                Duplicate
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
      </CardFooter>
    </Card>
  );
};

export default CommonGridProductItem;
