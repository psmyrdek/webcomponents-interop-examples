<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <smart-greetings recipient="John Doe"></smart-greetings>
    <div v-on:plus-clicked="showOptions()">
      <smart-avatar url="https://image.ibb.co/kFAbfK/1500295159151.jpg"></smart-avatar>
      <div class="card-options" v-if="optionsVisible"> 
        <button>Call Elon Musk</button>
        <button>Share Elon Musk's profile</button>
        <button class="close" v-on:click="hideOptions()">X</button>
      </div>
    </div>
    <div>
      <smart-clock></smart-clock>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    optionsVisible: false
  }),
  methods: {
    showOptions: function() {
      this.optionsVisible = true;
    },
    hideOptions: function() {
      this.optionsVisible = false;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-options button {
  margin: 0 5px;
  width: 150px;
}
</style>
