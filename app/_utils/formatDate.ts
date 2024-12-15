export const formatDate = (text: Date) => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(text)
  );
};
