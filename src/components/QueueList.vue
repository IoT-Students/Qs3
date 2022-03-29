<template>
  <div class="complaints">
    <QueueCard
        v-for="queue in queues"
        :key="queue.id"
        :complaint="complaint"
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
      queues: {},
    };
  },
}
</script>

<style scoped>

</style>