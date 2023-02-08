import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../../layout/SubHeader/SubHeader';
import Icon from '../../../../components/icon/Icon';
import Page from '../../../../layout/Page/Page';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import USERS from '../../../../common/data/userDummyData';
import Badge from '../../../../components/bootstrap/Badge';
import Button from '../../../../components/bootstrap/Button';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../../components/bootstrap/Dropdown';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Label from '../../../../components/bootstrap/forms/Label';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import SERVICES from '../../../../common/data/serviceDummyData';
import { demoPagesMenu } from '../../../../menu';
import useTourStep from '../../../../hooks/useTourStep';

const EmployeeList = () => {
	useTourStep(18);
	const [filterMenu, setFilterMenu] = useState(false);

	const formik = useFormik({
		initialValues: {
			available: false,
			searchInput: '',
			services: [],
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {
			setFilterMenu(false);
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const searchUsers = Object.keys(USERS)
		.filter(
			(key) =>
				USERS[key].username
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].surname
					.toLowerCase()
					.includes(formik.values.searchInput.toLowerCase()) ||
				USERS[key].position.toLowerCase().includes(formik.values.searchInput.toLowerCase()),
		)
		.filter((key2) => (formik.values.available ? USERS[key2].isOnline : key2))
		.map((i) => USERS[i]);
	return (
		<PageWrapper title={demoPagesMenu.appointment.subMenu.employeeList.text}>
		</PageWrapper>
	);
};

export default EmployeeList;