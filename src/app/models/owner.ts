export interface Owner {
    ownerId: number,
    firstname: string,
    lastname: string,
    dpi: string,
    birthdate: Date,
    address: string,
    email: string,
    phone: string,
    erased: boolean
}

export interface OwnerDto {
    firstname: string,
    lastname: string,
    dpi: string,
    birthdate: string | null,
    address: string,
    email: string,
    phone: string,
    erased: boolean
}
