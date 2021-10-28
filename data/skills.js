const skills = [
  {text: 'create array', mastered: true, _id: 125223},
  {text: 'implement index', mastered: false, _id: 127904},
  {text: 'implement show', mastered: false, _id: 139608},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, todos)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}
