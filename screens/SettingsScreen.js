/**
 * This is how you import stuff.  In this case you're actually
 * importing two things:  React itself and just the "Component"
 * part from React.  Importing the "Component" part by itself makes it
 * so that you can do something like:
 *
 * class MyComponent extends Component ...
 *
 * instead of...
 *
 * class MyComponent extends React.Component
 *
 * Also note the comma below
 */
//import React, {Component} from 'react';


import React from 'react';
import { ExpoConfigView } from '@expo/samples'; // https://stackoverflow.com/questions/42711175/what-does-the-symbol-do-in-javascript-imports

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
