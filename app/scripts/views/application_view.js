
Tictactoe.ApplicationView = Ember.View.extend({

    /**
     * Initialize ApplicationView
     */
    didInsertElement: function () {
        TweenMax.to(this.$('.tictactoe-grid'),1, {opacity:"0.2"});

        var leftPlayer = this.$('.tictactoe-player-wrapper')[0];
        var rightPlayer = this.$('.tictactoe-player-wrapper')[1];

        TweenMax.to(leftPlayer, 1, {left:"395px", top:"190px", scale:1.1,ease:Strong.easeOut});
        TweenMax.to(rightPlayer, 1, {right:"395px", top:"190px",scale:1.1,ease:Strong.easeOut});
    },

    /**
     * Method called to run starting animation
     */
    animToStart: function(){
        // animate grid opacity
        TweenMax.to(this.$('.tictactoe-grid'),1, {opacity:"1"});

        var leftPlayer = this.$('.tictactoe-player-wrapper')[0];
        var rightPlayer = this.$('.tictactoe-player-wrapper')[1];

        // move left and right player to center
        TweenMax.to(leftPlayer, 1, {left:"200px", top:"430px", scale:1,ease:Strong.easeOut});
        TweenMax.to(rightPlayer, 1, {right:"200px", top:"430px",scale:1,ease:Strong.easeOut});

        // hide start button, we want need it anymore
        var startBtn = this.$('.tictactoe-start-btn-wrapper');
        TweenMax.to(startBtn, 0.5, {opacity:"0", onComplete: function(){
            startBtn.hide();
        }});

        // also hide notification tag
        var notification = this.$('.tictactoe-notification h4');
        TweenMax.to(notification, 1, {opacity:"0"});
    },

    /**
     * Method for running restart animation
     */
    animToRestart: function(){
        // show restart button
        var restartBtn = this.$('.tictactoe-restart-btn');
        restartBtn.show();
        TweenMax.to(restartBtn, 0.5, {opacity:"1"});
    },

    /**
     * Observer for application initialization
     */
    onInitialized: function () {
        if(this.get('controller').get('initialized')){
            // after application initialized run starting animation
            this.animToStart();
        }
    }.observes('controller.initialized'),

    /**
     * Observe application winner property
     */
    onWinner: function () {
        var winner = this.get('controller').get('winner');

        // initial vaule null, return
        if(winner === null) return;

        var message = '';

        // winner 0 is draw
        if(winner === 0){
            message = 'It\'s a draw :(';
        }else{
            message = winner.get('name') + ' wins';
        }

        var notification = this.$('.tictactoe-notification h4');
        notification.text(message); // update notification text
        TweenMax.killTweensOf(notification); // kill Tweenmax tweens
        TweenMax.to(notification, 1, {opacity:"1", onComplete: function(){
            TweenMax.to(notification, 2, {opacity:"0",delay:2});
        }});
        // and finally show restart button
        this.animToRestart();

    }.observes('controller.winner')

});