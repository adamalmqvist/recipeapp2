
import { useState, useEffect } from 'react'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import './HomeView.css'



export const HomeView = () => {
    const [posts, setPosts] = useState<any>([{}])

    const getDataFromBackend = async () => {
        try {
            const response = await BackendAPIService.getallPosts()
            setPosts(response.data)
            console.log(posts)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
       getDataFromBackend()

      },[])
 
 
   
    return (
        <div className="container">
        {posts.map((item: any) => (
          <p className="containerItem" key={item.title}>
            {Object.values(item).map((val: any) => (
             
             <div><p>{val}</p></div>
             
            ))}
          </p>
        ))}
      </div>
      )
}
