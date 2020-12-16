import { optionsMainApi } from './constants';
const BASE_URL = optionsMainApi.baseUrl;

class MainApi {
  constructor(optionsMainApi) {
    this._optionsMainApi = optionsMainApi;
    this._baseUrl = this._optionsMainApi.baseUrl;
    this._headers = this._optionsMainApi.headers
  }

  getAllArticles(req, res, next) {
    Article.find({ owner: req.user._id }).select('+owner')
      .orFail(new NotFoundError('Not Found / Статьи у текущего пользователя не найдены')) // 404
      .then((articles) => {
        res.send(articles);
      })
      .catch(next);
  };

// Сохранение статьи
  addArticleToSavedNews(selectedCard, keyword) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        keyword:keyword,
        title:selectedCard.title,
        text:selectedCard.description,
        date:selectedCard.publishedAt,
        source:selectedCard.source.name,
        link:selectedCard.url,
        // image: 'https://ventil34.ru/upload/no_image.jpg',
        image:selectedCard.urlToImage,
        // owner:currentUser._id,
        // _id:_id,
      })
    })
      .then((res) => {
        console.log('res');
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        // return Promise.reject(`Ошибка: ${res.status}`);
        return Promise.reject(res.status);
      })
  }

  // Удаление статьи
  deleteCardFromServer(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // GET Взять все сохраненные статьи
  getSavedArticlesFromServer() {
    // return fetch(`${this._baseUrl}`, {
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        ...this._headers,
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      }, method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .then((res) => {
      return (res);
    });
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        return data;
      } else {
        return
      }
    });
  }

  getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .then(res => res)
    .then((data) => {
      if (data.data.email) {
        localStorage.setItem('name', data.data.name);
        return data;
      } else {
        return
      }
    });
  }
}
const mainApi = new MainApi(optionsMainApi);
export default mainApi;
