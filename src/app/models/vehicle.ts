export interface Vehicle {
    vehicleId: number,
    plate: string,
    vin: string,
    brand: string,
    line: string,
    cylinderCapacity: string,
    color: string,
    vehicleType: any,
    chassis: string,
    model: string, 
    erased: boolean
}

export interface VehicleDto {
    plate: string,
    vin: string,
    brand: string,
    line: string,
    cylinderCapacity: string,
    color: string,
    vehicleType: any,
    model: string, 
    chassis: string,
    erased: boolean
}
