Tictactoe.PlayerController = Ember.ObjectController.extend({
    isRight: function () {
        return this.get('id') === '1' ? 'right' : '';
    }.property()
});
