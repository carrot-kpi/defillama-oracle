// taken and adapted from https://github.com/DefiLlama/defillama-server/blob/304ad2c43a3ffc44b81af4e163ab88bc330302fc/defi/src/protocols/data.ts
// TODO: remove this once the protocols API works again

import type { ProtocolOption } from "../types";

export default [
    {
        label: "WBTC",
        value: "wbtc",
        logoURL: "https://icons.llama.fi/wbtc.png",
    },
    {
        label: "Curve DEX",
        value: "curve-dex",
        logoURL: "https://icons.llama.fi/curve.png",
    },
    {
        label: "AAVE V2",
        value: "aave-v2",
        logoURL: "https://icons.llama.fi/aave-v2.png",
    },
    {
        label: "Harvest Finance",
        value: "harvest-finance",
        logoURL: "https://icons.llama.fi/harvest-finance.png",
    },
    {
        label: "Yearn Finance",
        value: "yearn-finance",
        logoURL: "https://icons.llama.fi/yearn-finance.jpg",
    },
    {
        label: "Compound",
        value: "compound",
        logoURL: "https://icons.llama.fi/compound.png",
    },
    {
        label: "Synthetix",
        value: "synthetix",
        logoURL: "https://icons.llama.fi/synthetix.png",
    },
    {
        label: "Balancer V1",
        value: "balancer-v1",
        logoURL: "https://icons.llama.fi/balancer-v1.png",
    },
    {
        label: "RenVM",
        value: "renvm",
        logoURL: "https://icons.llama.fi/renvm.png",
    },
    {
        label: "MakerDAO",
        value: "makerdao",
        logoURL: "https://icons.llama.fi/makerdao.jpg",
    },
    {
        label: "SushiSwap",
        value: "sushiswap",
        logoURL: "https://icons.llama.fi/sushiswap.png",
    },
    {
        label: "Instadapp",
        value: "instadapp",
        logoURL: "https://icons.llama.fi/instadapp.jpg",
    },
    {
        label: "CREAM Lending",
        value: "cream-lending",
        logoURL: "https://icons.llama.fi/cream-finance.png",
    },
    {
        label: "Nexus Mutual",
        value: "nexus-mutual",
        logoURL: "https://icons.llama.fi/nexus-mutual.png",
    },
    {
        label: "dForce",
        value: "dforce",
        logoURL: "https://icons.llama.fi/DF.svg",
    },
    {
        label: "KEEP Network",
        value: "keep-network",
        logoURL: "https://icons.llama.fi/keep-network.png",
    },
    {
        label: "mStable CDP",
        value: "mstable-cdp",
        logoURL: "https://icons.llama.fi/mstable.png",
    },
    {
        label: "Loopring",
        value: "loopring",
        logoURL: "https://icons.llama.fi/loopring.png",
    },
    {
        label: "KyberSwap Classic",
        value: "kyberswap-classic",
        logoURL: "https://icons.llama.fi/kyberswap-classic.png",
    },
    {
        label: "Hegic",
        value: "hegic",
        logoURL: "https://icons.llama.fi/hegic.jpg",
    },
    {
        label: "xDAI Stake Bridge",
        value: "xdai-stake-bridge",
        logoURL: "https://icons.llama.fi/xdai-stake.png",
    },
    {
        label: "The Tokenized Bitcoin",
        value: "the-tokenized-bitcoin",
        logoURL: "https://icons.llama.fi/the-tokenized-bitcoin.png",
    },
    {
        label: "BarnBridge",
        value: "barnbridge",
        logoURL: "https://icons.llama.fi/barnbridge.png",
    },
    {
        label: "hBTC",
        value: "hbtc",
        logoURL: "https://icons.llama.fi/hbtc.jpg",
    },
    {
        label: "Shell Protocol",
        value: "shell-protocol",
        logoURL: "https://icons.llama.fi/shell-protocol.jpg",
    },
    {
        label: "Pickle",
        value: "pickle",
        logoURL: "https://icons.llama.fi/pickle.svg",
    },
    {
        label: "Kava Mint",
        value: "kava-mint",
        logoURL: "https://icons.llama.fi/kava-mint.png",
    },
    {
        label: "Rari Capital",
        value: "rari-capital",
        logoURL: "https://icons.llama.fi/rari-capital.jpg",
    },
    {
        label: "Bepswap",
        value: "bepswap",
        logoURL: "https://icons.llama.fi/bepswap.jpg",
    },
    {
        label: "Hakka Finance",
        value: "hakka-finance",
        logoURL: "https://icons.llama.fi/hakka-finance.png",
    },
    {
        label: "SnowSwap",
        value: "snowswap",
        logoURL: "https://icons.llama.fi/snowswap.jpg",
    },
    {
        label: "Kava Lend",
        value: "kava-lend",
        logoURL: "https://icons.llama.fi/kava-lend.png",
    },
    {
        label: "Outcome Finance",
        value: "outcome-finance",
        logoURL: "https://icons.llama.fi/outcome-finance.png",
    },
    {
        label: "Swerve",
        value: "swerve",
        logoURL: "https://icons.llama.fi/swerve.jpg",
    },
    {
        label: "Flexa",
        value: "flexa",
        logoURL: "https://icons.llama.fi/flexa.png_small",
    },
    {
        label: "dYdX",
        value: "dydx",
        logoURL: "https://icons.llama.fi/dydx.jpg",
    },
    {
        label: "Serum",
        value: "serum",
        logoURL: "https://icons.llama.fi/serum.jpg",
    },
    {
        label: "DODO",
        value: "dodo",
        logoURL: "https://icons.llama.fi/dodo.png",
    },
    {
        label: "Tornado Cash",
        value: "tornado-cash",
        logoURL: "https://icons.llama.fi/tornado-cash.jpg",
    },
    {
        label: "B.Protocol",
        value: "b.protocol",
        logoURL: "https://icons.llama.fi/b.protocol.jpg",
    },
    {
        label: "Idle",
        value: "idle",
        logoURL: "https://icons.llama.fi/idle.jpg",
    },
    {
        label: "rhino.fi",
        value: "rhino.fi",
        logoURL: "https://icons.llama.fi/rhino.fi.jpg",
    },
    {
        label: "Augur",
        value: "augur",
        logoURL: "https://icons.llama.fi/augur.png",
    },
    {
        label: "CoFiX",
        value: "cofix",
        logoURL: "https://icons.llama.fi/cofix.jpg",
    },
    {
        label: "Rook",
        value: "rook",
        logoURL: "https://icons.llama.fi/keeperdao.jpg",
    },
    {
        label: "zLot",
        value: "zlot",
        logoURL: "https://icons.llama.fi/zlot.jpg",
    },
    {
        label: "88mph",
        value: "88mph",
        logoURL: "https://icons.llama.fi/88mph.png",
    },
    {
        label: "Dracula",
        value: "dracula",
        logoURL: "https://icons.llama.fi/dracula.png",
    },
    {
        label: "Growth DeFi",
        value: "growth-defi",
        logoURL: "https://icons.llama.fi/growth-defi.png",
    },
    {
        label: "Homora V2",
        value: "homora-v2",
        logoURL: "https://icons.llama.fi/homora-v2.png",
    },
    {
        label: "BoringDAO",
        value: "boringdao",
        logoURL: "https://icons.llama.fi/boringdao.jpg",
    },
    {
        label: "Bancor V2.1",
        value: "bancor-v2.1",
        logoURL: "https://icons.llama.fi/bancor.png",
    },
    {
        label: "ForTube",
        value: "fortube",
        logoURL: "https://icons.llama.fi/fortube.jpg",
    },
    {
        label: "ValueDefi",
        value: "valuedefi",
        logoURL: "https://icons.llama.fi/valuedefi.jpg",
    },
    {
        label: "Cover Protocol",
        value: "cover-protocol",
        logoURL: "https://icons.llama.fi/cover-protocol.jpg",
    },
    {
        label: "TrueFi",
        value: "truefi",
        logoURL: "https://icons.llama.fi/truefi.jpg",
    },
    {
        label: "PieDAO",
        value: "piedao",
        logoURL: "https://icons.llama.fi/piedao.jpg",
    },
    {
        label: "Dev Protocol",
        value: "dev-protocol",
        logoURL: "https://icons.llama.fi/dev-protocol.jpg",
    },
    {
        label: "Basis Cash",
        value: "basis-cash",
        logoURL: "https://icons.llama.fi/basis-cash.jpg",
    },
    {
        label: "FinNexus",
        value: "finnexus",
        logoURL: "https://icons.llama.fi/finnexus.jpg",
    },
    {
        label: "SynLev",
        value: "synlev",
        logoURL: "https://icons.llama.fi/synlev.jpg",
    },
    {
        label: "Index Coop",
        value: "index-coop",
        logoURL: "https://icons.llama.fi/index-coop.png",
    },
    {
        label: "Badger DAO",
        value: "badger-dao",
        logoURL: "https://icons.llama.fi/badger-dao.jpg",
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
        label: "Mushrooms Finance",
        value: "mushrooms-finance",
        logoURL: "https://icons.llama.fi/mushroom-finance.jpg",
    },
    {
        label: "DefiSaver",
        value: "defisaver",
        logoURL: "https://icons.llama.fi/defisaver.jpg",
    },
    {
        label: "Varen",
        value: "varen",
        logoURL: "https://icons.llama.fi/varen.jpg",
    },
    {
        label: "MANTRA DAO",
        value: "mantra-dao",
        logoURL: "https://icons.llama.fi/mantra-dao.png",
    },
    {
        label: "Lido",
        value: "lido",
        logoURL: "https://icons.llama.fi/lido.png",
    },
    {
        label: "Wing Finance",
        value: "wing-finance",
        logoURL: "https://icons.llama.fi/wing-finance.jpg",
    },
    {
        label: "WanSwap Dex",
        value: "wanswap-dex",
        logoURL: "https://icons.llama.fi/wanswap-dex.jpg",
    },
    {
        label: "Unagii",
        value: "unagii",
        logoURL: "https://icons.llama.fi/unagii.jpg",
    },
    {
        label: "Indexed Finance",
        value: "indexed-finance",
        logoURL: "https://icons.llama.fi/indexed-finance.jpg",
    },
    {
        label: "1inch Network",
        value: "1inch-network",
        logoURL: "https://icons.llama.fi/1inch-network.jpg",
    },
    {
        label: "dHEDGE",
        value: "dhedge",
        logoURL: "https://icons.llama.fi/dhedge.png",
    },
    {
        label: "Opium",
        value: "opium",
        logoURL: "https://icons.llama.fi/opium.jpg",
    },
    {
        label: "Governor DAO",
        value: "governor-dao",
        logoURL: "https://icons.llama.fi/governor-dao.jpg",
    },
    {
        label: "Unit Protocol",
        value: "unit-protocol",
        logoURL: "https://icons.llama.fi/unit-protocol.jpg",
    },
    {
        label: "PancakeSwap AMM",
        value: "pancakeswap-amm",
        logoURL: "https://icons.llama.fi/pancakeswap-amm.jpg",
    },
    {
        label: "DefiDollar DAO",
        value: "defidollar-dao",
        logoURL: "https://icons.llama.fi/defidollar-dao.svg",
    },
    {
        label: "Ooki",
        value: "ooki",
        logoURL: "https://icons.llama.fi/ooki.jpg",
    },
    {
        label: "Sablier V1",
        value: "sablier-v1",
        logoURL: "https://icons.llama.fi/sablier-finance.jpg",
    },
    {
        label: "Bella Protocol",
        value: "bella-protocol",
        logoURL: "https://icons.llama.fi/bella-finance.jpg",
    },
    {
        label: "Saddle Finance",
        value: "saddle-finance",
        logoURL: "https://icons.llama.fi/saddle-finance.jpg",
    },
    {
        label: "Siren",
        value: "siren",
        logoURL: "https://icons.llama.fi/siren.png",
    },
    {
        label: "Alchemix",
        value: "alchemix",
        logoURL: "https://icons.llama.fi/alchemix.jpg",
    },
    {
        label: "Goose Finance",
        value: "goose-finance",
        logoURL: "https://icons.llama.fi/goose-finance.jpg",
    },
    {
        label: "xToken",
        value: "xtoken",
        logoURL: "https://icons.llama.fi/xtoken.png",
    },
    {
        label: "Unslashed",
        value: "unslashed",
        logoURL: "https://icons.llama.fi/unslashed.jpg",
    },
    {
        label: "ACryptoS",
        value: "acryptos",
        logoURL: "https://icons.llama.fi/acryptos.jpg",
    },
    {
        label: "Autofarm",
        value: "autofarm",
        logoURL: "https://icons.llama.fi/autofarm.png",
    },
    {
        label: "yAxis",
        value: "yaxis",
        logoURL: "https://icons.llama.fi/yaxis.jpg",
    },
    {
        label: "Smoothy",
        value: "smoothy",
        logoURL: "https://icons.llama.fi/smoothy.jpg",
    },
    {
        label: "Venus Core Pool",
        value: "venus-core-pool",
        logoURL: "https://icons.llama.fi/venus-core-pool.jpg",
    },
    {
        label: "OnX Finance",
        value: "onx-finance",
        logoURL: "https://icons.llama.fi/onx-finance.jpg",
    },
    {
        label: "Raydium",
        value: "raydium",
        logoURL: "https://icons.llama.fi/raydium.jpg",
    },
    {
        label: "Strudel Finance",
        value: "strudel-finance",
        logoURL: "https://icons.llama.fi/strudel-finance.jpg",
    },
    {
        label: "Auctus",
        value: "auctus",
        logoURL: "https://icons.llama.fi/auctus.jpg",
    },
    {
        label: "Connext",
        value: "connext",
        logoURL: "https://icons.llama.fi/connext.png",
    },
    {
        label: "cVault Finance",
        value: "cvault-finance",
        logoURL: "https://icons.llama.fi/cvault-finance.png",
    },
    {
        label: "DDEX",
        value: "ddex",
        logoURL: "https://icons.llama.fi/ddex.png",
    },
    {
        label: "Vesper",
        value: "vesper",
        logoURL: "https://icons.llama.fi/vesper.jpg",
    },
    {
        label: "Defi Swap",
        value: "defi-swap",
        logoURL: "https://icons.llama.fi/defi-swap.jpg",
    },
    {
        label: "DeFiner",
        value: "definer",
        logoURL: "https://icons.llama.fi/definer.jpg",
    },
    {
        label: "DerivaDEX",
        value: "derivadex",
        logoURL: "https://icons.llama.fi/derivadex.jpg",
    },
    {
        label: "Domani Protocol",
        value: "domani-protocol",
        logoURL: "https://icons.llama.fi/domani-protocol.png",
    },
    {
        label: "Enzyme Finance",
        value: "enzyme-finance",
        logoURL: "https://icons.llama.fi/enzyme-finance.jpg",
    },
    {
        label: "Erasure",
        value: "erasure",
        logoURL: "https://icons.llama.fi/erasure.png",
    },
    {
        label: "CreamSwap",
        value: "creamswap",
        logoURL: "https://icons.llama.fi/creamswap.jpg",
    },
    {
        label: "FutureSwap",
        value: "futureswap",
        logoURL: "https://icons.llama.fi/futureswap.jpg",
    },
    {
        label: "Gnosis Protocol v1",
        value: "gnosis-protocol-v1",
        logoURL: "https://icons.llama.fi/gnosis-protocol-v1.png",
    },
    {
        label: "IDEX",
        value: "idex",
        logoURL: "https://icons.llama.fi/idex.png",
    },
    {
        label: "Lightning Network",
        value: "lightning-network",
        logoURL: "https://icons.llama.fi/lightning-network.png",
    },
    {
        label: "MCDEX",
        value: "mcdex",
        logoURL: "https://icons.llama.fi/mcdex.jpg",
    },
    {
        label: "Metronome V1",
        value: "metronome-v1",
        logoURL: "https://icons.llama.fi/metronome-v1.jpg",
    },
    {
        label: "Notional V2",
        value: "notional-v2",
        logoURL: "https://icons.llama.fi/notional-v2.jpg",
    },
    {
        label: "PEAKDEFI",
        value: "peakdefi",
        logoURL: "https://icons.llama.fi/peakdefi.jpg",
    },
    {
        label: "Perlin",
        value: "perlin",
        logoURL: "https://icons.llama.fi/perlin.jpg",
    },
    {
        label: "Swipe",
        value: "swipe",
        logoURL: "https://icons.llama.fi/swipe.jpg",
    },
    {
        label: "Ellipsis Finance",
        value: "ellipsis-finance",
        logoURL: "https://icons.llama.fi/ellipsis-finance.jpg",
    },
    {
        label: "PoolTogether V3",
        value: "pooltogether-v3",
        logoURL: "https://icons.llama.fi/pooltogether-v3.png",
    },
    {
        label: "Polygon Bridge & Staking",
        value: "polygon-bridge-&-staking",
        logoURL: "https://icons.llama.fi/polygon.jpg",
    },
    {
        label: "PowerPool",
        value: "powerpool",
        logoURL: "https://icons.llama.fi/powerpool.png",
    },
    {
        label: "Energiswap",
        value: "energiswap",
        logoURL: "https://icons.llama.fi/energiswap.jpg",
    },
    {
        label: "Flamincome",
        value: "flamincome",
        logoURL: "https://icons.llama.fi/flamincome.png",
    },
    {
        label: "WePiggy",
        value: "wepiggy",
        logoURL: "https://icons.llama.fi/wepiggy.png",
    },
    {
        label: "Pangolin",
        value: "pangolin",
        logoURL: "https://icons.llama.fi/pangolin.png",
    },
    {
        label: "Jarvis Network",
        value: "jarvis-network",
        logoURL: "https://icons.llama.fi/jarvis-network.jpg",
    },
    {
        label: "StakeDAO",
        value: "stakedao",
        logoURL: "https://icons.llama.fi/stakedao.jpg",
    },
    {
        label: "BasketDAO",
        value: "basketdao",
        logoURL: "https://icons.llama.fi/basketdao.jpg",
    },
    {
        label: "Parallel Protocol",
        value: "parallel-protocol",
        logoURL: "https://icons.llama.fi/parallel-protocol.png",
    },
    {
        label: "BiFi",
        value: "bifi",
        logoURL: "https://icons.llama.fi/bifi.jpg",
    },
    {
        label: "Bunny",
        value: "bunny",
        logoURL: "https://icons.llama.fi/bunny.jpg",
    },
    {
        label: "Fei Protocol",
        value: "fei-protocol",
        logoURL: "https://icons.llama.fi/fei-protocol.png",
    },
    {
        label: "Allinx",
        value: "allinx",
        logoURL: "https://icons.llama.fi/allinx.png",
    },
    {
        label: "XDeFi",
        value: "xdefi",
        logoURL: "https://icons.llama.fi/xdefi.jpg",
    },
    {
        label: "Wasabix",
        value: "wasabix",
        logoURL: "https://icons.llama.fi/wasabix.jpg",
    },
    {
        label: "Snowball",
        value: "snowball",
        logoURL: "https://icons.llama.fi/snowball.jpg",
    },
    {
        label: "Mirror",
        value: "mirror",
        logoURL: "https://icons.llama.fi/mirror.png",
    },
    {
        label: "Cometh",
        value: "cometh",
        logoURL: "https://icons.llama.fi/cometh.jpg",
    },
    {
        label: "Primitive",
        value: "primitive",
        logoURL: "https://icons.llama.fi/primitive.jpg",
    },
    {
        label: "QIAN",
        value: "qian",
        logoURL: "https://icons.llama.fi/qian.jpg",
    },
    {
        label: "Robo-Advisor for Yield",
        value: "robo-advisor-for-yield",
        logoURL: "https://icons.llama.fi/robo-advisor-for-yield.jpg",
    },
    {
        label: "Reflexer",
        value: "reflexer",
        logoURL: "https://icons.llama.fi/reflexer.jpg",
    },
    {
        label: "Set Protocol",
        value: "set-protocol",
        logoURL: "https://icons.llama.fi/set-protocol.png",
    },
    {
        label: "S Finance",
        value: "s-finance",
        logoURL: "https://icons.llama.fi/s-finance.svg",
    },
    {
        label: "UniTrade",
        value: "unitrade",
        logoURL: "https://icons.llama.fi/unitrade.jpg",
    },
    {
        label: "YFII",
        value: "yfii",
        logoURL: "https://icons.llama.fi/yfii.jpg",
    },
    {
        label: "Liquity",
        value: "liquity",
        logoURL: "https://icons.llama.fi/liquity.jpg",
    },
    {
        label: "Honeyswap",
        value: "honeyswap",
        logoURL: "https://icons.llama.fi/honeyswap.png",
    },
    {
        label: "Cryptex V1",
        value: "cryptex-v1",
        logoURL: "https://icons.llama.fi/cryptex-finance.jpg",
    },
    {
        label: "ACoconut",
        value: "acoconut",
        logoURL: "https://icons.llama.fi/acoconut.png",
    },
    {
        label: "Olive Cash",
        value: "olive-cash",
        logoURL: "https://icons.llama.fi/olive-cash.png",
    },
    {
        label: "SharedStake",
        value: "sharedstake",
        logoURL: "https://icons.llama.fi/sharedstake.jpg",
    },
    {
        label: "Stafi",
        value: "stafi",
        logoURL: "https://icons.llama.fi/stafi.jpg",
    },
    {
        label: "StakeWise",
        value: "stakewise",
        logoURL: "https://icons.llama.fi/stakewise.png",
    },
    {
        label: "Ankr",
        value: "ankr",
        logoURL: "https://icons.llama.fi/ankr.jpg",
    },
    {
        label: "StakeHound",
        value: "stakehound",
        logoURL: "https://icons.llama.fi/stakehound.png",
    },
    {
        label: "Oxygen",
        value: "oxygen",
        logoURL: "https://icons.llama.fi/oxygen.jpg",
    },
    {
        label: "Ribbon",
        value: "ribbon",
        logoURL: "https://icons.llama.fi/ribbon-finance.png",
    },
    {
        label: "Yam Finance",
        value: "yam-finance",
        logoURL: "https://icons.llama.fi/yam-finance.png",
    },
    {
        label: "Orca",
        value: "orca",
        logoURL: "https://icons.llama.fi/orca.jpg",
    },
    {
        label: "Serum Swap",
        value: "serum-swap",
        logoURL: "https://icons.llama.fi/serum-swap.svg",
    },
    {
        label: "Opyn Gamma",
        value: "opyn-gamma",
        logoURL: "https://icons.llama.fi/opyn-gamma.jpg",
    },
    {
        label: "Mango Markets V3",
        value: "mango-markets-v3",
        logoURL: "https://icons.llama.fi/mango-markets-v3.png",
    },
    {
        label: "0.exchange",
        value: "0.exchange",
        logoURL: "https://icons.llama.fi/0.exchange.jpg",
    },
    {
        label: "YetiSwap",
        value: "yetiswap",
        logoURL: "https://icons.llama.fi/yetiswap.jpg",
    },
    {
        label: "Penguin Finance",
        value: "penguin-finance",
        logoURL: "https://icons.llama.fi/penguin-finance.png",
    },
    {
        label: "Integral",
        value: "integral",
        logoURL: "https://icons.llama.fi/integral.jpg",
    },
    {
        label: "Swapr",
        value: "swapr",
        logoURL: "https://icons.llama.fi/swapr.svg",
    },
    {
        label: "Lydia",
        value: "lydia",
        logoURL: "https://icons.llama.fi/lydia.jpg",
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
        label: "Hyper Finance",
        value: "hyper-finance",
        logoURL: "https://icons.llama.fi/hyper-finance.png",
    },
    {
        label: "Levinswap",
        value: "levinswap",
        logoURL: "https://icons.llama.fi/levinswap.jpg",
    },
    {
        label: "BondAppetit",
        value: "bondappetit",
        logoURL: "https://icons.llama.fi/bondappetit.jpg",
    },
    {
        label: "Nerve",
        value: "nerve",
        logoURL: "https://icons.llama.fi/nerve.png",
    },
    {
        label: "SpookySwap",
        value: "spookyswap",
        logoURL: "https://icons.llama.fi/spookyswap.jpg",
    },
    {
        label: "ZilSwap",
        value: "zilswap",
        logoURL: "https://icons.llama.fi/zilswap.jpg",
    },
    {
        label: "Flamingo Finance",
        value: "flamingo-finance",
        logoURL: "https://icons.llama.fi/flamingo-finance.jpg",
    },
    {
        label: "Quickswap Dex",
        value: "quickswap-dex",
        logoURL: "https://icons.llama.fi/quickswap-dex.jpg",
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
        label: "Belt Finance",
        value: "belt-finance",
        logoURL: "https://icons.llama.fi/belt-finance.png",
    },
    {
        label: "SpiritSwap AMM",
        value: "spiritswap-amm",
        logoURL: "https://icons.llama.fi/spiritswap.jpg",
    },
    {
        label: "Stacker Ventures",
        value: "stacker-ventures",
        logoURL: "https://icons.llama.fi/stacker-ventures.jpg",
    },
    {
        label: "ViperSwap",
        value: "viperswap",
        logoURL: "https://icons.llama.fi/viperswap.png",
    },
    {
        label: "Gondola Finance",
        value: "gondola-finance",
        logoURL: "https://icons.llama.fi/gondola-finance.jpg",
    },
    {
        label: "Tulip Protocol",
        value: "tulip-protocol",
        logoURL: "https://icons.llama.fi/tulip-protocol.png",
    },
    {
        label: "SecretSwap",
        value: "secretswap",
        logoURL: "https://icons.llama.fi/secretswap.png",
    },
    {
        label: "HyperJump",
        value: "hyperjump",
        logoURL: "https://icons.llama.fi/hyperjump.jpg",
    },
    {
        label: "Dfyn Network",
        value: "dfyn-network",
        logoURL: "https://icons.llama.fi/dfyn-network.jpg",
    },
    {
        label: "Convex Finance",
        value: "convex-finance",
        logoURL: "https://icons.llama.fi/convex-finance.jpg",
    },
    {
        label: "Depth",
        value: "depth",
        logoURL: "https://icons.llama.fi/depth.png",
    },
    {
        label: "Ram Protocol",
        value: "ram-protocol",
        logoURL: "https://icons.llama.fi/ram-protocol.svg",
    },
    {
        label: "Yogi Finance",
        value: "yogi-finance",
        logoURL: "https://icons.llama.fi/yogi-finance.svg",
    },
    {
        label: "Fluity",
        value: "fluity",
        logoURL: "https://icons.llama.fi/fluity.png",
    },
    {
        label: "Unicly",
        value: "unicly",
        logoURL: "https://icons.llama.fi/unicly.png",
    },
    {
        label: "MochiSwap",
        value: "mochiswap",
        logoURL: "https://icons.llama.fi/mochiswap.png",
    },
    {
        label: "Beefy",
        value: "beefy",
        logoURL: "https://icons.llama.fi/beefy.png",
    },
    {
        label: "YouSwap",
        value: "youswap",
        logoURL: "https://icons.llama.fi/youswap.jpg",
    },
    {
        label: "SteakBank Finance",
        value: "steakbank-finance",
        logoURL: "https://icons.llama.fi/steakbank-finance.jpg",
    },
    {
        label: "Sovryn Dex",
        value: "sovryn-dex",
        logoURL: "https://icons.llama.fi/sovryn-dex.png",
    },
    {
        label: "Aquarius",
        value: "aquarius",
        logoURL: "https://icons.llama.fi/aquarius.jpg",
    },
    {
        label: "MoneyOnChain",
        value: "moneyonchain",
        logoURL: "https://icons.llama.fi/moneyonchain.jpg",
    },
    {
        label: "Bao Masterchef V1",
        value: "bao-masterchef-v1",
        logoURL: "https://icons.llama.fi/bao-masterchef-v1.png",
    },
    {
        label: "O3 Swap",
        value: "o3-swap",
        logoURL: "https://icons.llama.fi/o3-swap.jpg",
    },
    {
        label: "MDEX",
        value: "mdex",
        logoURL: "https://icons.llama.fi/mdex.png",
    },
    {
        label: "Flashstake OLD",
        value: "flashstake-old",
        logoURL: "https://icons.llama.fi/flashstake-old.png",
    },
    {
        label: "Sifchain",
        value: "sifchain",
        logoURL: "https://icons.llama.fi/sifchain.png",
    },
    {
        label: "GMX V1",
        value: "gmx-v1",
        logoURL: "https://icons.llama.fi/gmx-v1.png",
    },
    {
        label: "Inverse Finance Frontier",
        value: "inverse-finance-frontier",
        logoURL: "https://icons.llama.fi/inverse-finance-frontier.jpg",
    },
    {
        label: "Lien",
        value: "lien",
        logoURL: "https://icons.llama.fi/lien.jpg",
    },
    {
        label: "Olympus DAO",
        value: "olympus-dao",
        logoURL: "https://icons.llama.fi/olympus-dao.jpg",
    },
    {
        label: "Nsure",
        value: "nsure",
        logoURL: "https://icons.llama.fi/nsure.jpg",
    },
    {
        label: "CompliFi",
        value: "complifi",
        logoURL: "https://icons.llama.fi/complifi.jpg",
    },
    {
        label: "Impermax Finance",
        value: "impermax-finance",
        logoURL: "https://icons.llama.fi/impermax-finance.png",
    },
    {
        label: "ZKSwap",
        value: "zkswap",
        logoURL: "https://icons.llama.fi/zkswap.jpg",
    },
    {
        label: "Alpaca Leveraged Yield Farming",
        value: "alpaca-leveraged-yield-farming",
        logoURL: "https://icons.llama.fi/alpaca-leveraged-yield-farming.jpg",
    },
    {
        label: "Yieldly",
        value: "yieldly",
        logoURL: "https://icons.llama.fi/yieldly.png",
    },
    {
        label: "Abracadabra",
        value: "abracadabra",
        logoURL: "https://icons.llama.fi/abracadabra.svg",
    },
    {
        label: "FilDA",
        value: "filda",
        logoURL: "https://icons.llama.fi/filda.jpg",
    },
    {
        label: "Injective Bridge",
        value: "injective-bridge",
        logoURL: "https://icons.llama.fi/injective.png",
    },
    {
        label: "CVI Finance",
        value: "cvi-finance",
        logoURL: "https://icons.llama.fi/cvi-finance.png",
    },
    {
        label: "Gravity Finance",
        value: "gravity-finance",
        logoURL: "https://icons.llama.fi/gravity-finance.png",
    },
    {
        label: "Iron Finance",
        value: "iron-finance",
        logoURL: "https://icons.llama.fi/iron-finance.jpg",
    },
    {
        label: "Armor",
        value: "armor",
        logoURL: "https://icons.llama.fi/armor.png",
    },
    {
        label: "InsurAce",
        value: "insurace",
        logoURL: "https://icons.llama.fi/insurace.jpg",
    },
    {
        label: "Gamma",
        value: "gamma",
        logoURL: "https://icons.llama.fi/gamma.jpg",
    },
    {
        label: "Dopple Finance",
        value: "dopple-finance",
        logoURL: "https://icons.llama.fi/dopple-finance.jpg",
    },
    {
        label: "Parrot Protocol",
        value: "parrot-protocol",
        logoURL: "https://icons.llama.fi/parrot-protocol.jpg",
    },
    {
        label: "Frax",
        value: "frax",
        logoURL: "https://icons.llama.fi/frax.jpg",
    },
    {
        label: "Whiteheart",
        value: "whiteheart",
        logoURL: "https://icons.llama.fi/whiteheart.png",
    },
    {
        label: "Perpetual Protocol",
        value: "perpetual-protocol",
        logoURL: "https://icons.llama.fi/perpetual-protocol.png",
    },
    {
        label: "xDollar",
        value: "xdollar",
        logoURL: "https://icons.llama.fi/xdollar.png",
    },
    {
        label: "Volmex",
        value: "volmex",
        logoURL: "https://icons.llama.fi/volmex.jpg",
    },
    {
        label: "Charm Finance",
        value: "charm-finance",
        logoURL: "https://icons.llama.fi/charm-finance.jpg",
    },
    {
        label: "DFX Finance",
        value: "dfx-finance",
        logoURL: "https://icons.llama.fi/dfx-finance.jpg",
    },
    {
        label: "PinkSwap",
        value: "pinkswap",
        logoURL: "https://icons.llama.fi/pinkswap.png",
    },
    {
        label: "Channels Finance",
        value: "channels-finance",
        logoURL: "https://icons.llama.fi/channels-finance.png",
    },
    {
        label: "YFDAI",
        value: "yfdai",
        logoURL: "https://icons.llama.fi/yfdai.svg",
    },
    {
        label: "Merlin",
        value: "merlin",
        logoURL: "https://icons.llama.fi/merlin.jpg",
    },
    {
        label: "KokomoSwap",
        value: "kokomoswap",
        logoURL: "https://icons.llama.fi/kokomoswap.jpg",
    },
    {
        label: "Rabbit Finance",
        value: "rabbit-finance",
        logoURL: "https://icons.llama.fi/rabbit-finance.jpg",
    },
    {
        label: "BiSwap V2",
        value: "biswap-v2",
        logoURL: "https://icons.llama.fi/biswap-v2.jpg",
    },
    {
        label: "Kine Finance",
        value: "kine-finance",
        logoURL: "https://icons.llama.fi/kine-finance.jpg",
    },
    {
        label: "Nerve Staking",
        value: "nerve-staking",
        logoURL: "https://icons.llama.fi/nerve-staking.jpg",
    },
    {
        label: "Tomb",
        value: "tomb",
        logoURL: "https://icons.llama.fi/tomb-finance.jpg",
    },
    {
        label: "Ethernity Chain",
        value: "ethernity-chain",
        logoURL: "https://icons.llama.fi/ethernity-chain.jpg",
    },
    {
        label: "MakiSwap",
        value: "makiswap",
        logoURL: "https://icons.llama.fi/makiswap.jpg",
    },
    {
        label: "Cardstarter",
        value: "cardstarter",
        logoURL: "https://icons.llama.fi/cardstarter.jpg",
    },
    {
        label: "LendHub",
        value: "lendhub",
        logoURL: "https://icons.llama.fi/lendhub.jpg",
    },
    {
        label: "Premia V2",
        value: "premia-v2",
        logoURL: "https://icons.llama.fi/premia-v2.jpg",
    },
    {
        label: "Pendle",
        value: "pendle",
        logoURL: "https://icons.llama.fi/pendle.jpg",
    },
    {
        label: "Osmosis DEX",
        value: "osmosis-dex",
        logoURL: "https://icons.llama.fi/osmosis-dex.jpg",
    },
    {
        label: "Firebird",
        value: "firebird",
        logoURL: "https://icons.llama.fi/firebird.jpg",
    },
    {
        label: "Meteora pools",
        value: "meteora-pools",
        logoURL: "https://icons.llama.fi/meteora.png",
    },
    {
        label: "PolyQuity",
        value: "polyquity",
        logoURL: "https://icons.llama.fi/polyquity.jpg",
    },
    {
        label: "Bearn",
        value: "bearn",
        logoURL: "https://icons.llama.fi/bearn.jpg",
    },
    {
        label: "NowSwap",
        value: "nowswap",
        logoURL: "https://icons.llama.fi/nowswap.jpg",
    },
    {
        label: "Adamant Finance",
        value: "adamant-finance",
        logoURL: "https://icons.llama.fi/adamant-finance.png",
    },
    {
        label: "Qilin",
        value: "qilin",
        logoURL: "https://icons.llama.fi/qilin.jpg",
    },
    {
        label: "PantherSwap",
        value: "pantherswap",
        logoURL: "https://icons.llama.fi/pantherswap.jpg",
    },
    {
        label: "WardenSwap",
        value: "wardenswap",
        logoURL: "https://icons.llama.fi/wardenswap.jpg",
    },
    {
        label: "APY Finance",
        value: "apy-finance",
        logoURL: "https://icons.llama.fi/apy-finance.jpg",
    },
    {
        label: "Reaper Farm",
        value: "reaper-farm",
        logoURL: "https://icons.llama.fi/reaper-farm.jpg",
    },
    {
        label: "Waka Finance",
        value: "waka-finance",
        logoURL: "https://icons.llama.fi/waka-finance.png",
    },
    {
        label: "Polydex",
        value: "polydex",
        logoURL: "https://icons.llama.fi/polydex.jpg",
    },
    {
        label: "ShibaSwap",
        value: "shibaswap",
        logoURL: "https://icons.llama.fi/shibaswap.jpg",
    },
    {
        label: "ApeSwap AMM",
        value: "apeswap-amm",
        logoURL: "https://icons.llama.fi/apeswap-amm.jpg",
    },
    {
        label: "Geyser",
        value: "geyser",
        logoURL: "https://icons.llama.fi/geyser.png",
    },
    {
        label: "Amun",
        value: "amun",
        logoURL: "https://icons.llama.fi/amun-tokens.png",
    },
    {
        label: "ApeRocket",
        value: "aperocket",
        logoURL: "https://icons.llama.fi/aperocket.png",
    },
    {
        label: "Hunny Finance",
        value: "hunny-finance",
        logoURL: "https://icons.llama.fi/hunny-finance.png",
    },
    {
        label: "Liquid Driver",
        value: "liquid-driver",
        logoURL: "https://icons.llama.fi/liquid-driver.png",
    },
    {
        label: "BXH",
        value: "bxh",
        logoURL: "https://icons.llama.fi/bxh.jpg",
    },
    {
        label: "Tokenlon",
        value: "tokenlon",
        logoURL: "https://icons.llama.fi/tokenlon.jpg",
    },
    {
        label: "DELV",
        value: "delv",
        logoURL: "https://icons.llama.fi/delv.jpg",
    },
    {
        label: "Mars Poolin",
        value: "mars-poolin",
        logoURL: "https://icons.llama.fi/mars-poolin.jpg",
    },
    {
        label: "JetFuel Finance",
        value: "jetfuel-finance",
        logoURL: "https://icons.llama.fi/jetfuel-finance.jpg",
    },
    {
        label: "CafeSwap",
        value: "cafeswap",
        logoURL: "https://icons.llama.fi/cafeswap.png",
    },
    {
        label: "Swamp Finance",
        value: "swamp-finance",
        logoURL: "https://icons.llama.fi/swamp-finance.png",
    },
    {
        label: "Pippi",
        value: "pippi",
        logoURL: "https://icons.llama.fi/pippi.png",
    },
    {
        label: "Thorchain",
        value: "thorchain",
        logoURL: "https://icons.llama.fi/thorchain.jpg",
    },
    {
        label: "Spectrum Protocol",
        value: "spectrum-protocol",
        logoURL: "https://icons.llama.fi/spectrum-protocol.jpg",
    },
    {
        label: "TreeDefi",
        value: "treedefi",
        logoURL: "https://icons.llama.fi/treedefi.png",
    },
    {
        label: "NAOS Finance",
        value: "naos-finance",
        logoURL: "https://icons.llama.fi/naos-finance.png",
    },
    {
        label: "WeStarter",
        value: "westarter",
        logoURL: "https://icons.llama.fi/westarter.png",
    },
    {
        label: "Solyard",
        value: "solyard",
        logoURL: "https://icons.llama.fi/solyard.png",
    },
    {
        label: "Saber",
        value: "saber",
        logoURL: "https://icons.llama.fi/saber.jpg",
    },
    {
        label: "Elk",
        value: "elk",
        logoURL: "https://icons.llama.fi/elk.jpg",
    },
    {
        label: "Paint Swap",
        value: "paint-swap",
        logoURL: "https://icons.llama.fi/paint-swap.png",
    },
    {
        label: "Bunicorn",
        value: "bunicorn",
        logoURL: "https://icons.llama.fi/bunicorn.png",
    },
    {
        label: "Deri Protocol",
        value: "deri-protocol",
        logoURL: "https://icons.llama.fi/deri-protocol.png",
    },
    {
        label: "Tranchess Yield",
        value: "tranchess-yield",
        logoURL: "https://icons.llama.fi/tranchess-yield.png",
    },
    {
        label: "Mint Club",
        value: "mint-club",
        logoURL: "https://icons.llama.fi/mint-club.png",
    },
    {
        label: "Origin Dollar",
        value: "origin-dollar",
        logoURL: "https://icons.llama.fi/origin-dollar.png",
    },
    {
        label: "DinoSwap",
        value: "dinoswap",
        logoURL: "https://icons.llama.fi/dinoswap.jpg",
    },
    {
        label: "BambooDeFi",
        value: "bamboodefi",
        logoURL: "https://icons.llama.fi/bamboodefi.png",
    },
    {
        label: "Acumen",
        value: "acumen",
        logoURL: "https://icons.llama.fi/acumen.jpg",
    },
    {
        label: "SUN.io",
        value: "sun.io",
        logoURL: "https://icons.llama.fi/sun.io.png",
    },
    {
        label: "Longdrink",
        value: "longdrink",
        logoURL: "https://icons.llama.fi/longdrink.png",
    },
    {
        label: "DAOventures",
        value: "daoventures",
        logoURL: "https://icons.llama.fi/daoventures.jpg",
    },
    {
        label: "Tarot",
        value: "tarot",
        logoURL: "https://icons.llama.fi/tarot.jpg",
    },
    {
        label: "Hop Protocol",
        value: "hop-protocol",
        logoURL: "https://icons.llama.fi/hop-protocol.jpg",
    },
    {
        label: "WitSwap",
        value: "witswap",
        logoURL: "https://icons.llama.fi/witswap.jpg",
    },
    {
        label: "Guard-Helmet",
        value: "guard-helmet",
        logoURL: "https://icons.llama.fi/guard-helmet.png",
    },
    {
        label: "Tokemak",
        value: "tokemak",
        logoURL: "https://icons.llama.fi/tokemak.jpg",
    },
    {
        label: "The Grand Banks",
        value: "the-grand-banks",
        logoURL: "https://icons.llama.fi/the-grand-banks.png",
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
        label: "Universe XYZ",
        value: "universe-xyz",
        logoURL: "https://icons.llama.fi/universe-xyz.jpg",
    },
    {
        label: "Kogefarm",
        value: "kogefarm",
        logoURL: "https://icons.llama.fi/kogefarm.png",
    },
    {
        label: "PolyDEX-Cryption Network",
        value: "polydex-cryption-network",
        logoURL: "https://icons.llama.fi/polydex-cryption-network.png",
    },
    {
        label: "CobraSwap",
        value: "cobraswap",
        logoURL: "https://icons.llama.fi/cobraswap.png",
    },
    {
        label: "MiningTycoon",
        value: "miningtycoon",
        logoURL: "https://icons.llama.fi/miningtycoon.png",
    },
    {
        label: "Illuvium",
        value: "illuvium",
        logoURL: "https://icons.llama.fi/illuvium.png",
    },
    {
        label: "Balanced",
        value: "balanced",
        logoURL: "https://icons.llama.fi/balanced.png",
    },
    {
        label: "QiDao",
        value: "qidao",
        logoURL: "https://icons.llama.fi/qidao.jpg",
    },
    {
        label: "Scream",
        value: "scream",
        logoURL: "https://icons.llama.fi/scream.png",
    },
    {
        label: "Karura Swap",
        value: "karura-swap",
        logoURL: "https://icons.llama.fi/karura-swap.jpg",
    },
    {
        label: "Karura Dollar (kUSD)",
        value: "karura-dollar-(kusd)",
        logoURL: "https://icons.llama.fi/karura-dollar.jpg",
    },
    {
        label: "Wild Credit",
        value: "wild-credit",
        logoURL: "https://icons.llama.fi/wild-credit.svg",
    },
    {
        label: "Back Finance",
        value: "back-finance",
        logoURL: "https://icons.llama.fi/back-finance.jpg",
    },
    {
        label: "ZooCoin",
        value: "zoocoin",
        logoURL: "https://icons.llama.fi/zoocoin.png",
    },
    {
        label: "Telcoin",
        value: "telcoin",
        logoURL: "https://icons.llama.fi/telcoin.png",
    },
    {
        label: "Fuji V1",
        value: "fuji-v1",
        logoURL: "https://icons.llama.fi/fuji-finance.png",
    },
    {
        label: "Solend",
        value: "solend",
        logoURL: "https://icons.llama.fi/solend.png",
    },
    {
        label: "Multiplier",
        value: "multiplier",
        logoURL: "https://icons.llama.fi/multiplier.jpg",
    },
    {
        label: "Ondo v1 (Legacy)",
        value: "ondo-v1-(legacy)",
        logoURL: "https://icons.llama.fi/ondo-v1-(legacy).png",
    },
    {
        label: "Planet Farm",
        value: "planet-farm",
        logoURL: "https://icons.llama.fi/planet-finance.png",
    },
    {
        label: "Augury Finance",
        value: "augury-finance",
        logoURL: "https://icons.llama.fi/augury-finance.jpg",
    },
    {
        label: "Gro",
        value: "gro",
        logoURL: "https://icons.llama.fi/gro.png",
    },
    {
        label: "Beta Finance",
        value: "beta-finance",
        logoURL: "https://icons.llama.fi/beta-finance.jpg",
    },
    {
        label: "Lixir Finance",
        value: "lixir-finance",
        logoURL: "https://icons.llama.fi/lixir-finance.png",
    },
    {
        label: "Vanilla",
        value: "vanilla",
        logoURL: "https://icons.llama.fi/vanilla.png",
    },
    {
        label: "Benqi Lending",
        value: "benqi-lending",
        logoURL: "https://icons.llama.fi/benqi-lending.jpg",
    },
    {
        label: "Trader Joe DEX",
        value: "trader-joe-dex",
        logoURL: "https://icons.llama.fi/trader-joe.png",
    },
    {
        label: "Port Finance",
        value: "port-finance",
        logoURL: "https://icons.llama.fi/port-finance.png",
    },
    {
        label: "Mensa Protocol",
        value: "mensa-protocol",
        logoURL: "https://icons.llama.fi/mensa-protocol.png",
    },
    {
        label: "Complus Network",
        value: "complus-network",
        logoURL: "https://icons.llama.fi/complus-network.png",
    },
    {
        label: "Avalaunch",
        value: "avalaunch",
        logoURL: "https://icons.llama.fi/avalaunch.png",
    },
    {
        label: "Baguette",
        value: "baguette",
        logoURL: "https://icons.llama.fi/baguette.png",
    },
    {
        label: "Canary",
        value: "canary",
        logoURL: "https://icons.llama.fi/canary.png",
    },
    {
        label: "Yield Yak Aggregator",
        value: "yield-yak-aggregator",
        logoURL: "https://icons.llama.fi/yield-yak-aggregator.png",
    },
    {
        label: "Asgard Finance",
        value: "asgard-finance",
        logoURL: "https://icons.llama.fi/asgard-finance.jpg",
    },
    {
        label: "SakePerp",
        value: "sakeperp",
        logoURL: "https://icons.llama.fi/sakeperp.png",
    },
    {
        label: "Yapeswap",
        value: "yapeswap",
        logoURL: "https://icons.llama.fi/yapeswap.png",
    },
    {
        label: "Shiba Fantom",
        value: "shiba-fantom",
        logoURL: "https://icons.llama.fi/shiba-fantom.svg",
    },
    {
        label: "KuSwap",
        value: "kuswap",
        logoURL: "https://icons.llama.fi/kuswap.png",
    },
    {
        label: "SonicSwap",
        value: "sonicswap",
        logoURL: "https://icons.llama.fi/sonicswap.png",
    },
    {
        label: "Shibance",
        value: "shibance",
        logoURL: "https://icons.llama.fi/shibance.png",
    },
    {
        label: "NFTX",
        value: "nftx",
        logoURL: "https://icons.llama.fi/nftx.jpg",
    },
    {
        label: "Marinade Liquid Staking",
        value: "marinade-liquid-staking",
        logoURL: "https://icons.llama.fi/marinade-finance.jpg",
    },
    {
        label: "TendieSwap",
        value: "tendieswap",
        logoURL: "https://icons.llama.fi/tendieswap.png",
    },
    {
        label: "unFederalReserve",
        value: "unfederalreserve",
        logoURL: "https://icons.llama.fi/unfederalreserve.png",
    },
    {
        label: "Sunny",
        value: "sunny",
        logoURL: "https://icons.llama.fi/sunny.svg",
    },
    {
        label: "Ubeswap",
        value: "ubeswap",
        logoURL: "https://icons.llama.fi/ubeswap.png",
    },
    {
        label: "Moola Market",
        value: "moola-market",
        logoURL: "https://icons.llama.fi/moola-market.jpg",
    },
    {
        label: "Plenty",
        value: "plenty",
        logoURL: "https://icons.llama.fi/plenty.png",
    },
    {
        label: "Terraswap",
        value: "terraswap",
        logoURL: "https://icons.llama.fi/terraswap.png",
    },
    {
        label: "Moonpot",
        value: "moonpot",
        logoURL: "https://icons.llama.fi/moonpot.svg",
    },
    {
        label: "Grim Finance",
        value: "grim-finance",
        logoURL: "https://icons.llama.fi/grim-finance.png",
    },
    {
        label: "JustLend",
        value: "justlend",
        logoURL: "https://icons.llama.fi/justlend.png",
    },
    {
        label: "HFIone",
        value: "hfione",
        logoURL: "https://icons.llama.fi/hfione.jpg",
    },
    {
        label: "Orion Protocol",
        value: "orion-protocol",
        logoURL: "https://icons.llama.fi/orion-protocol.png",
    },
    {
        label: "Float Protocol",
        value: "float-protocol",
        logoURL: "https://icons.llama.fi/float-protocol.png",
    },
    {
        label: "Pilot Protocol",
        value: "pilot-protocol",
        logoURL: "https://icons.llama.fi/pilot-protocol.png",
    },
    {
        label: "Polycat",
        value: "polycat",
        logoURL: "https://icons.llama.fi/polycat.png",
    },
    {
        label: "StakeSteak",
        value: "stakesteak",
        logoURL: "https://icons.llama.fi/stakesteak.png",
    },
    {
        label: "Robo-Vault",
        value: "robo-vault",
        logoURL: "https://icons.llama.fi/robo-vault.png",
    },
    {
        label: "Coinwind",
        value: "coinwind",
        logoURL: "https://icons.llama.fi/coinwind.png",
    },
    {
        label: "Lyra",
        value: "lyra",
        logoURL: "https://icons.llama.fi/lyra.jpg",
    },
    {
        label: "Mento",
        value: "mento",
        logoURL: "https://icons.llama.fi/mento.png",
    },
    {
        label: "Karura Liquid Staking",
        value: "karura-liquid-staking",
        logoURL: "https://icons.llama.fi/karura-liquid-staking.jpg",
    },
    {
        label: "Tetu Earn",
        value: "tetu-earn",
        logoURL: "https://icons.llama.fi/tetu.svg",
    },
    {
        label: "DefiBox",
        value: "defibox",
        logoURL: "https://icons.llama.fi/defibox.png",
    },
    {
        label: "KlaySwap",
        value: "klayswap",
        logoURL: "https://icons.llama.fi/klayswap.jpg",
    },
    {
        label: "Centrifuge",
        value: "centrifuge",
        logoURL: "https://icons.llama.fi/centrifuge.jpg",
    },
    {
        label: "Gaj Finance",
        value: "gaj-finance",
        logoURL: "https://icons.llama.fi/gaj-finance.png",
    },
    {
        label: "Frost Finance",
        value: "frost-finance",
        logoURL: "https://icons.llama.fi/frost-finance.png",
    },
    {
        label: "Feeder Finance",
        value: "feeder-finance",
        logoURL: "https://icons.llama.fi/feeder-finance.png",
    },
    {
        label: "QuipuSwap V1",
        value: "quipuswap-v1",
        logoURL: "https://icons.llama.fi/quipuswap.png",
    },
    {
        label: "Orion Money",
        value: "orion-money",
        logoURL: "https://icons.llama.fi/orion-money.jpg",
    },
    {
        label: "Wrap Protocol",
        value: "wrap-protocol",
        logoURL: "https://icons.llama.fi/wrap-protocol.png",
    },
    {
        label: "Qubit",
        value: "qubit",
        logoURL: "https://icons.llama.fi/qubit.jpg",
    },
    {
        label: "Kolibri",
        value: "kolibri",
        logoURL: "https://icons.llama.fi/kolibri.png",
    },
    {
        label: "Nuls",
        value: "nuls",
        logoURL: "https://icons.llama.fi/nuls.jpg",
    },
    {
        label: "Tezos Liquidity Baking",
        value: "tezos-liquidity-baking",
        logoURL: "https://icons.llama.fi/tezos-liquidity-baking.png",
    },
    {
        label: "Youves",
        value: "youves",
        logoURL: "https://icons.llama.fi/youves.png",
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
        label: "CryptoYieldFocus",
        value: "cryptoyieldfocus",
        logoURL: "https://icons.llama.fi/cryptoyieldfocus.jpg",
    },
    {
        label: "Ramp",
        value: "ramp",
        logoURL: "https://icons.llama.fi/ramp.png",
    },
    {
        label: "Cycle Finance",
        value: "cycle-finance",
        logoURL: "https://icons.llama.fi/cycle-finance.png",
    },
    {
        label: "Zabu Finance",
        value: "zabu-finance",
        logoURL: "https://icons.llama.fi/zabu-finance.png",
    },
    {
        label: "KSwap Finance",
        value: "kswap-finance",
        logoURL: "https://icons.llama.fi/kswap-finance.jpg",
    },
    {
        label: "Symmetric",
        value: "symmetric",
        logoURL: "https://icons.llama.fi/symmetric.png",
    },
    {
        label: "ShadeCash",
        value: "shadecash",
        logoURL: "https://icons.llama.fi/shadecash.jpg",
    },
    {
        label: "Avaware",
        value: "avaware",
        logoURL: "https://icons.llama.fi/avaware.png",
    },
    {
        label: "Kuu Finance",
        value: "kuu-finance",
        logoURL: "https://icons.llama.fi/kuu-finance.png",
    },
    {
        label: "Twindex",
        value: "twindex",
        logoURL: "https://icons.llama.fi/twindex.jpg",
    },
    {
        label: "OpenOcean",
        value: "openocean",
        logoURL: "https://icons.llama.fi/openocean.jpg",
    },
    {
        label: "Thales",
        value: "thales",
        logoURL: "https://icons.llama.fi/thales.png",
    },
    {
        label: "Teddy Cash",
        value: "teddy-cash",
        logoURL: "https://icons.llama.fi/teddy-cash.jpg",
    },
    {
        label: "Larix",
        value: "larix",
        logoURL: "https://icons.llama.fi/larix.jpg",
    },
    {
        label: "ArbiNYAN",
        value: "arbinyan",
        logoURL: "https://icons.llama.fi/arbinyan.jpg",
    },
    {
        label: "Alchemist",
        value: "alchemist",
        logoURL: "https://icons.llama.fi/alchemist.jpg",
    },
    {
        label: "Carbon Finance",
        value: "carbon-finance",
        logoURL: "https://icons.llama.fi/carbon-finance.jpg",
    },
    {
        label: "Moonswap",
        value: "moonswap",
        logoURL: "https://icons.llama.fi/moonswap.jpg",
    },
    {
        label: "Ref Finance",
        value: "ref-finance",
        logoURL: "https://icons.llama.fi/ref-finance.jpg",
    },
    {
        label: "NewDex",
        value: "newdex",
        logoURL: "https://icons.llama.fi/newdex.png",
    },
    {
        label: "CherrySwap",
        value: "cherryswap",
        logoURL: "https://icons.llama.fi/cherryswap.png",
    },
    {
        label: "SoulSwap",
        value: "soulswap",
        logoURL: "https://icons.llama.fi/soulswap.png",
    },
    {
        label: "ApolloDAO",
        value: "apollodao",
        logoURL: "https://icons.llama.fi/apollodao.jpg",
    },
    {
        label: "Omm",
        value: "omm",
        logoURL: "https://icons.llama.fi/omm.png",
    },
    {
        label: "pNetwork",
        value: "pnetwork",
        logoURL: "https://icons.llama.fi/pnetwork.jpg",
    },
    {
        label: "DeFis Network",
        value: "defis-network",
        logoURL: "https://icons.llama.fi/defis-network.png",
    },
    {
        label: "Vigor",
        value: "vigor",
        logoURL: "https://icons.llama.fi/vigor.png",
    },
    {
        label: "FreeRiver",
        value: "freeriver",
        logoURL: "https://icons.llama.fi/freeriver.jpg",
    },
    {
        label: "Solarbeam",
        value: "solarbeam",
        logoURL: "https://icons.llama.fi/solarbeam.png",
    },
    {
        label: "SeaDex",
        value: "seadex",
        logoURL: "https://icons.llama.fi/seadex.png",
    },
    {
        label: "Annex",
        value: "annex",
        logoURL: "https://icons.llama.fi/annex.jpg",
    },
    {
        label: "StormSwap",
        value: "stormswap",
        logoURL: "https://icons.llama.fi/stormswap.png",
    },
    {
        label: "Genshiro",
        value: "genshiro",
        logoURL: "https://icons.llama.fi/genshiro.jpg",
    },
    {
        label: "Defi Kingdoms",
        value: "defi-kingdoms",
        logoURL: "https://icons.llama.fi/defi-kingdoms.png",
    },
    {
        label: "Meta Pool Near",
        value: "meta-pool-near",
        logoURL: "https://icons.llama.fi/meta-pool-near.png",
    },
    {
        label: "Magic Land",
        value: "magic-land",
        logoURL: "https://icons.llama.fi/magic-land.png",
    },
    {
        label: "Dapp Account DAO",
        value: "dapp-account-dao",
        logoURL: "https://icons.llama.fi/dapp-account-dao.png",
    },
    {
        label: "Alita Finance",
        value: "alita-finance",
        logoURL: "https://icons.llama.fi/alita-finance.png",
    },
    {
        label: "Crystl Finance",
        value: "crystl-finance",
        logoURL: "https://icons.llama.fi/crystl-finance.png",
    },
    {
        label: "Timewarp",
        value: "timewarp",
        logoURL: "https://icons.llama.fi/timewarp.png",
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
        label: "MacaronSwap",
        value: "macaronswap",
        logoURL: "https://icons.llama.fi/macaronswap.jpg",
    },
    {
        label: "Newland",
        value: "newland",
        logoURL: "https://icons.llama.fi/newland.jpg",
    },
    {
        label: "Scientix",
        value: "scientix",
        logoURL: "https://icons.llama.fi/scientix.jpg",
    },
    {
        label: "Crunchy Network",
        value: "crunchy-network",
        logoURL: "https://icons.llama.fi/crunchy-network.png",
    },
    {
        label: "TEN Finance",
        value: "ten-finance",
        logoURL: "https://icons.llama.fi/ten-finance.jpg",
    },
    {
        label: "Aladdin DAO",
        value: "aladdin-dao",
        logoURL: "https://icons.llama.fi/aladdin-dao.png",
    },
    {
        label: "Cyclone",
        value: "cyclone",
        logoURL: "https://icons.llama.fi/cyclone.png",
    },
    {
        label: "Liqee",
        value: "liqee",
        logoURL: "https://icons.llama.fi/liqee.jpg",
    },
    {
        label: "Fuzz Finance",
        value: "fuzz-finance",
        logoURL: "https://icons.llama.fi/fuzz-finance.png",
    },
    {
        label: "Coinswap Space",
        value: "coinswap-space",
        logoURL: "https://icons.llama.fi/coinswap-space.jpg",
    },
    {
        label: "UnoRe",
        value: "unore",
        logoURL: "https://icons.llama.fi/unore.jpg",
    },
    {
        label: "Allbridge",
        value: "allbridge",
        logoURL: "https://icons.llama.fi/allbridge.jpg",
    },
    {
        label: "The Dragon's Lair",
        value: "the-dragons-lair",
        logoURL: "https://icons.llama.fi/the-dragons-lair.png",
    },
    {
        label: "iTrust Finance",
        value: "itrust-finance",
        logoURL: "https://icons.llama.fi/itrust-finance.png",
    },
    {
        label: "SashimiSwap",
        value: "sashimiswap",
        logoURL: "https://icons.llama.fi/sashimiswap.png",
    },
    {
        label: "Morpheus Swap",
        value: "morpheus-swap",
        logoURL: "https://icons.llama.fi/morpheus-swap.png",
    },
    {
        label: "Ante Finance",
        value: "ante-finance",
        logoURL: "https://icons.llama.fi/ante-finance.png",
    },
    {
        label: "1Swap",
        value: "1swap",
        logoURL: "https://icons.llama.fi/1swap.jpg",
    },
    {
        label: "Popsicle Finance",
        value: "popsicle-finance",
        logoURL: "https://icons.llama.fi/popsicle-finance.jpg",
    },
    {
        label: "Tidal Finance",
        value: "tidal-finance",
        logoURL: "https://icons.llama.fi/tidal-finance.png",
    },
    {
        label: "Maple",
        value: "maple",
        logoURL: "https://icons.llama.fi/maple.png",
    },
    {
        label: "Mobius Money",
        value: "mobius-money",
        logoURL: "https://icons.llama.fi/mobius-money.png",
    },
    {
        label: "Strike",
        value: "strike",
        logoURL: "https://icons.llama.fi/strike.jpg",
    },
    {
        label: "Parrot Defi",
        value: "parrot-defi",
        logoURL: "https://icons.llama.fi/parrot-defi.png",
    },
    {
        label: "Multichain",
        value: "multichain",
        logoURL: "https://icons.llama.fi/multichain.jpg",
    },
    {
        label: "Defi Yield Protocol",
        value: "defi-yield-protocol",
        logoURL: "https://icons.llama.fi/defi-yield-protocol.jpg",
    },
    {
        label: "Tranche Finance",
        value: "tranche-finance",
        logoURL: "https://icons.llama.fi/tranche-finance.jpg",
    },
    {
        label: "Defirex",
        value: "defirex",
        logoURL: "https://icons.llama.fi/defirex.jpg",
    },
    {
        label: "Convergence",
        value: "convergence",
        logoURL: "https://icons.llama.fi/convergence.jpg",
    },
    {
        label: "Flux Protocol",
        value: "flux-protocol",
        logoURL: "https://icons.llama.fi/flux-protocol.jpg",
    },
    {
        label: "BabySwap",
        value: "babyswap",
        logoURL: "https://icons.llama.fi/babyswap.png",
    },
    {
        label: "ShapeShift",
        value: "shapeshift",
        logoURL: "https://icons.llama.fi/shapeshift.jpg",
    },
    {
        label: "Cub Finance",
        value: "cub-finance",
        logoURL: "https://icons.llama.fi/cub-finance.svg",
    },
    {
        label: "Value Liquid",
        value: "value-liquid",
        logoURL: "https://icons.llama.fi/value-liquid.jpg",
    },
    {
        label: "Warp Protocol",
        value: "warp-protocol",
        logoURL: "https://icons.llama.fi/warp-protocol.jpg",
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
        label: "Sherlock",
        value: "sherlock",
        logoURL: "https://icons.llama.fi/sherlock.png",
    },
    {
        label: "Telos Swap",
        value: "telos-swap",
        logoURL: "https://icons.llama.fi/telos-swap.png",
    },
    {
        label: "RocketSwap",
        value: "rocketswap",
        logoURL: "https://icons.llama.fi/rocketswap.jpg",
    },
    {
        label: "Hundred Finance",
        value: "hundred-finance",
        logoURL: "https://icons.llama.fi/hundred-finance.jpg",
    },
    {
        label: "Cap",
        value: "cap",
        logoURL: "https://icons.llama.fi/cap.jpg",
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
        label: "Neutrino",
        value: "neutrino",
        logoURL: "https://icons.llama.fi/neutrino.png",
    },
    {
        label: "Vires Finance",
        value: "vires-finance",
        logoURL: "https://icons.llama.fi/vires-finance.png",
    },
    {
        label: "Swop",
        value: "swop",
        logoURL: "https://icons.llama.fi/swop.png",
    },
    {
        label: "WX Network",
        value: "wx-network",
        logoURL: "https://icons.llama.fi/wx-network.png",
    },
    {
        label: "BNBMiner Finance",
        value: "bnbminer-finance",
        logoURL: "https://icons.llama.fi/bnbminer-finance.png",
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
        label: "Kava Swap",
        value: "kava-swap",
        logoURL: "https://icons.llama.fi/kava-swap.jpg",
    },
    {
        label: "Vee Finance",
        value: "vee-finance",
        logoURL: "https://icons.llama.fi/vee-finance.png",
    },
    {
        label: "Francium",
        value: "francium",
        logoURL: "https://icons.llama.fi/francium.png",
    },
    {
        label: "Trava Finance",
        value: "trava-finance",
        logoURL: "https://icons.llama.fi/trava-finance.jpg",
    },
    {
        label: "Clipper",
        value: "clipper",
        logoURL: "https://icons.llama.fi/clipper.jpg",
    },
    {
        label: "Composable Finance",
        value: "composable-finance",
        logoURL: "https://icons.llama.fi/composable-finance.jpg",
    },
    {
        label: "Paladin Vote",
        value: "paladin-vote",
        logoURL: "https://icons.llama.fi/paladin-vote.jpg",
    },
    {
        label: "Arbi's Finance",
        value: "arbis-finance",
        logoURL: "https://icons.llama.fi/arbis-finance.jpg",
    },
    {
        label: "Reserve",
        value: "reserve",
        logoURL: "https://icons.llama.fi/reserve.jpg",
    },
    {
        label: "Mean Finance",
        value: "mean-finance",
        logoURL: "https://icons.llama.fi/mean-finance.jpg",
    },
    {
        label: "Float",
        value: "float",
        logoURL: "https://icons.llama.fi/float.png",
    },
    {
        label: "Cozy V1",
        value: "cozy-v1",
        logoURL: "https://icons.llama.fi/cozy-finance.png",
    },
    {
        label: "Huckleberry AMM",
        value: "huckleberry-amm",
        logoURL: "https://icons.llama.fi/huckleberry-amm.png",
    },
    {
        label: "Beanstalk",
        value: "beanstalk",
        logoURL: "https://icons.llama.fi/beanstalk.jpg",
    },
    {
        label: "FoxSwap",
        value: "foxswap",
        logoURL: "https://icons.llama.fi/foxswap.jpg",
    },
    {
        label: "TotemFi",
        value: "totemfi",
        logoURL: "https://icons.llama.fi/totemfi.png",
    },
    {
        label: "Singular Farm",
        value: "singular-farm",
        logoURL: "https://icons.llama.fi/singular-farm.png",
    },
    {
        label: "Blizzard",
        value: "blizzard",
        logoURL: "https://icons.llama.fi/blizzard.jpg",
    },
    {
        label: "Keep3r Network",
        value: "keep3r-network",
        logoURL: "https://icons.llama.fi/keep3r-network.jpg",
    },
    {
        label: "SYNC Network",
        value: "sync-network",
        logoURL: "https://icons.llama.fi/sync-network.png",
    },
    {
        label: "Meso Finance",
        value: "meso-finance",
        logoURL: "https://icons.llama.fi/meso-finance.png",
    },
    {
        label: "EnterDAO",
        value: "enterdao",
        logoURL: "https://icons.llama.fi/enterdao.png",
    },
    {
        label: "KingDefi",
        value: "kingdefi",
        logoURL: "https://icons.llama.fi/kingdefi.png",
    },
    {
        label: "Arrakis V1",
        value: "arrakis-v1",
        logoURL: "https://icons.llama.fi/arrakis-v1.jpg",
    },
    {
        label: "Bumper Finance",
        value: "bumper-finance",
        logoURL: "https://icons.llama.fi/bumper-finance.jpg",
    },
    {
        label: "Geist Finance",
        value: "geist-finance",
        logoURL: "https://icons.llama.fi/geist-finance.jpg",
    },
    {
        label: "PadSwap",
        value: "padswap",
        logoURL: "https://icons.llama.fi/padswap.svg",
    },
    {
        label: "LatteSwap",
        value: "latteswap",
        logoURL: "https://icons.llama.fi/latteswap.png",
    },
    {
        label: "UniFi",
        value: "unifi",
        logoURL: "https://icons.llama.fi/unifi.jpg",
    },
    {
        label: "Jet V1",
        value: "jet-v1",
        logoURL: "https://icons.llama.fi/jet.jpg",
    },
    {
        label: "Alkemi",
        value: "alkemi",
        logoURL: "https://icons.llama.fi/alkemi.png",
    },
    {
        label: "SwapMatic",
        value: "swapmatic",
        logoURL: "https://icons.llama.fi/swapmatic.jpg",
    },
    {
        label: "Augmented Finance",
        value: "augmented-finance",
        logoURL: "https://icons.llama.fi/augmented-finance.svg",
    },
    {
        label: "CHFRY Finance",
        value: "chfry-finance",
        logoURL: "https://icons.llama.fi/chfry-finance.png",
    },
    {
        label: "EmiSwap",
        value: "emiswap",
        logoURL: "https://icons.llama.fi/emiswap.png",
    },
    {
        label: "Atrix",
        value: "atrix",
        logoURL: "https://icons.llama.fi/atrix.png",
    },
    {
        label: "Beethoven X",
        value: "beethoven-x",
        logoURL: "https://icons.llama.fi/beethoven-x.png",
    },
    {
        label: "Almond",
        value: "almond",
        logoURL: "https://icons.llama.fi/almond.svg",
    },
    {
        label: "Sapphire Defi",
        value: "sapphire-defi",
        logoURL: "https://icons.llama.fi/sapphire-defi.jpg",
    },
    {
        label: "Synapse",
        value: "synapse",
        logoURL: "https://icons.llama.fi/synapse.png",
    },
    {
        label: "Only1",
        value: "only1",
        logoURL: "https://icons.llama.fi/only1.svg",
    },
    {
        label: "JetSwap",
        value: "jetswap",
        logoURL: "https://icons.llama.fi/jetswap.png",
    },
    {
        label: "Dopex SSOV",
        value: "dopex-ssov",
        logoURL: "https://icons.llama.fi/dopex-ssov.jpg",
    },
    {
        label: "MochiFi",
        value: "mochifi",
        logoURL: "https://icons.llama.fi/mochifi.png",
    },
    {
        label: "Artemis Protocol",
        value: "artemis-protocol",
        logoURL: "https://icons.llama.fi/artemis-protocol.png",
    },
    {
        label: "Pods Finance",
        value: "pods-finance",
        logoURL: "https://icons.llama.fi/pods-finance.jpg",
    },
    {
        label: "OakFarm",
        value: "oakfarm",
        logoURL: "https://icons.llama.fi/oakfarm.png",
    },
    {
        label: "Multi-Chain Miner",
        value: "multi-chain-miner",
        logoURL: "https://icons.llama.fi/multi-chain-miner.jpg",
    },
    {
        label: "OrcaDAO",
        value: "orcadao",
        logoURL: "https://icons.llama.fi/orcadao.png",
    },
    {
        label: "Mars Ecosystem",
        value: "mars-ecosystem",
        logoURL: "https://icons.llama.fi/mars-ecosystem.png",
    },
    {
        label: "Shield",
        value: "shield",
        logoURL: "https://icons.llama.fi/shield.png",
    },
    {
        label: "CarbonSwap",
        value: "carbonswap",
        logoURL: "https://icons.llama.fi/carbonswap.jpg",
    },
    {
        label: "FODL Finance",
        value: "fodl-finance",
        logoURL: "https://icons.llama.fi/fodl-finance.png",
    },
    {
        label: "Fegex",
        value: "fegex",
        logoURL: "https://icons.llama.fi/fegex.png",
    },
    {
        label: "Aavegotchi",
        value: "aavegotchi",
        logoURL: "https://icons.llama.fi/aavegotchi.png",
    },
    {
        label: "RskSwap",
        value: "rskswap",
        logoURL: "https://icons.llama.fi/rskswap.jpg",
    },
    {
        label: "Dark Matter",
        value: "dark-matter",
        logoURL: "https://icons.llama.fi/dark-matter.jpg",
    },
    {
        label: "Phoenix Finance",
        value: "phoenix-finance",
        logoURL: "https://icons.llama.fi/phoenix-finance.png",
    },
    {
        label: "BorgSwap",
        value: "borgswap",
        logoURL: "https://icons.llama.fi/borgswap.png",
    },
    {
        label: "JSwap",
        value: "jswap",
        logoURL: "https://icons.llama.fi/jswap.png",
    },
    {
        label: "UniFarm",
        value: "unifarm",
        logoURL: "https://icons.llama.fi/unifarm.jpg",
    },
    {
        label: "Tinyman",
        value: "tinyman",
        logoURL: "https://icons.llama.fi/tinyman.jpg",
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
        label: "GoSwap",
        value: "goswap",
        logoURL: "https://icons.llama.fi/goswap.jpg",
    },
    {
        label: "Hpdex",
        value: "hpdex",
        logoURL: "https://icons.llama.fi/hpdex.svg",
    },
    {
        label: "Tesseract",
        value: "tesseract",
        logoURL: "https://icons.llama.fi/tesseract.jpg",
    },
    {
        label: "YEL Finance",
        value: "yel-finance",
        logoURL: "https://icons.llama.fi/yel-finance.png",
    },
    {
        label: "JaguarSwap",
        value: "jaguarswap",
        logoURL: "https://icons.llama.fi/jaguarswap.jpg",
    },
    {
        label: "HaloDAO",
        value: "halodao",
        logoURL: "https://icons.llama.fi/halodao.png",
    },
    {
        label: "Kalata",
        value: "kalata",
        logoURL: "https://icons.llama.fi/kalata.png",
    },
    {
        label: "SUNSwap V1",
        value: "sunswap-v1",
        logoURL: "https://icons.llama.fi/sunswap-v1.jpg",
    },
    {
        label: "JustStables",
        value: "juststables",
        logoURL: "https://icons.llama.fi/juststables.png",
    },
    {
        label: "HurricaneSwap",
        value: "hurricaneswap",
        logoURL: "https://icons.llama.fi/hurricaneswap.jpg",
    },
    {
        label: "Superfluid",
        value: "superfluid",
        logoURL: "https://icons.llama.fi/superfluid.png",
    },
    {
        label: "JustCryptos",
        value: "justcryptos",
        logoURL: "https://icons.llama.fi/justcryptos.png",
    },
    {
        label: "Dinosaur Eggs",
        value: "dinosaur-eggs",
        logoURL: "https://icons.llama.fi/dinosaur-eggs.svg",
    },
    {
        label: "Agave",
        value: "agave",
        logoURL: "https://icons.llama.fi/agave.jpg",
    },
    {
        label: "Cook Finance",
        value: "cook-finance",
        logoURL: "https://icons.llama.fi/cook-finance.jpg",
    },
    {
        label: "Polly Finance",
        value: "polly-finance",
        logoURL: "https://icons.llama.fi/polly-finance.png",
    },
    {
        label: "Poof Cash",
        value: "poof-cash",
        logoURL: "https://icons.llama.fi/poof-cash.png",
    },
    {
        label: "Behodler",
        value: "behodler",
        logoURL: "https://icons.llama.fi/behodler.svg",
    },
    {
        label: "Coffin Finance",
        value: "coffin-finance",
        logoURL: "https://icons.llama.fi/coffin-finance.png",
    },
    {
        label: "Goldfinch",
        value: "goldfinch",
        logoURL: "https://icons.llama.fi/goldfinch.png",
    },
    {
        label: "Chainge Finance",
        value: "chainge-finance",
        logoURL: "https://icons.llama.fi/chainge-finance.png",
    },
    {
        label: "TTswap",
        value: "ttswap",
        logoURL: "https://icons.llama.fi/ttswap.png",
    },
    {
        label: "YSL.IO",
        value: "ysl.io",
        logoURL: "https://icons.llama.fi/ysl.jpg",
    },
    {
        label: "LuaSwap",
        value: "luaswap",
        logoURL: "https://icons.llama.fi/luaswap.jpg",
    },
    {
        label: "pSTAKE Finance",
        value: "pstake-finance",
        logoURL: "https://icons.llama.fi/pstake-finance.png",
    },
    {
        label: "Squid-Defi",
        value: "squid-defi",
        logoURL: "https://icons.llama.fi/squid-defi.png",
    },
    {
        label: "Polymarket",
        value: "polymarket",
        logoURL: "https://icons.llama.fi/polymarket.jpg",
    },
    {
        label: "Kaidex",
        value: "kaidex",
        logoURL: "https://icons.llama.fi/kaidex.png",
    },
    {
        label: "Polkaswap",
        value: "polkaswap",
        logoURL: "https://icons.llama.fi/polkaswap.png",
    },
    {
        label: "Voltage AMM",
        value: "voltage-amm",
        logoURL: "https://icons.llama.fi/voltage-amm.jpg",
    },
    {
        label: "SmartCoin",
        value: "smartcoin",
        logoURL: "https://icons.llama.fi/smrt.png",
    },
    {
        label: "Billion Happiness",
        value: "billion-happiness",
        logoURL: "https://icons.llama.fi/billion-happiness.png",
    },
    {
        label: "Decubate",
        value: "decubate",
        logoURL: "https://icons.llama.fi/decubate.png",
    },
    {
        label: "Alium Swap",
        value: "alium-swap",
        logoURL: "https://icons.llama.fi/alium.png",
    },
    {
        label: "Universe Finance",
        value: "universe-finance",
        logoURL: "https://icons.llama.fi/universe-finance.png",
    },
    {
        label: "Nasdex",
        value: "nasdex",
        logoURL: "https://icons.llama.fi/nasdex.png",
    },
    {
        label: "Mycelium Perpetual Pools",
        value: "mycelium-perpetual-pools",
        logoURL: "https://icons.llama.fi/mycelium-perpetual-pools.jpg",
    },
    {
        label: "Summit Defi",
        value: "summit-defi",
        logoURL: "https://icons.llama.fi/summit-defi.png",
    },
    {
        label: "Potluck Protocol",
        value: "potluck-protocol",
        logoURL: "https://icons.llama.fi/potluck-protocol.png",
    },
    {
        label: "handle.fi",
        value: "handle.fi",
        logoURL: "https://icons.llama.fi/handle.fi.png",
    },
    {
        label: "BiShares",
        value: "bishares",
        logoURL: "https://icons.llama.fi/bishares.jpg",
    },
    {
        label: "Solo Top",
        value: "solo-top",
        logoURL: "https://icons.llama.fi/solo-top.png",
    },
    {
        label: "ScareCrow Finance",
        value: "scarecrow-finance",
        logoURL: "https://icons.llama.fi/scarecrow.png",
    },
    {
        label: "DefiPlaza",
        value: "defiplaza",
        logoURL: "https://icons.llama.fi/defiplaza.svg",
    },
    {
        label: "AnchorSwap",
        value: "anchorswap",
        logoURL: "https://icons.llama.fi/anchorswap.png",
    },
    {
        label: "Exodia",
        value: "exodia",
        logoURL: "https://icons.llama.fi/exodia.png",
    },
    {
        label: "Synthetify",
        value: "synthetify",
        logoURL: "https://icons.llama.fi/synthetify.png",
    },
    {
        label: "Bouje Finance",
        value: "bouje-finance",
        logoURL: "https://icons.llama.fi/bouje.png",
    },
    {
        label: "Stabilize",
        value: "stabilize",
        logoURL: "https://icons.llama.fi/stabilizefi.png",
    },
    {
        label: "OpenSwap",
        value: "openswap",
        logoURL: "https://icons.llama.fi/openswap.png",
    },
    {
        label: "BecoSwap",
        value: "becoswap",
        logoURL: "https://icons.llama.fi/becoswap.png",
    },
    {
        label: "aSOL",
        value: "asol",
        logoURL: "https://icons.llama.fi/asol.png",
    },
    {
        label: "Dino.Exchange",
        value: "dino.exchange",
        logoURL: "https://icons.llama.fi/dino.exchange.jpg",
    },
    {
        label: "Defi Halal",
        value: "defi-halal",
        logoURL: "https://icons.llama.fi/defi-halal.png",
    },
    {
        label: "Aldrin",
        value: "aldrin",
        logoURL: "https://icons.llama.fi/aldrin.png",
    },
    {
        label: "Elephantdex",
        value: "elephantdex",
        logoURL: "https://icons.llama.fi/elephantdex.png",
    },
    {
        label: "Vaulty Finance",
        value: "vaulty-finance",
        logoURL: "https://icons.llama.fi/vaulty-finance.jpg",
    },
    {
        label: "Furucombo",
        value: "furucombo",
        logoURL: "https://icons.llama.fi/furucombo.png",
    },
    {
        label: "Neku",
        value: "neku",
        logoURL: "https://icons.llama.fi/neku.png",
    },
    {
        label: "Tranquil Finance",
        value: "tranquil-finance",
        logoURL: "https://icons.llama.fi/tranq.svg",
    },
    {
        label: "Atlantis Loans",
        value: "atlantis-loans",
        logoURL: "https://icons.llama.fi/atlantis-loans.png",
    },
    {
        label: "Nileriver",
        value: "nileriver",
        logoURL: "https://icons.llama.fi/nileriver.png",
    },
    {
        label: "MuesliSwap",
        value: "muesliswap",
        logoURL: "https://icons.llama.fi/muesliswap.jpg",
    },
    {
        label: "MistSwap",
        value: "mistswap",
        logoURL: "https://icons.llama.fi/mistswap.png",
    },
    {
        label: "BenSwap",
        value: "benswap",
        logoURL: "https://icons.llama.fi/benswap.jpg",
    },
    {
        label: "Fractional Art",
        value: "fractional-art",
        logoURL: "https://icons.llama.fi/fractional-art.jpg",
    },
    {
        label: "Umami Finance",
        value: "umami-finance",
        logoURL: "https://icons.llama.fi/umami-finance.png",
    },
    {
        label: "Nexus Protocol",
        value: "nexus-protocol",
        logoURL: "https://icons.llama.fi/nexus-protocol.jpg",
    },
    {
        label: "RealT Tokens",
        value: "realt-tokens",
        logoURL: "https://icons.llama.fi/realt.png",
    },
    {
        label: "BossSwap",
        value: "bossswap",
        logoURL: "https://icons.llama.fi/bossswap.png",
    },
    {
        label: "Arrow",
        value: "arrow",
        logoURL: "https://icons.llama.fi/arrow.png",
    },
    {
        label: "Angle",
        value: "angle",
        logoURL: "https://icons.llama.fi/angle.jpg",
    },
    {
        label: "Brahma",
        value: "brahma",
        logoURL: "https://icons.llama.fi/brahma.jpg",
    },
    {
        label: "Spartacus",
        value: "spartacus",
        logoURL: "https://icons.llama.fi/spartacus.jpg",
    },
    {
        label: "EggTartSwap",
        value: "eggtartswap",
        logoURL: "https://icons.llama.fi/eggtartswap.png",
    },
    {
        label: "Apricot Finance",
        value: "apricot-finance",
        logoURL: "https://icons.llama.fi/apricot-finance.jpg",
    },
    {
        label: "Klima DAO",
        value: "klima-dao",
        logoURL: "https://icons.llama.fi/klima-dao.jpg",
    },
    {
        label: "Polywhale Finance",
        value: "polywhale-finance",
        logoURL: "https://icons.llama.fi/polywhale.png",
    },
    {
        label: "AtmosSoft",
        value: "atmossoft",
        logoURL: "https://icons.llama.fi/atmossoft.jpg",
    },
    {
        label: "Trisolaris",
        value: "trisolaris",
        logoURL: "https://icons.llama.fi/trisolaris.jpg",
    },
    {
        label: "LootSwap",
        value: "lootswap",
        logoURL: "https://icons.llama.fi/lootswap.jpg",
    },
    {
        label: "Bagels Finance",
        value: "bagels-finance",
        logoURL: "https://icons.llama.fi/bagel-finance.png",
    },
    {
        label: "Squid Stake",
        value: "squid-stake",
        logoURL: "https://icons.llama.fi/squid-stake.jpg",
    },
    {
        label: "Bridge Mutual",
        value: "bridge-mutual",
        logoURL: "https://icons.llama.fi/bridge-mutual.png",
    },
    {
        label: "PolygonFarm Finance",
        value: "polygonfarm-finance",
        logoURL: "https://icons.llama.fi/polygonfarm-finance.png",
    },
    {
        label: "Pinyottas",
        value: "pinyottas",
        logoURL: "https://icons.llama.fi/pinyottas.jpg",
    },
    {
        label: "Cashio",
        value: "cashio",
        logoURL: "https://icons.llama.fi/cashio.png",
    },
    {
        label: "OolongSwap",
        value: "oolongswap",
        logoURL: "https://icons.llama.fi/oolongswap.jpg",
    },
    {
        label: "SenpaiSwap",
        value: "senpaiswap",
        logoURL: "https://icons.llama.fi/senpaiswap.jpg",
    },
    {
        label: "Draco Force",
        value: "draco-force",
        logoURL: "https://icons.llama.fi/draco-force.png",
    },
    {
        label: "Katana DEX",
        value: "katana-dex",
        logoURL: "https://icons.llama.fi/katana.jpg",
    },
    {
        label: "Adena Finance",
        value: "adena-finance",
        logoURL: "https://icons.llama.fi/adena-finance.png",
    },
    {
        label: "Rubicon",
        value: "rubicon",
        logoURL: "https://icons.llama.fi/rubicon.jpg",
    },
    {
        label: "ZigZag",
        value: "zigzag",
        logoURL: "https://icons.llama.fi/zigzag.jpg",
    },
    {
        label: "cBridge",
        value: "cbridge",
        logoURL: "https://icons.llama.fi/cbridge.jpg",
    },
    {
        label: "SquidDao",
        value: "squiddao",
        logoURL: "https://icons.llama.fi/squiddao.jpg",
    },
    {
        label: "Ottopia",
        value: "ottopia",
        logoURL: "https://icons.llama.fi/ottopia.png",
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
        label: "Glide Finance",
        value: "glide-finance",
        logoURL: "https://icons.llama.fi/glide-finance.jpg",
    },
    {
        label: "Blizz Finance",
        value: "blizz-finance",
        logoURL: "https://icons.llama.fi/blizz-finance.png",
    },
    {
        label: "Swift Finance",
        value: "swift-finance",
        logoURL: "https://icons.llama.fi/swift-finance.png",
    },
    {
        label: "PolyYeld Finance",
        value: "polyyeld-finance",
        logoURL: "https://icons.llama.fi/polyyeld.png",
    },
    {
        label: "Zenlink AMM",
        value: "zenlink-amm",
        logoURL: "https://icons.llama.fi/zenlink-amm.png",
    },
    {
        label: "Kebab Finance",
        value: "kebab-finance",
        logoURL: "https://icons.llama.fi/kebab-finance.png",
    },
    {
        label: "EmpireDEX",
        value: "empiredex",
        logoURL: "https://icons.llama.fi/empire-dex.jpg",
    },
    {
        label: "Loop Finance",
        value: "loop-finance",
        logoURL: "https://icons.llama.fi/loop-finance.jpg",
    },
    {
        label: "PureSwap",
        value: "pureswap",
        logoURL: "https://icons.llama.fi/pureswap.jpg",
    },
    {
        label: "xSigma",
        value: "xsigma",
        logoURL: "https://icons.llama.fi/xsigma.jpg",
    },
    {
        label: "CashCow Finance",
        value: "cashcow-finance",
        logoURL: "https://icons.llama.fi/cashcow-finance.jpg",
    },
    {
        label: "CashCow Protocol",
        value: "cashcow-protocol",
        logoURL: "https://icons.llama.fi/cashcow-protocol.jpg",
    },
    {
        label: "Helios Prime",
        value: "helios-prime",
        logoURL: "https://icons.llama.fi/helios-prime.png",
    },
    {
        label: "Doki Doki Finance",
        value: "doki-doki-finance",
        logoURL: "https://icons.llama.fi/dokidoki.svg",
    },
    {
        label: "Undead Finance",
        value: "undead-finance",
        logoURL: "https://icons.llama.fi/undead-finance.png",
    },
    {
        label: "FantomPup",
        value: "fantompup",
        logoURL: "https://icons.llama.fi/fantompup.png",
    },
    {
        label: "TomoFinance",
        value: "tomofinance",
        logoURL: "https://icons.llama.fi/tomofinance.jpg",
    },
    {
        label: "Euphoria",
        value: "euphoria",
        logoURL: "https://icons.llama.fi/euphoria.png",
    },
    {
        label: "NFT20",
        value: "nft20",
        logoURL: "https://icons.llama.fi/nft20.png",
    },
    {
        label: "MinMax Finance",
        value: "minmax-finance",
        logoURL: "https://icons.llama.fi/minmax-finance.png",
    },
    {
        label: "Layer2 Finance",
        value: "layer2-finance",
        logoURL: "https://icons.llama.fi/layer2-finance.png",
    },
    {
        label: "Crodex",
        value: "crodex",
        logoURL: "https://icons.llama.fi/crodex.jpg",
    },
    {
        label: "Standard Protocol",
        value: "standard-protocol",
        logoURL: "https://icons.llama.fi/standard-protocol.jpg",
    },
    {
        label: "Revest Finance",
        value: "revest-finance",
        logoURL: "https://icons.llama.fi/revest-finance.jpg",
    },
    {
        label: "VVS Standard",
        value: "vvs-standard",
        logoURL: "https://icons.llama.fi/vvs-standard.jpg",
    },
    {
        label: "Hector Treasury",
        value: "hector-treasury",
        logoURL: "https://icons.llama.fi/hector-amm.jpg",
    },
    {
        label: "ZoomSwap",
        value: "zoomswap",
        logoURL: "https://icons.llama.fi/zoomswap.jpg",
    },
    {
        label: "BSCStation",
        value: "bscstation",
        logoURL: "https://icons.llama.fi/bsc-station.png",
    },
    {
        label: "Suterusu",
        value: "suterusu",
        logoURL: "https://icons.llama.fi/suterusu.jpg",
    },
    {
        label: "CronaSwap",
        value: "cronaswap",
        logoURL: "https://icons.llama.fi/cronaswap.png",
    },
    {
        label: "ArenaSwap",
        value: "arenaswap",
        logoURL: "https://icons.llama.fi/arenaswap.jpg",
    },
    {
        label: "Component",
        value: "component",
        logoURL: "https://icons.llama.fi/component.png",
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
        label: "SWAPP",
        value: "swapp",
        logoURL: "https://icons.llama.fi/swapp.jpg",
    },
    {
        label: "Matrix Farm",
        value: "matrix-farm",
        logoURL: "https://icons.llama.fi/matrix-farm.png",
    },
    {
        label: "Unirex Finance",
        value: "unirex-finance",
        logoURL: "https://icons.llama.fi/unirex-finance.png",
    },
    {
        label: "ZYXSwap",
        value: "zyxswap",
        logoURL: "https://icons.llama.fi/zyxswap.png",
    },
    {
        label: "Axial",
        value: "axial",
        logoURL: "https://icons.llama.fi/axial.png",
    },
    {
        label: "KLend",
        value: "klend",
        logoURL: "https://icons.llama.fi/klend.jpg",
    },
    {
        label: "PhotonSwap Finance",
        value: "photonswap-finance",
        logoURL: "https://icons.llama.fi/photonswap-finance.jpg",
    },
    {
        label: "Talent Protocol",
        value: "talent-protocol",
        logoURL: "https://icons.llama.fi/talent-protocol.png",
    },
    {
        label: "Capital DAO",
        value: "capital-dao",
        logoURL: "https://icons.llama.fi/capital-dao.png",
    },
    {
        label: "Polyroll",
        value: "polyroll",
        logoURL: "https://icons.llama.fi/polyroll.jpg",
    },
    {
        label: "Nest Protocol Staking",
        value: "nest-protocol-staking",
        logoURL: "https://icons.llama.fi/nest-protocol.png",
    },
    {
        label: "Demeter",
        value: "demeter",
        logoURL: "https://icons.llama.fi/demeter.png",
    },
    {
        label: "AxeDAO",
        value: "axedao",
        logoURL: "https://icons.llama.fi/axedao.png",
    },
    {
        label: "xExchange",
        value: "xexchange",
        logoURL: "https://icons.llama.fi/ecxchange.png",
    },
    {
        label: "Risq Protocol",
        value: "risq-protocol",
        logoURL: "https://icons.llama.fi/risq-protocol.jpg",
    },
    {
        label: "Fortune DAO",
        value: "fortune-dao",
        logoURL: "https://icons.llama.fi/fortune-dao.png",
    },
    {
        label: "AliensFarm",
        value: "aliensfarm",
        logoURL: "https://icons.llama.fi/aliensfarm.png",
    },
    {
        label: "Piggybank DAO",
        value: "piggybank-dao",
        logoURL: "https://icons.llama.fi/piggybank-dao.png",
    },
    {
        label: "Snowdog",
        value: "snowdog",
        logoURL: "https://icons.llama.fi/snowdog-dao.png",
    },
    {
        label: "CougarSwap",
        value: "cougarswap",
        logoURL: "https://icons.llama.fi/cougarswap.png",
    },
    {
        label: "Bear Finance",
        value: "bear-finance",
        logoURL: "https://icons.llama.fi/bear-finance.png",
    },
    {
        label: "Quarry",
        value: "quarry",
        logoURL: "https://icons.llama.fi/quarry.png",
    },
    {
        label: "Yoshi Exchange",
        value: "yoshi-exchange",
        logoURL: "https://icons.llama.fi/yoshi-exchange.jpg",
    },
    {
        label: "Wrapped BNB",
        value: "wrapped-bnb",
        logoURL: "https://icons.llama.fi/wrapped-bnb.png",
    },
    {
        label: "Seeder Finance",
        value: "seeder-finance",
        logoURL: "https://icons.llama.fi/seeder-finance.png",
    },
    {
        label: "Reverse",
        value: "reverse",
        logoURL: "https://icons.llama.fi/reverse.png",
    },
    {
        label: "GIBXSwap",
        value: "gibxswap",
        logoURL: "https://icons.llama.fi/gibxswap.png",
    },
    {
        label: "Saffron Finance",
        value: "saffron-finance",
        logoURL: "https://icons.llama.fi/saffron-finance.png",
    },
    {
        label: "Pop Town",
        value: "pop-town",
        logoURL: "https://icons.llama.fi/pop-town.png",
    },
    {
        label: "Defily",
        value: "defily",
        logoURL: "https://icons.llama.fi/defily.png",
    },
    {
        label: "MintSwap",
        value: "mintswap",
        logoURL: "https://icons.llama.fi/mintswap.png",
    },
    {
        label: "Skeleton Finance",
        value: "skeleton-finance",
        logoURL: "https://icons.llama.fi/skeleton-finance.png",
    },
    {
        label: "BSCSwap",
        value: "bscswap",
        logoURL: "https://icons.llama.fi/bscswap.png",
    },
    {
        label: "ICHI",
        value: "ichi",
        logoURL: "https://icons.llama.fi/ichi.png",
    },
    {
        label: "TempleDAO",
        value: "templedao",
        logoURL: "https://icons.llama.fi/temple-dao.png",
    },
    {
        label: "Yield Protocol",
        value: "yield-protocol",
        logoURL: "https://icons.llama.fi/yield-protocol.jpg",
    },
    {
        label: "DungeonSwap",
        value: "dungeonswap",
        logoURL: "https://icons.llama.fi/dungeonswap.png",
    },
    {
        label: "Unilend",
        value: "unilend",
        logoURL: "https://icons.llama.fi/unilend.jpg",
    },
    {
        label: "DeerFi",
        value: "deerfi",
        logoURL: "https://icons.llama.fi/deerfi.png",
    },
    {
        label: "MarshmallowDeFi",
        value: "marshmallowdefi",
        logoURL: "https://icons.llama.fi/marshmallowdefi.png",
    },
    {
        label: "SafeOHM",
        value: "safeohm",
        logoURL: "https://icons.llama.fi/safeohm.jpg",
    },
    {
        label: "LumenSwap",
        value: "lumenswap",
        logoURL: "https://icons.llama.fi/lumenswap.jpg",
    },
    {
        label: "SmartDEX",
        value: "smartdex",
        logoURL: "https://icons.llama.fi/smartdex.jpg",
    },
    {
        label: "CorgiSwap",
        value: "corgiswap",
        logoURL: "https://icons.llama.fi/corgiswap.jpg",
    },
    {
        label: "FLRX",
        value: "flrx",
        logoURL: "https://icons.llama.fi/flarex.jpg",
    },
    {
        label: "Position Exchange",
        value: "position-exchange",
        logoURL: "https://icons.llama.fi/positionexchange.png",
    },
    {
        label: "SwapperChan",
        value: "swapperchan",
        logoURL: "https://icons.llama.fi/swapperchan.jpg",
    },
    {
        label: "Revault",
        value: "revault",
        logoURL: "https://icons.llama.fi/revault.jpg",
    },
    {
        label: "8ightDAO",
        value: "8ightdao",
        logoURL: "https://icons.llama.fi/8ightdao.jpg",
    },
    {
        label: "Oh Finance",
        value: "oh-finance",
        logoURL: "https://icons.llama.fi/oh-finance.jpg",
    },
    {
        label: "OneDAO Finance",
        value: "onedao-finance",
        logoURL: "https://icons.llama.fi/onedao-finance.png",
    },
    {
        label: "SmolSwap",
        value: "smolswap",
        logoURL: "https://icons.llama.fi/smolswap.jpg",
    },
    {
        label: "RetroDefi",
        value: "retrodefi",
        logoURL: "https://icons.llama.fi/retrodefi.jpg",
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
        label: "KwikSwap",
        value: "kwikswap",
        logoURL: "https://icons.llama.fi/kwikswap.png",
    },
    {
        label: "Mesher",
        value: "mesher",
        logoURL: "https://icons.llama.fi/mesher.png",
    },
    {
        label: "BeGlobal Finance",
        value: "beglobal-finance",
        logoURL: "https://icons.llama.fi/beglobal.png",
    },
    {
        label: "Kimochi",
        value: "kimochi",
        logoURL: "https://icons.llama.fi/kimochi.jpg",
    },
    {
        label: "Rocket Pool",
        value: "rocket-pool",
        logoURL: "https://icons.llama.fi/rocket-pool.jpg",
    },
    {
        label: "EverestDAO",
        value: "everestdao",
        logoURL: "https://icons.llama.fi/everestdao.jpg",
    },
    {
        label: "HSwap",
        value: "hswap",
        logoURL: "https://icons.llama.fi/hswap.jpg",
    },
    {
        label: "MiniSwap",
        value: "miniswap",
        logoURL: "https://icons.llama.fi/miniswap.jpg",
    },
    {
        label: "Typhoon Cash",
        value: "typhoon-cash",
        logoURL: "https://icons.llama.fi/typhoon-cash.jpg",
    },
    {
        label: "TangoSwap",
        value: "tangoswap",
        logoURL: "https://icons.llama.fi/tangoswap.jpg",
    },
    {
        label: "Impossible Finance",
        value: "impossible-finance",
        logoURL: "https://icons.llama.fi/impossible-finance.jpg",
    },
    {
        label: "CyborgSwap",
        value: "cyborgswap",
        logoURL: "https://icons.llama.fi/cyborgswap.png",
    },
    {
        label: "Knit Finance",
        value: "knit-finance",
        logoURL: "https://icons.llama.fi/knit-finance.png",
    },
    {
        label: "Kronos DAO",
        value: "kronos-dao",
        logoURL: "https://icons.llama.fi/kronos-dao.png",
    },
    {
        label: "Golff Protocol",
        value: "golff-protocol",
        logoURL: "https://icons.llama.fi/golff-protocol.png",
    },
    {
        label: "SumSwap",
        value: "sumswap",
        logoURL: "https://icons.llama.fi/sumswap.png",
    },
    {
        label: "FLRLoans",
        value: "flrloans",
        logoURL: "https://icons.llama.fi/flare-loans.png",
    },
    {
        label: "Defrost",
        value: "defrost",
        logoURL: "https://icons.llama.fi/defrost.png",
    },
    {
        label: "VampireSwap",
        value: "vampireswap",
        logoURL: "https://icons.llama.fi/vampireswap.png",
    },
    {
        label: "Definix",
        value: "definix",
        logoURL: "https://icons.llama.fi/definix.jpg",
    },
    {
        label: "Pika",
        value: "pika",
        logoURL: "https://icons.llama.fi/pika.png",
    },
    {
        label: "Pacoca",
        value: "pacoca",
        logoURL: "https://icons.llama.fi/pacoca.jpg",
    },
    {
        label: "Klondike Finance",
        value: "klondike-finance",
        logoURL: "https://icons.llama.fi/klondike-finance.jpg",
    },
    {
        label: "Raven",
        value: "raven",
        logoURL: "https://icons.llama.fi/raven.png",
    },
    {
        label: "DAO Maker Vesting",
        value: "dao-maker-vesting",
        logoURL: "https://icons.llama.fi/dao-maker.jpg",
    },
    {
        label: "Big Data Protocol",
        value: "big-data-protocol",
        logoURL: "https://icons.llama.fi/big-data-protocol.jpg",
    },
    {
        label: "LeonicornSwap",
        value: "leonicornswap",
        logoURL: "https://icons.llama.fi/leonicornswap.jpg",
    },
    {
        label: "ButterSwap",
        value: "butterswap",
        logoURL: "https://icons.llama.fi/butterswap.jpg",
    },
    {
        label: "Oddz",
        value: "oddz",
        logoURL: "https://icons.llama.fi/oddz.png",
    },
    {
        label: "Metaversepro",
        value: "metaversepro",
        logoURL: "https://icons.llama.fi/metaversepro.png",
    },
    {
        label: "Pidao Finance",
        value: "pidao-finance",
        logoURL: "https://icons.llama.fi/pidao-finance.png",
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
        label: "Maximizer",
        value: "maximizer",
        logoURL: "https://icons.llama.fi/maximizer.png",
    },
    {
        label: "Genesis Finance",
        value: "genesis-finance",
        logoURL: "https://icons.llama.fi/genesis-finance.png",
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
        label: "InvictusDAO",
        value: "invictusdao",
        logoURL: "https://icons.llama.fi/invictusdao.jpg",
    },
    {
        label: "Manifest",
        value: "manifest",
        logoURL: "https://icons.llama.fi/manifest.jpg",
    },
    {
        label: "Hex",
        value: "hex",
        logoURL: "https://icons.llama.fi/hex.jpg",
    },
    {
        label: "BitANT",
        value: "bitant",
        logoURL: "https://icons.llama.fi/bitant.png",
    },
    {
        label: "R U Generous",
        value: "r-u-generous",
        logoURL: "https://icons.llama.fi/r-u-generous.png",
    },
    {
        label: "Soda Protocol",
        value: "soda-protocol",
        logoURL: "https://icons.llama.fi/soda-protocol.png",
    },
    {
        label: "UniPower",
        value: "unipower",
        logoURL: "https://icons.llama.fi/unipower.jpg",
    },
    {
        label: "KnightSwap Finance",
        value: "knightswap-finance",
        logoURL: "https://icons.llama.fi/knightswap-finance.png",
    },
    {
        label: "Shinobi",
        value: "shinobi",
        logoURL: "https://icons.llama.fi/shinobi.jpg",
    },
    {
        label: "Platypus Finance",
        value: "platypus-finance",
        logoURL: "https://icons.llama.fi/platypus.png",
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
        label: "PolyShield",
        value: "polyshield",
        logoURL: "https://icons.llama.fi/polyshield.png",
    },
    {
        label: "MonoX",
        value: "monox",
        logoURL: "https://icons.llama.fi/monox.png",
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
        label: "4Swap",
        value: "4swap",
        logoURL: "https://icons.llama.fi/pando.png",
    },
    {
        label: "FlatQube",
        value: "flatqube",
        logoURL: "https://icons.llama.fi/flatcube.png",
    },
    {
        label: "Nearpad",
        value: "nearpad",
        logoURL: "https://icons.llama.fi/nearpad.jpg",
    },
    {
        label: "REX Staking",
        value: "rex-staking",
        logoURL: "https://icons.llama.fi/rex-staking.jpg",
    },
    {
        label: "Houses of Rome",
        value: "houses-of-rome",
        logoURL: "https://icons.llama.fi/houses-of-rome.jpg",
    },
    {
        label: "Swarm Markets",
        value: "swarm-markets",
        logoURL: "https://icons.llama.fi/swarm-markets.jpg",
    },
    {
        label: "Flame DeFi",
        value: "flame-defi",
        logoURL: "https://icons.llama.fi/flamedefi.png",
    },
    {
        label: "Ester Finance",
        value: "ester-finance",
        logoURL: "https://icons.llama.fi/esterfinance.png",
    },
    {
        label: "Alpaca City",
        value: "alpaca-city",
        logoURL: "https://icons.llama.fi/alpacacity.png",
    },
    {
        label: "1BCH",
        value: "1bch",
        logoURL: "https://icons.llama.fi/1bch.jpg",
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
        label: "Vexchange",
        value: "vexchange",
        logoURL: "https://icons.llama.fi/vexchange.jpg",
    },
    {
        label: "Nemesis DAO",
        value: "nemesis-dao",
        logoURL: "https://icons.llama.fi/nemesis-dao.jpg",
    },
    {
        label: "MoonDao",
        value: "moondao",
        logoURL: "https://icons.llama.fi/moondao.jpg",
    },
    {
        label: "CerberusDAO",
        value: "cerberusdao",
        logoURL: "https://icons.llama.fi/cerberusdao.jpg",
    },
    {
        label: "Babylon Finance",
        value: "babylon-finance",
        logoURL: "https://icons.llama.fi/babylon-finance.jpg",
    },
    {
        label: "Zai Finance",
        value: "zai-finance",
        logoURL: "https://icons.llama.fi/zai-finance.jpg",
    },
    {
        label: "DeHive",
        value: "dehive",
        logoURL: "https://icons.llama.fi/dehive.png",
    },
    {
        label: "Drift",
        value: "drift",
        logoURL: "https://icons.llama.fi/drift.jpg",
    },
    {
        label: "NFTb",
        value: "nftb",
        logoURL: "https://icons.llama.fi/nftb.jpg",
    },
    {
        label: "StellarX",
        value: "stellarx",
        logoURL: "https://icons.llama.fi/stellarx.jpg",
    },
    {
        label: "XEUS",
        value: "xeus",
        logoURL: "https://icons.llama.fi/xeus.jpg",
    },
    {
        label: "TaiChi",
        value: "taichi",
        logoURL: "https://icons.llama.fi/taichi.jpg",
    },
    {
        label: "Omicron",
        value: "omicron",
        logoURL: "https://icons.llama.fi/omicron.jpg",
    },
    {
        label: "WingSwap",
        value: "wingswap",
        logoURL: "https://icons.llama.fi/wingswap.jpg",
    },
    {
        label: "Tornadao",
        value: "tornadao",
        logoURL: "https://icons.llama.fi/tornadao.jpg",
    },
    {
        label: "ChickenSwap",
        value: "chickenswap",
        logoURL: "https://icons.llama.fi/chickenswap.jpg",
    },
    {
        label: "PartySwap",
        value: "partyswap",
        logoURL: "https://icons.llama.fi/partyswap.jpg",
    },
    {
        label: "WannaSwap",
        value: "wannaswap",
        logoURL: "https://icons.llama.fi/wannaswap.jpg",
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
        label: "Mobius Finance",
        value: "mobius-finance",
        logoURL: "https://icons.llama.fi/mobius-finance.jpg",
    },
    {
        label: "ArbiRise Finance",
        value: "arbirise-finance",
        logoURL: "https://icons.llama.fi/arbirise-finance.jpg",
    },
    {
        label: "HoneyFarm",
        value: "honeyfarm",
        logoURL: "https://icons.llama.fi/honeyfarm.png",
    },
    {
        label: "Vaporwave",
        value: "vaporwave",
        logoURL: "https://icons.llama.fi/vaporwave.png",
    },
    {
        label: "KryptoDex",
        value: "kryptodex",
        logoURL: "https://icons.llama.fi/kryptodex.jpg",
    },
    {
        label: "Powerbomb Finance",
        value: "powerbomb-finance",
        logoURL: "https://icons.llama.fi/powerbomb-finance.png",
    },
    {
        label: "MidasDAO",
        value: "midasdao",
        logoURL: "https://icons.llama.fi/midasdao.jpg",
    },
    {
        label: "Ubiquity DAO",
        value: "ubiquity-dao",
        logoURL: "https://icons.llama.fi/ubiquitydao.png",
    },
    {
        label: "O2 DAO",
        value: "o2-dao",
        logoURL: "https://icons.llama.fi/o2-dao.jpg",
    },
    {
        label: "Life DAO",
        value: "life-dao",
        logoURL: "https://icons.llama.fi/life-dao.jpg",
    },
    {
        label: "Drops",
        value: "drops",
        logoURL: "https://icons.llama.fi/drops.png",
    },
    {
        label: "OCP Finance",
        value: "ocp-finance",
        logoURL: "https://icons.llama.fi/ocp-finance.png",
    },
    {
        label: "Piggy",
        value: "piggy",
        logoURL: "https://icons.llama.fi/piggy.png",
    },
    {
        label: "Luxor Money",
        value: "luxor-money",
        logoURL: "https://icons.llama.fi/luxor-money.jpg",
    },
    {
        label: "Brinc Finance",
        value: "brinc-finance",
        logoURL: "https://icons.llama.fi/brinc.jpg",
    },
    {
        label: "Giza DAO",
        value: "giza-dao",
        logoURL: "https://icons.llama.fi/giza-dao.jpg",
    },
    {
        label: "YokaiSwap",
        value: "yokaiswap",
        logoURL: "https://icons.llama.fi/yokaiswap.jpg",
    },
    {
        label: "WagyuSwap",
        value: "wagyuswap",
        logoURL: "https://icons.llama.fi/wagyuswap.jpg",
    },
    {
        label: "Colony",
        value: "colony",
        logoURL: "https://icons.llama.fi/colony.svg",
    },
    {
        label: "Thorstarter",
        value: "thorstarter",
        logoURL: "https://icons.llama.fi/thorstarter.jpg",
    },
    {
        label: "SafeSwap",
        value: "safeswap",
        logoURL: "https://icons.llama.fi/safeswap.jpg",
    },
    {
        label: "Soy Finance",
        value: "soy-finance",
        logoURL: "https://icons.llama.fi/soy-finance.jpg",
    },
    {
        label: "CheeseDAO",
        value: "cheesedao",
        logoURL: "https://icons.llama.fi/cheesedao.jpg",
    },
    {
        label: "Ice DAO",
        value: "ice-dao",
        logoURL: "https://icons.llama.fi/ice-dao.jpg",
    },
    {
        label: "Papa DAO",
        value: "papa-dao",
        logoURL: "https://icons.llama.fi/papa-dao.jpg",
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
        label: "TempoDAO",
        value: "tempodao",
        logoURL: "https://icons.llama.fi/tempodao.jpg",
    },
    {
        label: "Atlas USV",
        value: "atlas-usv",
        logoURL: "https://icons.llama.fi/atlas-usv.jpg",
    },
    {
        label: "Aztec",
        value: "aztec",
        logoURL: "https://icons.llama.fi/aztec.jpg",
    },
    {
        label: "Gains Network",
        value: "gains-network",
        logoURL: "https://icons.llama.fi/gains-network.png",
    },
    {
        label: "OpenDAO",
        value: "opendao",
        logoURL: "https://icons.llama.fi/opendao.png",
    },
    {
        label: "Arkadiko",
        value: "arkadiko",
        logoURL: "https://icons.llama.fi/arkadiko.jpg",
    },
    {
        label: "RivrKitty",
        value: "rivrkitty",
        logoURL: "https://icons.llama.fi/rivrkitty.jpg",
    },
    {
        label: "Hermes Defi",
        value: "hermes-defi",
        logoURL: "https://icons.llama.fi/hermes-defi.jpg",
    },
    {
        label: "Overnight USD+",
        value: "overnight-usd+",
        logoURL: "https://icons.llama.fi/overnight-usd+.png",
    },
    {
        label: "DefySwap",
        value: "defyswap",
        logoURL: "https://icons.llama.fi/defyswap.png",
    },
    {
        label: "Wrapped",
        value: "wrapped",
        logoURL: "https://icons.llama.fi/wrapped.jpg",
    },
    {
        label: "Starterra",
        value: "starterra",
        logoURL: "https://icons.llama.fi/starterra.jpg",
    },
    {
        label: "Xmas Past",
        value: "xmas-past",
        logoURL: "https://icons.llama.fi/xmaspast.png",
    },
    {
        label: "MM Finance Cronos",
        value: "mm-finance-cronos",
        logoURL: "https://icons.llama.fi/mm-finance.jpg",
    },
    {
        label: "SpicySwap",
        value: "spicyswap",
        logoURL: "https://icons.llama.fi/spicyswap.jpg",
    },
    {
        label: "TopShelf",
        value: "topshelf",
        logoURL: "https://icons.llama.fi/topshelf.jpg",
    },
    {
        label: "PandaSwap",
        value: "pandaswap",
        logoURL: "https://icons.llama.fi/pandaswap.png",
    },
    {
        label: "Percent Finance",
        value: "percent-finance",
        logoURL: "https://icons.llama.fi/percent-finance.png",
    },
    {
        label: "OneSwap",
        value: "oneswap",
        logoURL: "https://icons.llama.fi/oneswap.jpg",
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
        label: "BTCST",
        value: "btcst",
        logoURL: "https://icons.llama.fi/btcst.png",
    },
    {
        label: "RagnarokDAO",
        value: "ragnarokdao",
        logoURL: "https://icons.llama.fi/ragnarokdao.png",
    },
    {
        label: "FireDAO",
        value: "firedao",
        logoURL: "https://icons.llama.fi/firedao.png",
    },
    {
        label: "Mercurity",
        value: "mercurity",
        logoURL: "https://icons.llama.fi/mercurity.png",
    },
    {
        label: "MFinance",
        value: "mfinance",
        logoURL: "https://icons.llama.fi/mfinance.png",
    },
    {
        label: "Numbers Protocol",
        value: "numbers-protocol",
        logoURL: "https://icons.llama.fi/numbers-protocol.jpg",
    },
    {
        label: "Solana Farm",
        value: "solana-farm",
        logoURL: "https://icons.llama.fi/solana-farm.jpg",
    },
    {
        label: "SunflowerSwap",
        value: "sunflowerswap",
        logoURL: "https://icons.llama.fi/sunflowerswap.jpg",
    },
    {
        label: "Stader",
        value: "stader",
        logoURL: "https://icons.llama.fi/stader.jpg",
    },
    {
        label: "Tempus Finance",
        value: "tempus-finance",
        logoURL: "https://icons.llama.fi/tempus-finance.png",
    },
    {
        label: "Ouchi Finance",
        value: "ouchi-finance",
        logoURL: "https://icons.llama.fi/ouchi-finance.jpg",
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
        label: "Globiance",
        value: "globiance",
        logoURL: "https://icons.llama.fi/globiance.jpg",
    },
    {
        label: "LeagueDAO",
        value: "leaguedao",
        logoURL: "https://icons.llama.fi/leaguedao.png",
    },
    {
        label: "Vortex DAO",
        value: "vortex-dao",
        logoURL: "https://icons.llama.fi/vortex-dao.png",
    },
    {
        label: "Astroport Classic",
        value: "astroport-classic",
        logoURL: "https://icons.llama.fi/astroport.jpg",
    },
    {
        label: "MooniSwap",
        value: "mooniswap",
        logoURL: "https://icons.llama.fi/mooniswap.jpg",
    },
    {
        label: "ChainPort",
        value: "chainport",
        logoURL: "https://icons.llama.fi/chainport.png",
    },
    {
        label: "FIAT DAO",
        value: "fiat-dao",
        logoURL: "https://icons.llama.fi/fiat-dao.png",
    },
    {
        label: "Redacted Protocol",
        value: "redacted-protocol",
        logoURL: "https://icons.llama.fi/redacted-protocol.jpg",
    },
    {
        label: "Linear Finance",
        value: "linear-finance",
        logoURL: "https://icons.llama.fi/linear-finance.jpg",
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
        label: "Entropyfi",
        value: "entropyfi",
        logoURL: "https://icons.llama.fi/entropyfi.jpg",
    },
    {
        label: "CakeDAO",
        value: "cakedao",
        logoURL: "https://icons.llama.fi/cakedao.png",
    },
    {
        label: "Chest Finance",
        value: "chest-finance",
        logoURL: "https://icons.llama.fi/chest-finance.jpg",
    },
    {
        label: "Embr Finance",
        value: "embr-finance",
        logoURL: "https://icons.llama.fi/embr-finance.jpg",
    },
    {
        label: "Ideamarket",
        value: "ideamarket",
        logoURL: "https://icons.llama.fi/ideamarket.jpg",
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
        label: "Dios Finance",
        value: "dios-finance",
        logoURL: "https://icons.llama.fi/dios-finance.svg",
    },
    {
        label: "Thoreum Finance",
        value: "thoreum-finance",
        logoURL: "https://icons.llama.fi/thoreum-finance.png",
    },
    {
        label: "OptiNyan",
        value: "optinyan",
        logoURL: "https://icons.llama.fi/optinyan.jpg",
    },
    {
        label: "Nacho Finance",
        value: "nacho-finance",
        logoURL: "https://icons.llama.fi/nacho-finance.jpg",
    },
    {
        label: "Polkamarkets",
        value: "polkamarkets",
        logoURL: "https://icons.llama.fi/polkamarkets.png",
    },
    {
        label: "IFSwap",
        value: "ifswap",
        logoURL: "https://icons.llama.fi/ifswap.png",
    },
    {
        label: "Kitty Finance",
        value: "kitty-finance",
        logoURL: "https://icons.llama.fi/kitty-finance.png",
    },
    {
        label: "AutoShark",
        value: "autoshark",
        logoURL: "https://icons.llama.fi/autoshark.png",
    },
    {
        label: "SpiritDAO",
        value: "spiritdao",
        logoURL: "https://icons.llama.fi/spiritdao.png",
    },
    {
        label: "ArbiCheems",
        value: "arbicheems",
        logoURL: "https://icons.llama.fi/arbicheems.png",
    },
    {
        label: "Bring.Finance",
        value: "bring.finance",
        logoURL: "https://icons.llama.fi/bring.jpg",
    },
    {
        label: "Polkastarter",
        value: "polkastarter",
        logoURL: "https://icons.llama.fi/polkastarter.jpg",
    },
    {
        label: "IFPool",
        value: "ifpool",
        logoURL: "https://icons.llama.fi/ifpool.jpg",
    },
    {
        label: "XUSD Money",
        value: "xusd-money",
        logoURL: "https://icons.llama.fi/xusd-money.jpg",
    },
    {
        label: "BabyPig Finance",
        value: "babypig-finance",
        logoURL: "https://icons.llama.fi/babypig-finance.png",
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
        label: "Pala",
        value: "pala",
        logoURL: "https://icons.llama.fi/pala.jpg",
    },
    {
        label: "Thetanuts Finance",
        value: "thetanuts-finance",
        logoURL: "https://icons.llama.fi/thetanuts-finance.png",
    },
    {
        label: "Zencha Finance",
        value: "zencha-finance",
        logoURL: "https://icons.llama.fi/zencha-finance.png",
    },
    {
        label: "Algofi Lend",
        value: "algofi-lend",
        logoURL: "https://icons.llama.fi/algofi.jpg",
    },
    {
        label: "Spectrum Finance",
        value: "spectrum-finance",
        logoURL: "https://icons.llama.fi/spectrum-finance.png",
    },
    {
        label: "KACO Finance",
        value: "kaco-finance",
        logoURL: "https://icons.llama.fi/kaco-finance.png",
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
        label: "AfraSwap",
        value: "afraswap",
        logoURL: "https://icons.llama.fi/afraswap.jpg",
    },
    {
        label: "SuperFarm",
        value: "superfarm",
        logoURL: "https://icons.llama.fi/superfarm.png",
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
        label: "PureFi",
        value: "purefi",
        logoURL: "https://icons.llama.fi/purefi.png",
    },
    {
        label: "Niob Finance",
        value: "niob-finance",
        logoURL: "https://icons.llama.fi/niob.jpg",
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
        label: "ValhallaDAO",
        value: "valhalladao",
        logoURL: "https://icons.llama.fi/valhalladao.png",
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
        label: "Chad Finance",
        value: "chad-finance",
        logoURL: "https://icons.llama.fi/chad-finance.png",
    },
    {
        label: "WaterLoan",
        value: "waterloan",
        logoURL: "https://icons.llama.fi/waterloan.jpg",
    },
    {
        label: "Gearbox",
        value: "gearbox",
        logoURL: "https://icons.llama.fi/gearbox.jpg",
    },
    {
        label: "APWine",
        value: "apwine",
        logoURL: "https://icons.llama.fi/apwine.jpg",
    },
    {
        label: "Market",
        value: "market",
        logoURL: "https://icons.llama.fi/market.jpg",
    },
    {
        label: "Wisteria Swap",
        value: "wisteria-swap",
        logoURL: "https://icons.llama.fi/wisteriaswap.png",
    },
    {
        label: "Asgard Dao",
        value: "asgard-dao",
        logoURL: "https://icons.llama.fi/asgard-dao.jpg",
    },
    {
        label: "Mama DAO",
        value: "mama-dao",
        logoURL: "https://icons.llama.fi/mama-dao.jpg",
    },
    {
        label: "PirateDAO",
        value: "piratedao",
        logoURL: "https://icons.llama.fi/pirate-dao.jpg",
    },
    {
        label: "Tectonic",
        value: "tectonic",
        logoURL: "https://icons.llama.fi/tectonic.png",
    },
    {
        label: "VultureSwap",
        value: "vultureswap",
        logoURL: "https://icons.llama.fi/vultureswap.jpg",
    },
    {
        label: "Crow Finance",
        value: "crow-finance",
        logoURL: "https://icons.llama.fi/crowfi.jpg",
    },
    {
        label: "Louverture",
        value: "louverture",
        logoURL: "https://icons.llama.fi/louverture.jpg",
    },
    {
        label: "Coup Farm",
        value: "coup-farm",
        logoURL: "https://icons.llama.fi/coup-farm.png",
    },
    {
        label: "Caribou Finance",
        value: "caribou-finance",
        logoURL: "https://icons.llama.fi/caribou-finance.png",
    },
    {
        label: "AvaViking",
        value: "avaviking",
        logoURL: "https://icons.llama.fi/avaviking.png",
    },
    {
        label: "GrassLand Finance",
        value: "grassland-finance",
        logoURL: "https://icons.llama.fi/grassland-finance.png",
    },
    {
        label: "Salem Finance",
        value: "salem-finance",
        logoURL: "https://icons.llama.fi/salem-finance.png",
    },
    {
        label: "Mirai",
        value: "mirai",
        logoURL: "https://icons.llama.fi/mirai.png",
    },
    {
        label: "MetaCrono",
        value: "metacrono",
        logoURL: "https://icons.llama.fi/metacrono.png",
    },
    {
        label: "LemonSwap",
        value: "lemonswap",
        logoURL: "https://icons.llama.fi/lemonswap.png",
    },
    {
        label: "Zeus Finance",
        value: "zeus-finance",
        logoURL: "https://icons.llama.fi/zeus-finance.png",
    },
    {
        label: "KawaiiSwap",
        value: "kawaiiswap",
        logoURL: "https://icons.llama.fi/kawaiiswap.png",
    },
    {
        label: "BlackBird Finance",
        value: "blackbird-finance",
        logoURL: "https://icons.llama.fi/blackbird-finance.png",
    },
    {
        label: "Buffaloswap",
        value: "buffaloswap",
        logoURL: "https://icons.llama.fi/buffaloswap.png",
    },
    {
        label: "Cyber Dog",
        value: "cyber-dog",
        logoURL: "https://icons.llama.fi/cyber-dog.png",
    },
    {
        label: "Genesys",
        value: "genesys",
        logoURL: "https://icons.llama.fi/genesys.png",
    },
    {
        label: "Ice Colony",
        value: "ice-colony",
        logoURL: "https://icons.llama.fi/ice-colony.png",
    },
    {
        label: "DuckyDeFi",
        value: "duckydefi",
        logoURL: "https://icons.llama.fi/duckydefi.png",
    },
    {
        label: "Meowswap",
        value: "meowswap",
        logoURL: "https://icons.llama.fi/meowswap.png",
    },
    {
        label: "Rose",
        value: "rose",
        logoURL: "https://icons.llama.fi/rose.jpg",
    },
    {
        label: "SunFlower Finance",
        value: "sunflower-finance",
        logoURL: "https://icons.llama.fi/sunflower-finance.jpg",
    },
    {
        label: "Valkyrie",
        value: "valkyrie",
        logoURL: "https://icons.llama.fi/valkyrie.png",
    },
    {
        label: "Tethys AMM",
        value: "tethys-amm",
        logoURL: "https://icons.llama.fi/tethys-finance.png",
    },
    {
        label: "NetSwap",
        value: "netswap",
        logoURL: "https://icons.llama.fi/netswap.jpg",
    },
    {
        label: "Avalps",
        value: "avalps",
        logoURL: "https://icons.llama.fi/avalps.png",
    },
    {
        label: "MM Optimizer",
        value: "mm-optimizer",
        logoURL: "https://icons.llama.fi/mm-optimizer.png",
    },
    {
        label: "Hotpot Finance",
        value: "hotpot-finance",
        logoURL: "https://icons.llama.fi/hotpot-finance.png",
    },
    {
        label: "Banksy Farm",
        value: "banksy-farm",
        logoURL: "https://icons.llama.fi/banksy-farm.png",
    },
    {
        label: "FTM Frens",
        value: "ftm-frens",
        logoURL: "https://icons.llama.fi/ftm-frens.png",
    },
    {
        label: "CyberFantasyFembots",
        value: "cyberfantasyfembots",
        logoURL: "https://icons.llama.fi/cyberfantasyfembots.png",
    },
    {
        label: "Emerald Swap",
        value: "emerald-swap",
        logoURL: "https://icons.llama.fi/emerald-swap.png",
    },
    {
        label: "Amogus DAO",
        value: "amogus-dao",
        logoURL: "https://icons.llama.fi/amogus-dao.png",
    },
    {
        label: "Koala Defi",
        value: "koala-defi",
        logoURL: "https://icons.llama.fi/koala-defi.png",
    },
    {
        label: "WraithSwap",
        value: "wraithswap",
        logoURL: "https://icons.llama.fi/wraithswap.png",
    },
    {
        label: "The Seed Farm",
        value: "the-seed-farm",
        logoURL: "https://icons.llama.fi/the-seed-farm.png",
    },
    {
        label: "RobiniaSwap",
        value: "robiniaswap",
        logoURL: "https://icons.llama.fi/robiniaswap.png",
    },
    {
        label: "Umbrella Network",
        value: "umbrella-network",
        logoURL: "https://icons.llama.fi/umbrella-network.jpg",
    },
    {
        label: "SocialSwap",
        value: "socialswap",
        logoURL: "https://icons.llama.fi/socialswap.jpg",
    },
    {
        label: "SheepDex",
        value: "sheepdex",
        logoURL: "https://icons.llama.fi/sheepdex.jpg",
    },
    {
        label: "Cykura",
        value: "cykura",
        logoURL: "https://icons.llama.fi/cykura.png",
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
        label: "Baker Guild",
        value: "baker-guild",
        logoURL: "https://icons.llama.fi/baker-guild.png",
    },
    {
        label: "NiiFi",
        value: "niifi",
        logoURL: "https://icons.llama.fi/niifi.jpg",
    },
    {
        label: "Friktion",
        value: "friktion",
        logoURL: "https://icons.llama.fi/friktion.png",
    },
    {
        label: "Trick or Treat Farm",
        value: "trick-or-treat-farm",
        logoURL: "https://icons.llama.fi/trick-or-treat-farm.png",
    },
    {
        label: "DeepSeaDAO",
        value: "deepseadao",
        logoURL: "https://icons.llama.fi/deepseadao.png",
    },
    {
        label: "Swing DAO",
        value: "swing-dao",
        logoURL: "https://icons.llama.fi/swing-dao.png",
    },
    {
        label: "DefiChain DEX",
        value: "defichain-dex",
        logoURL: "https://icons.llama.fi/defichain.jpg",
    },
    {
        label: "DefiChain Loans",
        value: "defichain-loans",
        logoURL: "https://icons.llama.fi/defichain.jpg",
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
        label: "PsyOptions",
        value: "psyoptions",
        logoURL: "https://icons.llama.fi/psyoptions.png",
    },
    {
        label: "JPool",
        value: "jpool",
        logoURL: "https://icons.llama.fi/jpool.png",
    },
    {
        label: "AuroraSwap",
        value: "auroraswap",
        logoURL: "https://icons.llama.fi/auroraswap.png",
    },
    {
        label: "Xenophon",
        value: "xenophon",
        logoURL: "https://icons.llama.fi/xenophon.png",
    },
    {
        label: "Tropical Finance",
        value: "tropical-finance",
        logoURL: "https://icons.llama.fi/tropical-finance.png",
    },
    {
        label: "Whale Loans",
        value: "whale-loans",
        logoURL: "https://icons.llama.fi/whale-loans.png",
    },
    {
        label: "ExinSwap",
        value: "exinswap",
        logoURL: "https://icons.llama.fi/exinswap.png",
    },
    {
        label: "Liquidrium",
        value: "liquidrium",
        logoURL: "https://icons.llama.fi/liquidrium.png",
    },
    {
        label: "MojitoSwap",
        value: "mojitoswap",
        logoURL: "https://icons.llama.fi/mojitoswap.png",
    },
    {
        label: "ChargeDeFi",
        value: "chargedefi",
        logoURL: "https://icons.llama.fi/chargedefi.png",
    },
    {
        label: "Euler",
        value: "euler",
        logoURL: "https://icons.llama.fi/euler.svg",
    },
    {
        label: "CyberTime",
        value: "cybertime",
        logoURL: "https://icons.llama.fi/cybertime.png",
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
        label: "EverRise",
        value: "everrise",
        logoURL: "https://icons.llama.fi/everrise.png",
    },
    {
        label: "Mimas Finance",
        value: "mimas-finance",
        logoURL: "https://icons.llama.fi/mimas-finance.png",
    },
    {
        label: "Magnet DAO",
        value: "magnet-dao",
        logoURL: "https://icons.llama.fi/magnet-dao.png",
    },
    {
        label: "Katana",
        value: "katana",
        logoURL: "https://icons.llama.fi/katana.png",
    },
    {
        label: "PolkaEx",
        value: "polkaex",
        logoURL: "https://icons.llama.fi/polkaex.png",
    },
    {
        label: "OBSwap",
        value: "obswap",
        logoURL: "https://icons.llama.fi/obswap.png",
    },
    {
        label: "Sperax USD",
        value: "sperax-usd",
        logoURL: "https://icons.llama.fi/sperax-usd.jpg",
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
        label: "Sentre",
        value: "sentre",
        logoURL: "https://icons.llama.fi/sentre.png",
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
        label: "Tenet",
        value: "tenet",
        logoURL: "https://icons.llama.fi/tenet.png",
    },
    {
        label: "Zunami Protocol",
        value: "zunami-protocol",
        logoURL: "https://icons.llama.fi/zunami-protocol.png",
    },
    {
        label: "BananaFarm",
        value: "bananafarm",
        logoURL: "https://icons.llama.fi/bananafarm.jpg",
    },
    {
        label: "StoneDefi",
        value: "stonedefi",
        logoURL: "https://icons.llama.fi/stonedefi.png",
    },
    {
        label: "BooFinance",
        value: "boofinance",
        logoURL: "https://icons.llama.fi/boofinance.svg",
    },
    {
        label: "Predictcoin",
        value: "predictcoin",
        logoURL: "https://icons.llama.fi/pridictcoin.jpg",
    },
    {
        label: "WagmiDAO",
        value: "wagmidao",
        logoURL: "https://icons.llama.fi/wagmidao.png",
    },
    {
        label: "Across",
        value: "across",
        logoURL: "https://icons.llama.fi/across.png",
    },
    {
        label: "OpenLeverage",
        value: "openleverage",
        logoURL: "https://icons.llama.fi/openleverage.jpg",
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
        label: "ThorusFi",
        value: "thorusfi",
        logoURL: "https://icons.llama.fi/thorusfi.jpg",
    },
    {
        label: "SamoDAO",
        value: "samodao",
        logoURL: "https://icons.llama.fi/samodao.png",
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
        label: "Farm Hero",
        value: "farm-hero",
        logoURL: "https://icons.llama.fi/farm-hero.png",
    },
    {
        label: "Parallel Liquid Crowdloan",
        value: "parallel-liquid-crowdloan",
        logoURL: "https://icons.llama.fi/parallel-defi-super-app.jpg",
    },
    {
        label: "Sierra",
        value: "sierra",
        logoURL: "https://icons.llama.fi/sierra.png",
    },
    {
        label: "Trapeza Protocol",
        value: "trapeza-protocol",
        logoURL: "https://icons.llama.fi/trapeza-protocol.png",
    },
    {
        label: "KillSwitch",
        value: "killswitch",
        logoURL: "https://icons.llama.fi/killswitch.svg",
    },
    {
        label: "Argano",
        value: "argano",
        logoURL: "https://icons.llama.fi/argano.png",
    },
    {
        label: "Photon Protocol",
        value: "photon-protocol",
        logoURL: "https://icons.llama.fi/photon-protocol.png",
    },
    {
        label: "TiPiDao",
        value: "tipidao",
        logoURL: "https://icons.llama.fi/tipidao.png",
    },
    {
        label: "VoltSwap",
        value: "voltswap",
        logoURL: "https://icons.llama.fi/voltswap.png",
    },
    {
        label: "Oin Finance",
        value: "oin-finance",
        logoURL: "https://icons.llama.fi/oin-finance.svg",
    },
    {
        label: "Empyrean DAO",
        value: "empyrean-dao",
        logoURL: "https://icons.llama.fi/empyrean-dao.jpg",
    },
    {
        label: "SashimiDAO",
        value: "sashimidao",
        logoURL: "https://icons.llama.fi/sashimidao.jpg",
    },
    {
        label: "LooksRare",
        value: "looksrare",
        logoURL: "https://icons.llama.fi/looksrare.jpg",
    },
    {
        label: "Welnance",
        value: "welnance",
        logoURL: "https://icons.llama.fi/welnance.jpg",
    },
    {
        label: "Vesq",
        value: "vesq",
        logoURL: "https://icons.llama.fi/vesq.png",
    },
    {
        label: "TerraFloki",
        value: "terrafloki",
        logoURL: "https://icons.llama.fi/terrafloki.png",
    },
    {
        label: "Creditum",
        value: "creditum",
        logoURL: "https://icons.llama.fi/creditum.png",
    },
    {
        label: "Agile Finance",
        value: "agile-finance",
        logoURL: "https://icons.llama.fi/agile-finance.png",
    },
    {
        label: "Ultra Protocol",
        value: "ultra-protocol",
        logoURL: "https://icons.llama.fi/ultra.png",
    },
    {
        label: "Waterfall Finance Yield",
        value: "waterfall-finance-yield",
        logoURL: "https://icons.llama.fi/waterfallfinance.png",
    },
    {
        label: "Bomb Money",
        value: "bomb-money",
        logoURL: "https://icons.llama.fi/bombmoney.png",
    },
    {
        label: "Minotaur Money",
        value: "minotaur-money",
        logoURL: "https://icons.llama.fi/minotaur-money.png",
    },
    {
        label: "DuneSwap",
        value: "duneswap",
        logoURL: "https://icons.llama.fi/duneswap.jpg",
    },
    {
        label: "YuzuSwap",
        value: "yuzuswap",
        logoURL: "https://icons.llama.fi/yuzuswap.jpg",
    },
    {
        label: "Mimo",
        value: "mimo",
        logoURL: "https://icons.llama.fi/mimo.jpg",
    },
    {
        label: "SleepEarn Finance",
        value: "sleepearn-finance",
        logoURL: "https://icons.llama.fi/sleepearn-finance.jpg",
    },
    {
        label: "StackSwap",
        value: "stackswap",
        logoURL: "https://icons.llama.fi/stackswap.png",
    },
    {
        label: "Crabada",
        value: "crabada",
        logoURL: "https://icons.llama.fi/crabada.png",
    },
    {
        label: "Proxy",
        value: "proxy",
        logoURL: "https://icons.llama.fi/proxy.png",
    },
    {
        label: "Spartan",
        value: "spartan",
        logoURL: "https://icons.llama.fi/spartan.png",
    },
    {
        label: "Hermes Finance",
        value: "hermes-finance",
        logoURL: "https://icons.llama.fi/hermes-finance.png",
    },
    {
        label: "2omb Finance",
        value: "2omb-finance",
        logoURL: "https://icons.llama.fi/2omb-finance.png",
    },
    {
        label: "Llama Airforce",
        value: "llama-airforce",
        logoURL: "https://icons.llama.fi/llama-airforce.png",
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
        label: "HakuSwap",
        value: "hakuswap",
        logoURL: "https://icons.llama.fi/hakuswap.jpg",
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
        label: "CrossChain Bridge",
        value: "crosschain-bridge",
        logoURL: "https://icons.llama.fi/crosschain-bridge.svg",
    },
    {
        label: "FLRFarm",
        value: "flrfarm",
        logoURL: "https://icons.llama.fi/flarefarm.png",
    },
    {
        label: "Pillar",
        value: "pillar",
        logoURL: "https://icons.llama.fi/pillar.jpg",
    },
    {
        label: "ThetaSwap",
        value: "thetaswap",
        logoURL: "https://icons.llama.fi/thetaswap.png",
    },
    {
        label: "DarkCrypto",
        value: "darkcrypto",
        logoURL: "https://icons.llama.fi/darkcrypto.svg",
    },
    {
        label: "Saros",
        value: "saros",
        logoURL: "https://icons.llama.fi/saros.svg",
    },
    {
        label: "SmartPad",
        value: "smartpad",
        logoURL: "https://icons.llama.fi/smartpad.jpg",
    },
    {
        label: "SmartDEXBCH",
        value: "smartdexbch",
        logoURL: "https://icons.llama.fi/smartdexbch.jpg",
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
        label: "Cronofi Finance",
        value: "cronofi-finance",
        logoURL: "https://icons.llama.fi/cronofi-finance.png",
    },
    {
        label: "Solarflare",
        value: "solarflare",
        logoURL: "https://icons.llama.fi/solarflare.png",
    },
    {
        label: "VyFinance Vaults",
        value: "vyfinance-vaults",
        logoURL: "https://icons.llama.fi/vyfinance.png",
    },
    {
        label: "Immortal",
        value: "immortal",
        logoURL: "https://icons.llama.fi/immortal.png",
    },
    {
        label: "ioTube",
        value: "iotube",
        logoURL: "https://icons.llama.fi/iotube.png",
    },
    {
        label: "Cleopatra DAO",
        value: "cleopatra-dao",
        logoURL: "https://icons.llama.fi/cleopatra-dao.png",
    },
    {
        label: "StellaSwap V2",
        value: "stellaswap-v2",
        logoURL: "https://icons.llama.fi/stellaswap-v2.jpg",
    },
    {
        label: "PERI Finance",
        value: "peri-finance",
        logoURL: "https://icons.llama.fi/peri-finance.png",
    },
    {
        label: "Paprprintr",
        value: "paprprintr",
        logoURL: "https://icons.llama.fi/paprprintr.jpg",
    },
    {
        label: "YieldWolf",
        value: "yieldwolf",
        logoURL: "https://icons.llama.fi/yieldwolf.jpg",
    },
    {
        label: "Tulip",
        value: "tulip",
        logoURL: "https://icons.llama.fi/tulip.png",
    },
    {
        label: "Tornado Finance",
        value: "tornado-finance",
        logoURL: "https://icons.llama.fi/tornado-finance.jpg",
    },
    {
        label: "veDAO",
        value: "vedao",
        logoURL: "https://icons.llama.fi/vedao.jpg",
    },
    {
        label: "Rubic",
        value: "rubic",
        logoURL: "https://icons.llama.fi/rubic.jpg",
    },
    {
        label: "Bent Finance",
        value: "bent-finance",
        logoURL: "https://icons.llama.fi/bent-finance.png",
    },
    {
        label: "Paladin DAO",
        value: "paladin-dao",
        logoURL: "https://icons.llama.fi/paladin-dao.png",
    },
    {
        label: "Alphadex",
        value: "alphadex",
        logoURL: "https://icons.llama.fi/alphadex.jpg",
    },
    {
        label: "OmniDex Swap",
        value: "omnidex-swap",
        logoURL: "https://icons.llama.fi/omnidex-swap.jpg",
    },
    {
        label: "Crafting Finance",
        value: "crafting-finance",
        logoURL: "https://icons.llama.fi/omnidex.jpg",
    },
    {
        label: "Mover",
        value: "mover",
        logoURL: "https://icons.llama.fi/mover.png",
    },
    {
        label: "BeamSwap Classic",
        value: "beamswap-classic",
        logoURL: "https://icons.llama.fi/beamswap-classic.jpg",
    },
    {
        label: "Grape Finance",
        value: "grape-finance",
        logoURL: "https://icons.llama.fi/grape-finance.png",
    },
    {
        label: "Agora",
        value: "agora",
        logoURL: "https://icons.llama.fi/agora.jpg",
    },
    {
        label: "Radial",
        value: "radial",
        logoURL: "https://icons.llama.fi/radial.jpg",
    },
    {
        label: "Manhattan",
        value: "manhattan",
        logoURL: "https://icons.llama.fi/manhattan.png",
    },
    {
        label: "Hades Money",
        value: "hades-money",
        logoURL: "https://icons.llama.fi/hades-money.png",
    },
    {
        label: "BurgerSwap",
        value: "burgerswap",
        logoURL: "https://icons.llama.fi/burgerswap.jpg",
    },
    {
        label: "ZipSwap",
        value: "zipswap",
        logoURL: "https://icons.llama.fi/zipswap.jpg",
    },
    {
        label: "BloXmove",
        value: "bloxmove",
        logoURL: "https://icons.llama.fi/bloxmove.jpg",
    },
    {
        label: "Axion",
        value: "axion",
        logoURL: "https://icons.llama.fi/axion.svg",
    },
    {
        label: "Guru Network",
        value: "guru-network",
        logoURL: "https://icons.llama.fi/guru-network.png",
    },
    {
        label: "ApeDAO",
        value: "apedao",
        logoURL: "https://icons.llama.fi/vapedao.jpg",
    },
    {
        label: "SundaeSwap",
        value: "sundaeswap",
        logoURL: "https://icons.llama.fi/sundaeswap.jpg",
    },
    {
        label: "Iron Bank",
        value: "iron-bank",
        logoURL: "https://icons.llama.fi/iron-bank.svg",
    },
    {
        label: "Buffer Finance",
        value: "buffer-finance",
        logoURL: "https://icons.llama.fi/buffer-finance.png",
    },
    {
        label: "weBribe DAO",
        value: "webribe-dao",
        logoURL: "https://icons.llama.fi/webribe.png",
    },
    {
        label: "ProtoFi",
        value: "protofi",
        logoURL: "https://icons.llama.fi/protofi.jpg",
    },
    {
        label: "0xDAO",
        value: "0xdao",
        logoURL: "https://icons.llama.fi/0xdao.jpg",
    },
    {
        label: "Frog Nation Farm",
        value: "frog-nation-farm",
        logoURL: "https://icons.llama.fi/frog-nation-farm.png",
    },
    {
        label: "Gaia DAO",
        value: "gaia-dao",
        logoURL: "https://icons.llama.fi/gaia-dao.png",
    },
    {
        label: "ZeroShift",
        value: "zeroshift",
        logoURL: "https://icons.llama.fi/zeroshift.png",
    },
    {
        label: "Moremoney",
        value: "moremoney",
        logoURL: "https://icons.llama.fi/moremoney.jpg",
    },
    {
        label: "Epsylon Finance",
        value: "epsylon-finance",
        logoURL: "https://icons.llama.fi/epsylon.svg",
    },
    {
        label: "NoahArkDAO",
        value: "noaharkdao",
        logoURL: "https://icons.llama.fi/noaharkdao.png",
    },
    {
        label: "NeoBurger",
        value: "neoburger",
        logoURL: "https://icons.llama.fi/neoburger.jpg",
    },
    {
        label: "Specter Finance",
        value: "specter-finance",
        logoURL: "https://icons.llama.fi/specter-finance.png",
    },
    {
        label: "UniverseFTM",
        value: "universeftm",
        logoURL: "https://icons.llama.fi/universeftm.png",
    },
    {
        label: "Cesta Finance",
        value: "cesta-finance",
        logoURL: "https://icons.llama.fi/cesta-finance.jpg",
    },
    {
        label: "Moneyrain Finance",
        value: "moneyrain-finance",
        logoURL: "https://icons.llama.fi/moneyrain-finance.png",
    },
    {
        label: "Railgun",
        value: "railgun",
        logoURL: "https://icons.llama.fi/railgun.jpg",
    },
    {
        label: "Comfy Money",
        value: "comfy-money",
        logoURL: "https://icons.llama.fi/comfy-money.svg",
    },
    {
        label: "Alligator",
        value: "alligator",
        logoURL: "https://icons.llama.fi/alligator.png",
    },
    {
        label: "Poopsicle",
        value: "poopsicle",
        logoURL: "https://icons.llama.fi/poopsicle.jpg",
    },
    {
        label: "FuryLabs Finance",
        value: "furylabs-finance",
        logoURL: "https://icons.llama.fi/furylabs-finance.jpg",
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
        label: "Astral Farm",
        value: "astral-farm",
        logoURL: "https://icons.llama.fi/astral-farm.png",
    },
    {
        label: "Spiral Finance",
        value: "spiral-finance",
        logoURL: "https://icons.llama.fi/spiral-finance.png",
    },
    {
        label: "Beluga",
        value: "beluga",
        logoURL: "https://icons.llama.fi/beluga.jpg",
    },
    {
        label: "DeepLock",
        value: "deeplock",
        logoURL: "https://icons.llama.fi/deeplock.png",
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
        label: "PearZap",
        value: "pearzap",
        logoURL: "https://icons.llama.fi/pearzap.png",
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
        label: "ViveLaBouje",
        value: "vivelabouje",
        logoURL: "https://icons.llama.fi/vivelabouje.jpg",
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
        label: "Croblanc",
        value: "croblanc",
        logoURL: "https://icons.llama.fi/croblanc.jpg",
    },
    {
        label: "Devil Finance",
        value: "devil-finance",
        logoURL: "https://icons.llama.fi/devil-finance.jpg",
    },
    {
        label: "FATFIRE DEFI",
        value: "fatfire-defi",
        logoURL: "https://icons.llama.fi/fatfire.jpg",
    },
    {
        label: "Moon Flower Farmers",
        value: "moon-flower-farmers",
        logoURL: "https://icons.llama.fi/moonflowerfarmers.png",
    },
    {
        label: "ThetaCash",
        value: "thetacash",
        logoURL: "https://icons.llama.fi/tbill.png",
    },
    {
        label: "YieldFields",
        value: "yieldfields",
        logoURL: "https://icons.llama.fi/yieldfields.jpg",
    },
    {
        label: "Athena Money",
        value: "athena-money",
        logoURL: "https://icons.llama.fi/athena-money.jpg",
    },
    {
        label: "Degen Haus",
        value: "degen-haus",
        logoURL: "https://icons.llama.fi/degenhaus.jpg",
    },
    {
        label: "TreasureDAO",
        value: "treasuredao",
        logoURL: "https://icons.llama.fi/treasuredao.jpg",
    },
    {
        label: "WigoSwap",
        value: "wigoswap",
        logoURL: "https://icons.llama.fi/wigoswap.png",
    },
    {
        label: "Astral Financial",
        value: "astral-financial",
        logoURL: "https://icons.llama.fi/astral-finance.png",
    },
    {
        label: "Kalmy App",
        value: "kalmy-app",
        logoURL: "https://icons.llama.fi/kalmy.png",
    },
    {
        label: "Dogs of Elon",
        value: "dogs-of-elon",
        logoURL: "https://icons.llama.fi/dogs-of-elon.png",
    },
    {
        label: "Knights of Fantom",
        value: "knights-of-fantom",
        logoURL: "https://icons.llama.fi/knights-of-fantom.jpg",
    },
    {
        label: "Hubble",
        value: "hubble",
        logoURL: "https://icons.llama.fi/hubble.jpg",
    },
    {
        label: "ADAX Pro",
        value: "adax-pro",
        logoURL: "https://icons.llama.fi/adax-pro.jpg",
    },
    {
        label: "Kassandra DAO",
        value: "kassandra-dao",
        logoURL: "https://icons.llama.fi/kassandra-dao.jpg",
    },
    {
        label: "CapitalDEX",
        value: "capitaldex",
        logoURL: "https://icons.llama.fi/capitaldex.jpg",
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
        label: "Oni Exchange",
        value: "oni-exchange",
        logoURL: "https://icons.llama.fi/oni.png",
    },
    {
        label: "Narwhalswap",
        value: "narwhalswap",
        logoURL: "https://icons.llama.fi/narwhalswap.png",
    },
    {
        label: "ETHA Lend",
        value: "etha-lend",
        logoURL: "https://icons.llama.fi/ethalend.png",
    },
    {
        label: "Hotfriescoin",
        value: "hotfriescoin",
        logoURL: "https://icons.llama.fi/hotfriescoin.jpg",
    },
    {
        label: "WOWswap",
        value: "wowswap",
        logoURL: "https://icons.llama.fi/wowswap.jpg",
    },
    {
        label: "AstroSwap",
        value: "astroswap",
        logoURL: "https://icons.llama.fi/astroswap.jpg",
    },
    {
        label: "Velhalla",
        value: "velhalla",
        logoURL: "https://icons.llama.fi/velhalla.jpg",
    },
    {
        label: "Symblox",
        value: "symblox",
        logoURL: "https://icons.llama.fi/symblox.jpg",
    },
    {
        label: "Ripae",
        value: "ripae",
        logoURL: "https://icons.llama.fi/ripae.png",
    },
    {
        label: "Superman Swap",
        value: "superman-swap",
        logoURL: "https://icons.llama.fi/superman-swap.png",
    },
    {
        label: "Antimatter",
        value: "antimatter",
        logoURL: "https://icons.llama.fi/antimatter.jpg",
    },
    {
        label: "Gensokishi",
        value: "gensokishi",
        logoURL: "https://icons.llama.fi/gensokishi.jpg",
    },
    {
        label: "Animal Farm V1",
        value: "animal-farm-v1",
        logoURL: "https://icons.llama.fi/animal-farm-v1.jpg",
    },
    {
        label: "Sahara Exchange",
        value: "sahara-exchange",
        logoURL: "https://icons.llama.fi/sahara-exchange.png",
    },
    {
        label: "Maia DAO",
        value: "maia-dao",
        logoURL: "https://icons.llama.fi/maia-dao.png",
    },
    {
        label: "Elephant Money",
        value: "elephant-money",
        logoURL: "https://icons.llama.fi/elephant-money.png",
    },
    {
        label: "Based V1",
        value: "based-v1",
        logoURL: "https://icons.llama.fi/based-v1.jpg",
    },
    {
        label: "Minimax",
        value: "minimax",
        logoURL: "https://icons.llama.fi/minimax.png",
    },
] as ProtocolOption[];
