<template>
  <div class="order">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="titlepage text_align_center">
            <h2>Check Out Awesome Plans, <br /><span class="blue_light">Order Now</span></h2>
            <p>Choose the perfect plan for your needs. Flexible and affordable options.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="col-md-4"
        >
          <div id="ho_co" class="order-box_main">
            <div class="order-box text_align_center">
              <h3>{{ plan.name }}</h3>
              <p>STARTING <span>{{ plan.price }}</span> PER MONTH</p>
              <ul class="supp">
                <li v-for="(feature, i) in plan.features" :key="i">
                  {{ feature }}
                </li>
              </ul>
            </div>
            <a class="read_more" href="javascript:void(0)" @click="openPopup(plan)">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
    <PlansPurchase v-if="selectedPlan" :isVisible="showPopup" :plan="selectedPlan" @close="closePopup" />
  </div>
</template>

<script>
import PlansPurchase from "@/components/PlanPurchase.vue";

export default {
  name: "Plans",
  components: {
    PlansPurchase,
  },
  data: function () {
    return {
      plans: [
        {
          name: "Shared Hosting",
          price: "$9",
          features: [
            "Unlimited projects",
            "24/7 support",
            "Personal use",
            "High-speed servers",
          ],
        },
        {
          name: "Reseller Hosting",
          price: "$15",
          features: [
            "Unlimited projects",
            "24/7 support",
            "Reseller control",
            "Custom branding",
          ],
        },
        {
          name: "Dedicated Servers",
          price: "$99",
          features: [
            "Full root access",
            "24/7 support",
            "High-performance hardware",
            "Scalable solutions",
          ],
        },
      ],
      showPopup: false,
      selectedPlan: null,
    };
  },
  methods: {
    openPopup: function (plan) {
      this.selectedPlan = plan;
      this.showPopup = true;
    },
    closePopup: function () {
      this.showPopup = false;
      this.selectedPlan = null;
    },
  },
};
</script>

<style>
.order {
  padding-top: 140px;
}

.read_more {
  padding: 0;
}
</style>
