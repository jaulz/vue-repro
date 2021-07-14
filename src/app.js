import { createApp, defineComponent, h, resolveComponent } from "vue";
import App from "./App.vue";
import VueTailwind from "vue-tailwind";
import VuePortal from "portal-vue";
import { TRichSelect } from "vue-tailwind/dist/components";
import VueFormulate from "@braid/vue-formulate";
import RichSelect from "./RichSelect.vue";
import Content from "./Content.vue";

// Create app
const app = createApp(
  defineComponent({
    render() {
      // Apply all compatibility configurations
      for (const name of ["portal", "portal-target"]) {
        const component = resolveComponent(name);
        Object.assign(component, {
          compatConfig: {
            MODE: 3,
          },
        });
      }

      // Render app
      return h(App);
    },
  })
);

// Load Portal
app.use(VuePortal);

// Load local components
app.component("Content", Content);
app.component("RichSelect", RichSelect);

// Load Tailwind
app.use(VueTailwind, {
  "t-rich-select": {
    component: TRichSelect,
    props: {},
  },
});

// Load Formulate
app.use(VueFormulate, {
  library: {
    "rich-select": {
      classification: "custom",
      component: "rich-select",
      slotProps: {
        component: ["formulate-value", "options", "hideSearchBox"],
      },
    },
  },
});

// Mount app
app.mount("#app");
