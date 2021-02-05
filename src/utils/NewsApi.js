import { currentDate, dateSearchFrom, pageSize, apiKey,} from '../utils/constants';

export const getNewsByKeywordFromNewsApi = (searchPhrase) => {

  // const url = 'http://newsapi.org/v2/everything?' +
  const url = 'https://nomoreparties.co/news/v2/everything?' +
          `q=${searchPhrase}&` +
          `from=${currentDate}&` +
          `to=${dateSearchFrom}&` +
          `pageSize=${pageSize}&` +
          `apiKey=${apiKey}`;

  const req = new Request(url);
  return fetch(req)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  })
  .then((data) => {
    if (data) {
      // localStorage.setItem('data', {data});
      return data;
    } else {
      return
    }
  })
}
