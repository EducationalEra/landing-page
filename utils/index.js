import _ from 'lodash'

export const genericSearch = (array, searchTerm, tags) => {
  let result = array.filter(item => item.name.indexOf(searchTerm) >= 0 || item.description.indexOf(searchTerm) >= 0)
  if (tags.length === 0) {
    return result
  }
  return result.filter(item => _.intersection(item.tags, tags).length > 0)
}
