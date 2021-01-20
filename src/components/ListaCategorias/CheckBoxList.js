import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from './Icon.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
}));

let categorias = ["DGC",'Relaciones Estudiantiles','Eventos Publicos','Aula Magna', 'Externos', 'Beneficio', 'Departamento de informatica'];

let itemColors = ["#bbd806",'#f34c8a','#ae7fcc','#ff8817', '#03bb92', '#00E0DE', '#eab200' ];

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0,1,2,3,4,5,6]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

  };
  
  return (
    <List dense className={classes.root}>
      {[0, 1, 2, 3, 4, 5, 6].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemIcon>
              <Icon color={itemColors[value]} /> 
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${categorias[value]}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
