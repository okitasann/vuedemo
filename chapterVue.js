// 定义一个名为 footer-vue 的新组件
Vue.component('footer-vue', {
    template: `
                <div id="footer-vue">
                    <p>2018 <a href="#">LZ's Blog</a> - Hosted by <a href="#" style="font-weight: bold">Coding Pages</a></p>
                    <p>
                        <a  href="#">京ICP备00000000号 {{foo}}</a>
                    </p>
                </div>
                `,
    props: ['foo'], //这里根据组件的props属性，来被动接受组件传递来的参数
    data() {
        return {
            message: 'hello world'
        }
    }
});
let vm = new Vue({
    el: '#app', //容器
    data: {
        author: "mutsuli",
        authorHtml: "<strong>老张的哲学</strong>",
        liskUrl: "https://www.cnblogs.com/laozhang-is-phi",
        hrClass: 'hr',
        testClass: 'test',
        task: {
            name: '', //内容为空
            id: 100,
            date: " Just Now ",
            finished: false,
            deleted: false
        },
        list: [
            //假数据
            {
                name: " Vue前篇：ES6初体验 & 模块化编程",
                id: 9585766,
                date: "2018年9月5日",
                finished: false,
                deleted: true
            },
            {
                name: "Vue前篇：JS对象&字面量&this",
                id: 9580807,
                date: "2018年9月4日",
                finished: false,
                deleted: true
            },
            {
                name: " VUE 计划书 & 我的前后端开发简史",
                id: 9577805,
                date: "2018年9月3日",
                finished: false,
                deleted: false
            },
            {
                name: " DTOs 对象映射使用，项目部署Windows+Linux完整版",
                id: 3800,
                date: "2018年9月1日",
                finished: false,
                deleted: false
            },
            {
                name: " 三种跨域方式比较，DTOs(数据传输对象)初探",
                id: 4200,
                date: "2018年8月31日",
                finished: false,
                deleted: false
            },
            {
                name: "VUE 计划书 & 我的前后端开发简史",
                id: 3200,
                date: "2018年9月2日",
                finished: false,
                deleted: false
            },
            {
                name: "VUE 实战预告",
                id: 3200,
                date: "2018年9月12日",
                finished: false,
                deleted: false
            }
        ],
        List2:[
            {
                href:"https://www.cnblogs.com/laozhang-is-phi/",
                name:"博客园"
            },
            {
                href:"/timeline",
                name:"简书"
            },
            {
                href:"/music",
                name:"阿里云栖"
            },
            {
                href:"/rss.xml",
                name:"Git"
            },
            {
                href:"/rss.xml",
                name:"CSDN"
            }
        ],
        list3: [
            //假数据
            {
                name: "Html5"
            },
            {
                name: "CSS3"
            },
            {
                name: "JAVASCTIPT"
            },
            {
                name: "SQL"
            },
            {
                name: "C#"
            },
            {
                name: "Wechat小程序"
            },
            {
                name: "ASP.NET"
            }
        ],
        isShow: false
    },
    components: {
        'my-component': {
            template: `
                    <ul class ="contact-list non-style-list">
            <li>
                <b class ="twitter">TWITTER</b>: <a href="#">@laozhang</a>
            </li>
            <li>
                <b class ="weibo">微博</b>: <a href="#">@laozhang</a>
            </li>
            <li>
                <b class ="zhihu">知乎</b>: <a href="#" ></a>
            </li>
            <li>
                <b class ="github">GITHUB</b>: <a href="https://github.com/anjoy8">anjoy8</a>
            </li>
            <li>
                <b class ="email">EMAIL</b>: <a href="mailto:laozhang@azlinli.com">randypriv at azlinli</a>
            </li>
        </ul>
                    `,
            data() {
                return {
                    message: 'hello world two'
                }
            }
        }
    },
    beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
        console.log("%c%s", "color:red", "author: " + this.author); //undefined
    },
    created: function () {
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "author: " + this.author); //已被初始化
    },
    beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "author: " + this.author); //已被初始化
    },
    mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "author: " + this.author); //已被初始化
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "author: " + this.author);
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "author: " + this.author);
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "author: " + this.author);
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "author: " + this.author)
    },
    watch: {
        author: function (newval, oldVal) {
            console.log(`author 变化辣，从 ${oldVal} 变成了 ${newval} `)
        },
        nameCpt() {
            //这里面可以执行一旦监听的值发生变化你想做的操作
        },
        task: {
            handler: (Value) => {
                console.log(`task被修改了${Value.name}`);
            },
            deep: true //表示监视对象的属性变化，false则handler函数不知晓，但是此时看不到newValue,oldValue,为了观察内部变化，可以设置为true，注意监听数组的变化不需要这么做。
        }
    },
    //我们的方法都统一写到这里
    methods: {
        alert(obj) {
            console.log(obj);
        },
        //添加事件
        addArticle: function () {
            //将文章存入list数组，注意 this指向！
            //将数据反转
            this.list = this.list.reverse();
            this.list.push(this.task);
            this.list = this.list.reverse();
            //存入list[]后，重置task
            this.task = {
                name: '', //内容为空
                id: 100,
                date: " Just Now ",
                finished: false, //未完成
                deleted: false //未删除
            }
        }
    },
    //通过计算属性过滤数据
    computed: {
        listSearch: function () {
            //为什么要存这个this呢，因为filter过滤器会改变this的指向
            let that = this;
            return this.list.filter(function (item) {
                //简单的 判断文章name是否包含 input中的值，因为双向绑定，所以也就是 task.name
                return item.name.indexOf(that.$data.task.name) >= 0;
            });
        },
        nameCpt() {
            return this.task.name
        }
    }
});
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});