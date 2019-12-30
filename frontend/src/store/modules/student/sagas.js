import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  studentsSearchSuccess,
  studentsSaveSuccess,
  studentsDeleteSuccess,
  studentsFailure,
} from './actions';

function* searchStudents({ payload }) {
  try {
    const { name, page } = payload.data;

    const response = yield call(api.get, 'students', {
      params: {
        name: name || '',
        page,
      },
    });

    yield put(studentsSearchSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao pesquisar alunos.');
    yield put(studentsFailure());
  }
}

function* addStudent(data) {
  try {
    const response = yield call(api.post, 'students', data);

    toast.success('Aluno cadastrado com sucesso.');
    yield put(studentsSaveSuccess(response.data));

    history.push('/students');
  } catch (error) {
    toast.error('Erro ao cadastro o aluno.');
    yield put(studentsFailure());
  }
}

function* updateStudent(data) {
  try {
    const response = yield call(api.put, `students/${data.id}`, data);

    toast.success('Aluno atualizado com sucesso.');
    yield put(studentsSaveSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar aluno.');
    yield put(studentsFailure());
  }
}

function* saveStudents({ payload }) {
  const { id } = payload.data;

  if (id) {
    yield updateStudent(payload.data);
  } else {
    yield addStudent(payload.data);
  }
}

function* deleteStudents({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `students/${id}`);

    toast.success('Aluno removido com sucesso');
    yield put(studentsDeleteSuccess(id));
  } catch (error) {
    toast.error('Erro ao remover o aluno.');
    yield put(studentsFailure());
  }
}

export default all([
  takeLatest('@student/STUDENT_SEARCH_REQUEST', searchStudents),
  takeLatest('@student/STUDENT_SAVE_REQUEST', saveStudents),
  takeLatest('@student/STUDENT_DELETE_REQUEST', deleteStudents),
]);
