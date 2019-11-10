const usingMockDb = Boolean((process.env.USE_MOCK_DB || '').toLowerCase());
const itemDaoPath = `./Item/StrawDao${usingMockDb ? '.mock': ''}`;

console.log(itemDaoPath)

// tslint:disable:no-var-requires
export const { StrawItemDao} = require(itemDaoPath);
