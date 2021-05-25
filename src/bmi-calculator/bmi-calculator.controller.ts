import { Controller, Post, Body, Get} from '@nestjs/common';
import { BmiCalculatorService } from './bmi-calculator.service'

@Controller('bmi-calculator')
export class BmiCalculatorController {
	
	bmi_object = undefined
	constructor(private bmicalculatorservice: BmiCalculatorService){
	  this.bmi_object = []
	  }
	
	@Post()
	async addBmiData(@Body() body:any){
	  let obese_count = 0
	  if (body instanceof Array){
	    for(let i=0; i<body.length; i++){
	      let height_m = body[i]["HeightCm"]/100 
	      let weight_kg = body[i]["WeightKg"]
	      let bmi = weight_kg/height_m
	      let data = {}
	      data["WeightKg"] = weight_kg
	      data["HeightCm"] = body[i]["HeightCm"]
	      data["Gender"] = body[i]["Gender"] 
	      data["bmi"] = bmi 
	      if(bmi <= 18.4){
		data["BmiCategory"] = "Under weight"
		data["HealthRisk"] = "Malnutrition"
		}
	      else if(18.5 < bmi && bmi < 24.9){
		data["BmiCategory"] = "Normal weight"
		data["HealthRisk"] = "Low Risk"
		}
	      else if(25 < bmi && bmi < 29.9){
		data["BmiCategory"] = "OverWeight"
		data["HealthRisk"] = "Enhanced Risk"
		}
              else if(30 < bmi && bmi < 34.9){
		data["BmiCategory"] = "Moderately obese"
		data["HealthRisk"] = "Medium Risk"
		}	
              else if(35 < bmi && bmi < 39.9){
		data["BmiCategory"] = "Serverly obese"
		data["HealthRisk"] = "High Risk"
		}	
              else if(bmi >= 40){
		data["BmiCategory"] = "Very Serverly obese"
		data["HealthRisk"] = "Very High Risk"
		}
	      console.log(data)
	      //We can use mongo db database to store the bmi info for each 
	      //For this assignment we are simply putting into Array
	      this.bmi_object.push(data)
	      }
	    return this.bmi_object
	  }else{
	    // Bad Reguest 
	    }
	}

	@Get('/overweight')
	async getOverweightCount(){
	    let data = {}
	    data["OverWeight"] = 0
	    data["Moderately obese"] = 0
	    data["Serverly obese"] = 0
	    data["Very Serverly obese"] = 0
	    for(let i=0; i<this.bmi_object.length; i++){
	       let bmi = this.bmi_object[i].bmi
	       if(25 < bmi && bmi < 29.9){
		 data["OverWeight"] = data["OverWeight"] + 1
		}
              else if(30 < bmi && bmi < 34.9){
		data["Moderately obese"] = data["Moderately obese"] + 1
		}	
              else if(35 < bmi && bmi < 39.9){
		data["Serverly obese"] = data["Serverly obese"] + 1
		}	
              else if(bmi >= 40){
		data["Very Serverly obese"] = data["Very Serverly obese"] + 1
		}
	
	      }
	      return data
	  }

  }
