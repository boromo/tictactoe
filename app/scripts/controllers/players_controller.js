Tictactoe.PlayersController = Ember.ArrayController.extend({
    dummyTitle: "Boris",
    itemController:"player",
    needs: ['application'],
    actions:{
        initializePlayers: function(){
            var bothPlayersHaveNames = true;
            this.forEach(function (player) {
                if(player.get("name") === "") bothPlayersHaveNames = false;
            });
            if(bothPlayersHaveNames){
                this.get('controllers.application').set('initialized', true);
            }
        }
    }
});

