/*
  * 网络传参接口
  *
  * **/

import enumAuth from './_auth';
interface Iparams {
  url: string;
  data?: any;
  auth?: enumAuth;
  method?: string;
}
export default Iparams;
