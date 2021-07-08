/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
import I from 'immutable';
import {
  ADD_NEW_POLL,
  DELETE_POLL_SUCCESS,
  GET_POLL_REQUEST,
  GET_POLL_SUCCESS,
  TAKE_USER_POLLS_REQUEST,
  TAKE_USER_POLLS_SUCCESS,
  UPDATE_POLL_RESULT,
} from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  status: '',
  polls: [
    // {
    //   id: 1,
    //   pollName: 'Best Movie',
    //   date: '06.06.21',
    //   votes: 100,
    //   status: 'finished',
    //   question: {
    //     questionText: 'Choose the best movie for you ',
    //     options: [
    //       { optionText: 'Breaking Bad', votes: 50 },
    //       { optionText: 'Prison Break', votes: 30 },
    //       { optionText: 'Game of Thrones', votes: 20 },
    //     ],
    //   },
    // },
    // {
    //   id: 2,
    //   pollName: 'Personal Info',
    //   date: '12.12.21',
    //   votes: 150,
    //   status: 'finished',
    //   question: {
    //     questionText: 'Choose the best movie for you ',
    //     options: [
    //       { optionText: 'Breaking Bad', votes: 70 },
    //       { optionText: 'Prison Break', votes: 70 },
    //       { optionText: 'Game of Thrones', votes: 10 },
    //     ],
    //   },
    // },
    // {
    //   id: 3,
    //   pollName: 'Education Level',
    //   date: '09.08.21',
    //   votes: 70,
    //   status: 'finished',
    //   question: {
    //     questionText: 'Choose the best movie for you ',
    //     options: [
    //       { optionText: 'Breaking Bad', votes: 10 },
    //       { optionText: 'Prison Break', votes: 40 },
    //       { optionText: 'Game of Thrones', votes: 20 },
    //     ],
    //   },
    // },
  ],
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_POLL: {
      return state.set('polls', [...state.get('polls', 'fallback'), action.payload]);
    }
    case UPDATE_POLL_RESULT: {
      const { selected, id } = action.payload;
      return state.withMutations(_state => {
        _state
          .update('polls', polls => {
            return polls.map(poll => {
              if (poll.get('id') === id) {
                return poll.updateIn(['question', 'options'], options => {
                  return options.map(option => {
                    if (option.get('optionText') === selected) {
                      return option.set('votes', option.get('votes') + 1);
                    } else {
                      return option;
                    }
                  });
                })
                  .set('votes', parseInt(poll.get('votes'), 10) + 1);
              } else {
                return poll;
              }
            });
          });
      });
    }
    case TAKE_USER_POLLS_REQUEST: {
      return state.set('status', 'loading');
    }
    case TAKE_USER_POLLS_SUCCESS: {
      return state.set('polls', [...state.get('polls', 'fallback'), ...action.payload]).set('status', 'ready');
    }
    case GET_POLL_REQUEST: {
      return state.set('status', 'loading');
    }
    case GET_POLL_SUCCESS: {
      return state.set('polls', [...state.get('polls', 'fallback'), action.payload]).set('status', 'ready');
    }
    case DELETE_POLL_SUCCESS: {
      return state.set('polls', state.get('polls', 'fallback').filter(poll => poll.get('id') !== action.payload));
    }
    default:
      return state;
  }
};
