
Tictactoe.CellView = Ember.View.extend({
    mouseEnter: function () {
        this.get('controller').send('enter');
    },
    mouseLeave: function () {
        this.get('controller').send('leave');
    },
    click: function () {
        var tween = TweenMax.fromTo(this.$(), 0.5, {textShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"}, {textShadow: "0px 0px 0px rgb(255, 255, 255)"});
        this.get('controller').send('set');
    }

});