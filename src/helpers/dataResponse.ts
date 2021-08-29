import { ModelBase } from '../interfaces/ModelBase';

export const createModel = <T extends ModelBase>(
    models: Array<T>,
    model: T,
): Array<T> => {
    return [...models, model] as Array<T>;
};

export const updateModel = <T extends ModelBase>(
    models: Array<T>,
    model: T): Array<T> => {

    return models
        .map((e: ModelBase) => (e.id === model.id ? model : e)) as Array<T>;
};

export const deleteModel = <T extends ModelBase>(
    models: Array<T>,
    id: string): Array<T> => {

    return  models
        .filter((e: T) => e.id !== id) as Array<T>;
};