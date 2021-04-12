import React from 'react';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from "react-dom";
import ConversationView from "../../components/Conversation/ConversationView";

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

it('Should display a loading message before the component mounts', function() {
  render(<ConversationView />, container);
  expect(container.textContent).toBe("Loading...");
})


it('Should display message components once the data mounts', function() {
  act(() => {
    render(<ConversationView />, container);
  });
  expect(container.textContent).not.toBe("Loading...");
})