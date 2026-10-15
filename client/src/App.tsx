import './index.css'
import {AppSidebar, Topbar} from "./components/bars.tsx";

function App() {
    return (
        <div className="flex w-full h-screen bg-[#0D100E] divide-x divide-[#252A26]">
            <AppSidebar/>
            <div className="flex flex-col flex-1 divide-y divide-[#252A26]">
                <Topbar/>
                <div></div>
            </div>
        </div>

    );
}

export default App
