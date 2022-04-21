import Partie from '../../model/partie'

export function getAllScores(req, res) {

  Partie.find({ zombies_morts : { $gte : 1 }}).limit(8).sort({time: 1, zombies_morts : -1, vie: -1 } ).exec((err, scores) => {

    if(err) res.json({ code : 500, msg: "Error Serveur"})

    res.json(scores)
  })
}