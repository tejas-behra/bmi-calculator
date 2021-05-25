import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmiCalculatorModule } from './bmi-calculator/bmi-calculator.module';

@Module({
  imports: [BmiCalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
