export interface  IProductStore {
    id: number;
    title: string;
    price: number;
    description?: string;
    image: string;
}

export interface IUserStore {
    id: number;
    username: string;
    name:{
        firstname: string;
        lastname: string;
    }
    password?: string;
    email?: string;
}