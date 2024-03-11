import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function filterOutNullAndUndefinedValues(
  params: { [s: string]: unknown } | ArrayLike<unknown>
) {
  return objectFromEntries(
    Object.entries(params).filter(
      ([key, value]) =>
        value !== null &&
        value !== '' &&
        value !== 'null' &&
        value !== undefined
    )
  );
}
export function objectFromEntries(entries: any[]) {
  return entries.reduce((obj: { [x: string]: any }, [key, value]: any) => {
    obj[key] = value;
    return obj;
  }, {});
}

