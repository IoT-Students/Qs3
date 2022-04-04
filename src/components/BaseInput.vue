<template>
  <label id="inputLabel" :for="uuid" v-if="label">{{ label }}</label>
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
import SetupFormComponent from "@/features/SetupFormComponent";
import UniqueID from "@/features/UniqueID";
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
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
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
  color: black;
  line-height: 1.5;
  margin: 0;
  border-radius: 7px;
  background-color: rgba(23, 28, 37, 0.4);
}
.field {
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.11);
  width: 173px;
}
</style>
