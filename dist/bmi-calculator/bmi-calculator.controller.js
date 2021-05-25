"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmiCalculatorController = void 0;
const common_1 = require("@nestjs/common");
const bmi_calculator_service_1 = require("./bmi-calculator.service");
let BmiCalculatorController = class BmiCalculatorController {
    constructor(bmicalculatorservice) {
        this.bmicalculatorservice = bmicalculatorservice;
        this.bmi_object = undefined;
        this.bmi_object = [];
    }
    async addBmiData(body) {
        let obese_count = 0;
        if (body instanceof Array) {
            for (let i = 0; i < body.length; i++) {
                let height_m = body[i]["HeightCm"] / 100;
                let weight_kg = body[i]["WeightKg"];
                let bmi = weight_kg / height_m;
                let data = {};
                data["WeightKg"] = weight_kg;
                data["HeightCm"] = body[i]["HeightCm"];
                data["Gender"] = body[i]["Gender"];
                data["bmi"] = bmi;
                if (bmi <= 18.4) {
                    data["BmiCategory"] = "Under weight";
                    data["HealthRisk"] = "Malnutrition";
                }
                else if (18.5 < bmi && bmi < 24.9) {
                    data["BmiCategory"] = "Normal weight";
                    data["HealthRisk"] = "Low Risk";
                }
                else if (25 < bmi && bmi < 29.9) {
                    data["BmiCategory"] = "OverWeight";
                    data["HealthRisk"] = "Enhanced Risk";
                }
                else if (30 < bmi && bmi < 34.9) {
                    data["BmiCategory"] = "Moderately obese";
                    data["HealthRisk"] = "Medium Risk";
                }
                else if (35 < bmi && bmi < 39.9) {
                    data["BmiCategory"] = "Serverly obese";
                    data["HealthRisk"] = "High Risk";
                }
                else if (bmi >= 40) {
                    data["BmiCategory"] = "Very Serverly obese";
                    data["HealthRisk"] = "Very High Risk";
                }
                console.log(data);
                this.bmi_object.push(data);
            }
            return this.bmi_object;
        }
        else {
        }
    }
    async getOverweightCount() {
        let data = {};
        data["OverWeight"] = 0;
        data["Moderately obese"] = 0;
        data["Serverly obese"] = 0;
        data["Very Serverly obese"] = 0;
        for (let i = 0; i < this.bmi_object.length; i++) {
            let bmi = this.bmi_object[i].bmi;
            if (25 < bmi && bmi < 29.9) {
                data["OverWeight"] = data["OverWeight"] + 1;
            }
            else if (30 < bmi && bmi < 34.9) {
                data["Moderately obese"] = data["Moderately obese"] + 1;
            }
            else if (35 < bmi && bmi < 39.9) {
                data["Serverly obese"] = data["Serverly obese"] + 1;
            }
            else if (bmi >= 40) {
                data["Very Serverly obese"] = data["Very Serverly obese"] + 1;
            }
        }
        return data;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BmiCalculatorController.prototype, "addBmiData", null);
__decorate([
    common_1.Get('/overweight'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BmiCalculatorController.prototype, "getOverweightCount", null);
BmiCalculatorController = __decorate([
    common_1.Controller('bmi-calculator'),
    __metadata("design:paramtypes", [bmi_calculator_service_1.BmiCalculatorService])
], BmiCalculatorController);
exports.BmiCalculatorController = BmiCalculatorController;
//# sourceMappingURL=bmi-calculator.controller.js.map