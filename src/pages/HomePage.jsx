import react from "react"
import { useDispatch } from "react-redux"
import CheckboxGroup from "../components/CheckboxGroup"
import ResultBox from "../components/ResultBox"
import { calculateResult, reset } from "../features/OrderSlice"

const HomePage = () => {
    const dispacth = useDispatch()

    const handelSave = () =>{
        dispacth(calculateResult())
    }

    const handelReset = () =>{
        dispacth(reset())
    }

    return(
        <>
        <div className="h-[100vh] bg-white w-full px-48 flex flex-col justify-center items-center">
        <div className="pb-8">
        <h1 className="text-xl font-semibold text-center">Frontend Test</h1>
        </div>
        <div className="flex space-x-4">
            
            <div className="border border-gray-800 rounded-lg">
            <div className="p-4">
            <CheckboxGroup  />
            <div className="flex space-x-3">
                <button className="px-8 py-2 bg-gray-800 rounded-lg text-white" onClick={handelReset}>Reset</button>
                <button className="px-8 py-2 bg-blue-800 rounded-lg text-white" onClick={handelSave}>Simpan</button>
            </div>
            </div>
            </div>
            
            <ResultBox />
        </div>
        </div>
        </>
    )
}

export default HomePage