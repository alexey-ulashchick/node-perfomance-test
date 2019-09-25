import {Controller, Get, PathParams} from "@tsed/common";
import { fibonacci } from '../helpers/Fibonacci';
import * as moment from  'moment';
import {Moment} from 'moment';

@Controller("/fibonacci")
export class FibonacciCtrl {

  @Get("/:val")
  findAll(@PathParams("val") val: string) {
    const start: Moment = moment();
    const fibVal = fibonacci(Number(val));
    const end: Moment = moment();

    return {fibVal, executionTime: `${end.diff(start)/1000}s`};
  }

}
