import Button from '../../components/bootstrap/Button';
import Card, { CardActions, CardBody, CardFooter, CardHeader, CardLabel, CardTitle } from '../../components/bootstrap/Card';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import CommonFilterTag from '../_common/CommonFilterTag';
import CommonTableRow from '../_common/CommonTableRow';
import data from '../../common/mockData/mockProductData';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../components/bootstrap/Dropdown';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Icon from '../../components/icon/Icon';
import Input from '../../components/bootstrap/forms/Input';
import InputGroup, { InputGroupText } from '../../components/bootstrap/forms/InputGroup';
import Label from '../../components/bootstrap/forms/Label';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import Popovers from '../../components/bootstrap/Popovers';
import Select from '../../components/bootstrap/forms/Select';
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from '../../layout/SubHeader/SubHeader';
import useDarkMode from '../../hooks/useDarkMode';
import useSelectTable from '../../hooks/useSelectTable';
import { useFormik } from 'formik';
import { useState } from 'react';

const DashboardBookingPage = () => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);

  const [date, setDate] = useState<Date>(new Date());

  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      searchInput: '',
      minPrice: '',
      maxPrice: '',
      categoryName: '3D Shapes',
      companyA: true,
      companyB: true,
      companyC: true,
      companyD: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values) => {
      setFilterMenu(false);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const filteredData = data.filter(
    (f) =>
      // Category
      f.category === formik.values.categoryName &&
      // Price
      (formik.values.minPrice === '' || f.price > Number(formik.values.minPrice)) &&
      (formik.values.maxPrice === '' || f.price < Number(formik.values.maxPrice)) &&
      //	Company
      ((formik.values.companyA ? f.store === 'Company A' : false) ||
        (formik.values.companyB ? f.store === 'Company B' : false) ||
        (formik.values.companyC ? f.store === 'Company C' : false) ||
        (formik.values.companyD ? f.store === 'Company D' : false)),
  );

  const { selectTable, SelectAllCheck } = useSelectTable(filteredData);

  return (
    <PageWrapper>
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
        <Card stretch>
          <CardHeader borderSize={1}>
            <CardLabel icon='WebAsset' iconColor='info'>
              <CardTitle>Purchase History</CardTitle>
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
                  <th scope='col'>{SelectAllCheck}</th>
                  <th scope='col'>#</th>
                  <th scope='col'>Image</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Sales</th>
                  <th scope='col'>Stock</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Product Category</th>
                  <th scope='col' className='text-end'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((i) => (
                  <CommonTableRow
                    key={i.id}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...i}
                    selectName='selectedList'
                    selectOnChange={selectTable.handleChange}
                    selectChecked={selectTable.values.selectedList.includes(
                      // @ts-ignore
                      i.id.toString(),
                    )}
                  />
                ))}
              </tbody>
            </table>
          </CardBody>
          <PaginationButtons
            data={filteredData}
            label='Data Credentials'
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        </Card>
      </Page>
    </PageWrapper>
  );
};

export default DashboardBookingPage;