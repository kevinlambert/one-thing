export const removeNonSerializableValues = (item: any) =>
  JSON.parse(JSON.stringify(item));
