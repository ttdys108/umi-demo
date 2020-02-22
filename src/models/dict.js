
export default {
  namespace: 'dict',
  state: {
    locale: 'zh_CN',
    supportLocales: ['zh_CN', 'en'],
    dict: [],
    totalDicts: {} //格式: {'zh_CN':[], 'en': []}
  },
  reducers: {
    'setLocale'(state, {payload: locale}) {
      state.locale = locale;
      state.dict = state.totalDicts[locale];
      return state;
    },
    'setDicts'(state, {payload: dicts}) {
      state.totalDicts = dicts;
      state.dict = dicts[state.locale];
      return state;
    },
    'setSupportLocales'(state, {payload: supportLocales}) {
      return {...state, supportLocales};
    }

  }

}
