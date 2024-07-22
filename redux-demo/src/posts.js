import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postAction } from './postAction'

function Posts(){
    //loading:false to loading:true, post:[], error:null
    //loading:true to loading:false, post:[], to posts:action.payload, error:null to error:null
    let {loading,posts,error}=useSelector((state)=>state.postRequest)
    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(postAction())
     },[dispatch])

  return(<>
    {loading && 'Loading'}<br></br>
    {error && 'Error'}<br></br>
    <ol>
    {/* {posts && JSON.stringify(posts)} */}
    {posts.map((post)=><li key={post.id}>&nbsp;&nbsp;{post.title}</li>)}
    </ol>
  </>)
}

export default Posts