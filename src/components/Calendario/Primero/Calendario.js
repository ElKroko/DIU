import React from 'react';

// Imports de estilo

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import '../../../css/dx.material.USM-scheme.css';

// Imports de calendario
import Scheduler from 'devextreme-react/scheduler';
import { locale, loadMessages} from "devextreme/localization";
import esMessages from "devextreme/localization/messages/es.json";
import { data } from './data.js';

const currentDate = new Date(2021, 4, 24);
const views = ['day', 'week', 'month'];


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    loadMessages(esMessages);
    locale(navigator.language);
  }
  render() {
    return (
      <Scheduler dataSource={data} 
        views={views} 
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
        firstDayOfWeek={1} />
    );
  }
}

export default Calendar;
