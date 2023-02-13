import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultHeader from '../pages/Layout/Header/DefaultHeader';

const headers: RouteProps[] = [{ path: '*', element: <DefaultHeader /> }];

export default headers;
