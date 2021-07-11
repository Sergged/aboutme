<template>
  <section>
    <h2 class="domain-title">{{ skills.domainTitle }}</h2>

    <ul class="skill-list">
      <li v-for="skill of skills.skillList" :key="skill.skillName" class="skill">
        <section>
          <div class="fill-list-marker">
            <h3 class="skill-name">{{ skill.skillName }}</h3>
          </div>
          <ul class="techs">
            <li v-for="tech of skill.techs" :key="tech.techName" class="tech">
              <div class="outlined-list-marker">
                <div>{{ tech.techName }}</div>
              </div>
              <p v-if="tech.comment" class="comment">{{ tech.comment }}</p>
            </li>
          </ul>
        </section>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { SkillDomain } from "../helpers/skill-block.model";

@Options({})
export default class SkillBlock extends Vue {
  @Prop() skills!: SkillDomain;
}
</script>

<style lang="scss" scoped>
@import "src/styles/helpers";

.domain-title {
  background-color: $PRIMARY_COLOR;
  border-left: solid $ACCENT_COLOR 5px;
  color: $SECONDARY_COLOR;
  padding: 0 1%;
  margin: 0;
  margin-bottom: 15px;
}

.skill-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.skill {
  .skill-name {
    margin: 0;
    color: $BODY_FONT_COLOR;
  }
}

.techs {
  list-style: none;

  .tech {
    margin-bottom: 10px;
    .comment {
      color: $THIRD_COLOR;
      margin: 0;
      margin-left: 10px + 10px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.fill-list-marker {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.fill-list-marker::before {
  display: block;
  content: "";
  background-color: $ACCENT_COLOR;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 10px;
  flex-shrink: 0;
}

.outlined-list-marker {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.outlined-list-marker::before {
  display: block;
  content: "";
  border: 1px solid $ACCENT_COLOR;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 10px;
  flex-shrink: 0;
}
</style>
