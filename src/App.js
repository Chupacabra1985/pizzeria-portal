import React from 'react';
import { Switch, Route } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import BookedTable from './components/views/BookedTable/BookedTable';
import Tables from './components/views/Tables/Tables';
import BookTable from './components/views/BookTable/BookTable';
import Event from './components/views/Event/Event';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookedTable}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={BookTable}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Event}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order}/>
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
