<template>
  <div class="overlay" @click.self="close">
    <div class="popup">
      <button class="close" @click="close">&times;</button>
      <h3>{{ guarantee.title }}</h3>
      <p>{{ guarantee.description }}</p>
      <h4>Additional Information</h4>
      <ul>
        <li v-for="(info, index) in guarantee.extraDetails" :key="index">
          {{ info }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuaranteeDetails",
  props: {
    guarantee: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.popup h4 {
  margin-top: 20px;
  font-size: 1.2em;
  color: #2e438a;
}

.popup ul {
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
