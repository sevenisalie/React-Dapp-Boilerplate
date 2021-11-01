import {injected} from "./connectors";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";



const TruncateAddress = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    let shortAddress = ""
    if (active) {
        shortAddress = account.substring(0,7);
    } else {
        shortAddress = "Connect"
    }
    return shortAddress    
}

export default TruncateAddress