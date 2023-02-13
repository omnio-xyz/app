import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../pages/Layout/Footer/DefaultFooter';

const footers: RouteProps[] = [{ path: '*', element: <DefaultFooter /> }];

export default footers;
