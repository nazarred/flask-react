const initialState = {
    project: [
        '#FF0000',
        '#FFC0CB',
        '#FF7F50',
        '#FF4500',
        '#FFA500',
        '#FFFF00',
        '#EE82EE',
        '#8B4513',
        '#000000'
    ],
    tasks: {
        high: '#FF0000',
        medium: '#FFA500',
        low: '#FFFFFF',
        closed: null
    },
    }
;

const colourReducer = function(state = initialState, action) {

  switch(action.type) {
    default:
      return state;
  }

};

export default colourReducer;