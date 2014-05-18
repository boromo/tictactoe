
Tictactoe.ApplicationView = Ember.View.extend({

    didInsertElement: function (val) {
        TweenMax.to(this.$('.tictactoe-grid'),1, {opacity:"0.2"});

        var leftPlayer = this.$('.tictactoe-player-wrapper')[0];
        var rightPlayer = this.$('.tictactoe-player-wrapper')[1];

        TweenMax.to(leftPlayer, 1, {left:"395px", top:"190px", scale:1.1,ease:Strong.easeOut});
        TweenMax.to(rightPlayer, 1, {right:"395px", top:"190px",scale:1.1,ease:Strong.easeOut});
    },

    animToStart: function(){
        TweenMax.to(this.$('.tictactoe-grid'),1, {opacity:"1"});

        var leftPlayer = this.$('.tictactoe-player-wrapper')[0];
        var rightPlayer = this.$('.tictactoe-player-wrapper')[1];

        TweenMax.to(leftPlayer, 1, {left:"200px", top:"430px", scale:1,ease:Strong.easeOut});
        TweenMax.to(rightPlayer, 1, {right:"200px", top:"430px",scale:1,ease:Strong.easeOut});

        var startBtn = this.$('.tictactoe-start-btn-wrapper');
        TweenMax.to(startBtn, 0.5, {opacity:"0", onComplete: function(){
            startBtn.hide();
        }});

        var notification = this.$('.tictactoe-notification h4');
        TweenMax.to(notification, 1, {opacity:"0"});
    },

    animToRestart: function(){
        var restartBtn = this.$('.tictactoe-restart-btn');
        restartBtn.show();
        TweenMax.to(restartBtn, 0.5, {opacity:"1"});
    },

    onInitialized: function () {
        if(this.get('controller').get('initialized')){
            this.animToStart();
        }
    }.observes('controller.initialized'),

    onWinner: function () {
        var winner = this.get('controller').get('winner');
        if(winner === null) return;
        var message = '';
        if(winner === 0){
            message = 'It\'s a draw :(';
        }else{
            message = winner.get('name') + ' wins';
        }

        var notification = this.$('.tictactoe-notification h4');
        notification.text(message);
        TweenMax.killTweensOf(notification);
        TweenMax.to(notification, 1, {opacity:"1", onComplete: function(){
            TweenMax.to(notification, 2, {opacity:"0",delay:2});
        }});

        this.animToRestart();

    }.observes('controller.winner')

});