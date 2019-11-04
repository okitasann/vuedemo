Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
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
  <div class="blog-post">
      <h3>{{ blog.title }}</h3>
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