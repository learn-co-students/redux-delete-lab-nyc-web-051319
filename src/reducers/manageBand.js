import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, band] }
    case "DELETE_BAND":
      let filteredBands = state.bands.filter(band => band.id !== action.id);
      return { ...state, bands: filteredBands }
    default:
      return state;
  }
};
