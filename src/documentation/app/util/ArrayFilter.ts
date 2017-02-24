export class ArrayFilterValueConverter {
    public toView(array: any[], property: string, value: string) {

        if (array === undefined || array === null || property === undefined || value === undefined) {
            return array;
        }
        return array.filter((item) => item[property] === value);
    }
}
