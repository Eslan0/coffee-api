import MessageResponse from "./message.interface";

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export default ErrorResponse;
