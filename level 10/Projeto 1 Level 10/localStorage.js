import {
    listCadastro
} from "./script.js";

export function getLocalStorage() {
    return JSON.parse(localStorage.getItem('cadastros'));
}

export function setLocalStorage() {
    localStorage.setItem('cadastros', JSON.stringify(listCadastro));
}