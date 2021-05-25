import { Test, TestingModule } from '@nestjs/testing';
import { BmiCalculatorController } from './bmi-calculator.controller';

describe('BmiCalculatorController', () => {
  let controller: BmiCalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BmiCalculatorController],
    }).compile();

    controller = module.get<BmiCalculatorController>(BmiCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
