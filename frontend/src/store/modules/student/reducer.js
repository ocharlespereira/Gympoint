import produce from 'immer';

const INITIAL_STATE = {
  students: {
    page: 1,
    perPage: 5,
    total: 0,
    totalPage: 0,
    data: [],
  },
  student: {},
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/STUDENT_SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_SEARCH_SUCCESS': {
        draft.students = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@student/STUDENT_SAVE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_SAVE_SUCCESS': {
        draft.student = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@student/STUDENT_DELETE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_DELETE_SUCCESS': {
        draft.loading = false;
        draft.students.data = state.students.data.filter(
          el => el.id !== action.id
        );
        break;
      }

      case '@student/STUDENT_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
