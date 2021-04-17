import React from 'react';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from "react-dom";
import MessageView from "../../components/Conversation/MessageView";
import { fakeMessage } from "../../constants/messages"

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});
  
afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Should display correct message', function() {
//   render(<MessageView message={fakeMessage} />, container);
//   expect(container.textContent).toEqual(expect.stringContaining('Hello, this is a test message'));
})