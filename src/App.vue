<template>
  <div class="service-panel">
    <button>Download PDF</button>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
@import "src/styles/helpers";

.service-panel {
  display: flex;
  justify-content: flex-end;
  background-color: darken($SECONDARY_COLOR, 20);
  padding: 1% 3%;

  button {
    background-color: $PRIMARY_COLOR;
    color: $SECONDARY_COLOR;
    border: none;
    border-left: solid $ACCENT_COLOR 5px;
    padding: 1% 3%;
    transition: all 1s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.1);
    }
  }
}
</style>
