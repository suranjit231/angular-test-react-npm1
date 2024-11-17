import { Injectable, Injector } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Injectable({
  providedIn: 'root',
})
export class ReactWrapperService {
  mountReactComponent(component: React.ComponentType<any>, props: any, container: HTMLElement) {
    ReactDOM.render(React.createElement(component, props), container);
  }
}
