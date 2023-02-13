import Accordion, { AccordionItem } from '../../components/bootstrap/Accordion';
import Button from '../../components/bootstrap/Button';
import Card, { CardBody, CardFooter, CardFooterLeft, CardHeader, CardLabel, CardSubTitle, CardTitle } from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import showNotification from '../../components/extras/showNotification';
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from '../../layout/SubHeader/SubHeader';
import tableData from '../../common/mockData/mockProductData';
import useDarkMode from '../../hooks/useDarkMode';
import { demoPagesMenu } from '../../menu';
import { priceFormat } from '../../helpers/helpers';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

interface IValues {
  name: string;
  price: number;
  stock: number;
  category: string;
  image?: string;
}
const validate = (values: IValues) => {
  const errors = {
    name: '',
    price: '',
    stock: '',
    category: '',
  };

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  } else if (values.name.length > 20) {
    errors.name = 'Must be 20 characters or less';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (values.price < 0) {
    errors.price = 'Price should not be 0';
  }

  if (!values.stock) {
    errors.stock = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  } else if (values.category.length < 3) {
    errors.category = 'Must be 3 characters or more';
  } else if (values.category.length > 20) {
    errors.category = 'Must be 20 characters or less';
  }

  return errors;
};

type TTabs = 'Summary' | 'Edit';
interface ITabs {
  [key: string]: TTabs;
}

const ProductViewPage = () => {
  const { darkModeStatus } = useDarkMode();

  const { id } = useParams();
  const navigate = useNavigate();

  // @ts-ignore
  const itemData = tableData.filter((item) => item.id.toString() === id.toString());
  const data = itemData[0];

  const TABS: ITabs = {
    SUMMARY: 'Summary',
    EDIT: 'Edit',
  };
  const [activeTab, setActiveTab] = useState(TABS.SUMMARY);

  const [editItem, setEditItem] = useState<IValues>(data);
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      stock: 0,
      category: '',
    },
    validate,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values) => {
      showNotification(
        <span className='d-flex align-items-center'>
          <Icon icon='Info' size='lg' className='me-1' />
          <span>Updated Successfully</span>
        </span>,
        'Product has been updated successfully',
      );
    },
  });
  useEffect(() => {
    if (editItem) {
      formik.setValues({
        name: editItem.name,
        price: editItem.price,
        stock: editItem.stock,
        category: editItem.category,
      });
    }
    return () => {
      formik.setValues({
        name: '',
        price: 0,
        stock: 0,
        category: '',
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem]);

  return (
    <PageWrapper title={demoPagesMenu.sales.subMenu.product.text}>
      <SubHeader>
        <SubHeaderLeft>
          <Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
            Back to List
          </Button>
          <SubheaderSeparator />
        </SubHeaderLeft>
      </SubHeader>
      <Page container='fluid'>
        <div className='row h-100'>
          <div className='col-lg-4'>
            <Card stretch>
              <CardBody isScrollable>
                <div className='row g-3'>
                  <div className='col-12'>
                    <img src={data.image} alt='' width='100%' className='p-5' />
                  </div>
                  <div className='col-12'>
                    <Button
                      icon='Summarize'
                      color='info'
                      className='w-100 p-3'
                      isLight={activeTab !== TABS.SUMMARY}
                      onClick={() => setActiveTab(TABS.SUMMARY)}>
                      {TABS.SUMMARY}
                    </Button>
                  </div>
                  <div className='col-12'>
                    <Button
                      icon='Edit'
                      color='success'
                      className='w-100 p-3'
                      isLight={activeTab !== TABS.EDIT}
                      onClick={() => window.open('https://demo.omnio.xyz/product/')} >
                      {TABS.EDIT}
                    </Button>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <CardFooterLeft className='w-100'>
                  <Button
                    icon='Delete'
                    color='danger'
                    isLight
                    className='w-100 p-3'>
                    Delete
                  </Button>
                </CardFooterLeft>
              </CardFooter>
            </Card>
          </div>
          <div className='col-lg-8'>
            <Card
              stretch
              className='overflow-hidden'
              tag='form'
              noValidate
              onSubmit={formik.handleSubmit}>
              {activeTab === TABS.SUMMARY && (
                <>
                  <CardHeader>
                    <CardLabel icon='Summarize' iconColor='info'>
                      <CardTitle>{data.name}</CardTitle>
                      <CardSubTitle>Brand Name</CardSubTitle>
                    </CardLabel>
                  </CardHeader>
                  <CardBody isScrollable>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <Card
                          stretch
                          shadow='sm'
                          className={`bg-l${darkModeStatus ? 'o25' : '25'
                            }-primary rounded-2`}>
                          <CardHeader className='bg-transparent'>
                            <CardLabel>
                              <CardTitle>Price</CardTitle>
                            </CardLabel>
                          </CardHeader>
                          <CardBody>
                            <div className='d-flex align-items-center pb-3'>
                              <div className='flex-shrink-0'>
                                <Icon
                                  icon='ConfirmationNumber'
                                  size='4x'
                                  color='primary'
                                />
                              </div>
                              <div className='flex-grow-1 ms-3'>
                                <div className='fw-bold fs-3 mb-0'>
                                  {priceFormat(data.price)}
                                </div>
                                <div className='text-muted'>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                      <div className='col-lg-6'>
                        <Card
                          stretch
                          shadow='sm'
                          className={`bg-l${darkModeStatus ? 'o25' : '25'
                            }-success rounded-2`}>
                          <CardHeader className='bg-transparent'>
                            <CardLabel>
                              <CardTitle>Category</CardTitle>
                            </CardLabel>
                          </CardHeader>
                          <CardBody>
                            <div className='d-flex align-items-center pb-3'>
                              <div className='flex-shrink-0'>
                                <Icon
                                  icon='Category'
                                  size='4x'
                                  color='success'
                                />
                              </div>
                              <div className='flex-grow-1 ms-3'>
                                <div className='fw-bold fs-3 mb-0'>
                                  {data.category}
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                      <div className='col-lg-6'>
                      </div>
                      <div className='col-lg-6'>
                      </div>
                      <div className='col-12 shadow-3d-container'>
                        <Accordion id='faq' shadow='sm'>
                          <AccordionItem
                            id='faq1'
                            title='Description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br></br>
                            <br></br>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </AccordionItem>
                          <AccordionItem
                            id='faq2'
                            title='Key Features'>
                            Nunc ex odio, fermentum dignissim urna eu,
                            suscipit vehicula magna. Vestibulum vel
                            risus sed metus pellentesque gravida. Etiam
                            hendrerit lorem vitae elit tempor bibendum.
                            Vivamus tincidunt consectetur erat at
                            venenatis. Nam elementum varius massa non
                            congue. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per
                            inceptos himenaeos. Vivamus fermentum
                            scelerisque ligula, quis bibendum felis
                            luctus quis. Donec magna sem, ullamcorper id
                            tempus ut, pharetra sed felis. Ut quis ante
                            tristique, condimentum lacus eget, mollis
                            magna. Phasellus fringilla diam ac erat
                            consequat feugiat. Vestibulum eu ex eget
                            ligula placerat finibus. Quisque vitae velit
                            feugiat, mattis lectus nec, molestie justo.
                            Vivamus nec tincidunt augue. Pellentesque
                            nec mattis ipsum, non malesuada libero.
                            Proin aliquam est turpis, sit amet efficitur
                            ex gravida ac. Nunc in molestie augue.
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardBody>
                </>
              )}
            </Card>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default ProductViewPage;