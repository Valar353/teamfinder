// ДЕЙСТВИЕ

import {INIT_USER} from "./constant";

export function actionInitUser(user) {
    return {
        type: INIT_USER,
        user
    }
};
