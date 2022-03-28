<template>
  <div class="about">
    <h1>Home page</h1>
    <SubjectCard
      v-for="subject in subjects"
      :key="subject.id"
      :subject="subject"
    >
    </SubjectCard>
  </div>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";

export default {
  name: "Login",
  components: {
    SubjectCard,
  },
  data() {
    return {
      subjects: [
        {
          id: 1,
          title: "Fullstack",
          code: "IDATT2105",
          queueAmount: 2,
          eta: "Estimert ventetid, kjempelenge",
          message:
            "Dette er et fag! Du kan foreløpig ikke stille deg i kø, men dette\n" +
            "              kommer snart.",
        },
        {
          id: 2,
          title: "Nettverksprog",
          code: "IDATT2104",
          queueAmount: 2,
          eta: "Estimert ventetid, kjempelenge",
          message:
            "Dette er et fag! Du kan foreløpig ikke stille deg i kø, men dette\n" +
            "              kommer snart.",
        },
      ],
    };
  },
};
</script>
