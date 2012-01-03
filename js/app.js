var App = Em.Application.create();

App.Person = Em.Object.extend({
    name: 'John Doe'
});

App.newPerson = function(name) {
    return App.Person.create({
        name: name,
        children: []
    });  
};

App.rootPerson = App.Person.create({
    name: 'A',
    children: [
        App.Person.create({
            name: 'B',
            children: [App.newPerson()]})
    ]
});

App.PersonView = Em.View.extend({
    templateName: 'person',
    addChild: function() {
        var children = this.getPath('content.children'),
            name = prompt('Name:');

        children.pushObject(App.newPerson(name));

        console.log(this, children);
    }
});
