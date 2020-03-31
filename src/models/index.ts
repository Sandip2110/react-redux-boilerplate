export interface IActions {
    actionName: string;
    body?: object;
    type?: string;
    url?: string;
    authType?: string;
    token?: string;
}