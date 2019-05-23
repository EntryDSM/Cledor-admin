export type responseType<T = any> = {
  status: number;
  data: T;
};
