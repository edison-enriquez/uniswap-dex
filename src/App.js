import { useEffect, useState } from "react";
import { Token } from '@uniswap/sdk-core';
import { ethers, providers, Wallet } from 'ethers';
import { POSClient,use } from '@maticnetwork/maticjs'
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers'

// install ethers plugin
use(Web3ClientPlugin)

// Los valores son solo un ejemplo
const chainId = 80001; // Mumbai Polygon's network ID
// URL del punto final de la red Mumbai de Polygon
const mumbaiRpcUrl = 'https://rpc-mumbai.maticvigil.com/';



// Decimales del token
const tokenDecimals = 0;
const setup = async () => {

  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const posClient = new POSClient();
  
  // Crear un proveedor JsonRpcProvider para la red Mumbai de Polygon
  //const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.matic.today/');

  console.log('Conectando a la red Mumbai de Polygon');
  const PVU = new Token(
    chainId, 
    '0x31471e0791fcdbe82fbf4c44943255e923f1b794', 
    tokenDecimals,
    'PVU',
    'PVUnist'
  );
  
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  //const parentProvider = new providers.JsonRpcProvider(rpc.parent);
  
  console.log('Conectando a la red Mumbai de Polygon');
};


function App() {

  const {loading, setLoading} = useState(true);
  
  useEffect(() => {
    setup();
  }, []);

  return <> {loading ? 'Cargando...': <p> Hola mundo</p>} </>;
}

export default App;
