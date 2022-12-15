export default function (data, article) {
  let extendedData = [];
  extendedData.push(Object.assign({}, data[data.length - 1]));
  extendedData = extendedData.concat(data);
  extendedData.push(Object.assign({}, data[0]));

  extendedData.forEach((ext, index) => {
    ext.article = `${article}${index}`;
    ext.translate = -1;
  });

  return extendedData;
}
