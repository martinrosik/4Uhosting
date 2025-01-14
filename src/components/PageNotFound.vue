<template>
  <div class="notfound-wrapper">
    <div class="container not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/">
        <button class="return">Go back to Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.notfound-wrapper{
  padding-top: 140px;
  height: 500px;
}

.not-found {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.return {
  background-color: #2e428b;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.return:hover {
  background-color: #43eee4;
  color: #000;
}
</style>
