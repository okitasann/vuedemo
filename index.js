Vue.component('goods-list', {
  props: ['grocery'],
  template: '<li>{{ grocery.text  }}</li>'
})

var componentListDemo = new Vue({
  el: '#app-7',
  data: {
    groceryList: [{
        id: 0,
        text: '蔬菜'
      },
      {
        id: 1,
        text: '奶酪'
      },
      {
        id: 2,
        text: '随便其它什么人吃的东西'
      }
    ]
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!');
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
        console.log(JSON.stringify(event));
      }
    }
  }
})


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})

var exampleCheckbox = new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})


var exampleRadio = new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})


var exampleSelected = new Vue({
  el: '#example-5',
  data: {
    selected: ''
  }
})

var exampleMultiSelected = new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})

var example = new Vue({
  el: '#example-7',
  data: {
    selected: 'A',
    options: [{
        text: 'One',
        value: 'A'
      },
      {
        text: 'Two',
        value: 'B'
      },
      {
        text: 'Three',
        value: 'C'
      }
    ]
  }
})

var exampleInput = new Vue({
  el: '#exmaple-input',
  data: {
    message: ''
  }
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var exampleInput = new Vue({
  el: '#componenDemo',
  // data: {
  //   message: ''
  // }
})

Vue.component('blog-post', {
  props: ['blog'],
  template: `
  <div class="blog-post" v-on:enlarge-text="postFontSize += $event">
      <h3>{{ blog.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
      <div v-html="blog.content"></div>
  </div>`
});

var exampleInput = new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [{
        id: 1,
        title: 'My journey with Vue',
        content: '1'
      },
      {
        id: 2,
        title: 'Blogging with Vue',
        content: '2'
      },
      {
        id: 3,
        title: 'Why Vue is so fun',
        content: '3'
      }
    ]
  }
})

var listenChildComponent = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [ /* ... */ ],
    postFontSize: 1
  }
})

/**
 * anonymous slot
 **/
// Vue.component('navigation-link', {
//   template: `<navigation-child>
//   </navigation-child>`
// })

// Vue.component('navigation-child', {
//   template: `<template>
//   <div class="frame">
//   <slot>default</slot>
//   <p>childtext</p>
//   </div>
//   </template>`
// })


// var slotComponent = new Vue({
//   el: '#slot-demo',
//   data: {}
// })

/**
 * unanonymous slot
 **/
// Vue.component('homepage-parent', {
//   template: `<homepage-child>
//   <template  v-slot:header>My Image’s Title</template>
//   <template  v-slot:default>My Image’s Title</template>
//   </homepage-child>`
// })

// Vue.component('homepage-child', {
//   template: `<div class="container">
//   <header>
//     <slot name="header"></slot>
//   </header>
//   <main>
//     <slot></slot>
//   </main>
//   <footer>
//     <slot name="footer"></slot>
//   </footer>
// </div>`
// })

// var slotComponent = new Vue({
//   el: '#noble-slot-demo',
//   data: {}
// })

// Vue.component('scope-slot', {
//   template: `<div id='scope-slot-child-demo'>
//     <span>
//     <slot v-bind:user="user">
//     {{ user.lastName }}
//     </slot>
//     </span>
//     </div>`
// });

// Vue.component('scope-parent-slot', {
//   template: `<template>
//     <current-user>
//       <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>    
//     </current-user>
//     </template>`
// });

// var vue = new Vue({
//   el: '#scope-slot-child-demo',
//   data: {
//     user: {
//       lastName: 'ricardo',
//       firstName: 'li'
//     }
//   }
// });

// var Vue = new Vue({
//   el: '#scope-slot-demo',
//   data: {
//     user: {
//       lastName: 'ricardo',
//       firstName: 'li'
//     }
//   }
// });

// Vue.component('my-component', {
//   props: {
//     // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
//     propA: Number,
//     // 多个可能的类型
//     propB: [String, Number],
//     // 必填的字符串
//     propC: {
//       type: String,
//       required: true
//     },
//     // 带有默认值的数字
//     propD: {
//       type: Number,
//       default: 100
//     },
//     // 带有默认值的对象
//     propE: {
//       type: Object,
//       // 对象或数组默认值必须从一个工厂函数获取
//       default: function () {
//         return {
//           message: 'hello'
//         }
//       }
//     },
//     // 自定义验证函数
//     propF: {
//       validator: function (value) {
//         // 这个值必须匹配下列字符串中的一个
//         return ['success', 'warning', 'danger'].indexOf(value) !== -1
//       }
//     }
//   },
//   template: `
//   <div>
//     <p>{{ propA }}</p>
//     <p>{{ propB }}</p>
//     <p>{{ propC }}</p>
//     <p>{{ propD }}</p>
//     <p>{{ propE }}</p>
//     <p>{{ propF }}</p>
//   </div>`
// })

// var validatorComponent = new Vue({
//   el: '#validator-demo',
//   data: {
//     propA: null,
//     propB: 'String',
//     propC: 'String123142',
//     propD: 1000,
//     propE: {},
//     propF: 'success'
//     // 必填的字符串
//     // propC: {
//     //   type: 'String',
//     //   required: true
//     // },
//     // 带有默认值的数字
//     // propD: {
//     //   type: 1,
//     // },
//     // 带有默认值的对象
//   }
// })