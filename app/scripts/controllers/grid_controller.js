
Tictactoe.GridController = Ember.ArrayController.extend({
    /**
     * Clear and reset all cells
     */
    cleanCells: function(){
        this.forEach(function (rows) {
            rows.forEach(function(cell){
                Ember.set(cell, 'class', '');
                Ember.set(cell, 'empty', true);
            })
        });
    }

});
