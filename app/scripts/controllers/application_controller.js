Tictactoe.ApplicationController = Ember.ObjectController.extend({
    whoseTurn: "x",
    initialized: false,
    needs: ['grid', 'players'],
    score: Ember.Object.create({
        "x": 0, "o": 0
    }),
    moves: 0,
    wins: [7, 56, 448, 73, 146, 292, 273, 84],
    winner: null,
    gameOver: false,

    actions:{
        restartAction: function(){
            this.send("restartGame");
        }
    },

    /*
     * Returns whether the given score is a winning score.
     */
    isWinningScore: function (score) {
        var i;
        for (i = 0; i < this.get('wins').length; i += 1) {
            if ((this.get('wins')[i] & score) === this.get('wins')[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    updateGame: function(indicator){
        this.incrementProperty('moves');
        this.incrementProperty('score.'+this.get('whoseTurn'), indicator);
        if (this.isWinningScore(this.get('score')[this.get('whoseTurn')])) {
            this.updatePlayerScore();
            this.set('gameOver', true);
        } else if (this.get('moves') === 9) {
            this.set('winner', 0);
            this.set('gameOver', true);
        }

        this.set('whoseTurn', this.get('whoseTurn') === "x" ? "o" : "x");
    },

    updatePlayerScore: function(){
        var turn = this.get('whoseTurn');
        var self = this;
        this.get('controllers.players').forEach(function (player) {
            if(player.get('turn') === turn){
                player.incrementProperty('score');
                self.set('winner', player);
            }
        });
    },

    restartGame: function () {
        this.get('controllers.grid').cleanCells();
        this.set('score.x', 0);
        this.set('score.o', 0);
        this.set('moves',0);
        this.set('gameOver', false);
    }
});