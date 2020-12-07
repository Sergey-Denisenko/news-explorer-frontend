import { currentDate, dateSearchFrom, pageSize, apiKey,} from '../utils/constants';

export const getNewsByKeywordFromNewsApi = (searchPhrase) => {
  // let url = 'http://newsapi.org/v2/everything?' +
  //         `q=${searchPhrase}&` +
  //         `from=currentDate.setDate(currentDate.getDate() - 7)&` +
  //         `to=new Date()&` +
  //         `pageSize=100&` +
  //         `apiKey=883fdfad9dfa4f71823164f0f43088ff`;

  const url = 'http://newsapi.org/v2/everything?' +
          `q=${searchPhrase}&` +
          `from=${currentDate}&` +
          `to=${dateSearchFrom}&` +
          `pageSize=${pageSize}&` +
          `apiKey=${apiKey}`;

  const req = new Request(url);
  // console.log('searchPhrase in api');
  // console.log(searchPhrase);
  return fetch(req)
  .then((res) => {
    if (res.ok) {
      // console.log(res.json());
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
