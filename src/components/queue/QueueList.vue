<template>
  <div class="queues">
    <QueueCard
      v-for="person in queues"
      :key="person.id"
      :person="person"
      @click="goToDetails(person.id)"
    />
  </div>
</template>

<script>
import QueueCard from "@/components/queue/QueueCard";
export default {
  name: "QueueList",
  components: {
    QueueCard,
  },
  data() {
    return {
      queues: [
        {
          id: 1,
          name: "Marius Klemp Petersen",
          position: 2,
          message: "Du er i kø",
        },
        {
          id: 2,
          name: "Magnus Farstad",
          position: 3,
          message: "Du er i kø",
        },
      ],
    };
  },
  methods: {
    goToDetails(personId) {
      console.log("Bygning er: " + this.$store.state.subjectQueue.bygning);
      this.$router.push({ name: "QueueCardDetails", params: { personId } });
    },
  },
};
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
