export interface SuccessResponse<T = undefined> {
    message?: string;
    status: boolean;
    data?: T;
}
