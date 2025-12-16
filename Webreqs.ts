import axios, { AxiosResponse } from "axios"

//* Axios is a library used to fetch data from APIs, and TypeScript interfaces ensure the received data matches a predefined structure.
interface Todo {
    userId : number;
    id :number;
    title:string;
    completed : boolean
}

const fetchData = async ()=>{
    try{
        const response: AxiosResponse<Todo> = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("Todo", response.data);
    }catch(error:any){
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
