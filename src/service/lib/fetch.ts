/*
 * fetch.Ts
 * */
import Service from './_service';
import IParams from './_params';
import enumAuth from './_auth';
import Qs from 'qs';

interface IHeader {
  'Content-Type'?: string;
  'Authorization'?: string;
}

interface IConfig {
  cache: string;
  credentials?: string;
  headers?: IHeader;
  body?: any;
  method?: string;
}

interface IReq {
  url: string;
  config: any;
}

// 请求头
const oHeaders: IHeader = {
  'Content-Type': 'x-www-form-urlencoded',
};

class FetchClient extends Service {
  private config: IConfig = {
    cache: 'no-cache',
    // credentials:'same-orgin',
  };
  public async get(params: IParams) {
    return await this.httpFactory({ ...params, method: 'GET' });
  }
  public async post(params: IParams) {
    return await this.httpFactory({ ...params, method: 'POST' });
  }
  public async put(params: IParams) {
    return await this.httpFactory({ ...params, method: 'PUT' });
  }
  public async update(params: IParams) {
    return await this.httpFactory({ ...params, method: 'UPDATE' });
  }
  public async delete(params: IParams) {
    return await this.httpFactory({ ...params, method: 'DELETE' });
  }
  public async patch(params: IParams) {
    return await this.httpFactory({ ...params, method: 'PATCH' });
  }
  /*
   * 请求拦截器
   * 功能：请求配置，鉴权
   * */
  private interceptorRequest(params: IParams) {
    let headers: IHeader;
    let conf: any = {};
    // 通过鉴权产出Headers
    switch (params.auth) {
      case enumAuth.Level01: // 需要Token
        headers = Object.assign(oHeaders, {
          Authorization: '',
        });
        break;
      case enumAuth.Level02: // 不需要Token
        headers = Object.assign(oHeaders, {});
        break;
      case enumAuth.Level03: // 不需要Token
        headers = Object.assign(oHeaders, {
          Authorization: 'Basic d2ViLW1hbnVmYWN0dXJlcjpmZDQ2MzE2ZjA0OA==',
        });
        break;
    }

    if (params.method === 'GET' || params.method === 'HEAD') {
      params.data = Qs.stringify(params.data, { arrayFormat: 'brackets' });
      params.url = `${params.url}?${params.data}`;
    } else {
      // 非表单数据，及JSON 表头
      if (Object.prototype.toString.call(params.data) !== '[object FormData]') {
        Object.assign(headers, { 'Content-Type': 'application/json', 'Accept': 'application/json' });
        params.data = JSON.stringify(params.data);
      }
      conf = { body: params.data };
    }

    return {
      url: params.url,
      config: Object.assign(this.config, {
        method: params.method,
        headers,
      }, conf),
    };
  }
  /*
   * 响应拦截器res
   * */
  private async interceptorResponse(res: any) {
    // console.log('-----响应-----');
    if (res.status === 200 && res.ok === true) {   // 网络请求正常
      return await res.json();
    } else { // 请求异常

    }
  }
  /*
   * 请求工厂
   * */
  private async httpFactory({ url = '', data = null, auth = enumAuth.Level01, method }: IParams) {
    // console.log(data);
    const req: any = await this.interceptorRequest({ url, data, auth, method });       // 请求拦截
    // console.log(req)
    const res = await fetch(req.url, req.config);               // 网络请求
    const rst = await this.interceptorResponse(res);   // 响应拦截
    return rst;
  }
}

export default new FetchClient();
