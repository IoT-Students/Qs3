<template>
  <SubjectCard
      v-for="subject in subjects"
      :key="subject.id"
      :subject="subject"
      :studass="false"
      @click="goToQueue"
  >
  </SubjectCard>
</template>

<script>
export default {
  name: "AdminSubjectView",
  props: {
    subjects: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>