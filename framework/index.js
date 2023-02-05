import { eventListenersModule} from "snabbdom";

const patch = snabbdom.init([
  eventListenersModule
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);

  patch(app, component.template);
}