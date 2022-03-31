<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
  />
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import BaseErrorMessage from "@/components/BaseErrorMessage";
export default {
  name: "BaseInput.vue",
  components: {
    BaseErrorMessage,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
label,
input,
button {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  color: white;
  line-height: 1.5;
  margin: 0;
  border-radius: 4px;
  background-color: #333232;
}
</style>
