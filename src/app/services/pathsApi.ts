import { environment } from "../../environments/environment"; 
export const PATHS = {
    LearningExperiences: `${environment.apiURL}/LearningExperience/GetAllLearningExperiences`,
    Skills: `${environment.apiURL}/Skill/GetAllSkills`
} as const;