import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Root,
	domElementGetter,
});

export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
	return reactLifecycles.mount(props)
		.then((rootComponent) => {
		console.log(rootComponent)
        rootComponent.setStore(props.customProps.store);
        rootComponent.setGlobalEventDistributor(props.customProps.globalEventDistributor);
    });
}

export function unmount(props) {
	return reactLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('ui.react.1');
	if (!el) {
		el = document.createElement('div');
		el.id = 'ui.react.1';
		document.body.appendChild(el);
	}

	return el;
}
