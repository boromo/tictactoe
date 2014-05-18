
Tictactoe.CellView = Ember.View.extend({
    // mouse enter event handler
    mouseEnter: function () {
        this.get('controller').send('enter');
    },
    // mouse leave event handler
    mouseLeave: function () {
        this.get('controller').send('leave');
    },
    // mouse click event handler
    click: function () {
        // animate cell clicking
        var tween = TweenMax.fromTo(this.$(), 0.5, {textShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"}, {textShadow: "0px 0px 0px rgb(255, 255, 255)"});
        this.get('controller').send('set');
    }

});