import { Item, StrawItem } from '@entities';
import { getRandomInt } from '@shared';
import { MockDaoMock } from '../MockDb/MockDao.mock';
import { ItemDao } from './StrawDao';

export class StrawItemDao extends MockDaoMock implements ItemDao<StrawItem> {

    public async getAll(): Promise<Array<Item>> {
        try {
            const db = await super.openDb();
            return db.items;
        } catch (err) {
            throw err;
        }
    }

    public async add(item: Item): Promise<Item> {
        try {
            const db = await super.openDb();
            item.id = getRandomInt();
            db.items.push(item);
            await super.saveDb(db);
            return item;
        } catch (err) {
            throw err;
        }
    }

    public async update(item: Item): Promise<Item> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.items.length; i++) {
                if (db.items[i].id === item.id) {
                    db.items[i] = item;
                    await super.saveDb(db);
                    return item;
                }
            }
            throw new Error('item not found');
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number): Promise<Item | null> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.items.length; i++) {
                if (db.items[i].id === id) {
                    const deletedItem = db.items[i];
                    db.items.splice(i, 1);
                    await super.saveDb(db);
                    return deletedItem;
                }
            }
            return null;
        } catch (err) {
            throw err;
        }
    }
}
