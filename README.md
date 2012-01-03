This branch is examines recursive model/views.

The branch is currently broken.

Because the {{#if}} is not recalculated when 'children' is updated, if the
person starts with no children, then no children will ever be shown.

I think I'm probably missing a computed property declaration somewhere.

Go back one commit to see the working version.