const person = {
    firstName: 'Alex' as const, // Literal type
    lastName: 'Nascimento' as const
}

export function vehicleLiteralTypes(vehicle: "Motorcycle" | "Car" | "Truck"): string {
    return `Im driving a ${vehicle}`;
}


console.log(vehicleLiteralTypes("Motorcycle"));