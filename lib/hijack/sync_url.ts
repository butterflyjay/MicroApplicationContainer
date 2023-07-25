import logger from "../logger";
import { PROTOTYPE } from "../types/constants";
import { addEventListenerTo } from "../utils";


export function syncUrlToRawWindow(contentWindow: Window, app: AppInterface) {
  const { history: contentHistory } = contentWindow;
  const { pushState, replaceState } = contentWindow.History[PROTOTYPE];
  contentHistory.pushState = (...args) => {
    pushState.apply(contentHistory, args);
    updateRawWindowUrl(contentWindow, app);
  };
  contentHistory.replaceState = (...args) => {
    replaceState.apply(contentHistory, args);
    updateRawWindowUrl(contentWindow, app);
  };
  addEventListenerTo(contentWindow, "hashchange", () => {
    updateRawWindowUrl(contentWindow, app);
  });
}

export function updateRawWindowUrl(contentWindow: Window, app: AppInterface) {
  const { route } = app;
  const { location: contentLocation, history: contentHistory } = contentWindow;
  const { pathname, href } = contentLocation;
  if (route.test(pathname)) {
    history.replaceState(contentHistory.state, "", href);
  } else {
    logger.warn(`mismatched pathname "${pathname}", expect ${route.toString()}`);
  }
}
