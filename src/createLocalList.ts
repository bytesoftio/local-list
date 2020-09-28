import { createList, ObservableList } from "@bytesoftio/list"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"

const cache: Record<string, ObservableList> = {}

export const createLocalList = <TState>(storageKey: string, initialState: TState[]): ObservableList<TState> => {
  let value = cache[storageKey] as ObservableList<TState>

  if ( ! value) {
    value = createList(readLocalStorage(storageKey, initialState) as TState[])
    value.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = value
  }

  return value
}
