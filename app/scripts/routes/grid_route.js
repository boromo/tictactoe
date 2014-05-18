
Tictactoe.GridRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('grid', {   // the template to render
            into: 'application', // the template to render into
            outlet: 'grid'       // the name of the outlet in that template
        });
    },
    setupController: function(controller) {
        var rows = [], indicator = 1;
        for (var i = 0; i < 3; i++) {
            var row = [];
            for (var j = 0; j < 3; j++) {
                var cell = {};
                cell.lc = j === 2 ? true : false;
                cell.lr = i === 2 ? true : false;
                cell.indicator = indicator;
                cell.empty = true;
                cell.class = '';
                row.push(cell);

                indicator += indicator;
            }
            rows.push(row);
        }
        controller.set('model', rows);
    }
});