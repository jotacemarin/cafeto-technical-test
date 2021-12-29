export const vehicles = {
    INIT_CHANGE : '[VEHICLES] init change vehicles',
    CHANGE_SUCCESS : '[VEHICLES] change vehicles successfully',
    CHANGE_FAILED : '[VEHICLES] change vehicles failed'
}

export function vehiclesInitChange () {
    return { type: vehicles.INIT_CHANGE };
}

export function vehiclesChangeSuccess (vehicles) {
    return { type: vehicles.CHANGE_SUCCESS, vehicles };
}

export function vehiclesChangeFailed () {
    return { type: vehicles.CHANGE_FAILED };
}