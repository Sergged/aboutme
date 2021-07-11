export interface SkillDomain {
  domainTitle: string;
  skillList: Array<{
    skillName: string;
    techs: Array<{
      techName: string;
      comment?: string;
    }>;
  }>;
}
