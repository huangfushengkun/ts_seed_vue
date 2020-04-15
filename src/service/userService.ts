/*
  * 服务
  */
import { loginUrl } from './lib/url';
import enumAuth from './lib/_auth';
import fetchInstance from './lib/fetch';

export default {
  async fLoginService() {
    return await fetchInstance.post({
      url: loginUrl(),
      // auth: enumAuth.Level01,
      data: {
        account: 'huangfushengkun@163.com',
        type: 101,
        secret: 'huangfu521',
      },
    });
  },
};
