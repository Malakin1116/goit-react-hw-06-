// import { createAction } from "@reduxjs/toolkit";

// export const changeLang = createAction("locale/changeLang");

// export default function localeReducer(state = { lang: "uk" }, action) {
//   switch (action.type) {
//     case "locale/changelang":
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

export const selectLang = (state) => state.locale.lang;

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  redusers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;
