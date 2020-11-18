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
const aboutTextParagraph = `Это блок с описанием автора проекта.
  Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями
   разработки владеете. Также можно рассказать о процессе обучения в Практикуме,
    чему вы тут научились, и чем можете помочь потенциальным заказчикам.`;

// Текстовые константы используемые в блоке SearchForm
const searchFormTextHeader = 'Что творится в мире?';
const searchFormTextParagraph = 'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.';
const searchFormTextParagraphIfNotFound = 'Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.';
const placeholderText = 'Введите тему новости';

const newsCardListNotFoundHeader = 'Ничего не найдено';
const newsCardListNotFoundtParagraph = 'К сожалению по вашему запросу ничего не найдено.';
const newsCardListAddCardToListButtonText = 'Показать еще';

const newsCardDeleteIconTooltipText = 'Убрать из сохранённых';
const newsCardAddIconTooltipText = 'Войдите, чтобы сохранять статьи';

const infoTooltipSuccessText = 'Пользователь успешно зарегистрирован!';
const infoTooltipUnSuccessText = 'Что-то пошло не так! Попробуйте ещё раз.';

const initialCards = [
  {
    keyword: 'Enviro',
    title: '01 Эффективное использование process.env',
    text: 'Если вы только начинаете осваивать Node.js, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://habrastorage.org/webt/n2/-q/rs/n2-qrslohf2-h9mu9pb0v_zahjk.jpeg',
    _id: '123456789123456789123451',
  },
  {
    keyword: 'Архыз',
    title: '02 Архыз',
    text: 'Если вы только начинаете осваивать Архыз, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    _id: '123456789123456789123452',
  },
  {
    keyword: 'Челябинская область',
    title: '03 Челябинская область',
    text: 'Если вы только начинаете осваивать Челябинская область, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    _id: '123456789123456789123453',
  },
  {
    keyword: 'Иваново',
    title: '03 Иваново',
    text: 'Если вы только начинаете осваивать Иваново, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    _id: '123456789123456789123454',
  },
  {
    keyword: 'Камчатка Камчатка Камчатка Камчатка Камчатка Камчатка',
    title: '05 Камчатка',
    text: 'Если вы только начинаете осваивать Камчатка, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    _id: '123456789123456789123455',
  },
  {
    keyword: 'Холмогорский район',
    title: '06 Холмогорский район',
    text: 'Если вы только начинаете осваивать Холмогорский район, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    _id: '123456789123456789123456',
  },
  {
    keyword: 'Байкал',
    title: '07 Байкал',
    text: 'Если вы только начинаете осваивать Байкал, то, вам, наверняка, встречались примерно такие строчки кода app.listen(process.env.PORT). Зачем вбивать в редактор кода шестнадцать символов, когда того же эффекта можно добиться, просто указав номер порта, например — 3000? Предлагаем это выяснить.',
    date: '04 ноября 2020',
    source: 'habr.com',
    link: 'https://habr.com/ru/company/ruvds/blog/345724/',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    _id: '123456789123456789123457',
  },
];

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
  newsCardDeleteIconTooltipText,
  newsCardAddIconTooltipText,
  infoTooltipSuccessText,
  infoTooltipUnSuccessText,
  initialCards,
};
