import React, { useState } from 'react';
import { useFormik } from 'formik';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
  SubHeaderLeft,
  SubHeaderRight,
  SubheaderSeparator,
} from '../../../../layout/SubHeader/SubHeader';
import Page from '../../../../layout/Page/Page';
import { demoPagesMenu } from '../../../../menu';
import Card, {
  CardActions,
  CardBody,
  CardHeader,
  CardLabel,
  CardTitle,
} from '../../../../components/bootstrap/Card';
import { getFirstLetter, priceFormat } from '../../../../helpers/helpers';
import data from '../../../../common/data/dummyCustomerData';
import PaginationButtons, {
  dataPagination,
  PER_COUNT,
} from '../../../../components/PaginationButtons';
import Button from '../../../../components/bootstrap/Button';
import Icon from '../../../../components/icon/Icon';
import Input from '../../../../components/bootstrap/forms/Input';
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import PAYMENTS from '../../../../common/data/enumPaymentMethod';
import useSortableData from '../../../../hooks/useSortableData';
import InputGroup, { InputGroupText } from '../../../../components/bootstrap/forms/InputGroup';
import Popovers from '../../../../components/bootstrap/Popovers';
import CustomerEditModal from '../../BrandStudio/crm/CustomerEditModal';
import { getColorNameWithIndex } from '../../../../common/data/enumColors';
import useDarkMode from '../../../../hooks/useDarkMode';

const EditFluidPage = () => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);

  const formik = useFormik({
    initialValues: {
      searchInput: '',
      payment: Object.keys(PAYMENTS).map((i) => PAYMENTS[i].name),
      minPrice: '',
      maxPrice: '',
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const filteredData = data.filter(
    (f) =>
      // Name
      f.name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) &&
      // Price
      (formik.values.minPrice === '' || f.balance > Number(formik.values.minPrice)) &&
      (formik.values.maxPrice === '' || f.balance < Number(formik.values.maxPrice)) &&
      // Payment Type
      formik.values.payment.includes(f.payout),
  );

  const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);

  const [editModalStatus, setEditModalStatus] = useState<boolean>(false);

  return (
    <PageWrapper title={demoPagesMenu.crm.subMenu.customersList.text}>
      <SubHeader>
        <SubHeaderLeft>
          <label
            className='border-0 bg-transparent cursor-pointer me-0'
            htmlFor='searchInput'>
            <Icon icon='Search' size='2x' color='primary' />
          </label>
          <Input
            id='searchInput'
            type='search'
            className='border-0 shadow-none bg-transparent'
            placeholder='Search Data'
            onChange={formik.handleChange}
            value={formik.values.searchInput}
          />
        </SubHeaderLeft>
        <SubHeaderRight>
          <SubheaderSeparator />
          <Dropdown>
            <DropdownToggle hasIcon={false}>
              <Button
                icon='FilterAlt'
                color='dark'
                isLight
                className='btn-only-icon position-relative'>
                {data.length !== filteredData.length && (
                  <Popovers desc='Filtering applied' trigger='hover'>
                    <span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
                      <span className='visually-hidden'>
                        there is filtering
                      </span>
                    </span>
                  </Popovers>
                )}
              </Button>
            </DropdownToggle>
            <DropdownMenu isAlignmentEnd size='lg'>
              <div className='container py-2'>
                <div className='row g-3'>
                  <FormGroup label='Balance' className='col-12'>
                    <InputGroup>
                      <Input
                        id='minPrice'
                        ariaLabel='Minimum price'
                        placeholder='Min.'
                        onChange={formik.handleChange}
                        value={formik.values.minPrice}
                      />
                      <InputGroupText>to</InputGroupText>
                      <Input
                        id='maxPrice'
                        ariaLabel='Maximum price'
                        placeholder='Max.'
                        onChange={formik.handleChange}
                        value={formik.values.maxPrice}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup label='Payments' className='col-12'>
                    <ChecksGroup>
                      {Object.keys(PAYMENTS).map((payment) => (
                        <Checks
                          key={PAYMENTS[payment].name}
                          id={PAYMENTS[payment].name}
                          label={PAYMENTS[payment].name}
                          name='payment'
                          value={PAYMENTS[payment].name}
                          onChange={formik.handleChange}
                          checked={formik.values.payment.includes(
                            PAYMENTS[payment].name,
                          )}
                        />
                      ))}
                    </ChecksGroup>
                  </FormGroup>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </SubHeaderRight>
      </SubHeader>
      <Page container='fluid'>
        <div className='row h-100'>
          <div className='col-12'>
            <Card stretch>
              <CardHeader borderSize={1}>
                <CardLabel icon='WebAsset' iconColor='info'>
                  <CardTitle>Add to Wishlist</CardTitle>
                </CardLabel>
                <CardActions>
                  <Dropdown className='d-inline'>
                    <DropdownToggle hasIcon={false}>
                      <Button color={themeStatus} icon='MoreHoriz' />
                    </DropdownToggle>
                    <DropdownMenu isAlignmentEnd>
                      <DropdownItem>
                        <Button icon='Edit'>Edit</Button>
                      </DropdownItem>
                      <DropdownItem>
                        <Button icon='Delete'>Delete</Button>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </CardActions>
              </CardHeader>
              <CardBody isScrollable className='table-responsive'>
                <table className='table table-modern table-hover'>
                  <thead>
                    <tr>
                      <th
                        onClick={() => requestSort('name')}
                        className='cursor-pointer text-decoration-underline'>
                        Credential{' '}
                        <Icon
                          size='lg'
                          className={getClassNamesFor('name')}
                          icon='FilterList'
                        />
                      </th>
                      <th>Session ID</th>
                      <th>Date</th>
                      <th
                        onClick={() => requestSort('balance')}
                        className='cursor-pointer text-decoration-underline'>
                        Time
                        <Icon
                          size='lg'
                          className={getClassNamesFor('balance')}
                          icon='FilterList'
                        />
                      </th>
                      <th
                        onClick={() => requestSort('payout')}
                        className='cursor-pointer text-decoration-underline'>
                        Source{' '}
                        <Icon
                          size='lg'
                          className={getClassNamesFor('payout')}
                          icon='FilterList'
                        />
                      </th>
                      <td />
                    </tr>
                  </thead>
                  <tbody>
                    {dataPagination(items, currentPage, perPage).map((i) => (
                      <tr key={i.id}>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='flex-shrink-0'>
                              <div
                                className='ratio ratio-1x1 me-3'
                                style={{ width: 48 }}>
                                <div
                                  className={`bg-l${darkModeStatus
                                    ? 'o25'
                                    : '25'
                                    }-${getColorNameWithIndex(
                                      i.id,
                                    )} text-${getColorNameWithIndex(
                                      i.id,
                                    )} rounded-2 d-flex align-items-center justify-content-center`}>
                                  <Icon icon='WebAsset' />
                                </div>
                              </div>
                            </div>
                            <div className='flex-grow-1'>
                              <div className='fs-6 fw-bold'>
                                {i.name}
                              </div>
                              <div className='text-muted'>
                                <Icon icon='Label' />{' '}
                                <small>{i.type}</small>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            isLink
                            color='light'
                            icon='Email'
                            className='text-lowercase'
                            tag='a'
                            href={`mailto:${i.email}`}>
                            {i.email}
                          </Button>
                        </td>
                        <td>
                          <div>{i.membershipDate.format('ll')}</div>
                          <div>
                            <small className='text-muted'>
                              {i.membershipDate.fromNow()}
                            </small>
                          </div>
                        </td>
                        <td>{priceFormat(i.balance)}</td>
                        <td>
                          <Icon
                            size='lg'
                            icon={`custom ${i.payout.toLowerCase()}`}
                          />{' '}
                          {i.payout}
                        </td>
                        <td>
                          <Dropdown>
                            <DropdownToggle hasIcon={false}>
                              <Button
                                icon='MoreHoriz'
                                color='dark'
                                isLight
                                shadow='sm'
                              />
                            </DropdownToggle>
                            <DropdownMenu isAlignmentEnd>
                              <DropdownItem>
                                <Button
                                  icon='Visibility'
                                  tag='a'
                                  to={`../${demoPagesMenu.crm.subMenu.customerID.path}/${i.id}`}>
                                  View
                                </Button>
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
              <PaginationButtons
                data={filteredData}
                label='Verified Credentials'
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={perPage}
                setPerPage={setPerPage}
              />
            </Card>
          </div>
        </div>
      </Page>
      <CustomerEditModal setIsOpen={setEditModalStatus} isOpen={editModalStatus} id='0' />
    </PageWrapper>
  );
};

export default EditFluidPage;