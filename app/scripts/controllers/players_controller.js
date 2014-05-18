Tictactoe.PlayersController = Ember.ArrayController.extend({

    itemController:"player",
    needs: ['application'],
    actions:{
        // when player clicks start button
        initializePlayers: function(){
            var bothPlayersHaveNames = true;

            // check whether both player are enter their names
            this.forEach(function (player) {
                if(player.get("name") === "") bothPlayersHaveNames = false;
            });
            if(bothPlayersHaveNames){
                this.get('controllers.application').set('initialized', true);
            }
        }
    }
});

