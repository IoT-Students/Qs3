<template>
  <div class="queues">
    <QueueCard
        v-for="person in queues"
        :key="person.id"
        :person="person"
    />
  </div>
</template>

<script>
import QueueCard from "@/components/QueueCard";
export default {
  name: "QueueList",
  components: {
    QueueCard
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
    ],
    };
  },
}
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>