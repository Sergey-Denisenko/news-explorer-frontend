function dateTransform(dateForTransform) {
  let dayAndMonth = new Date(dateForTransform);
  let formatOptionsDayAndMonth = {
        day:    'numeric',
        month:  'long'
  };
  let dayAndMonthString = dayAndMonth.toLocaleDateString('ru', formatOptionsDayAndMonth);

  let year = new Date(dateForTransform);
  let formatOptionsYear = {
        year:   'numeric'
  };
  let yearString = year.toLocaleDateString('ru', formatOptionsYear);

  const fullDate = `${dayAndMonthString}, ${yearString}`;
  return fullDate;
}

export default dateTransform;
