export const pipe = (...functions) => functions.reduce((result, func) => func(result), undefined);
