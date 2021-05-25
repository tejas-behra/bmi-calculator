import { BmiCalculatorService } from './bmi-calculator.service';
export declare class BmiCalculatorController {
    private bmicalculatorservice;
    bmi_object: any;
    constructor(bmicalculatorservice: BmiCalculatorService);
    addBmiData(body: any): Promise<any>;
    getOverweightCount(): Promise<{}>;
}
