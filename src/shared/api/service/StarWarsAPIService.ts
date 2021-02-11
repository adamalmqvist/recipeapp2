import http from '../StarwarsAPI'



const getStarWarsCharacter = (characterNumber: number) => {
    return http.get(`/people/${characterNumber}`)
}

export default {
    getStarWarsCharacter
}