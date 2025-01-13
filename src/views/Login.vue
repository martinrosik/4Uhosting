<template>
  <div class="sign-in-page">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="card shadow">
            <div class="card-header text-center bg-custom text-white">
              <h3>Sign In</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" id="remember" class="form-check-input" v-model="remember" />
                  <label for="remember" class="form-check-label">Remember me</label>
                </div>
                <button type="submit" class="btn btn-custom w-100">Sign In</button>
              </form>
            </div>
            <div class="card-footer text-center">
              <p class="mb-0">
                Don't have an account? <router-link to="/register" class="btn btn-custom text-white">Sign Up</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted:", {
        email: this.email,
        password: this.password,
        remember: this.remember,
      });
      // Add your form submission logic here
    },
  },
};
</script>

<style scoped>
.sign-in-page {
  min-height: 100vh;
}
.card {
  border-radius: 10px;
  overflow: hidden;
}
.card-header {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #2E438A !important; /* Custom color */
}
.btn-custom {
  background-color: #2E438A !important; /* Custom color */
  border: none;
  color: white;
}
.btn-custom:hover {
  background-color: #233366 !important; /* Darker shade for hover */
}
.card-body {
  padding: 2rem;
}
.card-footer {
}
</style>
