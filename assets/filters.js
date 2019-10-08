export function getByTitle (list, keyword) {
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    var resultTitle = list.filter(item => item.title.toLowerCase().indexOf(search) > -1);
    var resultAuteur = list.filter(item => item.auteur.toLowerCase().indexOf(search) > -1);
    if (resultTitle.length > 0) {
      return resultTitle;
    } else {
      return resultAuteur;
    }
  }


export function getByGenre (list, keyword) {
    const genre = keyword.trim().toLowerCase();
    return list.filter(item => item.genre.toLowerCase().indexOf(genre) > -1);
}
