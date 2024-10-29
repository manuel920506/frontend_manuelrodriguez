import { environment } from "../../environments/environment"; 
export const PATHS = {
    LearningExperiences: `${environment.apiURL}/LearningExperience/GetAllLearningExperiences`,
    Skills: `${environment.apiURL}/Skill/GetAllSkills`,
    CommonDataByCode: `${environment.apiURL}/CommonData/GetCommonDataByCode`,
    CommonDataByDescriptionLikeMode: `${environment.apiURL}/CommonData/GetCommonDataByDescriptionLikeMode`
} as const;