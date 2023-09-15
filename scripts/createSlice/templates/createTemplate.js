const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.log(`Не удалось создать директорию для слайса ${sliceName}`);
  }
  createModel(layer, sliceName);
  createUI(layer, sliceName);
  createPublicApi(layer, sliceName);
};
