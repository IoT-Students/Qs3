<template>
  <div class="homeViewContainer">
    <div class="headerButtonsContainer">
      <div class="headerButtons">
        <router-link :to="{ name: 'AddSubject' }">AddSubject</router-link>
      </div>
    </div>
    <SubjectCard
      v-for="subject in subjects"
      :key="subject.id"
      :subject="subject"
      :studass="false"
      @click="goToQueue"
    >
    </SubjectCard>
    <router-view></router-view>
  </div>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";

export default {
  name: "HeaderLayout",
  components: {
    SubjectCard,
  },
  created() {
    this.$store.dispatch("getSubjects");
  },
  computed: {
    subjects() {
      return this.$store.state.subjects;
    },
  },
  methods: {
    goToQueue() {
      this.$router.push({ name: "SubjectQueueForm" });
    },
  },
};
</script>

<style scoped>
.headerButtonsContainer {
  display: block;
  margin: 2rem auto 2rem auto;
  padding: 0 1rem 0 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  width: 90%;
  max-width: 800px;
}

.headerButtons {
  display: flex;
  justify-content: center;
}

.headerButtons a {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: #1c658c;
  border-radius: 5px;
}
.headerButtons a.router-link-exact-active {
  color: white;
  background: #1c658c;
}

.headerButtons a:hover {
  color: white;
  background: #1c658c;
}
</style>
