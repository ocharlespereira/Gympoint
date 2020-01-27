import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatCurrencyBR, formatCurrency } from '~/util';
import api from '~/services/api';
import history from '~/services/history';
import {
  plansFailure,
  plansSearchSuccess,
  plansSaveSuccess,
  plansDeleteSuccess,
} from './action';

function* seachPlans({ payload }) {
  try {
    const { title, page } = payload.data;

    const response = yield call(api.get, 'plans', {
      params: {
        title: title || '',
        page,
      },
    });

    const data = response.data.data.map(item => ({
      ...item,
      priceFormatted: formatCurrencyBR(item.price),
      monthString: item.duration === 1 ? 'mês' : 'meses',
    }));

    yield put(plansSearchSuccess({ ...response.data, data }));
  } catch (error) {
    toast.error('Erro ao pesquisar planos.');
    yield put(plansFailure());
  }

  function* addPlan(data) {
    try {
      const dataFormatted = { ...data, price: formatCurrency(data.price) };

      const response = yield call(api.post, 'plans', dataFormatted);

      toast.success('Plano cadastrado com sucesso');
      yield put(plansSaveSuccess(response.data));

      history.push('/plans');
    } catch (error) {
      toast.error('Erro cadastrar aluno!');
      yield put(plansFailure());
    }
  }

  function* updatePlan(data) {
    try {
      const dataFormatted = { ...data, price: formatCurrency(data.price) };
      const res = yield call(api.put, `plans/${dataFormatted}`, dataFormatted);

      toast.success('Plano Atualizado com sucesso.');
      yield put(plansSaveSuccess(res.data));
    } catch (error) {
      toast.error('Erro atualizar aluno!');
      yield put(plansFailure());

    }
  }

  function* deletePlan({ payload }) {
    try {
      const { id } = payload;

      yield call(api.delete, `plans/${id}`);

      toast.success('Plano removido com sucesso');
      yield put(plansDeleteSuccess(id));
    } catch (error) {
      toast.error('Erro remover planos.');
      yield put(plansFailure());
    }
  }

  export default all([
    takeLatest('@plan/PLAN_SEARCH_REQUEST', searchPlans),
    takeLatest('@plan/PLAN_SAVE_REQUEST', savePlan),
    takeLatest('@plan/PLAN_DELETE_REQUEST', deletePlan),
  ]);
}
