export interface Email{
    email: string;
}

export interface Login{
    email: string,
    password: string
}

export interface Register{
    email: string,
    username: string,
    password: string
}
export interface Update{
    emailChange: string,
    email: string,
    username: string,
    password: string
}

export interface City{
    city: string,
}