// 网络请求地址
const baseUrl: string = process.env.VUE_APP_APIBASEURL;

export const loginUrl = () => `${baseUrl}/v1/token/`; // 网络请求地址
