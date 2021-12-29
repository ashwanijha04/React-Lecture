import { useState } from "react";

function Page() {

    const [isWarning, setWarning] = useState(true);

    function WarningBanner() {
        return(
            <div className="warning">
                Warning!
            </div>
        )
    }

    function hideWarning() {
        setWarning(false);
    }
    function showWarning() {
        setWarning(true);
    }
    

    return(
        <div>
            {isWarning?<WarningBanner/>:""}

            <button onClick={showWarning}>
                Show!
            </button>
            <button onClick={hideWarning}>
                Hide!
            </button>
        </div>
    )
}

export default Page;