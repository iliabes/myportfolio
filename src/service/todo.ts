import axios from 'axios'

export default function getTodo(){
    return axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
}