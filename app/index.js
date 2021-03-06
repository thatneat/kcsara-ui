import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    Route,
    BrowserRouter,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MembersPage from './components/MembersPage';
import MemberPage from './components/MemberPage';
import PrimaryNavigation from './components/PrimaryNavigation';
import '../scss/global.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const SiteRouter = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <div>
                <Route path="/" component={PrimaryNavigation} />
                <Route exact path="/members" component={MembersPage} />
                <Route exact path="/members/:memberId" component={MemberPage} />
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
);


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(() => {}, {}, window.devToolsExtension && window.devToolsExtension());

const App = (
    <Provider store={store}>
        <SiteRouter />
    </Provider>
);


ReactDOM.render(
  App,
  document.getElementById('render-target')
);
