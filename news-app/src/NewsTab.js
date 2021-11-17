import React , {useState} from 'react';
import Technology from './Technology';
import Sports from './Sports';
import Entertainment from './Entertainment';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const NewsTab = () =>  {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Technology"/>
          <Tab label="Sport" />
          <Tab label="Entertainment" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Technology/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Sports/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Entertainment/>
      </TabPanel>
    </div>
  );
};
export default NewsTab;

