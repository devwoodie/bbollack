import React, {useCallback, useState} from "react";
import { ethers } from "ethers";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Login from "./components/Login";

function App() {

    const [provider, setProvider] = useState(undefined);
    const [signer, setSigner] = useState(undefined);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const [currentBalance, setCurrentBalance] = useState(undefined);
    const [isConnected,setIsConnected] = useState(false);

    // 메타 마스크 설치 확인
    const connectWallet = useCallback(async () => {
        try{
            if(window.ethereum !== "undefined"){
                await getMetamaskData();

                setIsConnected(true);
            }else{
                alert("please install MetaMask");
                window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko","_blank");
            }
        }catch (err){
            console.log(err)
        }
    },[])

    const getMetamaskData = async () => {
        const _provider = await getProvider();
        const _signer = await getSigner(_provider);
        await getWalletData(_signer);
    }

    const getProvider = async () => {
        // 메타마스크 provider -> ethers 모듈에 저장
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        return provider;
    }

    const getSigner = async provider => {
        // 메타마스크에 홈페이지 연동 승인 요청
        await provider.send("eth_requestAccounts", []);

        // 서명 요청
        const signer = provider.getSigner();
        // 서명 저장
        setSigner(signer);

        return signer;
    }

    const getWalletData = async(signer) => {
        const result = await Promise.all([
            signer.getAddress(),
            signer.getBalance(),
        ])
        console.log(result)
        setWalletAddress(result[0])
        setCurrentBalance(Number(result[1]))
    }

    return (
        <div className="App">
            <SideBar />
            <div className="cont">
                <div className="main-top">
                    <h2 className="sub-logo">CRYPTO BBOLLACK</h2>
                    <Login
                        isConnected={isConnected}
                        connectWallet={connectWallet}
                        walletAddress={walletAddress}
                        currentBalance={currentBalance}
                    />
                </div>
                <Routes>
                    <Route path="/" element={<Main isConnected={isConnected} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
