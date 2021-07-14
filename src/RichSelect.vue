<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
    :data-focused="focused || null"
  >
    <t-rich-select
      :options="context.options"
      :multiple="context.attributes.multiple"
      :hide-search-box="context.slotProps.component.hideSearchBox"
      :close-on-select="context.attributes.multiple ? false : true"
      v-model="context.model"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    </t-rich-select>

    Local value: {{context.model}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  compatConfig: {
    MODE: 3,
  },

  name: "RichSelect",

  props: {
    context: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const focused = ref(false);

    // Create handlers
    const handleFocus = () => {
      console.log("RichSelect: focus");
      focused.value = true;
    };
    const handleBlur = () => {
      console.log("RichSelect: blur");
      focused.value = false;
      props.context.blurHandler();
    };
    const handleChange = (value) => {
      console.log("RichSelect: change", value);
      emit("change", value);
    };

    return { focused, handleFocus, handleBlur, handleChange };
  },
});
</script>
