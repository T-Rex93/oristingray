import React from 'react';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

// MetaMask connector
const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42], // Supported Ethereum network chain IDs
  });

// Function to get the Web3 library instance
const getLibrary = (provider) => {
    return new Web3(provider);
  };  

function MetaMaskExample() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  // Use MetaMask functionality here
  // ...
  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default MetaMaskExample;
