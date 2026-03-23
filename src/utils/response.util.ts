import { ResponseT } from "../interfaces/message.interface";

export const customResponse = <T>({ message, data, success, error, status }: ResponseT<T>) => {
  return {
    message,
    success,
    error,
    status,
    data,
  };
};

export default customResponse;
