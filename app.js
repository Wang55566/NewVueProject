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
      ],
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
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
    },
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.box.transform};`
      await navigator.clipboard.writeText(text)
      alert('CSS property copied.')
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    circle_classes() {
      return {purple: this.isPurple};
    },
    box() {
      return {
        transform: `perspective(${this.perspective}px)
                   rotateX(${this.rotateX}deg)
                   rotateY(${this.rotateY}deg)
                   rotateZ(${this.rotateZ}deg)
                  `
      }
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
