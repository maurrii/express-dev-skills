import * as skillDb from '../data/skills.js'

function index(req, res) {
	skillDb.find({}, function (error, skills) {
		res.render('skills/index', {
			skills: skills,
			error: error,
		})
	})
}

function show (req, res){
  skillDb.findById(req.params.is, function(error, skill){
    res.render('skills/show', {
      skill,
      error
    })
  })
}

export {
index,
show
}
