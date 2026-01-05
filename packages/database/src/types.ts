export interface Pagination<T> {
  pageNo: number
  pageSize: number
  records: T[]
}
