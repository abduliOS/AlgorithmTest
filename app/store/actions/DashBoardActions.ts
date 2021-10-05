/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IPOKEMONResponse } from 'app/models/api/Dashboard';

export function requestPokemon() {
  return {
    type: types.POKEMON_REQUEST,
  };
}

export function onPokemonResponse(response: IPOKEMONResponse) {
  return {
    type: types.POKEMON_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}
