//TODO: решить ошибку с отображением постов

<template>
  <div id="app">
    <div class="field has-addons">
        <div class="control is-expanded">
          <input type="text" class="input" placeholder="Go to the Mars..." v-model="description" />
        </div>
        <div class="control">
          <a class="button is-info" @click="addItem" :disabled="!description">Add</a>
        </div>
    </div>
    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <p>
        <span class="tag is-primary">{{ i + 1 }}</span>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return{
      items: [],
      description: ""
    };
  },
  async mouted() {
    const response = await axios.get('api/bucketListItems/');
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const response = await axios.post('api/bucketListItems/', { 
        description: this.description 
      });
      this.items.push(response.data);
      this.description = "";
    }
  }
};
</script>

<style>
  #app {
    margin: auto;
    margin-top: 4rem;
    max-width: 700px;
  }
</style>