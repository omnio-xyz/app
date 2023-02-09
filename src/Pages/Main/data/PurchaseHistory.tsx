import React, { useState } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { Calendar as DatePicker } from 'react-date-range';
import classNames from 'classnames';
import SubHeader, {
  SubHeaderLeft,
  SubHeaderRight,
  SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Avatar from '../../../components/Avatar';
import UserImageWebp from '../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../assets/img/wanna/wanna1.png';
import Button from '../../../components/bootstrap/Button';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, {
  CardActions,
  CardBody,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from '../../../components/bootstrap/Card';
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import CommonFilterTag from '../../_common/CommonFilterTag';
import CommonTableRow from '../../_common/CommonTableRow';
import Select from '../../../components/bootstrap/forms/Select';
import Popovers from '../../../components/bootstrap/Popovers';
import { demoPagesMenu } from '../../../menu';
import data from '../../../common/data/dummyProductData';
import useSelectTable from '../../../hooks/useSelectTable';
import useDarkMode from '../../../hooks/useDarkMode';

const DashboardBookingPage = () => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  const [date, setDate] = useState<Date>(new Date());

  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
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
        </SubHeaderLeft>
        <SubHeaderRight>
          {(!!formik.values.minPrice || !!formik.values.maxPrice) && (
            <CommonFilterTag
              title='Price'
              text={`${formik.values.minPrice || '0'} to ${formik.values.maxPrice || 'no limit'
                }`}
            />
          )}

          {!!formik.values.categoryName && (
            <CommonFilterTag title='Brand' text={formik.values.categoryName} />
          )}

          {(formik.values.companyA ||
            formik.values.companyB ||
            formik.values.companyC ||
            formik.values.companyD) && (
              <CommonFilterTag
                title='Product Category'
                text={
                  (formik.values.companyA ? 'Brand A, ' : '') +
                  (formik.values.companyB ? 'Brand B, ' : '') +
                  (formik.values.companyC ? 'Brand C, ' : '') +
                  (formik.values.companyD ? 'Brand D ' : '')
                }
              />
            )}
          <SubheaderSeparator />
          <Dropdown isOpen={filterMenu} setIsOpen={setFilterMenu}>
            <DropdownToggle hasIcon={false}>
              <Button icon='Filter' color='primary' isLight>
        
     
              </Button>
            </DropdownToggle>
            <DropdownMenu isAlignmentEnd size='lg' isCloseAfterLeave={false}>
              <div className='container py-2'>
                <form className='row g-3' onSubmit={formik.handleSubmit}>
                  <div className='col-12'>
                    <FormGroup>
                      <Label htmlFor='minPrice'>Price</Label>
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
                  </div>
                  <div className='col-12'>
                    <FormGroup>
                      <Label htmlFor='categoryName'>Category</Label>
                      <Select
                        id='categoryName'
                        ariaLabel='Category'
                        placeholder='Category Name'
                        list={[
                          { value: '3D Shapes', text: '3D Shapes' },
                          { value: 'Illustrator', text: 'Illustrator' },
                          { value: 'Photo', text: 'Photo' },
                        ]}
                        onChange={formik.handleChange}
                        value={formik.values.categoryName}
                      />
                    </FormGroup>
                  </div>
                  <div className='col-12'>
                    <FormGroup>
                      <Label>Product Category</Label>
                      <ChecksGroup>
                        <Checks
                          id='companyA'
                          label='Company A'
                          onChange={formik.handleChange}
                          checked={formik.values.companyA}
                        />
                        <Checks
                          id='companyB'
                          label='Company B'
                          onChange={formik.handleChange}
                          checked={formik.values.companyB}
                        />
                        <Checks
                          id='companyC'
                          label='Company C'
                          onChange={formik.handleChange}
                          checked={formik.values.companyC}
                        />
                        <Checks
                          id='companyD'
                          label='Company D'
                          onChange={formik.handleChange}
                          checked={formik.values.companyD}
                        />
                      </ChecksGroup>
                    </FormGroup>
                  </div>
                  <div className='col-6'>
                    <Button
                      color='primary'
                      isOutline
                      className='w-100'
                      onClick={formik.resetForm}>
                      Reset
                    </Button>
                  </div>
                  <div className='col-6'>
                    <Button color='primary' className='w-100' type='submit'>
                      Filter
                    </Button>
                  </div>
                </form>
              </div>
            </DropdownMenu>
          </Dropdown>
        </SubHeaderRight>
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
          <CardBody className='table-responsive' isScrollable>
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
          <CardFooter className='justify-content-center'>
            <Button color='dark' className='px-5 py-3'>
              Load More
            </Button>
          </CardFooter>
        </Card>
      </Page>
    </PageWrapper>
  );
};

export default DashboardBookingPage;