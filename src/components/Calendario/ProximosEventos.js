import React from 'react';

// Imports de estilo

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import '../../css/dx.material.USM-scheme.css';

// Imports de calendario
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { locale, loadMessages} from "devextreme/localization";
import esMessages from "devextreme/localization/messages/es.json";
import { data, resourcesData  } from './Segundo/data.js';

const currentDate = Date.now();
const views = ['agenda'];

class ProximosEventos extends React.Component {
  constructor(props) {
    super(props);
    loadMessages(esMessages);
    locale(navigator.language);
    this.schedulerRefprox = React.createRef();
  }
  render() {
    return (
      <Scheduler dataSource={data} 
        views={views} 
        defaultCurrentView="agenda"
        defaultCurrentDate={currentDate}
        height={250}
        width={'auto'}
        startDayHour={9} 
        useDropDownViewSwitcher={false}>
          <Resource
            dataSource={resourcesData}
            fieldExpr="categoria"
            label="Categoria"
          />
      </Scheduler>
    );
  }
}

export default ProximosEventos;
