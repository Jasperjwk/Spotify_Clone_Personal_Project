import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

// State is how it currently looks like
// Action is what i manipulate what the data layer looks like
// For example: set the item that we are currently playing
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // When you receive this action, you basically want to return 
    case "SET_USER":
      return {
        // Keep whatever it is in the current state 
        // Need to have ...state otherwise it will overwrite the state
        ...state,
        // Update the user with whatever is inside the action
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      // nothing changes so it does not break my app
      return state;
  }
};

export default reducer;
