import {Exclude, Expose, Type} from 'class-transformer';

export class OutputEntity{
    @Type(()=> OutputEntityData )
    data: OutputEntityData[];
}

//@Exclude() // Get all data
export class OutputEntityData{
  // @Expose() // Get only data that we want
    region: string;
    poller_success_rate: number;
}