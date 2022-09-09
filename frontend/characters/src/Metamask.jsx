import { useMetaMask } from "metamask-react";
import img from "./MetaMask_Fox.png";

function Metamask() {
  const { status, connect, account, chainId } = useMetaMask();

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>MetaMask not available :(</div>;

  if (status === "notConnected")
    return (
      <div className="metaWrapper" onClick={connect}>
        <img src={img} alt="logo metamask" className="metamask" />
      </div>
    );

  if (status === "connecting") return <div>Connecting...</div>;

  if (status === "connected")
    return (
      <div>
        Connected account {account} on chain ID {chainId}
      </div>
    );

  return null;
}

export default Metamask;
