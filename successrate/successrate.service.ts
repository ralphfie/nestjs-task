import { Injectable, HttpService } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { OutputEntity} from './entities/output.entity';

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJSMTAyMTgiLCJpYXQiOjE1OTk4MDY1NjIsImV4cCI6MTU5OTgxMDE2Mn0.Mn4p24NZVEdjVyNb1o9nRpvUQbn1ldSmm753_2zIH3c';
const fiberHttp = 'https://camelia.tm.com.my:1880/fylia/api/report/scheduler_successrate_service?date=11-09-2020';
const copperHttp = 'https://camelia.tm.com.my:1880/dylia/api/report/scheduler_successrate_service?date=11-09-2020&network=all';

@Injectable()
export class SuccessrateService {
    constructor(private readonly client:HttpService) {}
    
    // Fetch Fiber API from Camelia
    async getSuccessRateFiber() {
        try {
            const obs$ = this.client.get(
              fiberHttp,
              {
                headers: {Authorization: token }
              }
            );
            const output = await obs$.toPromise();
            return output.data;
        } catch (e) {return e}
    }
    // Fetch Copper API from Camelia
    async getSuccessRateCopper() {
        try {
            const obs$ = this.client.get(
              copperHttp,
              {
                headers: {Authorization: token}
              }
            );
           const output = await obs$.toPromise();
           return output.data;
        } catch (e) {return e}
    }
    
    //fetch desired data
    async getSuccessRateFiber1() {
        try {
            const obs$ = this.client.get(
              fiberHttp,
              {
                headers: {Authorization:token}
              }
            );
          const output = await obs$.toPromise();
           const test = plainToClass(OutputEntity,output.data) ;
           const high = [];
           const low = [];
           test.data.forEach(element => {
               if (element.poller_success_rate > 80) {
                   console.log(`The Highest Percentange | Region ${element.region} :` + element.poller_success_rate);
                   high.push(element.region , element.poller_success_rate);
               } else {
                   console.log(`The Lowers Percentage | Region ${element.region} :` + element.poller_success_rate);
                   low.push( element.region , element.poller_success_rate);
               }
           });
          return {Highest_Percentange: high, Lowest_Percentange: low};
        } catch (e) {return e}
    }
}

