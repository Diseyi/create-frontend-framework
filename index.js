import {init} from "./framework";
import {div} from "./framework/element";
import { User } from "./src/user";

const firstname = "Diseyi";
const lastname = "Philomena";

const template = div`Hello ${firstname} ${lastname}!`

init("#app", User({firstname, lastname}))