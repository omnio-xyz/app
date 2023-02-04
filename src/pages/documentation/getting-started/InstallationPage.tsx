import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { gettingStartedPagesMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
	ICardProps,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import CommonCodeCopy from './_common/CommonCodeCopy';

const InstallationPage = () => {
	const cardProps: Partial<ICardProps> = {
		shadow: 'none',
		borderSize: 1,
		className: 'mb-0 rounded-1',
	};

	return (
		<PageWrapper title={gettingStartedPagesMenu.gettingStarted.subMenu.installation.text}>
		</PageWrapper>
	);
};

export default InstallationPage;
