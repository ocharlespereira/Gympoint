export function studentsSearchRequest(data) {
  return {
    type: '@student/STUDENT_SEARCH_REQUEST',
    payload: { data },
  };
}

export function studentsSearchSuccess(data) {
  return {
    type: '@student/STUDENT_SEARCH_SUCCESS',
    payload: { data },
  };
}

export function studentsSaveRequest(data) {
  return {
    type: '@student/STUDENT_SAVE_REQUEST',
    payload: { data },
  };
}

export function studentsSaveSuccess(data) {
  return {
    type: '@student/STUDENT_SAVE_SUCCESS',
    payload: { data },
  };
}

export function studentsDeleteRequest(id) {
  return {
    type: '@student/STUDENT_DELETE_REQUEST',
    payload: { id },
  };
}

export function studentsDeleteSuccess(id) {
  return {
    type: '@student/STUDENT_SAVE_SUCCESS',
    payload: { id },
  };
}

export function studentsFailure() {
  return {
    type: '@student/STUDENT_FAILURE',
  };
}
