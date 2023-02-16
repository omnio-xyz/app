import Card from '../../components/bootstrap/Card';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import { brandStudioMenu } from '../../menu';

const viewProduct = () => {
  return (
    <PageWrapper title={brandStudioMenu.addBillingInformation.text}>
      <Page container='fluid'>
        <div className='row h-100'>
          <div className='col-12'>
            <Card stretch>
            </Card>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default viewProduct;