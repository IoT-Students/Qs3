<template>
  <SubjectCard v-for="subject in subjects" :key="subject.id" :subject="subject" :studass="true"></SubjectCard>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";
export default {
  name: "StudAssView",
  components: {
    SubjectCard,
  },
  data() {
    return {
      subjects: [
        {
          id: 3,
          title: "Fullstack",
          code: "IDATT2105",
          queueAmount: 2,
          eta: "",
          message: "Du kan foreløpig ikke godkjenne noen i dette faget",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
