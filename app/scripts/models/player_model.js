
var attr = DS.attr;

Tictactoe.Player = DS.Model.extend({
    name: attr(),
    score: attr(),
    turn: attr()
});

Tictactoe.Player.FIXTURES = [
    {
        "id":0,
        "name":"",
        "score":0,
        "turn":"x"
    },
    {
        "id":1,
        "name":"",
        "score":0,
        "turn":"o"
    }
];
