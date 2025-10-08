export const loadWishlist = () => {
  try {
    const data = localStorage.getItem('wishlist')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}


export const removeFromWishlist = id => {
  const wishlist = loadWishlist()
  try {
    const updatedWishlist = wishlist.filter(p => p.id !== id)
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
  } catch (err) {
    console.log(err)
  }
}