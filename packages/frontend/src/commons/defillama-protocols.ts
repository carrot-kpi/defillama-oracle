// taken and adapted from https://github.com/DefiLlama/defillama-server/blob/304ad2c43a3ffc44b81af4e163ab88bc330302fc/defi/src/protocols/data.ts
// TODO: remove this once the protocols API works again

import type { ProtocolOption } from "../types";

export default [
    {
        label: "Binance CEX",
        value: "binance-cex",
        logoURL: "https://icons.llama.fi/binance-cex.jpg",
    },
    {
        label: "Lido",
        value: "lido",
        logoURL: "https://icons.llama.fi/lido.png",
    },
    {
        label: "OKX",
        value: "okx",
        logoURL: "https://icons.llama.fi/okx.jpg",
    },
    {
        label: "Bitfinex",
        value: "bitfinex",
        logoURL: "https://icons.llama.fi/bitfinex.png",
    },
    {
        label: "Robinhood",
        value: "robinhood",
        logoURL: "https://icons.llama.fi/robinhood.jpg",
    },
    {
        label: "WBTC",
        value: "wbtc",
        logoURL: "https://icons.llama.fi/wbtc.png",
    },
    {
        label: "JustLend",
        value: "justlend",
        logoURL: "https://icons.llama.fi/justlend.png",
    },
    {
        label: "Polygon Bridge & Staking",
        value: "polygon-bridge-&-staking",
        logoURL: "https://icons.llama.fi/polygon.jpg",
    },
    {
        label: "Arbitrum Bridge",
        value: "arbitrum-bridge",
        logoURL: "https://icons.llama.fi/arbitrum-bridge.png",
    },
    {
        label: "MakerDAO",
        value: "makerdao",
        logoURL: "https://icons.llama.fi/makerdao.jpg",
    },
    {
        label: "Bybit",
        value: "bybit",
        logoURL: "https://icons.llama.fi/bybit.png",
    },
    {
        label: "JustCryptos",
        value: "justcryptos",
        logoURL: "https://icons.llama.fi/justcryptos.png",
    },
    {
        label: "Crypto-com",
        value: "crypto-com",
        logoURL: "https://icons.llama.fi/crypto-com.jpg",
    },
    {
        label: "Kraken",
        value: "kraken",
        logoURL: "https://icons.llama.fi/kraken.jpg",
    },
    {
        label: "AAVE V3",
        value: "aave-v3",
        logoURL: "https://icons.llama.fi/aave-v3.png",
    },
    {
        label: "Huobi",
        value: "huobi",
        logoURL: "https://icons.llama.fi/huobi.jpg",
    },
    {
        label: "Summer.fi",
        value: "summer.fi",
        logoURL: "https://icons.llama.fi/summer.fi.png",
    },
    {
        label: "Maker RWA",
        value: "maker-rwa",
        logoURL: "https://icons.llama.fi/maker-rwa.jpg",
    },
    {
        label: "Deribit",
        value: "deribit",
        logoURL: "https://icons.llama.fi/deribit.png",
    },
    {
        label: "Bitstamp",
        value: "bitstamp",
        logoURL: "https://icons.llama.fi/bitstamp.jpg",
    },
    {
        label: "Rocket Pool",
        value: "rocket-pool",
        logoURL: "https://icons.llama.fi/rocket-pool.jpg",
    },
    {
        label: "AAVE V2",
        value: "aave-v2",
        logoURL: "https://icons.llama.fi/aave-v2.png",
    },
    {
        label: "Kucoin",
        value: "kucoin",
        logoURL: "https://icons.llama.fi/kucoin.jpg",
    },
    {
        label: "Uniswap V3",
        value: "uniswap-v3",
        logoURL: "https://icons.llama.fi/uniswap-v3.png",
    },
    {
        label: "stUSDT",
        value: "stusdt",
        logoURL: "https://icons.llama.fi/stusdt.jpg",
    },
    {
        label: "Instadapp",
        value: "instadapp",
        logoURL: "https://icons.llama.fi/instadapp.jpg",
    },
    {
        label: "Gate-io",
        value: "gate-io",
        logoURL: "https://icons.llama.fi/gate-io.jpg",
    },
    {
        label: "Convex Finance",
        value: "convex-finance",
        logoURL: "https://icons.llama.fi/convex-finance.jpg",
    },
    {
        label: "Curve DEX",
        value: "curve-dex",
        logoURL: "https://icons.llama.fi/curve.png",
    },
    {
        label: "Bitget",
        value: "bitget",
        logoURL: "https://icons.llama.fi/bitget.jpg",
    },
    {
        label: "Binance staked ETH",
        value: "binance-staked-eth",
        logoURL: "https://icons.llama.fi/binance-staked-eth.png",
    },
    {
        label: "Uniswap V2",
        value: "uniswap-v2",
        logoURL: "https://icons.llama.fi/uniswap-v2.png",
    },
    {
        label: "MEXC",
        value: "mexc",
        logoURL: "https://icons.llama.fi/mexc.jpg",
    },
    {
        label: "JustStables",
        value: "juststables",
        logoURL: "https://icons.llama.fi/juststables.png",
    },
    {
        label: "Optimism Bridge",
        value: "optimism-bridge",
        logoURL: "https://icons.llama.fi/optimism-bridge.jpg",
    },
    {
        label: "Compound",
        value: "compound",
        logoURL: "https://icons.llama.fi/compound.png",
    },
    {
        label: "PancakeSwap AMM",
        value: "pancakeswap-amm",
        logoURL: "https://icons.llama.fi/pancakeswap-amm.jpg",
    },
    {
        label: "Spark",
        value: "spark",
        logoURL: "https://icons.llama.fi/spark.jpg",
    },
    {
        label: "Compound V3",
        value: "compound-v3",
        logoURL: "https://icons.llama.fi/compound-v3.png",
    },
    {
        label: "Bitmex",
        value: "bitmex",
        logoURL: "https://icons.llama.fi/bitmex.jpg",
    },
    {
        label: "SwissBorg",
        value: "swissborg",
        logoURL: "https://icons.llama.fi/swissborg.png",
    },
    {
        label: "Liquity",
        value: "liquity",
        logoURL: "https://icons.llama.fi/liquity.jpg",
    },
    {
        label: "Balancer V2",
        value: "balancer-v2",
        logoURL: "https://icons.llama.fi/balancer-v2.png",
    },
    {
        label: "Venus Core Pool",
        value: "venus-core-pool",
        logoURL: "https://icons.llama.fi/venus-core-pool.jpg",
    },
    {
        label: "Synthetix",
        value: "synthetix",
        logoURL: "https://icons.llama.fi/synthetix.png",
    },
    {
        label: "Portal",
        value: "portal",
        logoURL: "https://icons.llama.fi/portal.png",
    },
    {
        label: "Blast",
        value: "blast",
        logoURL: "https://icons.llama.fi/blast.png",
    },
    {
        label: "Frax Ether",
        value: "frax-ether",
        logoURL: "https://icons.llama.fi/frax-ether.jpg",
    },
    {
        label: "Avalanche Core Bridge",
        value: "avalanche-core-bridge",
        logoURL: "https://icons.llama.fi/avalanche-core-bridge.jpg",
    },
    {
        label: "zkSync Era txBridge",
        value: "zksync-era-txbridge",
        logoURL: "https://icons.llama.fi/zksync-era-txbridge.jpg",
    },
    {
        label: "MaskEX",
        value: "maskex",
        logoURL: "https://icons.llama.fi/maskex.jpg",
    },
    {
        label: "Base Bridge",
        value: "base-bridge",
        logoURL: "https://icons.llama.fi/base-bridge.jpg",
    },
    {
        label: "Korbit",
        value: "korbit",
        logoURL: "https://icons.llama.fi/korbit.jpg",
    },
    {
        label: "Coinbase Wrapped Staked ETH",
        value: "coinbase-wrapped-staked-eth",
        logoURL: "https://icons.llama.fi/coinbase-wrapped-staked-eth.png",
    },
    {
        label: "Jito",
        value: "jito",
        logoURL: "https://icons.llama.fi/jito.png",
    },
    {
        label: "xDAI Stake Bridge",
        value: "xdai-stake-bridge",
        logoURL: "https://icons.llama.fi/xdai-stake.png",
    },
    {
        label: "Marinade Liquid Staking",
        value: "marinade-liquid-staking",
        logoURL: "https://icons.llama.fi/marinade-finance.jpg",
    },
    {
        label: "Aura",
        value: "aura",
        logoURL: "https://icons.llama.fi/aura.png",
    },
    {
        label: "Prisma Finance",
        value: "prisma-finance",
        logoURL: "https://icons.llama.fi/prisma-finance.jpg",
    },
    {
        label: "hBTC",
        value: "hbtc",
        logoURL: "https://icons.llama.fi/hbtc.jpg",
    },
    {
        label: "GMX V1",
        value: "gmx-v1",
        logoURL: "https://icons.llama.fi/gmx-v1.png",
    },
    {
        label: "Radiant V2",
        value: "radiant-v2",
        logoURL: "https://icons.llama.fi/radiant.png",
    },
    {
        label: "Stargate",
        value: "stargate",
        logoURL: "https://icons.llama.fi/stargate.png",
    },
    {
        label: "dYdX",
        value: "dydx",
        logoURL: "https://icons.llama.fi/dydx.jpg",
    },
    {
        label: "Yearn Finance",
        value: "yearn-finance",
        logoURL: "https://icons.llama.fi/yearn-finance.jpg",
    },
    {
        label: "PancakeSwap AMM V3",
        value: "pancakeswap-amm-v3",
        logoURL: "https://icons.llama.fi/pancakeswap-amm-v3.jpg",
    },
    {
        label: "Thorchain",
        value: "thorchain",
        logoURL: "https://icons.llama.fi/thorchain.jpg",
    },
    {
        label: "Lybra V2",
        value: "lybra-v2",
        logoURL: "https://icons.llama.fi/lybra-v2.jpg",
    },
    {
        label: "Morpho Aave",
        value: "morpho-aave",
        logoURL: "https://icons.llama.fi/morpho.png",
    },
    {
        label: "Tornado Cash",
        value: "tornado-cash",
        logoURL: "https://icons.llama.fi/tornado-cash.jpg",
    },
    {
        label: "SushiSwap",
        value: "sushiswap",
        logoURL: "https://icons.llama.fi/sushiswap.png",
    },
    {
        label: "Nexo",
        value: "nexo",
        logoURL: "https://icons.llama.fi/nexo.png",
    },
    {
        label: "WEMIX.FI Staking",
        value: "wemix.fi-staking",
        logoURL: "https://icons.llama.fi/wemix.fi-staking.jpg",
    },
    {
        label: "Nexus Mutual",
        value: "nexus-mutual",
        logoURL: "https://icons.llama.fi/nexus-mutual.png",
    },
    {
        label: "crvUSD",
        value: "crvusd",
        logoURL: "https://icons.llama.fi/crvusd.jpg",
    },
    {
        label: "UNCX Network V2",
        value: "uncx-network-v2",
        logoURL: "https://icons.llama.fi/uncx-network-v2.png",
    },
    {
        label: "EigenLayer",
        value: "eigenlayer",
        logoURL: "https://icons.llama.fi/eigenlayer.png",
    },
    {
        label: "SUNSwap V1",
        value: "sunswap-v1",
        logoURL: "https://icons.llama.fi/sunswap-v1.jpg",
    },
    {
        label: "Pendle",
        value: "pendle",
        logoURL: "https://icons.llama.fi/pendle.jpg",
    },
    {
        label: "Coinwind",
        value: "coinwind",
        logoURL: "https://icons.llama.fi/coinwind.png",
    },
    {
        label: "Mantle Bridge",
        value: "mantle-bridge",
        logoURL: "https://icons.llama.fi/mantle-bridge.jpg",
    },
    {
        label: "Stader",
        value: "stader",
        logoURL: "https://icons.llama.fi/stader.jpg",
    },
    {
        label: "Silo Finance",
        value: "silo-finance",
        logoURL: "https://icons.llama.fi/silo-finance.png",
    },
    {
        label: "StakeWise",
        value: "stakewise",
        logoURL: "https://icons.llama.fi/stakewise.png",
    },
    {
        label: "Marinade Native",
        value: "marinade-native",
        logoURL: "https://icons.llama.fi/marinade-finance.jpg",
    },
    {
        label: "Lightning Network",
        value: "lightning-network",
        logoURL: "https://icons.llama.fi/lightning-network.png",
    },
    {
        label: "Ondo Finance",
        value: "ondo-finance",
        logoURL: "https://icons.llama.fi/ondo-finance.png",
    },
    {
        label: "GMX V2",
        value: "gmx-v2",
        logoURL: "https://icons.llama.fi/gmx-v2.png",
    },
    {
        label: "PinkSale",
        value: "pinksale",
        logoURL: "https://icons.llama.fi/pinksale.png",
    },
    {
        label: "Morpho AaveV3",
        value: "morpho-aavev3",
        logoURL: "https://icons.llama.fi/morpho.png",
    },
    {
        label: "VVS Standard",
        value: "vvs-standard",
        logoURL: "https://icons.llama.fi/vvs-standard.jpg",
    },
    {
        label: "Phemex",
        value: "phemex",
        logoURL: "https://icons.llama.fi/phemex.jpg",
    },
    {
        label: "Benqi Lending",
        value: "benqi-lending",
        logoURL: "https://icons.llama.fi/benqi-lending.jpg",
    },
    {
        label: "Fraxlend",
        value: "fraxlend",
        logoURL: "https://icons.llama.fi/frax.jpg",
    },
    {
        label: "Beefy",
        value: "beefy",
        logoURL: "https://icons.llama.fi/beefy.png",
    },
    {
        label: "Starknet Bridge",
        value: "starknet-bridge",
        logoURL: "https://icons.llama.fi/starknet-bridge.png",
    },
    {
        label: "Arrakis V1",
        value: "arrakis-v1",
        logoURL: "https://icons.llama.fi/arrakis-v1.jpg",
    },
    {
        label: "Chainge Finance",
        value: "chainge-finance",
        logoURL: "https://icons.llama.fi/chainge-finance.png",
    },
    {
        label: "Benqi Staked Avax",
        value: "benqi-staked-avax",
        logoURL: "https://icons.llama.fi/benqi-staked-avax.png",
    },
    {
        label: "Axelar",
        value: "axelar",
        logoURL: "https://icons.llama.fi/axelar.jpg",
    },
    {
        label: "Multichain",
        value: "multichain",
        logoURL: "https://icons.llama.fi/multichain.jpg",
    },
    {
        label: "marginfi Lending",
        value: "marginfi-lending",
        logoURL: "https://icons.llama.fi/marginfi.jpg",
    },
    {
        label: "Velodrome V2",
        value: "velodrome-v2",
        logoURL: "https://icons.llama.fi/velodrome-v2.png",
    },
    {
        label: "Solend",
        value: "solend",
        logoURL: "https://icons.llama.fi/solend.png",
    },
    {
        label: "Abracadabra",
        value: "abracadabra",
        logoURL: "https://icons.llama.fi/abracadabra.svg",
    },
    {
        label: "Balancer V1",
        value: "balancer-v1",
        logoURL: "https://icons.llama.fi/balancer-v1.png",
    },
    {
        label: "Tectonic",
        value: "tectonic",
        logoURL: "https://icons.llama.fi/tectonic.png",
    },
    {
        label: "Orbit Bridge",
        value: "orbit-bridge",
        logoURL: "https://icons.llama.fi/orbit-bridge.png",
    },
    {
        label: "Linea Bridge",
        value: "linea-bridge",
        logoURL: "https://icons.llama.fi/linea-bridge.jpg",
    },
    {
        label: "Enzyme Finance",
        value: "enzyme-finance",
        logoURL: "https://icons.llama.fi/enzyme-finance.jpg",
    },
    {
        label: "Osmosis DEX",
        value: "osmosis-dex",
        logoURL: "https://icons.llama.fi/osmosis-dex.jpg",
    },
    {
        label: "Gamma",
        value: "gamma",
        logoURL: "https://icons.llama.fi/gamma.jpg",
    },
    {
        label: "MatrixDock",
        value: "matrixdock",
        logoURL: "https://icons.llama.fi/matrixdock.png",
    },
    {
        label: "Polygon zkEVM Bridge",
        value: "polygon-zkevm-bridge",
        logoURL: "https://icons.llama.fi/polygon-zkevm-bridge.jpg",
    },
    {
        label: "Team Finance",
        value: "team-finance",
        logoURL: "https://icons.llama.fi/team-finance.png",
    },
    {
        label: "PulseX V1",
        value: "pulsex-v1",
        logoURL: "https://icons.llama.fi/pulsex.png",
    },
    {
        label: "UwU Lend",
        value: "uwu-lend",
        logoURL: "https://icons.llama.fi/uwu-lend.png",
    },
    {
        label: "Swell Liquid Staking",
        value: "swell-liquid-staking",
        logoURL: "https://icons.llama.fi/swell.png",
    },
    {
        label: "SUNSwap V2",
        value: "sunswap-v2",
        logoURL: "https://icons.llama.fi/sunswap-v2.jpg",
    },
    {
        label: "Synapse",
        value: "synapse",
        logoURL: "https://icons.llama.fi/synapse.png",
    },
    {
        label: "WOO X",
        value: "woo-x",
        logoURL: "https://icons.llama.fi/woo-x.jpg",
    },
    {
        label: "cBridge",
        value: "cbridge",
        logoURL: "https://icons.llama.fi/cbridge.jpg",
    },
    {
        label: "DefiChain DEX",
        value: "defichain-dex",
        logoURL: "https://icons.llama.fi/defichain.jpg",
    },
    {
        label: "Poly Network",
        value: "poly-network",
        logoURL: "https://icons.llama.fi/poly-network.png",
    },
    {
        label: "Kava Lend",
        value: "kava-lend",
        logoURL: "https://icons.llama.fi/kava-lend.png",
    },
    {
        label: "Katana DEX",
        value: "katana-dex",
        logoURL: "https://icons.llama.fi/katana.jpg",
    },
    {
        label: "Loopring",
        value: "loopring",
        logoURL: "https://icons.llama.fi/loopring.png",
    },
    {
        label: "RealT Tokens",
        value: "realt-tokens",
        logoURL: "https://icons.llama.fi/realt.png",
    },
    {
        label: "Kava Mint",
        value: "kava-mint",
        logoURL: "https://icons.llama.fi/kava-mint.png",
    },
    {
        label: "Penpie",
        value: "penpie",
        logoURL: "https://icons.llama.fi/penpie.jpg",
    },
    {
        label: "Across",
        value: "across",
        logoURL: "https://icons.llama.fi/across.png",
    },
    {
        label: "Hatom Lending",
        value: "hatom-lending",
        logoURL: "https://icons.llama.fi/hatom-lending.jpg",
    },
    {
        label: "Orca",
        value: "orca",
        logoURL: "https://icons.llama.fi/orca.jpg",
    },
    {
        label: "Metis Bridge",
        value: "metis-bridge",
        logoURL: "https://icons.llama.fi/metis-bridge.jpg",
    },
    {
        label: "Set Protocol",
        value: "set-protocol",
        logoURL: "https://icons.llama.fi/set-protocol.png",
    },
    {
        label: "Origin Ether",
        value: "origin-ether",
        logoURL: "https://icons.llama.fi/origin-ether.png",
    },
    {
        label: "KlaySwap",
        value: "klayswap",
        logoURL: "https://icons.llama.fi/klayswap.jpg",
    },
    {
        label: "Gravity Bridge",
        value: "gravity-bridge",
        logoURL: "https://icons.llama.fi/gravity-bridge.jpg",
    },
    {
        label: "CIAN",
        value: "cian",
        logoURL: "https://icons.llama.fi/cian.png",
    },
    {
        label: "Sushi BentoBox",
        value: "sushi-bentobox",
        logoURL: "https://icons.llama.fi/sushi-bentobox.png",
    },
    {
        label: "Mento",
        value: "mento",
        logoURL: "https://icons.llama.fi/mento.png",
    },
    {
        label: "GLIF",
        value: "glif",
        logoURL: "https://icons.llama.fi/glif.png",
    },
    {
        label: "Flamincome",
        value: "flamincome",
        logoURL: "https://icons.llama.fi/flamincome.png",
    },
    {
        label: "Liquid Collective",
        value: "liquid-collective",
        logoURL: "https://icons.llama.fi/liquid-collective.jpg",
    },
    {
        label: "StakeDAO",
        value: "stakedao",
        logoURL: "https://icons.llama.fi/stakedao.jpg",
    },
    {
        label: "DefiChain Loans",
        value: "defichain-loans",
        logoURL: "https://icons.llama.fi/defichain.jpg",
    },
    {
        label: "Camelot V3",
        value: "camelot-v3",
        logoURL: "https://icons.llama.fi/camelot-v3.png",
    },
    {
        label: "Blur Bids",
        value: "blur-bids",
        logoURL: "https://icons.llama.fi/blur-bids.png",
    },
    {
        label: "Inverse Finance FiRM",
        value: "inverse-finance-firm",
        logoURL: "https://icons.llama.fi/inverse-finance-firm.jpg",
    },
    {
        label: "Joe V2.1",
        value: "joe-v2.1",
        logoURL: "https://icons.llama.fi/joe-v2.jpg",
    },
    {
        label: "Coinsquare",
        value: "coinsquare",
        logoURL: "https://icons.llama.fi/coinsquare.jpg",
    },
    {
        label: "Equilibria",
        value: "equilibria",
        logoURL: "https://icons.llama.fi/equilibria.png",
    },
    {
        label: "Ankr",
        value: "ankr",
        logoURL: "https://icons.llama.fi/ankr.jpg",
    },
    {
        label: "Bwatch",
        value: "bwatch",
        logoURL: "https://icons.llama.fi/bwatch.png",
    },
    {
        label: "Hatom Liquid Staking",
        value: "hatom-liquid-staking",
        logoURL: "https://icons.llama.fi/hatom-liquid-staking.jpg",
    },
    {
        label: "Frax Swap",
        value: "frax-swap",
        logoURL: "https://icons.llama.fi/frax.jpg",
    },
    {
        label: "Indigo",
        value: "indigo",
        logoURL: "https://icons.llama.fi/indigo.png",
    },
    {
        label: "MUX Protocol",
        value: "mux-protocol",
        logoURL: "https://icons.llama.fi/mux-protocol.png",
    },
    {
        label: "Aerodrome",
        value: "aerodrome",
        logoURL: "https://icons.llama.fi/aerodrome.png",
    },
    {
        label: "Index Coop",
        value: "index-coop",
        logoURL: "https://icons.llama.fi/index-coop.png",
    },
    {
        label: "Pando Leaf",
        value: "pando-leaf",
        logoURL: "https://icons.llama.fi/pando.png",
    },
    {
        label: "Homora V2",
        value: "homora-v2",
        logoURL: "https://icons.llama.fi/homora-v2.png",
    },
    {
        label: "tBTC",
        value: "tbtc",
        logoURL: "https://icons.llama.fi/tbtc.png",
    },
    {
        label: "MoneyOnChain",
        value: "moneyonchain",
        logoURL: "https://icons.llama.fi/moneyonchain.jpg",
    },
    {
        label: "Alchemix",
        value: "alchemix",
        logoURL: "https://icons.llama.fi/alchemix.jpg",
    },
    {
        label: "Stride",
        value: "stride",
        logoURL: "https://icons.llama.fi/stride.png",
    },
    {
        label: "Minswap",
        value: "minswap",
        logoURL: "https://icons.llama.fi/minswap.png",
    },
    {
        label: "Quickswap V3",
        value: "quickswap-v3",
        logoURL: "https://icons.llama.fi/quickswap-dex.jpg",
    },
    {
        label: "Concentrator",
        value: "concentrator",
        logoURL: "https://icons.llama.fi/concentrator.jpg",
    },
    {
        label: "xExchange",
        value: "xexchange",
        logoURL: "https://icons.llama.fi/ecxchange.png",
    },
    {
        label: "Raydium",
        value: "raydium",
        logoURL: "https://icons.llama.fi/raydium.jpg",
    },
    {
        label: "Hop Protocol",
        value: "hop-protocol",
        logoURL: "https://icons.llama.fi/hop-protocol.jpg",
    },
    {
        label: "MEV Protocol",
        value: "mev-protocol",
        logoURL: "https://icons.llama.fi/mev-protocol.png",
    },
    {
        label: "Quickswap Dex",
        value: "quickswap-dex",
        logoURL: "https://icons.llama.fi/quickswap-dex.jpg",
    },
    {
        label: "Flexa",
        value: "flexa",
        logoURL: "https://icons.llama.fi/flexa.png_small",
    },
    {
        label: "Sommelier",
        value: "sommelier",
        logoURL: "https://icons.llama.fi/sommelier.png",
    },
    {
        label: "gALGO Liquid Governance",
        value: "galgo-liquid-governance",
        logoURL: "https://icons.llama.fi/galgo-liquid-governance.png",
    },
    {
        label: "Bancor V3",
        value: "bancor-v3",
        logoURL: "https://icons.llama.fi/bancor.png",
    },
    {
        label: "SyncSwap",
        value: "syncswap",
        logoURL: "https://icons.llama.fi/syncswap.png",
    },
    {
        label: "BiSwap V2",
        value: "biswap-v2",
        logoURL: "https://icons.llama.fi/biswap-v2.jpg",
    },
    {
        label: "Hashnote USYC",
        value: "hashnote-usyc",
        logoURL: "https://icons.llama.fi/hashnote-usyc.png",
    },
    {
        label: "Parallel Liquid Crowdloan",
        value: "parallel-liquid-crowdloan",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "BendDAO Lending",
        value: "benddao-lending",
        logoURL: "https://icons.llama.fi/benddao-lending.png",
    },
    {
        label: "ether.fi",
        value: "ether.fi",
        logoURL: "https://icons.llama.fi/ether.fi.jpg",
    },
    {
        label: "Terra Bridge",
        value: "terra-bridge",
        logoURL: "https://icons.llama.fi/terra-bridge.png",
    },
    {
        label: "BackedFi",
        value: "backedfi",
        logoURL: "https://icons.llama.fi/backedfi.jpg",
    },
    {
        label: "Maya Protocol",
        value: "maya-protocol",
        logoURL: "https://icons.llama.fi/maya-protocol.jpg",
    },
    {
        label: "ApeX Protocol",
        value: "apex-protocol",
        logoURL: "https://icons.llama.fi/apex-protocol.png",
    },
    {
        label: "Kava Liquid",
        value: "kava-liquid",
        logoURL: "https://icons.llama.fi/kava-liquid.png",
    },
    {
        label: "Kava Earn",
        value: "kava-earn",
        logoURL: "https://icons.llama.fi/kava-earn.png",
    },
    {
        label: "Alpaca Leveraged Yield Farming",
        value: "alpaca-leveraged-yield-farming",
        logoURL: "https://icons.llama.fi/alpaca-leveraged-yield-farming.jpg",
    },
    {
        label: "sDAI",
        value: "sdai",
        logoURL: "https://icons.llama.fi/sdai.jpg",
    },
    {
        label: "APX Finance",
        value: "apx-finance",
        logoURL: "https://icons.llama.fi/apx-finance.png",
    },
    {
        label: "ParaSpace Lending V2",
        value: "paraspace-lending-v2",
        logoURL: "https://icons.llama.fi/paraspace-lending-v2.png",
    },
    {
        label: "Cetus",
        value: "cetus",
        logoURL: "https://icons.llama.fi/cetus.png",
    },
    {
        label: "Astroport",
        value: "astroport",
        logoURL: "https://icons.llama.fi/astroport.jpg",
    },
    {
        label: "Maple RWA",
        value: "maple-rwa",
        logoURL: "https://icons.llama.fi/maple-rwa.jpg",
    },
    {
        label: "Ghost",
        value: "ghost",
        logoURL: "https://icons.llama.fi/ghost.png",
    },
    {
        label: "Moonwell",
        value: "moonwell",
        logoURL: "https://icons.llama.fi/moonwell.png",
    },
    {
        label: "OKC Liquid Staking",
        value: "okc-liquid-staking",
        logoURL: "https://icons.llama.fi/okc-liquid-staking.jpg",
    },
    {
        label: "Helio Protocol",
        value: "helio-protocol",
        logoURL: "https://icons.llama.fi/helio-protocol.png",
    },
    {
        label: "Drift",
        value: "drift",
        logoURL: "https://icons.llama.fi/drift.jpg",
    },
    {
        label: "Elysium Bridge",
        value: "elysium-bridge",
        logoURL: "https://icons.llama.fi/elysium-bridge.jpg",
    },
    {
        label: "Tangible RWA",
        value: "tangible-rwa",
        logoURL: "https://icons.llama.fi/tangible-rwa.png",
    },
    {
        label: "Trader Joe DEX",
        value: "trader-joe-dex",
        logoURL: "https://icons.llama.fi/trader-joe.png",
    },
    {
        label: "Canto Dex",
        value: "canto-dex",
        logoURL: "https://icons.llama.fi/canto-dex.jpg",
    },
    {
        label: "EOS REX",
        value: "eos-rex",
        logoURL: "https://icons.llama.fi/eos-rex.png",
    },
    {
        label: "Maverick Protocol",
        value: "maverick-protocol",
        logoURL: "https://icons.llama.fi/maverick-protocol.jpg",
    },
    {
        label: "diva",
        value: "diva",
        logoURL: "https://icons.llama.fi/diva.png",
    },
    {
        label: "DxSale",
        value: "dxsale",
        logoURL: "https://icons.llama.fi/dxsale.png",
    },
    {
        label: "ZKSwap (ZKSync)",
        value: "zkswap-(zksync)",
        logoURL: "https://icons.llama.fi/zkswap-(zksync).jpg",
    },
    {
        label: "Bifrost Liquid Staking",
        value: "bifrost-liquid-staking",
        logoURL: "https://icons.llama.fi/bifrost-liquid-staking.png",
    },
    {
        label: "BendDAO APE Staking",
        value: "benddao-ape-staking",
        logoURL: "https://icons.llama.fi/benddao-ape-staking.png",
    },
    {
        label: "JPool",
        value: "jpool",
        logoURL: "https://icons.llama.fi/jpool.png",
    },
    {
        label: "BlazeStake",
        value: "blazestake",
        logoURL: "https://icons.llama.fi/blazestake.jpg",
    },
    {
        label: "Sonne Finance",
        value: "sonne-finance",
        logoURL: "https://icons.llama.fi/sonne-finance.jpg",
    },
    {
        label: "Gravita Protocol",
        value: "gravita-protocol",
        logoURL: "https://icons.llama.fi/gravita-protocol.png",
    },
    {
        label: "Unslashed",
        value: "unslashed",
        logoURL: "https://icons.llama.fi/unslashed.jpg",
    },
    {
        label: "Blur Lending",
        value: "blur-lending",
        logoURL: "https://icons.llama.fi/blur-lending.png",
    },
    {
        label: "Gearbox",
        value: "gearbox",
        logoURL: "https://icons.llama.fi/gearbox.jpg",
    },
    {
        label: "KLAYstation",
        value: "klaystation",
        logoURL: "https://icons.llama.fi/klaystation.png",
    },
    {
        label: "Tranchess Yield",
        value: "tranchess-yield",
        logoURL: "https://icons.llama.fi/tranchess-yield.png",
    },
    {
        label: "SaucerSwap",
        value: "saucerswap",
        logoURL: "https://icons.llama.fi/saucerswap.jpg",
    },
    {
        label: "Ad-Astra Bridge",
        value: "ad-astra-bridge",
        logoURL: "https://icons.llama.fi/ad-astra-bridge.png",
    },
    {
        label: "Scallop Lend",
        value: "scallop-lend",
        logoURL: "https://icons.llama.fi/scallop-lend.jpg",
    },
    {
        label: "ImmutableX",
        value: "immutablex",
        logoURL: "https://icons.llama.fi/immutablex.jpg",
    },
    {
        label: "Camelot V2",
        value: "camelot-v2",
        logoURL: "https://icons.llama.fi/camelot-v2.png",
    },
    {
        label: "NodeDAO",
        value: "nodedao",
        logoURL: "https://icons.llama.fi/nodedao.jpg",
    },
    {
        label: "friend.tech",
        value: "friend.tech",
        logoURL: "https://icons.llama.fi/friend.tech.jpg",
    },
    {
        label: "Agni Finance",
        value: "agni-finance",
        logoURL: "https://icons.llama.fi/agni-finance.jpg",
    },
    {
        label: "Gains Network",
        value: "gains-network",
        logoURL: "https://icons.llama.fi/gains-network.png",
    },
    {
        label: "Beethoven X",
        value: "beethoven-x",
        logoURL: "https://icons.llama.fi/beethoven-x.png",
    },
    {
        label: "HMX",
        value: "hmx",
        logoURL: "https://icons.llama.fi/hmx.jpg",
    },
    {
        label: "Meta Pool Near",
        value: "meta-pool-near",
        logoURL: "https://icons.llama.fi/meta-pool-near.png",
    },
    {
        label: "Vertex Protocol",
        value: "vertex-protocol",
        logoURL: "https://icons.llama.fi/vertex-protocol.jpg",
    },
    {
        label: "Angle",
        value: "angle",
        logoURL: "https://icons.llama.fi/angle.jpg",
    },
    {
        label: "SPL Governance",
        value: "spl-governance",
        logoURL: "https://icons.llama.fi/spl-governance.png",
    },
    {
        label: "Frax",
        value: "frax",
        logoURL: "https://icons.llama.fi/frax.jpg",
    },
    {
        label: "Flamingo Finance",
        value: "flamingo-finance",
        logoURL: "https://icons.llama.fi/flamingo-finance.jpg",
    },
    {
        label: "Synclub Staked BNB",
        value: "synclub-staked-bnb",
        logoURL: "https://icons.llama.fi/synclub-staked-bnb.jpg",
    },
    {
        label: "Tonstakers",
        value: "tonstakers",
        logoURL: "https://icons.llama.fi/tonstakers.jpg",
    },
    {
        label: "STFIL",
        value: "stfil",
        logoURL: "https://icons.llama.fi/stfil.png",
    },
    {
        label: "Vector Finance",
        value: "vector-finance",
        logoURL: "https://icons.llama.fi/vector-finance.png",
    },
    {
        label: "LiNEAR Protocol",
        value: "linear-protocol",
        logoURL: "https://icons.llama.fi/linear-protocol.png",
    },
    {
        label: "Liqwid",
        value: "liqwid",
        logoURL: "https://icons.llama.fi/liqwid.png",
    },
    {
        label: "Wombat Exchange",
        value: "wombat-exchange",
        logoURL: "https://icons.llama.fi/wombat-exchange.png",
    },
    {
        label: "RosSwap",
        value: "rosswap",
        logoURL: "https://icons.llama.fi/rosswap.jpg",
    },
    {
        label: "QiDao",
        value: "qidao",
        logoURL: "https://icons.llama.fi/qidao.jpg",
    },
    {
        label: "iZiSwap",
        value: "iziswap",
        logoURL: "https://icons.llama.fi/iziswap.png",
    },
    {
        label: "Idle",
        value: "idle",
        logoURL: "https://icons.llama.fi/idle.jpg",
    },
    {
        label: "Burrow",
        value: "burrow",
        logoURL: "https://icons.llama.fi/burrow.png",
    },
    {
        label: "Folks Finance Lending",
        value: "folks-finance-lending",
        logoURL: "https://icons.llama.fi/folks-finance-lending.png",
    },
    {
        label: "dForce",
        value: "dforce",
        logoURL: "https://icons.llama.fi/DF.svg",
    },
    {
        label: "Scroll Bridge",
        value: "scroll-bridge",
        logoURL: "https://icons.llama.fi/scroll-bridge.jpg",
    },
    {
        label: "Gyroscope Protocol",
        value: "gyroscope-protocol",
        logoURL: "https://icons.llama.fi/gyroscope-protocol.png",
    },
    {
        label: "Flux Finance",
        value: "flux-finance",
        logoURL: "https://icons.llama.fi/flux-finance.png",
    },
    {
        label: "Youves",
        value: "youves",
        logoURL: "https://icons.llama.fi/youves.png",
    },
    {
        label: "Bancor V2.1",
        value: "bancor-v2.1",
        logoURL: "https://icons.llama.fi/bancor.png",
    },
    {
        label: "Lofty",
        value: "lofty",
        logoURL: "https://icons.llama.fi/lofty.png",
    },
    {
        label: "MDEX",
        value: "mdex",
        logoURL: "https://icons.llama.fi/mdex.png",
    },
    {
        label: "CoinDCX",
        value: "coindcx",
        logoURL: "https://icons.llama.fi/coindcx.jpg",
    },
    {
        label: "dHEDGE",
        value: "dhedge",
        logoURL: "https://icons.llama.fi/dhedge.png",
    },
    {
        label: "DODO",
        value: "dodo",
        logoURL: "https://icons.llama.fi/dodo.png",
    },
    {
        label: "Acala Liquid Staking",
        value: "acala-liquid-staking",
        logoURL: "https://icons.llama.fi/acala-liquid-staking.png",
    },
    {
        label: "Frax FPI",
        value: "frax-fpi",
        logoURL: "https://icons.llama.fi/frax-fpi.png",
    },
    {
        label: "Tokemak",
        value: "tokemak",
        logoURL: "https://icons.llama.fi/tokemak.jpg",
    },
    {
        label: "Hyperliquid",
        value: "hyperliquid",
        logoURL: "https://icons.llama.fi/hyperliquid.png",
    },
    {
        label: "Reserve",
        value: "reserve",
        logoURL: "https://icons.llama.fi/reserve.jpg",
    },
    {
        label: "pNetwork",
        value: "pnetwork",
        logoURL: "https://icons.llama.fi/pnetwork.jpg",
    },
    {
        label: "Yield Yak Aggregator",
        value: "yield-yak-aggregator",
        logoURL: "https://icons.llama.fi/yield-yak-aggregator.png",
    },
    {
        label: "Badger DAO",
        value: "badger-dao",
        logoURL: "https://icons.llama.fi/badger-dao.jpg",
    },
    {
        label: "Flooring Protocol",
        value: "flooring-protocol",
        logoURL: "https://icons.llama.fi/flooring-protocol.jpg",
    },
    {
        label: "Reflexer",
        value: "reflexer",
        logoURL: "https://icons.llama.fi/reflexer.jpg",
    },
    {
        label: "Connext",
        value: "connext",
        logoURL: "https://icons.llama.fi/connext.png",
    },
    {
        label: "PayCash",
        value: "paycash",
        logoURL: "https://icons.llama.fi/paycash.png",
    },
    {
        label: "Aktionariat",
        value: "aktionariat",
        logoURL: "https://icons.llama.fi/aktionariat.png",
    },
    {
        label: "JPEG'd",
        value: "jpegd",
        logoURL: "https://icons.llama.fi/jpeg'd.png",
    },
    {
        label: "stake.link liquid",
        value: "stake.link-liquid",
        logoURL: "https://icons.llama.fi/stake.link-liquid.png",
    },
    {
        label: "PHUX",
        value: "phux",
        logoURL: "https://icons.llama.fi/phux.jpg",
    },
    {
        label: "THENA FUSION",
        value: "thena-fusion",
        logoURL: "https://icons.llama.fi/thena-fusion.jpg",
    },
    {
        label: "Range Protocol",
        value: "range-protocol",
        logoURL: "https://icons.llama.fi/range-protocol.jpg",
    },
    {
        label: "Solv Funds",
        value: "solv-funds",
        logoURL: "https://icons.llama.fi/solv-funds.png",
    },
    {
        label: "SmarDex",
        value: "smardex",
        logoURL: "https://icons.llama.fi/smardex.png",
    },
    {
        label: "BiSwap V3",
        value: "biswap-v3",
        logoURL: "https://icons.llama.fi/biswap-v3.jpg",
    },
    {
        label: "Arbitrum Nova Bridge",
        value: "arbitrum-nova-bridge",
        logoURL: "https://icons.llama.fi/arbitrum-nova-bridge.jpg",
    },
    {
        label: "Sovryn Zero",
        value: "sovryn-zero",
        logoURL: "https://icons.llama.fi/sovryn-zero.png",
    },
    {
        label: "Notional V2",
        value: "notional-v2",
        logoURL: "https://icons.llama.fi/notional-v2.jpg",
    },
    {
        label: "Acala LCDOT",
        value: "acala-lcdot",
        logoURL: "https://icons.llama.fi/acala-lcdot.jpg",
    },
    {
        label: "01",
        value: "01",
        logoURL: "https://icons.llama.fi/01.jpg",
    },
    {
        label: "Pangolin",
        value: "pangolin",
        logoURL: "https://icons.llama.fi/pangolin.png",
    },
    {
        label: "Vesper",
        value: "vesper",
        logoURL: "https://icons.llama.fi/vesper.jpg",
    },
    {
        label: "SpookySwap",
        value: "spookyswap",
        logoURL: "https://icons.llama.fi/spookyswap.jpg",
    },
    {
        label: "The Tokenized Bitcoin",
        value: "the-tokenized-bitcoin",
        logoURL: "https://icons.llama.fi/the-tokenized-bitcoin.png",
    },
    {
        label: "Ferro",
        value: "ferro",
        logoURL: "https://icons.llama.fi/ferro.png",
    },
    {
        label: "NeoBurger",
        value: "neoburger",
        logoURL: "https://icons.llama.fi/neoburger.jpg",
    },
    {
        label: "ShibaSwap",
        value: "shibaswap",
        logoURL: "https://icons.llama.fi/shibaswap.jpg",
    },
    {
        label: "ioTube",
        value: "iotube",
        logoURL: "https://icons.llama.fi/iotube.png",
    },
    {
        label: "uniETH",
        value: "unieth",
        logoURL: "https://icons.llama.fi/unieth.png",
    },
    {
        label: "Jones DAO",
        value: "jones-dao",
        logoURL: "https://icons.llama.fi/jones-dao.png",
    },
    {
        label: "BiFi",
        value: "bifi",
        logoURL: "https://icons.llama.fi/bifi.jpg",
    },
    {
        label: "RenVM",
        value: "renvm",
        logoURL: "https://icons.llama.fi/renvm.png",
    },
    {
        label: "Morpho Compound",
        value: "morpho-compound",
        logoURL: "https://icons.llama.fi/morpho-compound.png",
    },
    {
        label: "Canto Lending",
        value: "canto-lending",
        logoURL: "https://icons.llama.fi/canto-lending.jpg",
    },
    {
        label: "SUN.io",
        value: "sun.io",
        logoURL: "https://icons.llama.fi/sun.io.png",
    },
    {
        label: "Parallel Protocol",
        value: "parallel-protocol",
        logoURL: "https://icons.llama.fi/parallel-protocol.png",
    },
    {
        label: "Extra Finance",
        value: "extra-finance",
        logoURL: "https://icons.llama.fi/extra-finance.jpg",
    },
    {
        label: "Tezos Liquidity Baking",
        value: "tezos-liquidity-baking",
        logoURL: "https://icons.llama.fi/tezos-liquidity-baking.png",
    },
    {
        label: "B.Protocol",
        value: "b.protocol",
        logoURL: "https://icons.llama.fi/b.protocol.jpg",
    },
    {
        label: "USK",
        value: "usk",
        logoURL: "https://icons.llama.fi/usk.png",
    },
    {
        label: "Lybra V1",
        value: "lybra-v1",
        logoURL: "https://icons.llama.fi/lybra-v1.jpg",
    },
    {
        label: "Liqee",
        value: "liqee",
        logoURL: "https://icons.llama.fi/liqee.jpg",
    },
    {
        label: "Lodestar V1",
        value: "lodestar-v1",
        logoURL: "https://icons.llama.fi/lodestar-v1.png",
    },
    {
        label: "PulseX V2",
        value: "pulsex-v2",
        logoURL: "https://icons.llama.fi/pulsex.png",
    },
    {
        label: "Octus Bridge",
        value: "octus-bridge",
        logoURL: "https://icons.llama.fi/octus-bridge.jpg",
    },
    {
        label: "TruStake MATIC",
        value: "trustake-matic",
        logoURL: "https://icons.llama.fi/trustake-matic.png",
    },
    {
        label: "DefiBox",
        value: "defibox",
        logoURL: "https://icons.llama.fi/defibox.png",
    },
    {
        label: "SushiSwap V3",
        value: "sushiswap-v3",
        logoURL: "https://icons.llama.fi/sushiswap.png",
    },
    {
        label: "Outcome Finance",
        value: "outcome-finance",
        logoURL: "https://icons.llama.fi/outcome-finance.png",
    },
    {
        label: "Kamino Liquidity",
        value: "kamino-liquidity",
        logoURL: "https://icons.llama.fi/kamino-liquidity.jpg",
    },
    {
        label: "Vaultka",
        value: "vaultka",
        logoURL: "https://icons.llama.fi/vaultka.jpg",
    },
    {
        label: "NFTX",
        value: "nftx",
        logoURL: "https://icons.llama.fi/nftx.jpg",
    },
    {
        label: "Kleva Farm",
        value: "kleva-farm",
        logoURL: "https://icons.llama.fi/kleva-protocol.png",
    },
    {
        label: "LiquidSwap",
        value: "liquidswap",
        logoURL: "https://icons.llama.fi/liquidswap.jpg",
    },
    {
        label: "Parallel Lending",
        value: "parallel-lending",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "Strike",
        value: "strike",
        logoURL: "https://icons.llama.fi/strike.jpg",
    },
    {
        label: "NAVI Protocol",
        value: "navi-protocol",
        logoURL: "https://icons.llama.fi/navi-protocol.jpg",
    },
    {
        label: "Amnis Finance",
        value: "amnis-finance",
        logoURL: "https://icons.llama.fi/amnis-finance.jpg",
    },
    {
        label: "Acala Euphrates",
        value: "acala-euphrates",
        logoURL: "https://icons.llama.fi/acala-euphrates.png",
    },
    {
        label: "Pando Rings",
        value: "pando-rings",
        logoURL: "https://icons.llama.fi/pando.png",
    },
    {
        label: "Fastex",
        value: "fastex",
        logoURL: "https://icons.llama.fi/fastex.jpg",
    },
    {
        label: "ALEX",
        value: "alex",
        logoURL: "https://icons.llama.fi/alex.png",
    },
    {
        label: "ParaSpace APE Staking V2",
        value: "paraspace-ape-staking-v2",
        logoURL: "https://icons.llama.fi/paraspace-ape-staking-v2.png",
    },
    {
        label: "ChainPort",
        value: "chainport",
        logoURL: "https://icons.llama.fi/chainport.png",
    },
    {
        label: "Meteora vaults",
        value: "meteora-vaults",
        logoURL: "https://icons.llama.fi/meteora.png",
    },
    {
        label: "ACryptoS",
        value: "acryptos",
        logoURL: "https://icons.llama.fi/acryptos.jpg",
    },
    {
        label: "PlutusDAO",
        value: "plutusdao",
        logoURL: "https://icons.llama.fi/plutusdao.jpg",
    },
    {
        label: "NEOPIN Staking",
        value: "neopin-staking",
        logoURL: "https://icons.llama.fi/neopin-staking.png",
    },
    {
        label: "Toros",
        value: "toros",
        logoURL: "https://icons.llama.fi/toros.png",
    },
    {
        label: "Stake.ly",
        value: "stake.ly",
        logoURL: "https://icons.llama.fi/stake.ly.png",
    },
    {
        label: "ICHI",
        value: "ichi",
        logoURL: "https://icons.llama.fi/ichi.png",
    },
    {
        label: "Serum",
        value: "serum",
        logoURL: "https://icons.llama.fi/serum.jpg",
    },
    {
        label: "Ambient",
        value: "ambient",
        logoURL: "https://icons.llama.fi/ambient.png",
    },
    {
        label: "Stafi",
        value: "stafi",
        logoURL: "https://icons.llama.fi/stafi.jpg",
    },
    {
        label: "Baklava Space",
        value: "baklava-space",
        logoURL: "https://icons.llama.fi/baklava-space.jpg",
    },
    {
        label: "rhino.fi",
        value: "rhino.fi",
        logoURL: "https://icons.llama.fi/rhino.fi.jpg",
    },
    {
        label: "sICX",
        value: "sicx",
        logoURL: "https://icons.llama.fi/sicx.png",
    },
    {
        label: "Djed Stablecoin",
        value: "djed-stablecoin",
        logoURL: "https://icons.llama.fi/djed-stablecoin.jpg",
    },
    {
        label: "Iron Bank",
        value: "iron-bank",
        logoURL: "https://icons.llama.fi/iron-bank.svg",
    },
    {
        label: "Sovryn Dex",
        value: "sovryn-dex",
        logoURL: "https://icons.llama.fi/sovryn-dex.png",
    },
    {
        label: "NFTfi",
        value: "nftfi",
        logoURL: "https://icons.llama.fi/nftfi.png",
    },
    {
        label: "ArthSwap",
        value: "arthswap",
        logoURL: "https://icons.llama.fi/arthswap.png",
    },
    {
        label: "Metronome Synth",
        value: "metronome-synth",
        logoURL: "https://icons.llama.fi/metronome-synth.jpg",
    },
    {
        label: "REX Staking",
        value: "rex-staking",
        logoURL: "https://icons.llama.fi/rex-staking.jpg",
    },
    {
        label: "Optim Finance",
        value: "optim-finance",
        logoURL: "https://icons.llama.fi/optim-finance.jpg",
    },
    {
        label: "AAVE V1",
        value: "aave-v1",
        logoURL: "https://icons.llama.fi/aave-v1.jpg",
    },
    {
        label: "DeltaPrime",
        value: "deltaprime",
        logoURL: "https://icons.llama.fi/deltaprime.jpg",
    },
    {
        label: "Astarter Launch",
        value: "astarter-launch",
        logoURL: "https://icons.llama.fi/astarter-launch.jpg",
    },
    {
        label: "Keep3r Network",
        value: "keep3r-network",
        logoURL: "https://icons.llama.fi/keep3r-network.jpg",
    },
    {
        label: "Pirex",
        value: "pirex",
        logoURL: "https://icons.llama.fi/pirex.png",
    },
    {
        label: "W3swap",
        value: "w3swap",
        logoURL: "https://icons.llama.fi/w3swap.jpg",
    },
    {
        label: "Mountain Protocol",
        value: "mountain-protocol",
        logoURL: "https://icons.llama.fi/mountain-protocol.png",
    },
    {
        label: "Origin Dollar",
        value: "origin-dollar",
        logoURL: "https://icons.llama.fi/origin-dollar.png",
    },
    {
        label: "Ref Finance",
        value: "ref-finance",
        logoURL: "https://icons.llama.fi/ref-finance.jpg",
    },
    {
        label: "MuesliSwap",
        value: "muesliswap",
        logoURL: "https://icons.llama.fi/muesliswap.jpg",
    },
    {
        label: "Acala Dollar",
        value: "acala-dollar",
        logoURL: "https://icons.llama.fi/acala-dollar-(ausd).png",
    },
    {
        label: "Equation",
        value: "equation",
        logoURL: "https://icons.llama.fi/equation.jpg",
    },
    {
        label: "Swappi",
        value: "swappi",
        logoURL: "https://icons.llama.fi/swappi.png",
    },
    {
        label: "Aevo",
        value: "aevo",
        logoURL: "https://icons.llama.fi/aevo.jpg",
    },
    {
        label: "Ribbon",
        value: "ribbon",
        logoURL: "https://icons.llama.fi/ribbon-finance.png",
    },
    {
        label: "GETH",
        value: "geth",
        logoURL: "https://icons.llama.fi/geth.png",
    },
    {
        label: "Railgun",
        value: "railgun",
        logoURL: "https://icons.llama.fi/railgun.jpg",
    },
    {
        label: "CaviarNine LSU Pool",
        value: "caviarnine-lsu-pool",
        logoURL: "https://icons.llama.fi/caviarnine-lsu-pool.png",
    },
    {
        label: "MetaStreet V2",
        value: "metastreet-v2",
        logoURL: "https://icons.llama.fi/metastreet.png",
    },
    {
        label: "Injective Bridge",
        value: "injective-bridge",
        logoURL: "https://icons.llama.fi/injective.png",
    },
    {
        label: "Eris Protocol",
        value: "eris-protocol",
        logoURL: "https://icons.llama.fi/eris-protocol.jpg",
    },
    {
        label: "Level Finance",
        value: "level-finance",
        logoURL: "https://icons.llama.fi/level-finance.png",
    },
    {
        label: "IPOR",
        value: "ipor",
        logoURL: "https://icons.llama.fi/ipor.jpg",
    },
    {
        label: "FusionX V3",
        value: "fusionx-v3",
        logoURL: "https://icons.llama.fi/fusionx-v3.jpg",
    },
    {
        label: "Arrakis V2",
        value: "arrakis-v2",
        logoURL: "https://icons.llama.fi/arrakis-v2.jpg",
    },
    {
        label: "Belt Finance",
        value: "belt-finance",
        logoURL: "https://icons.llama.fi/belt-finance.png",
    },
    {
        label: "HydraDX",
        value: "hydradx",
        logoURL: "https://icons.llama.fi/hydradx.png",
    },
    {
        label: "Radpie",
        value: "radpie",
        logoURL: "https://icons.llama.fi/radpie.png",
    },
    {
        label: "Tranchess Ether",
        value: "tranchess-ether",
        logoURL: "https://icons.llama.fi/tranchess-ether.png",
    },
    {
        label: "StellarX",
        value: "stellarx",
        logoURL: "https://icons.llama.fi/stellarx.jpg",
    },
    {
        label: "FIN",
        value: "fin",
        logoURL: "https://icons.llama.fi/fin.png",
    },
    {
        label: "KriyaDEX",
        value: "kriyadex",
        logoURL: "https://icons.llama.fi/kriyadex.png",
    },
    {
        label: "Mute.io",
        value: "mute.io",
        logoURL: "https://icons.llama.fi/mute.io.jpg",
    },
    {
        label: "Solo Top",
        value: "solo-top",
        logoURL: "https://icons.llama.fi/solo-top.png",
    },
    {
        label: "ExinPool",
        value: "exinpool",
        logoURL: "https://icons.llama.fi/exinpool.png",
    },
    {
        label: "Francium",
        value: "francium",
        logoURL: "https://icons.llama.fi/francium.png",
    },
    {
        label: "Algem",
        value: "algem",
        logoURL: "https://icons.llama.fi/algem.png",
    },
    {
        label: "Wing Finance",
        value: "wing-finance",
        logoURL: "https://icons.llama.fi/wing-finance.jpg",
    },
    {
        label: "WOOFi Earn",
        value: "woofi-earn",
        logoURL: "https://icons.llama.fi/woofi-earn.png",
    },
    {
        label: "Parallel Liquid Staking",
        value: "parallel-liquid-staking",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "Thala CDP",
        value: "thala-cdp",
        logoURL: "https://icons.llama.fi/thala-cdp.png",
    },
    {
        label: "Wrapped",
        value: "wrapped",
        logoURL: "https://icons.llama.fi/wrapped.jpg",
    },
    {
        label: "Tulip Protocol",
        value: "tulip-protocol",
        logoURL: "https://icons.llama.fi/tulip-protocol.png",
    },
    {
        label: "WOOFi Swap",
        value: "woofi-swap",
        logoURL: "https://icons.llama.fi/woofi.png",
    },
    {
        label: "Pact",
        value: "pact",
        logoURL: "https://icons.llama.fi/pact.png",
    },
    {
        label: "Swapscanner LSD",
        value: "swapscanner-lsd",
        logoURL: "https://icons.llama.fi/swapscanner.png",
    },
    {
        label: "Saber",
        value: "saber",
        logoURL: "https://icons.llama.fi/saber.jpg",
    },
    {
        label: "Arcade.xyz",
        value: "arcade.xyz",
        logoURL: "https://icons.llama.fi/arcade.xyz.jpg",
    },
    {
        label: "Nuls",
        value: "nuls",
        logoURL: "https://icons.llama.fi/nuls.jpg",
    },
    {
        label: "Yeti Finance",
        value: "yeti-finance",
        logoURL: "https://icons.llama.fi/yeti-finance.png",
    },
    {
        label: "Asymetrix Protocol",
        value: "asymetrix-protocol",
        logoURL: "https://icons.llama.fi/asymetrix-protocol.jpg",
    },
    {
        label: "Agave",
        value: "agave",
        logoURL: "https://icons.llama.fi/agave.jpg",
    },
    {
        label: "Sanctum",
        value: "sanctum",
        logoURL: "https://icons.llama.fi/sanctum.jpg",
    },
    {
        label: "Reaper Farm",
        value: "reaper-farm",
        logoURL: "https://icons.llama.fi/reaper-farm.jpg",
    },
    {
        label: "Aurora Plus",
        value: "aurora-plus",
        logoURL: "https://icons.llama.fi/aurora-plus.png",
    },
    {
        label: "Overnight USD+",
        value: "overnight-usd+",
        logoURL: "https://icons.llama.fi/overnight-usd+.png",
    },
    {
        label: "Dfyn Network",
        value: "dfyn-network",
        logoURL: "https://icons.llama.fi/dfyn-network.jpg",
    },
    {
        label: "Hegic",
        value: "hegic",
        logoURL: "https://icons.llama.fi/hegic.jpg",
    },
    {
        label: "ApeSwap AMM",
        value: "apeswap-amm",
        logoURL: "https://icons.llama.fi/apeswap-amm.jpg",
    },
    {
        label: "Helix",
        value: "helix",
        logoURL: "https://icons.llama.fi/helix.jpg",
    },
    {
        label: "Bifrost Liquid Crowdloan",
        value: "bifrost-liquid-crowdloan",
        logoURL: "https://icons.llama.fi/bifrost-liquid-crowdloan.jpg",
    },
    {
        label: "Umee",
        value: "umee",
        logoURL: "https://icons.llama.fi/umee.jpg",
    },
    {
        label: "SFT Protocol",
        value: "sft-protocol",
        logoURL: "https://icons.llama.fi/sft-protocol.jpg",
    },
    {
        label: "OpenEden T-Bills",
        value: "openeden-t-bills",
        logoURL: "https://icons.llama.fi/openeden-tbills.png",
    },
    {
        label: "Quarry",
        value: "quarry",
        logoURL: "https://icons.llama.fi/quarry.png",
    },
    {
        label: "OKCSwap",
        value: "okcswap",
        logoURL: "https://icons.llama.fi/okcswap.png",
    },
    {
        label: "Alpaca Finance 2.0",
        value: "alpaca-finance-2.0",
        logoURL: "https://icons.llama.fi/alpaca-finance-2.0.png",
    },
    {
        label: "Harvest Finance",
        value: "harvest-finance",
        logoURL: "https://icons.llama.fi/harvest-finance.png",
    },
    {
        label: "Swell Vault",
        value: "swell-vault",
        logoURL: "https://icons.llama.fi/swell.png",
    },
    {
        label: "Inverse Finance Frontier",
        value: "inverse-finance-frontier",
        logoURL: "https://icons.llama.fi/inverse-finance-frontier.jpg",
    },
    {
        label: "Tetu Earn",
        value: "tetu-earn",
        logoURL: "https://icons.llama.fi/tetu.svg",
    },
    {
        label: "LUSD ChickenBonds",
        value: "lusd-chickenbonds",
        logoURL: "https://icons.llama.fi/lusd-chickenbonds.png",
    },
    {
        label: "Juicebox V1",
        value: "juicebox-v1",
        logoURL: "https://icons.llama.fi/juicebox.png",
    },
    {
        label: "CLever",
        value: "clever",
        logoURL: "https://icons.llama.fi/clever.png",
    },
    {
        label: "Ouchi Finance",
        value: "ouchi-finance",
        logoURL: "https://icons.llama.fi/ouchi-finance.jpg",
    },
    {
        label: "SpartaDex",
        value: "spartadex",
        logoURL: "https://icons.llama.fi/spartadex.jpg",
    },
    {
        label: "WingRiders",
        value: "wingriders",
        logoURL: "https://icons.llama.fi/wingriders.png",
    },
    {
        label: "ABC Pool",
        value: "abc-pool",
        logoURL: "https://icons.llama.fi/abc-pool.png",
    },
    {
        label: "Aries Markets",
        value: "aries-markets",
        logoURL: "https://icons.llama.fi/aries-markets.jpg",
    },
    {
        label: "UXD",
        value: "uxd",
        logoURL: "https://icons.llama.fi/uxd.png",
    },
    {
        label: "Autofarm",
        value: "autofarm",
        logoURL: "https://icons.llama.fi/autofarm.png",
    },
    {
        label: "FlowX Finance",
        value: "flowx-finance",
        logoURL: "https://icons.llama.fi/flowx-finance.png",
    },
    {
        label: "Veno Finance",
        value: "veno-finance",
        logoURL: "https://icons.llama.fi/veno-finance.png",
    },
    {
        label: "Tinyman",
        value: "tinyman",
        logoURL: "https://icons.llama.fi/tinyman.jpg",
    },
    {
        label: "KlaySwap V3",
        value: "klayswap-v3",
        logoURL: "https://icons.llama.fi/klayswap-v3.jpg",
    },
    {
        label: "Okcoin",
        value: "okcoin",
        logoURL: "https://icons.llama.fi/okcoin.jpg",
    },
    {
        label: "marginfi LST",
        value: "marginfi-lst",
        logoURL: "https://icons.llama.fi/marginfi.jpg",
    },
    {
        label: "Clipper",
        value: "clipper",
        logoURL: "https://icons.llama.fi/clipper.jpg",
    },
    {
        label: "Kinza Finance",
        value: "kinza-finance",
        logoURL: "https://icons.llama.fi/kinza-finance.jpg",
    },
    {
        label: "bemo",
        value: "bemo",
        logoURL: "https://icons.llama.fi/bemo.jpg",
    },
    {
        label: "ThalaSwap",
        value: "thalaswap",
        logoURL: "https://icons.llama.fi/thalaswap.png",
    },
    {
        label: "Aftermath AMM",
        value: "aftermath-amm",
        logoURL: "https://icons.llama.fi/aftermath-amm.jpg",
    },
    {
        label: "Kinetix Derivatives",
        value: "kinetix-derivatives",
        logoURL: "https://icons.llama.fi/kinetix-derivatives.png",
    },
    {
        label: "Ramses V2",
        value: "ramses-v2",
        logoURL: "https://icons.llama.fi/ramses-exchange.jpg",
    },
    {
        label: "Lyra",
        value: "lyra",
        logoURL: "https://icons.llama.fi/lyra.jpg",
    },
    {
        label: "Thetanuts Finance",
        value: "thetanuts-finance",
        logoURL: "https://icons.llama.fi/thetanuts-finance.png",
    },
    {
        label: "Llama Airforce",
        value: "llama-airforce",
        logoURL: "https://icons.llama.fi/llama-airforce.png",
    },
    {
        label: "JediSwap",
        value: "jediswap",
        logoURL: "https://icons.llama.fi/jediswap.jpg",
    },
    {
        label: "Kamino Lend",
        value: "kamino-lend",
        logoURL: "https://icons.llama.fi/kamino.jpg",
    },
    {
        label: "Opyn Gamma",
        value: "opyn-gamma",
        logoURL: "https://icons.llama.fi/opyn-gamma.jpg",
    },
    {
        label: "Ethos Reserve",
        value: "ethos-reserve",
        logoURL: "https://icons.llama.fi/ethos-reserve.jpg",
    },
    {
        label: "CREAM Lending",
        value: "cream-lending",
        logoURL: "https://icons.llama.fi/cream-finance.png",
    },
    {
        label: "Spool V1",
        value: "spool-v1",
        logoURL: "https://icons.llama.fi/spool-v1.jpg",
    },
    {
        label: "FlokiFi Locker",
        value: "flokifi-locker",
        logoURL: "https://icons.llama.fi/flokifi-locker.jpg",
    },
    {
        label: "RealT RMM Marketplace",
        value: "realt-rmm-marketplace",
        logoURL: "https://icons.llama.fi/realt-rmm-marketplace.png",
    },
    {
        label: "Dolomite",
        value: "dolomite",
        logoURL: "https://icons.llama.fi/dolomite.jpg",
    },
    {
        label: "Spectrum Finance",
        value: "spectrum-finance",
        logoURL: "https://icons.llama.fi/spectrum-finance.png",
    },
    {
        label: "BitVenus",
        value: "bitvenus",
        logoURL: "https://icons.llama.fi/bitvenus.jpg",
    },
    {
        label: "Filet Finance",
        value: "filet-finance",
        logoURL: "https://icons.llama.fi/filet-finance.png",
    },
    {
        label: "ShadeLend",
        value: "shadelend",
        logoURL: "https://icons.llama.fi/shadelend.jpg",
    },
    {
        label: "Meter Passport",
        value: "meter-passport",
        logoURL: "https://icons.llama.fi/meter-passport.jpg",
    },
    {
        label: "Perpetual Protocol",
        value: "perpetual-protocol",
        logoURL: "https://icons.llama.fi/perpetual-protocol.png",
    },
    {
        label: "OpenBook",
        value: "openbook",
        logoURL: "https://icons.llama.fi/openbook.jpg",
    },
    {
        label: "GMD Protocol",
        value: "gmd-protocol",
        logoURL: "https://icons.llama.fi/gmd-protocol.jpg",
    },
    {
        label: "Polymarket",
        value: "polymarket",
        logoURL: "https://icons.llama.fi/polymarket.jpg",
    },
    {
        label: "Native",
        value: "native",
        logoURL: "https://icons.llama.fi/native.jpg",
    },
    {
        label: "Retro",
        value: "retro",
        logoURL: "https://icons.llama.fi/retro.png",
    },
    {
        label: "Linear Finance",
        value: "linear-finance",
        logoURL: "https://icons.llama.fi/linear-finance.jpg",
    },
    {
        label: "Uniswap V1",
        value: "uniswap-v1",
        logoURL: "https://icons.llama.fi/uniswap-v1.png",
    },
    {
        label: "Atrix",
        value: "atrix",
        logoURL: "https://icons.llama.fi/atrix.png",
    },
    {
        label: "MineFi",
        value: "minefi",
        logoURL: "https://icons.llama.fi/minefi.jpg",
    },
    {
        label: "Latoken",
        value: "latoken",
        logoURL: "https://icons.llama.fi/latoken.jpg",
    },
    {
        label: "Taiga Acala",
        value: "taiga-acala",
        logoURL: "https://icons.llama.fi/taiga-acala.png",
    },
    {
        label: "Bella Protocol",
        value: "bella-protocol",
        logoURL: "https://icons.llama.fi/bella-finance.jpg",
    },
    {
        label: "UNCX Network V3",
        value: "uncx-network-v3",
        logoURL: "https://icons.llama.fi/uncx-network-v3.png",
    },
    {
        label: "FLRFarm",
        value: "flrfarm",
        logoURL: "https://icons.llama.fi/flarefarm.png",
    },
    {
        label: "Nucleon",
        value: "nucleon",
        logoURL: "https://icons.llama.fi/nucleon.png",
    },
    {
        label: "FilFi",
        value: "filfi",
        logoURL: "https://icons.llama.fi/filfi.png",
    },
    {
        label: "Vela Exchange",
        value: "vela-exchange",
        logoURL: "https://icons.llama.fi/vela-exchange.png",
    },
    {
        label: "KTX.Finance",
        value: "ktx.finance",
        logoURL: "https://icons.llama.fi/ktx.finance.jpg",
    },
    {
        label: "9inch",
        value: "9inch",
        logoURL: "https://icons.llama.fi/9inch.jpg",
    },
    {
        label: "PancakeSwap StableSwap",
        value: "pancakeswap-stableswap",
        logoURL: "https://icons.llama.fi/pancakeswap-stableswap.jpg",
    },
    {
        label: "THENA V1",
        value: "thena-v1",
        logoURL: "https://icons.llama.fi/thena-v1.jpg",
    },
    {
        label: "SundaeSwap",
        value: "sundaeswap",
        logoURL: "https://icons.llama.fi/sundaeswap.jpg",
    },
    {
        label: "Amphor",
        value: "amphor",
        logoURL: "https://icons.llama.fi/amphor.jpg",
    },
    {
        label: "Bow",
        value: "bow",
        logoURL: "https://icons.llama.fi/bow.png",
    },
    {
        label: "RelayChain",
        value: "relaychain",
        logoURL: "https://icons.llama.fi/relaychain.jpg",
    },
    {
        label: "fx Protocol",
        value: "fx-protocol",
        logoURL: "https://icons.llama.fi/fx-protocol.jpg",
    },
    {
        label: "Bunni",
        value: "bunni",
        logoURL: "https://icons.llama.fi/bunni.png",
    },
    {
        label: "Mimo",
        value: "mimo",
        logoURL: "https://icons.llama.fi/mimo.jpg",
    },
    {
        label: "Turbos",
        value: "turbos",
        logoURL: "https://icons.llama.fi/turbos.png",
    },
    {
        label: "Green Planet",
        value: "green-planet",
        logoURL: "https://icons.llama.fi/green-planet.png",
    },
    {
        label: "Aztec",
        value: "aztec",
        logoURL: "https://icons.llama.fi/aztec.jpg",
    },
    {
        label: "BitMake",
        value: "bitmake",
        logoURL: "https://icons.llama.fi/bitmake.jpg",
    },
    {
        label: "TermFinance",
        value: "termfinance",
        logoURL: "https://icons.llama.fi/termfinance.png",
    },
    {
        label: "Opyn Squeeth",
        value: "opyn-squeeth",
        logoURL: "https://icons.llama.fi/opyn-squeeth.jpg",
    },
    {
        label: "Mars Protocol",
        value: "mars-protocol",
        logoURL: "https://icons.llama.fi/mars-protocol.png",
    },
    {
        label: "Trader Joe Lend",
        value: "trader-joe-lend",
        logoURL: "https://icons.llama.fi/trader-joe.png",
    },
    {
        label: "Ashswap",
        value: "ashswap",
        logoURL: "https://icons.llama.fi/ashswap.png",
    },
    {
        label: "ShadeSwap",
        value: "shadeswap",
        logoURL: "https://icons.llama.fi/shadeswap.jpg",
    },
    {
        label: "Lenfi",
        value: "lenfi",
        logoURL: "https://icons.llama.fi/lenfi.png",
    },
    {
        label: "HashKing",
        value: "hashking",
        logoURL: "https://icons.llama.fi/hashking.png",
    },
    {
        label: "Increment Swap",
        value: "increment-swap",
        logoURL: "https://icons.llama.fi/increment-swap.png",
    },
    {
        label: "FilDA",
        value: "filda",
        logoURL: "https://icons.llama.fi/filda.jpg",
    },
    {
        label: "Guard-Helmet",
        value: "guard-helmet",
        logoURL: "https://icons.llama.fi/guard-helmet.png",
    },
    {
        label: "Granary Finance",
        value: "granary-finance",
        logoURL: "https://icons.llama.fi/granary-finance.png",
    },
    {
        label: "cVault Finance",
        value: "cvault-finance",
        logoURL: "https://icons.llama.fi/cvault-finance.png",
    },
    {
        label: "DOOAR",
        value: "dooar",
        logoURL: "https://icons.llama.fi/dooar.png",
    },
    {
        label: "Velocore V2",
        value: "velocore-v2",
        logoURL: "https://icons.llama.fi/velocore-v2.png",
    },
    {
        label: "Quasar Vaults",
        value: "quasar-vaults",
        logoURL: "https://icons.llama.fi/quasar-vaults.png",
    },
    {
        label: "VyFinance Dex",
        value: "vyfinance-dex",
        logoURL: "https://icons.llama.fi/vyfinance.png",
    },
    {
        label: "Parrot Protocol",
        value: "parrot-protocol",
        logoURL: "https://icons.llama.fi/parrot-protocol.jpg",
    },
    {
        label: "mySwap",
        value: "myswap",
        logoURL: "https://icons.llama.fi/myswap.png",
    },
    {
        label: "MM Finance Cronos",
        value: "mm-finance-cronos",
        logoURL: "https://icons.llama.fi/mm-finance.jpg",
    },
    {
        label: "Honeyswap",
        value: "honeyswap",
        logoURL: "https://icons.llama.fi/honeyswap.png",
    },
    {
        label: "Toucan Protocol",
        value: "toucan-protocol",
        logoURL: "https://icons.llama.fi/toucan-protocol.jpg",
    },
    {
        label: "Wombex Finance",
        value: "wombex-finance",
        logoURL: "https://icons.llama.fi/wombex-finance.png",
    },
    {
        label: "DefiSaver",
        value: "defisaver",
        logoURL: "https://icons.llama.fi/defisaver.jpg",
    },
    {
        label: "Mango Markets V4",
        value: "mango-markets-v4",
        logoURL: "https://icons.llama.fi/mango-markets-v4.png",
    },
    {
        label: "Kine Finance",
        value: "kine-finance",
        logoURL: "https://icons.llama.fi/kine-finance.jpg",
    },
    {
        label: "Redacted Protocol",
        value: "redacted-protocol",
        logoURL: "https://icons.llama.fi/redacted-protocol.jpg",
    },
    {
        label: "CoinW",
        value: "coinw",
        logoURL: "https://icons.llama.fi/coinw.jpg",
    },
    {
        label: "LumenSwap",
        value: "lumenswap",
        logoURL: "https://icons.llama.fi/lumenswap.jpg",
    },
    {
        label: "UltronSwap",
        value: "ultronswap",
        logoURL: "https://icons.llama.fi/ultronswap.png",
    },
    {
        label: "KordFi",
        value: "kordfi",
        logoURL: "https://icons.llama.fi/kordfi.png",
    },
    {
        label: "OraiDEX",
        value: "oraidex",
        logoURL: "https://icons.llama.fi/oraidex.png",
    },
    {
        label: "FLRX",
        value: "flrx",
        logoURL: "https://icons.llama.fi/flarex.jpg",
    },
    {
        label: "CreamSwap",
        value: "creamswap",
        logoURL: "https://icons.llama.fi/creamswap.jpg",
    },
    {
        label: "NerveBridge",
        value: "nervebridge",
        logoURL: "https://icons.llama.fi/nervebridge.png",
    },
    {
        label: "Meshswap",
        value: "meshswap",
        logoURL: "https://icons.llama.fi/meshswap.png",
    },
    {
        label: "Exactly",
        value: "exactly",
        logoURL: "https://icons.llama.fi/exactly.jpg",
    },
    {
        label: "Wan Bridge",
        value: "wan-bridge",
        logoURL: "https://icons.llama.fi/wan-bridge.png",
    },
    {
        label: "Proxy",
        value: "proxy",
        logoURL: "https://icons.llama.fi/proxy.png",
    },
    {
        label: "Levana Perps",
        value: "levana-perps",
        logoURL: "https://icons.llama.fi/levana-perps.jpg",
    },
    {
        label: "Buttonwood",
        value: "buttonwood",
        logoURL: "https://icons.llama.fi/buttonwood.jpg",
    },
    {
        label: "pSTAKE Finance",
        value: "pstake-finance",
        logoURL: "https://icons.llama.fi/pstake-finance.png",
    },
    {
        label: "Kokonut Swap",
        value: "kokonut-swap",
        logoURL: "https://icons.llama.fi/kokonut-swap.jpg",
    },
    {
        label: "unshETH",
        value: "unsheth",
        logoURL: "https://icons.llama.fi/unsheth.png",
    },
    {
        label: "Timeswap V2",
        value: "timeswap-v2",
        logoURL: "https://icons.llama.fi/timeswap-v2.jpg",
    },
    {
        label: "SynFutures V2",
        value: "synfutures-v2",
        logoURL: "https://icons.llama.fi/synfutures.svg",
    },
    {
        label: "Sphere Finance",
        value: "sphere-finance",
        logoURL: "https://icons.llama.fi/sphere-finance.png",
    },
    {
        label: "Magpie",
        value: "magpie",
        logoURL: "https://icons.llama.fi/magpie.png",
    },
    {
        label: "Azuro",
        value: "azuro",
        logoURL: "https://icons.llama.fi/azuro.png",
    },
    {
        label: "Omm",
        value: "omm",
        logoURL: "https://icons.llama.fi/omm.png",
    },
    {
        label: "BaseSwap V2",
        value: "baseswap-v2",
        logoURL: "https://icons.llama.fi/baseswap-v2.jpg",
    },
    {
        label: "KyberSwap Classic",
        value: "kyberswap-classic",
        logoURL: "https://icons.llama.fi/kyberswap-classic.png",
    },
    {
        label: "Rari Capital",
        value: "rari-capital",
        logoURL: "https://icons.llama.fi/rari-capital.jpg",
    },
    {
        label: "Stella",
        value: "stella",
        logoURL: "https://icons.llama.fi/stella.png",
    },
    {
        label: "The Idols",
        value: "the-idols",
        logoURL: "https://icons.llama.fi/the-idols.png",
    },
    {
        label: "DSU Money",
        value: "dsu-money",
        logoURL: "https://icons.llama.fi/dsu-money.jpg",
    },
    {
        label: "Ease.org",
        value: "ease.org",
        logoURL: "https://icons.llama.fi/ease.org.png",
    },
    {
        label: "WePiggy",
        value: "wepiggy",
        logoURL: "https://icons.llama.fi/wepiggy.png",
    },
    {
        label: "Back Finance",
        value: "back-finance",
        logoURL: "https://icons.llama.fi/back-finance.jpg",
    },
    {
        label: "Everdex",
        value: "everdex",
        logoURL: "https://icons.llama.fi/everdex.png",
    },
    {
        label: "Ura Dex",
        value: "ura-dex",
        logoURL: "https://icons.llama.fi/ura-dex.png",
    },
    {
        label: "Ekubo",
        value: "ekubo",
        logoURL: "https://icons.llama.fi/ekubo.png",
    },
    {
        label: "Prime Protocol",
        value: "prime-protocol",
        logoURL: "https://icons.llama.fi/prime-protocol.jpg",
    },
    {
        label: "VoltSwap V2",
        value: "voltswap-v2",
        logoURL: "https://icons.llama.fi/voltswap-v2.png",
    },
    {
        label: "1inch Network",
        value: "1inch-network",
        logoURL: "https://icons.llama.fi/1inch-network.jpg",
    },
    {
        label: "Shell Protocol",
        value: "shell-protocol",
        logoURL: "https://icons.llama.fi/shell-protocol.jpg",
    },
    {
        label: "Maple",
        value: "maple",
        logoURL: "https://icons.llama.fi/maple.png",
    },
    {
        label: "SpaceFi zkSync",
        value: "spacefi-zksync",
        logoURL: "https://icons.llama.fi/spacefi.png",
    },
    {
        label: "zkLend",
        value: "zklend",
        logoURL: "https://icons.llama.fi/zklend.png",
    },
    {
        label: "Umami Finance",
        value: "umami-finance",
        logoURL: "https://icons.llama.fi/umami-finance.png",
    },
    {
        label: "Arkadiko",
        value: "arkadiko",
        logoURL: "https://icons.llama.fi/arkadiko.jpg",
    },
    {
        label: "UniFi Staking",
        value: "unifi-staking",
        logoURL: "https://icons.llama.fi/unifi-protocol-staking.jpg",
    },
    {
        label: "Sparkswap",
        value: "sparkswap",
        logoURL: "https://icons.llama.fi/sparkswap.jpg",
    },
    {
        label: "Xena Finance",
        value: "xena-finance",
        logoURL: "https://icons.llama.fi/xena-finance.jpg",
    },
    {
        label: "Karura Liquid Staking",
        value: "karura-liquid-staking",
        logoURL: "https://icons.llama.fi/karura-liquid-staking.jpg",
    },
    {
        label: "Horizon Protocol",
        value: "horizon-protocol",
        logoURL: "https://icons.llama.fi/horizon-protocol.png",
    },
    {
        label: "Phiat Protocol",
        value: "phiat-protocol",
        logoURL: "https://icons.llama.fi/phiat-protocol.png",
    },
    {
        label: "PoolTogether V4",
        value: "pooltogether-v4",
        logoURL: "https://icons.llama.fi/pooltogether-v4.png",
    },
    {
        label: "Port Finance",
        value: "port-finance",
        logoURL: "https://icons.llama.fi/port-finance.png",
    },
    {
        label: "Kaidex",
        value: "kaidex",
        logoURL: "https://icons.llama.fi/kaidex.png",
    },
    {
        label: "Orion Protocol",
        value: "orion-protocol",
        logoURL: "https://icons.llama.fi/orion-protocol.png",
    },
    {
        label: "WEMIX Full Range Deposit",
        value: "wemix-full-range-deposit",
        logoURL: "https://icons.llama.fi/wemix-full-range-deposit.jpg",
    },
    {
        label: "Bunny",
        value: "bunny",
        logoURL: "https://icons.llama.fi/bunny.jpg",
    },
    {
        label: "Hakka Finance",
        value: "hakka-finance",
        logoURL: "https://icons.llama.fi/hakka-finance.png",
    },
    {
        label: "White Whale Dex",
        value: "white-whale-dex",
        logoURL: "https://icons.llama.fi/white-whale.png",
    },
    {
        label: "VyFinance Vaults",
        value: "vyfinance-vaults",
        logoURL: "https://icons.llama.fi/vyfinance.png",
    },
    {
        label: "Fulcrom",
        value: "fulcrom",
        logoURL: "https://icons.llama.fi/fulcrom.jpg",
    },
    {
        label: "SiO2 Finance",
        value: "sio2-finance",
        logoURL: "https://icons.llama.fi/sio2-finance.png",
    },
    {
        label: "VanSwap",
        value: "vanswap",
        logoURL: "https://icons.llama.fi/vanswap.png",
    },
    {
        label: "Crystalvale",
        value: "crystalvale",
        logoURL: "https://icons.llama.fi/crystalvale.png",
    },
    {
        label: "ViteX",
        value: "vitex",
        logoURL: "https://icons.llama.fi/vitex.png",
    },
    {
        label: "ApertureSwap",
        value: "apertureswap",
        logoURL: "https://icons.llama.fi/apertureswap.jpg",
    },
    {
        label: "Perennial V2",
        value: "perennial-v2",
        logoURL: "https://icons.llama.fi/perennial-v2.jpg",
    },
    {
        label: "Orderly Network",
        value: "orderly-network",
        logoURL: "https://icons.llama.fi/orderly-network.jpg",
    },
    {
        label: "Allbridge",
        value: "allbridge",
        logoURL: "https://icons.llama.fi/allbridge.jpg",
    },
    {
        label: "Ellipsis Finance",
        value: "ellipsis-finance",
        logoURL: "https://icons.llama.fi/ellipsis-finance.jpg",
    },
    {
        label: "Solv V2",
        value: "solv-v2",
        logoURL: "https://icons.llama.fi/solv-v2.png",
    },
    {
        label: "AstridDAO",
        value: "astriddao",
        logoURL: "https://icons.llama.fi/astriddao.jpg",
    },
    {
        label: "Balanced",
        value: "balanced",
        logoURL: "https://icons.llama.fi/balanced.png",
    },
    {
        label: "Hubble",
        value: "hubble",
        logoURL: "https://icons.llama.fi/hubble.jpg",
    },
    {
        label: "Liquis",
        value: "liquis",
        logoURL: "https://icons.llama.fi/liquis.png",
    },
    {
        label: "Tortuga",
        value: "tortuga",
        logoURL: "https://icons.llama.fi/tortuga.png",
    },
    {
        label: "Bril Finance",
        value: "bril-finance",
        logoURL: "https://icons.llama.fi/bril-finance.jpg",
    },
    {
        label: "Gnosis Protocol v1",
        value: "gnosis-protocol-v1",
        logoURL: "https://icons.llama.fi/gnosis-protocol-v1.png",
    },
    {
        label: "DefiEdge",
        value: "defiedge",
        logoURL: "https://icons.llama.fi/defiedge.png",
    },
    {
        label: "Pika V4",
        value: "pika-v4",
        logoURL: "https://icons.llama.fi/pika-v4.png",
    },
    {
        label: "Pickle",
        value: "pickle",
        logoURL: "https://icons.llama.fi/pickle.svg",
    },
    {
        label: "Noah Swap",
        value: "noah-swap",
        logoURL: "https://icons.llama.fi/noah-swap.jpg",
    },
    {
        label: "BakerySwap",
        value: "bakeryswap",
        logoURL: "https://icons.llama.fi/bakeryswap.jpg",
    },
    {
        label: "Socean",
        value: "socean",
        logoURL: "https://icons.llama.fi/socean.png",
    },
    {
        label: "Meld Gold",
        value: "meld-gold",
        logoURL: "https://icons.llama.fi/meld-gold.jpg",
    },
    {
        label: "DeepLock",
        value: "deeplock",
        logoURL: "https://icons.llama.fi/deeplock.png",
    },
    {
        label: "KnightSwap Finance",
        value: "knightswap-finance",
        logoURL: "https://icons.llama.fi/knightswap-finance.png",
    },
    {
        label: "Metavault V3",
        value: "metavault-v3",
        logoURL: "https://icons.llama.fi/metavault-v3.png",
    },
    {
        label: "Hawksight",
        value: "hawksight",
        logoURL: "https://icons.llama.fi/hawksight.jpg",
    },
    {
        label: "WigoSwap",
        value: "wigoswap",
        logoURL: "https://icons.llama.fi/wigoswap.png",
    },
    {
        label: "Klever Exchange",
        value: "klever-exchange",
        logoURL: "https://icons.llama.fi/klever-exchange.jpg",
    },
    {
        label: "10KSwap",
        value: "10kswap",
        logoURL: "https://icons.llama.fi/10kswap.png",
    },
    {
        label: "STON.fi",
        value: "ston.fi",
        logoURL: "https://icons.llama.fi/ston.fi.png",
    },
    {
        label: "Interport Finance",
        value: "interport-finance",
        logoURL: "https://icons.llama.fi/interport-finance.png",
    },
    {
        label: "Avault",
        value: "avault",
        logoURL: "https://icons.llama.fi/avault.jpg",
    },
    {
        label: "Hord",
        value: "hord",
        logoURL: "https://icons.llama.fi/hord.jpg",
    },
    {
        label: "Premia V3",
        value: "premia-v3",
        logoURL: "https://icons.llama.fi/premia-v3.jpg",
    },
    {
        label: "Ethernity Chain",
        value: "ethernity-chain",
        logoURL: "https://icons.llama.fi/ethernity-chain.jpg",
    },
    {
        label: "Hermes Protocol",
        value: "hermes-protocol",
        logoURL: "https://icons.llama.fi/hermes-protocol.png",
    },
    {
        label: "stkd-SCRT",
        value: "stkd-scrt",
        logoURL: "https://icons.llama.fi/stkd-scrt.jpg",
    },
    {
        label: "Kurrency",
        value: "kurrency",
        logoURL: "https://icons.llama.fi/kurrency.png",
    },
    {
        label: "Polynomial Trade",
        value: "polynomial-trade",
        logoURL: "https://icons.llama.fi/polynomial-trade.png",
    },
    {
        label: "Bucket Protocol",
        value: "bucket-protocol",
        logoURL: "https://icons.llama.fi/bucket-protocol.jpg",
    },
    {
        label: "HOPE Collateral",
        value: "hope-collateral",
        logoURL: "https://icons.llama.fi/hope-collateral.jpg",
    },
    {
        label: "XY Finance",
        value: "xy-finance",
        logoURL: "https://icons.llama.fi/xy-finance.jpg",
    },
    {
        label: "GoGoPool",
        value: "gogopool",
        logoURL: "https://icons.llama.fi/gogopool.png",
    },
    {
        label: "MetalX Lending",
        value: "metalx-lending",
        logoURL: "https://icons.llama.fi/metalx-lending.png",
    },
    {
        label: "Steer Protocol",
        value: "steer-protocol",
        logoURL: "https://icons.llama.fi/steer-protocol.jpg",
    },
    {
        label: "Megaton Finance",
        value: "megaton-finance",
        logoURL: "https://icons.llama.fi/megaton-finance.png",
    },
    {
        label: "WAGMI",
        value: "wagmi",
        logoURL: "https://icons.llama.fi/wagmi.png",
    },
    {
        label: "Karura Dollar (kUSD)",
        value: "karura-dollar-(kusd)",
        logoURL: "https://icons.llama.fi/karura-dollar.jpg",
    },
    {
        label: "ClayStack",
        value: "claystack",
        logoURL: "https://icons.llama.fi/claystack.png",
    },
    {
        label: "Symbiosis",
        value: "symbiosis",
        logoURL: "https://icons.llama.fi/symbiosis.png",
    },
    {
        label: "ApeSwap Lending",
        value: "apeswap-lending",
        logoURL: "https://icons.llama.fi/apeswap-lending.jpg",
    },
    {
        label: "Seamless Protocol",
        value: "seamless-protocol",
        logoURL: "https://icons.llama.fi/seamless-protocol.jpg",
    },
    {
        label: "PHAME Protocol",
        value: "phame-protocol",
        logoURL: "https://icons.llama.fi/phame-protocol.jpg",
    },
    {
        label: "Venus Isolated Pools",
        value: "venus-isolated-pools",
        logoURL: "https://icons.llama.fi/venus.jpg",
    },
    {
        label: "TProtocol V2",
        value: "tprotocol-v2",
        logoURL: "https://icons.llama.fi/tprotocol.jpg",
    },
    {
        label: "Clearpool",
        value: "clearpool",
        logoURL: "https://icons.llama.fi/clearpool.png",
    },
    {
        label: "Archi Finance",
        value: "archi-finance",
        logoURL: "https://icons.llama.fi/archi-finance.png",
    },
    {
        label: "ShimmerSea",
        value: "shimmersea",
        logoURL: "https://icons.llama.fi/shimmersea.png",
    },
    {
        label: "Satori",
        value: "satori",
        logoURL: "https://icons.llama.fi/satori.jpg",
    },
    {
        label: "CaviarNine Shape Liquidity",
        value: "caviarnine-shape-liquidity",
        logoURL: "https://icons.llama.fi/caviarnine-shape-liquidity.png",
    },
    {
        label: "The Ennead Farm",
        value: "the-ennead-farm",
        logoURL: "https://icons.llama.fi/the-ennead-farm.jpg",
    },
    {
        label: "Goledo",
        value: "goledo",
        logoURL: "https://icons.llama.fi/goledo.jpg",
    },
    {
        label: "Astroport Classic",
        value: "astroport-classic",
        logoURL: "https://icons.llama.fi/astroport.jpg",
    },
    {
        label: "Mendi Finance",
        value: "mendi-finance",
        logoURL: "https://icons.llama.fi/mendi-finance.jpg",
    },
    {
        label: "B2B",
        value: "b2b",
        logoURL: "https://icons.llama.fi/backtobitcoin.jpg",
    },
    {
        label: "KiloEx",
        value: "kiloex",
        logoURL: "https://icons.llama.fi/kiloex.jpg",
    },
    {
        label: "Overnight DAI+",
        value: "overnight-dai+",
        logoURL: "https://icons.llama.fi/overnight-dai+.jpg",
    },
    {
        label: "CrossChain Bridge",
        value: "crosschain-bridge",
        logoURL: "https://icons.llama.fi/crosschain-bridge.svg",
    },
    {
        label: "LayerBank",
        value: "layerbank",
        logoURL: "https://icons.llama.fi/layerbank.jpg",
    },
    {
        label: "ZilSwap",
        value: "zilswap",
        logoURL: "https://icons.llama.fi/zilswap.jpg",
    },
    {
        label: "Nomiswap",
        value: "nomiswap",
        logoURL: "https://icons.llama.fi/nomiswap.png",
    },
    {
        label: "Larix",
        value: "larix",
        logoURL: "https://icons.llama.fi/larix.jpg",
    },
    {
        label: "Kolibri",
        value: "kolibri",
        logoURL: "https://icons.llama.fi/kolibri.png",
    },
    {
        label: "ParaSpace Lending V1",
        value: "paraspace-lending-v1",
        logoURL: "https://icons.llama.fi/paraspace-nft.jpg",
    },
    {
        label: "Gondi V1",
        value: "gondi-v1",
        logoURL: "https://icons.llama.fi/gondi-v1.png",
    },
    {
        label: "SharkSwap",
        value: "sharkswap",
        logoURL: "https://icons.llama.fi/sharkswap.png",
    },
    {
        label: "Alongside",
        value: "alongside",
        logoURL: "https://icons.llama.fi/alongside.png",
    },
    {
        label: "mStable CDP",
        value: "mstable-cdp",
        logoURL: "https://icons.llama.fi/mstable.png",
    },
    {
        label: "MM Optimizer",
        value: "mm-optimizer",
        logoURL: "https://icons.llama.fi/mm-optimizer.png",
    },
    {
        label: "Terraswap",
        value: "terraswap",
        logoURL: "https://icons.llama.fi/terraswap.png",
    },
    {
        label: "Solidly V3",
        value: "solidly-v3",
        logoURL: "https://icons.llama.fi/solidly-v3.png",
    },
    {
        label: "QuickPerps",
        value: "quickperps",
        logoURL: "https://icons.llama.fi/quickswap-dex.jpg",
    },
    {
        label: "Dyson",
        value: "dyson",
        logoURL: "https://icons.llama.fi/dyson.png",
    },
    {
        label: "NestFi",
        value: "nestfi",
        logoURL: "https://icons.llama.fi/nestfi.png",
    },
    {
        label: "Archimedes Finance",
        value: "archimedes-finance",
        logoURL: "https://icons.llama.fi/archimedes-finance.png",
    },
    {
        label: "Lifinity V1",
        value: "lifinity-v1",
        logoURL: "https://icons.llama.fi/lifinity-v1.jpg",
    },
    {
        label: "Erasure",
        value: "erasure",
        logoURL: "https://icons.llama.fi/erasure.png",
    },
    {
        label: "RabbitX",
        value: "rabbitx",
        logoURL: "https://icons.llama.fi/rabbitx.png",
    },
    {
        label: "WINR Protocol",
        value: "winr-protocol",
        logoURL: "https://icons.llama.fi/winr-protocol.jpg",
    },
    {
        label: "PsyOptions",
        value: "psyoptions",
        logoURL: "https://icons.llama.fi/psyoptions.png",
    },
    {
        label: "MugenFinance",
        value: "mugenfinance",
        logoURL: "https://icons.llama.fi/mugenfinance.jpg",
    },
    {
        label: "Moola Market",
        value: "moola-market",
        logoURL: "https://icons.llama.fi/moola-market.jpg",
    },
    {
        label: "Meter Liquid Staking",
        value: "meter-liquid-staking",
        logoURL: "https://icons.llama.fi/meter-liquid-staking.png",
    },
    {
        label: "DeFi Franc",
        value: "defi-franc",
        logoURL: "https://icons.llama.fi/defi-franc.jpg",
    },
    {
        label: "Increment Lending",
        value: "increment-lending",
        logoURL: "https://icons.llama.fi/increment-lending.png",
    },
    {
        label: "Velodrome V1",
        value: "velodrome-v1",
        logoURL: "https://icons.llama.fi/velodrome-v1.png",
    },
    {
        label: "Alpha",
        value: "alpha",
        logoURL: "https://icons.llama.fi/alpha.jpg",
    },
    {
        label: "Kokoa Finance",
        value: "kokoa-finance",
        logoURL: "https://icons.llama.fi/kokoa-finance.png",
    },
    {
        label: "BoringDAO",
        value: "boringdao",
        logoURL: "https://icons.llama.fi/boringdao.jpg",
    },
    {
        label: "Klayportal",
        value: "klayportal",
        logoURL: "https://icons.llama.fi/klayportal.png",
    },
    {
        label: "Tarot",
        value: "tarot",
        logoURL: "https://icons.llama.fi/tarot.jpg",
    },
    {
        label: "OmniBTC",
        value: "omnibtc",
        logoURL: "https://icons.llama.fi/omnibtc.png",
    },
    {
        label: "Zebra",
        value: "zebra",
        logoURL: "https://icons.llama.fi/zebra.png",
    },
    {
        label: "Dot Dot Finance",
        value: "dot-dot-finance",
        logoURL: "https://icons.llama.fi/dot-dot.png",
    },
    {
        label: "4Swap",
        value: "4swap",
        logoURL: "https://icons.llama.fi/pando.png",
    },
    {
        label: "BenSwap",
        value: "benswap",
        logoURL: "https://icons.llama.fi/benswap.jpg",
    },
    {
        label: "Plenty",
        value: "plenty",
        logoURL: "https://icons.llama.fi/plenty.png",
    },
    {
        label: "Interlay Collateral",
        value: "interlay-collateral",
        logoURL: "https://icons.llama.fi/interlay.png",
    },
    {
        label: "TempleDAO",
        value: "templedao",
        logoURL: "https://icons.llama.fi/temple-dao.png",
    },
    {
        label: "OpenLeverage",
        value: "openleverage",
        logoURL: "https://icons.llama.fi/openleverage.jpg",
    },
    {
        label: "Wrapped BNB",
        value: "wrapped-bnb",
        logoURL: "https://icons.llama.fi/wrapped-bnb.png",
    },
    {
        label: "Ceres Demeter",
        value: "ceres-demeter",
        logoURL: "https://icons.llama.fi/ceres-demeter.png",
    },
    {
        label: "Scale",
        value: "scale",
        logoURL: "https://icons.llama.fi/scale.png",
    },
    {
        label: "Dual Finance",
        value: "dual-finance",
        logoURL: "https://icons.llama.fi/dual-finance.png",
    },
    {
        label: "NetSwap",
        value: "netswap",
        logoURL: "https://icons.llama.fi/netswap.jpg",
    },
    {
        label: "Sunny",
        value: "sunny",
        logoURL: "https://icons.llama.fi/sunny.svg",
    },
    {
        label: "Ramses V1",
        value: "ramses-v1",
        logoURL: "https://icons.llama.fi/ramses-exchange.jpg",
    },
    {
        label: "WhaleEx",
        value: "whaleex",
        logoURL: "https://icons.llama.fi/whaleex.jpg",
    },
    {
        label: "Tomb Swap",
        value: "tomb-swap",
        logoURL: "https://icons.llama.fi/tomb-finance.jpg",
    },
    {
        label: "Rysk Finance",
        value: "rysk-finance",
        logoURL: "https://icons.llama.fi/rysk-finance.jpg",
    },
    {
        label: "Rook",
        value: "rook",
        logoURL: "https://icons.llama.fi/keeperdao.jpg",
    },
    {
        label: "Waterfall DeFi",
        value: "waterfall-defi",
        logoURL: "https://icons.llama.fi/waterfall-defi.png",
    },
    {
        label: "Impermax Finance",
        value: "impermax-finance",
        logoURL: "https://icons.llama.fi/impermax-finance.png",
    },
    {
        label: "Sovryn Lend",
        value: "sovryn-lend",
        logoURL: "https://icons.llama.fi/sovryn-lend.png",
    },
    {
        label: "DeDust",
        value: "dedust",
        logoURL: "https://icons.llama.fi/dedust.png",
    },
    {
        label: "Bolide",
        value: "bolide",
        logoURL: "https://icons.llama.fi/bolide.png",
    },
    {
        label: "ZKSwap",
        value: "zkswap",
        logoURL: "https://icons.llama.fi/zkswap.jpg",
    },
    {
        label: "InsurAce",
        value: "insurace",
        logoURL: "https://icons.llama.fi/insurace.jpg",
    },
    {
        label: "Teahouse Managed",
        value: "teahouse-managed",
        logoURL: "https://icons.llama.fi/teahouse-managed.jpg",
    },
    {
        label: "KlayBank",
        value: "klaybank",
        logoURL: "https://icons.llama.fi/klaybank.png",
    },
    {
        label: "Echidna Finance",
        value: "echidna-finance",
        logoURL: "https://icons.llama.fi/echidna.png",
    },
    {
        label: "WanSwap Dex",
        value: "wanswap-dex",
        logoURL: "https://icons.llama.fi/wanswap-dex.jpg",
    },
    {
        label: "HeliSwap",
        value: "heliswap",
        logoURL: "https://icons.llama.fi/heliswap.png",
    },
    {
        label: "PoolTogether V3",
        value: "pooltogether-v3",
        logoURL: "https://icons.llama.fi/pooltogether-v3.png",
    },
    {
        label: "Hidden Hand",
        value: "hidden-hand",
        logoURL: "https://icons.llama.fi/hidden-hand.jpg",
    },
    {
        label: "Tender Finance",
        value: "tender-finance",
        logoURL: "https://icons.llama.fi/tender-finance.png",
    },
    {
        label: "Depth",
        value: "depth",
        logoURL: "https://icons.llama.fi/depth.png",
    },
    {
        label: "Paradex",
        value: "paradex",
        logoURL: "https://icons.llama.fi/paradex.png",
    },
    {
        label: "PepeTeam sWAVES",
        value: "pepeteam-swaves",
        logoURL: "https://icons.llama.fi/pepeteam-swaves.png",
    },
    {
        label: "Alpaca Perpetual Futures Exchange",
        value: "alpaca-perpetual-futures-exchange",
        logoURL: "https://icons.llama.fi/alpaca-perpetual-futures-exchange.png",
    },
    {
        label: "PepeTeam Bridge",
        value: "pepeteam-bridge",
        logoURL: "https://icons.llama.fi/pepeteam-bridge.jpg",
    },
    {
        label: "IDEX",
        value: "idex",
        logoURL: "https://icons.llama.fi/idex.png",
    },
    {
        label: "CRETH2",
        value: "creth2",
        logoURL: "https://icons.llama.fi/creth2.png",
    },
    {
        label: "Swaap V2",
        value: "swaap-v2",
        logoURL: "https://icons.llama.fi/swaap-v2.jpg",
    },
    {
        label: "Equalizer Exchange",
        value: "equalizer-exchange",
        logoURL: "https://icons.llama.fi/equalizer-exchange.png",
    },
    {
        label: "Verse",
        value: "verse",
        logoURL: "https://icons.llama.fi/verse.png",
    },
    {
        label: "BabyDogeSwap",
        value: "babydogeswap",
        logoURL: "https://icons.llama.fi/babydogeswap.jpg",
    },
    {
        label: "XSwap Protocol",
        value: "xswap-protocol",
        logoURL: "https://icons.llama.fi/xswap-protocol.png",
    },
    {
        label: "Acala Swap",
        value: "acala-swap",
        logoURL: "https://icons.llama.fi/acala-swap.png",
    },
    {
        label: "Quicksilver Protocol",
        value: "quicksilver-protocol",
        logoURL: "https://icons.llama.fi/quicksilver-protocol.jpg",
    },
    {
        label: "BabySwap",
        value: "babyswap",
        logoURL: "https://icons.llama.fi/babyswap.png",
    },
    {
        label: "Sablier V1",
        value: "sablier-v1",
        logoURL: "https://icons.llama.fi/sablier-finance.jpg",
    },
    {
        label: "BabelFish",
        value: "babelfish",
        logoURL: "https://icons.llama.fi/babelfish.png",
    },
    {
        label: "Cat in a Box",
        value: "cat-in-a-box",
        logoURL: "https://icons.llama.fi/cat-in-a-box.jpg",
    },
    {
        label: "Neutrino",
        value: "neutrino",
        logoURL: "https://icons.llama.fi/neutrino.png",
    },
    {
        label: "StellaSwap V3",
        value: "stellaswap-v3",
        logoURL: "https://icons.llama.fi/stellaswap-v3.jpg",
    },
    {
        label: "Opium",
        value: "opium",
        logoURL: "https://icons.llama.fi/opium.jpg",
    },
    {
        label: "Lendle",
        value: "lendle",
        logoURL: "https://icons.llama.fi/lendle.jpg",
    },
    {
        label: "ThunderCore Staking",
        value: "thundercore-staking",
        logoURL: "https://icons.llama.fi/thundercore-staking.jpg",
    },
    {
        label: "AlgoRai Finance",
        value: "algorai-finance",
        logoURL: "https://icons.llama.fi/algorai-finance.png",
    },
    {
        label: "Stakehouse",
        value: "stakehouse",
        logoURL: "https://icons.llama.fi/stakehouse.png",
    },
    {
        label: "Derivio",
        value: "derivio",
        logoURL: "https://icons.llama.fi/derivio.jpg",
    },
    {
        label: "Trisolaris",
        value: "trisolaris",
        logoURL: "https://icons.llama.fi/trisolaris.jpg",
    },
    {
        label: "WEMIX.FI Lend",
        value: "wemix.fi-lend",
        logoURL: "https://icons.llama.fi/wemix.fi-lend.jpg",
    },
    {
        label: "ReactorFusion",
        value: "reactorfusion",
        logoURL: "https://icons.llama.fi/reactorfusion.jpg",
    },
    {
        label: "Dezswap",
        value: "dezswap",
        logoURL: "https://icons.llama.fi/dezswap.jpg",
    },
    {
        label: "Moonwell Apollo",
        value: "moonwell-apollo",
        logoURL: "https://icons.llama.fi/moonwell-apollo.png",
    },
    {
        label: "Dopex CLAMM",
        value: "dopex-clamm",
        logoURL: "https://icons.llama.fi/dopex-clamm.jpg",
    },
    {
        label: "Gro",
        value: "gro",
        logoURL: "https://icons.llama.fi/gro.png",
    },
    {
        label: "Affine DeFi",
        value: "affine-defi",
        logoURL: "https://icons.llama.fi/affine-defi.png",
    },
    {
        label: "Jarvis Network",
        value: "jarvis-network",
        logoURL: "https://icons.llama.fi/jarvis-network.jpg",
    },
    {
        label: "DeFis Network",
        value: "defis-network",
        logoURL: "https://icons.llama.fi/defis-network.png",
    },
    {
        label: "Kinetix AMM V3",
        value: "kinetix-amm-v3",
        logoURL: "https://icons.llama.fi/kinetix-amm-v3.png",
    },
    {
        label: "FluxBeam",
        value: "fluxbeam",
        logoURL: "https://icons.llama.fi/fluxbeam.jpg",
    },
    {
        label: "NEOPIN Pool",
        value: "neopin-pool",
        logoURL: "https://icons.llama.fi/neopin-pool.png",
    },
    {
        label: "Bluefin",
        value: "bluefin",
        logoURL: "https://icons.llama.fi/bluefin.jpg",
    },
    {
        label: "Defi Swap",
        value: "defi-swap",
        logoURL: "https://icons.llama.fi/defi-swap.jpg",
    },
    {
        label: "Phoenix Bonds",
        value: "phoenix-bonds",
        logoURL: "https://icons.llama.fi/phoenix-bonds.png",
    },
    {
        label: "StakeStone",
        value: "stakestone",
        logoURL: "https://icons.llama.fi/stakestone.jpg",
    },
    {
        label: "BackBone Labs",
        value: "backbone-labs",
        logoURL: "https://icons.llama.fi/backbone-labs.png",
    },
    {
        label: "Yoshi Exchange",
        value: "yoshi-exchange",
        logoURL: "https://icons.llama.fi/yoshi-exchange.jpg",
    },
    {
        label: "LlamaPay",
        value: "llamapay",
        logoURL: "https://icons.llama.fi/llamapay.png",
    },
    {
        label: "Defi Kingdoms",
        value: "defi-kingdoms",
        logoURL: "https://icons.llama.fi/defi-kingdoms.png",
    },
    {
        label: "FVM Exchange",
        value: "fvm-exchange",
        logoURL: "https://icons.llama.fi/velocimeter.png",
    },
    {
        label: "ClaimSwap V1",
        value: "claimswap-v1",
        logoURL: "https://icons.llama.fi/claimswap-v1.jpg",
    },
    {
        label: "Single Finance",
        value: "single-finance",
        logoURL: "https://icons.llama.fi/single-finance.png",
    },
    {
        label: "Tealswap",
        value: "tealswap",
        logoURL: "https://icons.llama.fi/tealswap.jpg",
    },
    {
        label: "HOPE Swap",
        value: "hope-swap",
        logoURL: "https://icons.llama.fi/hope-swap.png",
    },
    {
        label: "Preon Finance",
        value: "preon-finance",
        logoURL: "https://icons.llama.fi/preon-finance.png",
    },
    {
        label: "Ociswap",
        value: "ociswap",
        logoURL: "https://icons.llama.fi/ociswap.png",
    },
    {
        label: "ABEx Finance",
        value: "abex-finance",
        logoURL: "https://icons.llama.fi/opankeswap.jpg",
    },
    {
        label: "Kava Swap",
        value: "kava-swap",
        logoURL: "https://icons.llama.fi/kava-swap.jpg",
    },
    {
        label: "Stabl.fi V2",
        value: "stabl.fi-v2",
        logoURL: "https://icons.llama.fi/stable.fi.jpg",
    },
    {
        label: "Dopex SSOV",
        value: "dopex-ssov",
        logoURL: "https://icons.llama.fi/dopex-ssov.jpg",
    },
    {
        label: "Interlay BTC",
        value: "interlay-btc",
        logoURL: "https://icons.llama.fi/interlay.png",
    },
    {
        label: "SpiritSwap AMM",
        value: "spiritswap-amm",
        logoURL: "https://icons.llama.fi/spiritswap.jpg",
    },
    {
        label: "NerveSwap",
        value: "nerveswap",
        logoURL: "https://icons.llama.fi/nerveswap.png",
    },
    {
        label: "Nolus Protocol",
        value: "nolus-protocol",
        logoURL: "https://icons.llama.fi/nolus-protocol.jpg",
    },
    {
        label: "Vires Finance",
        value: "vires-finance",
        logoURL: "https://icons.llama.fi/vires-finance.png",
    },
    {
        label: "DigiFT",
        value: "digift",
        logoURL: "https://icons.llama.fi/digift.jpg",
    },
    {
        label: "Sudoswap V1",
        value: "sudoswap-v1",
        logoURL: "https://icons.llama.fi/sudoswap.png",
    },
    {
        label: "Symmetry",
        value: "symmetry",
        logoURL: "https://icons.llama.fi/symmetry.png",
    },
    {
        label: "StellaSwap V2",
        value: "stellaswap-v2",
        logoURL: "https://icons.llama.fi/stellaswap-v2.jpg",
    },
    {
        label: "Sushi Trident",
        value: "sushi-trident",
        logoURL: "https://icons.llama.fi/sushi-trident.png",
    },
    {
        label: "WEMIX Concentrated Range Deposit",
        value: "wemix-concentrated-range-deposit",
        logoURL: "https://icons.llama.fi/wemix-concentrated-range-deposit.jpg",
    },
    {
        label: "Axial",
        value: "axial",
        logoURL: "https://icons.llama.fi/axial.png",
    },
    {
        label: "Astrovault",
        value: "astrovault",
        logoURL: "https://icons.llama.fi/astrovault.png",
    },
    {
        label: "Aark Digital",
        value: "aark-digital",
        logoURL: "https://icons.llama.fi/aark-digital.png",
    },
    {
        label: "YieldFlow",
        value: "yieldflow",
        logoURL: "https://icons.llama.fi/yieldflow.jpg",
    },
    {
        label: "GND Protocol",
        value: "gnd-protocol",
        logoURL: "https://icons.llama.fi/gnd-protocol.jpg",
    },
    {
        label: "Bloom",
        value: "bloom",
        logoURL: "https://icons.llama.fi/bloom.jpg",
    },
    {
        label: "Arbitrove",
        value: "arbitrove",
        logoURL: "https://icons.llama.fi/arbitrove.jpg",
    },
    {
        label: "FlatQube",
        value: "flatqube",
        logoURL: "https://icons.llama.fi/flatcube.png",
    },
    {
        label: "Hipo",
        value: "hipo",
        logoURL: "https://icons.llama.fi/hipo.jpg",
    },
    {
        label: "Puzzle Lend",
        value: "puzzle-lend",
        logoURL: "https://icons.llama.fi/puzzle-lend.png",
    },
    {
        label: "Vesta Finance",
        value: "vesta-finance",
        logoURL: "https://icons.llama.fi/vesta-finance.png",
    },
    {
        label: "Mars Ecosystem",
        value: "mars-ecosystem",
        logoURL: "https://icons.llama.fi/mars-ecosystem.png",
    },
    {
        label: "PearlFi",
        value: "pearlfi",
        logoURL: "https://icons.llama.fi/pearlfi.jpg",
    },
    {
        label: "Algofi Lend",
        value: "algofi-lend",
        logoURL: "https://icons.llama.fi/algofi.jpg",
    },
    {
        label: "MetalX Dex",
        value: "metalx-dex",
        logoURL: "https://icons.llama.fi/metalx-dex.png",
    },
    {
        label: "Humble Defi",
        value: "humble-defi",
        logoURL: "https://icons.llama.fi/humble-defi.png",
    },
    {
        label: "RadioShack",
        value: "radioshack",
        logoURL: "https://icons.llama.fi/radioshack.png",
    },
    {
        label: "Lifinity V2",
        value: "lifinity-v2",
        logoURL: "https://icons.llama.fi/lifinity-v2.jpg",
    },
    {
        label: "Sudoswap V2",
        value: "sudoswap-v2",
        logoURL: "https://icons.llama.fi/sudoswap.png",
    },
    {
        label: "Tropykus RSK",
        value: "tropykus-rsk",
        logoURL: "https://icons.llama.fi/tropykus-rsk.png",
    },
    {
        label: "Sushi Furo",
        value: "sushi-furo",
        logoURL: "https://icons.llama.fi/sushi-furo.png",
    },
    {
        label: "JewelSwap Liquid Staking",
        value: "jewelswap-liquid-staking",
        logoURL: "https://icons.llama.fi/jewelswap-liquid-staking.png",
    },
    {
        label: "Zeta",
        value: "zeta",
        logoURL: "https://icons.llama.fi/zeta.png",
    },
    {
        label: "Hotbit",
        value: "hotbit",
        logoURL: "https://icons.llama.fi/hotbit.png",
    },
    {
        label: "Paraluni Dex",
        value: "paraluni-dex",
        logoURL: "https://icons.llama.fi/paraluni.png",
    },
    {
        label: "Sushi Aptos",
        value: "sushi-aptos",
        logoURL: "https://icons.llama.fi/sushi-aptos.jpg",
    },
    {
        label: "ICPSwap",
        value: "icpswap",
        logoURL: "https://icons.llama.fi/icpswap.png",
    },
    {
        label: "Geode",
        value: "geode",
        logoURL: "https://icons.llama.fi/geode.png",
    },
    {
        label: "Xfai",
        value: "xfai",
        logoURL: "https://icons.llama.fi/xfai.jpg",
    },
    {
        label: "zkSwap Finance",
        value: "zkswap-finance",
        logoURL: "https://icons.llama.fi/zkswap-finance.jpg",
    },
    {
        label: "Metavault.Trade",
        value: "metavault.trade",
        logoURL: "https://icons.llama.fi/metavault.trade.png",
    },
    {
        label: "Nerve Staking",
        value: "nerve-staking",
        logoURL: "https://icons.llama.fi/nerve-staking.jpg",
    },
    {
        label: "Cyclone",
        value: "cyclone",
        logoURL: "https://icons.llama.fi/cyclone.png",
    },
    {
        label: "Alchemist",
        value: "alchemist",
        logoURL: "https://icons.llama.fi/alchemist.jpg",
    },
    {
        label: "Ubeswap",
        value: "ubeswap",
        logoURL: "https://icons.llama.fi/ubeswap.png",
    },
    {
        label: "Phuture",
        value: "phuture",
        logoURL: "https://icons.llama.fi/phuture.png",
    },
    {
        label: "One Dex",
        value: "one-dex",
        logoURL: "https://icons.llama.fi/one-dex.jpg",
    },
    {
        label: "Universe XYZ",
        value: "universe-xyz",
        logoURL: "https://icons.llama.fi/universe-xyz.jpg",
    },
    {
        label: "Swarm Markets",
        value: "swarm-markets",
        logoURL: "https://icons.llama.fi/swarm-markets.jpg",
    },
    {
        label: "WX Network",
        value: "wx-network",
        logoURL: "https://icons.llama.fi/wx-network.png",
    },
    {
        label: "WanLend",
        value: "wanlend",
        logoURL: "https://icons.llama.fi/wanlend.png",
    },
    {
        label: "Planet Farm",
        value: "planet-farm",
        logoURL: "https://icons.llama.fi/planet-finance.png",
    },
    {
        label: "Thales",
        value: "thales",
        logoURL: "https://icons.llama.fi/thales.png",
    },
    {
        label: "Crescent Dex",
        value: "crescent-dex",
        logoURL: "https://icons.llama.fi/crescent-dex.jpg",
    },
    {
        label: "Saddle Finance",
        value: "saddle-finance",
        logoURL: "https://icons.llama.fi/saddle-finance.jpg",
    },
    {
        label: "UniFarm",
        value: "unifarm",
        logoURL: "https://icons.llama.fi/unifarm.jpg",
    },
    {
        label: "SingularityDAO",
        value: "singularitydao",
        logoURL: "https://icons.llama.fi/singularitydao.png",
    },
    {
        label: "SALSA",
        value: "salsa",
        logoURL: "https://icons.llama.fi/salsa.png",
    },
    {
        label: "Apricot Finance",
        value: "apricot-finance",
        logoURL: "https://icons.llama.fi/apricot-finance.jpg",
    },
    {
        label: "BSCSwap",
        value: "bscswap",
        logoURL: "https://icons.llama.fi/bscswap.png",
    },
    {
        label: "Yield Yak Staked Avax",
        value: "yield-yak-staked-avax",
        logoURL: "https://icons.llama.fi/yield-yak-staked-avax.png",
    },
    {
        label: "Sigmausd",
        value: "sigmausd",
        logoURL: "https://icons.llama.fi/sigmausd.png",
    },
    {
        label: "AstarFarm",
        value: "astarfarm",
        logoURL: "https://icons.llama.fi/astarfarm.jpg",
    },
    {
        label: "Synthswap V3",
        value: "synthswap-v3",
        logoURL: "https://icons.llama.fi/synthswap-v3.jpg",
    },
    {
        label: "MetalX Swap",
        value: "metalx-swap",
        logoURL: "https://icons.llama.fi/metalx-swap.png",
    },
    {
        label: "HashMix FIL",
        value: "hashmix-fil",
        logoURL: "https://icons.llama.fi/hashmix-fil.jpg",
    },
    {
        label: "Scrub Invest",
        value: "scrub-invest",
        logoURL: "https://icons.llama.fi/scrub-invest.png",
    },
    {
        label: "DefiDollar DAO",
        value: "defidollar-dao",
        logoURL: "https://icons.llama.fi/defidollar-dao.svg",
    },
    {
        label: "FX Swap",
        value: "fx-swap",
        logoURL: "https://icons.llama.fi/fx-swap.jpg",
    },
    {
        label: "Integral",
        value: "integral",
        logoURL: "https://icons.llama.fi/integral.jpg",
    },
    {
        label: "xWin Finance",
        value: "xwin-finance",
        logoURL: "https://icons.llama.fi/xwin-finance.jpg",
    },
    {
        label: "Metronome V1",
        value: "metronome-v1",
        logoURL: "https://icons.llama.fi/metronome-v1.jpg",
    },
    {
        label: "Unicly",
        value: "unicly",
        logoURL: "https://icons.llama.fi/unicly.png",
    },
    {
        label: "Arbswap AMM",
        value: "arbswap-amm",
        logoURL: "https://icons.llama.fi/arbswap-amm.jpg",
    },
    {
        label: "Glide Finance",
        value: "glide-finance",
        logoURL: "https://icons.llama.fi/glide-finance.jpg",
    },
    {
        label: "Match Finance",
        value: "match-finance",
        logoURL: "https://icons.llama.fi/match-finance.jpg",
    },
    {
        label: "Mummy Finance",
        value: "mummy-finance",
        logoURL: "https://icons.llama.fi/mummy-finance.jpg",
    },
    {
        label: "Alien Base AMM",
        value: "alien-base-amm",
        logoURL: "https://icons.llama.fi/alien-base-amm.jpg",
    },
    {
        label: "Augur",
        value: "augur",
        logoURL: "https://icons.llama.fi/augur.png",
    },
    {
        label: "Sperax Demeter",
        value: "sperax-demeter",
        logoURL: "https://icons.llama.fi/sperax-demeter.png",
    },
    {
        label: "AYIN",
        value: "ayin",
        logoURL: "https://icons.llama.fi/ayin.jpg",
    },
    {
        label: "Channels Finance",
        value: "channels-finance",
        logoURL: "https://icons.llama.fi/channels-finance.png",
    },
    {
        label: "GoodDollar",
        value: "gooddollar",
        logoURL: "https://icons.llama.fi/gooddollar.png",
    },
    {
        label: "X2Y2",
        value: "x2y2",
        logoURL: "https://icons.llama.fi/x2y2.png",
    },
    {
        label: "Titano Swych",
        value: "titano-swych",
        logoURL: "https://icons.llama.fi/titano-swych.jpg",
    },
    {
        label: "Moon Swap",
        value: "moon-swap",
        logoURL: "https://icons.llama.fi/moon-swap.jpg",
    },
    {
        label: "Chronos V1",
        value: "chronos-v1",
        logoURL: "https://icons.llama.fi/chronos.png",
    },
    {
        label: "Fractional Art",
        value: "fractional-art",
        logoURL: "https://icons.llama.fi/fractional-art.jpg",
    },
    {
        label: "ElysiumSwap",
        value: "elysiumswap",
        logoURL: "https://icons.llama.fi/elysiumswap.jpg",
    },
    {
        label: "Algomint",
        value: "algomint",
        logoURL: "https://icons.llama.fi/algomint.png",
    },
    {
        label: "Themis DEX",
        value: "themis-dex",
        logoURL: "https://icons.llama.fi/themis-dex.png",
    },
    {
        label: "YokaiSwap",
        value: "yokaiswap",
        logoURL: "https://icons.llama.fi/yokaiswap.jpg",
    },
    {
        label: "Forge",
        value: "forge",
        logoURL: "https://icons.llama.fi/forge.jpg",
    },
    {
        label: "Nerve",
        value: "nerve",
        logoURL: "https://icons.llama.fi/nerve.png",
    },
    {
        label: "Revert Compoundor",
        value: "revert-compoundor",
        logoURL: "https://icons.llama.fi/revert-compoundor.png",
    },
    {
        label: "PieDAO",
        value: "piedao",
        logoURL: "https://icons.llama.fi/piedao.jpg",
    },
    {
        label: "Mare Finance V2",
        value: "mare-finance-v2",
        logoURL: "https://icons.llama.fi/mare-finance-v2.png",
    },
    {
        label: "Joe V2",
        value: "joe-v2",
        logoURL: "https://icons.llama.fi/joe-v2.jpg",
    },
    {
        label: "DDEX",
        value: "ddex",
        logoURL: "https://icons.llama.fi/ddex.png",
    },
    {
        label: "HERE Wallet staking",
        value: "here-wallet-staking",
        logoURL: "https://icons.llama.fi/here-wallet-staking.png",
    },
    {
        label: "Starlay Finance",
        value: "starlay-finance",
        logoURL: "https://icons.llama.fi/starlay-finance.png",
    },
    {
        label: "Carbon Defi",
        value: "carbon-defi",
        logoURL: "https://icons.llama.fi/carbon-defi.png",
    },
    {
        label: "Katana",
        value: "katana",
        logoURL: "https://icons.llama.fi/katana.png",
    },
    {
        label: "Sherlock",
        value: "sherlock",
        logoURL: "https://icons.llama.fi/sherlock.png",
    },
    {
        label: "Mellow Protocol",
        value: "mellow-protocol",
        logoURL: "https://icons.llama.fi/genius.jpg",
    },
    {
        label: "Hummus Weighted",
        value: "hummus-weighted",
        logoURL: "https://icons.llama.fi/hummus-weighted.jpg",
    },
    {
        label: "DerivaDEX",
        value: "derivadex",
        logoURL: "https://icons.llama.fi/derivadex.jpg",
    },
    {
        label: "Valas Finance",
        value: "valas-finance",
        logoURL: "https://icons.llama.fi/valas-finance.png",
    },
    {
        label: "Meteora pools",
        value: "meteora-pools",
        logoURL: "https://icons.llama.fi/meteora.png",
    },
    {
        label: "Hadouken Lend",
        value: "hadouken-lend",
        logoURL: "https://icons.llama.fi/hadouken-lend.jpg",
    },
    {
        label: "Swapr",
        value: "swapr",
        logoURL: "https://icons.llama.fi/swapr.svg",
    },
    {
        label: "Arbi's Finance",
        value: "arbis-finance",
        logoURL: "https://icons.llama.fi/arbis-finance.jpg",
    },
    {
        label: "Liquid Finance",
        value: "liquid-finance",
        logoURL: "https://icons.llama.fi/liquid-finance.png",
    },
    {
        label: "CherrySwap",
        value: "cherryswap",
        logoURL: "https://icons.llama.fi/cherryswap.png",
    },
    {
        label: "SwapBased AMM",
        value: "swapbased-amm",
        logoURL: "https://icons.llama.fi/swapbased-amm.jpg",
    },
    {
        label: "QuipuSwap V2",
        value: "quipuswap-v2",
        logoURL: "https://icons.llama.fi/quipuswap.png",
    },
    {
        label: "Pluto",
        value: "pluto",
        logoURL: "https://icons.llama.fi/pluto.png",
    },
    {
        label: "GrizzlyFi Hives",
        value: "grizzlyfi-hives",
        logoURL: "https://icons.llama.fi/grizzlyfi.png",
    },
    {
        label: "handle.fi Perps",
        value: "handle.fi-perps",
        logoURL: "https://icons.llama.fi/handle.fi-perps.jpg",
    },
    {
        label: "ParaSpace APE Staking V1",
        value: "paraspace-ape-staking-v1",
        logoURL: "https://icons.llama.fi/paraspace-ape.jpg",
    },
    {
        label: "IFPool",
        value: "ifpool",
        logoURL: "https://icons.llama.fi/ifpool.jpg",
    },
    {
        label: "Eklipse Finance",
        value: "eklipse-finance",
        logoURL: "https://icons.llama.fi/eklipse-finance.png",
    },
    {
        label: "Argo Finance",
        value: "argo-finance",
        logoURL: "https://icons.llama.fi/argo-finance.png",
    },
    {
        label: "Ribbon Earn",
        value: "ribbon-earn",
        logoURL: "https://icons.llama.fi/ribbon-finance.png",
    },
    {
        label: "Starfish Finance",
        value: "starfish-finance",
        logoURL: "https://icons.llama.fi/starfish-finance.jpg",
    },
    {
        label: "Elk",
        value: "elk",
        logoURL: "https://icons.llama.fi/elk.jpg",
    },
    {
        label: "SithSwap",
        value: "sithswap",
        logoURL: "https://icons.llama.fi/sithswap.jpg",
    },
    {
        label: "Aurigami",
        value: "aurigami",
        logoURL: "https://icons.llama.fi/aurigami.png",
    },
    {
        label: "MCDEX",
        value: "mcdex",
        logoURL: "https://icons.llama.fi/mcdex.jpg",
    },
    {
        label: "Goldfinch",
        value: "goldfinch",
        logoURL: "https://icons.llama.fi/goldfinch.png",
    },
    {
        label: "Notional V3",
        value: "notional-v3",
        logoURL: "https://icons.llama.fi/notional-v3.jpg",
    },
    {
        label: "Solarbeam",
        value: "solarbeam",
        logoURL: "https://icons.llama.fi/solarbeam.png",
    },
    {
        label: "Hummus AMM",
        value: "hummus-amm",
        logoURL: "https://icons.llama.fi/hummus-amm.jpg",
    },
    {
        label: "Danogo",
        value: "danogo",
        logoURL: "https://icons.llama.fi/danogo.jpg",
    },
    {
        label: "GroveCoin",
        value: "grovecoin",
        logoURL: "https://icons.llama.fi/grovecoin.jpg",
    },
    {
        label: "Gondi V2",
        value: "gondi-v2",
        logoURL: "https://icons.llama.fi/gondi-v2.png",
    },
    {
        label: "Nomad",
        value: "nomad",
        logoURL: "https://icons.llama.fi/nomad.png",
    },
    {
        label: "Bunicorn",
        value: "bunicorn",
        logoURL: "https://icons.llama.fi/bunicorn.png",
    },
    {
        label: "Dexter",
        value: "dexter",
        logoURL: "https://icons.llama.fi/dexter.jpg",
    },
    {
        label: "Equilibrium Lending",
        value: "equilibrium-lending",
        logoURL: "https://icons.llama.fi/equilibrium.png",
    },
    {
        label: "Counterstake",
        value: "counterstake",
        logoURL: "https://icons.llama.fi/counterstake.png",
    },
    {
        label: "Bastion",
        value: "bastion",
        logoURL: "https://icons.llama.fi/bastion.png",
    },
    {
        label: "CitadelSwap",
        value: "citadelswap",
        logoURL: "https://icons.llama.fi/citadelswap.jpg",
    },
    {
        label: "DELV",
        value: "delv",
        logoURL: "https://icons.llama.fi/delv.jpg",
    },
    {
        label: "Swapsicle V2",
        value: "swapsicle-v2",
        logoURL: "https://icons.llama.fi/swapsicle-v2.jpg",
    },
    {
        label: "sTLOS Liquid Staking",
        value: "stlos-liquid-staking",
        logoURL: "https://icons.llama.fi/stlos-liquid-staking.png",
    },
    {
        label: "FstSwap",
        value: "fstswap",
        logoURL: "https://icons.llama.fi/fstswap.png",
    },
    {
        label: "xToken",
        value: "xtoken",
        logoURL: "https://icons.llama.fi/xtoken.png",
    },
    {
        label: "WYND DEX",
        value: "wynd-dex",
        logoURL: "https://icons.llama.fi/wynd-dex.jpg",
    },
    {
        label: "CavalRe",
        value: "cavalre",
        logoURL: "https://icons.llama.fi/cavalre.jpg",
    },
    {
        label: "Velocimeter V2",
        value: "velocimeter-v2",
        logoURL: "https://icons.llama.fi/velocimeter.png",
    },
    {
        label: "Mean Finance",
        value: "mean-finance",
        logoURL: "https://icons.llama.fi/mean-finance.jpg",
    },
    {
        label: "Meta Pool ETH",
        value: "meta-pool-eth",
        logoURL: "https://icons.llama.fi/meta-pool-eth.png",
    },
    {
        label: "Beta Finance",
        value: "beta-finance",
        logoURL: "https://icons.llama.fi/beta-finance.jpg",
    },
    {
        label: "Sonic",
        value: "sonic",
        logoURL: "https://icons.llama.fi/sonic.png",
    },
    {
        label: "Ratio Finance",
        value: "ratio-finance",
        logoURL: "https://icons.llama.fi/ratio-finance.png",
    },
    {
        label: "Spice Finance",
        value: "spice-finance",
        logoURL: "https://icons.llama.fi/spice-finance.jpg",
    },
    {
        label: "Arch",
        value: "arch",
        logoURL: "https://icons.llama.fi/arch.png",
    },
    {
        label: "Enosys Bridge",
        value: "enosys-bridge",
        logoURL: "https://icons.llama.fi/enosys-bridge.png",
    },
    {
        label: "Definix",
        value: "definix",
        logoURL: "https://icons.llama.fi/definix.jpg",
    },
    {
        label: "Gardens DAO",
        value: "gardens-dao",
        logoURL: "https://icons.llama.fi/gardensdao.png",
    },
    {
        label: "Yield Protocol",
        value: "yield-protocol",
        logoURL: "https://icons.llama.fi/yield-protocol.jpg",
    },
    {
        label: "EmpireDEX",
        value: "empiredex",
        logoURL: "https://icons.llama.fi/empire-dex.jpg",
    },
    {
        label: "ZoomSwap",
        value: "zoomswap",
        logoURL: "https://icons.llama.fi/zoomswap.jpg",
    },
    {
        label: "Zyberswap V3",
        value: "zyberswap-v3",
        logoURL: "https://icons.llama.fi/zyberswap-v3.jpg",
    },
    {
        label: "Solid World",
        value: "solid-world",
        logoURL: "https://icons.llama.fi/solid-world.jpg",
    },
    {
        label: "CVI Finance",
        value: "cvi-finance",
        logoURL: "https://icons.llama.fi/cvi-finance.png",
    },
    {
        label: "yAxis",
        value: "yaxis",
        logoURL: "https://icons.llama.fi/yaxis.jpg",
    },
    {
        label: "Tenderize",
        value: "tenderize",
        logoURL: "https://icons.llama.fi/tenderize.png",
    },
    {
        label: "tai.money",
        value: "tai.money",
        logoURL: "https://icons.llama.fi/tai.money.png",
    },
    {
        label: "Revault",
        value: "revault",
        logoURL: "https://icons.llama.fi/revault.jpg",
    },
    {
        label: "VaporDex V1",
        value: "vapordex-v1",
        logoURL: "https://icons.llama.fi/vapordex.jpg",
    },
    {
        label: "Scream",
        value: "scream",
        logoURL: "https://icons.llama.fi/scream.png",
    },
    {
        label: "Avely Staking",
        value: "avely-staking",
        logoURL: "https://icons.llama.fi/avely-staking.jpg",
    },
    {
        label: "KyberSwap Elastic",
        value: "kyberswap-elastic",
        logoURL: "https://icons.llama.fi/kyberswap-elastic.png",
    },
    {
        label: "Superfluid",
        value: "superfluid",
        logoURL: "https://icons.llama.fi/superfluid.png",
    },
    {
        label: "MYSO V2",
        value: "myso-v2",
        logoURL: "https://icons.llama.fi/myso-v2.jpg",
    },
    {
        label: "w3bank",
        value: "w3bank",
        logoURL: "https://icons.llama.fi/w3bank.jpg",
    },
    {
        label: "ShekelSwap",
        value: "shekelswap",
        logoURL: "https://icons.llama.fi/shekelswap.png",
    },
    {
        label: "Pods Yield",
        value: "pods-yield",
        logoURL: "https://icons.llama.fi/pods-yield.png",
    },
    {
        label: "ZeroLend",
        value: "zerolend",
        logoURL: "https://icons.llama.fi/zerolend.png",
    },
    {
        label: "Annex",
        value: "annex",
        logoURL: "https://icons.llama.fi/annex.jpg",
    },
    {
        label: "Sirius Finance",
        value: "sirius-finance",
        logoURL: "https://icons.llama.fi/sirius-finance.png",
    },
    {
        label: "Ajna",
        value: "ajna",
        logoURL: "https://icons.llama.fi/ajna.png",
    },
    {
        label: "HoldStation DeFutures",
        value: "holdstation-defutures",
        logoURL: "https://icons.llama.fi/holdstation-defutures.png",
    },
    {
        label: "Substance Exchange",
        value: "substance-exchange",
        logoURL: "https://icons.llama.fi/substance-exchange.jpg",
    },
    {
        label: "Yama Finance",
        value: "yama-finance",
        logoURL: "https://icons.llama.fi/yama.png",
    },
    {
        label: "Golff Protocol",
        value: "golff-protocol",
        logoURL: "https://icons.llama.fi/golff-protocol.png",
    },
    {
        label: "Sperax USD",
        value: "sperax-usd",
        logoURL: "https://icons.llama.fi/sperax-usd.jpg",
    },
    {
        label: "Soswap",
        value: "soswap",
        logoURL: "https://icons.llama.fi/soswap.jpg",
    },
    {
        label: "Voltage AMM",
        value: "voltage-amm",
        logoURL: "https://icons.llama.fi/voltage-amm.jpg",
    },
    {
        label: "Armada",
        value: "armada",
        logoURL: "https://icons.llama.fi/armada.png",
    },
    {
        label: "NBX",
        value: "nbx",
        logoURL: "https://icons.llama.fi/nbx.jpg",
    },
    {
        label: "Vega Protocol",
        value: "vega-protocol",
        logoURL: "https://icons.llama.fi/vega-protocol.jpg",
    },
    {
        label: "Alephium Bridge",
        value: "alephium-bridge",
        logoURL: "https://icons.llama.fi/alephium-bridge.jpg",
    },
    {
        label: "Friktion",
        value: "friktion",
        logoURL: "https://icons.llama.fi/friktion.png",
    },
    {
        label: "DefiPlaza",
        value: "defiplaza",
        logoURL: "https://icons.llama.fi/defiplaza.svg",
    },
    {
        label: "Equilibre",
        value: "equilibre",
        logoURL: "https://icons.llama.fi/equilibre.png",
    },
    {
        label: "ForTube",
        value: "fortube",
        logoURL: "https://icons.llama.fi/fortube.jpg",
    },
    {
        label: "Demex",
        value: "demex",
        logoURL: "https://icons.llama.fi/demex.png",
    },
    {
        label: "WagyuSwap",
        value: "wagyuswap",
        logoURL: "https://icons.llama.fi/wagyuswap.jpg",
    },
    {
        label: "AnyHedge",
        value: "anyhedge",
        logoURL: "https://icons.llama.fi/anyhedge.png",
    },
    {
        label: "Liquid Driver",
        value: "liquid-driver",
        logoURL: "https://icons.llama.fi/liquid-driver.png",
    },
    {
        label: "Centrifuge",
        value: "centrifuge",
        logoURL: "https://icons.llama.fi/centrifuge.jpg",
    },
    {
        label: "Hyphen",
        value: "hyphen",
        logoURL: "https://icons.llama.fi/biconomy.png",
    },
    {
        label: "SwapBased Concentrated Liquidity",
        value: "swapbased-concentrated-liquidity",
        logoURL: "https://icons.llama.fi/swapbased-concentrated-liquidity.png",
    },
    {
        label: "Kromatika",
        value: "kromatika",
        logoURL: "https://icons.llama.fi/kromatika.png",
    },
    {
        label: "Bearn",
        value: "bearn",
        logoURL: "https://icons.llama.fi/bearn.jpg",
    },
    {
        label: "Antfarm finance",
        value: "antfarm-finance",
        logoURL: "https://icons.llama.fi/antfarm-finance.jpg",
    },
    {
        label: "Hover",
        value: "hover",
        logoURL: "https://icons.llama.fi/hover.png",
    },
    {
        label: "Orchai",
        value: "orchai",
        logoURL: "https://icons.llama.fi/orchai.jpg",
    },
    {
        label: "HebeSwap",
        value: "hebeswap",
        logoURL: "https://icons.llama.fi/hebeswap.png",
    },
    {
        label: "Sturdy",
        value: "sturdy",
        logoURL: "https://icons.llama.fi/sturdy.png",
    },
    {
        label: "Blueshift",
        value: "blueshift",
        logoURL: "https://icons.llama.fi/blueshift.jpg",
    },
    {
        label: "GoodEntry",
        value: "goodentry",
        logoURL: "https://icons.llama.fi/goodentry.jpg",
    },
    {
        label: "Libre Swap",
        value: "libre-swap",
        logoURL: "https://icons.llama.fi/libre-swap.jpg",
    },
    {
        label: "Increment Liquid Staking",
        value: "increment-liquid-staking",
        logoURL: "https://icons.llama.fi/increment-liquid-staking.png",
    },
    {
        label: "Cega",
        value: "cega",
        logoURL: "https://icons.llama.fi/cega.jpg",
    },
    {
        label: "Locus Finance",
        value: "locus-finance",
        logoURL: "https://icons.llama.fi/locus-finance.png",
    },
    {
        label: "NiiFi",
        value: "niifi",
        logoURL: "https://icons.llama.fi/niifi.jpg",
    },
    {
        label: "Mesher",
        value: "mesher",
        logoURL: "https://icons.llama.fi/mesher.png",
    },
    {
        label: "Rollup Finance vAMM",
        value: "rollup-finance-vamm",
        logoURL: "https://icons.llama.fi/rollup-finance.png",
    },
    {
        label: "ApolloDAO",
        value: "apollodao",
        logoURL: "https://icons.llama.fi/apollodao.jpg",
    },
    {
        label: "KnightSwap Lending",
        value: "knightswap-lending",
        logoURL: "https://icons.llama.fi/knightswap-lending.jpg",
    },
    {
        label: "Lif3 Swap",
        value: "lif3-swap",
        logoURL: "https://icons.llama.fi/lif3-swap.png",
    },
    {
        label: "Nayms",
        value: "nayms",
        logoURL: "https://icons.llama.fi/nayms.png",
    },
    {
        label: "Nitron",
        value: "nitron",
        logoURL: "https://icons.llama.fi/nitron.png",
    },
    {
        label: "Wrap Protocol",
        value: "wrap-protocol",
        logoURL: "https://icons.llama.fi/wrap-protocol.png",
    },
    {
        label: "Skydrome",
        value: "skydrome",
        logoURL: "https://icons.llama.fi/skydrome.png",
    },
    {
        label: "Hashflow",
        value: "hashflow",
        logoURL: "https://icons.llama.fi/hashflow.png",
    },
    {
        label: "Messina Liquid Staking",
        value: "messina-liquid-staking",
        logoURL: "https://icons.llama.fi/messina-liquid-staking.jpg",
    },
    {
        label: "KEEP Network",
        value: "keep-network",
        logoURL: "https://icons.llama.fi/keep-network.png",
    },
    {
        label: "Savvy",
        value: "savvy",
        logoURL: "https://icons.llama.fi/savvy.jpg",
    },
    {
        label: "Zharta",
        value: "zharta",
        logoURL: "https://icons.llama.fi/zharta.png",
    },
    {
        label: "Mauve",
        value: "mauve",
        logoURL: "https://icons.llama.fi/mauve.jpg",
    },
    {
        label: "YuzuSwap",
        value: "yuzuswap",
        logoURL: "https://icons.llama.fi/yuzuswap.jpg",
    },
    {
        label: "Sablier V2",
        value: "sablier-v2",
        logoURL: "https://icons.llama.fi/sablier-finance.jpg",
    },
    {
        label: "Geyser",
        value: "geyser",
        logoURL: "https://icons.llama.fi/geyser.png",
    },
    {
        label: "Kagla Finance",
        value: "kagla-finance",
        logoURL: "https://icons.llama.fi/kagla-finance.png",
    },
    {
        label: "Penguin",
        value: "penguin",
        logoURL: "https://icons.llama.fi/penguin.png",
    },
    {
        label: "Teahouse Permissionless",
        value: "teahouse-permissionless",
        logoURL: "https://icons.llama.fi/teahouse-permissionless.jpg",
    },
    {
        label: "Chest Finance",
        value: "chest-finance",
        logoURL: "https://icons.llama.fi/chest-finance.jpg",
    },
    {
        label: "Cozy V2",
        value: "cozy-v2",
        logoURL: "https://icons.llama.fi/cozy-finance.png",
    },
    {
        label: "Premia V2",
        value: "premia-v2",
        logoURL: "https://icons.llama.fi/premia-v2.jpg",
    },
    {
        label: "FutureSwap",
        value: "futureswap",
        logoURL: "https://icons.llama.fi/futureswap.jpg",
    },
    {
        label: "Crodex",
        value: "crodex",
        logoURL: "https://icons.llama.fi/crodex.jpg",
    },
    {
        label: "Morphex V2",
        value: "morphex-v2",
        logoURL: "https://icons.llama.fi/morphex-v2.jpg",
    },
    {
        label: "xBacked",
        value: "xbacked",
        logoURL: "https://icons.llama.fi/xbacked.png",
    },
    {
        label: "QuipuSwap Stableswap",
        value: "quipuswap-stableswap",
        logoURL: "https://icons.llama.fi/quipuswap.png",
    },
    {
        label: "SecretSwap",
        value: "secretswap",
        logoURL: "https://icons.llama.fi/secretswap.png",
    },
    {
        label: "Iotabee",
        value: "iotabee",
        logoURL: "https://icons.llama.fi/iotabee.jpg",
    },
    {
        label: "Lenen",
        value: "lenen",
        logoURL: "https://icons.llama.fi/lenen.png",
    },
    {
        label: "Messina Bridge",
        value: "messina-bridge",
        logoURL: "https://icons.llama.fi/messina-bridge.jpg",
    },
    {
        label: "TangoSwap",
        value: "tangoswap",
        logoURL: "https://icons.llama.fi/tangoswap.jpg",
    },
    {
        label: "IntentX",
        value: "intentx",
        logoURL: "https://icons.llama.fi/intentx.png",
    },
    {
        label: "Smoothy",
        value: "smoothy",
        logoURL: "https://icons.llama.fi/smoothy.jpg",
    },
    {
        label: "SmartCredit",
        value: "smartcredit",
        logoURL: "https://icons.llama.fi/smartcredit.png",
    },
    {
        label: "Tidal Finance",
        value: "tidal-finance",
        logoURL: "https://icons.llama.fi/tidal-finance.png",
    },
    {
        label: "Cap V4",
        value: "cap-v4",
        logoURL: "https://icons.llama.fi/cap-v4.jpg",
    },
    {
        label: "MojitoSwap",
        value: "mojitoswap",
        logoURL: "https://icons.llama.fi/mojitoswap.png",
    },
    {
        label: "FRAKT",
        value: "frakt",
        logoURL: "https://icons.llama.fi/frakt.png",
    },
    {
        label: "PoolTogether V5",
        value: "pooltogether-v5",
        logoURL: "https://icons.llama.fi/pooltogether-v5.png",
    },
    {
        label: "Caviar Tangible",
        value: "caviar-tangible",
        logoURL: "https://icons.llama.fi/caviar-tangible.png",
    },
    {
        label: "BaseX",
        value: "basex",
        logoURL: "https://icons.llama.fi/basex.jpg",
    },
    {
        label: "Diamond Protocol V2",
        value: "diamond-protocol-v2",
        logoURL: "https://icons.llama.fi/diamond-protocol-v2.jpg",
    },
    {
        label: "uniIOTX",
        value: "uniiotx",
        logoURL: "https://icons.llama.fi/uniiotx.jpg",
    },
    {
        label: "CACHE.Gold",
        value: "cache.gold",
        logoURL: "https://icons.llama.fi/cache.gold.png",
    },
    {
        label: "Solv RWA",
        value: "solv-rwa",
        logoURL: "https://icons.llama.fi/solv-rwa.png",
    },
    {
        label: "Madmex",
        value: "madmex",
        logoURL: "https://icons.llama.fi/madmex.png",
    },
    {
        label: "Strudel Finance",
        value: "strudel-finance",
        logoURL: "https://icons.llama.fi/strudel-finance.jpg",
    },
    {
        label: "CandySwap",
        value: "candyswap",
        logoURL: "https://icons.llama.fi/candyswap.jpg",
    },
    {
        label: "stCELO",
        value: "stcelo",
        logoURL: "https://icons.llama.fi/stcelo.png",
    },
    {
        label: "SnowSwap",
        value: "snowswap",
        logoURL: "https://icons.llama.fi/snowswap.jpg",
    },
    {
        label: "PERI Finance",
        value: "peri-finance",
        logoURL: "https://icons.llama.fi/peri-finance.png",
    },
    {
        label: "eckoDAO",
        value: "eckodao",
        logoURL: "https://icons.llama.fi/eckodao.png",
    },
    {
        label: "Warp Dex",
        value: "warp-dex",
        logoURL: "https://icons.llama.fi/warp-dex.png",
    },
    {
        label: "LendFlare",
        value: "lendflare",
        logoURL: "https://icons.llama.fi/lendflare.jpg",
    },
    {
        label: "Hydradex V3",
        value: "hydradex-v3",
        logoURL: "https://icons.llama.fi/hydradex-v3.png",
    },
    {
        label: "Accumulator",
        value: "accumulator",
        logoURL: "https://icons.llama.fi/accumulator.jpg",
    },
    {
        label: "Yamato Protocol",
        value: "yamato-protocol",
        logoURL: "https://icons.llama.fi/yamato-protocol.png",
    },
    {
        label: "Tomo",
        value: "tomo",
        logoURL: "https://icons.llama.fi/tomo.jpg",
    },
    {
        label: "PegaSys V3",
        value: "pegasys-v3",
        logoURL: "https://icons.llama.fi/pegasys-v3.png",
    },
    {
        label: "Nostra mainnet",
        value: "nostra-mainnet",
        logoURL: "https://icons.llama.fi/nostra.jpg",
    },
    {
        label: "Scientix",
        value: "scientix",
        logoURL: "https://icons.llama.fi/scientix.jpg",
    },
    {
        label: "Karura Swap",
        value: "karura-swap",
        logoURL: "https://icons.llama.fi/karura-swap.jpg",
    },
    {
        label: "Juicebox V3",
        value: "juicebox-v3",
        logoURL: "https://icons.llama.fi/juicebox.png",
    },
    {
        label: "JetFuel Finance",
        value: "jetfuel-finance",
        logoURL: "https://icons.llama.fi/jetfuel-finance.jpg",
    },
    {
        label: "Ellipsis Labs",
        value: "ellipsis-labs",
        logoURL: "https://icons.llama.fi/ellipsis-labs.jpg",
    },
    {
        label: "Snowball",
        value: "snowball",
        logoURL: "https://icons.llama.fi/snowball.jpg",
    },
    {
        label: "BeamSwap V3",
        value: "beamswap-v3",
        logoURL: "https://icons.llama.fi/beamswap-v3.jpg",
    },
    {
        label: "BitMart",
        value: "bitmart",
        logoURL: "https://icons.llama.fi/bitmark.jpg",
    },
    {
        label: "FluidTokens",
        value: "fluidtokens",
        logoURL: "https://icons.llama.fi/fluidtokens.jpg",
    },
    {
        label: "Wasabi",
        value: "wasabi",
        logoURL: "https://icons.llama.fi/wasabi.jpg",
    },
    {
        label: "ArcherSwap",
        value: "archerswap",
        logoURL: "https://icons.llama.fi/archerswap.jpg",
    },
    {
        label: "Tethys AMM",
        value: "tethys-amm",
        logoURL: "https://icons.llama.fi/tethys-finance.png",
    },
    {
        label: "Buffer Finance",
        value: "buffer-finance",
        logoURL: "https://icons.llama.fi/buffer-finance.png",
    },
    {
        label: "FrankenCoin",
        value: "frankencoin",
        logoURL: "https://icons.llama.fi/frankencoin.jpg",
    },
    {
        label: "Cover Protocol",
        value: "cover-protocol",
        logoURL: "https://icons.llama.fi/cover-protocol.jpg",
    },
    {
        label: "BTCST",
        value: "btcst",
        logoURL: "https://icons.llama.fi/btcst.png",
    },
    {
        label: "Keom Protocol",
        value: "keom-protocol",
        logoURL: "https://icons.llama.fi/keom-protocol.jpg",
    },
    {
        label: "Aavegotchi",
        value: "aavegotchi",
        logoURL: "https://icons.llama.fi/aavegotchi.png",
    },
    {
        label: "Nested",
        value: "nested",
        logoURL: "https://icons.llama.fi/nested.png",
    },
    {
        label: "Tashi",
        value: "tashi",
        logoURL: "https://icons.llama.fi/tashi.png",
    },
    {
        label: "0vix",
        value: "0vix",
        logoURL: "https://icons.llama.fi/0vix.png",
    },
    {
        label: "ION DAO",
        value: "ion-dao",
        logoURL: "https://icons.llama.fi/ion-dao.png",
    },
    {
        label: "MetalSwap",
        value: "metalswap",
        logoURL: "https://icons.llama.fi/metalswap.png",
    },
    {
        label: "Maia V3",
        value: "maia-v3",
        logoURL: "https://icons.llama.fi/maia-v3.jpg",
    },
    {
        label: "Swamp Finance",
        value: "swamp-finance",
        logoURL: "https://icons.llama.fi/swamp-finance.png",
    },
    {
        label: "JewelSwap Leveraged Farming",
        value: "jewelswap-leveraged-farming",
        logoURL: "https://icons.llama.fi/jewelswap-leveraged-farming.png",
    },
    {
        label: "Rage Trade",
        value: "rage-trade",
        logoURL: "https://icons.llama.fi/rage-trade.png",
    },
    {
        label: "88mph",
        value: "88mph",
        logoURL: "https://icons.llama.fi/88mph.png",
    },
    {
        label: "Levvy for Tokens",
        value: "levvy-for-tokens",
        logoURL: "https://icons.llama.fi/levvy-for-tokens.jpg",
    },
    {
        label: "BTSE",
        value: "btse",
        logoURL: "https://icons.llama.fi/btse.jpg",
    },
    {
        label: "xALGO Liquid Governance",
        value: "xalgo-liquid-governance",
        logoURL: "https://icons.llama.fi/xalgo-liquid-governance.png",
    },
    {
        label: "DeepBook",
        value: "deepbook",
        logoURL: "https://icons.llama.fi/deepbook.jpg",
    },
    {
        label: "Pippi",
        value: "pippi",
        logoURL: "https://icons.llama.fi/pippi.png",
    },
    {
        label: "MM Finance Polygon",
        value: "mm-finance-polygon",
        logoURL: "https://icons.llama.fi/mm-finance-polygon.png",
    },
    {
        label: "YFX",
        value: "yfx",
        logoURL: "https://icons.llama.fi/yfx.jpg",
    },
    {
        label: "Popsicle Finance",
        value: "popsicle-finance",
        logoURL: "https://icons.llama.fi/popsicle-finance.jpg",
    },
    {
        label: "VVS Flawless",
        value: "vvs-flawless",
        logoURL: "https://icons.llama.fi/vvs-flawless.jpg",
    },
    {
        label: "Perlin",
        value: "perlin",
        logoURL: "https://icons.llama.fi/perlin.jpg",
    },
    {
        label: "DX25",
        value: "dx25",
        logoURL: "https://icons.llama.fi/dx25.png",
    },
    {
        label: "Ocean One",
        value: "ocean-one",
        logoURL: "https://icons.llama.fi/ocean-one.png",
    },
    {
        label: "Saros",
        value: "saros",
        logoURL: "https://icons.llama.fi/saros.svg",
    },
    {
        label: "CUBISwap",
        value: "cubiswap",
        logoURL: "https://icons.llama.fi/cubiswap.png",
    },
    {
        label: "EraLend",
        value: "eralend",
        logoURL: "https://icons.llama.fi/eralend.png",
    },
    {
        label: "LFGSwap Core",
        value: "lfgswap-core",
        logoURL: "https://icons.llama.fi/lfgswap.png",
    },
    {
        label: "IcecreamSwap",
        value: "icecreamswap",
        logoURL: "https://icons.llama.fi/icecreamswap.png",
    },
    {
        label: "Hats.V1",
        value: "hats.v1",
        logoURL: "https://icons.llama.fi/hats.v1.png",
    },
    {
        label: "Levinswap",
        value: "levinswap",
        logoURL: "https://icons.llama.fi/levinswap.jpg",
    },
    {
        label: "OpenOcean",
        value: "openocean",
        logoURL: "https://icons.llama.fi/openocean.jpg",
    },
    {
        label: "Deri Protocol",
        value: "deri-protocol",
        logoURL: "https://icons.llama.fi/deri-protocol.png",
    },
    {
        label: "Rabbit Finance",
        value: "rabbit-finance",
        logoURL: "https://icons.llama.fi/rabbit-finance.jpg",
    },
    {
        label: "Puzzle Swap",
        value: "puzzle-swap",
        logoURL: "https://icons.llama.fi/puzzle-swap.jpg",
    },
    {
        label: "UniDex",
        value: "unidex",
        logoURL: "https://icons.llama.fi/unidex.jpg",
    },
    {
        label: "Hats.V2",
        value: "hats.v2",
        logoURL: "https://icons.llama.fi/hats.v2.png",
    },
    {
        label: "Lynex",
        value: "lynex",
        logoURL: "https://icons.llama.fi/lynex.png",
    },
    {
        label: "Synthswap V2",
        value: "synthswap-v2",
        logoURL: "https://icons.llama.fi/synthswap-v2.jpg",
    },
    {
        label: "Unipilot",
        value: "unipilot",
        logoURL: "https://icons.llama.fi/unipilot.png",
    },
    {
        label: "Gable Finance",
        value: "gable-finance",
        logoURL: "https://icons.llama.fi/gable-finance.jpg",
    },
    {
        label: "SocialSwap",
        value: "socialswap",
        logoURL: "https://icons.llama.fi/socialswap.jpg",
    },
    {
        label: "MiaSwap",
        value: "miaswap",
        logoURL: "https://icons.llama.fi/miaswap.jpg",
    },
    {
        label: "Palmswap",
        value: "palmswap",
        logoURL: "https://icons.llama.fi/palmswap.jpg",
    },
    {
        label: "JustMoney",
        value: "justmoney",
        logoURL: "https://icons.llama.fi/justmoney.jpg",
    },
    {
        label: "Swop",
        value: "swop",
        logoURL: "https://icons.llama.fi/swop.png",
    },
    {
        label: "The Standard",
        value: "the-standard",
        logoURL: "https://icons.llama.fi/the-standard.jpg",
    },
    {
        label: "Stream Finance",
        value: "stream-finance",
        logoURL: "https://icons.llama.fi/stream-finance.png",
    },
    {
        label: "DogeSwapOrg",
        value: "dogeswaporg",
        logoURL: "https://icons.llama.fi/dogeswaporg.png",
    },
    {
        label: "Alita Finance",
        value: "alita-finance",
        logoURL: "https://icons.llama.fi/alita-finance.png",
    },
    {
        label: "Polycat Dex",
        value: "polycat-dex",
        logoURL: "https://icons.llama.fi/polycat-dex.jpg",
    },
    {
        label: "Aboard Exchange",
        value: "aboard-exchange",
        logoURL: "https://icons.llama.fi/aboard-exchange.jpg",
    },
    {
        label: "OolongSwap",
        value: "oolongswap",
        logoURL: "https://icons.llama.fi/oolongswap.jpg",
    },
    {
        label: "Flashstake",
        value: "flashstake",
        logoURL: "https://icons.llama.fi/flashstake.png",
    },
    {
        label: "Aftermath afSUI",
        value: "aftermath-afsui",
        logoURL: "https://icons.llama.fi/aftermath-afsui.jpg",
    },
    {
        label: "Ditto",
        value: "ditto",
        logoURL: "https://icons.llama.fi/ditto.png",
    },
    {
        label: "BurgerSwap",
        value: "burgerswap",
        logoURL: "https://icons.llama.fi/burgerswap.jpg",
    },
    {
        label: "Aldrin",
        value: "aldrin",
        logoURL: "https://icons.llama.fi/aldrin.png",
    },
    {
        label: "APY Finance",
        value: "apy-finance",
        logoURL: "https://icons.llama.fi/apy-finance.jpg",
    },
    {
        label: "Raft",
        value: "raft",
        logoURL: "https://icons.llama.fi/raft.png",
    },
    {
        label: "JetSwap",
        value: "jetswap",
        logoURL: "https://icons.llama.fi/jetswap.png",
    },
    {
        label: "Paladin Vote",
        value: "paladin-vote",
        logoURL: "https://icons.llama.fi/paladin-vote.jpg",
    },
    {
        label: "Olive",
        value: "olive",
        logoURL: "https://icons.llama.fi/olive.png",
    },
    {
        label: "Crystl Finance",
        value: "crystl-finance",
        logoURL: "https://icons.llama.fi/crystl-finance.png",
    },
    {
        label: "Wavelength DAO",
        value: "wavelength-dao",
        logoURL: "https://icons.llama.fi/wavelength-dao.jpg",
    },
    {
        label: "Velocore V1",
        value: "velocore-v1",
        logoURL: "https://icons.llama.fi/velocore-v1.png",
    },
    {
        label: "SWFT",
        value: "swft",
        logoURL: "https://icons.llama.fi/swft.jpg",
    },
    {
        label: "Velvet V2",
        value: "velvet-v2",
        logoURL: "https://icons.llama.fi/velvet-v2.jpg",
    },
    {
        label: "MVCSwap",
        value: "mvcswap",
        logoURL: "https://icons.llama.fi/mvcswap.png",
    },
    {
        label: "Bifrost Dex",
        value: "bifrost-dex",
        logoURL: "https://icons.llama.fi/bifrost-dex.jpg",
    },
    {
        label: "Yupana",
        value: "yupana",
        logoURL: "https://icons.llama.fi/yupana.png",
    },
    {
        label: "Resonate Finance",
        value: "resonate-finance",
        logoURL: "https://icons.llama.fi/resonate-finance.png",
    },
    {
        label: "BlockNG",
        value: "blockng",
        logoURL: "https://icons.llama.fi/blockng.png",
    },
    {
        label: "Neptune Mutual",
        value: "neptune-mutual",
        logoURL: "https://icons.llama.fi/neptune-mutual.png",
    },
    {
        label: "BXH",
        value: "bxh",
        logoURL: "https://icons.llama.fi/bxh.jpg",
    },
    {
        label: "Spartan",
        value: "spartan",
        logoURL: "https://icons.llama.fi/spartan.png",
    },
    {
        label: "NFTb",
        value: "nftb",
        logoURL: "https://icons.llama.fi/nftb.jpg",
    },
    {
        label: "Pilot Protocol",
        value: "pilot-protocol",
        logoURL: "https://icons.llama.fi/pilot-protocol.png",
    },
    {
        label: "iTrust Finance",
        value: "itrust-finance",
        logoURL: "https://icons.llama.fi/itrust-finance.png",
    },
    {
        label: "O3 Swap",
        value: "o3-swap",
        logoURL: "https://icons.llama.fi/o3-swap.jpg",
    },
    {
        label: "Illuminate",
        value: "illuminate",
        logoURL: "https://icons.llama.fi/illuminate.png",
    },
    {
        label: "Aequinox",
        value: "aequinox",
        logoURL: "https://icons.llama.fi/aequinox.jpg",
    },
    {
        label: "BeamSwap Stable AMM",
        value: "beamswap-stable-amm",
        logoURL: "https://icons.llama.fi/beamswap-stable-amm.jpg",
    },
    {
        label: "JulSwap",
        value: "julswap",
        logoURL: "https://icons.llama.fi/julswap.jpg",
    },
    {
        label: "GumBall Protocol",
        value: "gumball-protocol",
        logoURL: "https://icons.llama.fi/gumball-protocol.png",
    },
    {
        label: "Sumer.money",
        value: "sumer.money",
        logoURL: "https://icons.llama.fi/sumer.money.png",
    },
    {
        label: "AstroSwap",
        value: "astroswap",
        logoURL: "https://icons.llama.fi/astroswap.jpg",
    },
    {
        label: "Zenlink AMM",
        value: "zenlink-amm",
        logoURL: "https://icons.llama.fi/zenlink-amm.png",
    },
    {
        label: "Purple Bridge DEX",
        value: "purple-bridge-dex",
        logoURL: "https://icons.llama.fi/purple-bridge-dex.jpg",
    },
    {
        label: "Pika",
        value: "pika",
        logoURL: "https://icons.llama.fi/pika.png",
    },
    {
        label: "Amphora",
        value: "amphora",
        logoURL: "https://icons.llama.fi/amphora.png",
    },
    {
        label: "Perennial V1",
        value: "perennial-v1",
        logoURL: "https://icons.llama.fi/perennial.jpg",
    },
    {
        label: "Tethys Perpetual",
        value: "tethys-perpetual",
        logoURL: "https://icons.llama.fi/tethys-finance.png",
    },
    {
        label: "Struct Finance",
        value: "struct-finance",
        logoURL: "https://icons.llama.fi/struct-finance.jpg",
    },
    {
        label: "Cometh",
        value: "cometh",
        logoURL: "https://icons.llama.fi/cometh.jpg",
    },
    {
        label: "BMX",
        value: "bmx",
        logoURL: "https://icons.llama.fi/bmx.jpg",
    },
    {
        label: "Streamflow",
        value: "streamflow",
        logoURL: "https://icons.llama.fi/streamflow.jpg",
    },
    {
        label: "CronaSwap",
        value: "cronaswap",
        logoURL: "https://icons.llama.fi/cronaswap.png",
    },
    {
        label: "BLEX",
        value: "blex",
        logoURL: "https://icons.llama.fi/blex.jpg",
    },
    {
        label: "CALC",
        value: "calc",
        logoURL: "https://icons.llama.fi/calc.jpg",
    },
    {
        label: "Beam Swap",
        value: "beam-swap",
        logoURL: "https://icons.llama.fi/beam-swap.png",
    },
    {
        label: "Rollup Finance Stake",
        value: "rollup-finance-stake",
        logoURL: "https://icons.llama.fi/rollup-finance.png",
    },
    {
        label: "Sphynx",
        value: "sphynx",
        logoURL: "https://icons.llama.fi/sphynx.png",
    },
    {
        label: "Ante Finance",
        value: "ante-finance",
        logoURL: "https://icons.llama.fi/ante-finance.png",
    },
    {
        label: "MarginX",
        value: "marginx",
        logoURL: "https://icons.llama.fi/marginx.jpg",
    },
    {
        label: "SpiritSwap Lending",
        value: "spiritswap-lending",
        logoURL: "https://icons.llama.fi/spiritswap.jpg",
    },
    {
        label: "Brahma",
        value: "brahma",
        logoURL: "https://icons.llama.fi/brahma.jpg",
    },
    {
        label: "veSync",
        value: "vesync",
        logoURL: "https://icons.llama.fi/vesync.jpg",
    },
    {
        label: "GotchiVault",
        value: "gotchivault",
        logoURL: "https://icons.llama.fi/gotchivault.png",
    },
    {
        label: "RocketSwap Base",
        value: "rocketswap-base",
        logoURL: "https://icons.llama.fi/rocketswap-base.png",
    },
    {
        label: "Ensuro",
        value: "ensuro",
        logoURL: "https://icons.llama.fi/ensuro.jpg",
    },
    {
        label: "Kalmy App",
        value: "kalmy-app",
        logoURL: "https://icons.llama.fi/kalmy.png",
    },
    {
        label: "Convergence",
        value: "convergence",
        logoURL: "https://icons.llama.fi/convergence.jpg",
    },
    {
        label: "Cog",
        value: "cog",
        logoURL: "https://icons.llama.fi/cog.png",
    },
    {
        label: "anetaBTC",
        value: "anetabtc",
        logoURL: "https://icons.llama.fi/anetabtc.jpg",
    },
    {
        label: "Bonkswap",
        value: "bonkswap",
        logoURL: "https://icons.llama.fi/bonkswap.jpg",
    },
    {
        label: "Bitindi Dex",
        value: "bitindi-dex",
        logoURL: "https://icons.llama.fi/bitindi-dex.jpg",
    },
    {
        label: "Kogefarm",
        value: "kogefarm",
        logoURL: "https://icons.llama.fi/kogefarm.png",
    },
    {
        label: "Merkle Trade",
        value: "merkle-trade",
        logoURL: "https://icons.llama.fi/merkle-trade.jpg",
    },
    {
        label: "Veax",
        value: "veax",
        logoURL: "https://icons.llama.fi/veax.png",
    },
    {
        label: "Opyn Convexity",
        value: "opyn-convexity",
        logoURL: "https://icons.llama.fi/opyn-convexity.jpg",
    },
    {
        label: "JSwap",
        value: "jswap",
        logoURL: "https://icons.llama.fi/jswap.png",
    },
    {
        label: "Rubicon",
        value: "rubicon",
        logoURL: "https://icons.llama.fi/rubicon.jpg",
    },
    {
        label: "Alien Base StableSwap",
        value: "alien-base-stableswap",
        logoURL: "https://icons.llama.fi/alien-base-stableswap.jpg",
    },
    {
        label: "Conic Finance",
        value: "conic-finance",
        logoURL: "https://icons.llama.fi/conic-finance.jpg",
    },
    {
        label: "SiennaSwap",
        value: "siennaswap",
        logoURL: "https://icons.llama.fi/siennaswap.jpg",
    },
    {
        label: "KSwap Finance",
        value: "kswap-finance",
        logoURL: "https://icons.llama.fi/kswap-finance.jpg",
    },
    {
        label: "Voltz",
        value: "voltz",
        logoURL: "https://icons.llama.fi/voltz.png",
    },
    {
        label: "Arbor Finance",
        value: "arbor-finance",
        logoURL: "https://icons.llama.fi/arbor-finance.png",
    },
    {
        label: "Step Exchange",
        value: "step-exchange",
        logoURL: "https://icons.llama.fi/step-exchange.jpg",
    },
    {
        label: "Atomic Green",
        value: "atomic-green",
        logoURL: "https://icons.llama.fi/atomic-green.png",
    },
    {
        label: "ThetaSwap",
        value: "thetaswap",
        logoURL: "https://icons.llama.fi/thetaswap.png",
    },
    {
        label: "NEOPIN Liquid",
        value: "neopin-liquid",
        logoURL: "https://icons.llama.fi/neopin-liquid.png",
    },
    {
        label: "Big Data Protocol",
        value: "big-data-protocol",
        logoURL: "https://icons.llama.fi/big-data-protocol.jpg",
    },
    {
        label: "Typus Finance",
        value: "typus-finance",
        logoURL: "https://icons.llama.fi/typus-finance.jpg",
    },
    {
        label: "eZKalibur",
        value: "ezkalibur",
        logoURL: "https://icons.llama.fi/ezkalibur.jpg",
    },
    {
        label: "Paladin Warlord",
        value: "paladin-warlord",
        logoURL: "https://icons.llama.fi/paladin-warlord.jpg",
    },
    {
        label: "Coinswap Space",
        value: "coinswap-space",
        logoURL: "https://icons.llama.fi/coinswap-space.jpg",
    },
    {
        label: "Sharky",
        value: "sharky",
        logoURL: "https://icons.llama.fi/sharky.jpg",
    },
    {
        label: "Volmex",
        value: "volmex",
        logoURL: "https://icons.llama.fi/volmex.jpg",
    },
    {
        label: "ThetaCash",
        value: "thetacash",
        logoURL: "https://icons.llama.fi/tbill.png",
    },
    {
        label: "Alcor Exchange",
        value: "alcor-exchange",
        logoURL: "https://icons.llama.fi/alcor-exchange.png",
    },
    {
        label: "Spool V2",
        value: "spool-v2",
        logoURL: "https://icons.llama.fi/spool-v2.jpg",
    },
    {
        label: "Charm Finance",
        value: "charm-finance",
        logoURL: "https://icons.llama.fi/charm-finance.jpg",
    },
    {
        label: "DotOracle",
        value: "dotoracle",
        logoURL: "https://icons.llama.fi/dotoracle.jpg",
    },
    {
        label: "Onchain Trade",
        value: "onchain-trade",
        logoURL: "https://icons.llama.fi/onchain-trade.png",
    },
    {
        label: "Cryptex V1",
        value: "cryptex-v1",
        logoURL: "https://icons.llama.fi/cryptex-finance.jpg",
    },
    {
        label: "Proteo Defi",
        value: "proteo-defi",
        logoURL: "https://icons.llama.fi/proteo-defi.jpg",
    },
    {
        label: "HiveSwap",
        value: "hiveswap",
        logoURL: "https://icons.llama.fi/hiveswap.png",
    },
    {
        label: "PowerPool",
        value: "powerpool",
        logoURL: "https://icons.llama.fi/powerpool.png",
    },
    {
        label: "ZKasino",
        value: "zkasino",
        logoURL: "https://icons.llama.fi/zkasino.jpg",
    },
    {
        label: "Pacoca",
        value: "pacoca",
        logoURL: "https://icons.llama.fi/pacoca.jpg",
    },
    {
        label: "SolidLizard",
        value: "solidlizard",
        logoURL: "https://icons.llama.fi/solidlizard.png",
    },
    {
        label: "Protectorate Protocol",
        value: "protectorate-protocol",
        logoURL: "https://icons.llama.fi/protectorate-protocol.png",
    },
    {
        label: "ABEL Finance",
        value: "abel-finance",
        logoURL: "https://icons.llama.fi/abel-finance.png",
    },
    {
        label: "KuSwap",
        value: "kuswap",
        logoURL: "https://icons.llama.fi/kuswap.png",
    },
    {
        label: "Butter Network",
        value: "butter-network",
        logoURL: "https://icons.llama.fi/butter-network.png",
    },
    {
        label: "Ruby.Exchange Stable",
        value: "ruby.exchange-stable",
        logoURL: "https://icons.llama.fi/ruby.exchange-stable.jpg",
    },
    {
        label: "Brine.fi",
        value: "brine.fi",
        logoURL: "https://icons.llama.fi/brine.fi.jpg",
    },
    {
        label: "sCANTO",
        value: "scanto",
        logoURL: "https://icons.llama.fi/scanto.png",
    },
    {
        label: "Intercroneswap",
        value: "intercroneswap",
        logoURL: "https://icons.llama.fi/intercroneswap.png",
    },
    {
        label: "Contango V1",
        value: "contango-v1",
        logoURL: "https://icons.llama.fi/contango.png",
    },
    {
        label: "Paraluni Masterchef",
        value: "paraluni-masterchef",
        logoURL: "https://icons.llama.fi/paraluni.png",
    },
    {
        label: "Midas Capital",
        value: "midas-capital",
        logoURL: "https://icons.llama.fi/midas-capital.jpg",
    },
    {
        label: "Arbswap StableSwap",
        value: "arbswap-stableswap",
        logoURL: "https://icons.llama.fi/arbswap-stableswap.jpg",
    },
    {
        label: "TronNRG",
        value: "tronnrg",
        logoURL: "https://icons.llama.fi/tronnrg.png",
    },
    {
        label: "Vexchange",
        value: "vexchange",
        logoURL: "https://icons.llama.fi/vexchange.jpg",
    },
    {
        label: "KibbleSwap",
        value: "kibbleswap",
        logoURL: "https://icons.llama.fi/kibbleswap.png",
    },
    {
        label: "cSwap",
        value: "cswap",
        logoURL: "https://icons.llama.fi/cswap.jpg",
    },
    {
        label: "DFX Finance",
        value: "dfx-finance",
        logoURL: "https://icons.llama.fi/dfx-finance.jpg",
    },
    {
        label: "Hodlify",
        value: "hodlify",
        logoURL: "https://icons.llama.fi/hodlify.jpg",
    },
    {
        label: "NemoSwap",
        value: "nemoswap",
        logoURL: "https://icons.llama.fi/nemoswap.png",
    },
    {
        label: "BeamSwap Classic",
        value: "beamswap-classic",
        logoURL: "https://icons.llama.fi/beamswap-classic.jpg",
    },
    {
        label: "Axion",
        value: "axion",
        logoURL: "https://icons.llama.fi/axion.svg",
    },
    {
        label: "TangleSwap",
        value: "tangleswap",
        logoURL: "https://icons.llama.fi/tangleswap.png",
    },
    {
        label: "Dinosaur Eggs",
        value: "dinosaur-eggs",
        logoURL: "https://icons.llama.fi/dinosaur-eggs.svg",
    },
    {
        label: "QuipuSwap V1",
        value: "quipuswap-v1",
        logoURL: "https://icons.llama.fi/quipuswap.png",
    },
    {
        label: "Sentre",
        value: "sentre",
        logoURL: "https://icons.llama.fi/sentre.png",
    },
    {
        label: "Blue Planet",
        value: "blue-planet",
        logoURL: "https://icons.llama.fi/planet-finance.png",
    },
    {
        label: "Polkaswap",
        value: "polkaswap",
        logoURL: "https://icons.llama.fi/polkaswap.png",
    },
    {
        label: "Zomma Protocol",
        value: "zomma-protocol",
        logoURL: "https://icons.llama.fi/zomma-protocol.jpg",
    },
    {
        label: "Cub Finance",
        value: "cub-finance",
        logoURL: "https://icons.llama.fi/cub-finance.svg",
    },
    {
        label: "Stars Arena",
        value: "stars-arena",
        logoURL: "https://icons.llama.fi/star-shares.png",
    },
    {
        label: "Teller",
        value: "teller",
        logoURL: "https://icons.llama.fi/teller.jpg",
    },
    {
        label: "Guru Network",
        value: "guru-network",
        logoURL: "https://icons.llama.fi/guru-network.png",
    },
    {
        label: "Y2K V2",
        value: "y2k-v2",
        logoURL: "https://icons.llama.fi/y2k-finance.jpg",
    },
    {
        label: "RCPswap",
        value: "rcpswap",
        logoURL: "https://icons.llama.fi/rcpswap.png",
    },
    {
        label: "Onyx Protocol",
        value: "onyx-protocol",
        logoURL: "https://icons.llama.fi/onyx-protocol.jpg",
    },
    {
        label: "Caviar V1",
        value: "caviar-v1",
        logoURL: "https://icons.llama.fi/caviar.jpg",
    },
    {
        label: "ThunderPOKT",
        value: "thunderpokt",
        logoURL: "https://icons.llama.fi/thunderpokt.png",
    },
    {
        label: "ReHold V2",
        value: "rehold-v2",
        logoURL: "https://icons.llama.fi/rehold-v2.png",
    },
    {
        label: "Siren",
        value: "siren",
        logoURL: "https://icons.llama.fi/siren.png",
    },
    {
        label: "WardenSwap",
        value: "wardenswap",
        logoURL: "https://icons.llama.fi/wardenswap.jpg",
    },
    {
        label: "HaloTrade",
        value: "halotrade",
        logoURL: "https://icons.llama.fi/halotrade.png",
    },
    {
        label: "Cozy V1",
        value: "cozy-v1",
        logoURL: "https://icons.llama.fi/cozy-finance.png",
    },
    {
        label: "Collectif DAO",
        value: "collectif-dao",
        logoURL: "https://icons.llama.fi/collectif-dao.jpg",
    },
    {
        label: "PinkSwap",
        value: "pinkswap",
        logoURL: "https://icons.llama.fi/pinkswap.png",
    },
    {
        label: "MochiFi",
        value: "mochifi",
        logoURL: "https://icons.llama.fi/mochifi.png",
    },
    {
        label: "Pawnfi Lending",
        value: "pawnfi-lending",
        logoURL: "https://icons.llama.fi/pawnfi.png",
    },
    {
        label: "CoinEx",
        value: "coinex",
        logoURL: "https://icons.llama.fi/coinex.jpg",
    },
    {
        label: "Tokenlon",
        value: "tokenlon",
        logoURL: "https://icons.llama.fi/tokenlon.jpg",
    },
    {
        label: "Parallel AMM",
        value: "parallel-amm",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "Kintsugi",
        value: "kintsugi",
        logoURL: "https://icons.llama.fi/kintsugi.png",
    },
    {
        label: "PacificSwap V3",
        value: "pacificswap-v3",
        logoURL: "https://icons.llama.fi/pacificswap-v3.jpg",
    },
    {
        label: "ShadowSwap",
        value: "shadowswap",
        logoURL: "https://icons.llama.fi/shadowswap.jpg",
    },
    {
        label: "Taiga Karura",
        value: "taiga-karura",
        logoURL: "https://icons.llama.fi/taiga-protocol.png",
    },
    {
        label: "GIBXSwap",
        value: "gibxswap",
        logoURL: "https://icons.llama.fi/gibxswap.png",
    },
    {
        label: "Mobius Money",
        value: "mobius-money",
        logoURL: "https://icons.llama.fi/mobius-money.png",
    },
    {
        label: "Starswap Starcoin",
        value: "starswap-starcoin",
        logoURL: "https://icons.llama.fi/starswap-starcoin.jpg",
    },
    {
        label: "Pangea Swap",
        value: "pangea-swap",
        logoURL: "https://icons.llama.fi/pangea-swap.png",
    },
    {
        label: "Energiswap",
        value: "energiswap",
        logoURL: "https://icons.llama.fi/energiswap.jpg",
    },
    {
        label: "Bond Protocol",
        value: "bond-protocol",
        logoURL: "https://icons.llama.fi/bond-protocol.png",
    },
    {
        label: "Quoll",
        value: "quoll",
        logoURL: "https://icons.llama.fi/quoll.png",
    },
    {
        label: "zkDX",
        value: "zkdx",
        logoURL: "https://icons.llama.fi/zkdx.png",
    },
    {
        label: "Ruby.Exchange Yield",
        value: "ruby.exchange-yield",
        logoURL: "https://icons.llama.fi/ruby.exchange-yield.jpg",
    },
    {
        label: "TProtocol V1",
        value: "tprotocol-v1",
        logoURL: "https://icons.llama.fi/tprotocol.jpg",
    },
    {
        label: "Tigris",
        value: "tigris",
        logoURL: "https://icons.llama.fi/tigris.png",
    },
    {
        label: "Pods Finance",
        value: "pods-finance",
        logoURL: "https://icons.llama.fi/pods-finance.jpg",
    },
    {
        label: "EchoDEX V3",
        value: "echodex-v3",
        logoURL: "https://icons.llama.fi/echodex-v3.jpg",
    },
    {
        label: "Knit Finance",
        value: "knit-finance",
        logoURL: "https://icons.llama.fi/knit-finance.png",
    },
    {
        label: "Nocturne",
        value: "nocturne",
        logoURL: "https://icons.llama.fi/nocturne.png",
    },
    {
        label: "Percent Finance",
        value: "percent-finance",
        logoURL: "https://icons.llama.fi/percent-finance.png",
    },
    {
        label: "HorizonDEX",
        value: "horizondex",
        logoURL: "https://icons.llama.fi/horizondex.jpg",
    },
    {
        label: "Forthewin Network",
        value: "forthewin-network",
        logoURL: "https://icons.llama.fi/forthewin-network.png",
    },
    {
        label: "LendeXe Finance",
        value: "lendexe-finance",
        logoURL: "https://icons.llama.fi/lendexe-finance.png",
    },
    {
        label: "JOJO",
        value: "jojo",
        logoURL: "https://icons.llama.fi/jojo.jpg",
    },
    {
        label: "Aptin Finance V2",
        value: "aptin-finance-v2",
        logoURL: "https://icons.llama.fi/aptin-finance-v2.jpg",
    },
    {
        label: "Kujira Orca",
        value: "kujira-orca",
        logoURL: "https://icons.llama.fi/kujira-orca.png",
    },
    {
        label: "Component",
        value: "component",
        logoURL: "https://icons.llama.fi/component.png",
    },
    {
        label: "Radiant V1",
        value: "radiant-v1",
        logoURL: "https://icons.llama.fi/radiant.png",
    },
    {
        label: "Equity",
        value: "equity",
        logoURL: "https://icons.llama.fi/equity.png",
    },
    {
        label: "Fathom Dex",
        value: "fathom-dex",
        logoURL: "https://icons.llama.fi/fathom-dex.png",
    },
    {
        label: "DackieSwap V3",
        value: "dackieswap-v3",
        logoURL: "https://icons.llama.fi/dackieswap-v3.jpg",
    },
    {
        label: "Atlendis",
        value: "atlendis",
        logoURL: "https://icons.llama.fi/atlendis.png",
    },
    {
        label: "Based V1",
        value: "based-v1",
        logoURL: "https://icons.llama.fi/based-v1.jpg",
    },
    {
        label: "MARSWAP",
        value: "marswap",
        logoURL: "https://icons.llama.fi/marswap.jpg",
    },
    {
        label: "Swivel Finance",
        value: "swivel-finance",
        logoURL: "https://icons.llama.fi/swivel-finance.png",
    },
    {
        label: "Neku",
        value: "neku",
        logoURL: "https://icons.llama.fi/neku.png",
    },
    {
        label: "Citrus",
        value: "citrus",
        logoURL: "https://icons.llama.fi/citrus.jpg",
    },
    {
        label: "Crema Finance",
        value: "crema-finance",
        logoURL: "https://icons.llama.fi/crema-finance.png",
    },
    {
        label: "HyperJump",
        value: "hyperjump",
        logoURL: "https://icons.llama.fi/hyperjump.jpg",
    },
    {
        label: "CarbonSwap",
        value: "carbonswap",
        logoURL: "https://icons.llama.fi/carbonswap.jpg",
    },
    {
        label: "Vendor V2",
        value: "vendor-v2",
        logoURL: "https://icons.llama.fi/vendor-finance.png",
    },
    {
        label: "CrowdSwap",
        value: "crowdswap",
        logoURL: "https://icons.llama.fi/crowdswap.jpg",
    },
    {
        label: "xSigma",
        value: "xsigma",
        logoURL: "https://icons.llama.fi/xsigma.jpg",
    },
    {
        label: "SatoshiCoreSwap",
        value: "satoshicoreswap",
        logoURL: "https://icons.llama.fi/satoshicoreswap.png",
    },
    {
        label: "AtomicHub",
        value: "atomichub",
        logoURL: "https://icons.llama.fi/atomichub.png",
    },
    {
        label: "Hadouken AMM",
        value: "hadouken-amm",
        logoURL: "https://icons.llama.fi/hadouken-amm.jpg",
    },
    {
        label: "Swerve",
        value: "swerve",
        logoURL: "https://icons.llama.fi/swerve.jpg",
    },
    {
        label: "HashDAO Finance",
        value: "hashdao-finance",
        logoURL: "https://icons.llama.fi/hashdao-finance.png",
    },
    {
        label: "Polycat",
        value: "polycat",
        logoURL: "https://icons.llama.fi/polycat.png",
    },
    {
        label: "Predy V5",
        value: "predy-v5",
        logoURL: "https://icons.llama.fi/predy-v5.png",
    },
    {
        label: "Overnight USDT+",
        value: "overnight-usdt+",
        logoURL: "https://icons.llama.fi/overnight-usdt+.jpg",
    },
    {
        label: "Tranquil Finance",
        value: "tranquil-finance",
        logoURL: "https://icons.llama.fi/tranq.svg",
    },
    {
        label: "PantherSwap",
        value: "pantherswap",
        logoURL: "https://icons.llama.fi/pantherswap.jpg",
    },
    {
        label: "PembRock Finance",
        value: "pembrock-finance",
        logoURL: "https://icons.llama.fi/pembrock-finance.png",
    },
    {
        label: "Asymmetry Finance",
        value: "asymmetry-finance",
        logoURL: "https://icons.llama.fi/asymmetry-finance.png",
    },
    {
        label: "ZeroLiquid",
        value: "zeroliquid",
        logoURL: "https://icons.llama.fi/zeroliquid.png",
    },
    {
        label: "Iron Finance",
        value: "iron-finance",
        logoURL: "https://icons.llama.fi/iron-finance.jpg",
    },
    {
        label: "FXDX",
        value: "fxdx",
        logoURL: "https://icons.llama.fi/fxdx.png",
    },
    {
        label: "Daytona Finance",
        value: "daytona-finance",
        logoURL: "https://icons.llama.fi/daytona-finance.png",
    },
    {
        label: "Ram Protocol",
        value: "ram-protocol",
        logoURL: "https://icons.llama.fi/ram-protocol.svg",
    },
    {
        label: "Kai Finance",
        value: "kai-finance",
        logoURL: "https://icons.llama.fi/kai-finance.png",
    },
    {
        label: "BarnBridge",
        value: "barnbridge",
        logoURL: "https://icons.llama.fi/barnbridge.png",
    },
    {
        label: "WYND LSD",
        value: "wynd-lsd",
        logoURL: "https://icons.llama.fi/wynd-lsd.jpg",
    },
    {
        label: "METF Finance",
        value: "metf-finance",
        logoURL: "https://icons.llama.fi/metf-finance.png",
    },
    {
        label: "OPX Finance",
        value: "opx-finance",
        logoURL: "https://icons.llama.fi/opx-finance.jpg",
    },
    {
        label: "IMPLS",
        value: "impls",
        logoURL: "https://icons.llama.fi/impls.jpg",
    },
    {
        label: "Ostable",
        value: "ostable",
        logoURL: "https://icons.llama.fi/ostable.png",
    },
    {
        label: "MANTRA DAO",
        value: "mantra-dao",
        logoURL: "https://icons.llama.fi/mantra-dao.png",
    },
    {
        label: "MooniSwap",
        value: "mooniswap",
        logoURL: "https://icons.llama.fi/mooniswap.jpg",
    },
    {
        label: "Beamex",
        value: "beamex",
        logoURL: "https://icons.llama.fi/beamex.jpg",
    },
    {
        label: "Quadrat",
        value: "quadrat",
        logoURL: "https://icons.llama.fi/quadrat.png",
    },
    {
        label: "Lemma",
        value: "lemma",
        logoURL: "https://icons.llama.fi/lemma.png",
    },
    {
        label: "KillSwitch",
        value: "killswitch",
        logoURL: "https://icons.llama.fi/killswitch.svg",
    },
    {
        label: "xBank Finance",
        value: "xbank-finance",
        logoURL: "https://icons.llama.fi/xbank-finance.jpg",
    },
    {
        label: "Polaris Finance",
        value: "polaris-finance",
        logoURL: "https://icons.llama.fi/polaris-finance.png",
    },
    {
        label: "OneSwap",
        value: "oneswap",
        logoURL: "https://icons.llama.fi/oneswap.jpg",
    },
    {
        label: "SharkSwap DEX",
        value: "sharkswap-dex",
        logoURL: "https://icons.llama.fi/sharkswap-dex.jpg",
    },
    {
        label: "Demeter",
        value: "demeter",
        logoURL: "https://icons.llama.fi/demeter.png",
    },
    {
        label: "CityCoins",
        value: "citycoins",
        logoURL: "https://icons.llama.fi/citycoins.png",
    },
    {
        label: "MistSwap",
        value: "mistswap",
        logoURL: "https://icons.llama.fi/mistswap.png",
    },
    {
        label: "Dyson Finance",
        value: "dyson-finance",
        logoURL: "https://icons.llama.fi/dyson-finance.png",
    },
    {
        label: "KLEX Finance",
        value: "klex-finance",
        logoURL: "https://icons.llama.fi/klex-finance.jpg",
    },
    {
        label: "TEN Finance",
        value: "ten-finance",
        logoURL: "https://icons.llama.fi/ten-finance.jpg",
    },
    {
        label: "Tranche Finance",
        value: "tranche-finance",
        logoURL: "https://icons.llama.fi/tranche-finance.jpg",
    },
    {
        label: "Sentiment",
        value: "sentiment",
        logoURL: "https://icons.llama.fi/sentiment.jpg",
    },
    {
        label: "SnowSwap AMM",
        value: "snowswap-amm",
        logoURL: "https://icons.llama.fi/snowswap-amm.png",
    },
    {
        label: "Primex Finance",
        value: "primex-finance",
        logoURL: "https://icons.llama.fi/primex-finance.jpg",
    },
    {
        label: "MM Finance Arbitrum",
        value: "mm-finance-arbitrum",
        logoURL: "https://icons.llama.fi/mm-finance-arbitrum.png",
    },
    {
        label: "Goose Finance",
        value: "goose-finance",
        logoURL: "https://icons.llama.fi/goose-finance.jpg",
    },
    {
        label: "Glacier Exchange V2",
        value: "glacier-exchange-v2",
        logoURL: "https://icons.llama.fi/glacier-finance.png",
    },
    {
        label: "OccamX",
        value: "occamx",
        logoURL: "https://icons.llama.fi/occamx.png",
    },
    {
        label: "MetaLend",
        value: "metalend",
        logoURL: "https://icons.llama.fi/metalend.jpg",
    },
    {
        label: "Lendora Protocol",
        value: "lendora-protocol",
        logoURL: "https://icons.llama.fi/lendora-protocol.jpg",
    },
    {
        label: "NF3 APE",
        value: "nf3-ape",
        logoURL: "https://icons.llama.fi/nf3-ape.png",
    },
    {
        label: "Ooki",
        value: "ooki",
        logoURL: "https://icons.llama.fi/ooki.jpg",
    },
    {
        label: "PheasantSwap",
        value: "pheasantswap",
        logoURL: "https://icons.llama.fi/pheasantswap.jpg",
    },
    {
        label: "deBridge",
        value: "debridge",
        logoURL: "https://icons.llama.fi/debridge.png",
    },
    {
        label: "Moremoney",
        value: "moremoney",
        logoURL: "https://icons.llama.fi/moremoney.jpg",
    },
    {
        label: "xDollar",
        value: "xdollar",
        logoURL: "https://icons.llama.fi/xdollar.png",
    },
    {
        label: "FusionX V2",
        value: "fusionx-v2",
        logoURL: "https://icons.llama.fi/fusionx-v2.jpg",
    },
    {
        label: "stETH.win",
        value: "steth.win",
        logoURL: "https://icons.llama.fi/steth.win.jpg",
    },
    {
        label: "Risk Harbor",
        value: "risk-harbor",
        logoURL: "https://icons.llama.fi/risk-harbor.png",
    },
    {
        label: "VoltSwap",
        value: "voltswap",
        logoURL: "https://icons.llama.fi/voltswap.png",
    },
    {
        label: "LST Optimizer",
        value: "lst-optimizer",
        logoURL: "https://icons.llama.fi/lst-optimizer.png",
    },
    {
        label: "Mycelium Perpetual Pools",
        value: "mycelium-perpetual-pools",
        logoURL: "https://icons.llama.fi/mycelium-perpetual-pools.jpg",
    },
    {
        label: "DexFinance Arbitrum",
        value: "dexfinance-arbitrum",
        logoURL: "https://icons.llama.fi/dexfinance-arbitrum.png",
    },
    {
        label: "YouSwap",
        value: "youswap",
        logoURL: "https://icons.llama.fi/youswap.jpg",
    },
    {
        label: "Jet Margin",
        value: "jet-margin",
        logoURL: "https://icons.llama.fi/jet.jpg",
    },
    {
        label: "Uswap",
        value: "uswap",
        logoURL: "https://icons.llama.fi/uswap.jpg",
    },
    {
        label: "USDFI Lending",
        value: "usdfi-lending",
        logoURL: "https://icons.llama.fi/usdfi-lending.png",
    },
    {
        label: "PonytaSwap",
        value: "ponytaswap",
        logoURL: "https://icons.llama.fi/ponytaswap.png",
    },
    {
        label: "Narwhalswap",
        value: "narwhalswap",
        logoURL: "https://icons.llama.fi/narwhalswap.png",
    },
    {
        label: "Cropper",
        value: "cropper",
        logoURL: "https://icons.llama.fi/cropper.png",
    },
    {
        label: "Voltage Liquid Staking",
        value: "voltage-liquid-staking",
        logoURL: "https://icons.llama.fi/voltage-liquid-staking.jpg",
    },
    {
        label: "Overnight ETH+",
        value: "overnight-eth+",
        logoURL: "https://icons.llama.fi/overnight-eth+.png",
    },
    {
        label: "Black Panther",
        value: "black-panther",
        logoURL: "https://icons.llama.fi/black-panther.jpg",
    },
    {
        label: "LuaSwap",
        value: "luaswap",
        logoURL: "https://icons.llama.fi/luaswap.jpg",
    },
    {
        label: "Popcorn",
        value: "popcorn",
        logoURL: "https://icons.llama.fi/popcorn.png",
    },
    {
        label: "DeeppDAO",
        value: "deeppdao",
        logoURL: "https://icons.llama.fi/deepp.jpg",
    },
    {
        label: "USDO",
        value: "usdo",
        logoURL: "https://icons.llama.fi/usdo.png",
    },
    {
        label: "Penguin Finance",
        value: "penguin-finance",
        logoURL: "https://icons.llama.fi/penguin-finance.png",
    },
    {
        label: "ValueDefi",
        value: "valuedefi",
        logoURL: "https://icons.llama.fi/valuedefi.jpg",
    },
    {
        label: "KoffeeSwap",
        value: "koffeeswap",
        logoURL: "https://icons.llama.fi/koffeswap.jpg",
    },
    {
        label: "Fusion Dex",
        value: "fusion-dex",
        logoURL: "https://icons.llama.fi/fusion-dex.png",
    },
    {
        label: "Union Protocol",
        value: "union-protocol",
        logoURL: "https://icons.llama.fi/union-protocol.png",
    },
    {
        label: "KyotoSwap",
        value: "kyotoswap",
        logoURL: "https://icons.llama.fi/kyotoswap.png",
    },
    {
        label: "OnX Finance",
        value: "onx-finance",
        logoURL: "https://icons.llama.fi/onx-finance.jpg",
    },
    {
        label: "PureSwap",
        value: "pureswap",
        logoURL: "https://icons.llama.fi/pureswap.jpg",
    },
    {
        label: "sKCS",
        value: "skcs",
        logoURL: "https://icons.llama.fi/skcs.png",
    },
    {
        label: "Bridge Mutual",
        value: "bridge-mutual",
        logoURL: "https://icons.llama.fi/bridge-mutual.png",
    },
    {
        label: "Rift Finance",
        value: "rift-finance",
        logoURL: "https://icons.llama.fi/rift-finance.png",
    },
    {
        label: "Basis Cash",
        value: "basis-cash",
        logoURL: "https://icons.llama.fi/basis-cash.jpg",
    },
    {
        label: "Fountain Protocol",
        value: "fountain-protocol",
        logoURL: "https://icons.llama.fi/fountain-protocol.png",
    },
    {
        label: "Unlockd",
        value: "unlockd",
        logoURL: "https://icons.llama.fi/unlockd.png",
    },
    {
        label: "Wasabix",
        value: "wasabix",
        logoURL: "https://icons.llama.fi/wasabix.jpg",
    },
    {
        label: "AuroraSwap",
        value: "auroraswap",
        logoURL: "https://icons.llama.fi/auroraswap.png",
    },
    {
        label: "Pala",
        value: "pala",
        logoURL: "https://icons.llama.fi/pala.jpg",
    },
    {
        label: "Sushi Kashi",
        value: "sushi-kashi",
        logoURL: "https://icons.llama.fi/sushi-kashi.png",
    },
    {
        label: "handle.fi",
        value: "handle.fi",
        logoURL: "https://icons.llama.fi/handle.fi.png",
    },
    {
        label: "Impossible Finance",
        value: "impossible-finance",
        logoURL: "https://icons.llama.fi/impossible-finance.jpg",
    },
    {
        label: "BasketDAO",
        value: "basketdao",
        logoURL: "https://icons.llama.fi/basketdao.jpg",
    },
    {
        label: "Paladin Dullahan",
        value: "paladin-dullahan",
        logoURL: "https://icons.llama.fi/paladin-dullahan.png",
    },
    {
        label: "Indexed Finance",
        value: "indexed-finance",
        logoURL: "https://icons.llama.fi/indexed-finance.jpg",
    },
    {
        label: "Thorstarter",
        value: "thorstarter",
        logoURL: "https://icons.llama.fi/thorstarter.jpg",
    },
    {
        label: "ChewySwap",
        value: "chewyswap",
        logoURL: "https://icons.llama.fi/chewyswap.jpg",
    },
    {
        label: "Algebra DEX",
        value: "algebra-dex",
        logoURL: "https://icons.llama.fi/algebra-dex.png",
    },
    {
        label: "Yam Finance",
        value: "yam-finance",
        logoURL: "https://icons.llama.fi/yam-finance.png",
    },
    {
        label: "Varen",
        value: "varen",
        logoURL: "https://icons.llama.fi/varen.jpg",
    },
    {
        label: "Autoearn Finance",
        value: "autoearn-finance",
        logoURL: "https://icons.llama.fi/autoearn-finance.png",
    },
    {
        label: "Bass Exchange",
        value: "bass-exchange",
        logoURL: "https://icons.llama.fi/bass-exchange.jpg",
    },
    {
        label: "Mars Poolin",
        value: "mars-poolin",
        logoURL: "https://icons.llama.fi/mars-poolin.jpg",
    },
    {
        label: "SigmaFi",
        value: "sigmafi",
        logoURL: "https://icons.llama.fi/sigmafi.png",
    },
    {
        label: "Chronos V2",
        value: "chronos-v2",
        logoURL: "https://icons.llama.fi/chronos.png",
    },
    {
        label: "SheepDex",
        value: "sheepdex",
        logoURL: "https://icons.llama.fi/sheepdex.jpg",
    },
    {
        label: "DexPad",
        value: "dexpad",
        logoURL: "https://icons.llama.fi/dexpad.png",
    },
    {
        label: "LaserSwap",
        value: "laserswap",
        logoURL: "https://icons.llama.fi/laserswap.png",
    },
    {
        label: "Hundred Finance",
        value: "hundred-finance",
        logoURL: "https://icons.llama.fi/hundred-finance.jpg",
    },
    {
        label: "zkEra Finance",
        value: "zkera-finance",
        logoURL: "https://icons.llama.fi/zkera-finance.jpg",
    },
    {
        label: "SuperFarm",
        value: "superfarm",
        logoURL: "https://icons.llama.fi/superfarm.png",
    },
    {
        label: "Dogewhale",
        value: "dogewhale",
        logoURL: "https://icons.llama.fi/dogewhale.png",
    },
    {
        label: "StarSwap",
        value: "starswap",
        logoURL: "https://icons.llama.fi/starswap.png",
    },
    {
        label: "Elephant Money",
        value: "elephant-money",
        logoURL: "https://icons.llama.fi/elephant-money.png",
    },
    {
        label: "Nsure",
        value: "nsure",
        logoURL: "https://icons.llama.fi/nsure.jpg",
    },
    {
        label: "StackSwap",
        value: "stackswap",
        logoURL: "https://icons.llama.fi/stackswap.png",
    },
    {
        label: "Realperp",
        value: "realperp",
        logoURL: "https://icons.llama.fi/realperp.jpg",
    },
    {
        label: "FinNexus",
        value: "finnexus",
        logoURL: "https://icons.llama.fi/finnexus.jpg",
    },
    {
        label: "Cometa",
        value: "cometa",
        logoURL: "https://icons.llama.fi/cometa.png",
    },
    {
        label: "Polynomial Earn",
        value: "polynomial-earn",
        logoURL: "https://icons.llama.fi/polynomial-earn.png",
    },
    {
        label: "Dracula Finance",
        value: "dracula-finance",
        logoURL: "https://icons.llama.fi/dracula-finance.png",
    },
    {
        label: "EchoDEX V2",
        value: "echodex-v2",
        logoURL: "https://icons.llama.fi/echodex-v2.jpg",
    },
    {
        label: "Nereus Finance",
        value: "nereus-finance",
        logoURL: "https://icons.llama.fi/nereus-finance.png",
    },
    {
        label: "Jumbo Exchange",
        value: "jumbo-exchange",
        logoURL: "https://icons.llama.fi/jumbo-exchange.png",
    },
    {
        label: "Polydex",
        value: "polydex",
        logoURL: "https://icons.llama.fi/polydex.jpg",
    },
    {
        label: "Sable Finance",
        value: "sable-finance",
        logoURL: "https://icons.llama.fi/sable-finance.jpg",
    },
    {
        label: "Float Protocol",
        value: "float-protocol",
        logoURL: "https://icons.llama.fi/float-protocol.png",
    },
    {
        label: "SpaceFi Scroll",
        value: "spacefi-scroll",
        logoURL: "https://icons.llama.fi/spacefi.png",
    },
    {
        label: "Growth DeFi",
        value: "growth-defi",
        logoURL: "https://icons.llama.fi/growth-defi.png",
    },
    {
        label: "MegaMoon",
        value: "megamoon",
        logoURL: "https://icons.llama.fi/megamoon.jpg",
    },
    {
        label: "PhotonSwap Finance",
        value: "photonswap-finance",
        logoURL: "https://icons.llama.fi/photonswap-finance.jpg",
    },
    {
        label: "APWine",
        value: "apwine",
        logoURL: "https://icons.llama.fi/apwine.jpg",
    },
    {
        label: "Adamant Finance",
        value: "adamant-finance",
        logoURL: "https://icons.llama.fi/adamant-finance.png",
    },
    {
        label: "Solidly V2",
        value: "solidly-v2",
        logoURL: "https://icons.llama.fi/solidly-v2.png",
    },
    {
        label: "Dystopia",
        value: "dystopia",
        logoURL: "https://icons.llama.fi/dystopia.png",
    },
    {
        label: "Unit Protocol",
        value: "unit-protocol",
        logoURL: "https://icons.llama.fi/unit-protocol.jpg",
    },
    {
        label: "Cap",
        value: "cap",
        logoURL: "https://icons.llama.fi/cap.jpg",
    },
    {
        label: "GemKeeper",
        value: "gemkeeper",
        logoURL: "https://icons.llama.fi/gemkeeper.png",
    },
    {
        label: "UniPower",
        value: "unipower",
        logoURL: "https://icons.llama.fi/unipower.jpg",
    },
    {
        label: "Orion Money",
        value: "orion-money",
        logoURL: "https://icons.llama.fi/orion-money.jpg",
    },
    {
        label: "Vigor",
        value: "vigor",
        logoURL: "https://icons.llama.fi/vigor.png",
    },
    {
        label: "Basemax",
        value: "basemax",
        logoURL: "https://icons.llama.fi/basemax.jpg",
    },
    {
        label: "Sobal",
        value: "sobal",
        logoURL: "https://icons.llama.fi/sobal.png",
    },
    {
        label: "VeRocket",
        value: "verocket",
        logoURL: "https://icons.llama.fi/verocket.png",
    },
    {
        label: "Alkemi",
        value: "alkemi",
        logoURL: "https://icons.llama.fi/alkemi.png",
    },
    {
        label: "OreoSwap",
        value: "oreoswap",
        logoURL: "https://icons.llama.fi/oreoswap.png",
    },
    {
        label: "Unilend",
        value: "unilend",
        logoURL: "https://icons.llama.fi/unilend.jpg",
    },
    {
        label: "Unagii",
        value: "unagii",
        logoURL: "https://icons.llama.fi/unagii.jpg",
    },
    {
        label: "Mimas Finance",
        value: "mimas-finance",
        logoURL: "https://icons.llama.fi/mimas-finance.png",
    },
    {
        label: "WannaSwap",
        value: "wannaswap",
        logoURL: "https://icons.llama.fi/wannaswap.jpg",
    },
    {
        label: "NUON Finance",
        value: "nuon-finance",
        logoURL: "https://icons.llama.fi/antfarm-finance.jpg",
    },
    {
        label: "Revert V3 Staker",
        value: "revert-v3-staker",
        logoURL: "https://icons.llama.fi/revert-v3-staker.png",
    },
    {
        label: "Nostra alpha",
        value: "nostra-alpha",
        logoURL: "https://icons.llama.fi/nostra.jpg",
    },
    {
        label: "Spectrum Protocol",
        value: "spectrum-protocol",
        logoURL: "https://icons.llama.fi/spectrum-protocol.jpg",
    },
    {
        label: "Mero",
        value: "mero",
        logoURL: "https://icons.llama.fi/mero.png",
    },
    {
        label: "SwapBased Perp",
        value: "swapbased-perp",
        logoURL: "https://icons.llama.fi/swapbased-perp.jpg",
    },
    {
        label: "TokenPocket",
        value: "tokenpocket",
        logoURL: "https://icons.llama.fi/tokenpocket.jpg",
    },
    {
        label: "Layer2 Finance",
        value: "layer2-finance",
        logoURL: "https://icons.llama.fi/layer2-finance.png",
    },
    {
        label: "Fuji V1",
        value: "fuji-v1",
        logoURL: "https://icons.llama.fi/fuji-finance.png",
    },
    {
        label: "KDSwap",
        value: "kdswap",
        logoURL: "https://icons.llama.fi/kdswap.png",
    },
    {
        label: "Amun",
        value: "amun",
        logoURL: "https://icons.llama.fi/amun-tokens.png",
    },
    {
        label: "Solidex",
        value: "solidex",
        logoURL: "https://icons.llama.fi/solidex.png",
    },
    {
        label: "iZUMi LiquidBox",
        value: "izumi-liquidbox",
        logoURL: "https://icons.llama.fi/izumi-liquidbox.png",
    },
    {
        label: "Huckleberry AMM",
        value: "huckleberry-amm",
        logoURL: "https://icons.llama.fi/huckleberry-amm.png",
    },
    {
        label: "Dove Swap V3",
        value: "dove-swap-v3",
        logoURL: "https://icons.llama.fi/dove-swap-v3.png",
    },
    {
        label: "GOGOcoin",
        value: "gogocoin",
        logoURL: "https://icons.llama.fi/gogocoin.png",
    },
    {
        label: "Lien",
        value: "lien",
        logoURL: "https://icons.llama.fi/lien.jpg",
    },
    {
        label: "Vestige",
        value: "vestige",
        logoURL: "https://icons.llama.fi/vestige.png",
    },
    {
        label: "Poolside",
        value: "poolside",
        logoURL: "https://icons.llama.fi/poolside.jpg",
    },
    {
        label: "Concordex",
        value: "concordex",
        logoURL: "https://icons.llama.fi/concordex.jpg",
    },
    {
        label: "Meridian Finance",
        value: "meridian-finance",
        logoURL: "https://icons.llama.fi/meridian-finance.png",
    },
    {
        label: "Solidly",
        value: "solidly",
        logoURL: "https://icons.llama.fi/solidly.jpg",
    },
    {
        label: "Reax Lending",
        value: "reax-lending",
        logoURL: "https://icons.llama.fi/reax-lending.png",
    },
    {
        label: "Nearpad",
        value: "nearpad",
        logoURL: "https://icons.llama.fi/nearpad.jpg",
    },
    {
        label: "Sector Finance",
        value: "sector-finance",
        logoURL: "https://icons.llama.fi/lighter.jpg",
    },
    {
        label: "InsureDAO",
        value: "insuredao",
        logoURL: "https://icons.llama.fi/insuredao.png",
    },
    {
        label: "Ghast Protocol",
        value: "ghast-protocol",
        logoURL: "https://icons.llama.fi/ghast-protocol.jpg",
    },
    {
        label: "Telos Swap",
        value: "telos-swap",
        logoURL: "https://icons.llama.fi/telos-swap.png",
    },
    {
        label: "Symmetric",
        value: "symmetric",
        logoURL: "https://icons.llama.fi/symmetric.png",
    },
    {
        label: "PadSwap",
        value: "padswap",
        logoURL: "https://icons.llama.fi/padswap.svg",
    },
    {
        label: "Serum Swap",
        value: "serum-swap",
        logoURL: "https://icons.llama.fi/serum-swap.svg",
    },
    {
        label: "Hedge",
        value: "hedge",
        logoURL: "https://icons.llama.fi/hedge.png",
    },
    {
        label: "HurricaneSwap",
        value: "hurricaneswap",
        logoURL: "https://icons.llama.fi/hurricaneswap.jpg",
    },
    {
        label: "PolyQuity",
        value: "polyquity",
        logoURL: "https://icons.llama.fi/polyquity.jpg",
    },
    {
        label: "OpenSky Finance",
        value: "opensky-finance",
        logoURL: "https://icons.llama.fi/opensky-finance.png",
    },
    {
        label: "MantisSwap",
        value: "mantisswap",
        logoURL: "https://icons.llama.fi/mantisswap.jpg",
    },
    {
        label: "AutoShark",
        value: "autoshark",
        logoURL: "https://icons.llama.fi/autoshark.png",
    },
    {
        label: "Volo",
        value: "volo",
        logoURL: "https://icons.llama.fi/volo.png",
    },
    {
        label: "Swapsicle V1",
        value: "swapsicle-v1",
        logoURL: "https://icons.llama.fi/swapsicle-v1.jpg",
    },
    {
        label: "Levvy for NFTs",
        value: "levvy-for-nfts",
        logoURL: "https://icons.llama.fi/levvy-for-nfts.jpg",
    },
    {
        label: "BFly Finance",
        value: "bfly-finance",
        logoURL: "https://icons.llama.fi/bfly-finance.png",
    },
    {
        label: "WinerySwap",
        value: "wineryswap",
        logoURL: "https://icons.llama.fi/wineryswap.jpg",
    },
    {
        label: "Augury Finance",
        value: "augury-finance",
        logoURL: "https://icons.llama.fi/augury-finance.jpg",
    },
    {
        label: "Gravity Finance",
        value: "gravity-finance",
        logoURL: "https://icons.llama.fi/gravity-finance.png",
    },
    {
        label: "OasisSwap",
        value: "oasisswap",
        logoURL: "https://icons.llama.fi/oasisswap.png",
    },
    {
        label: "DAM Finance",
        value: "dam-finance",
        logoURL: "https://icons.llama.fi/dam-finance.png",
    },
    {
        label: "Pulse Rate",
        value: "pulse-rate",
        logoURL: "https://icons.llama.fi/pulse-rate.jpg",
    },
    {
        label: "Poof Cash",
        value: "poof-cash",
        logoURL: "https://icons.llama.fi/poof-cash.png",
    },
    {
        label: "Bao Masterchef V1",
        value: "bao-masterchef-v1",
        logoURL: "https://icons.llama.fi/bao-masterchef-v1.png",
    },
    {
        label: "YieldWolf",
        value: "yieldwolf",
        logoURL: "https://icons.llama.fi/yieldwolf.jpg",
    },
    {
        label: "AlienFi",
        value: "alienfi",
        logoURL: "https://icons.llama.fi/alienfi.png",
    },
    {
        label: "Frigg.eco",
        value: "frigg.eco",
        logoURL: "https://icons.llama.fi/frigg.eco.png",
    },
    {
        label: "Interest Protocol",
        value: "interest-protocol",
        logoURL: "https://icons.llama.fi/interest-protocol.jpg",
    },
    {
        label: "Vaporwave",
        value: "vaporwave",
        logoURL: "https://icons.llama.fi/vaporwave.png",
    },
    {
        label: "HaloFi",
        value: "halofi",
        logoURL: "https://icons.llama.fi/halofi.png",
    },
    {
        label: "LeetSwap",
        value: "leetswap",
        logoURL: "https://icons.llama.fi/leetswap.jpg",
    },
    {
        label: "MakiSwap",
        value: "makiswap",
        logoURL: "https://icons.llama.fi/makiswap.jpg",
    },
    {
        label: "BecoSwap",
        value: "becoswap",
        logoURL: "https://icons.llama.fi/becoswap.png",
    },
    {
        label: "zkBoost",
        value: "zkboost",
        logoURL: "https://icons.llama.fi/zkboost.jpg",
    },
    {
        label: "Tonpound",
        value: "tonpound",
        logoURL: "https://icons.llama.fi/tonpound.jpg",
    },
    {
        label: "Baguette",
        value: "baguette",
        logoURL: "https://icons.llama.fi/baguette.png",
    },
    {
        label: "Soy Finance",
        value: "soy-finance",
        logoURL: "https://icons.llama.fi/soy-finance.jpg",
    },
    {
        label: "Router Protocol",
        value: "router-protocol",
        logoURL: "https://icons.llama.fi/router-protocol.png",
    },
    {
        label: "Timewarp",
        value: "timewarp",
        logoURL: "https://icons.llama.fi/timewarp.png",
    },
    {
        label: "Carmine Options",
        value: "carmine-options",
        logoURL: "https://icons.llama.fi/carmine-options.jpg",
    },
    {
        label: "VivaLeva Protocol",
        value: "vivaleva-protocol",
        logoURL: "https://icons.llama.fi/vivaleva-protocol.jpg",
    },
    {
        label: "LuigiSwap",
        value: "luigiswap",
        logoURL: "https://icons.llama.fi/luigiswap.jpg",
    },
    {
        label: "Lodestar V0",
        value: "lodestar-v0",
        logoURL: "https://icons.llama.fi/lodestar-v0.png",
    },
    {
        label: "Mu Exchange",
        value: "mu-exchange",
        logoURL: "https://icons.llama.fi/mu-exchange.jpg",
    },
    {
        label: "Fluidity Money",
        value: "fluidity-money",
        logoURL: "https://icons.llama.fi/fluidity-money.png",
    },
    {
        label: "Crunchy Network",
        value: "crunchy-network",
        logoURL: "https://icons.llama.fi/crunchy-network.png",
    },
    {
        label: "Moonswap",
        value: "moonswap",
        logoURL: "https://icons.llama.fi/moonswap.jpg",
    },
    {
        label: "SiennaLend",
        value: "siennalend",
        logoURL: "https://icons.llama.fi/siennalend.jpg",
    },
    {
        label: "PRDT",
        value: "prdt",
        logoURL: "https://icons.llama.fi/prdt.png",
    },
    {
        label: "Market",
        value: "market",
        logoURL: "https://icons.llama.fi/market.jpg",
    },
    {
        label: "SakePerp",
        value: "sakeperp",
        logoURL: "https://icons.llama.fi/sakeperp.png",
    },
    {
        label: "LFGSwap Arbitrum",
        value: "lfgswap-arbitrum",
        logoURL: "https://icons.llama.fi/lfgswap.png",
    },
    {
        label: "Zyberswap AMM",
        value: "zyberswap-amm",
        logoURL: "https://icons.llama.fi/zyberswap-amm.jpg",
    },
    {
        label: "Coupon Finance",
        value: "coupon-finance",
        logoURL: "https://icons.llama.fi/coupon-finance.jpg",
    },
    {
        label: "PandaSwap",
        value: "pandaswap",
        logoURL: "https://icons.llama.fi/pandaswap.png",
    },
    {
        label: "Moraswap",
        value: "moraswap",
        logoURL: "https://icons.llama.fi/moraswap.png",
    },
    {
        label: "Pine Protocol",
        value: "pine-protocol",
        logoURL: "https://icons.llama.fi/pine-protocol.jpg",
    },
    {
        label: "stake.link index",
        value: "stake.link-index",
        logoURL: "https://icons.llama.fi/stake.link-index.png",
    },
    {
        label: "Domani Protocol",
        value: "domani-protocol",
        logoURL: "https://icons.llama.fi/domani-protocol.png",
    },
    {
        label: "DMD Finance",
        value: "dmd-finance",
        logoURL: "https://icons.llama.fi/dmd-finance.png",
    },
    {
        label: "ZipSwap",
        value: "zipswap",
        logoURL: "https://icons.llama.fi/zipswap.jpg",
    },
    {
        label: "QuipuSwap V3",
        value: "quipuswap-v3",
        logoURL: "https://icons.llama.fi/quipuswap.png",
    },
    {
        label: "Basilisk",
        value: "basilisk",
        logoURL: "https://icons.llama.fi/bitmake.jpg",
    },
    {
        label: "Value Liquid",
        value: "value-liquid",
        logoURL: "https://icons.llama.fi/value-liquid.jpg",
    },
    {
        label: "Ideamarket",
        value: "ideamarket",
        logoURL: "https://icons.llama.fi/ideamarket.jpg",
    },
    {
        label: "Liquid Finance Protocol",
        value: "liquid-finance-protocol",
        logoURL: "https://icons.llama.fi/liquid-finance-protocol.jpg",
    },
    {
        label: "Comb Financial",
        value: "comb-financial",
        logoURL: "https://icons.llama.fi/comb-financial.png",
    },
    {
        label: "Amulet Liquidity Staking",
        value: "amulet-liquidity-staking",
        logoURL: "https://icons.llama.fi/amulet-liquidity-staking.jpg",
    },
    {
        label: "Loop Finance",
        value: "loop-finance",
        logoURL: "https://icons.llama.fi/loop-finance.jpg",
    },
    {
        label: "Davos Protocol",
        value: "davos-protocol",
        logoURL: "https://icons.llama.fi/davos-protocol.png",
    },
    {
        label: "Rigoblock",
        value: "rigoblock",
        logoURL: "https://icons.llama.fi/rigoblock.jpg",
    },
    {
        label: "GemSwap",
        value: "gemswap",
        logoURL: "https://icons.llama.fi/gemswap.png",
    },
    {
        label: "Aquarius Loan",
        value: "aquarius-loan",
        logoURL: "https://icons.llama.fi/aquarius-loan.png",
    },
    {
        label: "DerpDEX",
        value: "derpdex",
        logoURL: "https://icons.llama.fi/derpdex.png",
    },
    {
        label: "Spin DOV",
        value: "spin-dov",
        logoURL: "https://icons.llama.fi/spin-dov.png",
    },
    {
        label: "Lighter",
        value: "lighter",
        logoURL: "https://icons.llama.fi/lighter.jpg",
    },
    {
        label: "AmpleSwap",
        value: "ampleswap",
        logoURL: "https://icons.llama.fi/ampleswap.png",
    },
    {
        label: "PinkPea Finance",
        value: "pinkpea-finance",
        logoURL: "https://icons.llama.fi/pinkpea-finance.png",
    },
    {
        label: "Dopple Finance",
        value: "dopple-finance",
        logoURL: "https://icons.llama.fi/dopple-finance.jpg",
    },
    {
        label: "Gambit Financial",
        value: "gambit-financial",
        logoURL: "https://icons.llama.fi/gambit-financial.jpg",
    },
    {
        label: "Composable Finance",
        value: "composable-finance",
        logoURL: "https://icons.llama.fi/composable-finance.jpg",
    },
    {
        label: "Lydia",
        value: "lydia",
        logoURL: "https://icons.llama.fi/lydia.jpg",
    },
    {
        label: "Radiate Protocol",
        value: "radiate-protocol",
        logoURL: "https://icons.llama.fi/radiate-protocol.jpg",
    },
    {
        label: "BAO Swap",
        value: "bao-swap",
        logoURL: "https://icons.llama.fi/bao-swap.jpg",
    },
    {
        label: "Avely Swap",
        value: "avely-swap",
        logoURL: "https://icons.llama.fi/avely-swap.jpg",
    },
    {
        label: "Credix",
        value: "credix",
        logoURL: "https://icons.llama.fi/credix.png",
    },
    {
        label: "Solarflare",
        value: "solarflare",
        logoURL: "https://icons.llama.fi/solarflare.png",
    },
    {
        label: "Voodoo Trade Base",
        value: "voodoo-trade-base",
        logoURL: "https://icons.llama.fi/voodoo-trade-base.jpg",
    },
    {
        label: "PostTechSoFi",
        value: "posttechsofi",
        logoURL: "https://icons.llama.fi/posttechsofi.jpg",
    },
    {
        label: "Bored Candy City",
        value: "bored-candy-city",
        logoURL: "https://icons.llama.fi/bored-candy-city.png",
    },
    {
        label: "SandClock",
        value: "sandclock",
        logoURL: "https://icons.llama.fi/sandclock.jpg",
    },
    {
        label: "Arbitrum Exchange V3",
        value: "arbitrum-exchange-v3",
        logoURL: "https://icons.llama.fi/arbitrum-exchange-v3.jpg",
    },
    {
        label: "Float",
        value: "float",
        logoURL: "https://icons.llama.fi/float.png",
    },
    {
        label: "Standard Protocol",
        value: "standard-protocol",
        logoURL: "https://icons.llama.fi/standard-protocol.jpg",
    },
    {
        label: "CashCow Finance",
        value: "cashcow-finance",
        logoURL: "https://icons.llama.fi/cashcow-finance.jpg",
    },
    {
        label: "NewDex",
        value: "newdex",
        logoURL: "https://icons.llama.fi/newdex.png",
    },
    {
        label: "Hyper Finance",
        value: "hyper-finance",
        logoURL: "https://icons.llama.fi/hyper-finance.png",
    },
    {
        label: "Arbitrum Exchange V2",
        value: "arbitrum-exchange-v2",
        logoURL: "https://icons.llama.fi/arbitrum-exchange-v2.jpg",
    },
    {
        label: "Mozaic",
        value: "mozaic",
        logoURL: "https://icons.llama.fi/mozaic.png",
    },
    {
        label: "0xDAO",
        value: "0xdao",
        logoURL: "https://icons.llama.fi/0xdao.jpg",
    },
    {
        label: "REYIELD Finance",
        value: "reyield-finance",
        logoURL: "https://icons.llama.fi/reyield-finance.jpg",
    },
    {
        label: "Swipe",
        value: "swipe",
        logoURL: "https://icons.llama.fi/swipe.jpg",
    },
    {
        label: "Fractal Protocol",
        value: "fractal-protocol",
        logoURL: "https://icons.llama.fi/fractal-protocol.jpg",
    },
    {
        label: "Nata Network",
        value: "nata-network",
        logoURL: "https://icons.llama.fi/nata-network.jpg",
    },
    {
        label: "Thala LSD",
        value: "thala-lsd",
        logoURL: "https://icons.llama.fi/thala-lsd.jpg",
    },
    {
        label: "DAOLama",
        value: "daolama",
        logoURL: "https://icons.llama.fi/daolama.png",
    },
    {
        label: "HFIone",
        value: "hfione",
        logoURL: "https://icons.llama.fi/hfione.jpg",
    },
    {
        label: "DAO Swap",
        value: "dao-swap",
        logoURL: "https://icons.llama.fi/dao-maker.jpg",
    },
    {
        label: "StakeEasy",
        value: "stakeeasy",
        logoURL: "https://icons.llama.fi/stakeeasy.png",
    },
    {
        label: "QuantumX Network",
        value: "quantumx-network",
        logoURL: "https://icons.llama.fi/quantumx-network.jpg",
    },
    {
        label: "MilkySwap",
        value: "milkyswap",
        logoURL: "https://icons.llama.fi/milkyswap.png",
    },
    {
        label: "Caviar V2",
        value: "caviar-v2",
        logoURL: "https://icons.llama.fi/caviar.jpg",
    },
    {
        label: "LSDx ETHx",
        value: "lsdx-ethx",
        logoURL: "https://icons.llama.fi/lsdx-ethx.jpg",
    },
    {
        label: "El Dorado Exchange",
        value: "el-dorado-exchange",
        logoURL: "https://icons.llama.fi/el-dorado-exchange.jpg",
    },
    {
        label: "Niob Finance",
        value: "niob-finance",
        logoURL: "https://icons.llama.fi/niob.jpg",
    },
    {
        label: "DBX Finance",
        value: "dbx-finance",
        logoURL: "https://icons.llama.fi/dbx-finance.png",
    },
    {
        label: "Grim Finance",
        value: "grim-finance",
        logoURL: "https://icons.llama.fi/grim-finance.png",
    },
    {
        label: "Alvey Dex",
        value: "alvey-dex",
        logoURL: "https://icons.llama.fi/alvey-dex.jpg",
    },
    {
        label: "DeFIL",
        value: "defil",
        logoURL: "https://icons.llama.fi/defil.jpg",
    },
    {
        label: "EnterDAO",
        value: "enterdao",
        logoURL: "https://icons.llama.fi/enterdao.png",
    },
    {
        label: "Nord Finance",
        value: "nord-finance",
        logoURL: "https://icons.llama.fi/nord-finance.png",
    },
    {
        label: "Phoenix Ergo",
        value: "phoenix-ergo",
        logoURL: "https://icons.llama.fi/phoenix-ergo.jpg",
    },
    {
        label: "MM Finance Arbitrum V3",
        value: "mm-finance-arbitrum-v3",
        logoURL: "https://icons.llama.fi/mm-finance-arbitrum-v3.jpg",
    },
    {
        label: "Complus Network",
        value: "complus-network",
        logoURL: "https://icons.llama.fi/complus-network.png",
    },
    {
        label: "Altitude",
        value: "altitude",
        logoURL: "https://icons.llama.fi/altitude.jpg",
    },
    {
        label: "Gambit Trade",
        value: "gambit-trade",
        logoURL: "https://icons.llama.fi/gambit-trade.jpg",
    },
    {
        label: "DaVinciGraph",
        value: "davincigraph",
        logoURL: "https://icons.llama.fi/davincigraph.jpg",
    },
    {
        label: "OpenXswap",
        value: "openxswap",
        logoURL: "https://icons.llama.fi/openxswap.jpg",
    },
    {
        label: "TiTi Protocol",
        value: "titi-protocol",
        logoURL: "https://icons.llama.fi/titi-protocol.png",
    },
    {
        label: "Orange Finance",
        value: "orange-finance",
        logoURL: "https://icons.llama.fi/orange-finance.jpg",
    },
    {
        label: "Uniwhale",
        value: "uniwhale",
        logoURL: "https://icons.llama.fi/uniwhale.jpg",
    },
    {
        label: "Glacier Exchange V3",
        value: "glacier-exchange-v3",
        logoURL: "https://icons.llama.fi/glacier-finance.png",
    },
    {
        label: "SoulSwap",
        value: "soulswap",
        logoURL: "https://icons.llama.fi/soulswap.png",
    },
    {
        label: "Jet V1",
        value: "jet-v1",
        logoURL: "https://icons.llama.fi/jet.jpg",
    },
    {
        label: "Platypus Finance",
        value: "platypus-finance",
        logoURL: "https://icons.llama.fi/platypus.png",
    },
    {
        label: "Sui Pearl",
        value: "sui-pearl",
        logoURL: "https://icons.llama.fi/sui-pearl.png",
    },
    {
        label: "MinMax Finance",
        value: "minmax-finance",
        logoURL: "https://icons.llama.fi/minmax-finance.png",
    },
    {
        label: "Bumper Finance",
        value: "bumper-finance",
        logoURL: "https://icons.llama.fi/bumper-finance.jpg",
    },
    {
        label: "Twindex",
        value: "twindex",
        logoURL: "https://icons.llama.fi/twindex.jpg",
    },
    {
        label: "Babylon Finance",
        value: "babylon-finance",
        logoURL: "https://icons.llama.fi/babylon-finance.jpg",
    },
    {
        label: "Cook Finance",
        value: "cook-finance",
        logoURL: "https://icons.llama.fi/cook-finance.jpg",
    },
    {
        label: "ViperSwap",
        value: "viperswap",
        logoURL: "https://icons.llama.fi/viperswap.png",
    },
    {
        label: "Timeless Finance",
        value: "timeless-finance",
        logoURL: "https://icons.llama.fi/timeless-finance.jpg",
    },
    {
        label: "BNBMiner Finance",
        value: "bnbminer-finance",
        logoURL: "https://icons.llama.fi/bnbminer-finance.png",
    },
    {
        label: "FIAT DAO",
        value: "fiat-dao",
        logoURL: "https://icons.llama.fi/fiat-dao.png",
    },
    {
        label: "MiniSwap",
        value: "miniswap",
        logoURL: "https://icons.llama.fi/miniswap.jpg",
    },
    {
        label: "Rivera Money",
        value: "rivera-money",
        logoURL: "https://icons.llama.fi/rivera-money.png",
    },
    {
        label: "Globiance",
        value: "globiance",
        logoURL: "https://icons.llama.fi/globiance.jpg",
    },
    {
        label: "Doki Doki Finance",
        value: "doki-doki-finance",
        logoURL: "https://icons.llama.fi/dokidoki.svg",
    },
    {
        label: "DIP Exchange",
        value: "dip-exchange",
        logoURL: "https://icons.llama.fi/dip-exchange.jpg",
    },
    {
        label: "Muffin",
        value: "muffin",
        logoURL: "https://icons.llama.fi/muffin.png",
    },
    {
        label: "SynFutures V1",
        value: "synfutures-v1",
        logoURL: "https://icons.llama.fi/synfutures.svg",
    },
    {
        label: "Penrose",
        value: "penrose",
        logoURL: "https://icons.llama.fi/penrose.png",
    },
    {
        label: "NFT20",
        value: "nft20",
        logoURL: "https://icons.llama.fi/nft20.png",
    },
    {
        label: "IBCX",
        value: "ibcx",
        logoURL: "https://icons.llama.fi/ibcx.jpg",
    },
    {
        label: "YFII",
        value: "yfii",
        logoURL: "https://icons.llama.fi/yfii.jpg",
    },
    {
        label: "Brokkr Finance",
        value: "brokkr-finance",
        logoURL: "https://icons.llama.fi/brokkr-finance.png",
    },
    {
        label: "CSWAP DEX",
        value: "cswap-dex",
        logoURL: "https://icons.llama.fi/cswap-dex.jpg",
    },
    {
        label: "Furucombo",
        value: "furucombo",
        logoURL: "https://icons.llama.fi/furucombo.png",
    },
    {
        label: "Epsylon Finance",
        value: "epsylon-finance",
        logoURL: "https://icons.llama.fi/epsylon.svg",
    },
    {
        label: "SportBet",
        value: "sportbet",
        logoURL: "https://icons.llama.fi/sportbet.jpg",
    },
    {
        label: "DebtDAO",
        value: "debtdao",
        logoURL: "https://icons.llama.fi/debtdao.jpg",
    },
    {
        label: "Bonsai Strike",
        value: "bonsai-strike",
        logoURL: "https://icons.llama.fi/bonsai-strike.jpg",
    },
    {
        label: "Ramp",
        value: "ramp",
        logoURL: "https://icons.llama.fi/ramp.png",
    },
    {
        label: "CapitalDEX",
        value: "capitaldex",
        logoURL: "https://icons.llama.fi/capitaldex.jpg",
    },
    {
        label: "ChickenSwap",
        value: "chickenswap",
        logoURL: "https://icons.llama.fi/chickenswap.jpg",
    },
    {
        label: "CafeSwap",
        value: "cafeswap",
        logoURL: "https://icons.llama.fi/cafeswap.png",
    },
    {
        label: "Jet Fixed Term",
        value: "jet-fixed-term",
        logoURL: "https://icons.llama.fi/jet.jpg",
    },
    {
        label: "XDeFi",
        value: "xdefi",
        logoURL: "https://icons.llama.fi/xdefi.jpg",
    },
    {
        label: "PEAKDEFI",
        value: "peakdefi",
        logoURL: "https://icons.llama.fi/peakdefi.jpg",
    },
    {
        label: "Commodo",
        value: "commodo",
        logoURL: "https://icons.llama.fi/commodo.jpg",
    },
    {
        label: "Picnic",
        value: "picnic",
        logoURL: "https://icons.llama.fi/picnic.jpg",
    },
    {
        label: "Leech Protocol",
        value: "leech-protocol",
        logoURL: "https://icons.llama.fi/leech-protocol.jpg",
    },
    {
        label: "Crow Finance",
        value: "crow-finance",
        logoURL: "https://icons.llama.fi/crowfi.jpg",
    },
    {
        label: "Polly Finance",
        value: "polly-finance",
        logoURL: "https://icons.llama.fi/polly-finance.png",
    },
    {
        label: "Geist Finance",
        value: "geist-finance",
        logoURL: "https://icons.llama.fi/geist-finance.jpg",
    },
    {
        label: "Argo",
        value: "argo",
        logoURL: "https://icons.llama.fi/argo.png",
    },
    {
        label: "PolyCub",
        value: "polycub",
        logoURL: "https://icons.llama.fi/polycub.png",
    },
    {
        label: "Swaap V1",
        value: "swaap-v1",
        logoURL: "https://icons.llama.fi/swaap-v1.jpg",
    },
    {
        label: "PunkSwap",
        value: "punkswap",
        logoURL: "https://icons.llama.fi/punkswap.jpg",
    },
    {
        label: "Snowflake Exchange",
        value: "snowflake-exchange",
        logoURL: "https://icons.llama.fi/snowflake-exchange.png",
    },
    {
        label: "Flair Dex",
        value: "flair-dex",
        logoURL: "https://icons.llama.fi/flair-dex.jpg",
    },
    {
        label: "LFGSwap EthereumPoW",
        value: "lfgswap-ethereumpow",
        logoURL: "https://icons.llama.fi/lfgswap.png",
    },
    {
        label: "BambooDeFi",
        value: "bamboodefi",
        logoURL: "https://icons.llama.fi/bamboodefi.png",
    },
    {
        label: "Rose",
        value: "rose",
        logoURL: "https://icons.llama.fi/rose.jpg",
    },
    {
        label: "duckpools",
        value: "duckpools",
        logoURL: "https://icons.llama.fi/duckpools.png",
    },
    {
        label: "AstroSwap AMM",
        value: "astroswap-amm",
        logoURL: "https://icons.llama.fi/astroswap-amm.jpg",
    },
    {
        label: "Gridex",
        value: "gridex",
        logoURL: "https://icons.llama.fi/gridex.jpg",
    },
    {
        label: "Astaria",
        value: "astaria",
        logoURL: "https://icons.llama.fi/astaria.png",
    },
    {
        label: "Orbiter One",
        value: "orbiter-one",
        logoURL: "https://icons.llama.fi/orbiter-one.jpg",
    },
    {
        label: "FoxSwap",
        value: "foxswap",
        logoURL: "https://icons.llama.fi/foxswap.jpg",
    },
    {
        label: "0.exchange",
        value: "0.exchange",
        logoURL: "https://icons.llama.fi/0.exchange.jpg",
    },
    {
        label: "Swim Protocol",
        value: "swim-protocol",
        logoURL: "https://icons.llama.fi/swim-protocol.png",
    },
    {
        label: "SteakBank Finance",
        value: "steakbank-finance",
        logoURL: "https://icons.llama.fi/steakbank-finance.jpg",
    },
    {
        label: "Diffusion Finance",
        value: "diffusion-finance",
        logoURL: "https://icons.llama.fi/diffusion-finance.png",
    },
    {
        label: "Tegisto",
        value: "tegisto",
        logoURL: "https://icons.llama.fi/tegisto.png",
    },
    {
        label: "Spin Perps",
        value: "spin-perps",
        logoURL: "https://icons.llama.fi/spin-perps.png",
    },
    {
        label: "Torches",
        value: "torches",
        logoURL: "https://icons.llama.fi/torches.png",
    },
    {
        label: "Athena Finance",
        value: "athena-finance",
        logoURL: "https://icons.llama.fi/athena-finance.png",
    },
    {
        label: "Themis Protocol",
        value: "themis-protocol",
        logoURL: "https://icons.llama.fi/themis-protocol.png",
    },
    {
        label: "Optimus",
        value: "optimus",
        logoURL: "https://icons.llama.fi/optimus.png",
    },
    {
        label: "Baryon Network",
        value: "baryon-network",
        logoURL: "https://icons.llama.fi/baryon-network.jpg",
    },
    {
        label: "Velvet V1",
        value: "velvet-v1",
        logoURL: "https://icons.llama.fi/velvet-v1.jpg",
    },
    {
        label: "DarkAuto",
        value: "darkauto",
        logoURL: "https://icons.llama.fi/darkauto.png",
    },
    {
        label: "Ribbon Lend",
        value: "ribbon-lend",
        logoURL: "https://icons.llama.fi/ribbon-finance.png",
    },
    {
        label: "Beluga Dex",
        value: "beluga-dex",
        logoURL: "https://icons.llama.fi/beluga-dex.jpg",
    },
    {
        label: "FriendRoom",
        value: "friendroom",
        logoURL: "https://icons.llama.fi/friendroom.png",
    },
    {
        label: "zkBob",
        value: "zkbob",
        logoURL: "https://icons.llama.fi/zkbob.png",
    },
    {
        label: "DarkCrypto",
        value: "darkcrypto",
        logoURL: "https://icons.llama.fi/darkcrypto.svg",
    },
    {
        label: "Atrofarm",
        value: "atrofarm",
        logoURL: "https://icons.llama.fi/atrofarm.jpg",
    },
    {
        label: "YetiSwap",
        value: "yetiswap",
        logoURL: "https://icons.llama.fi/yetiswap.jpg",
    },
    {
        label: "ZYXSwap",
        value: "zyxswap",
        logoURL: "https://icons.llama.fi/zyxswap.png",
    },
    {
        label: "Oracle Swap",
        value: "oracle-swap",
        logoURL: "https://icons.llama.fi/oracle-swap.png",
    },
    {
        label: "TTswap",
        value: "ttswap",
        logoURL: "https://icons.llama.fi/ttswap.png",
    },
    {
        label: "Binary Swap",
        value: "binary-swap",
        logoURL: "https://icons.llama.fi/binary-swap.jpg",
    },
    {
        label: "Ubiquity DAO",
        value: "ubiquity-dao",
        logoURL: "https://icons.llama.fi/ubiquitydao.png",
    },
    {
        label: "StoneDefi",
        value: "stonedefi",
        logoURL: "https://icons.llama.fi/stonedefi.png",
    },
    {
        label: "Muuu Finance",
        value: "muuu-finance",
        logoURL: "https://icons.llama.fi/muuu-finance.png",
    },
    {
        label: "Zunami Protocol",
        value: "zunami-protocol",
        logoURL: "https://icons.llama.fi/zunami-protocol.png",
    },
    {
        label: "Fuji V2",
        value: "fuji-v2",
        logoURL: "https://icons.llama.fi/fuji-finance.png",
    },
    {
        label: "Tulip",
        value: "tulip",
        logoURL: "https://icons.llama.fi/tulip.png",
    },
    {
        label: "StakeSteak",
        value: "stakesteak",
        logoURL: "https://icons.llama.fi/stakesteak.png",
    },
    {
        label: "Seashell",
        value: "seashell",
        logoURL: "https://icons.llama.fi/seashell.jpg",
    },
    {
        label: "PlunderSwap",
        value: "plunderswap",
        logoURL: "https://icons.llama.fi/plunderswap.png",
    },
    {
        label: "Pinjam Labs",
        value: "pinjam-labs",
        logoURL: "https://icons.llama.fi/pinjam-labs.png",
    },
    {
        label: "BetHash",
        value: "bethash",
        logoURL: "https://icons.llama.fi/bethash.jpg",
    },
    {
        label: "HunnySwap",
        value: "hunnyswap",
        logoURL: "https://icons.llama.fi/hunnyswap.png",
    },
    {
        label: "CaviarNine Order Book",
        value: "caviarnine-order-book",
        logoURL: "https://icons.llama.fi/caviarnine-order-book.png",
    },
    {
        label: "ClaimSwap V2",
        value: "claimswap-v2",
        logoURL: "https://icons.llama.fi/claimswap-v2.jpg",
    },
    {
        label: "PegaSys V2",
        value: "pegasys-v2",
        logoURL: "https://icons.llama.fi/pegasys-v2.png",
    },
    {
        label: "JumpDefi",
        value: "jumpdefi",
        logoURL: "https://icons.llama.fi/jumpdefi.png",
    },
    {
        label: "ButterSwap",
        value: "butterswap",
        logoURL: "https://icons.llama.fi/butterswap.jpg",
    },
    {
        label: "Algofi Swap",
        value: "algofi-swap",
        logoURL: "https://icons.llama.fi/algofi.jpg",
    },
    {
        label: "Moonpot",
        value: "moonpot",
        logoURL: "https://icons.llama.fi/moonpot.svg",
    },
    {
        label: "Hubble Exchange",
        value: "hubble-exchange",
        logoURL: "https://icons.llama.fi/hubble-exchange.png",
    },
    {
        label: "SteakHut Liquidity",
        value: "steakhut-liquidity",
        logoURL: "https://icons.llama.fi/steakhut-liquidity.png",
    },
    {
        label: "SpiralDao",
        value: "spiraldao",
        logoURL: "https://icons.llama.fi/spiraldao.jpg",
    },
    {
        label: "BtnGroup",
        value: "btngroup",
        logoURL: "https://icons.llama.fi/btngroup.png",
    },
    {
        label: "Trava Finance",
        value: "trava-finance",
        logoURL: "https://icons.llama.fi/trava-finance.jpg",
    },
    {
        label: "Olive Cash",
        value: "olive-cash",
        logoURL: "https://icons.llama.fi/olive-cash.png",
    },
    {
        label: "ReHold V1",
        value: "rehold-v1",
        logoURL: "https://icons.llama.fi/rehold-v1.png",
    },
    {
        label: "CENNZnet Bridge",
        value: "cennznet-bridge",
        logoURL: "https://icons.llama.fi/cennznet-bridge.png",
    },
    {
        label: "MetaTdex",
        value: "metatdex",
        logoURL: "https://icons.llama.fi/metatdex.png",
    },
    {
        label: "ExinSwap",
        value: "exinswap",
        logoURL: "https://icons.llama.fi/exinswap.png",
    },
    {
        label: "Volta Finance",
        value: "volta-finance",
        logoURL: "https://icons.llama.fi/volta-finance.jpg",
    },
    {
        label: "Rumi Finance",
        value: "rumi-finance",
        logoURL: "https://icons.llama.fi/rumi-finance.jpg",
    },
    {
        label: "Vortex Protocol",
        value: "vortex-protocol",
        logoURL: "https://icons.llama.fi/vortex-protocol.jpg",
    },
    {
        label: "Alphadex",
        value: "alphadex",
        logoURL: "https://icons.llama.fi/alphadex.jpg",
    },
    {
        label: "Archly Finance",
        value: "archly-finance",
        logoURL: "https://icons.llama.fi/archly-finance.png",
    },
    {
        label: "ApeRocket",
        value: "aperocket",
        logoURL: "https://icons.llama.fi/aperocket.png",
    },
    {
        label: "Manga FI",
        value: "manga-fi",
        logoURL: "https://icons.llama.fi/manga-fi.png",
    },
    {
        label: "Zencha Finance",
        value: "zencha-finance",
        logoURL: "https://icons.llama.fi/zencha-finance.png",
    },
    {
        label: "Baso Finance",
        value: "baso-finance",
        logoURL: "https://icons.llama.fi/baso-finance.jpg",
    },
    {
        label: "Ester Finance",
        value: "ester-finance",
        logoURL: "https://icons.llama.fi/esterfinance.png",
    },
    {
        label: "Reax Assets",
        value: "reax-assets",
        logoURL: "https://icons.llama.fi/reax-assets.png",
    },
    {
        label: "Polywhale Finance",
        value: "polywhale-finance",
        logoURL: "https://icons.llama.fi/polywhale.png",
    },
    {
        label: "Ultraswap",
        value: "ultraswap",
        logoURL: "https://icons.llama.fi/ultraswap.jpg",
    },
    {
        label: "zkFox",
        value: "zkfox",
        logoURL: "https://icons.llama.fi/zkfox.png",
    },
    {
        label: "DogSwap",
        value: "dogswap",
        logoURL: "https://icons.llama.fi/dogswap.jpg",
    },
    {
        label: "FODL Finance",
        value: "fodl-finance",
        logoURL: "https://icons.llama.fi/fodl-finance.png",
    },
    {
        label: "Ape Finance",
        value: "ape-finance",
        logoURL: "https://icons.llama.fi/ape-finance.jpg",
    },
    {
        label: "Matter Defi",
        value: "matter-defi",
        logoURL: "https://icons.llama.fi/matter-defi.png",
    },
    {
        label: "Invariant",
        value: "invariant",
        logoURL: "https://icons.llama.fi/invariant.jpg",
    },
    {
        label: "SumSwap",
        value: "sumswap",
        logoURL: "https://icons.llama.fi/sumswap.png",
    },
    {
        label: "Mycelium Perpetual Swaps",
        value: "mycelium-perpetual-swaps",
        logoURL: "https://icons.llama.fi/mycelium-perpetual-swaps.png",
    },
    {
        label: "Viva",
        value: "viva",
        logoURL: "https://icons.llama.fi/viva.png",
    },
    {
        label: "Paint Swap",
        value: "paint-swap",
        logoURL: "https://icons.llama.fi/paint-swap.png",
    },
    {
        label: "SongTech",
        value: "songtech",
        logoURL: "https://icons.llama.fi/songtech.png",
    },
    {
        label: "StableBase",
        value: "stablebase",
        logoURL: "https://icons.llama.fi/stablebase.jpg",
    },
    {
        label: "fan.tech",
        value: "fan.tech",
        logoURL: "https://icons.llama.fi/fan.tech.png",
    },
    {
        label: "zLot",
        value: "zlot",
        logoURL: "https://icons.llama.fi/zlot.jpg",
    },
    {
        label: "Darkness",
        value: "darkness",
        logoURL: "https://icons.llama.fi/darkness.png",
    },
    {
        label: "Kava Boost",
        value: "kava-boost",
        logoURL: "https://icons.llama.fi/kava-boost.png",
    },
    {
        label: "Magik Farm",
        value: "magik-farm",
        logoURL: "https://icons.llama.fi/magik-farm.png",
    },
    {
        label: "Suterusu",
        value: "suterusu",
        logoURL: "https://icons.llama.fi/suterusu.jpg",
    },
    {
        label: "JEXchangeDefi",
        value: "jexchangedefi",
        logoURL: "https://icons.llama.fi/jexchangedefi.jpg",
    },
    {
        label: "DeHive",
        value: "dehive",
        logoURL: "https://icons.llama.fi/dehive.png",
    },
    {
        label: "Tomb",
        value: "tomb",
        logoURL: "https://icons.llama.fi/tomb-finance.jpg",
    },
    {
        label: "CantoSwap",
        value: "cantoswap",
        logoURL: "https://icons.llama.fi/cantoswap.png",
    },
    {
        label: "Solrise Finance",
        value: "solrise-finance",
        logoURL: "https://icons.llama.fi/solrise-finance.png",
    },
    {
        label: "Paribus",
        value: "paribus",
        logoURL: "https://icons.llama.fi/paribus.jpg",
    },
    {
        label: "Cryptex V2",
        value: "cryptex-v2",
        logoURL: "https://icons.llama.fi/cryptex-finance.jpg",
    },
    {
        label: "MM Optimizer Polygon",
        value: "mm-optimizer-polygon",
        logoURL: "https://icons.llama.fi/mm-optimizer.png",
    },
    {
        label: "Redemption",
        value: "redemption",
        logoURL: "https://icons.llama.fi/redemption.png",
    },
    {
        label: "ArbiNYAN",
        value: "arbinyan",
        logoURL: "https://icons.llama.fi/arbinyan.jpg",
    },
    {
        label: "MUFEX",
        value: "mufex",
        logoURL: "https://icons.llama.fi/mufex.jpg",
    },
    {
        label: "Amulet V1",
        value: "amulet-v1",
        logoURL: "https://icons.llama.fi/amulet-protocol.png",
    },
    {
        label: "KwikSwap",
        value: "kwikswap",
        logoURL: "https://icons.llama.fi/kwikswap.png",
    },
    {
        label: "GammaSwap",
        value: "gammaswap",
        logoURL: "https://icons.llama.fi/gammaswap.png",
    },
    {
        label: "PRISM Protocol",
        value: "prism-protocol",
        logoURL: "https://icons.llama.fi/prism.png",
    },
    {
        label: "Tetu Swap",
        value: "tetu-swap",
        logoURL: "https://icons.llama.fi/tetu.svg",
    },
    {
        label: "LuckyChip",
        value: "luckychip",
        logoURL: "https://icons.llama.fi/luckychip.png",
    },
    {
        label: "Solunea",
        value: "solunea",
        logoURL: "https://icons.llama.fi/solunea.jpg",
    },
    {
        label: "MetaCoin Swap",
        value: "metacoin-swap",
        logoURL: "https://icons.llama.fi/metacoin-swap.png",
    },
    {
        label: "Optyfi",
        value: "optyfi",
        logoURL: "https://icons.llama.fi/optyfi.png",
    },
    {
        label: "TrueFi",
        value: "truefi",
        logoURL: "https://icons.llama.fi/truefi.jpg",
    },
    {
        label: "Parrot Defi",
        value: "parrot-defi",
        logoURL: "https://icons.llama.fi/parrot-defi.png",
    },
    {
        label: "Euler",
        value: "euler",
        logoURL: "https://icons.llama.fi/euler.svg",
    },
    {
        label: "Key Finance",
        value: "key-finance",
        logoURL: "https://icons.llama.fi/key-finance.jpg",
    },
    {
        label: "MochiSwap",
        value: "mochiswap",
        logoURL: "https://icons.llama.fi/mochiswap.png",
    },
    {
        label: "LOCKON",
        value: "lockon",
        logoURL: "https://icons.llama.fi/lockon.png",
    },
    {
        label: "Yodeswap",
        value: "yodeswap",
        logoURL: "https://icons.llama.fi/yodeswap.jpg",
    },
    {
        label: "Stabl.fi V1",
        value: "stabl.fi-v1",
        logoURL: "https://icons.llama.fi/stable.fi.jpg",
    },
    {
        label: "EvmoSwap",
        value: "evmoswap",
        logoURL: "https://icons.llama.fi/evmoswap.png",
    },
    {
        label: "RskSwap",
        value: "rskswap",
        logoURL: "https://icons.llama.fi/rskswap.jpg",
    },
    {
        label: "Circuit Protocol",
        value: "circuit-protocol",
        logoURL: "https://icons.llama.fi/circuit-protocol.jpg",
    },
    {
        label: "Black Whale",
        value: "black-whale",
        logoURL: "https://icons.llama.fi/black-whale.jpg",
    },
    {
        label: "Oswap AMM",
        value: "oswap-amm",
        logoURL: "https://icons.llama.fi/oswap-amm.png",
    },
    {
        label: "Defrost",
        value: "defrost",
        logoURL: "https://icons.llama.fi/defrost.png",
    },
    {
        label: "Mirakle Defi",
        value: "mirakle-defi",
        logoURL: "https://icons.llama.fi/mirakle-defi.jpg",
    },
    {
        label: "MemeDex",
        value: "memedex",
        logoURL: "https://icons.llama.fi/memedex.png",
    },
    {
        label: "Chiliswap",
        value: "chiliswap",
        logoURL: "https://icons.llama.fi/chiliswap.jpg",
    },
    {
        label: "Omnidex Lend",
        value: "omnidex-lend",
        logoURL: "https://icons.llama.fi/omnidex-lend.png",
    },
    {
        label: "Stargaze",
        value: "stargaze",
        logoURL: "https://icons.llama.fi/stargaze.png",
    },
    {
        label: "MonoLend",
        value: "monolend",
        logoURL: "https://icons.llama.fi/monolend.png",
    },
    {
        label: "BaseYield",
        value: "baseyield",
        logoURL: "https://icons.llama.fi/baseyield.png",
    },
    {
        label: "Covo V2",
        value: "covo-v2",
        logoURL: "https://icons.llama.fi/covo-v2.jpg",
    },
    {
        label: "StableKoi",
        value: "stablekoi",
        logoURL: "https://icons.llama.fi/stablekoi.png",
    },
    {
        label: "UniWswap AMM",
        value: "uniwswap-amm",
        logoURL: "https://icons.llama.fi/uniwswap.png",
    },
    {
        label: "Shield",
        value: "shield",
        logoURL: "https://icons.llama.fi/shield.png",
    },
    {
        label: "Mole",
        value: "mole",
        logoURL: "https://icons.llama.fi/mole.png",
    },
    {
        label: "Starmaker",
        value: "starmaker",
        logoURL: "https://icons.llama.fi/starmaker.jpg",
    },
    {
        label: "CougarSwap",
        value: "cougarswap",
        logoURL: "https://icons.llama.fi/cougarswap.png",
    },
    {
        label: "OrderNChaos",
        value: "ordernchaos",
        logoURL: "https://icons.llama.fi/ordernchaos.png",
    },
    {
        label: "WOWswap",
        value: "wowswap",
        logoURL: "https://icons.llama.fi/wowswap.jpg",
    },
    {
        label: "Babena",
        value: "babena",
        logoURL: "https://icons.llama.fi/babena.png",
    },
    {
        label: "Velocimeter V1",
        value: "velocimeter-v1",
        logoURL: "https://icons.llama.fi/velocimeter.png",
    },
    {
        label: "Goku Money",
        value: "goku-money",
        logoURL: "https://icons.llama.fi/goku-money.png",
    },
    {
        label: "Roketo",
        value: "roketo",
        logoURL: "https://icons.llama.fi/roketo.png",
    },
    {
        label: "HaloDAO",
        value: "halodao",
        logoURL: "https://icons.llama.fi/halodao.png",
    },
    {
        label: "Finext Finance",
        value: "finext-finance",
        logoURL: "https://icons.llama.fi/finext-finance.png",
    },
    {
        label: "Astarter AMM",
        value: "astarter-amm",
        logoURL: "https://icons.llama.fi/astarter-amm.jpg",
    },
    {
        label: "WingSwap",
        value: "wingswap",
        logoURL: "https://icons.llama.fi/wingswap.jpg",
    },
    {
        label: "Mobius Finance",
        value: "mobius-finance",
        logoURL: "https://icons.llama.fi/mobius-finance.jpg",
    },
    {
        label: "Aave Arc",
        value: "aave-arc",
        logoURL: "https://icons.llama.fi/aave-arc.jpg",
    },
    {
        label: "POISON FINANCE",
        value: "poison-finance",
        logoURL: "https://icons.llama.fi/poison-finance.png",
    },
    {
        label: "TreeDefi",
        value: "treedefi",
        logoURL: "https://icons.llama.fi/treedefi.png",
    },
    {
        label: "Phoenix Finance",
        value: "phoenix-finance",
        logoURL: "https://icons.llama.fi/phoenix-finance.png",
    },
    {
        label: "CGX Finance",
        value: "cgx-finance",
        logoURL: "https://icons.llama.fi/cgx-finance.png",
    },
    {
        label: "Governor DAO",
        value: "governor-dao",
        logoURL: "https://icons.llama.fi/governor-dao.jpg",
    },
    {
        label: "Xops Finance",
        value: "xops-finance",
        logoURL: "https://icons.llama.fi/xops-finance.jpg",
    },
    {
        label: "Rodeo",
        value: "rodeo",
        logoURL: "https://icons.llama.fi/rodeo.jpg",
    },
    {
        label: "ETHA Lend",
        value: "etha-lend",
        logoURL: "https://icons.llama.fi/ethalend.png",
    },
    {
        label: "Oddz",
        value: "oddz",
        logoURL: "https://icons.llama.fi/oddz.png",
    },
    {
        label: "SpaceFi Evmos",
        value: "spacefi-evmos",
        logoURL: "https://icons.llama.fi/spacefi.png",
    },
    {
        label: "AnchorSwap",
        value: "anchorswap",
        logoURL: "https://icons.llama.fi/anchorswap.png",
    },
    {
        label: "Duet Protocol",
        value: "duet-protocol",
        logoURL: "https://icons.llama.fi/duet-protocol.png",
    },
    {
        label: "Haedal Protocol",
        value: "haedal-protocol",
        logoURL: "https://icons.llama.fi/haedal-protocol.jpg",
    },
    {
        label: "forlend",
        value: "forlend",
        logoURL: "https://icons.llama.fi/forlend.jpg",
    },
    {
        label: "Hunny Finance",
        value: "hunny-finance",
        logoURL: "https://icons.llama.fi/hunny-finance.png",
    },
    {
        label: "ProtoFi",
        value: "protofi",
        logoURL: "https://icons.llama.fi/protofi.jpg",
    },
    {
        label: "StealthPad",
        value: "stealthpad",
        logoURL: "https://icons.llama.fi/stealthpad.png",
    },
    {
        label: "PolygonFarm Finance",
        value: "polygonfarm-finance",
        logoURL: "https://icons.llama.fi/polygonfarm-finance.png",
    },
    {
        label: "Grizzly Trade",
        value: "grizzly-trade",
        logoURL: "https://icons.llama.fi/grizzly-trade.jpg",
    },
    {
        label: "Cykura",
        value: "cykura",
        logoURL: "https://icons.llama.fi/cykura.png",
    },
    {
        label: "Domination Finance",
        value: "domination-finance",
        logoURL: "https://icons.llama.fi/domination-finance.png",
    },
    {
        label: "OneRing V2",
        value: "onering-v2",
        logoURL: "https://icons.llama.fi/onering-v2.jpg",
    },
    {
        label: "Arrow",
        value: "arrow",
        logoURL: "https://icons.llama.fi/arrow.png",
    },
    {
        label: "NewThrone",
        value: "newthrone",
        logoURL: "https://icons.llama.fi/newthrone.jpg",
    },
    {
        label: "Parallax",
        value: "parallax",
        logoURL: "https://icons.llama.fi/parallax.png",
    },
    {
        label: "Tendie Swap",
        value: "tendie-swap",
        logoURL: "https://icons.llama.fi/tendie-swap.jpg",
    },
    {
        label: "zk-Swap",
        value: "zk-swap",
        logoURL: "https://icons.llama.fi/zk-swap.jpg",
    },
    {
        label: "Thoreum Finance",
        value: "thoreum-finance",
        logoURL: "https://icons.llama.fi/thoreum-finance.png",
    },
    {
        label: "SteakHut",
        value: "steakhut",
        logoURL: "https://icons.llama.fi/steakhut.png",
    },
    {
        label: "Bomb Finance",
        value: "bomb-finance",
        logoURL: "https://icons.llama.fi/bomb-finance.png",
    },
    {
        label: "Neutra Finance",
        value: "neutra-finance",
        logoURL: "https://icons.llama.fi/neutra-finance.jpg",
    },
    {
        label: "Frost Finance",
        value: "frost-finance",
        logoURL: "https://icons.llama.fi/frost-finance.png",
    },
    {
        label: "Chainchat",
        value: "chainchat",
        logoURL: "https://icons.llama.fi/chainchat.jpg",
    },
    {
        label: "Aptoswap",
        value: "aptoswap",
        logoURL: "https://icons.llama.fi/aptoswap.jpg",
    },
    {
        label: "Primitive",
        value: "primitive",
        logoURL: "https://icons.llama.fi/primitive.jpg",
    },
    {
        label: "TopShelf",
        value: "topshelf",
        logoURL: "https://icons.llama.fi/topshelf.jpg",
    },
    {
        label: "Lixir Finance",
        value: "lixir-finance",
        logoURL: "https://icons.llama.fi/lixir-finance.png",
    },
    {
        label: "Baton",
        value: "baton",
        logoURL: "https://icons.llama.fi/baton.png",
    },
    {
        label: "Nether.Fi",
        value: "nether.fi",
        logoURL: "https://icons.llama.fi/nether.fi.png",
    },
    {
        label: "Sense",
        value: "sense",
        logoURL: "https://icons.llama.fi/sense.png",
    },
    {
        label: "3xcalibur",
        value: "3xcalibur",
        logoURL: "https://icons.llama.fi/3xcalibur.png",
    },
    {
        label: "CGO Finance",
        value: "cgo-finance",
        logoURL: "https://icons.llama.fi/cgo-finance.png",
    },
    {
        label: "Creditum",
        value: "creditum",
        logoURL: "https://icons.llama.fi/creditum.png",
    },
    {
        label: "Teddy Cash",
        value: "teddy-cash",
        logoURL: "https://icons.llama.fi/teddy-cash.jpg",
    },
    {
        label: "Waka Finance",
        value: "waka-finance",
        logoURL: "https://icons.llama.fi/waka-finance.png",
    },
    {
        label: "Woken Exchange",
        value: "woken-exchange",
        logoURL: "https://icons.llama.fi/woken-exchange.jpg",
    },
    {
        label: "Tonic",
        value: "tonic",
        logoURL: "https://icons.llama.fi/tonic.png",
    },
    {
        label: "ShrikePerps",
        value: "shrikeperps",
        logoURL: "https://icons.llama.fi/shrikeperps.png",
    },
    {
        label: "LyveFinance",
        value: "lyvefinance",
        logoURL: "https://icons.llama.fi/lyvefinance.jpg",
    },
    {
        label: "Mover",
        value: "mover",
        logoURL: "https://icons.llama.fi/mover.png",
    },
    {
        label: "Unbound",
        value: "unbound",
        logoURL: "https://icons.llama.fi/unbound.png",
    },
    {
        label: "Matrix Farm",
        value: "matrix-farm",
        logoURL: "https://icons.llama.fi/matrix-farm.png",
    },
    {
        label: "ACoconut",
        value: "acoconut",
        logoURL: "https://icons.llama.fi/acoconut.png",
    },
    {
        label: "MoonBase",
        value: "moonbase",
        logoURL: "https://icons.llama.fi/moonbase.png",
    },
    {
        label: "Potluck Protocol",
        value: "potluck-protocol",
        logoURL: "https://icons.llama.fi/potluck-protocol.png",
    },
    {
        label: "HedgeFarm",
        value: "hedgefarm",
        logoURL: "https://icons.llama.fi/hedgefarm.png",
    },
    {
        label: "Forteswap",
        value: "forteswap",
        logoURL: "https://icons.llama.fi/forteswap.png",
    },
    {
        label: "Alternity",
        value: "alternity",
        logoURL: "https://icons.llama.fi/alternity.png",
    },
    {
        label: "Sanko GameCorp",
        value: "sanko-gamecorp",
        logoURL: "https://icons.llama.fi/sanko-gamecorp.jpg",
    },
    {
        label: "Interest Protocol-SUI",
        value: "interest-protocol-sui",
        logoURL: "https://icons.llama.fi/interest protocol-sui.png",
    },
    {
        label: "Baki",
        value: "baki",
        logoURL: "https://icons.llama.fi/baki.jpg",
    },
    {
        label: "LionDEX",
        value: "liondex",
        logoURL: "https://icons.llama.fi/liondex.jpg",
    },
    {
        label: "LatteSwap",
        value: "latteswap",
        logoURL: "https://icons.llama.fi/latteswap.png",
    },
    {
        label: "DinoSwap",
        value: "dinoswap",
        logoURL: "https://icons.llama.fi/dinoswap.jpg",
    },
    {
        label: "RubyDex",
        value: "rubydex",
        logoURL: "https://icons.llama.fi/rubydex.jpg",
    },
    {
        label: "MM Stableswap Polygon",
        value: "mm-stableswap-polygon",
        logoURL: "https://icons.llama.fi/mm-stableswap-polygon.jpg",
    },
    {
        label: "Ducky City SOFI",
        value: "ducky-city-sofi",
        logoURL: "https://icons.llama.fi/ducky-city-sofi.png",
    },
    {
        label: "DungeonSwap",
        value: "dungeonswap",
        logoURL: "https://icons.llama.fi/dungeonswap.png",
    },
    {
        label: "DuneSwap",
        value: "duneswap",
        logoURL: "https://icons.llama.fi/duneswap.jpg",
    },
    {
        label: "SaitaSwap",
        value: "saitaswap",
        logoURL: "https://icons.llama.fi/saitaswap.png",
    },
    {
        label: "Timeswap V1",
        value: "timeswap-v1",
        logoURL: "https://icons.llama.fi/timeswap-v1.jpg",
    },
    {
        label: "unFederalReserve",
        value: "unfederalreserve",
        logoURL: "https://icons.llama.fi/unfederalreserve.png",
    },
    {
        label: "Magic Land",
        value: "magic-land",
        logoURL: "https://icons.llama.fi/magic-land.png",
    },
    {
        label: "Juicebox V2",
        value: "juicebox-v2",
        logoURL: "https://icons.llama.fi/juicebox.png",
    },
    {
        label: "Bagels Finance",
        value: "bagels-finance",
        logoURL: "https://icons.llama.fi/bagel-finance.png",
    },
    {
        label: "ValleySwap",
        value: "valleyswap",
        logoURL: "https://icons.llama.fi/valleyswap.png",
    },
    {
        label: "Spin Spot",
        value: "spin-spot",
        logoURL: "https://icons.llama.fi/spin-amm.png",
    },
    {
        label: "EmiSwap",
        value: "emiswap",
        logoURL: "https://icons.llama.fi/emiswap.png",
    },
    {
        label: "EazySwap",
        value: "eazyswap",
        logoURL: "https://icons.llama.fi/eazyswap.png",
    },
    {
        label: "Antimatter",
        value: "antimatter",
        logoURL: "https://icons.llama.fi/antimatter.jpg",
    },
    {
        label: "Oxygen",
        value: "oxygen",
        logoURL: "https://icons.llama.fi/oxygen.jpg",
    },
    {
        label: "KLend",
        value: "klend",
        logoURL: "https://icons.llama.fi/klend.jpg",
    },
    {
        label: "AUX Exchange",
        value: "aux-exchange",
        logoURL: "https://icons.llama.fi/aux-exchange.png",
    },
    {
        label: "DuckyDeFi",
        value: "duckydefi",
        logoURL: "https://icons.llama.fi/duckydefi.png",
    },
    {
        label: "JewelSwap NFT Lending",
        value: "jewelswap-nft-lending",
        logoURL: "https://icons.llama.fi/jewelswap-nft.png",
    },
    {
        label: "Rikkei Finance",
        value: "rikkei-finance",
        logoURL: "https://icons.llama.fi/rikkei-finance.png",
    },
    {
        label: "Veplus",
        value: "veplus",
        logoURL: "https://icons.llama.fi/veplus.png",
    },
    {
        label: "MetaStreet V1",
        value: "metastreet-v1",
        logoURL: "https://icons.llama.fi/metastreet.png",
    },
    {
        label: "Llamalend",
        value: "llamalend",
        logoURL: "https://icons.llama.fi/llamalend.png",
    },
    {
        label: "RexDex",
        value: "rexdex",
        logoURL: "https://icons.llama.fi/rexdex.jpg",
    },
    {
        label: "ShadeCash",
        value: "shadecash",
        logoURL: "https://icons.llama.fi/shadecash.jpg",
    },
    {
        label: "EverRise",
        value: "everrise",
        logoURL: "https://icons.llama.fi/everrise.png",
    },
    {
        label: "MFinance",
        value: "mfinance",
        logoURL: "https://icons.llama.fi/mfinance.png",
    },
    {
        label: "Xave Finance",
        value: "xave-finance",
        logoURL: "https://icons.llama.fi/xave-finance.jpg",
    },
    {
        label: "Bagelswap",
        value: "bagelswap",
        logoURL: "https://icons.llama.fi/bagelswap.jpg",
    },
    {
        label: "Drops",
        value: "drops",
        logoURL: "https://icons.llama.fi/drops.png",
    },
    {
        label: "PolkaEx",
        value: "polkaex",
        logoURL: "https://icons.llama.fi/polkaex.png",
    },
    {
        label: "Warp Protocol",
        value: "warp-protocol",
        logoURL: "https://icons.llama.fi/warp-protocol.jpg",
    },
    {
        label: "Oin Finance",
        value: "oin-finance",
        logoURL: "https://icons.llama.fi/oin-finance.svg",
    },
    {
        label: "Behodler",
        value: "behodler",
        logoURL: "https://icons.llama.fi/behodler.svg",
    },
    {
        label: "Pulsar Swap",
        value: "pulsar-swap",
        logoURL: "https://icons.llama.fi/pulsar-swap.jpg",
    },
    {
        label: "Foodcourt",
        value: "foodcourt",
        logoURL: "https://icons.llama.fi/foodcourt.jpg",
    },
    {
        label: "KACO Finance",
        value: "kaco-finance",
        logoURL: "https://icons.llama.fi/kaco-finance.png",
    },
    {
        label: "Monopoly Finance",
        value: "monopoly-finance",
        logoURL: "https://icons.llama.fi/monopoly-finance.jpg",
    },
    {
        label: "Bent Finance",
        value: "bent-finance",
        logoURL: "https://icons.llama.fi/bent-finance.png",
    },
    {
        label: "GARD",
        value: "gard",
        logoURL: "https://icons.llama.fi/gard.jpg",
    },
    {
        label: "MeowSwapFi",
        value: "meowswapfi",
        logoURL: "https://icons.llama.fi/meowswapfi.png",
    },
    {
        label: "cipher.rip",
        value: "cipher.rip",
        logoURL: "https://icons.llama.fi/cipher.png",
    },
    {
        label: "Rakeoff",
        value: "rakeoff",
        logoURL: "https://icons.llama.fi/rakeoff.jpg",
    },
    {
        label: "EXIT10",
        value: "exit10",
        logoURL: "https://icons.llama.fi/exit10.jpg",
    },
    {
        label: "Friend3",
        value: "friend3",
        logoURL: "https://icons.llama.fi/friend3.jpg",
    },
    {
        label: "RBX",
        value: "rbx",
        logoURL: "https://icons.llama.fi/rbx.png",
    },
    {
        label: "VAX",
        value: "vax",
        logoURL: "https://icons.llama.fi/vax.png",
    },
    {
        label: "Chaotic Finance",
        value: "chaotic-finance",
        logoURL: "https://icons.llama.fi/chaotic-finance.png",
    },
    {
        label: "Stabilize",
        value: "stabilize",
        logoURL: "https://icons.llama.fi/stabilizefi.png",
    },
    {
        label: "Alien Base Area51",
        value: "alien-base-area51",
        logoURL: "https://icons.llama.fi/alien-base-area51.png",
    },
    {
        label: "Y2K V1",
        value: "y2k-v1",
        logoURL: "https://icons.llama.fi/y2k-finance.jpg",
    },
    {
        label: "dAMM Finance",
        value: "damm-finance",
        logoURL: "https://icons.llama.fi/damm-finance.png",
    },
    {
        label: "HSwap",
        value: "hswap",
        logoURL: "https://icons.llama.fi/hswap.jpg",
    },
    {
        label: "DackieSwap V2",
        value: "dackieswap-v2",
        logoURL: "https://icons.llama.fi/dackieswap-v2.jpg",
    },
    {
        label: "CyberTime",
        value: "cybertime",
        logoURL: "https://icons.llama.fi/cybertime.png",
    },
    {
        label: "UniTrade",
        value: "unitrade",
        logoURL: "https://icons.llama.fi/unitrade.jpg",
    },
    {
        label: "UrDEX Finance",
        value: "urdex-finance",
        logoURL: "https://icons.llama.fi/urdex-finance.jpg",
    },
    {
        label: "Edge Protocol",
        value: "edge-protocol",
        logoURL: "https://icons.llama.fi/edge-protocol.png",
    },
    {
        label: "Hedgehog",
        value: "hedgehog",
        logoURL: "https://icons.llama.fi/hedgehog.png",
    },
    {
        label: "Magician MV",
        value: "magician-mv",
        logoURL: "https://icons.llama.fi/magician-mv.png",
    },
    {
        label: "ZooCoin",
        value: "zoocoin",
        logoURL: "https://icons.llama.fi/zoocoin.png",
    },
    {
        label: "CompliFi",
        value: "complifi",
        logoURL: "https://icons.llama.fi/complifi.jpg",
    },
    {
        label: "Voltage StableSwap",
        value: "voltage-stableswap",
        logoURL: "https://icons.llama.fi/voltage-stableswap.jpg",
    },
    {
        label: "Aelin",
        value: "aelin",
        logoURL: "https://icons.llama.fi/aelin.png",
    },
    {
        label: "aSOL",
        value: "asol",
        logoURL: "https://icons.llama.fi/asol.png",
    },
    {
        label: "Pls2e",
        value: "pls2e",
        logoURL: "https://icons.llama.fi/pls2e.jpg",
    },
    {
        label: "MMO Finance",
        value: "mmo-finance",
        logoURL: "https://icons.llama.fi/mmo-finance.png",
    },
    {
        label: "Tesseract",
        value: "tesseract",
        logoURL: "https://icons.llama.fi/tesseract.jpg",
    },
    {
        label: "Multiplier",
        value: "multiplier",
        logoURL: "https://icons.llama.fi/multiplier.jpg",
    },
    {
        label: "RociFi V2",
        value: "rocifi-v2",
        logoURL: "https://icons.llama.fi/rocifi.jpg",
    },
    {
        label: "Shoebill V2",
        value: "shoebill-v2",
        logoURL: "https://icons.llama.fi/shoebill-v2.png",
    },
    {
        label: "Sherpa Cash",
        value: "sherpa-cash",
        logoURL: "https://icons.llama.fi/sherpa-cash.png",
    },
    {
        label: "HakuSwap",
        value: "hakuswap",
        logoURL: "https://icons.llama.fi/hakuswap.jpg",
    },
    {
        label: "MIND Games",
        value: "mind-games",
        logoURL: "https://icons.llama.fi/mind-games.png",
    },
    {
        label: "Typhoon Cash",
        value: "typhoon-cash",
        logoURL: "https://icons.llama.fi/typhoon-cash.jpg",
    },
    {
        label: "TagDotTech",
        value: "tagdottech",
        logoURL: "https://icons.llama.fi/tagdottech.jpg",
    },
    {
        label: "Flame DeFi",
        value: "flame-defi",
        logoURL: "https://icons.llama.fi/flamedefi.png",
    },
    {
        label: "Whitehole Finance",
        value: "whitehole-finance",
        logoURL: "https://icons.llama.fi/whitehole-finance.jpg",
    },
    {
        label: "SwapFish",
        value: "swapfish",
        logoURL: "https://icons.llama.fi/swapfish.png",
    },
    {
        label: "Singular Farm",
        value: "singular-farm",
        logoURL: "https://icons.llama.fi/singular-farm.png",
    },
    {
        label: "Qubit",
        value: "qubit",
        logoURL: "https://icons.llama.fi/qubit.jpg",
    },
    {
        label: "Pawnfi APE Staking",
        value: "pawnfi-ape-staking",
        logoURL: "https://icons.llama.fi/pawnfi.png",
    },
    {
        label: "Canary",
        value: "canary",
        logoURL: "https://icons.llama.fi/canary.png",
    },
    {
        label: "CyborgSwap",
        value: "cyborgswap",
        logoURL: "https://icons.llama.fi/cyborgswap.png",
    },
    {
        label: "Fluity",
        value: "fluity",
        logoURL: "https://icons.llama.fi/fluity.png",
    },
    {
        label: "Covo V1",
        value: "covo-v1",
        logoURL: "https://icons.llama.fi/covo-v1.jpg",
    },
    {
        label: "Zappy",
        value: "zappy",
        logoURL: "https://icons.llama.fi/zappy.png",
    },
    {
        label: "Cycle Finance",
        value: "cycle-finance",
        logoURL: "https://icons.llama.fi/cycle-finance.png",
    },
    {
        label: "SoliSnek Finance",
        value: "solisnek-finance",
        logoURL: "https://icons.llama.fi/solisnek-finance.jpg",
    },
    {
        label: "Ladex Exchange",
        value: "ladex-exchange",
        logoURL: "https://icons.llama.fi/ladex-exchange.png",
    },
    {
        label: "Lemuria Finance",
        value: "lemuria-finance",
        logoURL: "https://icons.llama.fi/lemuria-finance.png",
    },
    {
        label: "Fringe",
        value: "fringe",
        logoURL: "https://icons.llama.fi/fringe.png",
    },
    {
        label: "UniWswap UNIA Farms",
        value: "uniwswap-unia-farms",
        logoURL: "https://icons.llama.fi/uniwswap.png",
    },
    {
        label: "Gravis Finance",
        value: "gravis-finance",
        logoURL: "https://icons.llama.fi/gravis-finance.png",
    },
    {
        label: "toupee.tech",
        value: "toupee.tech",
        logoURL: "https://icons.llama.fi/toupee.tech.jpg",
    },
    {
        label: "H2Odata",
        value: "h2odata",
        logoURL: "https://icons.llama.fi/h2odata.png",
    },
    {
        label: "Sweep",
        value: "sweep",
        logoURL: "https://icons.llama.fi/sweep.png",
    },
    {
        label: "Vovo Finance",
        value: "vovo-finance",
        logoURL: "https://icons.llama.fi/vovo-finance.png",
    },
    {
        label: "OmniDex Swap",
        value: "omnidex-swap",
        logoURL: "https://icons.llama.fi/omnidex-swap.jpg",
    },
    {
        label: "Subzero ZSwap",
        value: "subzero-zswap",
        logoURL: "https://icons.llama.fi/subzero-zswap.png",
    },
    {
        label: "CairoFi",
        value: "cairofi",
        logoURL: "https://icons.llama.fi/cairofiswap.jpg",
    },
    {
        label: "Auctus",
        value: "auctus",
        logoURL: "https://icons.llama.fi/auctus.jpg",
    },
    {
        label: "Vaulty Finance",
        value: "vaulty-finance",
        logoURL: "https://icons.llama.fi/vaulty-finance.jpg",
    },
    {
        label: "Numoen",
        value: "numoen",
        logoURL: "https://icons.llama.fi/numoen.jpg",
    },
    {
        label: "hub3",
        value: "hub3",
        logoURL: "https://icons.llama.fi/hub3.jpg",
    },
    {
        label: "PearZap",
        value: "pearzap",
        logoURL: "https://icons.llama.fi/pearzap.png",
    },
    {
        label: "Elektrik",
        value: "elektrik",
        logoURL: "https://icons.llama.fi/elektrik.png",
    },
    {
        label: "BlueBit",
        value: "bluebit",
        logoURL: "https://icons.llama.fi/bluebit.jpg",
    },
    {
        label: "RociFi V1",
        value: "rocifi-v1",
        logoURL: "https://icons.llama.fi/rocifi.jpg",
    },
    {
        label: "Tropical Finance",
        value: "tropical-finance",
        logoURL: "https://icons.llama.fi/tropical-finance.png",
    },
    {
        label: "E3",
        value: "e3",
        logoURL: "https://icons.llama.fi/e3.png",
    },
    {
        label: "Morpheus Swap",
        value: "morpheus-swap",
        logoURL: "https://icons.llama.fi/morpheus-swap.png",
    },
    {
        label: "Waterfall BSC",
        value: "waterfall-bsc",
        logoURL: "https://icons.llama.fi/waterfall-bsc.png",
    },
    {
        label: "Spice Trade",
        value: "spice-trade",
        logoURL: "https://icons.llama.fi/spice-trade.jpg",
    },
    {
        label: "Bright Union",
        value: "bright-union",
        logoURL: "https://icons.llama.fi/bright-union.png",
    },
    {
        label: "Y2R",
        value: "y2r",
        logoURL: "https://icons.llama.fi/y2r.png",
    },
    {
        label: "GTON Capital",
        value: "gton-capital",
        logoURL: "https://icons.llama.fi/gton-capital.png",
    },
    {
        label: "OrcaDAO",
        value: "orcadao",
        logoURL: "https://icons.llama.fi/orcadao.png",
    },
    {
        label: "Backed",
        value: "backed",
        logoURL: "https://icons.llama.fi/backed.jpg",
    },
    {
        label: "VMEX Finance",
        value: "vmex-finance",
        logoURL: "https://icons.llama.fi/vmex-finance.jpg",
    },
    {
        label: "Wild Credit",
        value: "wild-credit",
        logoURL: "https://icons.llama.fi/wild-credit.svg",
    },
    {
        label: "Harbor Protocol",
        value: "harbor-protocol",
        logoURL: "https://icons.llama.fi/harbor-protocol.jpg",
    },
    {
        label: "Vanilla",
        value: "vanilla",
        logoURL: "https://icons.llama.fi/vanilla.png",
    },
    {
        label: "EDEBASE",
        value: "edebase",
        logoURL: "https://icons.llama.fi/edebase.png",
    },
    {
        label: "Mushrooms Finance",
        value: "mushrooms-finance",
        logoURL: "https://icons.llama.fi/mushroom-finance.jpg",
    },
    {
        label: "Diamond Protocol V1",
        value: "diamond-protocol-v1",
        logoURL: "https://icons.llama.fi/diamond-protocol-v1.jpg",
    },
    {
        label: "Firebird",
        value: "firebird",
        logoURL: "https://icons.llama.fi/firebird.jpg",
    },
    {
        label: "Agility LSD",
        value: "agility-lsd",
        logoURL: "https://icons.llama.fi/agility-lsd.jpg",
    },
    {
        label: "Klap",
        value: "klap",
        logoURL: "https://icons.llama.fi/klap.png",
    },
    {
        label: "Factor V2",
        value: "factor-v2",
        logoURL: "https://icons.llama.fi/factor.jpg",
    },
    {
        label: "Lizard",
        value: "lizard",
        logoURL: "https://icons.llama.fi/lizard-exchange.png",
    },
    {
        label: "BullionFX",
        value: "bullionfx",
        logoURL: "https://icons.llama.fi/bullionfx.jpg",
    },
    {
        label: "FairySwap V1",
        value: "fairyswap-v1",
        logoURL: "https://icons.llama.fi/fairyswap-v1.png",
    },
    {
        label: "Coslend",
        value: "coslend",
        logoURL: "https://icons.llama.fi/coslend.png",
    },
    {
        label: "XUSD Money",
        value: "xusd-money",
        logoURL: "https://icons.llama.fi/xusd-money.jpg",
    },
    {
        label: "AnimeSwap",
        value: "animeswap",
        logoURL: "https://icons.llama.fi/animeswap.png",
    },
    {
        label: "Lif3 Trade",
        value: "lif3-trade",
        logoURL: "https://icons.llama.fi/lif3-trade.png",
    },
    {
        label: "BlueMove DEX",
        value: "bluemove-dex",
        logoURL: "https://icons.llama.fi/bluemove.png",
    },
    {
        label: "Agora",
        value: "agora",
        logoURL: "https://icons.llama.fi/agora.jpg",
    },
    {
        label: "BlueSpade",
        value: "bluespade",
        logoURL: "https://icons.llama.fi/bluespade.jpg",
    },
    {
        label: "Ottopia",
        value: "ottopia",
        logoURL: "https://icons.llama.fi/ottopia.png",
    },
    {
        label: "T2T2",
        value: "t2t2",
        logoURL: "https://icons.llama.fi/t2t2.png",
    },
    {
        label: "Aeria",
        value: "aeria",
        logoURL: "https://icons.llama.fi/aeria.png",
    },
    {
        label: "CobraSwap",
        value: "cobraswap",
        logoURL: "https://icons.llama.fi/cobraswap.png",
    },
    {
        label: "neuron",
        value: "neuron",
        logoURL: "https://icons.llama.fi/neuron.jpg",
    },
    {
        label: "PairEx",
        value: "pairex",
        logoURL: "https://icons.llama.fi/pairex.png",
    },
    {
        label: "ADAO",
        value: "adao",
        logoURL: "https://icons.llama.fi/adao.png",
    },
    {
        label: "BooFinance",
        value: "boofinance",
        logoURL: "https://icons.llama.fi/boofinance.svg",
    },
    {
        label: "wefi",
        value: "wefi",
        logoURL: "https://icons.llama.fi/wefi.jpg",
    },
    {
        label: "Auragi Finance",
        value: "auragi-finance",
        logoURL: "https://icons.llama.fi/auragi-finance.png",
    },
    {
        label: "Cone",
        value: "cone",
        logoURL: "https://icons.llama.fi/cone.png",
    },
    {
        label: "LootSwap",
        value: "lootswap",
        logoURL: "https://icons.llama.fi/lootswap.jpg",
    },
    {
        label: "Lachain Yield Market",
        value: "lachain-yield-market",
        logoURL: "https://icons.llama.fi/lachain-yield-market.png",
    },
    {
        label: "Equito Finance",
        value: "equito-finance",
        logoURL: "https://icons.llama.fi/equito-finance.jpg",
    },
    {
        label: "Excalibur",
        value: "excalibur",
        logoURL: "https://icons.llama.fi/excalibur.png",
    },
    {
        label: "FlashLiquidity",
        value: "flashliquidity",
        logoURL: "https://icons.llama.fi/flashLiquidity.jpg",
    },
    {
        label: "CoFiX",
        value: "cofix",
        logoURL: "https://icons.llama.fi/cofix.jpg",
    },
    {
        label: "Onsen Swap",
        value: "onsen-swap",
        logoURL: "https://icons.llama.fi/onsen-swap.png",
    },
    {
        label: "Hodltree",
        value: "hodltree",
        logoURL: "https://icons.llama.fi/hodltree.png",
    },
    {
        label: "Whale Game",
        value: "whale-game",
        logoURL: "https://icons.llama.fi/whale-game.jpg",
    },
    {
        label: "Arcadia Finance",
        value: "arcadia-finance",
        logoURL: "https://icons.llama.fi/arcadia-finance.jpg",
    },
    {
        label: "Pop Town",
        value: "pop-town",
        logoURL: "https://icons.llama.fi/pop-town.png",
    },
    {
        label: "LeonicornSwap",
        value: "leonicornswap",
        logoURL: "https://icons.llama.fi/leonicornswap.jpg",
    },
    {
        label: "Kassandra DAO",
        value: "kassandra-dao",
        logoURL: "https://icons.llama.fi/kassandra-dao.jpg",
    },
    {
        label: "Predy V3.2",
        value: "predy-v3.2",
        logoURL: "https://icons.llama.fi/predy-v3.2.png",
    },
    {
        label: "prePO",
        value: "prepo",
        logoURL: "https://icons.llama.fi/prepo.jpg",
    },
    {
        label: "SwapperChan",
        value: "swapperchan",
        logoURL: "https://icons.llama.fi/swapperchan.jpg",
    },
    {
        label: "Vooi",
        value: "vooi",
        logoURL: "https://icons.llama.fi/vooi.jpg",
    },
    {
        label: "Hydradex V2",
        value: "hydradex-v2",
        logoURL: "https://icons.llama.fi/hydradex-v2.png",
    },
    {
        label: "Dexter Exchange",
        value: "dexter-exchange",
        logoURL: "https://icons.llama.fi/dexter-exchange.png",
    },
    {
        label: "Liquid Bolt",
        value: "liquid-bolt",
        logoURL: "https://icons.llama.fi/liquid-bolt.jpg",
    },
    {
        label: "ZooDAO",
        value: "zoodao",
        logoURL: "https://icons.llama.fi/zoodao.png",
    },
    {
        label: "Investin",
        value: "investin",
        logoURL: "https://icons.llama.fi/investin.jpg",
    },
    {
        label: "HYDT Protocol",
        value: "hydt-protocol",
        logoURL: "https://icons.llama.fi/hydt-protocol.jpg",
    },
    {
        label: "OMT Finance",
        value: "omt-finance",
        logoURL: "https://icons.llama.fi/omt-finance.png",
    },
    {
        label: "Loanshark Core",
        value: "loanshark-core",
        logoURL: "https://icons.llama.fi/loanshark-core.png",
    },
    {
        label: "Yapeswap",
        value: "yapeswap",
        logoURL: "https://icons.llama.fi/yapeswap.png",
    },
    {
        label: "SleepEarn Finance",
        value: "sleepearn-finance",
        logoURL: "https://icons.llama.fi/sleepearn-finance.jpg",
    },
    {
        label: "PartySwap",
        value: "partyswap",
        logoURL: "https://icons.llama.fi/partyswap.jpg",
    },
    {
        label: "Unlimited Network",
        value: "unlimited-network",
        logoURL: "https://icons.llama.fi/paribus.jpg",
    },
    {
        label: "MacaronSwap",
        value: "macaronswap",
        logoURL: "https://icons.llama.fi/macaronswap.jpg",
    },
    {
        label: "KokomoSwap",
        value: "kokomoswap",
        logoURL: "https://icons.llama.fi/kokomoswap.jpg",
    },
    {
        label: "Esper Finance",
        value: "esper-finance",
        logoURL: "https://icons.llama.fi/esper-finance.jpg",
    },
    {
        label: "Chat3",
        value: "chat3",
        logoURL: "https://icons.llama.fi/chat3.jpg",
    },
    {
        label: "veDAO",
        value: "vedao",
        logoURL: "https://icons.llama.fi/vedao.jpg",
    },
    {
        label: "MiningTycoon",
        value: "miningtycoon",
        logoURL: "https://icons.llama.fi/miningtycoon.png",
    },
    {
        label: "Reax Swaps",
        value: "reax-swaps",
        logoURL: "https://icons.llama.fi/reax-swaps.png",
    },
    {
        label: "Hpdex",
        value: "hpdex",
        logoURL: "https://icons.llama.fi/hpdex.svg",
    },
    {
        label: "RobiniaSwap",
        value: "robiniaswap",
        logoURL: "https://icons.llama.fi/robiniaswap.png",
    },
    {
        label: "Flux Exchange",
        value: "flux-exchange",
        logoURL: "https://icons.llama.fi/flux-exchange.jpg",
    },
    {
        label: "BiShares",
        value: "bishares",
        logoURL: "https://icons.llama.fi/bishares.jpg",
    },
    {
        label: "Valorem",
        value: "valorem",
        logoURL: "https://icons.llama.fi/valorem.jpg",
    },
    {
        label: "BeefStake",
        value: "beefstake",
        logoURL: "https://icons.llama.fi/beefstake.png",
    },
    {
        label: "MahaDAO Arth",
        value: "mahadao-arth",
        logoURL: "https://icons.llama.fi/mahadao.png",
    },
    {
        label: "FCON DEX",
        value: "fcon-dex",
        logoURL: "https://icons.llama.fi/fcon-dex.png",
    },
    {
        label: "OCP Finance",
        value: "ocp-finance",
        logoURL: "https://icons.llama.fi/ocp-finance.png",
    },
    {
        label: "AllInXSwap",
        value: "allinxswap",
        logoURL: "https://icons.llama.fi/allinxswap.png",
    },
    {
        label: "PolyDEX-Cryption Network",
        value: "polydex-cryption-network",
        logoURL: "https://icons.llama.fi/polydex-cryption-network.png",
    },
    {
        label: "Oh Finance",
        value: "oh-finance",
        logoURL: "https://icons.llama.fi/oh-finance.jpg",
    },
    {
        label: "zkMoonSwap",
        value: "zkmoonswap",
        logoURL: "https://icons.llama.fi/zkmoonswap.png",
    },
    {
        label: "UniFi",
        value: "unifi",
        logoURL: "https://icons.llama.fi/unifi.jpg",
    },
    {
        label: "Blindex",
        value: "blindex",
        logoURL: "https://icons.llama.fi/blindex.jpg",
    },
    {
        label: "Universe Finance",
        value: "universe-finance",
        logoURL: "https://icons.llama.fi/universe-finance.png",
    },
    {
        label: "Forge SX Ovens",
        value: "forge-sx-ovens",
        logoURL: "https://icons.llama.fi/forge-sx.jpg",
    },
    {
        label: "SashimiSwap",
        value: "sashimiswap",
        logoURL: "https://icons.llama.fi/sashimiswap.png",
    },
    {
        label: "Dapp Account DAO",
        value: "dapp-account-dao",
        logoURL: "https://icons.llama.fi/dapp-account-dao.png",
    },
    {
        label: "1Swap",
        value: "1swap",
        logoURL: "https://icons.llama.fi/1swap.jpg",
    },
    {
        label: "Soluna",
        value: "soluna",
        logoURL: "https://icons.llama.fi/soluna.png",
    },
    {
        label: "Zabu Finance",
        value: "zabu-finance",
        logoURL: "https://icons.llama.fi/zabu-finance.png",
    },
    {
        label: "Klondike Finance",
        value: "klondike-finance",
        logoURL: "https://icons.llama.fi/klondike-finance.jpg",
    },
    {
        label: "MyTrade",
        value: "mytrade",
        logoURL: "https://icons.llama.fi/mytrade.png",
    },
    {
        label: "BAO Baskets",
        value: "bao-baskets",
        logoURL: "https://icons.llama.fi/bao-baskets.jpg",
    },
    {
        label: "SonicSwap",
        value: "sonicswap",
        logoURL: "https://icons.llama.fi/sonicswap.png",
    },
    {
        label: "Neutroswap",
        value: "neutroswap",
        logoURL: "https://icons.llama.fi/neutroswap.jpg",
    },
    {
        label: "Meridian Trade",
        value: "meridian-trade",
        logoURL: "https://icons.llama.fi/meridian-trade.jpg",
    },
    {
        label: "CHFRY Finance",
        value: "chfry-finance",
        logoURL: "https://icons.llama.fi/chfry-finance.png",
    },
    {
        label: "WoofSwap",
        value: "woofswap",
        logoURL: "https://icons.llama.fi/woofswap.png",
    },
    {
        label: "SpicySwap",
        value: "spicyswap",
        logoURL: "https://icons.llama.fi/spicyswap.jpg",
    },
    {
        label: "Holdr",
        value: "holdr",
        logoURL: "https://icons.llama.fi/holdr.png",
    },
    {
        label: "OSWAP Token",
        value: "oswap-token",
        logoURL: "https://icons.llama.fi/oswap-token.png",
    },
    {
        label: "GaloSwap",
        value: "galoswap",
        logoURL: "https://icons.llama.fi/galoswap.png",
    },
    {
        label: "SpaceDex",
        value: "spacedex",
        logoURL: "https://icons.llama.fi/spacedex.png",
    },
    {
        label: "Chee Finance",
        value: "chee-finance",
        logoURL: "https://icons.llama.fi/chee-finance.jpg",
    },
    {
        label: "Vee Finance",
        value: "vee-finance",
        logoURL: "https://icons.llama.fi/vee-finance.png",
    },
    {
        label: "MM Stableswap",
        value: "mm-stableswap",
        logoURL: "https://icons.llama.fi/mm-stableswap.jpg",
    },
    {
        label: "Huckleberry Lending",
        value: "huckleberry-lending",
        logoURL: "https://icons.llama.fi/huckleberry-lending.png",
    },
    {
        label: "UNO farm",
        value: "uno-farm",
        logoURL: "https://icons.llama.fi/uno-farm.png",
    },
    {
        label: "DexFinance BSC",
        value: "dexfinance-bsc",
        logoURL: "https://icons.llama.fi/dexfinance-bsc.png",
    },
    {
        label: "Genesys",
        value: "genesys",
        logoURL: "https://icons.llama.fi/genesys.png",
    },
    {
        label: "Reservoir",
        value: "reservoir",
        logoURL: "https://icons.llama.fi/reservoir.jpg",
    },
    {
        label: "Shinobi",
        value: "shinobi",
        logoURL: "https://icons.llama.fi/shinobi.jpg",
    },
    {
        label: "Spherium",
        value: "spherium",
        logoURL: "https://icons.llama.fi/spherium.jpg",
    },
    {
        label: "Tsunami.Finance",
        value: "tsunami.finance",
        logoURL: "https://icons.llama.fi/tsunami.finance.jpg",
    },
    {
        label: "Shiba Fantom",
        value: "shiba-fantom",
        logoURL: "https://icons.llama.fi/shiba-fantom.svg",
    },
    {
        label: "Words.art",
        value: "words.art",
        logoURL: "https://icons.llama.fi/words.art.png",
    },
    {
        label: "Chimp Exchange",
        value: "chimp-exchange",
        logoURL: "https://icons.llama.fi/chimp-exchange.jpg",
    },
    {
        label: "Clever Protocol",
        value: "clever-protocol",
        logoURL: "https://icons.llama.fi/clever-protocol.png",
    },
    {
        label: "Bank of Chain",
        value: "bank-of-chain",
        logoURL: "https://icons.llama.fi/bank-of-chain.png",
    },
    {
        label: "ThorusFi",
        value: "thorusfi",
        logoURL: "https://icons.llama.fi/thorusfi.jpg",
    },
    {
        label: "Predy V2",
        value: "predy-v2",
        logoURL: "https://icons.llama.fi/predy-v2.png",
    },
    {
        label: "Ionise",
        value: "ionise",
        logoURL: "https://icons.llama.fi/ionise.png",
    },
    {
        label: "Obric",
        value: "obric",
        logoURL: "https://icons.llama.fi/obric.jpg",
    },
    {
        label: "Aperture LM",
        value: "aperture-lm",
        logoURL: "https://icons.llama.fi/aperture-lm.jpg",
    },
    {
        label: "Sterling Finance",
        value: "sterling-finance",
        logoURL: "https://icons.llama.fi/sterling-finance.png",
    },
    {
        label: "Aptin Finance V1",
        value: "aptin-finance-v1",
        logoURL: "https://icons.llama.fi/aptin-finance-v1.jpg",
    },
    {
        label: "Degen Haus",
        value: "degen-haus",
        logoURL: "https://icons.llama.fi/degenhaus.jpg",
    },
    {
        label: "TiFi",
        value: "tifi",
        logoURL: "https://icons.llama.fi/tifi.png",
    },
    {
        label: "Crust Finance",
        value: "crust-finance",
        logoURL: "https://icons.llama.fi/crust-finance.png",
    },
    {
        label: "JioSwap",
        value: "jioswap",
        logoURL: "https://icons.llama.fi/jioswap.png",
    },
    {
        label: "Versa Finance",
        value: "versa-finance",
        logoURL: "https://icons.llama.fi/versa-finance.svg",
    },
    {
        label: "Phoenix DEX",
        value: "phoenix-dex",
        logoURL: "https://icons.llama.fi/phoenix-dex.jpg",
    },
    {
        label: "OrbitalSwap",
        value: "orbitalswap",
        logoURL: "https://icons.llama.fi/orbitalswap.png",
    },
    {
        label: "Gaj Finance",
        value: "gaj-finance",
        logoURL: "https://icons.llama.fi/gaj-finance.png",
    },
    {
        label: "PoWSwap",
        value: "powswap",
        logoURL: "https://icons.llama.fi/powswap.png",
    },
    {
        label: "LaDAO Xocolatl",
        value: "ladao-xocolatl",
        logoURL: "https://icons.llama.fi/ladao-xocolatl.png",
    },
    {
        label: "Croblanc",
        value: "croblanc",
        logoURL: "https://icons.llama.fi/croblanc.jpg",
    },
    {
        label: "Stacker Ventures",
        value: "stacker-ventures",
        logoURL: "https://icons.llama.fi/stacker-ventures.jpg",
    },
    {
        label: "SeaDex",
        value: "seadex",
        logoURL: "https://icons.llama.fi/seadex.png",
    },
    {
        label: "OpenSwap",
        value: "openswap",
        logoURL: "https://icons.llama.fi/openswap.png",
    },
    {
        label: "Alium Swap",
        value: "alium-swap",
        logoURL: "https://icons.llama.fi/alium.png",
    },
    {
        label: "Tenx",
        value: "tenx",
        logoURL: "https://icons.llama.fi/tenx.jpg",
    },
    {
        label: "Hector Lending",
        value: "hector-lending",
        logoURL: "https://icons.llama.fi/hector-lending.jpg",
    },
    {
        label: "Chimeradex Swap",
        value: "chimeradex-swap",
        logoURL: "https://icons.llama.fi/chimeradex-swap.jpg",
    },
    {
        label: "AdaSwap",
        value: "adaswap",
        logoURL: "https://icons.llama.fi/adaswap.jpg",
    },
    {
        label: "DPEX",
        value: "dpex",
        logoURL: "https://icons.llama.fi/dpex.jpg",
    },
    {
        label: "Solyard",
        value: "solyard",
        logoURL: "https://icons.llama.fi/solyard.png",
    },
    {
        label: "Alligator",
        value: "alligator",
        logoURL: "https://icons.llama.fi/alligator.png",
    },
    {
        label: "SMBSwap V3",
        value: "smbswap-v3",
        logoURL: "https://icons.llama.fi/zkboost.jpg",
    },
    {
        label: "GoblinGold",
        value: "goblingold",
        logoURL: "https://icons.llama.fi/goblingold.png",
    },
    {
        label: "BaySwap",
        value: "bayswap",
        logoURL: "https://icons.llama.fi/bayswap.jpg",
    },
    {
        label: "BossSwap",
        value: "bossswap",
        logoURL: "https://icons.llama.fi/bossswap.png",
    },
    {
        label: "Panda Chef",
        value: "panda-chef",
        logoURL: "https://icons.llama.fi/panda-chef.jpg",
    },
    {
        label: "Pinnako",
        value: "pinnako",
        logoURL: "https://icons.llama.fi/pinnako.jpg",
    },
    {
        label: "YFDAI",
        value: "yfdai",
        logoURL: "https://icons.llama.fi/yfdai.svg",
    },
    {
        label: "Fuzio",
        value: "fuzio",
        logoURL: "https://icons.llama.fi/fuzio.jpg",
    },
    {
        label: "Piggy",
        value: "piggy",
        logoURL: "https://icons.llama.fi/piggy.png",
    },
    {
        label: "Tholgar",
        value: "tholgar",
        logoURL: "https://icons.llama.fi/tholgar.jpg",
    },
    {
        label: "SmartDEX",
        value: "smartdex",
        logoURL: "https://icons.llama.fi/smartdex.jpg",
    },
    {
        label: "Pegasusdollar",
        value: "pegasusdollar",
        logoURL: "https://icons.llama.fi/pegasusdollar.png",
    },
    {
        label: "PolyShield",
        value: "polyshield",
        logoURL: "https://icons.llama.fi/polyshield.png",
    },
    {
        label: "MYSO V1",
        value: "myso-v1",
        logoURL: "https://icons.llama.fi/myso-v1.jpg",
    },
    {
        label: "Stars League",
        value: "stars-league",
        logoURL: "https://icons.llama.fi/stars-league.png",
    },
    {
        label: "Scroll Swap",
        value: "scroll-swap",
        logoURL: "https://icons.llama.fi/scroll-swap.jpg",
    },
    {
        label: "Astar Exchange V2",
        value: "astar-exchange-v2",
        logoURL: "https://icons.llama.fi/astar-exchange.png",
    },
    {
        label: "Robo-Vault",
        value: "robo-vault",
        logoURL: "https://icons.llama.fi/robo-vault.png",
    },
    {
        label: "Newland",
        value: "newland",
        logoURL: "https://icons.llama.fi/newland.jpg",
    },
    {
        label: "Qilin",
        value: "qilin",
        logoURL: "https://icons.llama.fi/qilin.jpg",
    },
    {
        label: "Kinesis Labs",
        value: "kinesis-labs",
        logoURL: "https://icons.llama.fi/kinesis-labs.jpg",
    },
    {
        label: "Polkamarkets",
        value: "polkamarkets",
        logoURL: "https://icons.llama.fi/polkamarkets.png",
    },
    {
        label: "TFM",
        value: "tfm",
        logoURL: "https://icons.llama.fi/tfm.png",
    },
    {
        label: "zkUSD",
        value: "zkusd",
        logoURL: "https://icons.llama.fi/zkusd.jpg",
    },
    {
        label: "SWAPP",
        value: "swapp",
        logoURL: "https://icons.llama.fi/swapp.jpg",
    },
    {
        label: "LSDx Farm",
        value: "lsdx-farm",
        logoURL: "https://icons.llama.fi/lsdx-farm.jpg",
    },
    {
        label: "UnoRe",
        value: "unore",
        logoURL: "https://icons.llama.fi/unore.jpg",
    },
    {
        label: "StakedICP",
        value: "stakedicp",
        logoURL: "https://icons.llama.fi/stakedicp.jpg",
    },
    {
        label: "Electrik Finance",
        value: "electrik-finance",
        logoURL: "https://icons.llama.fi/electrikfinance.png",
    },
    {
        label: "Tegro Finance",
        value: "tegro-finance",
        logoURL: "https://icons.llama.fi/tegro-finance.jpg",
    },
    {
        label: "VaporDex V2",
        value: "vapordex-v2",
        logoURL: "https://icons.llama.fi/vapordex.jpg",
    },
    {
        label: "Hot Takes",
        value: "hot-takes",
        logoURL: "https://icons.llama.fi/hot-takes.jpg",
    },
    {
        label: "Swapline",
        value: "swapline",
        logoURL: "https://icons.llama.fi/swapline.png",
    },
    {
        label: "NAOS Finance",
        value: "naos-finance",
        logoURL: "https://icons.llama.fi/naos-finance.png",
    },
    {
        label: "ArbiSwap",
        value: "arbiswap",
        logoURL: "https://icons.llama.fi/arbiswap.png",
    },
    {
        label: "SafeSwap",
        value: "safeswap",
        logoURL: "https://icons.llama.fi/safeswap.jpg",
    },
    {
        label: "PolyYeld Finance",
        value: "polyyeld-finance",
        logoURL: "https://icons.llama.fi/polyyeld.png",
    },
    {
        label: "Cronus Finance",
        value: "cronus-finance",
        logoURL: "https://icons.llama.fi/cronus-finance.png",
    },
    {
        label: "KryptoDex",
        value: "kryptodex",
        logoURL: "https://icons.llama.fi/kryptodex.jpg",
    },
    {
        label: "JamFrens",
        value: "jamfrens",
        logoURL: "https://icons.llama.fi/jamfrens.png",
    },
    {
        label: "Sharpe Magnum",
        value: "sharpe-magnum",
        logoURL: "https://icons.llama.fi/sharpe-magnum.png",
    },
    {
        label: "HoustonSwap",
        value: "houstonswap",
        logoURL: "https://icons.llama.fi/houstonswap.png",
    },
    {
        label: "SugarSwap",
        value: "sugarswap",
        logoURL: "https://icons.llama.fi/sugarswap.png",
    },
    {
        label: "YieldFields",
        value: "yieldfields",
        logoURL: "https://icons.llama.fi/yieldfields.jpg",
    },
    {
        label: "Manhattan",
        value: "manhattan",
        logoURL: "https://icons.llama.fi/manhattan.png",
    },
    {
        label: "Forge SX Trade",
        value: "forge-sx-trade",
        logoURL: "https://icons.llama.fi/forge-sx.jpg",
    },
    {
        label: "Koala Defi",
        value: "koala-defi",
        logoURL: "https://icons.llama.fi/koala-defi.png",
    },
    {
        label: "Milkomeda-C1 Djed",
        value: "milkomeda-c1-djed",
        logoURL: "https://icons.llama.fi/djed-alliance.jpg",
    },
    {
        label: "ProtossDex",
        value: "protossdex",
        logoURL: "https://icons.llama.fi/protossdex.jpg",
    },
    {
        label: "Knight DEX",
        value: "knight-dex",
        logoURL: "https://icons.llama.fi/knight-dex.jpg",
    },
    {
        label: "GoSwap",
        value: "goswap",
        logoURL: "https://icons.llama.fi/goswap.jpg",
    },
    {
        label: "Squid Stake",
        value: "squid-stake",
        logoURL: "https://icons.llama.fi/squid-stake.jpg",
    },
    {
        label: "Anedak",
        value: "anedak",
        logoURL: "https://icons.llama.fi/anedak.png",
    },
    {
        label: "MyMetaTrader",
        value: "mymetatrader",
        logoURL: "https://icons.llama.fi/mymetatrader.jpg",
    },
    {
        label: "Steroids",
        value: "steroids",
        logoURL: "https://icons.llama.fi/steroids.png",
    },
    {
        label: "MonoX",
        value: "monox",
        logoURL: "https://icons.llama.fi/monox.png",
    },
    {
        label: "StormSwap",
        value: "stormswap",
        logoURL: "https://icons.llama.fi/stormswap.png",
    },
    {
        label: "Kimberlite",
        value: "kimberlite",
        logoURL: "https://icons.llama.fi/kimberlite.png",
    },
    {
        label: "Kuu Finance",
        value: "kuu-finance",
        logoURL: "https://icons.llama.fi/kuu-finance.png",
    },
    {
        label: "VeniceSwap",
        value: "veniceswap",
        logoURL: "https://icons.llama.fi/veniceswap.png",
    },
    {
        label: "Animal Farm V2",
        value: "animal-farm-v2",
        logoURL: "https://icons.llama.fi/animal-farm-v2.png",
    },
    {
        label: "CroSwap",
        value: "croswap",
        logoURL: "https://icons.llama.fi/croswap.jpg",
    },
    {
        label: "Mercurity",
        value: "mercurity",
        logoURL: "https://icons.llama.fi/mercurity.png",
    },
    {
        label: "BeGlobal Finance",
        value: "beglobal-finance",
        logoURL: "https://icons.llama.fi/beglobal.png",
    },
    {
        label: "Pandora",
        value: "pandora",
        logoURL: "https://icons.llama.fi/pandora.png",
    },
    {
        label: "Powaa Protocol",
        value: "powaa-protocol",
        logoURL: "https://icons.llama.fi/powaa-protocol.png",
    },
    {
        label: "DDDX",
        value: "dddx",
        logoURL: "https://icons.llama.fi/dddx.png",
    },
    {
        label: "1BCH",
        value: "1bch",
        logoURL: "https://icons.llama.fi/1bch.jpg",
    },
    {
        label: "2Pi Network",
        value: "2pi-network",
        logoURL: "https://icons.llama.fi/2pi-network.png",
    },
    {
        label: "Lockless Protocol",
        value: "lockless-protocol",
        logoURL: "https://icons.llama.fi/lockless-protocol.png",
    },
    {
        label: "Friendzy",
        value: "friendzy",
        logoURL: "https://icons.llama.fi/friendzy.jpg",
    },
    {
        label: "LendHub",
        value: "lendhub",
        logoURL: "https://icons.llama.fi/lendhub.jpg",
    },
    {
        label: "CashCow Protocol",
        value: "cashcow-protocol",
        logoURL: "https://icons.llama.fi/cashcow-protocol.jpg",
    },
    {
        label: "Shibance",
        value: "shibance",
        logoURL: "https://icons.llama.fi/shibance.png",
    },
    {
        label: "Wojak Finance",
        value: "wojak-finance",
        logoURL: "https://icons.llama.fi/wojak-finance.jpg",
    },
    {
        label: "Aquarius",
        value: "aquarius",
        logoURL: "https://icons.llama.fi/aquarius.jpg",
    },
    {
        label: "ShibShift",
        value: "shibshift",
        logoURL: "https://icons.llama.fi/shibshift.jpg",
    },
    {
        label: "Phase",
        value: "phase",
        logoURL: "https://icons.llama.fi/phase.jpg",
    },
    {
        label: "Oceanos",
        value: "oceanos",
        logoURL: "https://icons.llama.fi/oceanos.jpg",
    },
    {
        label: "Goat Swap",
        value: "goat-swap",
        logoURL: "https://icons.llama.fi/goat-swap.jpg",
    },
    {
        label: "Revest Finance",
        value: "revest-finance",
        logoURL: "https://icons.llama.fi/revest-finance.jpg",
    },
    {
        label: "Moonbase Alpha",
        value: "moonbase-alpha",
        logoURL: "https://icons.llama.fi/moonbase-alpha.png",
    },
    {
        label: "Fuzz Finance",
        value: "fuzz-finance",
        logoURL: "https://icons.llama.fi/fuzz-finance.png",
    },
    {
        label: "PWN",
        value: "pwn",
        logoURL: "https://icons.llama.fi/pwn.jpg",
    },
    {
        label: "Banksy Farm",
        value: "banksy-farm",
        logoURL: "https://icons.llama.fi/banksy-farm.png",
    },
    {
        label: "hi.market",
        value: "hi.market",
        logoURL: "https://icons.llama.fi/hi.market.png",
    },
    {
        label: "Gin Finance",
        value: "gin-finance",
        logoURL: "https://icons.llama.fi/gin-finance.png",
    },
    {
        label: "DAOventures",
        value: "daoventures",
        logoURL: "https://icons.llama.fi/daoventures.jpg",
    },
    {
        label: "ZenDEX",
        value: "zendex",
        logoURL: "https://icons.llama.fi/zendex.jpg",
    },
    {
        label: "OliveDAO",
        value: "olivedao",
        logoURL: "https://icons.llama.fi/olivedao.jpg",
    },
    {
        label: "Synthetify",
        value: "synthetify",
        logoURL: "https://icons.llama.fi/synthetify.png",
    },
    {
        label: "Coinscope",
        value: "coinscope",
        logoURL: "https://icons.llama.fi/coinscope.jpg",
    },
    {
        label: "Symblox",
        value: "symblox",
        logoURL: "https://icons.llama.fi/symblox.jpg",
    },
    {
        label: "Minerva",
        value: "minerva",
        logoURL: "https://icons.llama.fi/minerva.jpg",
    },
    {
        label: "STRX Finance",
        value: "strx-finance",
        logoURL: "https://icons.llama.fi/strx-finance.png",
    },
    {
        label: "Sifchain",
        value: "sifchain",
        logoURL: "https://icons.llama.fi/sifchain.png",
    },
    {
        label: "Embr Finance",
        value: "embr-finance",
        logoURL: "https://icons.llama.fi/embr-finance.jpg",
    },
    {
        label: "GPLX",
        value: "gplx",
        logoURL: "https://icons.llama.fi/gplx.png",
    },
    {
        label: "Contrax Finance",
        value: "contrax-finance",
        logoURL: "https://icons.llama.fi/contrax-finance.jpg",
    },
    {
        label: "ArenaSwap",
        value: "arenaswap",
        logoURL: "https://icons.llama.fi/arenaswap.jpg",
    },
    {
        label: "CorgiSwap",
        value: "corgiswap",
        logoURL: "https://icons.llama.fi/corgiswap.jpg",
    },
    {
        label: "Autotronic",
        value: "autotronic",
        logoURL: "https://icons.llama.fi/autotronic.png",
    },
    {
        label: "Sharky Swap",
        value: "sharky-swap",
        logoURL: "https://icons.llama.fi/sharky-swap.jpg",
    },
    {
        label: "Heraswap",
        value: "heraswap",
        logoURL: "https://icons.llama.fi/heraswap.jpg",
    },
    {
        label: "BSCStation",
        value: "bscstation",
        logoURL: "https://icons.llama.fi/bsc-station.png",
    },
    {
        label: "XBased",
        value: "xbased",
        logoURL: "https://icons.llama.fi/xbased.png",
    },
    {
        label: "OmniDex Perpetuals",
        value: "omnidex-perpetuals",
        logoURL: "https://icons.llama.fi/omnidex-perpetuals.jpg",
    },
    {
        label: "OortSwap",
        value: "oortswap",
        logoURL: "https://icons.llama.fi/oortswap.png",
    },
    {
        label: "CryptoSwap",
        value: "cryptoswap",
        logoURL: "https://icons.llama.fi/cryptoswap.png",
    },
    {
        label: "Crafting Finance",
        value: "crafting-finance",
        logoURL: "https://icons.llama.fi/omnidex.jpg",
    },
    {
        label: "Entropyfi",
        value: "entropyfi",
        logoURL: "https://icons.llama.fi/entropyfi.jpg",
    },
    {
        label: "Eversol",
        value: "eversol",
        logoURL: "https://icons.llama.fi/eversol.jpg",
    },
    {
        label: "CowSwap smartBCH",
        value: "cowswap-smartbch",
        logoURL: "https://icons.llama.fi/cowswap-smartbch.png",
    },
    {
        label: "Narwhal Finance",
        value: "narwhal-finance",
        logoURL: "https://icons.llama.fi/narwhal-finance.jpg",
    },
    {
        label: "Factor V1",
        value: "factor-v1",
        logoURL: "https://icons.llama.fi/factor.jpg",
    },
    {
        label: "DolphinSwap",
        value: "dolphinswap",
        logoURL: "https://icons.llama.fi/dolphinswap.png",
    },
    {
        label: "Garbi Protocol",
        value: "garbi-protocol",
        logoURL: "https://icons.llama.fi/garbi-protocol.jpg",
    },
    {
        label: "Lunagens",
        value: "lunagens",
        logoURL: "https://icons.llama.fi/lunagens.jpg",
    },
    {
        label: "Neuronswap",
        value: "neuronswap",
        logoURL: "https://icons.llama.fi/neuronswap.png",
    },
    {
        label: "SharesGram",
        value: "sharesgram",
        logoURL: "https://icons.llama.fi/sharesgram.jpg",
    },
    {
        label: "Swaprum",
        value: "swaprum",
        logoURL: "https://icons.llama.fi/swaprum.png",
    },
    {
        label: "ArbiRise Finance",
        value: "arbirise-finance",
        logoURL: "https://icons.llama.fi/arbirise-finance.jpg",
    },
    {
        label: "Papyrus Swap",
        value: "papyrus-swap",
        logoURL: "https://icons.llama.fi/papyrus-swap.png",
    },
    {
        label: "Parcl",
        value: "parcl",
        logoURL: "https://icons.llama.fi/parcl.jpg",
    },
    {
        label: "MantleSwap",
        value: "mantleswap",
        logoURL: "https://icons.llama.fi/mantleswap.jpg",
    },
    {
        label: "Yogurt Finance",
        value: "yogurt-finance",
        logoURL: "https://icons.llama.fi/yogurt-finance.png",
    },
    {
        label: "PepeDex",
        value: "pepedex",
        logoURL: "https://icons.llama.fi/pepedex.png",
    },
    {
        label: "MarshmallowDeFi",
        value: "marshmallowdefi",
        logoURL: "https://icons.llama.fi/marshmallowdefi.png",
    },
    {
        label: "Radial",
        value: "radial",
        logoURL: "https://icons.llama.fi/radial.jpg",
    },
    {
        label: "Shoebill V1",
        value: "shoebill-v1",
        logoURL: "https://icons.llama.fi/shoebill-v1.png",
    },
    {
        label: "Buffaloswap",
        value: "buffaloswap",
        logoURL: "https://icons.llama.fi/buffaloswap.png",
    },
    {
        label: "Frensly",
        value: "frensly",
        logoURL: "https://icons.llama.fi/frensly.png",
    },
    {
        label: "Dino.Exchange",
        value: "dino.exchange",
        logoURL: "https://icons.llama.fi/dino.exchange.jpg",
    },
    {
        label: "DeltaTheta",
        value: "deltatheta",
        logoURL: "https://icons.llama.fi/deltatheta.png",
    },
    {
        label: "DogMoney",
        value: "dogmoney",
        logoURL: "https://icons.llama.fi/dogmoney.png",
    },
    {
        label: "0x0.ai",
        value: "0x0.ai",
        logoURL: "https://icons.llama.fi/0x0.ai.png",
    },
    {
        label: "KRAV",
        value: "krav",
        logoURL: "https://icons.llama.fi/krav.jpg",
    },
    {
        label: "HopSwap",
        value: "hopswap",
        logoURL: "https://icons.llama.fi/hopswap.jpg",
    },
    {
        label: "Simps",
        value: "simps",
        logoURL: "https://icons.llama.fi/simps.png",
    },
    {
        label: "Pear DAO",
        value: "pear-dao",
        logoURL: "https://icons.llama.fi/pear-dao.png",
    },
    {
        label: "YieldPulse Finance",
        value: "yieldpulse-finance",
        logoURL: "https://icons.llama.fi/yieldpulse-finance.png",
    },
    {
        label: "SaharaDAO",
        value: "saharadao",
        logoURL: "https://icons.llama.fi/saharadao.jpg",
    },
    {
        label: "Whiteheart",
        value: "whiteheart",
        logoURL: "https://icons.llama.fi/whiteheart.png",
    },
    {
        label: "Algodex",
        value: "algodex",
        logoURL: "https://icons.llama.fi/algodex.png",
    },
    {
        label: "Salem Finance",
        value: "salem-finance",
        logoURL: "https://icons.llama.fi/salem-finance.png",
    },
    {
        label: "Clober",
        value: "clober",
        logoURL: "https://icons.llama.fi/clober.jpg",
    },
    {
        label: "Brinc Finance",
        value: "brinc-finance",
        logoURL: "https://icons.llama.fi/brinc.jpg",
    },
    {
        label: "Animal Farm V1",
        value: "animal-farm-v1",
        logoURL: "https://icons.llama.fi/animal-farm-v1.jpg",
    },
    {
        label: "Symphony Finance",
        value: "symphony-finance",
        logoURL: "https://icons.llama.fi/symphony-finance.png",
    },
    {
        label: "SMBSwap V2",
        value: "smbswap-v2",
        logoURL: "https://icons.llama.fi/smbswap-v2.jpg",
    },
    {
        label: "Kalata",
        value: "kalata",
        logoURL: "https://icons.llama.fi/kalata.png",
    },
    {
        label: "PeerMe",
        value: "peerme",
        logoURL: "https://icons.llama.fi/peerme.jpg",
    },
    {
        label: "handle.fi hSP",
        value: "handle.fi-hsp",
        logoURL: "https://icons.llama.fi/handlefi-hsp.jpg",
    },
    {
        label: "DEUS Finance",
        value: "deus-finance",
        logoURL: "https://icons.llama.fi/deus-finance.png",
    },
    {
        label: "Logium",
        value: "logium",
        logoURL: "https://icons.llama.fi/logium.jpg",
    },
    {
        label: "BNPL Pay",
        value: "bnpl-pay",
        logoURL: "https://icons.llama.fi/bnpl-pay.jpg",
    },
    {
        label: "Energyfi",
        value: "energyfi",
        logoURL: "https://icons.llama.fi/energyfi.png",
    },
    {
        label: "Eternal Finance",
        value: "eternal-finance",
        logoURL: "https://icons.llama.fi/eternal-finance.jpg",
    },
    {
        label: "BorgSwap",
        value: "borgswap",
        logoURL: "https://icons.llama.fi/borgswap.png",
    },
    {
        label: "Litx",
        value: "litx",
        logoURL: "https://icons.llama.fi/litx.png",
    },
    {
        label: "Bounce Finance",
        value: "bounce-finance",
        logoURL: "https://icons.llama.fi/bounce-finance.jpg",
    },
    {
        label: "FourDex",
        value: "fourdex",
        logoURL: "https://icons.llama.fi/fourdex.png",
    },
    {
        label: "zkEVMSwap",
        value: "zkevmswap",
        logoURL: "https://icons.llama.fi/zkevmswap.jpg",
    },
    {
        label: "Surfswap Classic",
        value: "surfswap-classic",
        logoURL: "https://icons.llama.fi/surfswap-classic.png",
    },
    {
        label: "Baker Guild",
        value: "baker-guild",
        logoURL: "https://icons.llama.fi/baker-guild.png",
    },
    {
        label: "FreeRiver",
        value: "freeriver",
        logoURL: "https://icons.llama.fi/freeriver.jpg",
    },
    {
        label: "Shibex",
        value: "shibex",
        logoURL: "https://icons.llama.fi/shibbex.png",
    },
    {
        label: "GooseFX",
        value: "goosefx",
        logoURL: "https://icons.llama.fi/goosefx.jpg",
    },
    {
        label: "Carbon Finance",
        value: "carbon-finance",
        logoURL: "https://icons.llama.fi/carbon-finance.jpg",
    },
    {
        label: "KingDefi",
        value: "kingdefi",
        logoURL: "https://icons.llama.fi/kingdefi.png",
    },
    {
        label: "FLRLoans",
        value: "flrloans",
        logoURL: "https://icons.llama.fi/flare-loans.png",
    },
    {
        label: "Amaterasu Finance",
        value: "amaterasu-finance",
        logoURL: "https://icons.llama.fi/amaterasu-finance.png",
    },
    {
        label: "Definitely",
        value: "definitely",
        logoURL: "https://icons.llama.fi/definitely.jpg",
    },
    {
        label: "Double Club",
        value: "double-club",
        logoURL: "https://icons.llama.fi/double-club.png",
    },
    {
        label: "casinocronos",
        value: "casinocronos",
        logoURL: "https://icons.llama.fi/casinocronos.jpg",
    },
    {
        label: "Dexilla",
        value: "dexilla",
        logoURL: "https://icons.llama.fi/dexilla.png",
    },
    {
        label: "Drachma",
        value: "drachma",
        logoURL: "https://icons.llama.fi/drachma.png",
    },
    {
        label: "Arctic",
        value: "arctic",
        logoURL: "https://icons.llama.fi/arctic.png",
    },
    {
        label: "FairySwap V2",
        value: "fairyswap-v2",
        logoURL: "https://icons.llama.fi/fairyswap-v2.jpg",
    },
    {
        label: "Predy V3",
        value: "predy-v3",
        logoURL: "https://icons.llama.fi/predy-v3.png",
    },
    {
        label: "MahaLend",
        value: "mahalend",
        logoURL: "https://icons.llama.fi/mahalend.png",
    },
    {
        label: "Starksport",
        value: "starksport",
        logoURL: "https://icons.llama.fi/starksport.jpg",
    },
    {
        label: "PureFi",
        value: "purefi",
        logoURL: "https://icons.llama.fi/purefi.png",
    },
    {
        label: "Agile Finance",
        value: "agile-finance",
        logoURL: "https://icons.llama.fi/agile-finance.png",
    },
    {
        label: "Dark Matter",
        value: "dark-matter",
        logoURL: "https://icons.llama.fi/dark-matter.jpg",
    },
    {
        label: "OpenDAO",
        value: "opendao",
        logoURL: "https://icons.llama.fi/opendao.png",
    },
    {
        label: "Defirex",
        value: "defirex",
        logoURL: "https://icons.llama.fi/defirex.jpg",
    },
    {
        label: "DynastySwap",
        value: "dynastyswap",
        logoURL: "https://icons.llama.fi/dynastyswap.jpg",
    },
    {
        label: "Argano",
        value: "argano",
        logoURL: "https://icons.llama.fi/argano.png",
    },
    {
        label: "QIAN",
        value: "qian",
        logoURL: "https://icons.llama.fi/qian.jpg",
    },
    {
        label: "RetroDefi",
        value: "retrodefi",
        logoURL: "https://icons.llama.fi/retrodefi.jpg",
    },
    {
        label: "Modswap",
        value: "modswap",
        logoURL: "https://icons.llama.fi/modswap.png",
    },
    {
        label: "Earnmos",
        value: "earnmos",
        logoURL: "https://icons.llama.fi/earnmos.png",
    },
    {
        label: "OneRing V1",
        value: "onering-v1",
        logoURL: "https://icons.llama.fi/onering-v1.jpg",
    },
    {
        label: "Polyquail",
        value: "polyquail",
        logoURL: "https://icons.llama.fi/polyquail.png",
    },
    {
        label: "VultureSwap",
        value: "vultureswap",
        logoURL: "https://icons.llama.fi/vultureswap.jpg",
    },
    {
        label: "VITCSwap",
        value: "vitcswap",
        logoURL: "https://icons.llama.fi/vitcswap.png",
    },
    {
        label: "WraithSwap",
        value: "wraithswap",
        logoURL: "https://icons.llama.fi/wraithswap.png",
    },
    {
        label: "Flashstake OLD",
        value: "flashstake-old",
        logoURL: "https://icons.llama.fi/flashstake-old.png",
    },
    {
        label: "Sculptor Finance",
        value: "sculptor-finance",
        logoURL: "https://icons.llama.fi/sculptor-finance.png",
    },
    {
        label: "Unknown",
        value: "unknown",
        logoURL: "https://icons.llama.fi/unknown.png",
    },
    {
        label: "Elephantdex",
        value: "elephantdex",
        logoURL: "https://icons.llama.fi/elephantdex.png",
    },
    {
        label: "ElasticSwap",
        value: "elasticswap",
        logoURL: "https://icons.llama.fi/elasticswap.png",
    },
    {
        label: "Gondola Finance",
        value: "gondola-finance",
        logoURL: "https://icons.llama.fi/gondola-finance.jpg",
    },
    {
        label: "YieldHub Finance",
        value: "yieldhub-finance",
        logoURL: "https://icons.llama.fi/yieldhub-finance.png",
    },
    {
        label: "Touch.fan",
        value: "touch.fan",
        logoURL: "https://icons.llama.fi/touch.fan.png",
    },
    {
        label: "Tonic Cash",
        value: "tonic-cash",
        logoURL: "https://icons.llama.fi/tonic-cash.jpg",
    },
    {
        label: "MagicFox Vaults",
        value: "magicfox-vaults",
        logoURL: "https://icons.llama.fi/magicfox.png",
    },
    {
        label: "BlackBird Finance",
        value: "blackbird-finance",
        logoURL: "https://icons.llama.fi/blackbird-finance.png",
    },
    {
        label: "Polyroll",
        value: "polyroll",
        logoURL: "https://icons.llama.fi/polyroll.jpg",
    },
    {
        label: "Grappa Finance",
        value: "grappa-finance",
        logoURL: "https://icons.llama.fi/grappa-finance.jpg",
    },
    {
        label: "Marginly",
        value: "marginly",
        logoURL: "https://icons.llama.fi/marginly.jpg",
    },
    {
        label: "PonySwap",
        value: "ponyswap",
        logoURL: "https://icons.llama.fi/ponyswap.jpg",
    },
    {
        label: "ZyberSwap Stableswap",
        value: "zyberswap-stableswap",
        logoURL: "https://icons.llama.fi/zyberswap-stableswap.jpg",
    },
    {
        label: "DyorSwap",
        value: "dyorswap",
        logoURL: "https://icons.llama.fi/dyorswap.png",
    },
    {
        label: "Farm Hero",
        value: "farm-hero",
        logoURL: "https://icons.llama.fi/farm-hero.png",
    },
    {
        label: "Mellow",
        value: "mellow",
        logoURL: "https://icons.llama.fi/mellow.png",
    },
    {
        label: "Artemis Protocol",
        value: "artemis-protocol",
        logoURL: "https://icons.llama.fi/artemis-protocol.png",
    },
    {
        label: "Metavisor",
        value: "metavisor",
        logoURL: "https://icons.llama.fi/metavisor.jpg",
    },
    {
        label: "Nava finance",
        value: "nava-finance",
        logoURL: "https://icons.llama.fi/nava-finance.png",
    },
    {
        label: "ChirpFinance",
        value: "chirpfinance",
        logoURL: "https://icons.llama.fi/chirpfinance.png",
    },
    {
        label: "PowerSwap",
        value: "powerswap",
        logoURL: "https://icons.llama.fi/powerswap.jpg",
    },
    {
        label: "CrescentSwap",
        value: "crescentswap",
        logoURL: "https://icons.llama.fi/crescentswap.jpg",
    },
    {
        label: "Brainiac Finance",
        value: "brainiac-finance",
        logoURL: "https://icons.llama.fi/brainiac-finance.png",
    },
    {
        label: "UWU Protocol",
        value: "uwu-protocol",
        logoURL: "https://icons.llama.fi/uwu-protocol.jpg",
    },
    {
        label: "Milko Farm",
        value: "milko-farm",
        logoURL: "https://icons.llama.fi/milko-farm.png",
    },
    {
        label: "CryptoYieldFocus",
        value: "cryptoyieldfocus",
        logoURL: "https://icons.llama.fi/cryptoyieldfocus.jpg",
    },
    {
        label: "FNDZ",
        value: "fndz",
        logoURL: "https://icons.llama.fi/fndz.png",
    },
    {
        label: "The Grand Banks",
        value: "the-grand-banks",
        logoURL: "https://icons.llama.fi/the-grand-banks.png",
    },
    {
        label: "Prophet",
        value: "prophet",
        logoURL: "https://icons.llama.fi/prophet.png",
    },
    {
        label: "1Beam",
        value: "1beam",
        logoURL: "https://icons.llama.fi/1beam.png",
    },
    {
        label: "Milkydex",
        value: "milkydex",
        logoURL: "https://icons.llama.fi/milkydex.png",
    },
    {
        label: "Bourbon Defi",
        value: "bourbon-defi",
        logoURL: "https://icons.llama.fi/bourbon-defi.png",
    },
    {
        label: "Sociogram",
        value: "sociogram",
        logoURL: "https://icons.llama.fi/sociogram.jpg",
    },
    {
        label: "Antex",
        value: "antex",
        logoURL: "https://icons.llama.fi/antex.png",
    },
    {
        label: "Infinity Pad",
        value: "infinity-pad",
        logoURL: "https://icons.llama.fi/infinity-pad.png",
    },
    {
        label: "Robo-Advisor for Yield",
        value: "robo-advisor-for-yield",
        logoURL: "https://icons.llama.fi/robo-advisor-for-yield.jpg",
    },
    {
        label: "Greenhouse",
        value: "greenhouse",
        logoURL: "https://icons.llama.fi/greenhouse.png",
    },
    {
        label: "Summit Defi",
        value: "summit-defi",
        logoURL: "https://icons.llama.fi/summit-defi.png",
    },
    {
        label: "The Seed Farm",
        value: "the-seed-farm",
        logoURL: "https://icons.llama.fi/the-seed-farm.png",
    },
    {
        label: "Throne V3",
        value: "throne-v3",
        logoURL: "https://icons.llama.fi/throne-v3.jpg",
    },
    {
        label: "Raven",
        value: "raven",
        logoURL: "https://icons.llama.fi/raven.png",
    },
    {
        label: "Surge",
        value: "surge",
        logoURL: "https://icons.llama.fi/surge.jpg",
    },
    {
        label: "AGS Finance",
        value: "ags-finance",
        logoURL: "https://icons.llama.fi/ags-finance.png",
    },
    {
        label: "Seeder Finance",
        value: "seeder-finance",
        logoURL: "https://icons.llama.fi/seeder-finance.png",
    },
    {
        label: "Atlantis Loans",
        value: "atlantis-loans",
        logoURL: "https://icons.llama.fi/atlantis-loans.png",
    },
    {
        label: "SeaSwap",
        value: "seaswap",
        logoURL: "https://icons.llama.fi/seaswap.png",
    },
    {
        label: "Hermes Defi",
        value: "hermes-defi",
        logoURL: "https://icons.llama.fi/hermes-defi.jpg",
    },
    {
        label: "Oaswap",
        value: "oaswap",
        logoURL: "https://icons.llama.fi/oaswap.png",
    },
    {
        label: "EOSWAP Finance",
        value: "eoswap-finance",
        logoURL: "https://icons.llama.fi/eoswap-finance.jpg",
    },
    {
        label: "Fuzion Plasma",
        value: "fuzion-plasma",
        logoURL: "https://icons.llama.fi/fuzion-plasma.png",
    },
    {
        label: "SmolSwap",
        value: "smolswap",
        logoURL: "https://icons.llama.fi/smolswap.jpg",
    },
    {
        label: "FATExFi",
        value: "fatexfi",
        logoURL: "https://icons.llama.fi/fatexfi.png",
    },
    {
        label: "KeySea",
        value: "keysea",
        logoURL: "https://icons.llama.fi/keysea.png",
    },
    {
        label: "Tropykus zkEVM",
        value: "tropykus-zkevm",
        logoURL: "https://icons.llama.fi/tropykus-zkevm.png",
    },
    {
        label: "ZigZag",
        value: "zigzag",
        logoURL: "https://icons.llama.fi/zigzag.jpg",
    },
    {
        label: "Sweep n Flip",
        value: "sweep-n-flip",
        logoURL: "https://icons.llama.fi/sweep-n-flip.png",
    },
    {
        label: "Oni Exchange",
        value: "oni-exchange",
        logoURL: "https://icons.llama.fi/oni.png",
    },
    {
        label: "Ancora Finance",
        value: "ancora-finance",
        logoURL: "https://icons.llama.fi/ancora-finance.jpg",
    },
    {
        label: "Factor Leverage Vault",
        value: "factor-leverage-vault",
        logoURL: "https://icons.llama.fi/factor-leverage-vault.jpg",
    },
    {
        label: "Billion Happiness",
        value: "billion-happiness",
        logoURL: "https://icons.llama.fi/billion-happiness.png",
    },
    {
        label: "Superman Swap",
        value: "superman-swap",
        logoURL: "https://icons.llama.fi/superman-swap.png",
    },
    {
        label: "OnyxDAO",
        value: "onyxdao",
        logoURL: "https://icons.llama.fi/onyxdao.png",
    },
    {
        label: "EsdtMarket",
        value: "esdtmarket",
        logoURL: "https://icons.llama.fi/esdtmarket.png",
    },
    {
        label: "Phenix DEX",
        value: "phenix-dex",
        logoURL: "https://icons.llama.fi/phenix-dex.jpg",
    },
    {
        label: "Blizzard",
        value: "blizzard",
        logoURL: "https://icons.llama.fi/blizzard.jpg",
    },
    {
        label: "Lending Pond",
        value: "lending-pond",
        logoURL: "https://icons.llama.fi/lending-pond.png",
    },
    {
        label: "Sanctuary",
        value: "sanctuary",
        logoURL: "https://icons.llama.fi/sanctuary.jpg",
    },
    {
        label: "KungFuu",
        value: "kungfuu",
        logoURL: "https://icons.llama.fi/kungfuu.jpg",
    },
    {
        label: "Intswap",
        value: "intswap",
        logoURL: "https://icons.llama.fi/intswap.jpg",
    },
    {
        label: "ScarySwap",
        value: "scaryswap",
        logoURL: "https://icons.llama.fi/scaryswap.jpg",
    },
    {
        label: "TURNUP",
        value: "turnup",
        logoURL: "https://icons.llama.fi/turnup.jpg",
    },
    {
        label: "Zenith",
        value: "zenith",
        logoURL: "https://icons.llama.fi/zenith.jpg",
    },
    {
        label: "Luchadores",
        value: "luchadores",
        logoURL: "https://icons.llama.fi/luchadores.png",
    },
    {
        label: "Syrup Finance",
        value: "syrup-finance",
        logoURL: "https://icons.llama.fi/syrup-finance.png",
    },
    {
        label: "FuryLabs Finance",
        value: "furylabs-finance",
        logoURL: "https://icons.llama.fi/furylabs-finance.jpg",
    },
    {
        label: "Cyber Dog",
        value: "cyber-dog",
        logoURL: "https://icons.llama.fi/cyber-dog.png",
    },
    {
        label: "LINE Token",
        value: "line-token",
        logoURL: "https://icons.llama.fi/line-token.png",
    },
    {
        label: "FunBeast",
        value: "funbeast",
        logoURL: "https://icons.llama.fi/funbeast.jpg",
    },
    {
        label: "ChargeDeFi",
        value: "chargedefi",
        logoURL: "https://icons.llama.fi/chargedefi.png",
    },
    {
        label: "Pinyottas",
        value: "pinyottas",
        logoURL: "https://icons.llama.fi/pinyottas.jpg",
    },
    {
        label: "QuasarSwap",
        value: "quasarswap",
        logoURL: "https://icons.llama.fi/quasarswap.jpg",
    },
    {
        label: "BAO Markets",
        value: "bao-markets",
        logoURL: "https://icons.llama.fi/bao-markets.jpg",
    },
    {
        label: "FireDAO",
        value: "firedao",
        logoURL: "https://icons.llama.fi/firedao.png",
    },
    {
        label: "ArtCPAClub",
        value: "artcpaclub",
        logoURL: "https://icons.llama.fi/artcpaclub.jpg",
    },
    {
        label: "Kanvas",
        value: "kanvas",
        logoURL: "https://icons.llama.fi/kanvas.png",
    },
    {
        label: "LowcostSwap",
        value: "lowcostswap",
        logoURL: "https://icons.llama.fi/lowcostswap.png",
    },
    {
        label: "SweetSwap",
        value: "sweetswap",
        logoURL: "https://icons.llama.fi/sweetswap.png",
    },
    {
        label: "Torus",
        value: "torus",
        logoURL: "https://icons.llama.fi/torus.jpg",
    },
    {
        label: "Promethium",
        value: "promethium",
        logoURL: "https://icons.llama.fi/promethium.jpg",
    },
    {
        label: "Fortress Loans",
        value: "fortress-loans",
        logoURL: "https://icons.llama.fi/fortress-loans.png",
    },
    {
        label: "Amped Finance",
        value: "amped-finance",
        logoURL: "https://icons.llama.fi/amped-finance.jpg",
    },
    {
        label: "Waterfall DEX",
        value: "waterfall-dex",
        logoURL: "https://icons.llama.fi/waterfall-defi.png",
    },
    {
        label: "zkSwap Era",
        value: "zkswap-era",
        logoURL: "https://icons.llama.fi/zkswap-era.jpg",
    },
    {
        label: "LendLord",
        value: "lendlord",
        logoURL: "https://icons.llama.fi/lendlord.png",
    },
    {
        label: "DAMX",
        value: "damx",
        logoURL: "https://icons.llama.fi/damx.png",
    },
    {
        label: "Skeleton Finance",
        value: "skeleton-finance",
        logoURL: "https://icons.llama.fi/skeleton-finance.png",
    },
    {
        label: "Pulsar Money",
        value: "pulsar-money",
        logoURL: "https://icons.llama.fi/pulsar-money.jpg",
    },
    {
        label: "xfam.tech",
        value: "xfam.tech",
        logoURL: "https://icons.llama.fi/xfam.tech.jpg",
    },
    {
        label: "Orbit",
        value: "orbit",
        logoURL: "https://icons.llama.fi/orbit.jpg",
    },
    {
        label: "Ammos Finance",
        value: "ammos-finance",
        logoURL: "https://icons.llama.fi/ammos-finance.jpg",
    },
    {
        label: "InVar Finance",
        value: "invar-finance",
        logoURL: "https://icons.llama.fi/invar-finance.png",
    },
    {
        label: "MFIL Protocol",
        value: "mfil-protocol",
        logoURL: "https://icons.llama.fi/mfil-protocol.png",
    },
    {
        label: "Avaware",
        value: "avaware",
        logoURL: "https://icons.llama.fi/avaware.png",
    },
    {
        label: "North Pole",
        value: "north-pole",
        logoURL: "https://icons.llama.fi/north-pole.png",
    },
    {
        label: "Kimochi",
        value: "kimochi",
        logoURL: "https://icons.llama.fi/kimochi.jpg",
    },
    {
        label: "Drawtech",
        value: "drawtech",
        logoURL: "https://icons.llama.fi/drawtech.png",
    },
    {
        label: "Yumiswap",
        value: "yumiswap",
        logoURL: "https://icons.llama.fi/yumiswap.png",
    },
    {
        label: "WagmiDAO",
        value: "wagmidao",
        logoURL: "https://icons.llama.fi/wagmidao.png",
    },
    {
        label: "Unamano",
        value: "unamano",
        logoURL: "https://icons.llama.fi/unamano.jpg",
    },
    {
        label: "CatsLuck",
        value: "catsluck",
        logoURL: "https://icons.llama.fi/catsluck.jpg",
    },
    {
        label: "Base3D",
        value: "base3d",
        logoURL: "https://icons.llama.fi/base3d.jpg",
    },
    {
        label: "Hotfriescoin",
        value: "hotfriescoin",
        logoURL: "https://icons.llama.fi/hotfriescoin.jpg",
    },
    {
        label: "Money Mates",
        value: "money-mates",
        logoURL: "https://icons.llama.fi/money-mates.png",
    },
    {
        label: "Chimeradex Lend",
        value: "chimeradex-lend",
        logoURL: "https://icons.llama.fi/chimeradex-lend.jpg",
    },
    {
        label: "Parallel DAOfi",
        value: "parallel-daofi",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "Woof Finance",
        value: "woof-finance",
        logoURL: "https://icons.llama.fi/woof-finance.jpg",
    },
    {
        label: "WhaleSwap",
        value: "whaleswap",
        logoURL: "https://icons.llama.fi/whaleswap.png",
    },
    {
        label: "Trick or Treat Farm",
        value: "trick-or-treat-farm",
        logoURL: "https://icons.llama.fi/trick-or-treat-farm.png",
    },
    {
        label: "LemonSwap",
        value: "lemonswap",
        logoURL: "https://icons.llama.fi/lemonswap.png",
    },
    {
        label: "Satin Exchange",
        value: "satin-exchange",
        logoURL: "https://icons.llama.fi/satin-exchange.jpg",
    },
    {
        label: "Gamut Exchange",
        value: "gamut-exchange",
        logoURL: "https://icons.llama.fi/gamut-exchange.jpg",
    },
    {
        label: "Scion Finance",
        value: "scion-finance",
        logoURL: "https://icons.llama.fi/scion-finance.png",
    },
    {
        label: "Bring.Finance",
        value: "bring.finance",
        logoURL: "https://icons.llama.fi/bring.jpg",
    },
    {
        label: "KronosDAO",
        value: "kronosdao",
        logoURL: "https://icons.llama.fi/kronosdao.png",
    },
    {
        label: "TrustSwap",
        value: "trustswap",
        logoURL: "https://icons.llama.fi/trustswap.png",
    },
    {
        label: "MintSwap",
        value: "mintswap",
        logoURL: "https://icons.llama.fi/mintswap.png",
    },
    {
        label: "OptiNyan",
        value: "optinyan",
        logoURL: "https://icons.llama.fi/optinyan.jpg",
    },
    {
        label: "SwapMatic",
        value: "swapmatic",
        logoURL: "https://icons.llama.fi/swapmatic.jpg",
    },
    {
        label: "EmberSwap",
        value: "emberswap",
        logoURL: "https://icons.llama.fi/emberswap.png",
    },
    {
        label: "Farmtom",
        value: "farmtom",
        logoURL: "https://icons.llama.fi/farmton.png",
    },
    {
        label: "Synthswap Perps",
        value: "synthswap-perps",
        logoURL: "https://icons.llama.fi/synthswap-perps.jpg",
    },
    {
        label: "Unbanked",
        value: "unbanked",
        logoURL: "https://icons.llama.fi/unbanked.png",
    },
    {
        label: "OBSwap",
        value: "obswap",
        logoURL: "https://icons.llama.fi/obswap.png",
    },
    {
        label: "CoChilli",
        value: "cochilli",
        logoURL: "https://icons.llama.fi/cochilli.png",
    },
    {
        label: "Cronofi Finance",
        value: "cronofi-finance",
        logoURL: "https://icons.llama.fi/cronofi-finance.png",
    },
    {
        label: "Chocodoge",
        value: "chocodoge",
        logoURL: "https://icons.llama.fi/chocodoge.png",
    },
    {
        label: "Dap Dap",
        value: "dap-dap",
        logoURL: "https://icons.llama.fi/dap-dap.jpg",
    },
    {
        label: "Savanna Finance",
        value: "savanna-finance",
        logoURL: "https://icons.llama.fi/savannah-finance.png",
    },
    {
        label: "TendieSwap",
        value: "tendieswap",
        logoURL: "https://icons.llama.fi/tendieswap.png",
    },
    {
        label: "Coffee Dex",
        value: "coffee-dex",
        logoURL: "https://icons.llama.fi/coffee-dex.png",
    },
    {
        label: "Clink",
        value: "clink",
        logoURL: "https://icons.llama.fi/clink.png",
    },
    {
        label: "RoseonX",
        value: "roseonx",
        logoURL: "https://icons.llama.fi/roseonx.jpg",
    },
    {
        label: "Fruits of Ryoshi",
        value: "fruits-of-ryoshi",
        logoURL: "https://icons.llama.fi/fruits-of-ryoshi.png",
    },
    {
        label: "Photon Protocol",
        value: "photon-protocol",
        logoURL: "https://icons.llama.fi/photon-protocol.png",
    },
    {
        label: "Auto Core",
        value: "auto-core",
        logoURL: "https://icons.llama.fi/auto-core.png",
    },
    {
        label: "XCarnival",
        value: "xcarnival",
        logoURL: "https://icons.llama.fi/xcarnival.jpg",
    },
    {
        label: "Genesis Finance",
        value: "genesis-finance",
        logoURL: "https://icons.llama.fi/genesis-finance.png",
    },
    {
        label: "Helios Prime",
        value: "helios-prime",
        logoURL: "https://icons.llama.fi/helios-prime.png",
    },
    {
        label: "SpiritDAO",
        value: "spiritdao",
        logoURL: "https://icons.llama.fi/spiritdao.png",
    },
    {
        label: "Nexter",
        value: "nexter",
        logoURL: "https://icons.llama.fi/nexter.png",
    },
    {
        label: "ETCswap",
        value: "etcswap",
        logoURL: "https://icons.llama.fi/etcswap.png",
    },
    {
        label: "CookieBase Farm",
        value: "cookiebase-farm",
        logoURL: "https://icons.llama.fi/cookiebase.jpg",
    },
    {
        label: "Scallop Pool",
        value: "scallop-pool",
        logoURL: "https://icons.llama.fi/scallop-pool.jpg",
    },
    {
        label: "Omax Swap",
        value: "omax-swap",
        logoURL: "https://icons.llama.fi/omax-swap.png",
    },
    {
        label: "Pegasus Finance",
        value: "pegasus-finance",
        logoURL: "https://icons.llama.fi/pegasus-finance.png",
    },
    {
        label: "MagicFox Swap",
        value: "magicfox-swap",
        logoURL: "https://icons.llama.fi/magicfox.png",
    },
    {
        label: "HonkSwap",
        value: "honkswap",
        logoURL: "https://icons.llama.fi/honkswap.png",
    },
    {
        label: "BOB CDP",
        value: "bob-cdp",
        logoURL: "https://icons.llama.fi/bob-cdp.png",
    },
    {
        label: "InfiniTORR",
        value: "infinitorr",
        logoURL: "https://icons.llama.fi/infinitorr.png",
    },
    {
        label: "Pillar",
        value: "pillar",
        logoURL: "https://icons.llama.fi/pillar.jpg",
    },
    {
        label: "SunflowerSwap",
        value: "sunflowerswap",
        logoURL: "https://icons.llama.fi/sunflowerswap.jpg",
    },
    {
        label: "Defily Dex",
        value: "defily-dex",
        logoURL: "https://icons.llama.fi/defily-dex.jpg",
    },
    {
        label: "PacificSwap V2",
        value: "pacificswap-v2",
        logoURL: "https://icons.llama.fi/pacificswap-v2.jpg",
    },
    {
        label: "ZenithSwap",
        value: "zenithswap",
        logoURL: "https://icons.llama.fi/zenithswap.png",
    },
    {
        label: "MAMA",
        value: "mama",
        logoURL: "https://icons.llama.fi/mama.jpg",
    },
    {
        label: "PowSea",
        value: "powsea",
        logoURL: "https://icons.llama.fi/powsea.png",
    },
    {
        label: "Meowswap",
        value: "meowswap",
        logoURL: "https://icons.llama.fi/meowswap.png",
    },
    {
        label: "Phission Finance",
        value: "phission-finance",
        logoURL: "https://icons.llama.fi/phission-finance.png",
    },
    {
        label: "BrightSide",
        value: "brightside",
        logoURL: "https://icons.llama.fi/brightside.png",
    },
    {
        label: "Mooncake Finance",
        value: "mooncake-finance",
        logoURL: "https://icons.llama.fi/mooncake-finance.jpg",
    },
    {
        label: "AuraSwap",
        value: "auraswap",
        logoURL: "https://icons.llama.fi/auraswap.png",
    },
    {
        label: "Koyo Finance",
        value: "koyo-finance",
        logoURL: "https://icons.llama.fi/koyo-finance.png",
    },
    {
        label: "Waterfall Finance Yield",
        value: "waterfall-finance-yield",
        logoURL: "https://icons.llama.fi/waterfallfinance.png",
    },
    {
        label: "OakFarm",
        value: "oakfarm",
        logoURL: "https://icons.llama.fi/oakfarm.png",
    },
    {
        label: "Coffer City",
        value: "coffer-city",
        logoURL: "https://icons.llama.fi/coffer-city.jpg",
    },
    {
        label: "BaptSwap",
        value: "baptswap",
        logoURL: "https://icons.llama.fi/baptswap.jpg",
    },
    {
        label: "Moret",
        value: "moret",
        logoURL: "https://icons.llama.fi/moret.png",
    },
    {
        label: "PolyLend",
        value: "polylend",
        logoURL: "https://icons.llama.fi/polylend.jpg",
    },
    {
        label: "TrainSwap",
        value: "trainswap",
        logoURL: "https://icons.llama.fi/trainswap.png",
    },
    {
        label: "Demodyfi",
        value: "demodyfi",
        logoURL: "https://icons.llama.fi/demodyfi.png",
    },
    {
        label: "SynthEx",
        value: "synthex",
        logoURL: "https://icons.llama.fi/synthex.png",
    },
    {
        label: "DogeDollar",
        value: "dogedollar",
        logoURL: "https://icons.llama.fi/dogedollar.png",
    },
    {
        label: "Concave",
        value: "concave",
        logoURL: "https://icons.llama.fi/concave.png",
    },
    {
        label: "Hamburger Finance",
        value: "hamburger-finance",
        logoURL: "https://icons.llama.fi/hamburger-finance.jpg",
    },
    {
        label: "Monolith",
        value: "monolith",
        logoURL: "https://icons.llama.fi/monolith.jpg",
    },
    {
        label: "Zeus Finance",
        value: "zeus-finance",
        logoURL: "https://icons.llama.fi/zeus-finance.png",
    },
    {
        label: "ZKSynth",
        value: "zksynth",
        logoURL: "https://icons.llama.fi/zksynth.jpg",
    },
    {
        label: "Chintai",
        value: "chintai",
        logoURL: "https://icons.llama.fi/chintai.png",
    },
    {
        label: "DeFiner",
        value: "definer",
        logoURL: "https://icons.llama.fi/definer.jpg",
    },
    {
        label: "Energon DEX",
        value: "energon-dex",
        logoURL: "https://icons.llama.fi/energon-dex.png",
    },
    {
        label: "Garble.Money",
        value: "garble.money",
        logoURL: "https://icons.llama.fi/garble.money.png",
    },
    {
        label: "GrassLand Finance",
        value: "grassland-finance",
        logoURL: "https://icons.llama.fi/grassland-finance.png",
    },
    {
        label: "Anon Social",
        value: "anon-social",
        logoURL: "https://icons.llama.fi/anon-social.jpg",
    },
    {
        label: "SuperBots",
        value: "superbots",
        logoURL: "https://icons.llama.fi/superbots.png",
    },
    {
        label: "Frogge.Finance",
        value: "frogge.finance",
        logoURL: "https://icons.llama.fi/frogge.finance.png",
    },
    {
        label: "Dalmatian",
        value: "dalmatian",
        logoURL: "https://icons.llama.fi/dalmatian.jpg",
    },
    {
        label: "HipPoWSwap",
        value: "hippowswap",
        logoURL: "https://icons.llama.fi/hippowswap.png",
    },
    {
        label: "PYEswap",
        value: "pyeswap",
        logoURL: "https://icons.llama.fi/pyeswap.jpg",
    },
    {
        label: "cantOHM",
        value: "cantohm",
        logoURL: "https://icons.llama.fi/cantohm.jpg",
    },
    {
        label: "Themis-lsdFil",
        value: "themis-lsdfil",
        logoURL: "https://icons.llama.fi/themis-lsdfil.png",
    },
    {
        label: "Zinax DAO",
        value: "zinax-dao",
        logoURL: "https://icons.llama.fi/zinax-dao.png",
    },
    {
        label: "Liquidrium",
        value: "liquidrium",
        logoURL: "https://icons.llama.fi/liquidrium.png",
    },
    {
        label: "DarkSwap",
        value: "darkswap",
        logoURL: "https://icons.llama.fi/darkswap.jpg",
    },
    {
        label: "AliensFarm",
        value: "aliensfarm",
        logoURL: "https://icons.llama.fi/aliensfarm.png",
    },
    {
        label: "Bitgert Swap",
        value: "bitgert-swap",
        logoURL: "https://icons.llama.fi/bitgert-swap.jpg",
    },
    {
        label: "White Whale Vaults",
        value: "white-whale-vaults",
        logoURL: "https://icons.llama.fi/white-whale.png",
    },
    {
        label: "ClaySwap",
        value: "clayswap",
        logoURL: "https://icons.llama.fi/clayswap.png",
    },
    {
        label: "Astra DAO",
        value: "astra-dao",
        logoURL: "https://icons.llama.fi/astra-dao.jpg",
    },
    {
        label: "Juggler Red",
        value: "juggler-red",
        logoURL: "https://icons.llama.fi/juggler-red.jpg",
    },
    {
        label: "Sierra",
        value: "sierra",
        logoURL: "https://icons.llama.fi/sierra.png",
    },
    {
        label: "FantomPup",
        value: "fantompup",
        logoURL: "https://icons.llama.fi/fantompup.png",
    },
    {
        label: "Spoon Exchange",
        value: "spoon-exchange",
        logoURL: "https://icons.llama.fi/spoon-exchange.jpg",
    },
    {
        label: "Grave Finance",
        value: "grave-finance",
        logoURL: "https://icons.llama.fi/grave-finance.png",
    },
    {
        label: "Swift Finance",
        value: "swift-finance",
        logoURL: "https://icons.llama.fi/swift-finance.png",
    },
    {
        label: "Collection.xyz",
        value: "collection.xyz",
        logoURL: "https://icons.llama.fi/collection.xyz.png",
    },
    {
        label: "Fastyield Finance",
        value: "fastyield-finance",
        logoURL: "https://icons.llama.fi/fastyield-finance.png",
    },
    {
        label: "PirateDAO",
        value: "piratedao",
        logoURL: "https://icons.llama.fi/pirate-dao.jpg",
    },
    {
        label: "Mayfair Fund",
        value: "mayfair-fund",
        logoURL: "https://icons.llama.fi/mayfair-fund.jpg",
    },
    {
        label: "Avatr",
        value: "avatr",
        logoURL: "https://icons.llama.fi/avatr.jpg",
    },
    {
        label: "FATFIRE DEFI",
        value: "fatfire-defi",
        logoURL: "https://icons.llama.fi/fatfire.jpg",
    },
    {
        label: "Lavafall",
        value: "lavafall",
        logoURL: "https://icons.llama.fi/lavafalls.png",
    },
    {
        label: "DYAD",
        value: "dyad",
        logoURL: "https://icons.llama.fi/dyad.png",
    },
    {
        label: "ScareCrow Finance",
        value: "scarecrow-finance",
        logoURL: "https://icons.llama.fi/scarecrow.png",
    },
    {
        label: "Roe Finance",
        value: "roe-finance",
        logoURL: "https://icons.llama.fi/roe-finance.jpg",
    },
    {
        label: "Quickswap Lend",
        value: "quickswap-lend",
        logoURL: "https://icons.llama.fi/quickswap-lend.jpg",
    },
    {
        label: "SageBet",
        value: "sagebet",
        logoURL: "https://icons.llama.fi/sagebet.jpg",
    },
    {
        label: "Nano Swap",
        value: "nano-swap",
        logoURL: "https://icons.llama.fi/nano-swap.png",
    },
    {
        label: "SandySwap",
        value: "sandyswap",
        logoURL: "https://icons.llama.fi/sandyswap.png",
    },
    {
        label: "Meso Finance",
        value: "meso-finance",
        logoURL: "https://icons.llama.fi/meso-finance.png",
    },
    {
        label: "DefySwap",
        value: "defyswap",
        logoURL: "https://icons.llama.fi/defyswap.png",
    },
    {
        label: "JLSwap",
        value: "jlswap",
        logoURL: "https://icons.llama.fi/jlswap.png",
    },
    {
        label: "Augmented Finance",
        value: "augmented-finance",
        logoURL: "https://icons.llama.fi/augmented-finance.svg",
    },
    {
        label: "SmartDEXBCH",
        value: "smartdexbch",
        logoURL: "https://icons.llama.fi/smartdexbch.jpg",
    },
    {
        label: "Fenrir Finance",
        value: "fenrir-finance",
        logoURL: "https://icons.llama.fi/fenrir-finance.png",
    },
    {
        label: "MantaSwap",
        value: "mantaswap",
        logoURL: "https://icons.llama.fi/mantaswap.jpg",
    },
    {
        label: "Vendor V1",
        value: "vendor-v1",
        logoURL: "https://icons.llama.fi/vendor-finance.png",
    },
    {
        label: "Deflex",
        value: "deflex",
        logoURL: "https://icons.llama.fi/deflex.png",
    },
    {
        label: "AutoBark",
        value: "autobark",
        logoURL: "https://icons.llama.fi/autobark.png",
    },
    {
        label: "BAS3D",
        value: "bas3d",
        logoURL: "https://icons.llama.fi/bas3d.png",
    },
    {
        label: "Kivach",
        value: "kivach",
        logoURL: "https://icons.llama.fi/kivach.png",
    },
    {
        label: "leNFT",
        value: "lenft",
        logoURL: "https://icons.llama.fi/lenft.jpg",
    },
    {
        label: "Metapoly",
        value: "metapoly",
        logoURL: "https://icons.llama.fi/metapoly.jpg",
    },
    {
        label: "Dove Swap V2",
        value: "dove-swap-v2",
        logoURL: "https://icons.llama.fi/dove-swap-v2.png",
    },
    {
        label: "Phantom Finance",
        value: "phantom-finance",
        logoURL: "https://icons.llama.fi/gton-capital.png",
    },
    {
        label: "Palma Swap",
        value: "palma-swap",
        logoURL: "https://icons.llama.fi/palma-swap.jpg",
    },
    {
        label: "Galador",
        value: "galador",
        logoURL: "https://icons.llama.fi/galador.jpg",
    },
    {
        label: "BridgeKek",
        value: "bridgekek",
        logoURL: "https://icons.llama.fi/bridgekek.jpg",
    },
    {
        label: "DogeMuskSwap",
        value: "dogemuskswap",
        logoURL: "https://icons.llama.fi/dogemuskswap.png",
    },
    {
        label: "Gamblefi",
        value: "gamblefi",
        logoURL: "https://icons.llama.fi/gamblefi.png",
    },
    {
        label: "Derify Protocol",
        value: "derify-protocol",
        logoURL: "https://icons.llama.fi/derify-protocol.jpg",
    },
    {
        label: "Spectrumswap",
        value: "spectrumswap",
        logoURL: "https://icons.llama.fi/spectrumswap.png",
    },
    {
        label: "Stronghands",
        value: "stronghands",
        logoURL: "https://icons.llama.fi/stronghands.png",
    },
    {
        label: "Draco Force",
        value: "draco-force",
        logoURL: "https://icons.llama.fi/draco-force.png",
    },
    {
        label: "boobs.finance",
        value: "boobs.finance",
        logoURL: "https://icons.llama.fi/boobs.finance.jpg",
    },
    {
        label: "X Blue Finance",
        value: "x-blue-finance",
        logoURL: "https://icons.llama.fi/x-blue-finance.jpg",
    },
    {
        label: "LIFE",
        value: "life",
        logoURL: "https://icons.llama.fi/life.png",
    },
    {
        label: "Mockingbird",
        value: "mockingbird",
        logoURL: "https://icons.llama.fi/mockingbird.png",
    },
    {
        label: "WeStarter",
        value: "westarter",
        logoURL: "https://icons.llama.fi/westarter.png",
    },
    {
        label: "LazyFi",
        value: "lazyfi",
        logoURL: "https://icons.llama.fi/lazyfi.jpg",
    },
    {
        label: "Stake1",
        value: "stake1",
        logoURL: "https://icons.llama.fi/stake1.png",
    },
    {
        label: "Defi Yield Protocol",
        value: "defi-yield-protocol",
        logoURL: "https://icons.llama.fi/defi-yield-protocol.jpg",
    },
    {
        label: "Spiral Finance",
        value: "spiral-finance",
        logoURL: "https://icons.llama.fi/spiral-finance.png",
    },
    {
        label: "Evolve",
        value: "evolve",
        logoURL: "https://icons.llama.fi/evolve.png",
    },
    {
        label: "CoreSwap",
        value: "coreswap",
        logoURL: "https://icons.llama.fi/coreswap.jpg",
    },
    {
        label: "Squid-Defi",
        value: "squid-defi",
        logoURL: "https://icons.llama.fi/squid-defi.png",
    },
    {
        label: "IFSwap",
        value: "ifswap",
        logoURL: "https://icons.llama.fi/ifswap.png",
    },
    {
        label: "Sahara Exchange",
        value: "sahara-exchange",
        logoURL: "https://icons.llama.fi/sahara-exchange.png",
    },
    {
        label: "Starfish Liquid Staking",
        value: "starfish-liquid-staking",
        logoURL: "https://icons.llama.fi/starfish-liquid-staking.jpg",
    },
    {
        label: "Brise Swap",
        value: "brise-swap",
        logoURL: "https://icons.llama.fi/brise-swap.png",
    },
    {
        label: "BWSWAP",
        value: "bwswap",
        logoURL: "https://icons.llama.fi/bwswap.jpg",
    },
    {
        label: "Starbank",
        value: "starbank",
        logoURL: "https://icons.llama.fi/starbank.jpg",
    },
    {
        label: "ComfySwap",
        value: "comfyswap",
        logoURL: "https://icons.llama.fi/comfyswap.png",
    },
    {
        label: "Frog Nation Farm",
        value: "frog-nation-farm",
        logoURL: "https://icons.llama.fi/frog-nation-farm.png",
    },
    {
        label: "ChampagneSwap",
        value: "champagneswap",
        logoURL: "https://icons.llama.fi/champagneswap.png",
    },
    {
        label: "PlsPrint",
        value: "plsprint",
        logoURL: "https://icons.llama.fi/plsprint.png",
    },
    {
        label: "TomoFinance",
        value: "tomofinance",
        logoURL: "https://icons.llama.fi/tomofinance.jpg",
    },
    {
        label: "Kyrios Finance",
        value: "kyrios-finance",
        logoURL: "https://icons.llama.fi/kyrios-finance.png",
    },
    {
        label: "Bank of Cronos Loans",
        value: "bank-of-cronos-loans",
        logoURL: "https://icons.llama.fi/bank-of-cronos-loans.png",
    },
    {
        label: "MetaSwap",
        value: "metaswap",
        logoURL: "https://icons.llama.fi/metaswap.png",
    },
    {
        label: "Zolidly Finance",
        value: "zolidly-finance",
        logoURL: "https://icons.llama.fi/zolidly-finance.jpg",
    },
    {
        label: "Ajira Pay Finance",
        value: "ajira-pay-finance",
        logoURL: "https://icons.llama.fi/ajira-pay-finance.jpg",
    },
    {
        label: "nftperp",
        value: "nftperp",
        logoURL: "https://icons.llama.fi/nftperp.png",
    },
    {
        label: "DefiCurrent",
        value: "deficurrent",
        logoURL: "https://icons.llama.fi/shipyard-finance.png",
    },
    {
        label: "MoonLift",
        value: "moonlift",
        logoURL: "https://icons.llama.fi/moonlift.jpg",
    },
    {
        label: "OpenBiSea",
        value: "openbisea",
        logoURL: "https://icons.llama.fi/openbisea.jpg",
    },
    {
        label: "L2FINANCE",
        value: "l2finance",
        logoURL: "https://icons.llama.fi/l2finance.jpg",
    },
    {
        label: "TroyDefi",
        value: "troydefi",
        logoURL: "https://icons.llama.fi/troydefi.png",
    },
    {
        label: "Astral Farm",
        value: "astral-farm",
        logoURL: "https://icons.llama.fi/astral-farm.png",
    },
    {
        label: "Xray Swap",
        value: "xray-swap",
        logoURL: "https://icons.llama.fi/xray-swap.png",
    },
    {
        label: "JaguarSwap",
        value: "jaguarswap",
        logoURL: "https://icons.llama.fi/jaguarswap.jpg",
    },
    {
        label: "DogePup",
        value: "dogepup",
        logoURL: "https://icons.llama.fi/dogepup.png",
    },
    {
        label: "V3S Finance",
        value: "v3s-finance",
        logoURL: "https://icons.llama.fi/v3s-finance.png",
    },
    {
        label: "SenpaiSwap",
        value: "senpaiswap",
        logoURL: "https://icons.llama.fi/senpaiswap.jpg",
    },
    {
        label: "Astar Exchange V3",
        value: "astar-exchange-v3",
        logoURL: "https://icons.llama.fi/astar-exchange-v3.png",
    },
    {
        label: "JBC.Finance",
        value: "jbc.finance",
        logoURL: "https://icons.llama.fi/jbc.finance.jpg",
    },
    {
        label: "MyMine",
        value: "mymine",
        logoURL: "https://icons.llama.fi/mymine.png",
    },
    {
        label: "Aladdin DAO",
        value: "aladdin-dao",
        logoURL: "https://icons.llama.fi/aladdin-dao.png",
    },
    {
        label: "polyfriend.tech",
        value: "polyfriend.tech",
        logoURL: "https://icons.llama.fi/polyfriend.tech.png",
    },
    {
        label: "Pandora Swap",
        value: "pandora-swap",
        logoURL: "https://icons.llama.fi/pandora-swap.jpg",
    },
    {
        label: "Earnifty",
        value: "earnifty",
        logoURL: "https://icons.llama.fi/earnifty.png",
    },
    {
        label: "Openworld",
        value: "openworld",
        logoURL: "https://icons.llama.fi/openworld.png",
    },
    {
        label: "Kapinus",
        value: "kapinus",
        logoURL: "https://icons.llama.fi/kapinus.jpg",
    },
    {
        label: "Quillswap",
        value: "quillswap",
        logoURL: "https://icons.llama.fi/quillswap.jpg",
    },
    {
        label: "Scrollswap Finance",
        value: "scrollswap-finance",
        logoURL: "https://icons.llama.fi/scrollswap-finance.jpg",
    },
    {
        label: "PanKUKU",
        value: "pankuku",
        logoURL: "https://icons.llama.fi/pankuku.png",
    },
    {
        label: "SkullSwap V3",
        value: "skullswap-v3",
        logoURL: "https://icons.llama.fi/skullswap-v3.png",
    },
    {
        label: "Emerald Swap",
        value: "emerald-swap",
        logoURL: "https://icons.llama.fi/emerald-swap.png",
    },
    {
        label: "printyfinance",
        value: "printyfinance",
        logoURL: "https://icons.llama.fi/printyfinance.jpg",
    },
    {
        label: "BonqDAO",
        value: "bonqdao",
        logoURL: "https://icons.llama.fi/bonqdao.jpg",
    },
    {
        label: "Adena Finance",
        value: "adena-finance",
        logoURL: "https://icons.llama.fi/adena-finance.png",
    },
    {
        label: "Risq Protocol",
        value: "risq-protocol",
        logoURL: "https://icons.llama.fi/risq-protocol.jpg",
    },
    {
        label: "Octane Finance",
        value: "octane-finance",
        logoURL: "https://icons.llama.fi/octane-finance.jpg",
    },
    {
        label: "ElonSwap",
        value: "elonswap",
        logoURL: "https://icons.llama.fi/elonswap.png",
    },
    {
        label: "SkullSwap V2",
        value: "skullswap-v2",
        logoURL: "https://icons.llama.fi/skullswap-v2.png",
    },
    {
        label: "GmCash",
        value: "gmcash",
        logoURL: "https://icons.llama.fi/gmcash.png",
    },
    {
        label: "Tenet",
        value: "tenet",
        logoURL: "https://icons.llama.fi/tenet.png",
    },
    {
        label: "LuxsFi",
        value: "luxsfi",
        logoURL: "https://icons.llama.fi/luxsfi.png",
    },
    {
        label: "Ice Colony",
        value: "ice-colony",
        logoURL: "https://icons.llama.fi/ice-colony.png",
    },
    {
        label: "PattieSwap",
        value: "pattieswap",
        logoURL: "https://icons.llama.fi/pattieswap.png",
    },
    {
        label: "Beluga Protocol",
        value: "beluga-protocol",
        logoURL: "https://icons.llama.fi/beluga-protocol.png",
    },
    {
        label: "ZukeSwap",
        value: "zukeswap",
        logoURL: "https://icons.llama.fi/zukeswap.jpg",
    },
    {
        label: "Mirai",
        value: "mirai",
        logoURL: "https://icons.llama.fi/mirai.png",
    },
    {
        label: "AfraSwap",
        value: "afraswap",
        logoURL: "https://icons.llama.fi/afraswap.jpg",
    },
    {
        label: "Zena Finance",
        value: "zena-finance",
        logoURL: "https://icons.llama.fi/zena-finance.jpg",
    },
    {
        label: "VampireSwap",
        value: "vampireswap",
        logoURL: "https://icons.llama.fi/vampireswap.png",
    },
    {
        label: "NumisMe",
        value: "numisme",
        logoURL: "https://icons.llama.fi/numisme.png",
    },
    {
        label: "SunFlower Finance",
        value: "sunflower-finance",
        logoURL: "https://icons.llama.fi/sunflower-finance.jpg",
    },
    {
        label: "Solana Farm",
        value: "solana-farm",
        logoURL: "https://icons.llama.fi/solana-farm.jpg",
    },
    {
        label: "Asgard Dao",
        value: "asgard-dao",
        logoURL: "https://icons.llama.fi/asgard-dao.jpg",
    },
    {
        label: "BitANT",
        value: "bitant",
        logoURL: "https://icons.llama.fi/bitant.png",
    },
    {
        label: "Future Swap",
        value: "future-swap",
        logoURL: "https://icons.llama.fi/future-swap.png",
    },
    {
        label: "Just Yield",
        value: "just-yield",
        logoURL: "https://icons.llama.fi/just-yield.png",
    },
    {
        label: "BencuFi",
        value: "bencufi",
        logoURL: "https://icons.llama.fi/bencufi.jpg",
    },
    {
        label: "ko.one",
        value: "ko.one",
        logoURL: "https://icons.llama.fi/ko.one.png",
    },
    {
        label: "NewSpace Finance",
        value: "newspace-finance",
        logoURL: "https://icons.llama.fi/newspace-finance.png",
    },
    {
        label: "CockFights Game",
        value: "cockfights-game",
        logoURL: "https://icons.llama.fi/cockfights-game.png",
    },
    {
        label: "IceSwap",
        value: "iceswap",
        logoURL: "https://icons.llama.fi/iceswap.jpg",
    },
    {
        label: "PixelSwap",
        value: "pixelswap",
        logoURL: "https://icons.llama.fi/pixelswap.png",
    },
    {
        label: "Basin DAO",
        value: "basin-dao",
        logoURL: "https://icons.llama.fi/basin-dao.jpg",
    },
    {
        label: "Spooky Base",
        value: "spooky-base",
        logoURL: "https://icons.llama.fi/spooky-base.jpg",
    },
    {
        label: "YSL.IO",
        value: "ysl.io",
        logoURL: "https://icons.llama.fi/ysl.jpg",
    },
    {
        label: "Ball Exchange",
        value: "ball-exchange",
        logoURL: "https://icons.llama.fi/ball-exchange.png",
    },
    {
        label: "Bitlend",
        value: "bitlend",
        logoURL: "https://icons.llama.fi/bitlend.png",
    },
    {
        label: "Statix Farm",
        value: "statix-farm",
        logoURL: "https://icons.llama.fi/statix-farm.jpg",
    },
    {
        label: "Jujube Finance",
        value: "jujube-finance",
        logoURL: "https://icons.llama.fi/jujube-finance.png",
    },
    {
        label: "BoneSwap",
        value: "boneswap",
        logoURL: "https://icons.llama.fi/boneswap.png",
    },
    {
        label: "Jupiter Swap",
        value: "jupiter-swap",
        logoURL: "https://icons.llama.fi/jupiter-swap.png",
    },
    {
        label: "Sugar Swap",
        value: "sugar-swap",
        logoURL: "https://icons.llama.fi/sugar-swap.png",
    },
    {
        label: "WaterLoan",
        value: "waterloan",
        logoURL: "https://icons.llama.fi/waterloan.jpg",
    },
    {
        label: "ViveLaBouje",
        value: "vivelabouje",
        logoURL: "https://icons.llama.fi/vivelabouje.jpg",
    },
    {
        label: "PaperDAO",
        value: "paperdao",
        logoURL: "https://icons.llama.fi/paperdao.png",
    },
    {
        label: "Monocerus",
        value: "monocerus",
        logoURL: "https://icons.llama.fi/monocerus.jpg",
    },
    {
        label: "Etherberry Finance",
        value: "etherberry-finance",
        logoURL: "https://icons.llama.fi/etherberry-finance.jpg",
    },
    {
        label: "WaterDendy",
        value: "waterdendy",
        logoURL: "https://icons.llama.fi/waterdendy.png",
    },
    {
        label: "EggTartSwap",
        value: "eggtartswap",
        logoURL: "https://icons.llama.fi/eggtartswap.png",
    },
    {
        label: "The Dragon's Lair",
        value: "the-dragons-lair",
        logoURL: "https://icons.llama.fi/the-dragons-lair.png",
    },
    {
        label: "Owna",
        value: "owna",
        logoURL: "https://icons.llama.fi/owna.png",
    },
    {
        label: "MapleDeFi",
        value: "mapledefi",
        logoURL: "https://icons.llama.fi/mapledefi.png",
    },
    {
        label: "Multi-Chain Miner",
        value: "multi-chain-miner",
        logoURL: "https://icons.llama.fi/multi-chain-miner.jpg",
    },
    {
        label: "Sailing Protocol",
        value: "sailing-protocol",
        logoURL: "https://icons.llama.fi/sailing-protocol.png",
    },
    {
        label: "Sapphire Defi",
        value: "sapphire-defi",
        logoURL: "https://icons.llama.fi/sapphire-defi.jpg",
    },
    {
        label: "Fuzion Ignition",
        value: "fuzion-ignition",
        logoURL: "https://icons.llama.fi/fuzion-ignition.png",
    },
    {
        label: "S Finance",
        value: "s-finance",
        logoURL: "https://icons.llama.fi/s-finance.svg",
    },
    {
        label: "DeerFi",
        value: "deerfi",
        logoURL: "https://icons.llama.fi/deerfi.png",
    },
    {
        label: "BastilleDeLaBouje",
        value: "bastilledelabouje",
        logoURL: "https://icons.llama.fi/bastilledelabouje.png",
    },
    {
        label: "Throne V2",
        value: "throne-v2",
        logoURL: "https://icons.llama.fi/throne-v2.jpg",
    },
    {
        label: "Redemption Finance",
        value: "redemption-finance",
        logoURL: "https://icons.llama.fi/redemption-finance.jpg",
    },
    {
        label: "Deridex",
        value: "deridex",
        logoURL: "https://icons.llama.fi/deridex.png",
    },
    {
        label: "BFX Finance",
        value: "bfx-finance",
        logoURL: "https://icons.llama.fi/bfx-finance.jpg",
    },
    {
        label: "Defi Halal",
        value: "defi-halal",
        logoURL: "https://icons.llama.fi/defi-halal.png",
    },
    {
        label: "Bodh Finance",
        value: "bodh-finance",
        logoURL: "https://icons.llama.fi/bodh-finance.png",
    },
    {
        label: "onAVAX",
        value: "onavax",
        logoURL: "https://icons.llama.fi/onavax.png",
    },
    {
        label: "Spartacus Exchange",
        value: "spartacus-exchange",
        logoURL: "https://icons.llama.fi/spartacus.jpg",
    },
    {
        label: "Coffin Finance",
        value: "coffin-finance",
        logoURL: "https://icons.llama.fi/coffin-finance.png",
    },
    {
        label: "theGoblins",
        value: "thegoblins",
        logoURL: "https://icons.llama.fi/thegoblins.jpg",
    },
    {
        label: "Sharelock",
        value: "sharelock",
        logoURL: "https://icons.llama.fi/sharelock.png",
    },
    {
        label: "AntiHero Finance",
        value: "antihero-finance",
        logoURL: "https://icons.llama.fi/antihero-finance.jpg",
    },
    {
        label: "Cemetery Finance",
        value: "cemetery-finance",
        logoURL: "https://icons.llama.fi/cementary-finance.png",
    },
    {
        label: "Based Farm",
        value: "based-farm",
        logoURL: "https://icons.llama.fi/based-farm.jpg",
    },
    {
        label: "ApeDAO",
        value: "apedao",
        logoURL: "https://icons.llama.fi/vapedao.jpg",
    },
    {
        label: "Inuswap",
        value: "inuswap",
        logoURL: "https://icons.llama.fi/inuswap.png",
    },
    {
        label: "Knights of Fantom",
        value: "knights-of-fantom",
        logoURL: "https://icons.llama.fi/knights-of-fantom.jpg",
    },
    {
        label: "NEX",
        value: "nex",
        logoURL: "https://icons.llama.fi/nex.jpg",
    },
    {
        label: "MobyDEX",
        value: "mobydex",
        logoURL: "https://icons.llama.fi/mobydex.jpg",
    },
    {
        label: "Exodia",
        value: "exodia",
        logoURL: "https://icons.llama.fi/exodia.png",
    },
    {
        label: "HOPE Lend",
        value: "hope-lend",
        logoURL: "https://icons.llama.fi/hope-lend.jpg",
    },
    {
        label: "Nightmare Finance",
        value: "nightmare-finance",
        logoURL: "https://icons.llama.fi/nightmare-finance.png",
    },
    {
        label: "MetaCrono",
        value: "metacrono",
        logoURL: "https://icons.llama.fi/metacrono.png",
    },
    {
        label: "Ithil",
        value: "ithil",
        logoURL: "https://icons.llama.fi/ithil.png",
    },
    {
        label: "CyberFantasyFembots",
        value: "cyberfantasyfembots",
        logoURL: "https://icons.llama.fi/cyberfantasyfembots.png",
    },
    {
        label: "CakeWSwap",
        value: "cakewswap",
        logoURL: "https://icons.llama.fi/cakewswap.png",
    },
    {
        label: "OctoLSD",
        value: "octolsd",
        logoURL: "https://icons.llama.fi/octolsd.jpg",
    },
    {
        label: "GemMine",
        value: "gemmine",
        logoURL: "https://icons.llama.fi/gemmine.png",
    },
    {
        label: "Zest Protocol",
        value: "zest-protocol",
        logoURL: "https://icons.llama.fi/zest-protocol.png",
    },
    {
        label: "Milky Cow",
        value: "milky-cow",
        logoURL: "https://icons.llama.fi/milky-cow.png",
    },
    {
        label: "SpectreFi",
        value: "spectrefi",
        logoURL: "https://icons.llama.fi/spectrefi.png",
    },
    {
        label: "Life DAO",
        value: "life-dao",
        logoURL: "https://icons.llama.fi/life-dao.jpg",
    },
    {
        label: "Moneyrain Finance",
        value: "moneyrain-finance",
        logoURL: "https://icons.llama.fi/moneyrain-finance.png",
    },
    {
        label: "CuanSwap",
        value: "cuanswap",
        logoURL: "https://icons.llama.fi/cuanswap.jpg",
    },
    {
        label: "Sigmao",
        value: "sigmao",
        logoURL: "https://icons.llama.fi/sigmao.jpg",
    },
    {
        label: "Stakerz",
        value: "stakerz",
        logoURL: "https://icons.llama.fi/stakerz.jpg",
    },
    {
        label: "The Story of Draco",
        value: "the-story-of-draco",
        logoURL: "https://icons.llama.fi/the-story-of-draco.png",
    },
    {
        label: "JetMine DAO",
        value: "jetmine-dao",
        logoURL: "https://icons.llama.fi/jetmine-dao.png",
    },
    {
        label: "ShiftDollar",
        value: "shiftdollar",
        logoURL: "https://icons.llama.fi/shiftdollar.png",
    },
    {
        label: "WTFDOGE",
        value: "wtfdoge",
        logoURL: "https://icons.llama.fi/wtfdoge.png",
    },
    {
        label: "ABcDeFX",
        value: "abcdefx",
        logoURL: "https://icons.llama.fi/abcdefx.png",
    },
    {
        label: "Soda Protocol",
        value: "soda-protocol",
        logoURL: "https://icons.llama.fi/soda-protocol.png",
    },
    {
        label: "CZODIAC",
        value: "czodiac",
        logoURL: "https://icons.llama.fi/czodiac.png",
    },
    {
        label: "AtoDEX",
        value: "atodex",
        logoURL: "https://icons.llama.fi/atodex.jpg",
    },
    {
        label: "Wise Lending",
        value: "wise-lending",
        logoURL: "https://icons.llama.fi/wise-lending.png",
    },
    {
        label: "VoltageSwap",
        value: "voltageswap",
        logoURL: "https://icons.llama.fi/voltageswap.jpg",
    },
    {
        label: "Traddify Arbitrage",
        value: "traddify-arbitrage",
        logoURL: "https://icons.llama.fi/traddify-arbitrage.png",
    },
    {
        label: "Dogium Farm",
        value: "dogium-farm",
        logoURL: "https://icons.llama.fi/dogium-farm.jpg",
    },
    {
        label: "MilkyWay",
        value: "milkyway",
        logoURL: "https://icons.llama.fi/milkyway.png",
    },
    {
        label: "Kasava Dex",
        value: "kasava-dex",
        logoURL: "https://icons.llama.fi/kasava-dex.png",
    },
    {
        label: "Cupid Farm",
        value: "cupid-farm",
        logoURL: "https://icons.llama.fi/cupid-farm.png",
    },
    {
        label: "Hotpot Finance",
        value: "hotpot-finance",
        logoURL: "https://icons.llama.fi/hotpot-finance.png",
    },
    {
        label: "MoonDao",
        value: "moondao",
        logoURL: "https://icons.llama.fi/moondao.jpg",
    },
    {
        label: "SwirlLend",
        value: "swirllend",
        logoURL: "https://icons.llama.fi/swirllend.jpg",
    },
    {
        label: "BaksDAO",
        value: "baksdao",
        logoURL: "https://icons.llama.fi/baksdao.png",
    },
    {
        label: "Dubble Exchange",
        value: "dubble-exchange",
        logoURL: "https://icons.llama.fi/dubble-exchange.png",
    },
    {
        label: "DogeClaw",
        value: "dogeclaw",
        logoURL: "https://icons.llama.fi/dogeclaw.png",
    },
    {
        label: "Andromeada",
        value: "andromeada",
        logoURL: "https://icons.llama.fi/andromeada.jpg",
    },
    {
        label: "KefirSwap",
        value: "kefirswap",
        logoURL: "https://icons.llama.fi/kefirswap.png",
    },
    {
        label: "DeFO",
        value: "defo",
        logoURL: "https://icons.llama.fi/defo.jpg",
    },
    {
        label: "ApexSwap",
        value: "apexswap",
        logoURL: "https://icons.llama.fi/apexswap.jpg",
    },
    {
        label: "TruFin Legacy Vaults",
        value: "trufin-legacy-vaults",
        logoURL: "https://icons.llama.fi/trufin-legacy-vaults.jpg",
    },
    {
        label: "Procyon",
        value: "procyon",
        logoURL: "https://icons.llama.fi/procyon.png",
    },
    {
        label: "Tarina",
        value: "tarina",
        logoURL: "https://icons.llama.fi/tarina.png",
    },
    {
        label: "FlatCoin DEX",
        value: "flatcoin-dex",
        logoURL: "https://icons.llama.fi/flatcoin-dex.png",
    },
    {
        label: "Astarnova",
        value: "astarnova",
        logoURL: "https://icons.llama.fi/astarnova.png",
    },
    {
        label: "Silo Protocol",
        value: "silo-protocol",
        logoURL: "https://icons.llama.fi/silo-protocol.png",
    },
    {
        label: "Voodoo Trade Fantom",
        value: "voodoo-trade-fantom",
        logoURL: "https://icons.llama.fi/voodoo-trade-fantom.jpg",
    },
    {
        label: "Flux Protocol",
        value: "flux-protocol",
        logoURL: "https://icons.llama.fi/flux-protocol.jpg",
    },
    {
        label: "ColaFactory",
        value: "colafactory",
        logoURL: "https://icons.llama.fi/colafactory.jpg",
    },
    {
        label: "Amet Finance",
        value: "amet-finance",
        logoURL: "https://icons.llama.fi/amet-finance.jpg",
    },
    {
        label: "CoinDrip",
        value: "coindrip",
        logoURL: "https://icons.llama.fi/coindrip.jpg",
    },
    {
        label: "PlantBaseSwap",
        value: "plantbaseswap",
        logoURL: "https://icons.llama.fi/plantbaseswap.png",
    },
    {
        label: "Kannagi Finance",
        value: "kannagi-finance",
        logoURL: "https://icons.llama.fi/kannagi-finance.png",
    },
    {
        label: "AvaViking",
        value: "avaviking",
        logoURL: "https://icons.llama.fi/avaviking.png",
    },
    {
        label: "Doora Inu",
        value: "doora-inu",
        logoURL: "https://icons.llama.fi/doora-inu.jpg",
    },
    {
        label: "Stablz",
        value: "stablz",
        logoURL: "https://icons.llama.fi/stablz.jpg",
    },
    {
        label: "Ruby Finance",
        value: "ruby-finance",
        logoURL: "https://icons.llama.fi/ruby-finance.png",
    },
    {
        label: "Feeder Finance",
        value: "feeder-finance",
        logoURL: "https://icons.llama.fi/feeder-finance.png",
    },
    {
        label: "Amogus DAO",
        value: "amogus-dao",
        logoURL: "https://icons.llama.fi/amogus-dao.png",
    },
    {
        label: "2omb Finance",
        value: "2omb-finance",
        logoURL: "https://icons.llama.fi/2omb-finance.png",
    },
    {
        label: "Vortex DAO",
        value: "vortex-dao",
        logoURL: "https://icons.llama.fi/vortex-dao.png",
    },
    {
        label: "opBANANA",
        value: "opbanana",
        logoURL: "https://icons.llama.fi/opbanana.jpg",
    },
    {
        label: "zkDefi",
        value: "zkdefi",
        logoURL: "https://icons.llama.fi/zkdefi.jpg",
    },
    {
        label: "ChocoBase",
        value: "chocobase",
        logoURL: "https://icons.llama.fi/chocobase.png",
    },
    {
        label: "Polytrade",
        value: "polytrade",
        logoURL: "https://icons.llama.fi/polytrade.jpg",
    },
    {
        label: "ELYFI",
        value: "elyfi",
        logoURL: "https://icons.llama.fi/elyfi.png",
    },
    {
        label: "SeaLightSwap",
        value: "sealightswap",
        logoURL: "https://icons.llama.fi/sealightswap.png",
    },
    {
        label: "Debets",
        value: "debets",
        logoURL: "https://icons.llama.fi/debets.png",
    },
    {
        label: "Pacman",
        value: "pacman",
        logoURL: "https://icons.llama.fi/pacman.jpg",
    },
    {
        label: "Structured LSD",
        value: "structured-lsd",
        logoURL: "https://icons.llama.fi/structured-lsd.jpg",
    },
    {
        label: "Camel Farm",
        value: "camel-farm",
        logoURL: "https://icons.llama.fi/camel-farm.png",
    },
    {
        label: "Doge Compounder",
        value: "doge-compounder",
        logoURL: "https://icons.llama.fi/doge-compounder.jpg",
    },
    {
        label: "SSAP",
        value: "ssap",
        logoURL: "https://icons.llama.fi/ssap.png",
    },
    {
        label: "FlitSwap",
        value: "flitswap",
        logoURL: "https://icons.llama.fi/flitswap.jpg",
    },
    {
        label: "UniverseFTM",
        value: "universeftm",
        logoURL: "https://icons.llama.fi/universeftm.png",
    },
    {
        label: "1Pulse",
        value: "1pulse",
        logoURL: "https://icons.llama.fi/1pulse.jpg",
    },
    {
        label: "0xLend",
        value: "0xlend",
        logoURL: "https://icons.llama.fi/0xlend.png",
    },
    {
        label: "StrikeX",
        value: "strikex",
        logoURL: "https://icons.llama.fi/strikex.png",
    },
    {
        label: "Philetairus Socius",
        value: "philetairus-socius",
        logoURL: "https://icons.llama.fi/philetairus-socius.jpg",
    },
    {
        label: "Securo Finance",
        value: "securo-finance",
        logoURL: "https://icons.llama.fi/securo-finance.jpg",
    },
    {
        label: "Jadeswap",
        value: "jadeswap",
        logoURL: "https://icons.llama.fi/jadeswap.png",
    },
    {
        label: "Ketchup Finance",
        value: "ketchup-finance",
        logoURL: "https://icons.llama.fi/ketchup-finance.png",
    },
    {
        label: "Cryptoo Tech",
        value: "cryptoo-tech",
        logoURL: "https://icons.llama.fi/cryptoo-tech.jpg",
    },
    {
        label: "Omni Protocol",
        value: "omni-protocol",
        logoURL: "https://icons.llama.fi/omni-protocol.png",
    },
    {
        label: "Spiral Fi Mixer",
        value: "spiral-fi-mixer",
        logoURL: "https://icons.llama.fi/sovryn-zero.png",
    },
    {
        label: "TreeHouse Finance",
        value: "treehouse-finance",
        logoURL: "https://icons.llama.fi/treehouse-finance.png",
    },
    {
        label: "Xmas Past",
        value: "xmas-past",
        logoURL: "https://icons.llama.fi/xmaspast.png",
    },
    {
        label: "ChainGPT",
        value: "chaingpt",
        logoURL: "https://icons.llama.fi/chaingpt.jpg",
    },
    {
        label: "Wild Base",
        value: "wild-base",
        logoURL: "https://icons.llama.fi/wild-base.png",
    },
    {
        label: "RubikFarm",
        value: "rubikfarm",
        logoURL: "https://icons.llama.fi/rubikfarm.png",
    },
    {
        label: "Bridge LZ",
        value: "bridge-lz",
        logoURL: "https://icons.llama.fi/bridge-lz.png",
    },
    {
        label: "Defi Master",
        value: "defi-master",
        logoURL: "https://icons.llama.fi/defi-master.jpg",
    },
    {
        label: "Ace of Base",
        value: "ace-of-base",
        logoURL: "https://icons.llama.fi/ace-of-base.jpg",
    },
    {
        label: "Genius",
        value: "genius",
        logoURL: "https://icons.llama.fi/genius.jpg",
    },
    {
        label: "CygnusDAO",
        value: "cygnusdao",
        logoURL: "https://icons.llama.fi/cygnusdao.jpg",
    },
    {
        label: "Veritable DAO",
        value: "veritable-dao",
        logoURL: "https://icons.llama.fi/veritable-dao.png",
    },
    {
        label: "ArbiTen",
        value: "arbiten",
        logoURL: "https://icons.llama.fi/arbiten.jpg",
    },
    {
        label: "Liquify",
        value: "liquify",
        logoURL: "https://icons.llama.fi/liquify.jpg",
    },
    {
        label: "Caribou Finance",
        value: "caribou-finance",
        logoURL: "https://icons.llama.fi/caribou-finance.png",
    },
    {
        label: "The Don Finance",
        value: "the-don-finance",
        logoURL: "https://icons.llama.fi/the-don-finance.png",
    },
    {
        label: "NowSwap",
        value: "nowswap",
        logoURL: "https://icons.llama.fi/nowswap.jpg",
    },
    {
        label: "MixSwap Finance",
        value: "mixswap-finance",
        logoURL: "https://icons.llama.fi/mixswap-finance.png",
    },
    {
        label: "GrokSwap",
        value: "grokswap",
        logoURL: "https://icons.llama.fi/grokswap.png",
    },
    {
        label: "BabyPig Finance",
        value: "babypig-finance",
        logoURL: "https://icons.llama.fi/babypig-finance.png",
    },
    {
        label: "FeDex Finance",
        value: "fedex-finance",
        logoURL: "https://icons.llama.fi/fedex-finance.png",
    },
    {
        label: "Milkomeda MACC",
        value: "milkomeda-macc",
        logoURL: "https://icons.llama.fi/milkomeda-macc.png",
    },
    {
        label: "Papa DAO",
        value: "papa-dao",
        logoURL: "https://icons.llama.fi/papa-dao.jpg",
    },
    {
        label: "Unirex Finance",
        value: "unirex-finance",
        logoURL: "https://icons.llama.fi/unirex-finance.png",
    },
    {
        label: "Opankeswap",
        value: "opankeswap",
        logoURL: "https://icons.llama.fi/opankeswap.jpg",
    },
    {
        label: "Coup Farm",
        value: "coup-farm",
        logoURL: "https://icons.llama.fi/coup-farm.png",
    },
    {
        label: "Tornadao",
        value: "tornadao",
        logoURL: "https://icons.llama.fi/tornadao.jpg",
    },
    {
        label: "Firi",
        value: "firi",
        logoURL: "https://icons.llama.fi/firi.jpg",
    },
    {
        label: "Mama DAO",
        value: "mama-dao",
        logoURL: "https://icons.llama.fi/mama-dao.jpg",
    },
    {
        label: "AstroFi",
        value: "astrofi",
        logoURL: "https://icons.llama.fi/astrofi.png",
    },
    {
        label: "weBribe DAO",
        value: "webribe-dao",
        logoURL: "https://icons.llama.fi/webribe.png",
    },
    {
        label: "Glitter Finance",
        value: "glitter-finance",
        logoURL: "https://icons.llama.fi/glitter-finance.png",
    },
    {
        label: "Bouje Finance",
        value: "bouje-finance",
        logoURL: "https://icons.llama.fi/bouje.png",
    },
    {
        label: "v2swap",
        value: "v2swap",
        logoURL: "https://icons.llama.fi/v2swap.png",
    },
    {
        label: "Bryan on Base",
        value: "bryan-on-base",
        logoURL: "https://icons.llama.fi/bryan-on-base.jpg",
    },
    {
        label: "kaDefi",
        value: "kadefi",
        logoURL: "https://icons.llama.fi/kadefi.png",
    },
    {
        label: "Metavault Binary Options",
        value: "metavault-binary-options",
        logoURL: "https://icons.llama.fi/metavault-binary-options.jpg",
    },
    {
        label: "Crypto Lottery",
        value: "crypto-lottery",
        logoURL: "https://icons.llama.fi/crypto-lottery.png",
    },
    {
        label: "Tetu Pawnshop",
        value: "tetu-pawnshop",
        logoURL: "https://icons.llama.fi/tetu.svg",
    },
    {
        label: "LunaFi",
        value: "lunafi",
        logoURL: "https://icons.llama.fi/lunafi.png",
    },
    {
        label: "Sapphire Mine",
        value: "sapphire-mine",
        logoURL: "https://icons.llama.fi/sapphire-mine.jpg",
    },
    {
        label: "FTM Frens",
        value: "ftm-frens",
        logoURL: "https://icons.llama.fi/ftm-frens.png",
    },
    {
        label: "ORIO",
        value: "orio",
        logoURL: "https://icons.llama.fi/orio.png",
    },
    {
        label: "Fei Protocol",
        value: "fei-protocol",
        logoURL: "https://icons.llama.fi/fei-protocol.png",
    },
    {
        label: "Goldbank Finance",
        value: "goldbank-finance",
        logoURL: "https://icons.llama.fi/goldbank-finance.jpg",
    },
    {
        label: "Astrowar Finance",
        value: "astrowar-finance",
        logoURL: "https://icons.llama.fi/astrowar-finance.png",
    },
    {
        label: "Stipend",
        value: "stipend",
        logoURL: "https://icons.llama.fi/stipend.png",
    },
    {
        label: "ChocoInu",
        value: "chocoinu",
        logoURL: "https://icons.llama.fi/chocoinu.jpg",
    },
    {
        label: "EcoDeFi",
        value: "ecodefi",
        logoURL: "https://icons.llama.fi/ecodefi.png",
    },
    {
        label: "Paladin DAO",
        value: "paladin-dao",
        logoURL: "https://icons.llama.fi/paladin-dao.png",
    },
    {
        label: "Orcus Finance",
        value: "orcus-finance",
        logoURL: "https://icons.llama.fi/orcus-finance.png",
    },
    {
        label: "Particles Money",
        value: "particles-money",
        logoURL: "https://icons.llama.fi/particles-money.png",
    },
    {
        label: "Dexland",
        value: "dexland",
        logoURL: "https://icons.llama.fi/dexland.jpg",
    },
    {
        label: "Gaia DAO",
        value: "gaia-dao",
        logoURL: "https://icons.llama.fi/gaia-dao.png",
    },
    {
        label: "OhMyCrypt",
        value: "ohmycrypt",
        logoURL: "https://icons.llama.fi/ohmycrypt.jpg",
    },
    {
        label: "OctoPow Finance",
        value: "octopow-finance",
        logoURL: "https://icons.llama.fi/octopow-finance.jpg",
    },
    {
        label: "PSY",
        value: "psy",
        logoURL: "https://icons.llama.fi/psy.jpg",
    },
    {
        label: "EthwSwap",
        value: "ethwswap",
        logoURL: "https://icons.llama.fi/ethwswap.png",
    },
    {
        label: "Arcanum",
        value: "arcanum",
        logoURL: "https://icons.llama.fi/arcanum.png",
    },
    {
        label: "Beluga",
        value: "beluga",
        logoURL: "https://icons.llama.fi/beluga.jpg",
    },
    {
        label: "TempoDAO",
        value: "tempodao",
        logoURL: "https://icons.llama.fi/tempodao.jpg",
    },
    {
        label: "KMex",
        value: "kmex",
        logoURL: "https://icons.llama.fi/kmex.png",
    },
    {
        label: "Spade Finance",
        value: "spade-finance",
        logoURL: "https://icons.llama.fi/spade-finance.png",
    },
    {
        label: "Scranton Finance",
        value: "scranton-finance",
        logoURL: "https://icons.llama.fi/scranton-finance.png",
    },
    {
        label: "KSwap",
        value: "kswap",
        logoURL: "https://icons.llama.fi/kswap.jpg",
    },
    {
        label: "Quantum Unit",
        value: "quantum-unit",
        logoURL: "https://icons.llama.fi/quantum-unit.jpg",
    },
    {
        label: "KapaSwap",
        value: "kapaswap",
        logoURL: "https://icons.llama.fi/kapaswap.png",
    },
    {
        label: "OCTOplace",
        value: "octoplace",
        logoURL: "https://icons.llama.fi/octoplace.jpg",
    },
    {
        label: "Sdex",
        value: "sdex",
        logoURL: "https://icons.llama.fi/sdex.jpg",
    },
    {
        label: "Weave",
        value: "weave",
        logoURL: "https://icons.llama.fi/weave.jpg",
    },
    {
        label: "Hodl Fox",
        value: "hodl-fox",
        logoURL: "https://icons.llama.fi/hodl-fox.png",
    },
    {
        label: "SoarPLS",
        value: "soarpls",
        logoURL: "https://icons.llama.fi/soarpls.png",
    },
    {
        label: "BayMax",
        value: "baymax",
        logoURL: "https://icons.llama.fi/baymax.jpg",
    },
    {
        label: "mirrosset",
        value: "mirrosset",
        logoURL: "https://icons.llama.fi/mirrosset.png",
    },
    {
        label: "Zircon Gamma",
        value: "zircon-gamma",
        logoURL: "https://icons.llama.fi/zircon-gamma.png",
    },
    {
        label: "Fliperino",
        value: "fliperino",
        logoURL: "https://icons.llama.fi/fliperino.png",
    },
    {
        label: "Nirvana",
        value: "nirvana",
        logoURL: "https://icons.llama.fi/nirvana.png",
    },
    {
        label: "Beekava",
        value: "beekava",
        logoURL: "https://icons.llama.fi/beekava.png",
    },
    {
        label: "Vesq",
        value: "vesq",
        logoURL: "https://icons.llama.fi/vesq.png",
    },
    {
        label: "GxyPad",
        value: "gxypad",
        logoURL: "https://icons.llama.fi/gxypad.jpg",
    },
    {
        label: "Krunch Defi",
        value: "krunch-defi",
        logoURL: "https://icons.llama.fi/krunch-defi.png",
    },
    {
        label: "Chad Finance",
        value: "chad-finance",
        logoURL: "https://icons.llama.fi/chad-finance.png",
    },
    {
        label: "KafiDAO",
        value: "kafidao",
        logoURL: "https://icons.llama.fi/kafidao.png",
    },
    {
        label: "Tempest Capital",
        value: "tempest-capital",
        logoURL: "https://icons.llama.fi/tempest-capital.jpg",
    },
    {
        label: "SashimiDAO",
        value: "sashimidao",
        logoURL: "https://icons.llama.fi/sashimidao.jpg",
    },
    {
        label: "MetaID",
        value: "metaid",
        logoURL: "https://icons.llama.fi/metaid.png",
    },
    {
        label: "Pidao Finance",
        value: "pidao-finance",
        logoURL: "https://icons.llama.fi/pidao-finance.png",
    },
    {
        label: "Infy Protocol",
        value: "infy-protocol",
        logoURL: "https://icons.llama.fi/infy-protocol.jpg",
    },
    {
        label: "BakedPotatoes",
        value: "bakedpotatoes",
        logoURL: "https://icons.llama.fi/bakedpotatoes.png",
    },
    {
        label: "Alyx finance",
        value: "alyx-finance",
        logoURL: "https://icons.llama.fi/alyx-finance.png",
    },
    {
        label: "Avalps",
        value: "avalps",
        logoURL: "https://icons.llama.fi/avalps.png",
    },
    {
        label: "Vacus Finance",
        value: "vacus-finance",
        logoURL: "https://icons.llama.fi/vacus-finance.jpg",
    },
    {
        label: "Peaky Finance",
        value: "peaky-finance",
        logoURL: "https://icons.llama.fi/peaky-finance.png",
    },
    {
        label: "Undead Finance",
        value: "undead-finance",
        logoURL: "https://icons.llama.fi/undead-finance.png",
    },
    {
        label: "Perseid Finance",
        value: "perseid-finance",
        logoURL: "https://icons.llama.fi/perseid-finance.png",
    },
    {
        label: "Welnance",
        value: "welnance",
        logoURL: "https://icons.llama.fi/welnance.jpg",
    },
    {
        label: "Kavastarter",
        value: "kavastarter",
        logoURL: "https://icons.llama.fi/kavastarter.png",
    },
    {
        label: "Cake DeFi",
        value: "cake-defi",
        logoURL: "https://icons.llama.fi/cake-defi.jpg",
    },
    {
        label: "Magnet DAO",
        value: "magnet-dao",
        logoURL: "https://icons.llama.fi/magnet-dao.png",
    },
    {
        label: "Maximizer",
        value: "maximizer",
        logoURL: "https://icons.llama.fi/maximizer.png",
    },
    {
        label: "DeepSeaDAO",
        value: "deepseadao",
        logoURL: "https://icons.llama.fi/deepseadao.png",
    },
    {
        label: "Nemesis DAO",
        value: "nemesis-dao",
        logoURL: "https://icons.llama.fi/nemesis-dao.jpg",
    },
    {
        label: "SamoDAO",
        value: "samodao",
        logoURL: "https://icons.llama.fi/samodao.png",
    },
    {
        label: "Kumu Finance",
        value: "kumu-finance",
        logoURL: "https://icons.llama.fi/kumu-finance.png",
    },
    {
        label: "Dinotopia Finance",
        value: "dinotopia-finance",
        logoURL: "https://icons.llama.fi/dinotopia-finance.png",
    },
    {
        label: "Snowdog",
        value: "snowdog",
        logoURL: "https://icons.llama.fi/snowdog-dao.png",
    },
    {
        label: "Kyborg Exchange",
        value: "kyborg-exchange",
        logoURL: "https://icons.llama.fi/kyborg-exchange.png",
    },
    {
        label: "FunDex",
        value: "fundex",
        logoURL: "https://icons.llama.fi/fundex.png",
    },
    {
        label: "Hectagon",
        value: "hectagon",
        logoURL: "https://icons.llama.fi/hectagon.jpg",
    },
    {
        label: "Kavacave",
        value: "kavacave",
        logoURL: "https://icons.llama.fi/kavacave.png",
    },
    {
        label: "Manifest",
        value: "manifest",
        logoURL: "https://icons.llama.fi/manifest.jpg",
    },
    {
        label: "Dinosaur.Finance",
        value: "dinosaur.finance",
        logoURL: "https://icons.llama.fi/dinosaur.finance.png",
    },
    {
        label: "TaiChi",
        value: "taichi",
        logoURL: "https://icons.llama.fi/taichi.jpg",
    },
    {
        label: "MinerSwap",
        value: "minerswap",
        logoURL: "https://icons.llama.fi/minerswap.png",
    },
    {
        label: "Scribeswap",
        value: "scribeswap",
        logoURL: "https://icons.llama.fi/scribeswap.jpg",
    },
    {
        label: "multiverse",
        value: "multiverse",
        logoURL: "https://icons.llama.fi/multiverse.jpg",
    },
    {
        label: "Zilch Capital",
        value: "zilch-capital",
        logoURL: "https://icons.llama.fi/zilch-capital.png",
    },
    {
        label: "sevenswap",
        value: "sevenswap",
        logoURL: "https://icons.llama.fi/sevenswap.png",
    },
    {
        label: "CookieBase Dex",
        value: "cookiebase-dex",
        logoURL: "https://icons.llama.fi/cookiebase.jpg",
    },
    {
        label: "Cashio",
        value: "cashio",
        logoURL: "https://icons.llama.fi/cashio.png",
    },
    {
        label: "RAIDSHIFT Marketplace",
        value: "raidshift-marketplace",
        logoURL: "https://icons.llama.fi/raidshift-marketplace.png",
    },
    {
        label: "Euphoria",
        value: "euphoria",
        logoURL: "https://icons.llama.fi/euphoria.png",
    },
    {
        label: "Cthulhu.Finance",
        value: "cthulhu.finance",
        logoURL: "https://icons.llama.fi/cthulhu.finance.png",
    },
    {
        label: "Powerbomb Finance",
        value: "powerbomb-finance",
        logoURL: "https://icons.llama.fi/powerbomb-finance.png",
    },
    {
        label: "Toreus",
        value: "toreus",
        logoURL: "https://icons.llama.fi/toreus.jpg",
    },
    {
        label: "FlashPulse",
        value: "flashpulse",
        logoURL: "https://icons.llama.fi/flashpulse.jpg",
    },
    {
        label: "Laari Finance",
        value: "laari-finance",
        logoURL: "https://icons.llama.fi/laari-finance.jpg",
    },
    {
        label: "Kinetix AMM V2",
        value: "kinetix-amm-v2",
        logoURL: "https://icons.llama.fi/kinetix-amm-v2.png",
    },
    {
        label: "BCHPad",
        value: "bchpad",
        logoURL: "https://icons.llama.fi/bchpad.png",
    },
    {
        label: "SyncYield",
        value: "syncyield",
        logoURL: "https://icons.llama.fi/syncyield.png",
    },
    {
        label: "mStable Yield",
        value: "mstable-yield",
        logoURL: "https://icons.llama.fi/mstable.png",
    },
    {
        label: "Swing DAO",
        value: "swing-dao",
        logoURL: "https://icons.llama.fi/swing-dao.png",
    },
    {
        label: "Option Dance",
        value: "option-dance",
        logoURL: "https://icons.llama.fi/option-dance.png",
    },
    {
        label: "Parasset",
        value: "parasset",
        logoURL: "https://icons.llama.fi/parasset.png",
    },
    {
        label: "Morphex V1",
        value: "morphex-v1",
        logoURL: "https://icons.llama.fi/morphex-v1.jpg",
    },
    {
        label: "Talent Protocol",
        value: "talent-protocol",
        logoURL: "https://icons.llama.fi/talent-protocol.png",
    },
    {
        label: "UncleSam Protocol",
        value: "unclesam-protocol",
        logoURL: "https://icons.llama.fi/unclesam-protocol.png",
    },
    {
        label: "Kronos DAO",
        value: "kronos-dao",
        logoURL: "https://icons.llama.fi/kronos-dao.png",
    },
    {
        label: "Real Protocol",
        value: "real-protocol",
        logoURL: "https://icons.llama.fi/real-protocol.png",
    },
    {
        label: "ChainTools",
        value: "chaintools",
        logoURL: "https://icons.llama.fi/chaintools.jpg",
    },
    {
        label: "Minotaur Money",
        value: "minotaur-money",
        logoURL: "https://icons.llama.fi/minotaur-money.png",
    },
    {
        label: "BlueMeteor",
        value: "bluemeteor",
        logoURL: "https://icons.llama.fi/bluemeteor.png",
    },
    {
        label: "InvictusDAO",
        value: "invictusdao",
        logoURL: "https://icons.llama.fi/invictusdao.jpg",
    },
    {
        label: "Houses of Rome",
        value: "houses-of-rome",
        logoURL: "https://icons.llama.fi/houses-of-rome.jpg",
    },
    {
        label: "Rising Undead",
        value: "rising-undead",
        logoURL: "https://icons.llama.fi/rising-undead.png",
    },
    {
        label: "Mare Finance V1",
        value: "mare-finance-v1",
        logoURL: "https://icons.llama.fi/mare-finance-v1.png",
    },
    {
        label: "Metavault DAO",
        value: "metavault-dao",
        logoURL: "https://icons.llama.fi/metavault-dao.png",
    },
    {
        label: "Lago Bridge",
        value: "lago-bridge",
        logoURL: "https://icons.llama.fi/lago-bridge.png",
    },
    {
        label: "ValhallaDAO",
        value: "valhalladao",
        logoURL: "https://icons.llama.fi/valhalladao.png",
    },
    {
        label: "Sohei",
        value: "sohei",
        logoURL: "https://icons.llama.fi/sohei.jpg",
    },
    {
        label: "Cranium Exchange",
        value: "cranium-exchange",
        logoURL: "https://icons.llama.fi/cranium-exchange.png",
    },
    {
        label: "ArbiCheems",
        value: "arbicheems",
        logoURL: "https://icons.llama.fi/arbicheems.png",
    },
    {
        label: "Ice DAO",
        value: "ice-dao",
        logoURL: "https://icons.llama.fi/ice-dao.jpg",
    },
    {
        label: "Nest Protocol Staking",
        value: "nest-protocol-staking",
        logoURL: "https://icons.llama.fi/nest-protocol.png",
    },
    {
        label: "Selfex",
        value: "selfex",
        logoURL: "https://icons.llama.fi/selfex.png",
    },
    {
        label: "Dios Finance",
        value: "dios-finance",
        logoURL: "https://icons.llama.fi/dios-finance.svg",
    },
    {
        label: "ZeroShift",
        value: "zeroshift",
        logoURL: "https://icons.llama.fi/zeroshift.png",
    },
    {
        label: "Asgard Finance",
        value: "asgard-finance",
        logoURL: "https://icons.llama.fi/asgard-finance.jpg",
    },
    {
        label: "Piggybank DAO",
        value: "piggybank-dao",
        logoURL: "https://icons.llama.fi/piggybank-dao.png",
    },
    {
        label: "StableDoin",
        value: "stabledoin",
        logoURL: "https://icons.llama.fi/stabledoin.png",
    },
    {
        label: "BroSwap",
        value: "broswap",
        logoURL: "https://icons.llama.fi/broswap.jpg",
    },
    {
        label: "BalloonSwap",
        value: "balloonswap",
        logoURL: "https://icons.llama.fi/balloonswap.png",
    },
    {
        label: "SolidPulse",
        value: "solidpulse",
        logoURL: "https://icons.llama.fi/solidpulse.jpg",
    },
    {
        label: "Fantasm",
        value: "fantasm",
        logoURL: "https://icons.llama.fi/fantasm.png",
    },
    {
        label: "Bepswap",
        value: "bepswap",
        logoURL: "https://icons.llama.fi/bepswap.jpg",
    },
    {
        label: "Dracula",
        value: "dracula",
        logoURL: "https://icons.llama.fi/dracula.png",
    },
    {
        label: "Dev Protocol",
        value: "dev-protocol",
        logoURL: "https://icons.llama.fi/dev-protocol.jpg",
    },
    {
        label: "SynLev",
        value: "synlev",
        logoURL: "https://icons.llama.fi/synlev.jpg",
    },
    {
        label: "BT.Finance",
        value: "bt.finance",
        logoURL: "https://icons.llama.fi/bt.finance.jpg",
    },
    {
        label: "N3RD Finance",
        value: "n3rd-finance",
        logoURL: "https://icons.llama.fi/n3rd-finance.jpg",
    },
    {
        label: "Allinx",
        value: "allinx",
        logoURL: "https://icons.llama.fi/allinx.png",
    },
    {
        label: "Mirror",
        value: "mirror",
        logoURL: "https://icons.llama.fi/mirror.png",
    },
    {
        label: "SharedStake",
        value: "sharedstake",
        logoURL: "https://icons.llama.fi/sharedstake.jpg",
    },
    {
        label: "StakeHound",
        value: "stakehound",
        logoURL: "https://icons.llama.fi/stakehound.png",
    },
    {
        label: "Mango Markets V3",
        value: "mango-markets-v3",
        logoURL: "https://icons.llama.fi/mango-markets-v3.png",
    },
    {
        label: "Anchor",
        value: "anchor",
        logoURL: "https://icons.llama.fi/anchor.jpg",
    },
    {
        label: "Stacks Staking",
        value: "stacks-staking",
        logoURL: "https://icons.llama.fi/stacks.png",
    },
    {
        label: "Zookeeper",
        value: "zookeeper",
        logoURL: "https://icons.llama.fi/zookeeper.png",
    },
    {
        label: "BondAppetit",
        value: "bondappetit",
        logoURL: "https://icons.llama.fi/bondappetit.jpg",
    },
    {
        label: "Wault",
        value: "wault",
        logoURL: "https://icons.llama.fi/wault.jpg",
    },
    {
        label: "Ruler",
        value: "ruler",
        logoURL: "https://icons.llama.fi/ruler.jpg",
    },
    {
        label: "Yogi Finance",
        value: "yogi-finance",
        logoURL: "https://icons.llama.fi/yogi-finance.svg",
    },
    {
        label: "Olympus DAO",
        value: "olympus-dao",
        logoURL: "https://icons.llama.fi/olympus-dao.jpg",
    },
    {
        label: "Yieldly",
        value: "yieldly",
        logoURL: "https://icons.llama.fi/yieldly.png",
    },
    {
        label: "Armor",
        value: "armor",
        logoURL: "https://icons.llama.fi/armor.png",
    },
    {
        label: "Merlin",
        value: "merlin",
        logoURL: "https://icons.llama.fi/merlin.jpg",
    },
    {
        label: "Cardstarter",
        value: "cardstarter",
        logoURL: "https://icons.llama.fi/cardstarter.jpg",
    },
    {
        label: "Mint Club",
        value: "mint-club",
        logoURL: "https://icons.llama.fi/mint-club.png",
    },
    {
        label: "Acumen",
        value: "acumen",
        logoURL: "https://icons.llama.fi/acumen.jpg",
    },
    {
        label: "Longdrink",
        value: "longdrink",
        logoURL: "https://icons.llama.fi/longdrink.png",
    },
    {
        label: "WitSwap",
        value: "witswap",
        logoURL: "https://icons.llama.fi/witswap.jpg",
    },
    {
        label: "LoTerra",
        value: "loterra",
        logoURL: "https://icons.llama.fi/loterra.jpg",
    },
    {
        label: "Pylon Protocol",
        value: "pylon-protocol",
        logoURL: "https://icons.llama.fi/pylon-protocol.jpg",
    },
    {
        label: "Illuvium",
        value: "illuvium",
        logoURL: "https://icons.llama.fi/illuvium.png",
    },
    {
        label: "Telcoin",
        value: "telcoin",
        logoURL: "https://icons.llama.fi/telcoin.png",
    },
    {
        label: "Ondo v1 (Legacy)",
        value: "ondo-v1-(legacy)",
        logoURL: "https://icons.llama.fi/ondo-v1-(legacy).png",
    },
    {
        label: "Mensa Protocol",
        value: "mensa-protocol",
        logoURL: "https://icons.llama.fi/mensa-protocol.png",
    },
    {
        label: "Avalaunch",
        value: "avalaunch",
        logoURL: "https://icons.llama.fi/avalaunch.png",
    },
    {
        label: "Pizza",
        value: "pizza",
        logoURL: "https://icons.llama.fi/pizza.png",
    },
    {
        label: "Volta Club",
        value: "volta-club",
        logoURL: "https://icons.llama.fi/volta-club.jpg",
    },
    {
        label: "Genshiro",
        value: "genshiro",
        logoURL: "https://icons.llama.fi/genshiro.jpg",
    },
    {
        label: "Fabric",
        value: "fabric",
        logoURL: "https://icons.llama.fi/fabric.png",
    },
    {
        label: "Sunrise Gaming",
        value: "sunrise-gaming",
        logoURL: "https://icons.llama.fi/sunrise-gaming.png",
    },
    {
        label: "ShapeShift",
        value: "shapeshift",
        logoURL: "https://icons.llama.fi/shapeshift.jpg",
    },
    {
        label: "RocketSwap",
        value: "rocketswap",
        logoURL: "https://icons.llama.fi/rocketswap.jpg",
    },
    {
        label: "Banano",
        value: "banano",
        logoURL: "https://icons.llama.fi/banano.png",
    },
    {
        label: "eCurve",
        value: "ecurve",
        logoURL: "https://icons.llama.fi/ecurve.png",
    },
    {
        label: "Amy Finance",
        value: "amy-finance",
        logoURL: "https://icons.llama.fi/amy-finance.png",
    },
    {
        label: "Bogged Finance",
        value: "bogged-finance",
        logoURL: "https://icons.llama.fi/bogged-finance.jpg",
    },
    {
        label: "Beanstalk",
        value: "beanstalk",
        logoURL: "https://icons.llama.fi/beanstalk.jpg",
    },
    {
        label: "TotemFi",
        value: "totemfi",
        logoURL: "https://icons.llama.fi/totemfi.png",
    },
    {
        label: "SYNC Network",
        value: "sync-network",
        logoURL: "https://icons.llama.fi/sync-network.png",
    },
    {
        label: "Almond",
        value: "almond",
        logoURL: "https://icons.llama.fi/almond.svg",
    },
    {
        label: "Only1",
        value: "only1",
        logoURL: "https://icons.llama.fi/only1.svg",
    },
    {
        label: "Fegex",
        value: "fegex",
        logoURL: "https://icons.llama.fi/fegex.png",
    },
    {
        label: "OraiChain",
        value: "oraichain",
        logoURL: "https://icons.llama.fi/oraichain.png",
    },
    {
        label: "BaconDAO",
        value: "bacondao",
        logoURL: "https://icons.llama.fi/bacondao.png",
    },
    {
        label: "YEL Finance",
        value: "yel-finance",
        logoURL: "https://icons.llama.fi/yel-finance.png",
    },
    {
        label: "SmartCoin",
        value: "smartcoin",
        logoURL: "https://icons.llama.fi/smrt.png",
    },
    {
        label: "Decubate",
        value: "decubate",
        logoURL: "https://icons.llama.fi/decubate.png",
    },
    {
        label: "Nasdex",
        value: "nasdex",
        logoURL: "https://icons.llama.fi/nasdex.png",
    },
    {
        label: "Nileriver",
        value: "nileriver",
        logoURL: "https://icons.llama.fi/nileriver.png",
    },
    {
        label: "Nexus Protocol",
        value: "nexus-protocol",
        logoURL: "https://icons.llama.fi/nexus-protocol.jpg",
    },
    {
        label: "Spartacus",
        value: "spartacus",
        logoURL: "https://icons.llama.fi/spartacus.jpg",
    },
    {
        label: "Klima DAO",
        value: "klima-dao",
        logoURL: "https://icons.llama.fi/klima-dao.jpg",
    },
    {
        label: "AtmosSoft",
        value: "atmossoft",
        logoURL: "https://icons.llama.fi/atmossoft.jpg",
    },
    {
        label: "SquidDao",
        value: "squiddao",
        logoURL: "https://icons.llama.fi/squiddao.jpg",
    },
    {
        label: "Gyro",
        value: "gyro",
        logoURL: "https://icons.llama.fi/gyro.jpg",
    },
    {
        label: "Snowbank",
        value: "snowbank",
        logoURL: "https://icons.llama.fi/snowbank.jpg",
    },
    {
        label: "Blizz Finance",
        value: "blizz-finance",
        logoURL: "https://icons.llama.fi/blizz-finance.png",
    },
    {
        label: "Kebab Finance",
        value: "kebab-finance",
        logoURL: "https://icons.llama.fi/kebab-finance.png",
    },
    {
        label: "Hector Treasury",
        value: "hector-treasury",
        logoURL: "https://icons.llama.fi/hector-amm.jpg",
    },
    {
        label: "Hades Swap",
        value: "hades-swap",
        logoURL: "https://icons.llama.fi/hades-swap.jpg",
    },
    {
        label: "BunnyPark",
        value: "bunnypark",
        logoURL: "https://icons.llama.fi/bunnypark.png",
    },
    {
        label: "Capital DAO",
        value: "capital-dao",
        logoURL: "https://icons.llama.fi/capital-dao.png",
    },
    {
        label: "AxeDAO",
        value: "axedao",
        logoURL: "https://icons.llama.fi/axedao.png",
    },
    {
        label: "Fortune DAO",
        value: "fortune-dao",
        logoURL: "https://icons.llama.fi/fortune-dao.png",
    },
    {
        label: "Bear Finance",
        value: "bear-finance",
        logoURL: "https://icons.llama.fi/bear-finance.png",
    },
    {
        label: "Reverse",
        value: "reverse",
        logoURL: "https://icons.llama.fi/reverse.png",
    },
    {
        label: "Saffron Finance",
        value: "saffron-finance",
        logoURL: "https://icons.llama.fi/saffron-finance.png",
    },
    {
        label: "Defily",
        value: "defily",
        logoURL: "https://icons.llama.fi/defily.png",
    },
    {
        label: "SafeOHM",
        value: "safeohm",
        logoURL: "https://icons.llama.fi/safeohm.jpg",
    },
    {
        label: "Position Exchange",
        value: "position-exchange",
        logoURL: "https://icons.llama.fi/positionexchange.png",
    },
    {
        label: "8ightDAO",
        value: "8ightdao",
        logoURL: "https://icons.llama.fi/8ightdao.jpg",
    },
    {
        label: "OneDAO Finance",
        value: "onedao-finance",
        logoURL: "https://icons.llama.fi/onedao-finance.png",
    },
    {
        label: "Paraswap",
        value: "paraswap",
        logoURL: "https://icons.llama.fi/paraswap.jpg",
    },
    {
        label: "BlackPool",
        value: "blackpool",
        logoURL: "https://icons.llama.fi/blackpool.png",
    },
    {
        label: "EverestDAO",
        value: "everestdao",
        logoURL: "https://icons.llama.fi/everestdao.jpg",
    },
    {
        label: "DAO Maker Vesting",
        value: "dao-maker-vesting",
        logoURL: "https://icons.llama.fi/dao-maker.jpg",
    },
    {
        label: "Metaversepro",
        value: "metaversepro",
        logoURL: "https://icons.llama.fi/metaversepro.png",
    },
    {
        label: "Fortress",
        value: "fortress",
        logoURL: "https://icons.llama.fi/fortress-DAO.svg",
    },
    {
        label: "RaDao",
        value: "radao",
        logoURL: "https://icons.llama.fi/radao.png",
    },
    {
        label: "Xensa",
        value: "xensa",
        logoURL: "https://icons.llama.fi/xensa.png",
    },
    {
        label: "Nidhi-Dao",
        value: "nidhi-dao",
        logoURL: "https://icons.llama.fi/nidhidao.jpg",
    },
    {
        label: "Hex",
        value: "hex",
        logoURL: "https://icons.llama.fi/hex.jpg",
    },
    {
        label: "R U Generous",
        value: "r-u-generous",
        logoURL: "https://icons.llama.fi/r-u-generous.png",
    },
    {
        label: "Jade Protocol",
        value: "jade-protocol",
        logoURL: "https://icons.llama.fi/jade-protocol.jpg",
    },
    {
        label: "FreeLiquid",
        value: "freeliquid",
        logoURL: "https://icons.llama.fi/freeliquid.png",
    },
    {
        label: "Lobis",
        value: "lobis",
        logoURL: "https://icons.llama.fi/lobis.jpg",
    },
    {
        label: "ARCx",
        value: "arcx",
        logoURL: "https://icons.llama.fi/arcx.jpg",
    },
    {
        label: "Alpaca City",
        value: "alpaca-city",
        logoURL: "https://icons.llama.fi/alpacacity.png",
    },
    {
        label: "Fantohm",
        value: "fantohm",
        logoURL: "https://icons.llama.fi/fantohm.jpg",
    },
    {
        label: "Retreeb",
        value: "retreeb",
        logoURL: "https://icons.llama.fi/retreeb.jpg",
    },
    {
        label: "CerberusDAO",
        value: "cerberusdao",
        logoURL: "https://icons.llama.fi/cerberusdao.jpg",
    },
    {
        label: "Zai Finance",
        value: "zai-finance",
        logoURL: "https://icons.llama.fi/zai-finance.jpg",
    },
    {
        label: "XEUS",
        value: "xeus",
        logoURL: "https://icons.llama.fi/xeus.jpg",
    },
    {
        label: "Omicron",
        value: "omicron",
        logoURL: "https://icons.llama.fi/omicron.jpg",
    },
    {
        label: "Kafe Finance",
        value: "kafe-finance",
        logoURL: "https://icons.llama.fi/kafefinance.png",
    },
    {
        label: "VikingsFinance",
        value: "vikingsfinance",
        logoURL: "https://icons.llama.fi/vikingsfinance.jpg",
    },
    {
        label: "GalaxyGoogle DAO",
        value: "galaxygoogle-dao",
        logoURL: "https://icons.llama.fi/galaxygoogle-dao.jpg",
    },
    {
        label: "HoneyFarm",
        value: "honeyfarm",
        logoURL: "https://icons.llama.fi/honeyfarm.png",
    },
    {
        label: "MidasDAO",
        value: "midasdao",
        logoURL: "https://icons.llama.fi/midasdao.jpg",
    },
    {
        label: "O2 DAO",
        value: "o2-dao",
        logoURL: "https://icons.llama.fi/o2-dao.jpg",
    },
    {
        label: "Luxor Money",
        value: "luxor-money",
        logoURL: "https://icons.llama.fi/luxor-money.jpg",
    },
    {
        label: "Giza DAO",
        value: "giza-dao",
        logoURL: "https://icons.llama.fi/giza-dao.jpg",
    },
    {
        label: "Colony",
        value: "colony",
        logoURL: "https://icons.llama.fi/colony.svg",
    },
    {
        label: "CheeseDAO",
        value: "cheesedao",
        logoURL: "https://icons.llama.fi/cheesedao.jpg",
    },
    {
        label: "Pumpkin DAO",
        value: "pumpkin-dao",
        logoURL: "https://icons.llama.fi/pumpkin-dao.jpg",
    },
    {
        label: "Stargate Finance",
        value: "stargate-finance",
        logoURL: "https://icons.llama.fi/stargate-finance.png",
    },
    {
        label: "Atlas USV",
        value: "atlas-usv",
        logoURL: "https://icons.llama.fi/atlas-usv.jpg",
    },
    {
        label: "RivrKitty",
        value: "rivrkitty",
        logoURL: "https://icons.llama.fi/rivrkitty.jpg",
    },
    {
        label: "Starterra",
        value: "starterra",
        logoURL: "https://icons.llama.fi/starterra.jpg",
    },
    {
        label: "Base Protocol",
        value: "base-protocol",
        logoURL: "https://icons.llama.fi/base-protocol.jpg",
    },
    {
        label: "BITPIF",
        value: "bitpif",
        logoURL: "https://icons.llama.fi/bitpif.jpg",
    },
    {
        label: "RagnarokDAO",
        value: "ragnarokdao",
        logoURL: "https://icons.llama.fi/ragnarokdao.png",
    },
    {
        label: "Numbers Protocol",
        value: "numbers-protocol",
        logoURL: "https://icons.llama.fi/numbers-protocol.jpg",
    },
    {
        label: "Tempus Finance",
        value: "tempus-finance",
        logoURL: "https://icons.llama.fi/tempus-finance.png",
    },
    {
        label: "UnusDao",
        value: "unusdao",
        logoURL: "https://icons.llama.fi/unusdao.png",
    },
    {
        label: "Merit Circle",
        value: "merit-circle",
        logoURL: "https://icons.llama.fi/merit-circle.png",
    },
    {
        label: "LeagueDAO",
        value: "leaguedao",
        logoURL: "https://icons.llama.fi/leaguedao.png",
    },
    {
        label: "MOBOX",
        value: "mobox",
        logoURL: "https://icons.llama.fi/mobox.jpg",
    },
    {
        label: "Sheesha Finance",
        value: "sheesha-finance",
        logoURL: "https://icons.llama.fi/sheesha-finance.jpg",
    },
    {
        label: "CakeDAO",
        value: "cakedao",
        logoURL: "https://icons.llama.fi/cakedao.png",
    },
    {
        label: "The Sandbox",
        value: "the-sandbox",
        logoURL: "https://icons.llama.fi/the-sandbox.jpg",
    },
    {
        label: "Brokoli Network",
        value: "brokoli-network",
        logoURL: "https://icons.llama.fi/brokoli-network.jpg",
    },
    {
        label: "Nacho Finance",
        value: "nacho-finance",
        logoURL: "https://icons.llama.fi/nacho-finance.jpg",
    },
    {
        label: "Kitty Finance",
        value: "kitty-finance",
        logoURL: "https://icons.llama.fi/kitty-finance.png",
    },
    {
        label: "Polkastarter",
        value: "polkastarter",
        logoURL: "https://icons.llama.fi/polkastarter.jpg",
    },
    {
        label: "Umbria Network",
        value: "umbria-network",
        logoURL: "https://icons.llama.fi/umbria-network.jpg",
    },
    {
        label: "IQ",
        value: "iq",
        logoURL: "https://icons.llama.fi/iq.png",
    },
    {
        label: "Spicy DAO",
        value: "spicy-dao",
        logoURL: "https://icons.llama.fi/spicy-dao.png",
    },
    {
        label: "ZodiacDAO",
        value: "zodiacdao",
        logoURL: "https://icons.llama.fi/zodiacdao.png",
    },
    {
        label: "One Cash",
        value: "one-cash",
        logoURL: "https://icons.llama.fi/onecash.png",
    },
    {
        label: "Stand Cash",
        value: "stand-cash",
        logoURL: "https://icons.llama.fi/standcash.png",
    },
    {
        label: "Templar DAO",
        value: "templar-dao",
        logoURL: "https://icons.llama.fi/templar-dao.png",
    },
    {
        label: "Ara Finance",
        value: "ara-finance",
        logoURL: "https://icons.llama.fi/ara-finance.png",
    },
    {
        label: "SecureDAO",
        value: "securedao",
        logoURL: "https://icons.llama.fi/securedao.png",
    },
    {
        label: "Optidoge",
        value: "optidoge",
        logoURL: "https://icons.llama.fi/optidoge.png",
    },
    {
        label: "SnowCatDAO",
        value: "snowcatdao",
        logoURL: "https://icons.llama.fi/snowcatdao.png",
    },
    {
        label: "AgarthaDAO",
        value: "agarthadao",
        logoURL: "https://icons.llama.fi/agarthadao.png",
    },
    {
        label: "Bourbon DAO",
        value: "bourbon-dao",
        logoURL: "https://icons.llama.fi/bourbon-dao.png",
    },
    {
        label: "Wisteria Swap",
        value: "wisteria-swap",
        logoURL: "https://icons.llama.fi/wisteriaswap.png",
    },
    {
        label: "Louverture",
        value: "louverture",
        logoURL: "https://icons.llama.fi/louverture.jpg",
    },
    {
        label: "KawaiiSwap",
        value: "kawaiiswap",
        logoURL: "https://icons.llama.fi/kawaiiswap.png",
    },
    {
        label: "Valkyrie",
        value: "valkyrie",
        logoURL: "https://icons.llama.fi/valkyrie.png",
    },
    {
        label: "Umbrella Network",
        value: "umbrella-network",
        logoURL: "https://icons.llama.fi/umbrella-network.jpg",
    },
    {
        label: "Unite Finance",
        value: "unite-finance",
        logoURL: "https://icons.llama.fi/unite-finance.jpg",
    },
    {
        label: "Piggy Finance",
        value: "piggy-finance",
        logoURL: "https://icons.llama.fi/piggy-finance.png",
    },
    {
        label: "Goblin FTM",
        value: "goblin-ftm",
        logoURL: "https://icons.llama.fi/goblin-ftm.jpg",
    },
    {
        label: "Scarab Finance",
        value: "scarab-finance",
        logoURL: "https://icons.llama.fi/scarab-finance.png",
    },
    {
        label: "MetaReserve",
        value: "metareserve",
        logoURL: "https://icons.llama.fi/metareserve.png",
    },
    {
        label: "Xenophon",
        value: "xenophon",
        logoURL: "https://icons.llama.fi/xenophon.png",
    },
    {
        label: "Whale Loans",
        value: "whale-loans",
        logoURL: "https://icons.llama.fi/whale-loans.png",
    },
    {
        label: "MarginSwap",
        value: "marginswap",
        logoURL: "https://icons.llama.fi/marginswap.jpg",
    },
    {
        label: "Rarify",
        value: "rarify",
        logoURL: "https://icons.llama.fi/rarify.png",
    },
    {
        label: "Galatea Cash",
        value: "galatea-cash",
        logoURL: "https://icons.llama.fi/galatea-cash.jpg",
    },
    {
        label: "Instrumental Finance",
        value: "instrumental-finance",
        logoURL: "https://icons.llama.fi/instrumental-finance.svg",
    },
    {
        label: "Chikn Farm",
        value: "chikn-farm",
        logoURL: "https://icons.llama.fi/chikn-farm.png",
    },
    {
        label: "Chronicle",
        value: "chronicle",
        logoURL: "https://icons.llama.fi/chronicle.jpg",
    },
    {
        label: "Ferrum",
        value: "ferrum",
        logoURL: "https://icons.llama.fi/ferrum.png",
    },
    {
        label: "BananaFarm",
        value: "bananafarm",
        logoURL: "https://icons.llama.fi/bananafarm.jpg",
    },
    {
        label: "Predictcoin",
        value: "predictcoin",
        logoURL: "https://icons.llama.fi/pridictcoin.jpg",
    },
    {
        label: "INK Protocol",
        value: "ink-protocol",
        logoURL: "https://icons.llama.fi/ink-protocol.png",
    },
    {
        label: "Voyager",
        value: "voyager",
        logoURL: "https://icons.llama.fi/voyager.png",
    },
    {
        label: "Karma DAO",
        value: "karma-dao",
        logoURL: "https://icons.llama.fi/karma-dao.png",
    },
    {
        label: "OVR",
        value: "ovr",
        logoURL: "https://icons.llama.fi/ovr.png",
    },
    {
        label: "Trapeza Protocol",
        value: "trapeza-protocol",
        logoURL: "https://icons.llama.fi/trapeza-protocol.png",
    },
    {
        label: "TiPiDao",
        value: "tipidao",
        logoURL: "https://icons.llama.fi/tipidao.png",
    },
    {
        label: "Empyrean DAO",
        value: "empyrean-dao",
        logoURL: "https://icons.llama.fi/empyrean-dao.jpg",
    },
    {
        label: "LooksRare",
        value: "looksrare",
        logoURL: "https://icons.llama.fi/looksrare.jpg",
    },
    {
        label: "TerraFloki",
        value: "terrafloki",
        logoURL: "https://icons.llama.fi/terrafloki.png",
    },
    {
        label: "Ultra Protocol",
        value: "ultra-protocol",
        logoURL: "https://icons.llama.fi/ultra.png",
    },
    {
        label: "Bomb Money",
        value: "bomb-money",
        logoURL: "https://icons.llama.fi/bombmoney.png",
    },
    {
        label: "Crabada",
        value: "crabada",
        logoURL: "https://icons.llama.fi/crabada.png",
    },
    {
        label: "Hermes Finance",
        value: "hermes-finance",
        logoURL: "https://icons.llama.fi/hermes-finance.png",
    },
    {
        label: "Kandyland Finance",
        value: "kandyland-finance",
        logoURL: "https://icons.llama.fi/kandyland-finance.png",
    },
    {
        label: "Luminous Finance",
        value: "luminous-finance",
        logoURL: "https://icons.llama.fi/luminous.png",
    },
    {
        label: "Proof of Humanity",
        value: "proof-of-humanity",
        logoURL: "https://icons.llama.fi/proof-of-humanity.svg",
    },
    {
        label: "Delta Financial",
        value: "delta-financial",
        logoURL: "https://icons.llama.fi/delta-financial.jpg",
    },
    {
        label: "SmartPad",
        value: "smartpad",
        logoURL: "https://icons.llama.fi/smartpad.jpg",
    },
    {
        label: "X",
        value: "x",
        logoURL: "https://icons.llama.fi/x.jpg",
    },
    {
        label: "fees.wtf",
        value: "fees.wtf",
        logoURL: "https://icons.llama.fi/fees-wtf.jpg",
    },
    {
        label: "The Open DAO SOS",
        value: "the-open-dao-sos",
        logoURL: "https://icons.llama.fi/the-open-dao-sos.jpg",
    },
    {
        label: "Immortal",
        value: "immortal",
        logoURL: "https://icons.llama.fi/immortal.png",
    },
    {
        label: "Cleopatra DAO",
        value: "cleopatra-dao",
        logoURL: "https://icons.llama.fi/cleopatra-dao.png",
    },
    {
        label: "Paprprintr",
        value: "paprprintr",
        logoURL: "https://icons.llama.fi/paprprintr.jpg",
    },
    {
        label: "Tornado Finance",
        value: "tornado-finance",
        logoURL: "https://icons.llama.fi/tornado-finance.jpg",
    },
    {
        label: "Rubic",
        value: "rubic",
        logoURL: "https://icons.llama.fi/rubic.jpg",
    },
    {
        label: "Grape Finance",
        value: "grape-finance",
        logoURL: "https://icons.llama.fi/grape-finance.png",
    },
    {
        label: "Hades Money",
        value: "hades-money",
        logoURL: "https://icons.llama.fi/hades-money.png",
    },
    {
        label: "BloXmove",
        value: "bloxmove",
        logoURL: "https://icons.llama.fi/bloxmove.jpg",
    },
    {
        label: "NoahArkDAO",
        value: "noaharkdao",
        logoURL: "https://icons.llama.fi/noaharkdao.png",
    },
    {
        label: "Specter Finance",
        value: "specter-finance",
        logoURL: "https://icons.llama.fi/specter-finance.png",
    },
    {
        label: "Cesta Finance",
        value: "cesta-finance",
        logoURL: "https://icons.llama.fi/cesta-finance.jpg",
    },
    {
        label: "Comfy Money",
        value: "comfy-money",
        logoURL: "https://icons.llama.fi/comfy-money.svg",
    },
    {
        label: "Poopsicle",
        value: "poopsicle",
        logoURL: "https://icons.llama.fi/poopsicle.jpg",
    },
    {
        label: "Magik Finance AlgoStable",
        value: "magik-finance-algostable",
        logoURL: "https://icons.llama.fi/magik-finance.png",
    },
    {
        label: "Snowtomb",
        value: "snowtomb",
        logoURL: "https://icons.llama.fi/snowtomb.png",
    },
    {
        label: "DNA Dollar",
        value: "dna-dollar",
        logoURL: "https://icons.llama.fi/dna-dollar.jpg",
    },
    {
        label: "Oceanus",
        value: "oceanus",
        logoURL: "https://icons.llama.fi/oceanus.jpg",
    },
    {
        label: "ShiroSwap",
        value: "shiroswap",
        logoURL: "https://icons.llama.fi/shiroswap.jpg",
    },
    {
        label: "Unizen",
        value: "unizen",
        logoURL: "https://icons.llama.fi/unizen.jpg",
    },
    {
        label: "Warp",
        value: "warp",
        logoURL: "https://icons.llama.fi/warp.png",
    },
    {
        label: "API3",
        value: "api3",
        logoURL: "https://icons.llama.fi/api3.jpg",
    },
    {
        label: "IceCream Finance",
        value: "icecream-finance",
        logoURL: "https://icons.llama.fi/icecream-finance.png",
    },
    {
        label: "Devil Finance",
        value: "devil-finance",
        logoURL: "https://icons.llama.fi/devil-finance.jpg",
    },
    {
        label: "Moon Flower Farmers",
        value: "moon-flower-farmers",
        logoURL: "https://icons.llama.fi/moonflowerfarmers.png",
    },
    {
        label: "Athena Money",
        value: "athena-money",
        logoURL: "https://icons.llama.fi/athena-money.jpg",
    },
    {
        label: "TreasureDAO",
        value: "treasuredao",
        logoURL: "https://icons.llama.fi/treasuredao.jpg",
    },
    {
        label: "Astral Financial",
        value: "astral-financial",
        logoURL: "https://icons.llama.fi/astral-finance.png",
    },
    {
        label: "Dogs of Elon",
        value: "dogs-of-elon",
        logoURL: "https://icons.llama.fi/dogs-of-elon.png",
    },
    {
        label: "ADAX Pro",
        value: "adax-pro",
        logoURL: "https://icons.llama.fi/adax-pro.jpg",
    },
    {
        label: "Meld",
        value: "meld",
        logoURL: "https://icons.llama.fi/meld.jpg",
    },
    {
        label: "QAO",
        value: "qao",
        logoURL: "https://icons.llama.fi/qao.jpg",
    },
    {
        label: "Hexal",
        value: "hexal",
        logoURL: "https://icons.llama.fi/hexal.png",
    },
    {
        label: "Velhalla",
        value: "velhalla",
        logoURL: "https://icons.llama.fi/velhalla.jpg",
    },
    {
        label: "Ripae",
        value: "ripae",
        logoURL: "https://icons.llama.fi/ripae.png",
    },
    {
        label: "Gensokishi",
        value: "gensokishi",
        logoURL: "https://icons.llama.fi/gensokishi.jpg",
    },
    {
        label: "Maia DAO",
        value: "maia-dao",
        logoURL: "https://icons.llama.fi/maia-dao.png",
    },
    {
        label: "Minimax",
        value: "minimax",
        logoURL: "https://icons.llama.fi/minimax.png",
    },
    {
        label: "Platinum Finance",
        value: "platinum-finance",
        logoURL: "https://icons.llama.fi/platinum-finance.png",
    },
    {
        label: "ProjectX",
        value: "projectx",
        logoURL: "https://icons.llama.fi/projectx.png",
    },
    {
        label: "Thor Financial",
        value: "thor-financial",
        logoURL: "https://icons.llama.fi/thor-financial.png",
    },
    {
        label: "VaporFi",
        value: "vaporfi",
        logoURL: "https://icons.llama.fi/vaporfi.png",
    },
    {
        label: "Basis Markets",
        value: "basis-markets",
        logoURL: "https://icons.llama.fi/basis-markets.png",
    },
    {
        label: "Manarium",
        value: "manarium",
        logoURL: "https://icons.llama.fi/manarium.png",
    },
    {
        label: "Dibs Money",
        value: "dibs-money",
        logoURL: "https://icons.llama.fi/dibs-money.png",
    },
    {
        label: "Partial Finance",
        value: "partial-finance",
        logoURL: "https://icons.llama.fi/partial-finance.png",
    },
    {
        label: "Draco Finance",
        value: "draco-finance",
        logoURL: "https://icons.llama.fi/draco-finance.png",
    },
    {
        label: "Arable Protocol",
        value: "arable-protocol",
        logoURL: "https://icons.llama.fi/arable-protocol.png",
    },
    {
        label: "Winkyverse",
        value: "winkyverse",
        logoURL: "https://icons.llama.fi/winkyverse.png",
    },
    {
        label: "Volta DAO",
        value: "volta-dao",
        logoURL: "https://icons.llama.fi/volta-dao.png",
    },
    {
        label: "Croissant Games",
        value: "croissant-games",
        logoURL: "https://icons.llama.fi/croissant-games.png",
    },
    {
        label: "MiniPanther DAO",
        value: "minipanther-dao",
        logoURL: "https://icons.llama.fi/minipanther-dao.png",
    },
    {
        label: "StarCrazy",
        value: "starcrazy",
        logoURL: "https://icons.llama.fi/starcrazy.png",
    },
    {
        label: "Kommunitas",
        value: "kommunitas",
        logoURL: "https://icons.llama.fi/kommunitas.png",
    },
    {
        label: "Peel Defi",
        value: "peel-defi",
        logoURL: "https://icons.llama.fi/peel-defi.png",
    },
    {
        label: "FDoge Finance",
        value: "fdoge-finance",
        logoURL: "https://icons.llama.fi/fdoge-finance.png",
    },
    {
        label: "ImpactMarket",
        value: "impactmarket",
        logoURL: "https://icons.llama.fi/impactmarket.png",
    },
    {
        label: "OGX",
        value: "ogx",
        logoURL: "https://icons.llama.fi/ogx.png",
    },
    {
        label: "Comet Finance",
        value: "comet-finance",
        logoURL: "https://icons.llama.fi/comet-finance.png",
    },
    {
        label: "Wrapped ILCOIN",
        value: "wrapped-ilcoin",
        logoURL: "https://icons.llama.fi/wrapped-ilcoin.png",
    },
    {
        label: "2Doge Finance",
        value: "2doge-finance",
        logoURL: "https://icons.llama.fi/2doge-finance.png",
    },
    {
        label: "pDollar",
        value: "pdollar",
        logoURL: "https://icons.llama.fi/pdollar.png",
    },
    {
        label: "The Parallel",
        value: "the-parallel",
        logoURL: "https://icons.llama.fi/the-parallel.png",
    },
    {
        label: "Snowyowl",
        value: "snowyowl",
        logoURL: "https://icons.llama.fi/snowyowl.png",
    },
    {
        label: "Floor Dao",
        value: "floor-dao",
        logoURL: "https://icons.llama.fi/floor-dao.jpg",
    },
    {
        label: "Pulse DAO",
        value: "pulse-dao",
        logoURL: "https://icons.llama.fi/pulse-dao.png",
    },
    {
        label: "Zombi Finance",
        value: "zombi-finance",
        logoURL: "https://icons.llama.fi/zombi-finance.png",
    },
    {
        label: "Code 7 Finance",
        value: "code-7-finance",
        logoURL: "https://icons.llama.fi/code-7-finance.png",
    },
    {
        label: "Solanax",
        value: "solanax",
        logoURL: "https://icons.llama.fi/solanax.png",
    },
    {
        label: "MiniVerse Finance",
        value: "miniverse-finance",
        logoURL: "https://icons.llama.fi/miniverse-finance.png",
    },
    {
        label: "Seedify",
        value: "seedify",
        logoURL: "https://icons.llama.fi/seedify.png",
    },
    {
        label: "Zomb2 Finance",
        value: "zomb2-finance",
        logoURL: "https://icons.llama.fi/zomb2-finance.png",
    },
    {
        label: "RHEA DAO",
        value: "rhea-dao",
        logoURL: "https://icons.llama.fi/rhea-dao.png",
    },
    {
        label: "CryptEx Locker",
        value: "cryptex-locker",
        logoURL: "https://icons.llama.fi/cryptex-locker.png",
    },
    {
        label: "Libero Financial",
        value: "libero-financial",
        logoURL: "https://icons.llama.fi/libero-financial.png",
    },
    {
        label: "Cubo",
        value: "cubo",
        logoURL: "https://icons.llama.fi/cubo.png",
    },
    {
        label: "Polar Bear Finance",
        value: "polar-bear-finance",
        logoURL: "https://icons.llama.fi/polar-bear-finance.png",
    },
    {
        label: "Drip",
        value: "drip",
        logoURL: "https://icons.llama.fi/drip.png",
    },
    {
        label: "Angel Protocol",
        value: "angel-protocol",
        logoURL: "https://icons.llama.fi/angel-protocol.png",
    },
    {
        label: "Kleros",
        value: "kleros",
        logoURL: "https://icons.llama.fi/kleros.png",
    },
    {
        label: "KDLaunch",
        value: "kdlaunch",
        logoURL: "https://icons.llama.fi/kdlaunch.png",
    },
    {
        label: "RingFi",
        value: "ringfi",
        logoURL: "https://icons.llama.fi/ringfi.png",
    },
    {
        label: "Axl Inu",
        value: "axl-inu",
        logoURL: "https://icons.llama.fi/axl-inu.png",
    },
    {
        label: "Diamond Coin",
        value: "diamond-coin",
        logoURL: "https://icons.llama.fi/diamond-coin.png",
    },
    {
        label: "Strips Finance",
        value: "strips-finance",
        logoURL: "https://icons.llama.fi/strips-finance.png",
    },
    {
        label: "ErgoPad",
        value: "ergopad",
        logoURL: "https://icons.llama.fi/ergopad.png",
    },
    {
        label: "Peak Finance",
        value: "peak-finance",
        logoURL: "https://icons.llama.fi/peak-finance.png",
    },
    {
        label: "Revuto",
        value: "revuto",
        logoURL: "https://icons.llama.fi/revuto.png",
    },
    {
        label: "VelasPad",
        value: "velaspad",
        logoURL: "https://icons.llama.fi/velaspad.png",
    },
    {
        label: "Ambire Wallet",
        value: "ambire-wallet",
        logoURL: "https://icons.llama.fi/ambire-wallet.png",
    },
    {
        label: "DarumaDAO",
        value: "darumadao",
        logoURL: "https://icons.llama.fi/darumadao.png",
    },
    {
        label: "Solace",
        value: "solace",
        logoURL: "https://icons.llama.fi/solace.png",
    },
    {
        label: "EPNS",
        value: "epns",
        logoURL: "https://icons.llama.fi/epns.png",
    },
    {
        label: "Trusted Node",
        value: "trusted-node",
        logoURL: "https://icons.llama.fi/trusted-node.png",
    },
    {
        label: "Scrub",
        value: "scrub",
        logoURL: "https://icons.llama.fi/scrub.png",
    },
    {
        label: "Steak",
        value: "steak",
        logoURL: "https://icons.llama.fi/steak.png",
    },
    {
        label: "Swapscanner Dex",
        value: "swapscanner-dex",
        logoURL: "https://icons.llama.fi/swapscanner.png",
    },
    {
        label: "TokensFarm",
        value: "tokensfarm",
        logoURL: "https://icons.llama.fi/tokensfarm.png",
    },
    {
        label: "Monster",
        value: "monster",
        logoURL: "https://icons.llama.fi/monster.png",
    },
    {
        label: "Printer Financial",
        value: "printer-financial",
        logoURL: "https://icons.llama.fi/printer-financial.png",
    },
    {
        label: "PuddingSwap",
        value: "puddingswap",
        logoURL: "https://icons.llama.fi/puddingswap.png",
    },
    {
        label: "RFOX",
        value: "rfox",
        logoURL: "https://icons.llama.fi/rfox.png",
    },
    {
        label: "Ignite Finance",
        value: "ignite-finance",
        logoURL: "https://icons.llama.fi/ignite-finance.png",
    },
    {
        label: "Zombie Network",
        value: "zombie-network",
        logoURL: "https://icons.llama.fi/zombie-network.png",
    },
    {
        label: "Ravcube Finance",
        value: "ravcube-finance",
        logoURL: "https://icons.llama.fi/ravcube-finance.png",
    },
    {
        label: "Rubik Finance",
        value: "rubik-finance",
        logoURL: "https://icons.llama.fi/rubik-finance.png",
    },
    {
        label: "Yup",
        value: "yup",
        logoURL: "https://icons.llama.fi/yup.png",
    },
    {
        label: "IoTeX Monster Go",
        value: "iotex-monster-go",
        logoURL: "https://icons.llama.fi/iotex-monster-go.png",
    },
    {
        label: "Candle",
        value: "candle",
        logoURL: "https://icons.llama.fi/candle.png",
    },
    {
        label: "0x NODES",
        value: "0x-nodes",
        logoURL: "https://icons.llama.fi/0x-nodes.png",
    },
    {
        label: "CoinFLEX",
        value: "coinflex",
        logoURL: "https://icons.llama.fi/coinflex.png",
    },
    {
        label: "Shibui DAO",
        value: "shibui-dao",
        logoURL: "https://icons.llama.fi/shibui-dao.png",
    },
    {
        label: "Ampere",
        value: "ampere",
        logoURL: "https://icons.llama.fi/ampere.png",
    },
    {
        label: "Goblins Cash",
        value: "goblins-cash",
        logoURL: "https://icons.llama.fi/goblins-cash.png",
    },
    {
        label: "LNS",
        value: "lns",
        logoURL: "https://icons.llama.fi/lns.png",
    },
    {
        label: "Valerian",
        value: "valerian",
        logoURL: "https://icons.llama.fi/valerian.jpg",
    },
    {
        label: "Celerycash",
        value: "celerycash",
        logoURL: "https://icons.llama.fi/celerycash.jpg",
    },
    {
        label: "Joystick Club",
        value: "joystick-club",
        logoURL: "https://icons.llama.fi/joystick-club.png",
    },
    {
        label: "Game Theory",
        value: "game-theory",
        logoURL: "https://icons.llama.fi/game-theory.png",
    },
    {
        label: "Murica",
        value: "murica",
        logoURL: "https://icons.llama.fi/murica.jpg",
    },
    {
        label: "PandaLand",
        value: "pandaland",
        logoURL: "https://icons.llama.fi/pandaland.png",
    },
    {
        label: "Solily Protocol",
        value: "solily-protocol",
        logoURL: "https://icons.llama.fi/solily-protocol.png",
    },
    {
        label: "Olympus Finance",
        value: "olympus-finance",
        logoURL: "https://icons.llama.fi/olympus-finance.png",
    },
    {
        label: "ToxicDeer Finance",
        value: "toxicdeer-finance",
        logoURL: "https://icons.llama.fi/toxicdeer-finance.png",
    },
    {
        label: "COTI Treasury",
        value: "coti-treasury",
        logoURL: "https://icons.llama.fi/coti-treasury.png",
    },
    {
        label: "Elf Finance",
        value: "elf-finance",
        logoURL: "https://icons.llama.fi/elf-finance.jpg",
    },
    {
        label: "Know-To-Earn",
        value: "know-to-earn",
        logoURL: "https://icons.llama.fi/know-to-earn.png",
    },
    {
        label: "AmesDefi",
        value: "amesdefi",
        logoURL: "https://icons.llama.fi/amesdefi.png",
    },
    {
        label: "xWeowns",
        value: "xweowns",
        logoURL: "https://icons.llama.fi/xweowns.png",
    },
    {
        label: "Jelly",
        value: "jelly",
        logoURL: "https://icons.llama.fi/jelly.png",
    },
    {
        label: "Blitz Labs",
        value: "blitz-labs",
        logoURL: "https://icons.llama.fi/blitz-labs.png",
    },
    {
        label: "Cake Monster",
        value: "cake-monster",
        logoURL: "https://icons.llama.fi/cake-monster.png",
    },
    {
        label: "VersaGames",
        value: "versagames",
        logoURL: "https://icons.llama.fi/versagames.png",
    },
    {
        label: "Gale",
        value: "gale",
        logoURL: "https://icons.llama.fi/gale.png",
    },
    {
        label: "Gaur Money",
        value: "gaur-money",
        logoURL: "https://icons.llama.fi/gaur-money.png",
    },
    {
        label: "Axia Protocol",
        value: "axia-protocol",
        logoURL: "https://icons.llama.fi/axia-protocol.jpg",
    },
    {
        label: "DinoPool",
        value: "dinopool",
        logoURL: "https://icons.llama.fi/dinopool.png",
    },
    {
        label: "Crown Finance",
        value: "crown-finance",
        logoURL: "https://icons.llama.fi/crown-finance.png",
    },
    {
        label: "Everlend",
        value: "everlend",
        logoURL: "https://icons.llama.fi/everlend.png",
    },
    {
        label: "ZeroSwap",
        value: "zeroswap",
        logoURL: "https://icons.llama.fi/zeroswap.png",
    },
    {
        label: "Tangent",
        value: "tangent",
        logoURL: "https://icons.llama.fi/tangent.png",
    },
    {
        label: "VeleroDAO",
        value: "velerodao",
        logoURL: "https://icons.llama.fi/velerodao.png",
    },
    {
        label: "StrategyX Finance",
        value: "strategyx-finance",
        logoURL: "https://icons.llama.fi/strategyx-finance.png",
    },
    {
        label: "Minto",
        value: "minto",
        logoURL: "https://icons.llama.fi/minto.png",
    },
    {
        label: "Frozen Walrus Finance",
        value: "frozen-walrus-finance",
        logoURL: "https://icons.llama.fi/frozen-walrus-finance.png",
    },
    {
        label: "Blur Finance",
        value: "blur-finance",
        logoURL: "https://icons.llama.fi/blur-finance.png",
    },
    {
        label: "SideShift",
        value: "sideshift",
        logoURL: "https://icons.llama.fi/sideshift.png",
    },
    {
        label: "Uplift DAO",
        value: "uplift-dao",
        logoURL: "https://icons.llama.fi/uplift-dao.jpg",
    },
    {
        label: "Waterfall WTF",
        value: "waterfall-wtf",
        logoURL: "https://icons.llama.fi/waterfall-wtf.jpg",
    },
    {
        label: "Bitgert",
        value: "bitgert",
        logoURL: "https://icons.llama.fi/bitgert.jpg",
    },
    {
        label: "BetSwirl",
        value: "betswirl",
        logoURL: "https://icons.llama.fi/betswirl.jpg",
    },
    {
        label: "Pony Finance",
        value: "pony-finance",
        logoURL: "https://icons.llama.fi/pony-finance.jpg",
    },
    {
        label: "Liquidity Finance",
        value: "liquidity-finance",
        logoURL: "https://icons.llama.fi/liquidity-finance.jpg",
    },
    {
        label: "Bubbleswap V1",
        value: "bubbleswap-v1",
        logoURL: "https://icons.llama.fi/bubbleswap-v1.png",
    },
    {
        label: "HomeCoin",
        value: "homecoin",
        logoURL: "https://icons.llama.fi/homecoin.png",
    },
    {
        label: "Emp Money",
        value: "emp-money",
        logoURL: "https://icons.llama.fi/emp-money.jpg",
    },
    {
        label: "LanternSwap",
        value: "lanternswap",
        logoURL: "https://icons.llama.fi/lanternswap.png",
    },
    {
        label: "CivFund",
        value: "civfund",
        logoURL: "https://icons.llama.fi/civfund.png",
    },
    {
        label: "CryptoBlades",
        value: "cryptoblades",
        logoURL: "https://icons.llama.fi/cryptoblades.png",
    },
    {
        label: "Drachma Exchange",
        value: "drachma-exchange",
        logoURL: "https://icons.llama.fi/drachma-exchange.jpg",
    },
    {
        label: "Wolf Safe Poor People",
        value: "wolf-safe-poor-people",
        logoURL: "https://icons.llama.fi/wolf-safe-poor-people.jpg",
    },
    {
        label: "Dogeswap",
        value: "dogeswap",
        logoURL: "https://icons.llama.fi/dogeswap.png",
    },
    {
        label: "Doge Shrek",
        value: "doge-shrek",
        logoURL: "https://icons.llama.fi/doge-shrek.jpg",
    },
    {
        label: "OptiFi",
        value: "optifi",
        logoURL: "https://icons.llama.fi/optifi.jpg",
    },
    {
        label: "Sudo Inu",
        value: "sudo-inu",
        logoURL: "https://icons.llama.fi/sudo-inu.png",
    },
    {
        label: "Dragonfruit Protocol",
        value: "dragonfruit-protocol",
        logoURL: "https://icons.llama.fi/dragonfruit-protocol.png",
    },
    {
        label: "Champion Finance",
        value: "champion-finance",
        logoURL: "https://icons.llama.fi/champion-finance.png",
    },
    {
        label: "Dawn Star Finance",
        value: "dawn-star-finance",
        logoURL: "https://icons.llama.fi/dawn-star-finance.png",
    },
    {
        label: "Klaylend Finance",
        value: "klaylend-finance",
        logoURL: "https://icons.llama.fi/klaylend-finance.png",
    },
    {
        label: "Junoswap",
        value: "junoswap",
        logoURL: "https://icons.llama.fi/junoswap.png",
    },
    {
        label: "PULI",
        value: "puli",
        logoURL: "https://icons.llama.fi/puli.png",
    },
    {
        label: "Interlay Staking",
        value: "interlay-staking",
        logoURL: "https://icons.llama.fi/interlay.png",
    },
    {
        label: "Polyo Exchange",
        value: "polyo-exchange",
        logoURL: "https://icons.llama.fi/polyo-exchange.png",
    },
    {
        label: "Corgi Finance",
        value: "corgi-finance",
        logoURL: "https://icons.llama.fi/corgi-finance.jpg",
    },
    {
        label: "Giveth",
        value: "giveth",
        logoURL: "https://icons.llama.fi/giveth.png",
    },
    {
        label: "Roaring Lion",
        value: "roaring-lion",
        logoURL: "https://icons.llama.fi/roaring-lion.jpg",
    },
    {
        label: "EthicHub",
        value: "ethichub",
        logoURL: "https://icons.llama.fi/ethichub.png",
    },
    {
        label: "Ultron Staking Hub NFT",
        value: "ultron-staking-hub-nft",
        logoURL: "https://icons.llama.fi/ultron-staking-hub-nft.png",
    },
    {
        label: "NUDES",
        value: "nudes",
        logoURL: "https://icons.llama.fi/nudes.png",
    },
    {
        label: "0x",
        value: "0x",
        logoURL: "https://icons.llama.fi/0x.png",
    },
    {
        label: "Cowaii Cash",
        value: "cowaii-cash",
        logoURL: "https://icons.llama.fi/cowaii-cash.png",
    },
    {
        label: "Capricorn Finance",
        value: "capricorn-finance",
        logoURL: "https://icons.llama.fi/capricorn-finance.png",
    },
    {
        label: "KDex",
        value: "kdex",
        logoURL: "https://icons.llama.fi/kdex.png",
    },
    {
        label: "Jupiter Aggregator",
        value: "jupiter-aggregator",
        logoURL: "https://icons.llama.fi/jupiter-aggregator.png",
    },
    {
        label: "Based Next Generation",
        value: "based-next-generation",
        logoURL: "https://icons.llama.fi/based-next-generation.jpg",
    },
    {
        label: "Zootopia Finance",
        value: "zootopia-finance",
        logoURL: "https://icons.llama.fi/zootopia-finance.png",
    },
    {
        label: "OHMPOW",
        value: "ohmpow",
        logoURL: "https://icons.llama.fi/ohmpow.png",
    },
    {
        label: "TempleDAO Trade",
        value: "templedao-trade",
        logoURL: "https://icons.llama.fi/temple-dao.png",
    },
    {
        label: "NEUY",
        value: "neuy",
        logoURL: "https://icons.llama.fi/neuy.png",
    },
    {
        label: "ECHSWAP",
        value: "echswap",
        logoURL: "https://icons.llama.fi/echswap.png",
    },
    {
        label: "Bepro Network",
        value: "bepro-network",
        logoURL: "https://icons.llama.fi/bepro-network.png",
    },
    {
        label: "Opulous",
        value: "opulous",
        logoURL: "https://icons.llama.fi/opulous.jpg",
    },
    {
        label: "Frog Swap",
        value: "frog-swap",
        logoURL: "https://icons.llama.fi/frog-swap.jpg",
    },
    {
        label: "KekSwap",
        value: "kekswap",
        logoURL: "https://icons.llama.fi/kekswap.jpg",
    },
    {
        label: "ORA Finance",
        value: "ora-finance",
        logoURL: "https://icons.llama.fi/ora-finance.png",
    },
    {
        label: "CroLend Finance",
        value: "crolend-finance",
        logoURL: "https://icons.llama.fi/crolend-finance.png",
    },
    {
        label: "Hera Finance",
        value: "hera-finance",
        logoURL: "https://icons.llama.fi/hera-finance.png",
    },
    {
        label: "Dexible V2",
        value: "dexible-v2",
        logoURL: "https://icons.llama.fi/dexible.png",
    },
    {
        label: "BarnSwap",
        value: "barnswap",
        logoURL: "https://icons.llama.fi/barnswap.png",
    },
    {
        label: "Opensea Seaport",
        value: "opensea-seaport",
        logoURL: "https://icons.llama.fi/opensea-seaport.png",
    },
    {
        label: "Weld Finance",
        value: "weld-finance",
        logoURL: "https://icons.llama.fi/weld-finance.png",
    },
    {
        label: "GhostMarket",
        value: "ghostmarket",
        logoURL: "https://icons.llama.fi/ghostmarket.jpg",
    },
    {
        label: "FairFi",
        value: "fairfi",
        logoURL: "https://icons.llama.fi/fairfi.jpg",
    },
    {
        label: "EMDX",
        value: "emdx",
        logoURL: "https://icons.llama.fi/emdx.png",
    },
    {
        label: "Goober",
        value: "goober",
        logoURL: "https://icons.llama.fi/goober.png",
    },
    {
        label: "Lympo",
        value: "lympo",
        logoURL: "https://icons.llama.fi/lympo.jpg",
    },
    {
        label: "Binance Multi Chain Capital",
        value: "binance-multi-chain-capital",
        logoURL: "https://icons.llama.fi/binance-multi-chain-capital.png",
    },
    {
        label: "KPerp Exchange",
        value: "kperp-exchange",
        logoURL: "https://icons.llama.fi/kperp-exchange.png",
    },
    {
        label: "Optitude Finance",
        value: "optitude-finance",
        logoURL: "https://icons.llama.fi/optitude-finance.png",
    },
    {
        label: "X7 Finance",
        value: "x7-finance",
        logoURL: "https://icons.llama.fi/x7-finance.png",
    },
    {
        label: "Athos Finance",
        value: "athos-finance",
        logoURL: "https://icons.llama.fi/athos-finance.png",
    },
    {
        label: "Dexit Finance Swap",
        value: "dexit-finance-swap",
        logoURL: "https://icons.llama.fi/dexit-finance-swap.png",
    },
    {
        label: "YieldBank",
        value: "yieldbank",
        logoURL: "https://icons.llama.fi/yieldbank.jpg",
    },
    {
        label: "Genius Yield",
        value: "genius-yield",
        logoURL: "https://icons.llama.fi/genius-yield.jpg",
    },
    {
        label: "Freebie Life Finance",
        value: "freebie-life-finance",
        logoURL: "https://icons.llama.fi/freebie-life-finance.png",
    },
    {
        label: "BlueMove Staking",
        value: "bluemove-staking",
        logoURL: "https://icons.llama.fi/bluemove.png",
    },
    {
        label: "Inbuilt Finance",
        value: "inbuilt-finance",
        logoURL: "https://icons.llama.fi/inbuilt-finance.jpg",
    },
    {
        label: "BAO Ballast",
        value: "bao-ballast",
        logoURL: "https://icons.llama.fi/bao-ballast.jpg",
    },
    {
        label: "Decryption",
        value: "decryption",
        logoURL: "https://icons.llama.fi/decryption.jpg",
    },
    {
        label: "FootballManager",
        value: "footballmanager",
        logoURL: "https://icons.llama.fi/footballmanager.jpg",
    },
    {
        label: "Y2B Finance",
        value: "y2b-finance",
        logoURL: "https://icons.llama.fi/y2b-finance.jpg",
    },
    {
        label: "Revoluzion",
        value: "revoluzion",
        logoURL: "https://icons.llama.fi/revoluzion.png",
    },
    {
        label: "Defender Finance",
        value: "defender-finance",
        logoURL: "https://icons.llama.fi/defender-finance.jpg",
    },
    {
        label: "Zeniq Swap",
        value: "zeniq-swap",
        logoURL: "https://icons.llama.fi/zeniq-swap.jpg",
    },
    {
        label: "Changex",
        value: "changex",
        logoURL: "https://icons.llama.fi/changex.png",
    },
    {
        label: "Metropolis",
        value: "metropolis",
        logoURL: "https://icons.llama.fi/metropolis.png",
    },
    {
        label: "Doglands Swap",
        value: "doglands-swap",
        logoURL: "https://icons.llama.fi/doglands-swap.png",
    },
    {
        label: "Vidya",
        value: "vidya",
        logoURL: "https://icons.llama.fi/vidya.png",
    },
    {
        label: "Premio",
        value: "premio",
        logoURL: "https://icons.llama.fi/premio.jpg",
    },
    {
        label: "Bitindi Staking",
        value: "bitindi-staking",
        logoURL: "https://icons.llama.fi/bitindi-staking.jpg",
    },
    {
        label: "Meme Dollar",
        value: "meme-dollar",
        logoURL: "https://icons.llama.fi/meme-dollar.png",
    },
    {
        label: "Akiba Finance",
        value: "akiba-finance",
        logoURL: "https://icons.llama.fi/akiba-finance.jpg",
    },
    {
        label: "AlgoBlocks",
        value: "algoblocks",
        logoURL: "https://icons.llama.fi/algoblocks.jpg",
    },
    {
        label: "CitaDAO",
        value: "citadao",
        logoURL: "https://icons.llama.fi/citadao.jpg",
    },
    {
        label: "Brewlabs",
        value: "brewlabs",
        logoURL: "https://icons.llama.fi/brewlabs.png",
    },
    {
        label: "Bankless",
        value: "bankless",
        logoURL: "https://icons.llama.fi/bankless.jpg",
    },
    {
        label: "Aragon",
        value: "aragon",
        logoURL: "https://icons.llama.fi/aragon.jpg",
    },
    {
        label: "Mantle Treasury",
        value: "mantle-treasury",
        logoURL: "https://icons.llama.fi/mantle-treasury.png",
    },
    {
        label: "PleasrDAO",
        value: "pleasrdao",
        logoURL: "https://icons.llama.fi/pleasrdao.png",
    },
    {
        label: "Rarible",
        value: "rarible",
        logoURL: "https://icons.llama.fi/rarible.png",
    },
    {
        label: "Notiboy",
        value: "notiboy",
        logoURL: "https://icons.llama.fi/notiboy.jpg",
    },
    {
        label: "BusinessBuildersNFTs",
        value: "businessbuildersnfts",
        logoURL: "https://icons.llama.fi/businessbuildersnfts.jpg",
    },
    {
        label: "Manifesto",
        value: "manifesto",
        logoURL: "https://icons.llama.fi/manifesto.jpg",
    },
    {
        label: "Phezzan Protocol",
        value: "phezzan-protocol",
        logoURL: "https://icons.llama.fi/phezzan-protocol.jpg",
    },
    {
        label: "Gitcoin",
        value: "gitcoin",
        logoURL: "https://icons.llama.fi/gitcoin.jpg",
    },
    {
        label: "ENS",
        value: "ens",
        logoURL: "https://icons.llama.fi/ens.jpg",
    },
    {
        label: "Gnosis DAO",
        value: "gnosis-dao",
        logoURL: "https://icons.llama.fi/gnosis-dao.jpg",
    },
    {
        label: "Ethereum Foundation",
        value: "ethereum-foundation",
        logoURL: "https://icons.llama.fi/ethereum-foundation.jpg",
    },
    {
        label: "Nouns",
        value: "nouns",
        logoURL: "https://icons.llama.fi/nouns.jpg",
    },
    {
        label: "Friends With Benefits",
        value: "friends-with-benefits",
        logoURL: "https://icons.llama.fi/friends-with-benefits.png",
    },
    {
        label: "Droplit Protocol",
        value: "droplit-protocol",
        logoURL: "https://icons.llama.fi/droplit-protocol.png",
    },
    {
        label: "Wonderly Finance",
        value: "wonderly-finance",
        logoURL: "https://icons.llama.fi/wonderly-finance.png",
    },
    {
        label: "Zonic",
        value: "zonic",
        logoURL: "https://icons.llama.fi/zonic.jpg",
    },
    {
        label: "THORWallet DEX",
        value: "thorwallet-dex",
        logoURL: "https://icons.llama.fi/thorwallet-dex.jpg",
    },
    {
        label: "OnePunchSwap",
        value: "onepunchswap",
        logoURL: "https://icons.llama.fi/onepunchswap.jpg",
    },
    {
        label: "Lion Commerce",
        value: "lion-commerce",
        logoURL: "https://icons.llama.fi/lion-commerce.png",
    },
    {
        label: "Bank of Cronos OHM",
        value: "bank-of-cronos-ohm",
        logoURL: "https://icons.llama.fi/bank-of-cronos-ohm.png",
    },
    {
        label: "NFTEarth",
        value: "nftearth",
        logoURL: "https://icons.llama.fi/nftearth.jpg",
    },
    {
        label: "Subzero+",
        value: "subzero+",
        logoURL: "https://icons.llama.fi/subzero+.png",
    },
    {
        label: "Perion",
        value: "perion",
        logoURL: "https://icons.llama.fi/perion.png",
    },
    {
        label: "Mosquitos Finance",
        value: "mosquitos-finance",
        logoURL: "https://icons.llama.fi/mosquitos-finance.jpg",
    },
    {
        label: "HXRO Network",
        value: "hxro-network",
        logoURL: "https://icons.llama.fi/hxro-network.png",
    },
    {
        label: "Cypher",
        value: "cypher",
        logoURL: "https://icons.llama.fi/cypher.jpg",
    },
    {
        label: "Beamer Bridge",
        value: "beamer-bridge",
        logoURL: "https://icons.llama.fi/beamer-bridge.jpg",
    },
    {
        label: "King Finance",
        value: "king-finance",
        logoURL: "https://icons.llama.fi/king-finance.png",
    },
    {
        label: "NULS POCM",
        value: "nuls-pocm",
        logoURL: "https://icons.llama.fi/nuls-pocm.png",
    },
    {
        label: "TrueFeedBack",
        value: "truefeedback",
        logoURL: "https://icons.llama.fi/truefeedback.jpg",
    },
    {
        label: "Bisq",
        value: "bisq",
        logoURL: "https://icons.llama.fi/bisq.png",
    },
    {
        label: "Dexalot",
        value: "dexalot",
        logoURL: "https://icons.llama.fi/dexalot.png",
    },
    {
        label: "PancakeSwap AMM V1",
        value: "pancakeswap-amm-v1",
        logoURL: "https://icons.llama.fi/pancakeswap-amm-v1.jpg",
    },
    {
        label: "Surfswap Stable AMM",
        value: "surfswap-stable-amm",
        logoURL: "https://icons.llama.fi/surfswap-stable-amm.png",
    },
    {
        label: "ZORA",
        value: "zora",
        logoURL: "https://icons.llama.fi/zora.jpg",
    },
    {
        label: "Chainlink Requests",
        value: "chainlink-requests",
        logoURL: "https://icons.llama.fi/chainlink-requests.jpg",
    },
    {
        label: "OpenSea V1",
        value: "opensea-v1",
        logoURL: "https://icons.llama.fi/opensea-v1.png",
    },
    {
        label: "OpenSea V2",
        value: "opensea-v2",
        logoURL: "https://icons.llama.fi/opensea-v2.png",
    },
    {
        label: "CoW Swap",
        value: "cow-swap",
        logoURL: "https://icons.llama.fi/cow-swap.jpg",
    },
    {
        label: "0xAcid",
        value: "0xacid",
        logoURL: "https://icons.llama.fi/0xacid.png",
    },
    {
        label: "Forta",
        value: "forta",
        logoURL: "https://icons.llama.fi/forta.jpg",
    },
    {
        label: "ApeCoin",
        value: "apecoin",
        logoURL: "https://icons.llama.fi/apecoin.jpg",
    },
    {
        label: "Kava Football Club",
        value: "kava-football-club",
        logoURL: "https://icons.llama.fi/kava-football-club.jpg",
    },
    {
        label: "Arc Swap",
        value: "arc-swap",
        logoURL: "https://icons.llama.fi/arc-swap.jpg",
    },
    {
        label: "Sakai Vault",
        value: "sakai-vault",
        logoURL: "https://icons.llama.fi/sakai-vault.jpg",
    },
    {
        label: "Void",
        value: "void",
        logoURL: "https://icons.llama.fi/void.jpg",
    },
    {
        label: "pxswap",
        value: "pxswap",
        logoURL: "https://icons.llama.fi/pxswap.jpg",
    },
    {
        label: "BoneSwap Bonerium",
        value: "boneswap-bonerium",
        logoURL: "https://icons.llama.fi/boneswap-bonerium.jpg",
    },
    {
        label: "Kokomo Finance",
        value: "kokomo-finance",
        logoURL: "https://icons.llama.fi/kokomo-finance.jpg",
    },
    {
        label: "Dexioprotocol",
        value: "dexioprotocol",
        logoURL: "https://icons.llama.fi/dexioprotocol.jpg",
    },
    {
        label: "Arbitrum DAO",
        value: "arbitrum-dao",
        logoURL: "https://icons.llama.fi/arbitrum-dao.png",
    },
    {
        label: "India Covid Relief Fund",
        value: "india-covid-relief-fund",
        logoURL: "https://icons.llama.fi/india-covid-relief-fund.png",
    },
    {
        label: "Aptos",
        value: "aptos",
        logoURL: "https://icons.llama.fi/aptos.jpg",
    },
    {
        label: "Canto",
        value: "canto",
        logoURL: "https://icons.llama.fi/canto.jpg",
    },
    {
        label: "Atlas Aggregator",
        value: "atlas-aggregator",
        logoURL: "https://icons.llama.fi/atlas-aggregator.jpg",
    },
    {
        label: "Blast API",
        value: "blast-api",
        logoURL: "https://icons.llama.fi/blast-api.jpg",
    },
    {
        label: "GET Protocol",
        value: "get-protocol",
        logoURL: "https://icons.llama.fi/get-protocol.png",
    },
    {
        label: "PLEXUS",
        value: "plexus",
        logoURL: "https://icons.llama.fi/plexus.jpg",
    },
    {
        label: "CexDex",
        value: "cexdex",
        logoURL: "https://icons.llama.fi/cexdex.jpg",
    },
    {
        label: "Empyreal",
        value: "empyreal",
        logoURL: "https://icons.llama.fi/empyreal.jpg",
    },
    {
        label: "Multialt",
        value: "multialt",
        logoURL: "https://icons.llama.fi/multialt.jpg",
    },
    {
        label: "TWTStake",
        value: "twtstake",
        logoURL: "https://icons.llama.fi/twtstake.png",
    },
    {
        label: "NFT360",
        value: "nft360",
        logoURL: "https://icons.llama.fi/nft360.png",
    },
    {
        label: "Ysmart",
        value: "ysmart",
        logoURL: "https://icons.llama.fi/ysmart.png",
    },
    {
        label: "Arbitrum",
        value: "arbitrum",
        logoURL: "https://icons.llama.fi/arbitrum.png",
    },
    {
        label: "Bitcoin",
        value: "bitcoin",
        logoURL: "https://icons.llama.fi/bitcoin.png",
    },
    {
        label: "Acala",
        value: "acala",
        logoURL: "https://icons.llama.fi/acala.png",
    },
    {
        label: "Moonbeam",
        value: "moonbeam",
        logoURL: "https://icons.llama.fi/moonbeam.png",
    },
    {
        label: "Zks Miner",
        value: "zks-miner",
        logoURL: "https://icons.llama.fi/zks-miner.png",
    },
    {
        label: "Cron Finance",
        value: "cron-finance",
        logoURL: "https://icons.llama.fi/cron-finance.png",
    },
    {
        label: "Dypius",
        value: "dypius",
        logoURL: "https://icons.llama.fi/dypius.jpg",
    },
    {
        label: "CortexDAO",
        value: "cortexdao",
        logoURL: "https://icons.llama.fi/cortexdao.png",
    },
    {
        label: "World Mobile Token",
        value: "world-mobile-token",
        logoURL: "https://icons.llama.fi/world-mobile-token.jpg",
    },
    {
        label: "MERLIN DEX",
        value: "merlin-dex",
        logoURL: "https://icons.llama.fi/merlin-dex.png",
    },
    {
        label: "PrivCash",
        value: "privcash",
        logoURL: "https://icons.llama.fi/privcash.jpg",
    },
    {
        label: "CatsApes",
        value: "catsapes",
        logoURL: "https://icons.llama.fi/catsapes.jpg",
    },
    {
        label: "Array",
        value: "array",
        logoURL: "https://icons.llama.fi/array.jpg",
    },
    {
        label: "Snark Launch",
        value: "snark-launch",
        logoURL: "https://icons.llama.fi/snark-launch.png",
    },
    {
        label: "SuperLauncher",
        value: "superlauncher",
        logoURL: "https://icons.llama.fi/superlauncher.jpg",
    },
    {
        label: "FunBear",
        value: "funbear",
        logoURL: "https://icons.llama.fi/funbear.jpg",
    },
    {
        label: "Direct Exchange",
        value: "direct-exchange",
        logoURL: "https://icons.llama.fi/direct-exchange.png",
    },
    {
        label: "Kei Finance",
        value: "kei-finance",
        logoURL: "https://icons.llama.fi/kei-finance.jpg",
    },
    {
        label: "Cells Finance",
        value: "cells-finance",
        logoURL: "https://icons.llama.fi/cells-finance.jpg",
    },
    {
        label: "BrainDAO",
        value: "braindao",
        logoURL: "https://icons.llama.fi/braindao.png",
    },
    {
        label: "Bubbleswap V2",
        value: "bubbleswap-v2",
        logoURL: "https://icons.llama.fi/bubbleswap-v2.png",
    },
    {
        label: "AirSwap",
        value: "airswap",
        logoURL: "https://icons.llama.fi/airswap.jpg",
    },
    {
        label: "DXDao",
        value: "dxdao",
        logoURL: "https://icons.llama.fi/dxdao.jpg",
    },
    {
        label: "FORTH DAO",
        value: "forth-dao",
        logoURL: "https://icons.llama.fi/forth-dao.png",
    },
    {
        label: "Optimism Foundation",
        value: "optimism-foundation",
        logoURL: "https://icons.llama.fi/optimism-foundation.jpg",
    },
    {
        label: "Steadefi",
        value: "steadefi",
        logoURL: "https://icons.llama.fi/steadefi.jpg",
    },
    {
        label: "Nutbox",
        value: "nutbox",
        logoURL: "https://icons.llama.fi/nutbox.png",
    },
    {
        label: "Verified Credits",
        value: "verified-credits",
        logoURL: "https://icons.llama.fi/verified-credits.png",
    },
    {
        label: "Merkl",
        value: "merkl",
        logoURL: "https://icons.llama.fi/merkl.png",
    },
    {
        label: "Kwenta",
        value: "kwenta",
        logoURL: "https://icons.llama.fi/kwenta.jpg",
    },
    {
        label: "Component Swap",
        value: "component-swap",
        logoURL: "https://icons.llama.fi/component-swap.png",
    },
    {
        label: "FemboyDAO",
        value: "femboydao",
        logoURL: "https://icons.llama.fi/femboydao.png",
    },
    {
        label: "Maestro",
        value: "maestro",
        logoURL: "https://icons.llama.fi/maestro.jpg",
    },
    {
        label: "Monoceros",
        value: "monoceros",
        logoURL: "https://icons.llama.fi/monoceros.png",
    },
    {
        label: "MetaMask",
        value: "metamask",
        logoURL: "https://icons.llama.fi/metamask.png",
    },
    {
        label: "FireBot",
        value: "firebot",
        logoURL: "https://icons.llama.fi/firebot.jpg",
    },
    {
        label: "Rainbow",
        value: "rainbow",
        logoURL: "https://icons.llama.fi/rainbow.png",
    },
    {
        label: "Houdini Swap",
        value: "houdini-swap",
        logoURL: "https://icons.llama.fi/houdini-swap.png",
    },
    {
        label: "The Llamas",
        value: "the-llamas",
        logoURL: "https://icons.llama.fi/the-llamas.jpg",
    },
    {
        label: "OlympulseX",
        value: "olympulsex",
        logoURL: "https://icons.llama.fi/olympulsex.jpg",
    },
    {
        label: "Froggy Protocol",
        value: "froggy-protocol",
        logoURL: "https://icons.llama.fi/froggy-protocol.png",
    },
    {
        label: "Unibot",
        value: "unibot",
        logoURL: "https://icons.llama.fi/teamunibot.png",
    },
    {
        label: "XLSD",
        value: "xlsd",
        logoURL: "https://icons.llama.fi/xlsd.jpg",
    },
    {
        label: "Stealcam",
        value: "stealcam",
        logoURL: "https://icons.llama.fi/stealcam.png",
    },
    {
        label: "My Neighbor Alice",
        value: "my-neighbor-alice",
        logoURL: "https://icons.llama.fi/my-neightbor-alice.jpg",
    },
    {
        label: "Step App",
        value: "step-app",
        logoURL: "https://icons.llama.fi/step-app.jpg",
    },
    {
        label: "Avalanche",
        value: "avalanche",
        logoURL: "https://icons.llama.fi/avalanche.png",
    },
    {
        label: "DeFiato",
        value: "defiato",
        logoURL: "https://icons.llama.fi/defiato.jpg",
    },
    {
        label: "Primal",
        value: "primal",
        logoURL: "https://icons.llama.fi/primal.jpg",
    },
    {
        label: "Xana",
        value: "xana",
        logoURL: "https://icons.llama.fi/xana.jpg",
    },
    {
        label: "SuperRare",
        value: "superrare",
        logoURL: "https://icons.llama.fi/superrare.png",
    },
    {
        label: "Scatter",
        value: "scatter",
        logoURL: "https://icons.llama.fi/scatter.png",
    },
    {
        label: "Pulsemax Finance",
        value: "pulsemax-finance",
        logoURL: "https://icons.llama.fi/pulsemax-finance.png",
    },
    {
        label: "AVNU",
        value: "avnu",
        logoURL: "https://icons.llama.fi/avnu.png",
    },
    {
        label: "Themis Staking",
        value: "themis-staking",
        logoURL: "https://icons.llama.fi/themis-staking.png",
    },
    {
        label: "Foundation",
        value: "foundation",
        logoURL: "https://icons.llama.fi/foundation.jpg",
    },
    {
        label: "Sui",
        value: "sui",
        logoURL: "https://icons.llama.fi/sui.jpg",
    },
    {
        label: "CryptoDickbutts",
        value: "cryptodickbutts",
        logoURL: "https://icons.llama.fi/cryptodickbutts.jpg",
    },
    {
        label: "Konverter",
        value: "konverter",
        logoURL: "https://icons.llama.fi/konverter.png",
    },
    {
        label: "ARPA Staking",
        value: "arpa-staking",
        logoURL: "https://icons.llama.fi/arpa-staking.jpg",
    },
    {
        label: "Florence Finance",
        value: "florence-finance",
        logoURL: "https://icons.llama.fi/florence-finance.jpg",
    },
    {
        label: "Bitget Swap",
        value: "bitget-swap",
        logoURL: "https://icons.llama.fi/bitget-swap.jpg",
    },
    {
        label: "Tribe3",
        value: "tribe3",
        logoURL: "https://icons.llama.fi/tribe3.png",
    },
    {
        label: "Aerie Lab",
        value: "aerie-lab",
        logoURL: "https://icons.llama.fi/aerie-lab.jpg",
    },
    {
        label: "NEAR",
        value: "near",
        logoURL: "https://icons.llama.fi/near.jpg",
    },
    {
        label: "Golem Network",
        value: "golem-network",
        logoURL: "https://icons.llama.fi/golem-network.jpg",
    },
    {
        label: "Metis",
        value: "metis",
        logoURL: "https://icons.llama.fi/metis.jpg",
    },
    {
        label: "Yield Guild Games",
        value: "yield-guild-games",
        logoURL: "https://icons.llama.fi/yield-guild-games.png",
    },
    {
        label: "SkyDex",
        value: "skydex",
        logoURL: "https://icons.llama.fi/skydex.jpg",
    },
    {
        label: "Arkham",
        value: "arkham",
        logoURL: "https://icons.llama.fi/arkham.jpg",
    },
    {
        label: "Evmos DAO",
        value: "evmos-dao",
        logoURL: "https://icons.llama.fi/evmos-dao.png",
    },
    {
        label: "L2BEAT",
        value: "l2beat",
        logoURL: "https://icons.llama.fi/l2beat.jpg",
    },
    {
        label: "Go Ethereum",
        value: "go-ethereum",
        logoURL: "https://icons.llama.fi/go-ethereum.jpg",
    },
    {
        label: "Ethers",
        value: "ethers",
        logoURL: "https://icons.llama.fi/ethers.jpg",
    },
    {
        label: "ETHGlobal",
        value: "ethglobal",
        logoURL: "https://icons.llama.fi/ethglobal.jpg",
    },
    {
        label: "rotki",
        value: "rotki",
        logoURL: "https://icons.llama.fi/rotki.jpg",
    },
    {
        label: "wagmi sh",
        value: "wagmi-sh",
        logoURL: "https://icons.llama.fi/wagmi-sh.jpg",
    },
    {
        label: "Tangent Protocol",
        value: "tangent-protocol",
        logoURL: "https://icons.llama.fi/tangent-protocol.png",
    },
    {
        label: "Snapshot",
        value: "snapshot",
        logoURL: "https://icons.llama.fi/snapshot.png",
    },
    {
        label: "Safe",
        value: "safe",
        logoURL: "https://icons.llama.fi/safe.png",
    },
    {
        label: "Revoke.cash",
        value: "revoke.cash",
        logoURL: "https://icons.llama.fi/revoke.cash.png",
    },
    {
        label: "Ignore Fud",
        value: "ignore-fud",
        logoURL: "https://icons.llama.fi/ignore-fud.png",
    },
    {
        label: "Banana Gun",
        value: "banana-gun",
        logoURL: "https://icons.llama.fi/banana-gun.jpg",
    },
    {
        label: "None Trading",
        value: "none-trading",
        logoURL: "https://icons.llama.fi/none-trading.jpg",
    },
    {
        label: "Chainlink Keepers",
        value: "chainlink-keepers",
        logoURL: "https://icons.llama.fi/chainlink-keepers.jpg",
    },
    {
        label: "Chainlink VRF V1",
        value: "chainlink-vrf-v1",
        logoURL: "https://icons.llama.fi/chainlink-vrf-v1.jpg",
    },
    {
        label: "Chainlink VRF V2",
        value: "chainlink-vrf-v2",
        logoURL: "https://icons.llama.fi/chainlink-vrf-v2.jpg",
    },
    {
        label: "Magnate Finance",
        value: "magnate-finance",
        logoURL: "https://icons.llama.fi/magnate-finance.png",
    },
    {
        label: "Basetrade",
        value: "basetrade",
        logoURL: "https://icons.llama.fi/basetrade.png",
    },
    {
        label: "MantaDAO",
        value: "mantadao",
        logoURL: "https://icons.llama.fi/mantadao.jpg",
    },
    {
        label: "LogX",
        value: "logx",
        logoURL: "https://icons.llama.fi/logx.jpg",
    },
    {
        label: "DeNet File Token",
        value: "denet-file-token",
        logoURL: "https://icons.llama.fi/denet-file-token.png",
    },
    {
        label: "Meowl",
        value: "meowl",
        logoURL: "https://icons.llama.fi/meowl.png",
    },
    {
        label: "Raccoon Finance",
        value: "raccoon-finance",
        logoURL: "https://icons.llama.fi/raccoon-finance.jpg",
    },
    {
        label: "PySwap",
        value: "pyswap",
        logoURL: "https://icons.llama.fi/pyswap.jpg",
    },
    {
        label: "Bad Idea AI",
        value: "bad-idea-ai",
        logoURL: "https://icons.llama.fi/bad-idea-ai.jpg",
    },
    {
        label: "Loot  DAO",
        value: "loot--dao",
        logoURL: "https://icons.llama.fi/loot-dao.jpg",
    },
    {
        label: "Racoon.Bet",
        value: "racoon.bet",
        logoURL: "https://icons.llama.fi/racoon.bet.jpg",
    },
    {
        label: "Tutellus",
        value: "tutellus",
        logoURL: "https://icons.llama.fi/tutellus.jpg",
    },
    {
        label: "BoneDex",
        value: "bonedex",
        logoURL: "https://icons.llama.fi/bonedex.png",
    },
    {
        label: "ShibFi",
        value: "shibfi",
        logoURL: "https://icons.llama.fi/shibfi.jpg",
    },
    {
        label: "Basetasm Finance",
        value: "basetasm-finance",
        logoURL: "https://icons.llama.fi/basetasm-finance.jpg",
    },
    {
        label: "Basic Attention",
        value: "basic-attention",
        logoURL: "https://icons.llama.fi/basic-attention.jpg",
    },
    {
        label: "Abachi",
        value: "abachi",
        logoURL: "https://icons.llama.fi/abachi.png",
    },
    {
        label: "BasePaint",
        value: "basepaint",
        logoURL: "https://icons.llama.fi/basepaint.png",
    },
    {
        label: "MonarchPay",
        value: "monarchpay",
        logoURL: "https://icons.llama.fi/monarchpay.png",
    },
    {
        label: "One guy Finance",
        value: "one-guy-finance",
        logoURL: "https://icons.llama.fi/one-guy-finance.png",
    },
    {
        label: "Jumper Exchange",
        value: "jumper-exchange",
        logoURL: "https://icons.llama.fi/jumper-exchange.jpg",
    },
    {
        label: "BlazeBot",
        value: "blazebot",
        logoURL: "https://icons.llama.fi/blazebot.jpg",
    },
    {
        label: "THENA ALPHA",
        value: "thena-alpha",
        logoURL: "https://icons.llama.fi/thena-alpha.jpg",
    },
    {
        label: "PancakeSwap Perps",
        value: "pancakeswap-perps",
        logoURL: "https://icons.llama.fi/pancakeswap-perps.jpg",
    },
    {
        label: "Tegro",
        value: "tegro",
        logoURL: "https://icons.llama.fi/tegro.jpg",
    },
    {
        label: "Celestia",
        value: "celestia",
        logoURL: "https://icons.llama.fi/celestia.jpg",
    },
    {
        label: "FT33 DAO",
        value: "ft33-dao",
        logoURL: "https://icons.llama.fi/ft33-dao.png",
    },
    {
        label: "TON Locker",
        value: "ton-locker",
        logoURL: "https://icons.llama.fi/ton-locker.jpg",
    },
    {
        label: "ESCROW",
        value: "escrow",
        logoURL: "https://icons.llama.fi/escrow.png",
    },
    {
        label: "basedmarkets",
        value: "basedmarkets",
        logoURL: "https://icons.llama.fi/basedmarkets.png",
    },
    {
        label: "Uniswap Labs",
        value: "uniswap-labs",
        logoURL: "https://icons.llama.fi/uniswap-labs.png",
    },
    {
        label: "TokenFi",
        value: "tokenfi",
        logoURL: "https://icons.llama.fi/tokenfi.png",
    },
    {
        label: "Spirit Farm",
        value: "spirit-farm",
        logoURL: "https://icons.llama.fi/spirit-farm.jpg",
    },
    {
        label: "AITECH",
        value: "aitech",
        logoURL: "https://icons.llama.fi/aitech.jpg",
    },
    {
        label: "PAAL AI",
        value: "paal-ai",
        logoURL: "https://icons.llama.fi/paal-ai.jpg",
    },
    {
        label: "HOPR",
        value: "hopr",
        logoURL: "https://icons.llama.fi/hopr.jpg",
    },
    {
        label: "BOOM",
        value: "boom",
        logoURL: "https://icons.llama.fi/boom.jpg",
    },
    {
        label: "Stellaris Finance",
        value: "stellaris-finance",
        logoURL: "https://icons.llama.fi/stellaris-finance.jpg",
    },
    {
        label: "White Protocol",
        value: "white-protocol",
        logoURL: "https://icons.llama.fi/white-protocol.jpg",
    },
    {
        label: "Fuzion Bonds",
        value: "fuzion-bonds",
        logoURL: "https://icons.llama.fi/fuzion-bonds.png",
    },
    {
        label: "Chainflip",
        value: "chainflip",
        logoURL: "https://icons.llama.fi/chainflip.png",
    },
] as ProtocolOption[];
