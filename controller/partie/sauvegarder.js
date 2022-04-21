import Partie from '../../model/partie'

export function enregistrerPartie(req, res) {

  let newPartie = new Partie({
    username: req.body.username,
    vie: req.body.vie <= 0 ? 0 : req.body.vie,
    zombies_morts: req.body.zombies_morts,
    time: req.body.time,
  })

  Partie.init()
    .then(function () {
      Partie.create(newPartie, function (error) {
        if (error) {
          res.status(200).json({ error: error.errmsg })
        } else {
          res.status(200).json({ partie: "enregistrer" })
        }
      });
    });
}