/*
  * 服务抽象类
  **/
import IParams from './_params';
/* 抽象类 */
abstract class Service {
  public abstract get(params: IParams): void;
  public abstract post(params: IParams): void;
  public abstract put(params: IParams): void;
  public abstract delete(params: IParams): void;
  public abstract patch(params: IParams): void;
}
export default Service;
