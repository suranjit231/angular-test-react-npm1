import { Component, AfterViewInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyComponent from '@suranjitnamasudra/publish-react-npm';

@Component({
  selector: 'app-root',
  template: '<div id="react-root"></div>',
  standalone:true,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Render the React component inside the Angular template
    ReactDOM.render(
      React.createElement(MyComponent, {
        message: 'Hello from React Component!',
        imageUrl: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
        theme: 'dark',
      }),
      document.getElementById('react-root')
    );
  }
}
