const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Bob",
      middleName: "",
      url: "https://google.com",
      age: 20,
      isPurple: false,
      selectedColor:"",
      size: 150,
      mode: 1,
      people: [
        { name: 'name1', age: 10},
        { name: 'name2', age: 20},
        { name: 'name3', age: 30},
      ]
    }
  },
  methods: {
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
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    circle_classes() {
      return {purple: this.isPurple};
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 10
      }, 3000)
    }
  }
}).mount('#app')


// Proxy
// setTimeout(() => {
//   vm.firstName = 'Lucy'
// }, 2000)
