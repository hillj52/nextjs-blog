const defaultOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const dateFormatter = (
  date: string,
  options: Intl.DateTimeFormatOptions = defaultOptions
) => new Date(date).toLocaleDateString('en-US', options);

export default dateFormatter;
