import { ModelBase } from './ModelBase';

export interface Todo extends ModelBase {
    title: string;
}

export interface TodoInitialState {
    loading: boolean;
    errorMessage?: string;
    models: Array<Todo>;
    model: Todo;
}