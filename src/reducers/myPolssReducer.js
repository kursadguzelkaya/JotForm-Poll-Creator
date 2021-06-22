import I from 'immutable';

const INITIAL_STATE = I.fromJS({
  polls: [
    {
      pollName: 'Best Movie',
      date: '06.06.21',
      votes: 100,
    },
    {
      pollName: 'Personal Info',
      date: '12.12.21',
      votes: 150,
    },
    {
      pollName: 'Education Level',
      date: '09.08.21',
      votes: 70,
    },
  ],
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
