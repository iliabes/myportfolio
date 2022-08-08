
import { todoSlice } from '../slices/sliceTodo'
import store from '../store'
import  getTodo from '../../service/todo'
import { AppDispatch } from '../store'
import { loading, succes, fail } from '../slices/sliceTodo'






export default  function getTudu(){
     return async (dispatch: AppDispatch) => {
          store.dispatch(loading())
          let response = await getTodo()
          try {
               if(response.status === 200){
                    store.dispatch(succes(response.data))
     
               }else{
                    store.dispatch(fail(response.data))
               }
          } catch (error) {
               console.log(error)
          }
     }


     
     
  }







// export default async function getTudu(){
//    return async () => {
//      let response = await getNet()
//      console.log(response)
//      try{
//           if(1){
//                console.log('ok')
//           }else{
//                console.log('no ok')
//           }
//      }catch(err){   
//           console.log(err)
//      }
    
//    }
   
// }


// interface Ifetch{
//      data:any,
//      status:number
// }

// function getNet():any{
//      axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
//           .then(function (response) {
//                console.log(response)
//                return response
//           })
// }

