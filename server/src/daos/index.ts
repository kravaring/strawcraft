const usingMockDb = (process.env.USE_MOCK_DB || '').toLowerCase();
let itemDaoPath = './Item/StrawDao';

if (usingMockDb === 'true') {
    itemDaoPath += '.mock';
}

// tslint:disable:no-var-requires
export const { ItemDao } = require(itemDaoPath);
