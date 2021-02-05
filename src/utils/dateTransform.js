function dateTransform(dateForTransform) {
  const dayAndMonth = new Date(dateForTransform);
  const formatOptionsDayAndMonth = {
        day:    'numeric',
        month:  'long'
  };
  const dayAndMonthString = dayAndMonth.toLocaleDateString('ru', formatOptionsDayAndMonth);

  const year = new Date(dateForTransform);
  const formatOptionsYear = {
        year:   'numeric'
  };
  const yearString = year.toLocaleDateString('ru', formatOptionsYear);

  const fullDate = `${dayAndMonthString}, ${yearString}`;
  return fullDate;
}

export default dateTransform;
