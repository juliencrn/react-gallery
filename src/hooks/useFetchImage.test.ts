import { renderHook } from '@testing-library/react-hooks'
import useFetchImages, {
  FetchAction,
  FetchActionType,
  fetchReducer,
  initialState,
} from './useFetchImages'
import { Image } from '../interfaces'

const randomImage: Image = {
  id: '62QRdDoe44M',
  title: 'Seville Sunset',
  user: {
    id: 'rBvON6YD9Bk',
    name: 'Henrique Ferreira',
    link: 'http://rickferreira.ch/',
  },
  imageUrls: {
    full:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
    regular:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
    thumb:
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDEyOH0',
  },
  alt_description: 'brown concrete building during daytime photo',
  link: 'https://unsplash.com/photos/62QRdDoe44M',
}

describe('Test fetchImages reducer & hook', () => {
  describe('fetchReducer()', () => {
    test('when dispatch FETCH_INIT', () => {
      const action: FetchAction = {
        type: FetchActionType.FETCH_INIT,
      }

      expect(fetchReducer(initialState, action)).toEqual({
        isLoading: true,
        images: [],
      })
    })

    test('when dispatch FETCH_SUCCESS', () => {
      const action: FetchAction = {
        type: FetchActionType.FETCH_SUCCESS,
        payload: [randomImage],
      }

      expect(fetchReducer(initialState, action)).toEqual({
        isLoading: false,
        images: [randomImage],
      })
    })
  })

  describe('useFetchImages()', () => {
    test('initial data state is loading and data empty', () => {
      const { result } = renderHook(() => useFetchImages())

      expect(result.current).toEqual({ isLoading: true, images: [] })
    })

    test('data is fetched and loading is complete', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchImages())

      await waitForNextUpdate()

      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.images).toContainEqual(randomImage)
      expect(result.current.images).toHaveLength(90)
    })
  })
})
