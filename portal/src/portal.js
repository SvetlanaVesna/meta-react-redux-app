import 'zone.js';
import * as singleSpa from 'single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();

    // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
    await loadApp('ui.react.1', '/ui.react.1', 'ui.react.1/singleSpaEntry.js', '/ui.react.1/store.js', globalEventDistributor);

    // app2: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
    await loadApp('ui.react.2', '/ui.react.2', 'ui.react.2/singleSpaEntry.js', '/ui.react.2/store.js', globalEventDistributor);

    singleSpa.start();
}

init();

