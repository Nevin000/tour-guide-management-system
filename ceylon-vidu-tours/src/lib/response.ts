export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
}

export function successResponse<T>(message: string, data?: T): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(message: string, errors?: unknown): ApiResponse {
  return {
    success: false,
    message,
    errors,
  };
}
