/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import linkedString from 'linked-package';

console.log(linkedString);

AppRegistry.registerComponent(appName, () => App);
