import {createContext, ReactNode, useContext, useState} from "react";
import {AppContextProps, Timer} from "../type";

const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [timer, setTimer] = useState<Timer>({
        counter : 0,
        minutes : 0,
        seconds : 0,
    });
    const [timerStart, setTimerStart] = useState<boolean>(false);
    const [timerInterval, setTimerInterval] = useState<number | undefined>()

    function handleReset(){
        clearInterval(timerInterval)
        setTimerStart(false)
        setTimer({
            counter : 0,
            minutes : 0,
            seconds : 0,
        })
    }
    function handleStart (){
        if(!timerStart){
            setTimerInterval(setInterval(() =>{
                setTimer(prev => ({
                    counter : prev.counter+1,
                    minutes : Math.floor(prev.counter / 60),
                    seconds : Math.floor(prev.counter % 60),
                }))
            },1000))
        }
        setTimerStart(true)
    }
    function handlePause(){
        setTimerStart(false)
        clearInterval(timerInterval)
    }

    return (
        <AppContext.Provider value={{state:timer, handleStart, handleReset, handlePause}}>
            {children}
        </AppContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = ():AppContextProps =>{
  const context = useContext(AppContext);
  if(!context){
      throw new Error('useAppContext должен использоваться внутри AppProvider');
  }
  return context
}