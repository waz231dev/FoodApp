import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const filterData = (searchText, allRestaurants) => {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return filteredData;
}

const Body = () => {

  const [searchText, setSearchText] = useState('')
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6288146&lng=77.087384&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleInput = (e) => {
    setSearchText(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }
  return (
    allRestaurants.length === 0 ? (<Shimmer />) :
      (
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
            {filteredRestaurants.length === 0 ? (<h1>No restaurant matches your search</h1>) :
              (
                filteredRestaurants.map((restaurant) => {
                  return <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
                })
              )
            }
          </div>
        </main>
      )
  )
}

export default Body