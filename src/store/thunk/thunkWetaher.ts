import getWether from '../../service/wetaher'
import { Loading,Succes ,Error} from '../slices/sliceWeather'
import store from '../store'
import { AppDispatch } from '../store'
import  {sliceWeather} from '../slices/sliceWeather'

 





  const getWetaher = () => {
     return async (dispatch: AppDispatch) => {
          let response = await getWether()
          dispatch(Loading())
          try {
               if(response.status === 200){
                    dispatch(Succes(response.data))
               }else{
                    dispatch(Error(response.data))
               }
          } catch (error) {
               console.log(error)
          }
     }
  }
export default getWetaher






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

