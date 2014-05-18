
Tictactoe.CellController = Ember.ObjectController.extend({
    needs: ['application'],
    actions: {
        set: function () {
            if(!this.get('controllers.application').get('initialized') || this.get('controllers.application').get('gameOver')) return;
            if (this.get('empty')) {
                this.set('empty', false);
                this.set('class', this.getWhoseTurnClass());
                this.get('controllers.application').updateGame(this.get('indicator'));
            }
        },
        enter: function () {
            if(!this.get('controllers.application').get('initialized')  || this.get('controllers.application').get('gameOver')) return;
            if (this.get('empty')) {
                this.set('class', this.getWhoseTurnClass() + ' enter');
            }
        },
        leave: function () {
            if (this.get('empty')) {
                this.set('class', '');
            }
        }

    },
    isLastCell: function(){
        return this.get('lc')?'lastCell':''
    }.property('lastCell'),

    isLastRow: function(){
        return this.get('lr')?'lastRow':''
    }.property('lastRow'),

    getWhoseTurnClass: function () {
        if (this.get('controllers.application').get('whoseTurn') === "x") {
            return 'fa-times';
        } else {
            return 'fa-circle-o'
        }
    }
});