<script setup lang="ts"></script>
<template>
  <div class="loading_wrapper">
    <div class="text_box"><span>loading</span></div>
    <div class="load_box">
      <div class="box_circle"></div>
      <div class="box_circle"></div>
      <div class="box_circle"></div>
      <div class="box_circle"></div>
      <div class="load_in_box">
        <div class="in_box_circle"></div>
        <div class="in_box_circle"></div>
        <div class="in_box_circle"></div>
        <div class="in_box_circle"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loading_wrapper {
  position: relative;
  margin: 1rem;
  width: 22px;
  aspect-ratio: 1;
}

.load_box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  aspect-ratio: 1;
  /* border: 1px solid black; */
  animation: anim-loading 3s linear infinite forwards;
}

.load_in_box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 110%;
  height: 110%;
  /*  background-color: #ffacac; */
}

.box_circle,
.in_box_circle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-image: linear-gradient(
    to top,
    #6bd16d,
    #6ad681,
    #6cda93,
    #70dea4,
    #78e2b4,
    #7ae6b5,
    #7deab6,
    #7feeb7,
    #82f3a6,
    #8bf792,
    #9af97a,
    #adfb5f
  );
}

.in_box_circle {
  width: 5px;
  height: 5px;
}

.box_circle:nth-of-type(1),
.in_box_circle:nth-of-type(1) {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.box_circle:nth-of-type(2),
.in_box_circle:nth-of-type(2) {
  top: 100%;
  left: 0;
  transform: translate(-50%, -50%);
}

.box_circle:nth-of-type(3),
.in_box_circle:nth-of-type(3) {
  top: 100%;
  left: 100%;
  transform: translate(-50%, -50%);
}

.box_circle:nth-of-type(4),
.in_box_circle:nth-of-type(4) {
  top: 0;
  left: 100%;
  transform: translate(-50%, -50%);
}

.text_box {
  position: absolute;
  top: 100%;
  left: 100%;
  font-size: calc(6px + 0.1vw);
  transform: translate(-50%, -50%);
  animation: anim-text 2.6s cubic-bezier(0.25, 0.1, 0.25, 1.4) infinite backwards;
}

@keyframes anim-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes anim-text {
  0% {
    transform: translate(-50%, -50%) scale(1);
    font-weight: bold;
    color: #172783;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.6);
    font-weight: bold;
    color: #b4b1b1;
  }
}
</style>
