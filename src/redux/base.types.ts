export interface BaseSliceState<DataType> {
    // Partial is necessary to allow multiple requests fetching different subproperties in DataType
    data: DataType;
    loading: boolean;
    error: string | null;
}

export interface BaseProjectEntity<DataType> {
    id: string;
    data?: DataType;
}
