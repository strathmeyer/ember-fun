var App = Em.Application.create();

App.MyView = Em.View.extend({
    mouseDown: function() {
        //window.alert("hello world!");
    }
});

App.TextField = Em.TextField.extend({
    insertNewline: function () {
        window.alert("asdf");
    }
});

App.foo = Em.Object.create({
});