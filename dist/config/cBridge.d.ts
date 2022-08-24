interface cBridgeConfig {
    [key: string]: {
        cBridge: string;
        chainId: number;
    };
}
declare const config: cBridgeConfig;
export default config;
