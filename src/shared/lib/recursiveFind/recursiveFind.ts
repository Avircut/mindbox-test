// callback isNice(object)
export const recursiveFind = <T>(object: Array<T> | Object, callback: (...args:any) => void, propName:string, patch?:any) => {
  if (object instanceof Array) {
    callback(object, patch);
    object.forEach((item) => recursiveFind(item, callback, propName, patch));
  } else if (Object.prototype.hasOwnProperty.call(object, propName)) {
    const prop = object[propName as keyof typeof object];
    recursiveFind(prop, callback, propName, patch);
  }
};
