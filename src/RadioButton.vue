<template>
  <div>
    {{ option }} (<template v-if="mode === 2">value={{ value }},</template>
    <template v-if="mode === 3">modelValue={{ modelValue }},</template>
    intermediateValue={{ intermediateValue }}):
    <input
      v-if="mode === 2"
      type="radio"
      v-model="intermediateValue"
      :value="option"
    />
    <input
      v-if="mode === 3"
      type="radio"
      v-model="intermediateValue"
      :value="option"
    />
    (mode={{ mode }})
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

const mode = 2;

export default defineComponent({
  compatConfig: {
    MODE: mode,
  },

  name: "RadioButton",

  props: {
    option: {
      type: String,
    },
    // This one is used with MODE=2
    [mode === 2 ? "value" : "__value"]: {
      type: String,
    },
    // This one is used with MODE=3
    [mode === 3 ? "modelValue" : "__modelValue"]: {
      type: String,
    },
  },

  emits: mode === 2 ? ["input"] : ["update:modelValue"],

  setup(props, { attrs, emit }) {
    console.log(props, attrs);
    const intermediateValue = ref(props.value || props.modelValue);

    watch(
      () => props.value || props.modelValue,
      () => {
        intermediateValue.value = props.value || props.modelValue;
      }
    );
    watch(
      () => intermediateValue.value,
      (nextValue) => {
        emit(mode === 2 ? "input" : "update:modelValue", nextValue);
      }
    );

    return {
      mode,
      intermediateValue,
    };
  },
});
</script>
