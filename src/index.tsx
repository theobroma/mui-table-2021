import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppContainer } from './#/App';
import { store, persistor } from './configureStore';
import LoadingPage from './@components/UI/LoadingPage';
import reportWebVitals from './reportWebVitals';

// All styles
import './@assets/styles/index.scss';

// Open Source typefaces
import '@fontsource/open-sans'; // Defaults to weight 400.

import THEME from './theme.json';

const rootEl = document.getElementById('root');

const theme = createMuiTheme(THEME);

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootEl,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
