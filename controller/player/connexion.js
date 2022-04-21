import Player from '../../model/player'

export function enregistrerPlayer(req, res) {
  
  let newPlayer = new Partie({
    username: req.body.username,
    email: req.body.email
  })

  Player.init()
    .then(function () {
      Player.create(newPlayer, function (error) {
        if (error) {
          res.status(200).json({ error: error.errmsg })
        } else {
          res.status(200).json({ partie: "enregistrer" })
        }
      });
    });
}