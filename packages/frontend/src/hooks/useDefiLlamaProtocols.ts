// TODO: uncomment when protocols api will work again

// import { useEffect, useState } from "react";
// import type { ProtocolOption } from "../types";

// export type Response = {
//     name: string;
//     slug: string;
//     logo: string;
// }[];

// export const useDefiLlamaProtocols = (): {
//     loading: boolean;
//     protocols: ProtocolOption[];
// } => {
//     const [loading, setLoading] = useState(false);
//     const [protocols, setProtocols] = useState<ProtocolOption[]>([]);

//     useEffect(() => {
//         let cancelled = false;
//         const fetchData = async (): Promise<void> => {
//             if (!cancelled) setLoading(true);
//             try {
//                 const response = await fetch("https://api.llama.fi/protocols");
//                 if (!response.ok) {
//                     console.error(
//                         "could not fetch supported protocols from defillama",
//                     );
//                     return;
//                 }
//                 const rawProtocols = (await response.json()) as Response;
//                 const protocols = rawProtocols.map((rawProtocol) => ({
//                     label: rawProtocol.name,
//                     value: rawProtocol.slug,
//                     logoURL: rawProtocol.logo,
//                 }));
//                 if (!cancelled) setProtocols(protocols);
//             } catch (error) {
//                 console.error(
//                     "error fetching defillama supported protocols",
//                     error,
//                 );
//             } finally {
//                 if (!cancelled) setLoading(false);
//             }
//         };
//         fetchData();
//         return () => {
//             cancelled = true;
//         };
//     }, []);

//     return { loading, protocols };
// };
