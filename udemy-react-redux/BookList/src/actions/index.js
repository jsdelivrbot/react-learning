export function selectBook(book) {
  // selectBook needs to return an action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
