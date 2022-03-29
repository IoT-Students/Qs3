<template>
  <div class="queuePosition">
    <BaseRadioGroup
        v-model="comp"
        name="type"
        :options="compOptions"
    />
    <component :is="comp"> </component>
  </div>
</template>

<script>
import QueuePosition from "@/components/QueuePosition";
import QueueList from "@/components/QueueList";

export default {
  name: "Queue",
  components: {
    QueuePosition,
    QueueList
  },
  data() {
    return {
      comp: "QueuePosition",

      compOptions: [
        { label: "Position", value: "QueuePosition" },
        { label: "Queue", value: "QueueList" },
      ],
    }
  },
};
</script>