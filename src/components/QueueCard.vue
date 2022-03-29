<template>
  <div class="complaint-card">
    <span>@{{ complaint.name }} on {{ complaint.email }}</span>
    <h4>{{ complaint.message }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    complaint: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.complaint-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid lightgreen;
  margin-bottom: 18px;
}
.complaint-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>