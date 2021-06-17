import I from 'immutable';

const INITIAL_STATE = I.fromJS({

});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
