export interface PageResult<T> {
  pageNo?: number;
  pageSize?: number;
  records?: T[];
  total?: number;
}
