function zip(data, tags) {
  const zipped = []
  if(data.every(group => group.length === data[0].length) && data.every(group => group.length === tags.length))
    data.forEach(group => {
      let item = {}
      for(let i=0; i < group.length; i++)
        item[tags[i]] = group[i]
      zipped.push(item)
    })
  else throw Error("Failed to zip data with the tags")
  return zipped
}