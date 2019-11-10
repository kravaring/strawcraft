import { Item } from '@entities';

export interface ItemDao<T> {
    getAll: () => Promise<Array<T>>;
    add: (user: T) => Promise<T>;
    update: (user: T) => Promise<T>;
    delete: (id: number) => Promise<T>;
}

export class StrawDao implements ItemDao<Item> {

    /**
     *
     */
    public async getAll(): Promise<Array<Item>> {
        // TODO
        return [] as any;
    }

    /**
     *
     * @param user
     */
    public async add(user: Item): Promise<Item> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param user
     */
    public async update(user: Item): Promise<Item> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<Item> {
        // TODO
        return {} as any;
    }
}
