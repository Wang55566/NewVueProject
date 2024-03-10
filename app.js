const vm = Vue.createApp({
  data() {
    return {
      message:'Hello',
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
      ],
    }
  },
  methods: {
    increment() {
      this.age++;
    },
    updatLastName(msg,e) {

      this.lastName = e.target.value

      console.log(msg)
    },
    updateMiddleName(e) {
      this.middleName = e.target.value
    },
    updateUrl(e) {
      this.url = e.target.value
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    circle_classes() {
      return {purple: this.isPurple};
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 10
      }, 3000)
    }
  },
  beforeCreate() {
    console.log('beforeCreate Function called!', this.message)
  },
  created() {
    console.log('Create Function called!', this.message)
  },
  beforeMount() {
    console.log('beforeMount Function called!', this.$el)
  },
  mounted() {
    console.log('mounted Function called!', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate Function called!')
  },
  updated() {
    console.log('updated Function called!')
  },
  beforeUnmout() {
    console.log('beforeUmount Function called!')
  },
  unmounted() {
    console.log('unmounted Function called!!')
  }
})

vm.mount('#app')


// Proxy
// setTimeout(() => {
//   vm.firstName = 'Lucy'
// }, 2000)
