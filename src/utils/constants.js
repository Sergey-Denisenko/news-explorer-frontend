// Текстовые константы используемые в блоке About
const headerLogoText = 'NewsExplorer';
const headerButtonAuthText = 'Авторизоваться';

const footerInfoText = ' 2020 Supersite, Powered by News API';
const footerMenuLinkMainPageText = 'Главная';
const footerMenuLinkYPText = 'Яндекс.Практикум';
const footerMenuLinkMainPage = '/';
const footerMenuLinkYP = 'https://praktikum.yandex.ru';
const footerMenuLinkGH = 'https://github.com/Sergey-Denisenko';
const footerMenuLinkFB = 'https://www.facebook.com/serugi.denisenko';

const aboutTextHeader = 'Об авторе';
const aboutTextParagraph = `Меня зовут Сергей Денисенко. Я Веб-разработчик. Прошел обучение в Яндекс Практикум, где овладел рядом технологий веб разработки:
HTML, CSS, язык программирования JavaScript, React JS, адаптивная вёрстка (grid, flex), методология БЭМ, ООП (объекты, методы, классы)`;

// Текстовые константы используемые в блоке SearchForm
const searchFormTextHeader = 'Что творится в мире?';
const searchFormTextParagraph = 'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.';
const searchFormTextParagraphIfNotFound = 'Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.';
const placeholderText = 'Введите тему новости';

const newsCardListNotFoundHeader = 'Ничего не найдено';
const newsCardListNotFoundtParagraph = 'К сожалению по вашему запросу ничего не найдено.';
const newsCardListAddCardToListButtonText = 'Показать еще';
const newsCardListRequestErrorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

const newsCardDeleteIconTooltipText = 'Убрать из сохранённых';
const newsCardAddIconTooltipText = 'Войдите, чтобы сохранять статьи';

const infoTooltipSuccessText = 'Пользователь успешно зарегистрирован!';
const infoTooltipUnSuccessText = 'Что-то пошло не так! Попробуйте ещё раз.';

const routePathMainPage = '/';
const routePathSavedNews = '/saved-news';

// Переменные для запроса новостей
const currentDate = new Date();
const dateSearchFrom = currentDate.setDate(currentDate.getDate() - 7);
const pageSize = '100';
const apiKey= '883fdfad9dfa4f71823164f0f43088ff';

const optionsMainApi = {
  baseUrl: 'https://api.allnews.students.nomoreparties.site',
  // baseUrl: 'https://api.allnews.students.nomoreparties.site',
  headers: {
    'Content-Type': 'application/json'
  }
};

const displayCardQuantity = 3;

module.exports = {
  headerLogoText,
  headerButtonAuthText,
  footerInfoText,
  footerMenuLinkMainPageText,
  footerMenuLinkYPText,
  footerMenuLinkMainPage,
  footerMenuLinkYP,
  footerMenuLinkGH,
  footerMenuLinkFB,
  aboutTextHeader,
  aboutTextParagraph,
  searchFormTextHeader,
  searchFormTextParagraph,
  searchFormTextParagraphIfNotFound,
  placeholderText,
  newsCardListNotFoundHeader,
  newsCardListNotFoundtParagraph,
  newsCardListAddCardToListButtonText,
  newsCardListRequestErrorMessage,
  newsCardDeleteIconTooltipText,
  newsCardAddIconTooltipText,
  infoTooltipSuccessText,
  infoTooltipUnSuccessText,
  routePathMainPage,
  routePathSavedNews,
  currentDate,
  dateSearchFrom,
  pageSize,
  apiKey,
  optionsMainApi,
  displayCardQuantity,
};
