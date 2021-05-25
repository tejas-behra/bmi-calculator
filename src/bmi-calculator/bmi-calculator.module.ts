import { Module } from '@nestjs/common';
import { BmiCalculatorController } from './bmi-calculator.controller';
import { BmiCalculatorService } from './bmi-calculator.service';

@Module({
  controllers: [BmiCalculatorController],
  providers: [BmiCalculatorService]
})
export class BmiCalculatorModule {}
