<template>
  <div class="student-card" v-bind:class="{ active: isActive }">
    <section class="card-grid">
      <p class="queue-number">Nr. {{ user.position }}</p>
      <div class="student-name">{{ user.name }}</div>
      <div class="type" v-if="user.type === 1">Type: Hjelp</div>
      <div class="type" v-else>Type: Godkjenning</div>
      <div class="info">Øving: {{ user.assignment }}</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userRole: this.$store.state.userInfo.role,
      isActive: this.user.status,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    computed: {
      isStudent() {
        return this.$store.state.userInfo.role;
      },
      isActive() {
        this.isActive = this.user.status;
      },
    },
  },
};
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #1c658c;
  margin-bottom: 18px;
  border-radius: 5px;
}
.active {
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-grid {
  display: grid;
  grid-template-columns: 15% 30% 25% 30%;
}
.student-name {
  text-align: left;
  font-weight: bold;
  font-size: larger;
}
.queue-number {
  margin: 0;
  text-align: left;
  padding: 2px;
}
</style>
