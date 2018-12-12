import { ITestApiEntity } from './model/ITestApiEntity';

export class ExampleApi {
    
    public static async exampleApiCall() : Promise<ITestApiEntity> {
        return fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then (data => data as ITestApiEntity);
    }

}