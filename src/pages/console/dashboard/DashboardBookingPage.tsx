import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { momentLocalizer, View as TView, Views } from 'react-big-calendar';
import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import eventList, { IEvents } from '../../../common/data/events';
import USERS, { getUserDataWithUsername, IUserProps } from '../../../common/data/userDummyData';
import Avatar, { AvatarGroup } from '../../../components/Avatar';
import useMinimizeAside from '../../../hooks/useMinimizeAside';
import {
  getLabel,
  getUnitType,
  getViews,
} from '../../../components/extras/calendarHelper';
import { demoPagesMenu } from '../../../menu';
import { getServiceDataWithServiceName } from '../../../common/data/serviceDummyData';
import useDarkMode from '../../../hooks/useDarkMode';
import { TColor } from '../../../type/color-type';

const localizer = momentLocalizer(moment);
const now = new Date();

interface IEvent extends IEvents {
  user?: IUserProps;
  users?: IUserProps[];
  color?: TColor;
}



const DashboardBookingPage = () => {
  const { darkModeStatus, themeStatus } = useDarkMode();
  useMinimizeAside();

  const [toggleRightPanel, setToggleRightPanel] = useState(true);

  // BEGIN :: Calendar
  // Active employee
  const [employeeList, setEmployeeList] = useState({
    [USERS.JOHN.username]: true,
    [USERS.ELLA.username]: true,
    [USERS.RYAN.username]: true,
    [USERS.GRACE.username]: true,
  });
  // Events
  const [events, setEvents] = useState(eventList);

  // FOR DEV
  useEffect(() => {
    setEvents(eventList);
    return () => { };
  }, []);

  const initialEventItem: IEvent = {
    start: undefined,
    end: undefined,
    name: undefined,
    id: undefined,
    user: undefined,
  };
  // Selected Event
  const [eventItem, setEventItem] = useState<IEvent>(initialEventItem);
  // Calendar View Mode
  const [viewMode, setViewMode] = useState<TView>(Views.MONTH);
  // Calendar Date
  const [date, setDate] = useState(new Date());
  // Item edit panel status
  const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState<boolean>(false);
  const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
  const [eventAdding, setEventAdding] = useState<boolean>(false);

  // Calendar Unit Type
  const unitType = getUnitType(viewMode);
  // Calendar Date Label
  const calendarDateLabel = getLabel(date, viewMode);

  // Change view mode
  const handleViewMode = (e: moment.MomentInput) => {
    setDate(moment(e).toDate());
    setViewMode(Views.DAY);
  };
  // View modes; Month, Week, Work Week, Day and Agenda
  const views = getViews();

  // New Event
  const handleSelect = ({ start, end }: { start: any; end: any }) => {
    setEventAdding(true);
    setEventItem({ ...initialEventItem, start, end });
  };

  useEffect(() => {
    if (eventAdding) {
      setInfoEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventAdding]);

  /**
   * Calendar Item Container Style
   * @param event
   * @param start
   * @param end
   * @param isSelected
   * @returns {{className: string}}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eventStyleGetter = (
    event: { color?: TColor },
    start: any,
    end: any,
    isSelected: boolean,
  ) => {
    const isActiveEvent = start <= now && end >= now;
    const isPastEvent = end < now;
    const color = isActiveEvent ? 'success' : event.color;

    return {
      className: classNames({
        [`bg-l${darkModeStatus ? 'o25' : '10'}-${color} text-${color}`]: color,
        'border border-success': isActiveEvent,
        'opacity-50': isPastEvent,
      }),
    };
  };

  const formik = useFormik({
    initialValues: {
      eventName: '',
      eventStart: '',
      eventEnd: '',
      eventEmployee: '',
      eventAllDay: false,
    },
    onSubmit: (values) => {
      if (eventAdding) {
        setEvents((prevEvents) => [
          ...prevEvents,
          {
            id: values.eventStart,
            ...getServiceDataWithServiceName(values.eventName),
            end: values.eventEnd,
            start: values.eventStart,
            user: { ...getUserDataWithUsername(values.eventEmployee) },
          },
        ]);
      }
      setToggleInfoEventCanvas(false);
      setEventAdding(false);
      setEventItem(initialEventItem);
      formik.setValues({
        eventName: '',
        eventStart: '',
        eventEnd: '',
        eventEmployee: '',
        eventAllDay: false,
      });
    },
  });

  useEffect(() => {
    if (eventItem)
      formik.setValues({
        ...formik.values,
        // @ts-ignore
        eventId: eventItem.id || null,
        eventName: eventItem.name || '',
        eventStart: moment(eventItem.start).format(),
        eventEnd: moment(eventItem.end).format(),
        eventEmployee: eventItem?.user?.username || '',
      });
    return () => { };
    //	eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventItem]);
  // END:: Calendar

  const [toggleCalendar, setToggleCalendar] = useState(true);

  return (
    <PageWrapper title={demoPagesMenu.appointment.subMenu.dashboard.text}>
    </PageWrapper>
  );
};

export default DashboardBookingPage;
