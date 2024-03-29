import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import LoadingPage from './@components/UI/LoadingPage';
import { AppContainer } from './@routes/App';
import { persistor, store } from './@store/configureStore';
import { theme } from './@themes/theme';
import reportWebVitals from './reportWebVitals';

import './index.css';
// All styles
import './@assets/styles/index.scss';
// requiered for Material UI
// https://material-ui.com/ru/components/typography/#install-with-npm
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Open Source typefaces
import '@fontsource/open-sans'; // Defaults to weight 400.

const rootEl = document.getElementById('root');

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
