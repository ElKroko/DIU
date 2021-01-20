function createAppointment(e) {
  e.component.showAppointmentPopup({
    startDate: e.cellData.startDate
  }, true);
}

function createRecurringAppointment(e) {
  e.component.showAppointmentPopup({
    startDate: e.cellData.startDate,
    recurrenceRule: 'FREQ=DAILY'
  }, true);
}

function groupCell(e) {
  const scheduler = e.component;

  if (scheduler.option('groups')) {
    scheduler.option({ crossScrollingEnabled: false, groups: undefined });
  } else {
    scheduler.option({ crossScrollingEnabled: true, groups: ['categoria'] });
  }
}

function showCurrentDate(e) {
  e.component.option('currentDate', new Date());
}

function showAppointment(e) {
  e.component.showAppointmentPopup(e.appointmentData);
}

function deleteAppointment(e) {
  e.component.deleteAppointment(e.appointmentData);
}

function repeatAppointmentWeekly(e) {
  e.component.updateAppointment(e.appointmentData, {
    startDate: e.targetedAppointmentData.startDate,
    recurrenceRule: 'FREQ=WEEKLY'
  });
}

export function setResource(e, clickEvent) {
  const itemData = e.appointmentData;

  e.component.updateAppointment(itemData, {
    itemData,
    ...{ categoria: [clickEvent.itemData.id] }
  });
}

export const cellContextMenuItems = [
  { text: 'Nuevo Evento', onItemClick: createAppointment },
  { text: 'Nuevo Evento Periódico', onItemClick: createRecurringAppointment },
  { text: 'Agrupar por Categoria/Desagrupar', beginGroup: true, onItemClick: groupCell },
  { text: 'Ir a Hoy', onItemClick: showCurrentDate }
];

export const appointmentContextMenuItems = [
  { text: 'Abrir', onItemClick: showAppointment },
  { text: 'Borrar', onItemClick: deleteAppointment },
  { text: 'Repetir Semanalmente', beginGroup: true, onItemClick: repeatAppointmentWeekly },
  { text: 'Set Room', beginGroup: true, disabled: true }
];
