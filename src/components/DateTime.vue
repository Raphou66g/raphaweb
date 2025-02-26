<template>
  <div>{{ currentDateTime }}</div>
</template>

<script>
export default {
  data() {
    return {
      currentDateTime: new Date().toLocaleString()
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      this.currentDateTime = new Date().toLocaleString();
    }
  }
};
</script>

<style scoped>
div {
  font-weight: bold;
  color: black;
}
</style>