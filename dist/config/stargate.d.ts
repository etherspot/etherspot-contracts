interface StargateConfig {
    [key: string]: {
        stargateRouter: string;
        chainId: number;
    };
}
declare const config: StargateConfig;
export default config;
