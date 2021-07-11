<template>
  <main class="page">
    <header class="header">
      <div class="credentials">
        <div class="photo"></div>
        <h1 class="name">Sergey Zolotarev</h1>
        <div class="job-title">Frontend Developer</div>
      </div>
      <section class="personal-info">
        <h2 class="title">Personal information</h2>
        <div>Tel.: +7 (918) 362 36 10</div>
        <div>E-mail: me.and.work@yandex.com</div>
        <div>City: in process of relocating from Krasnodar, Russia to Minsk, Belarus</div>
      </section>
    </header>
    <section class="description">
      Hi! I am <strong>Sergey Zolotarev</strong>, Frontend Developer from Krasnodar with 3 years developing experience
      in work and side projects. I specialize in developing a high quality, modern and reliable enterprise solutions and
      always focus to find a balance between quality code and speed of development.
    </section>
    <div class="skill-grid">
      <skill-block :skills="frontendSkills" class="frontend-skills"></skill-block>
      <skill-block :skills="anotherHardSkills" class="another-hard-skills"></skill-block>
      <skill-block :skills="softSkills" class="soft-skills"></skill-block>
    </div>
  </main>
</template>

<script lang="ts">
import { SkillDomain } from "../../helpers/skill-block.model";
import SkillBlock from "@/components/skill-block.vue";
import { Options, Vue } from "vue-class-component";

@Options({ components: { SkillBlock } })
export default class Home extends Vue {
  frontendSkills: SkillDomain = {
    domainTitle: "Frontend",
    skillList: [
      {
        skillName: "HTML",
        techs: [
          {
            techName: "Layouting",
            comment: "Header, Footer, Main, Nav, Video, Audio, Article, Section, etc.",
          },
          {
            techName: "APIs",
            comment:
              "Web workers (Dedicated Workers, Shared Workers, Service Workers), Local Storage, Geolocation, Cookies",
          },
        ],
      },
      {
        skillName: "CSS",
        techs: [
          {
            techName: "Development practices",
            comment: "Adaptive & Responsive Design, Mobile First, Cross-browser & cross-platform development",
          },
          {
            techName: "CSS 3",
            comment:
              "Flexbox, Gradients, Grids, Rotations, Transformation, Skewing, Scaling, Transitions, Animations, Bezier curves",
          },
          {
            techName: "SVG",
          },
          {
            techName: "Preprocessors",
            comment: "Sass/SCSS",
          },
          {
            techName: "Methodologies",
            comment: "BEM, OOCSS",
          },
        ],
      },
    ],
  };

  anotherHardSkills: SkillDomain = {
    domainTitle: "Another Hard Skills",
    skillList: [
      {
        skillName: "SVCs",
        techs: [
          { techName: "Git" },
          { techName: "GitHub" },
          { techName: "BitBucket" },
          { techName: "GitLab" },
          { techName: "Azure Repos" },
        ],
      },
      {
        skillName: "Cloud platforms",
        techs: [{ techName: "AWS" }, { techName: "Firebase" }, { techName: "Google Cloud Platform" }],
      },
      {
        skillName: "API",
        techs: [
          { techName: "REST" },
          { techName: "GraphQL" },
          { techName: "Websocket" },
          { techName: "Fiddler" },
          { techName: "Postman" },
        ],
      },
      {
        skillName: "Web design",
        techs: [
          { techName: "Understanding UX" },
          { techName: "Figma" },
          { techName: "Adobe XD" },
          { techName: "InVision Studio" },
          { techName: "Sketch" },
        ],
      },
    ],
  };

  softSkills: SkillDomain = {
    domainTitle: "Soft Skills",
    skillList: [
      {
        skillName: "Languages",
        techs: [
          { techName: "Russian", comment: "Native" },
          { techName: "English", comment: "B2" },
        ],
      },
    ],
  };
}
</script>

<style lang="scss" scoped>
@import "src/styles/helpers";

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5% 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.credentials {
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  .photo {
    height: 150px;
    width: 150px;
    border: solid $ACCENT_COLOR 5px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .name {
    color: $ACCENT_COLOR;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 3%;
  }

  .job-title {
    color: $PRIMARY_COLOR;
    font-size: 1.5rem;
  }
}

.personal-info {
  max-width: 300px;
  padding: 3% 1%;
  border-left: solid $ACCENT_COLOR 5px;
  background-color: $PRIMARY_COLOR;
  color: $SECONDARY_COLOR;

  .title {
    margin: 0;
    margin-bottom: 15px;
  }
}

.description {
  color: $BODY_FONT_COLOR;
}

.skill-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  padding: 5% 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .soft-skills {
    grid-column: 1 / 3;

    @media (max-width: 768px) {
      grid-column: auto;
    }
  }
}
</style>
