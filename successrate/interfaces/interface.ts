export interface IFyliaSuccessRate {
    id: number;
    region: string;
    inventory_data: number;
    poller_data: number;
    engine_data: number;
    poller_success_rate: number;
    engine_success_rate: number;
    good: number;
    good_percent: number;
    caution: number;
    caution_percent: number;
    unstable: number;
    unstable_percent: number;
    failure: number;
    failure_percent: number;
    not_applicable: number;
    not_applicable_percent: number;
    timestamp: Date;
}