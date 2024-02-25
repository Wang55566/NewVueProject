const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Bob",
      url: "https://google.com"
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}).mount('#app')


// Proxy
// setTimeout(() => {
//   vm.firstName = 'Lucy'
// }, 2000)
