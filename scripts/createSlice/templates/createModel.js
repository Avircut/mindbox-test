const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const reduxSliceTemplate = require('./reduxSliceTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log(` Не удалось создать model сегмент для слайса ${sliceName}`);
    }
  };
  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать redux Slice', e);
    }
  };
  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.log(`Не удалось создать схему для слайса ${sliceName}`, e);
    }
  };
  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
