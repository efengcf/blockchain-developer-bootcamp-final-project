
/* we're loading the web3 libraries here */
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'script.js';
script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
script.src = 'https://cdn.ethers.io/lib/ethers-5.2.umd.min.js';
document.head.appendChild(script);