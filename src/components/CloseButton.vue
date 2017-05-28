<template>
  <button class="closeButton" @click="$emit('click')"></button>
</template>


<style scoped>
  .closeButton {
    border: none;
    background-color: transparent;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
  }

  .closeButton::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
    transform: rotate(45deg);
  };

  .closeButton::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
    transform: rotate(-45deg);
  };
</style>
