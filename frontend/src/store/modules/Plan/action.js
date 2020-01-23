export function plansSearchRequest(data) {
  return {
    type: '@plan/PLAN_SEARCH_REQUEST',
    payload: { data },
  };
}

export function plansSearchSuccess(data) {
  return {
    type: '@plan/PLAN_SEARCH_SUCCESS',
    payload: { data },
  };
}

export function plansSaveRequest(data) {
  return {
    type: '@plan/PLAN_SAVE_REQUEST',
    payload: { data },
  };
}

export function plansSaveSuccess(data) {
  return {
    type: '@plan/PLAN_SAVE_SUCCESS',
    payload: { data },
  };
}

export function plansDeleteRequest(id) {
  return {
    type: '@plan/PLAN_DELETE_REQUEST',
    payload: { id },
  };
}

export function plansDeleteSuccess(id) {
  return {
    type: '@plan/PLAN_DELETE_SUCCESS',
    id,
  };
}

export function plansFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}
