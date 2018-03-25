import React from 'react';
import { hot } from 'react-hot-loader';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default hot(module)(App);
