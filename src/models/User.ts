export default class User {
    private readonly _isLoggedIn: boolean;
    private readonly _name: string;
    private readonly _userId: number;

    constructor(isLoggedIn: boolean = false, name: string = "", userId: number = -1) {
        this._isLoggedIn = isLoggedIn;
        this._name = name;
        this._userId = userId;
    }

    public get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    public get name(): string {
        return this._name;
    }

    public get userId(): number {
        return this._userId;
    }
}