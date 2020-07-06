export interface User {
    firstName: string;
    id: string;
    subscriptions: Subscription[];

}

export interface Subscription {
    subNum: string;
    subName: string;
    packages: Package[];
}

export interface Package{
    name: string;
    id: string;
    quantity: number;
    using: number;
}
