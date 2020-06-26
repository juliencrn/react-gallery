import { useEffect, useReducer } from 'react'
import { Image } from '../interfaces'
import { getImages } from '../api'

export enum FetchActionType {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
}

export type FetchAction = {
  type: FetchActionType
  payload?: Image[]
}

export type FetchState = {
  isLoading: boolean
  images: Image[]
}

export const initialState: FetchState = {
  isLoading: true,
  images: [],
}

export function fetchReducer(state: FetchState, action: FetchAction) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        images: [],
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        images: action.payload as Image[],
      }

    default:
      return state
  }
}

function useFetchImages(): FetchState {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    let mounted = true
    async function fetchImages() {
      if (mounted && state !== initialState) {
        dispatch({ type: FetchActionType.FETCH_INIT })
      }

      const payload = await getImages()

      if (mounted) {
        dispatch({ type: FetchActionType.FETCH_SUCCESS, payload })
      }
    }
    fetchImages()

    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useFetchImages
