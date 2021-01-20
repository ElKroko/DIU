import React from 'react';
import Scheduler, { Resource} from 'devextreme-react/scheduler';
import ContextMenu from 'devextreme-react/context-menu';
import Button from 'devextreme-react/button';

import { data, resourcesData } from './data.js';
import { cellContextMenuItems, appointmentContextMenuItems, setResource, createAppointment} from './MenuItems.js';

import { locale, loadMessages} from "devextreme/localization";
import esMessages from "devextreme/localization/messages/es.json";

import { AppointmentMenuTemplate } from './AppointmentTemplate.js';
import {Grid} from '@material-ui/core';

const currentDate = new Date(2021, 2, 25);
const views = ['day', 'week','month'];

class Calendario2 extends React.Component {
  constructor(props) {
    super(props);
    resourcesData.map(function(item) {
      item.onItemClick = setResource;
    });

    loadMessages(esMessages);
    locale(navigator.language);
    this.appointmentContextMenuItems = appointmentContextMenuItems.concat(resourcesData);
    
    this.state = {
      contextMenuItems: [],
      target: null,
      disabled: true,
      contextMenuEvent: null
    };

    this.onAppointmentContextMenu = this.onAppointmentContextMenu.bind(this);
    this.onContextMenuItemClick = this.onContextMenuItemClick.bind(this);
    this.onCellContextMenu = this.onCellContextMenu.bind(this);
    this.onContextMenuHiding = this.onContextMenuHiding.bind(this);
    //Agregado para el Add
    this.schedulerRef = React.createRef();
    
    this.showAppointmentPopup = () => {
      this.schedulerRef.current.instance.showAppointmentPopup({
        text: "",
        startDate: this.schedulerRef.currentDate,
        endDate: this.schedulerRef.currentDate
    } ,true);
    };
  }
  

  render() {
    const { contextMenuItems, target, disabled } = this.state;
    return (
      <React.Fragment>
        <Grid container spacing={12} justify="space-between" alignItems = "flex-end" direction = "column">
          <Button
              text="Crear Evento"
              onClick={this.showAppointmentPopup}            
          />
        </Grid>
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={Date.now()}
          firstDayOfWeek={1}
          startDayHour={9}
          onAppointmentContextMenu={this.onAppointmentContextMenu}
          onCellContextMenu={this.onCellContextMenu}
          height={600}
          ref={this.schedulerRef}
        >
          <Resource
            dataSource={resourcesData}
            fieldExpr="categoria"
            label="Categoria"
          />
        </Scheduler>
        <ContextMenu
          dataSource={contextMenuItems}
          width={200}
          target={target}
          disabled={disabled}
          onItemClick={this.onContextMenuItemClick}
          itemRender={AppointmentMenuTemplate}
          onHiding={this.onContextMenuHiding}
        />
      </React.Fragment>
    );
  }

  onAppointmentContextMenu(e) {
    this.setState({
      target: '.dx-scheduler-appointment',
      disabled: false,
      contextMenuItems: this.appointmentContextMenuItems,
      contextMenuEvent: e
    });
  }

  onContextMenuItemClick(e) {
    const { contextMenuEvent } = this.state;
    e.itemData.onItemClick(contextMenuEvent, e);
  }

  onCellContextMenu(e) {
    this.setState({
      target: '.dx-scheduler-date-table-cell',
      disabled: false,
      contextMenuItems: cellContextMenuItems,
      contextMenuEvent: e
    });
  }

  onContextMenuHiding() {
    this.setState({
      disabled: true,
      contextMenuItems: []
    });
  }

}

export default Calendario2;