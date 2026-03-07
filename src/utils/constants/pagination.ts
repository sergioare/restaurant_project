export const paginate = <T>(
  items: T[],
  currentPage: number,
  pageSize: number,
): T[] => {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return items.slice(start, end);
};

export const getTotalPages = (totalItems: number, pageSize: number): number => {
  return Math.ceil(totalItems / pageSize);
};
