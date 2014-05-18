Tictactoe.PlayerController = Ember.ObjectController.extend({
    /**
     * Used by css to determine whether it's right or left player
     */
    isRight: function () {
        return this.get('id') === '1' ? 'right' : '';
    }.property()
});
