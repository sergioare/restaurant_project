export const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const includesSearchTerm = (
  value: string | string[] | undefined,
  searchTerm: string,
) => {
  if (!value) return false;

  const normalizedTerm = normalizeText(searchTerm);

  if (Array.isArray(value)) {
    return value.some((item) => normalizeText(item).includes(normalizedTerm));
  }

  const normalizedValue = normalizeText(value);
  return normalizedValue.includes(normalizedTerm);
};
