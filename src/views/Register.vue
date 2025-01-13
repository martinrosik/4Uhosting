<template>
  <div class="sign-up-page">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="card shadow">
            <div class="card-header text-center bg-custom text-white">
              <h3>Sign Up</h3>
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
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    class="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-custom w-100">Sign Up</button>
              </form>
            </div>
            <div class="card-footer text-center">
              <p class="mb-0">
                Already have an account? <router-link to="/login" class="btn btn-custom text-white">Sign In</router-link>
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
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Sign-up form submitted:", {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
      // Add your form submission logic here
    },
  },
};
</script>

<style scoped>
.sign-up-page {
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
