import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../constants'
import { useState } from 'react'

const filterData = (searchText, restaurantList) => {
  const filteredData = restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  )

  return filteredData;
}

const Body = () => {

  const [searchText, setSearchText] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = filterData(searchText, restaurantList);
    setFilteredRestaurants(data);
  }
  return (
    <main>
      <div className="search-container m-4">
        <input
          type='text'
          placeholder='Search'
          className='search-text p-1 bg-gray-200 mr-1'
          value={searchText}
          onChange={(e) => handleInput(e)}
        />
        <button className='bg-rose-300 p-1' type='submit' onClick={handleSubmit}>Search</button>
      </div>
      <div className='restaurant-list flex flex-wrap gap-4'>
        {
          filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
          })
        }
      </div>
    </main>
  )
}

export default Body