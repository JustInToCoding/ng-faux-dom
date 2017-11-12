import Window from './faux-window';

import { Renderer2 } from '@angular/core';

export class FauxDOM {

  public Element: Element;
  public defaultView = Window;

  constructor(private r: Renderer2) {
    this.Element = this.r.createElement('div').__proto__;
  }

  public createElement(nodeName: string): Element {
    return this.r.createElement(nodeName);
  }

  public createElementNS(namespace: string, nodeName: string): Element {
    return this.r.createElement(nodeName, namespace);
  }

  public compareDocumentPosition(): number {
    // The selector engine tries to validate with this, but we don't care.
    // 8 = DOCUMENT_POSITION_CONTAINS, so we say all nodes are in this document.
    return 8;
  }

  public append(parent: Element, child: Element): void {
    this.r.appendChild(parent, child);
  }
}
