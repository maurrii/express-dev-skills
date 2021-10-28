const skills = [
  {type: 'create array', done: true, _id: 125223},
  {type: 'implement index', done: true, _id: 127904},
  {type: 'implement show', done: false, _id: 139608},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
	try {
		const todo = todos.find((todo) => todo._id === parseInt(id))
		if (!todo) throw new Error('No todo was found')
		return callback(null, todo)
	} catch (error) {
		console.log(error)
		return callback(error, null)
	}
}

export { 
	find,
  findById
}
