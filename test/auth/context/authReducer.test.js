import { authReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/types";

describe('pruebas en el authReducer', () => { 

    const initialState = {
        id:123,
        name:'dIEGO'
    };

    test('debe de retornar el valor por defecto', () => { 

        const reducero = authReducer(initialState,{})

        expect(reducero).toBe(initialState);

     })

     test('debe de llamar al login autenticar y establecer el user', () => { 

        const reducero = authReducer(initialState,{
            type:types.login,
            payload:initialState
        })

        expect(reducero.logged).toBeTruthy();

     })

     test('debe de borrar el name del usuario y logged en false', () => { 

        const reducero = authReducer(initialState,{
            type:types.logout,
            payload:{}
        })

        expect(reducero.logged).toBeFalsy();

     })
 })