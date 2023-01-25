export function queryParser(search: any) {
  return search
    .substring(1)
    .split('&')
    .reduce(function (result: any, value: any) {
      var parts = value.split('=');
      if (parts[0])
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
      return result;
    }, {});
}
export function CleanObj(obj: any) {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName];
    }
  }
  return obj;
}
// new URLSearchParams(object).toString()
