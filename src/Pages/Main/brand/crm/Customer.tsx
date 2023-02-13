import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
  SubHeaderLeft,
  SubHeaderRight,
  SubheaderSeparator,
} from '../../../../layout/SubHeader/SubHeader';
import { demoPagesMenu, brandStudioMenu } from '../../../../menu';
import data from '../../../../common/mockData/mockViewProductData';
import Button from '../../../../components/bootstrap/Button';
import latestSalesData from '../../../../common/data/dummySalesData';
import useSortableData from '../../../../hooks/useSortableData';
import PaginationButtons, {
  dataPagination,
  PER_COUNT,
} from '../../../../components/PaginationButtons';
import CustomerEditModal from './CustomerEditModal';
import useDarkMode from '../../../../hooks/useDarkMode';

const Customer = () => {
  const { darkModeStatus } = useDarkMode();

  const { id } = useParams();
  const itemData = data.filter((item) => item.id.toString() === id?.toString());
  const item = itemData[0];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);

  const { items, requestSort, getClassNamesFor } = useSortableData(latestSalesData);

  const [editModalStatus, setEditModalStatus] = useState<boolean>(false);
  const handleClickEdit = () => {
    setEditModalStatus(true);
  };

  return (
    <PageWrapper title={demoPagesMenu.crm.subMenu.customer.text}>
      <SubHeader>
        <SubHeaderLeft>
          <Button
            color='primary'
            isLink
            icon='ArrowBack'
            tag='a'
            to={`../${brandStudioMenu.addBillingInformation.path}`}>
            Back to List
          </Button>
          <SubheaderSeparator />
          <span className='text-muted fst-italic me-2'>Last update:</span>
          <span className='fw-bold'>13 hours ago</span>
        </SubHeaderLeft>
        <SubHeaderRight>
          <Button icon='Edit' color='primary' isLight onClick={handleClickEdit}>
            Edit
          </Button>
        </SubHeaderRight>
      </SubHeader>
      <CustomerEditModal
        setIsOpen={setEditModalStatus}
        isOpen={editModalStatus}
        id={id || 'loading'}
      />
    </PageWrapper>
  );
};

export default Customer;