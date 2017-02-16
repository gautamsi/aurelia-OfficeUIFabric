export function toBool(value) {
    value = value || '';
    return (value === true || value.toLowerCase() === 'true');
}

export function isNullOrEmptyString(str: string) {
    return str === null || typeof str === 'undefined' || str === '';
}
// export function toNumber(value) {
//     return Number(value);
// }
