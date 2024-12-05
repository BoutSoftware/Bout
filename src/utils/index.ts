export function hasMissingFields(obj: any): boolean {
    return Object.values(obj).some(value => !value);
}