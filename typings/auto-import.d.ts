/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-auto-import
export {}
declare global {
  const createRef: typeof import('react')['createRef']
  const forwardRef: typeof import('react')['forwardRef']
  const lazy: typeof import('react')['lazy']
  const memo: typeof import('react')['memo']
  const startTransition: typeof import('react')['startTransition']
  const useCallback: typeof import('react')['useCallback']
  const useContext: typeof import('react')['useContext']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useEffect: typeof import('react')['useEffect']
  const useId: typeof import('react')['useId']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useMemo: typeof import('react')['useMemo']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useTransition: typeof import('react')['useTransition']
  const useTranslation: typeof import('react-i18next')['useTranslation']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly createRef: UnwrapRef<typeof import('react')['createRef']>
    readonly forwardRef: UnwrapRef<typeof import('react')['forwardRef']>
    readonly lazy: UnwrapRef<typeof import('react')['lazy']>
    readonly memo: UnwrapRef<typeof import('react')['memo']>
    readonly startTransition: UnwrapRef<typeof import('react')['startTransition']>
    readonly useCallback: UnwrapRef<typeof import('react')['useCallback']>
    readonly useContext: UnwrapRef<typeof import('react')['useContext']>
    readonly useDebugValue: UnwrapRef<typeof import('react')['useDebugValue']>
    readonly useDeferredValue: UnwrapRef<typeof import('react')['useDeferredValue']>
    readonly useEffect: UnwrapRef<typeof import('react')['useEffect']>
    readonly useId: UnwrapRef<typeof import('react')['useId']>
    readonly useImperativeHandle: UnwrapRef<typeof import('react')['useImperativeHandle']>
    readonly useInsertionEffect: UnwrapRef<typeof import('react')['useInsertionEffect']>
    readonly useLayoutEffect: UnwrapRef<typeof import('react')['useLayoutEffect']>
    readonly useMemo: UnwrapRef<typeof import('react')['useMemo']>
    readonly useReducer: UnwrapRef<typeof import('react')['useReducer']>
    readonly useRef: UnwrapRef<typeof import('react')['useRef']>
    readonly useState: UnwrapRef<typeof import('react')['useState']>
    readonly useSyncExternalStore: UnwrapRef<typeof import('react')['useSyncExternalStore']>
    readonly useTransition: UnwrapRef<typeof import('react')['useTransition']>
    readonly useTranslation: UnwrapRef<typeof import('react-i18next')['useTranslation']>
  }
}