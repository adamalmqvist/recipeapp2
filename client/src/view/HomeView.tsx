
import { useState, useEffect } from 'react'
import StarWarsAPIService from '../shared/api/service/StarWarsAPIService'



export const HomeView = () => {
  
  const [starwarsData, setStarwarsData] = useState<any>()
  
  const [characterNumber, setCharacterNumber] = useState<number>(1)

  const makuSureCharacterNumberNeverGetsBelow = () => {
      (characterNumber <= 1) ? setCharacterNumber(1) : setCharacterNumber(characterNumber -1)
  }

  const getDataFromStarWarsAPI = async () => {
    try {
        const response = await StarWarsAPIService.getStarWarsCharacter(characterNumber)
        setStarwarsData(response)
    }catch (error){
        console.error()
    }
}

useEffect(() => {
    getDataFromStarWarsAPI()
},[characterNumber])
   
    return (
        <div>
            <h1>Name: {starwarsData?.data?.name}</h1>
            <h1>Gender: {starwarsData?.data?.gender}</h1>
            <h1>birth year: {starwarsData?.data?.birth_year}</h1>
            <h1>Height: {starwarsData?.data?.height}</h1>
            <button onClick={()=> makuSureCharacterNumberNeverGetsBelow()}>Get previous character</button>
            <button onClick={()=> setCharacterNumber(characterNumber + 1)}>Get next character</button>
        </div>
    )
}
