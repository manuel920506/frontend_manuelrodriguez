import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiPathsService {
  constructor(private configService: ConfigService) {}

  getPaths() {
    var apiURL = '';
    if(this.configService.get('developmentMode')){
      apiURL = this.configService.get('development').apiURL;
    } else{
      apiURL = this.configService.get('production').apiURL;
    }
    return {
      LearningExperiences: `${apiURL}/LearningExperience/GetAllLearningExperiences`,
      Skills: `${apiURL}/Skill/GetAllSkills`,
      Educations: `${apiURL}/Education/GetAllEducations`,
      CommonDataByCode: `${apiURL}/CommonData/GetCommonDataByCode`,
      CommonDataByDescriptionLikeMode: `${apiURL}/CommonData/GetCommonDataByDescriptionLikeMode`
    };
  }
}
