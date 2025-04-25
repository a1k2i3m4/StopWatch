export type Timer = {
    counter: number,
    minutes: number,
    seconds: number,
}

export interface AppContextProps {
    state: Timer,
    handleStart: () => void,
    handlePause: () => void,
    handleReset: () => void,
}