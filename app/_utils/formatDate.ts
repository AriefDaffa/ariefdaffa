export const formatDate = (text?: Date) => {
  if (!text) return;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(text)
  );
};
