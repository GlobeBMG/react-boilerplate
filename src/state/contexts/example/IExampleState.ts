// this represents just part of the entire state of an application

export default interface IExampleState {
    text: string
}

export class ExampleState {
    public static readonly initialState: IExampleState = {
        text: ""
    }
}