<template>
  <div>
    <Banner />
    <DomainSearch />
    <Guarantee />
    <Plans />
    <AboutContent />
    <ContactForm />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import DomainSearch from "@/components/DomainSearch.vue";
import Guarantee from "@/components/Guarantee.vue";
import Plans from "@/components/Plans.vue";
import AboutContent from "@/components/AboutContent.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Home",
  components: {
    Banner,
    DomainSearch,
    Guarantee,
    Plans,
    AboutContent,
    ContactForm,
  },
};
</script>
