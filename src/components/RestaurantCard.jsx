import { IMG_CDN_URL } from '../constants'
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId
}) => {
  return (
    <div className='card w-52 border-2 bg-rose-200 p-2 m-4 rounded-lg'>
      <img className='w-full' src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} star</h4>
    </div>
  )
}

export default RestaurantCard