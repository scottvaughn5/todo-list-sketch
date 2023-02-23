
class TodoListValue {
    isComplete: boolean;
    Value: string;
    id: number;
    constructor(id: number, isComplete:boolean, Value: string ){
        this.isComplete = isComplete;
        this.Value = Value;
        this.id = id;
    }
    public static MapFromForm(id:number, formData: FormData): TodoListValue{
        return new TodoListValue(id, formData.get("isComplete") === "true", formData.get("Value") + "");
    }
}

export {TodoListValue}