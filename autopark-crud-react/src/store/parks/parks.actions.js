export const parks = {
    INIT_CHANGE: '[PARKS] init change parks',
    CHANGE_SUCCESS: '[PARKS] change parks successfully',
    CHANGE_FAILED: '[PARKS] change parks failed'
};

export function parksInitChange () {
    return { type: parks.INIT_CHANGE };
};

export function parksChangeSuccess (parks) {
    return { type: parks.CHANGE_SUCCESS, parks };
};

export function parksChangeFailed () {
    return { type: parks.CHANGE_FAILED };
};
