
import {div} from "../framework/element";

export const User = ({firstname, lastname}) => {
    return div`Hello ${firstname} ${lastname} ! `
}

