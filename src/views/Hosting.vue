<template>
  <div>
    <Plans />
    <Guarantee />
  </div>
</template>

<script>
import Plans from "@/components/Plans.vue";
import Guarantee from "@/components/Guarantee.vue";

export default {
  name: "Hosting",
  components: {
    Plans,
    Guarantee,
  },
};
</script>
