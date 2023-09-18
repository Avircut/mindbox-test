export const recursiveSearch = <T>(object: Array<T> | Object, callback: (...args:any) => void, propName:string, patch?:any) => {
  if (object instanceof Array) {
    callback(object, patch);
    object.forEach((item) => recursiveSearch(item, callback, propName, patch));
  } else if (Object.prototype.hasOwnProperty.call(object, propName)) {
    const prop = object[propName as keyof typeof object];
    recursiveSearch(prop, callback, propName, patch);
  }
};
