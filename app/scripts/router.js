Tictactoe.Router.map(function () {
    // Add your routes here
    this.resource('grid', { path: '/' }, function () {
        this.resource('players', { path: '/' });
    });
});