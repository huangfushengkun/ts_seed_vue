/*
  * 服务
  */
import { loginUrl } from './lib/url';

import fetchInstance from './lib/fetch';

export default {
  async fLoginService() {
    return await fetchInstance.patch({
      url: loginUrl(),
      data: {
        name: 'huangfushengkun@163.com',
        pwd: '123456',
      },
    });
  },
};
