<template>
  <portal to="modal">
    Choose any option to see error message "el._assign is not a function" in
    console:<br />

    <h3>Formulate Component</h3>
    <formulate-input
      type="radio"
      :options="['Option A', 'Option B', 'Option C', 'Option D']"
      placeholder="Select multiple options"
      v-model="option"
    />

    <br />
    <hr />
    <br />

    <h3>Plain</h3>
    Option B: <input type="radio" v-model="option" value="Option B" /> Option C:
    <input type="radio" v-model="option" value="Option C" />

    <br />
    <br />

    <h3>Custom Component</h3>
   <radio-button v-model="option" option="Option B" />
    <radio-button v-model="option" option="Option C" />

    <br />
    <br />

    Changing option value does not update "option" attribute:<br />

    <formulate-input
      type="rich-select"
      :options="['Option A', 'Option B', 'Option C', 'Option D']"
      placeholder="Select multiple options"
      v-model="option"
      @change="handleValueChange"
    />

    Option: {{ option }}<br />

    <button class="bg-gray-100 rounded p-2" @click="handleToggleOption">
      Change to Option B
    </button>

    <!--
    <br />
    <br />
    <hr />
    <br />

    Focused: {{ focused }}<br />

    <transition name="fade">
      <formulate-input
        v-if="focused"
        type="rich-select"
        :options="['Option A', 'Option B', 'Option C', 'Option D']"
        placeholder="Select multiple options"
        v-model="option"
        @change="handleValueChange"
      />
    </transition>

    <button
      tabindex="0"
      class="bg-gray-100 rounded p-2"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      Focus
    </button>
    -->
  </portal>
</template>

<script>
import { onMounted, ref } from "vue";
import RadioButton from "./RadioButton.vue";

export default {
  name: "Content",
  components: {
    RadioButton,
  },
  setup() {
    const focused = ref(false);
    const option = ref("Option C");

    onMounted(() => {
      window.addEventListener("blur", () => {
        console.log("App: window blur", focused);
        // focused.value = true;
      });
    });

    return {
      option,
      handleToggleOption: () => {
        console.log("Change to Option B", option);
        option.value = "Option B";
        console.log("Changed to Option B", option);
      },
      handleValueChange: (value) => {
        console.log("App: change", value);
        console.log(value);
      },
      focused,
      handleFocus: () => {
        console.log("App: button focus", focused);
        focused.value = true;
      },
      handleBlur: () => {
        console.log("App: button blur", focused);
        focused.value = false;
      },
    };
  },
};
</script>

<style scoped>
fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
