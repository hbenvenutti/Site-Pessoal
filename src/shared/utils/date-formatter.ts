function formatEducationDate(date: Date): string {
  // eslint-disable-next-line prettier/prettier
  return Intl
    .DateTimeFormat('pt-br', { month: '2-digit', year: 'numeric' })
    .format(date);
}

// * ---------------------------------------------------------------------- * //

export { formatEducationDate };
