import Button from '../../components/bootstrap/Button';
import Card, { CardBody, CardHeader, CardLabel } from '../../components/bootstrap/Card';
import classNames from 'classnames';
import data from '../../common/mockData/mockViewProductData';
import Icon from '../../components/icon/Icon';
import Input from '../../components/bootstrap/forms/Input';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import PAYMENTS from '../../common/data/enumPaymentMethod';
import SubHeader, { SubHeaderLeft } from '../../layout/SubHeader/SubHeader';
import useDarkMode from '../../hooks/useDarkMode';
import useSortableData from '../../hooks/useSortableData';
import { brandStudioMenu } from '../../menu';
import { consumerDataMenu } from '../../menu';
import { getColorNameWithIndex } from '../../common/data/enumColors';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';

const viewProduct = () => {
  const { darkModeStatus } = useDarkMode();

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
      f.name.toLowerCase().includes(formik.values.searchInput.toLowerCase())
  );

  const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);

  const [editModalStatus, setEditModalStatus] = useState<boolean>(false);

  return (
    <PageWrapper title={brandStudioMenu.addBillingInformation.text}>
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
            placeholder='Search Product'
            onChange={formik.handleChange}
            value={formik.values.searchInput}
          />
        </SubHeaderLeft>
      </SubHeader>
      <Page container='fluid'>
        <div className='row h-100'>
          <div className='col-12'>
            <Card stretch>
              <CardHeader borderSize={1}>
                <CardLabel>
                  A credential is generated when you view a product.
                </CardLabel>
              </CardHeader>
              <CardBody isScrollable className='table-responsive'>
                <table className='table table-modern table-hover'>
                  <thead>
                    <tr>
                      <th />
                      <th>Credential Type</th>
                      <th>Moment</th>
                      <th>Source</th>
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
                                  <Link to={`../${consumerDataMenu.product.path}/${i.id}`}>
                                    <Icon icon='Search' />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className='flex-grow-1'>
                              <div className='fs-6'>
                                <Link
                                  to={`../${consumerDataMenu.product.path}/${i.id}`}
                                  className={classNames('fw-bold', {
                                    'link-dark': !darkModeStatus,
                                    'link-light': darkModeStatus,
                                  })}>
                                  {i.name}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='fs-6'>
                            View Product
                          </div>
                        </td>
                        <td>
                          <div>{i.membershipDate.format('LLL')}</div>
                        </td>
                        <td>
                          <a href="https://demo.omnio.xyz/" target="_blank">
                            Omnio Demo
                          </a>
                        </td>
                        <td className='text-end'>
                          <Button
                            icon='Delete'
                            color='dark'
                            isLight
                            shadow='sm'
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
              <PaginationButtons
                data={filteredData}
                label='Credentials'
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={perPage}
                setPerPage={setPerPage}
              />
            </Card>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default viewProduct;