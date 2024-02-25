const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Bob",
      url: "https://google.com",
      age: 20
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updatLastName(meg,e) {

      e.preventDefault()
      this.lastName = e.target.value
      
      console.log(msg)
    }
  }
}).mount('#app')


// Proxy
// setTimeout(() => {
//   vm.firstName = 'Lucy'
// }, 2000)
