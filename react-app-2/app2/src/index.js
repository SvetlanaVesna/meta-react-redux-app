import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';


import configureStore from './store';
import Root from "./root.component";

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app2')
  );
};

render(Root);
//
// if (module.hot) {
//   module.hot.accept('./components/Routes', () => {
//     // eslint-disable-next-line
//     const NextRoutes = require('./components/Routes').default;
//
//     render(NextRoutes);
//   });
// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import singleSpaReact from 'single-spa-react';
// import Root from './root.component.js';
//
// const reactLifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: Root,
//   domElementGetter,
// });
//
// export function bootstrap(props) {
//   return reactLifecycles.bootstrap(props);
// }
//
// export function mount(props) {
//   return reactLifecycles.mount(props);
// }
//
// export function unmount(props) {
//   return reactLifecycles.unmount(props);
// }
//
// function domElementGetter() {
//   // Make sure there is a div for us to render into
//   let el = document.getElementById('app2');
//   if (!el) {
//     el = document.createElement('div');
//     el.id = 'app2';
//     document.body.appendChild(el);
//   }
//
//   return el;
// }