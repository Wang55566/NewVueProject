const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Bob",
      middleName: "",
      url: "https://google.com",
      age: 20
    }
  },
  methods: { 
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updatLastName(meg,e) {

      this.lastName = e.target.value

      console.log(msg)
    },
    updateMiddleName(e) {
      this.middleName = e.target.value
    }
  }
}).mount('#app')


// Proxy
// setTimeout(() => {
//   vm.firstName = 'Lucy'
// }, 2000)
