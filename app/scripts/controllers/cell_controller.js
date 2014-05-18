
Tictactoe.CellController = Ember.ObjectController.extend({
    needs: ['application'],
    actions: {
        // mouse click on cell
        set: function () {
            // return if application not initialized or game is over
            if(!this.get('controllers.application').get('initialized') || this.get('controllers.application').get('gameOver')) return;

            // if cell not already set
            if (this.get('empty')) {
                this.set('empty', false);
                // update css class to show selected turn class
                this.set('class', this.getWhoseTurnClass());
                this.get('controllers.application').updateGame(this.get('indicator'));
            }
        },
        // mouse enter event
        enter: function () {
            // return if application not initialized or game is over
            if(!this.get('controllers.application').get('initialized')  || this.get('controllers.application').get('gameOver')) return;
            if (this.get('empty')) {
                // update css class to show hover effect
                this.set('class', this.getWhoseTurnClass() + ' enter');
            }
        },
        // mouse leave event
        leave: function () {
            if (this.get('empty')) {
                // clear class on emty
                this.set('class', '');
            }
        }

    },

    /**
     * Used for css class to set lastCell
     * @returns {string} empty string or 'lastCell'
     */
    isLastCell: function(){
        return this.get('lc')?'lastCell':''
    }.property('lastCell'),

    /**
     * Used for css class
     * @returns {string} empty string or 'lastRow'
     */
    isLastRow: function(){
        return this.get('lr')?'lastRow':''
    }.property('lastRow'),

    /**
     * Used for css class to visually show 'x' or 'o' css style
     * @returns {string}
     */
    getWhoseTurnClass: function () {
        if (this.get('controllers.application').get('whoseTurn') === "x") {
            return 'fa-times';
        } else {
            return 'fa-circle-o'
        }
    }
});