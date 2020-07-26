console.log('HIHI!');

var time = new Vue({
    el: '#time',
    data: {
        h: '00',
        m: '00',
        s: '00',
    },
    methods: {
        setClock : function() {
            var date = new Date();
            this.h = date.getHours();
            this.m = date.getMinutes();
            this.s = date.getSeconds();
        }
    },
    mounted() {
        setInterval(this.setClock, 1000);
    },
});