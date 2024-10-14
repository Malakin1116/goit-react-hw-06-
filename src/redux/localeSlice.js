import { createAction } from "@reduxjs/toolkit";

export const changeLang = createAction("locale/changeLang");

export default function localeReducer(state = { lang: "uk" }, action) {
  switch (action.type) {
    case "locale/changelang":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
}
