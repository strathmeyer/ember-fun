var App = Em.Application.create();

App.Person = Em.Object.extend({
    name: 'John Doe',
    children: Em.ArrayProxy.create({
        content: []
    })
});

App.rootPerson = App.Person.create({name: 'A'});

App.rootPerson.get('children').pushObject(
    App.Person.create({name: 'B'})
);

App.PersonView = Em.View.extend({
    templateName: 'person',
    addChild: function() {
        var children = this.getPath('content.children');

        children.pushObject(App.Person.create({
            name: prompt('Name:')
        }));

        console.log(this, children);
    }
});
