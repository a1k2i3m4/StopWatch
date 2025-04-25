import './App.css'
import {useAppContext} from "./context/AppContext.tsx";

function App() {

    const { state, handleStart, handlePause, handleReset } = useAppContext();


    return (
    <>
        <div className="max-w-md mx-auto border-2 rounded bg-white p-3 place-content-center">
            <h1 className={"text-2xl font-bold md:text-4xl text-center"}>
                StopWatch
            </h1>
            <p className="flex gap-1 justify-center font-bold text-7xl">
                <span>{`${state.minutes}`.padStart(2,"0")}</span>:
                <span>{`${state.seconds}`.padStart(2,"0")}</span>
            </p>
            <div className={"grid md:grid-cols-3 gap-2"}>
                {
                    [
                        {label:"Start", className:"bg-green-400 hover:bg-green-500", fn:handleStart},
                        {label:"Pause", className:"bg-neutral-400 hover:bg-neutral-500", fn:handlePause},
                        {label:"Reset", className:"bg-red-400 hover:bg-red-500", fn:handleReset},
                    ].map((item)=> (
                        <button key={item.label} className={`btn text-white font-medium ${item.className}`}
                                onClick={item.fn}>
                            {item.label}
                        </button>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default App
