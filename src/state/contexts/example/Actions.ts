import { ITestApiEntity } from 'src/model/ITestApiEntity';

// action types
export class ExampleActionTypes {
    public static readonly Reset = "@@example2/reset";
    public static readonly Action1 = "@@example2/action1";
    public static readonly Action2 = "@@example2/action2";
    public static readonly DoApiCall = "@@example2/doapicall";
    public static readonly ApiCallFailed = "@@example2/apicallfailed";
    public static readonly ApiCallSuccess = "@@example2/apicallsuccess";
}

// actions defined as classes with a creator as a static function
export class ExampleResetAction {
    public static readonly creator = () => new ExampleResetAction();

    public readonly type = ExampleActionTypes.Reset;
}

export class ExampleAction1 {
    public static readonly creator = (someParameter:string) => new ExampleAction1(someParameter);

    public readonly type = ExampleActionTypes.Action1;

    constructor(public someParameter: string) { }
}

export class ExampleAction2 {
    public static readonly creator = (someParameter:number, anotherParameter:string) => new ExampleAction2(someParameter, anotherParameter);

    public readonly type = ExampleActionTypes.Action2;

    constructor(
        public someParameter: number,
        public anotherParameter: string
    ) { }
}

export class ExampleDoApiCall {
    public static readonly creator = () => new ExampleDoApiCall();

    public readonly type = ExampleActionTypes.DoApiCall;
}

export class ExampleApiCallFailed {
    public static readonly creator = () => new ExampleApiCallFailed();

    public readonly type = ExampleActionTypes.ApiCallFailed;
}

export class ExampleApiCallSuccess {
    public static readonly creator = (entity: ITestApiEntity) => new ExampleApiCallSuccess(entity);

    public readonly type = ExampleActionTypes.ApiCallSuccess;
    
    constructor(public entity: ITestApiEntity) { }
}

// Create a discriminated union of all action types used to correctly type the
// actions in the reducer switch statement
export type ExampleActions =
    ExampleResetAction |
    ExampleAction1 |
    ExampleAction2 |
    ExampleDoApiCall |
    ExampleApiCallFailed |
    ExampleApiCallSuccess;