Tictactoe.PlayersRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('players', {   // the template to render
            into: 'application',                // the template to render into
            outlet: 'players'               // the name of the outlet in that template
        });
    },
    model: function () {
        return this.store.find('player');
    }
});
