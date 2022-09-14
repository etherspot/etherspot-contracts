"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const TASK_DEPLOY_DIAMOND = 'deploy-diamonds';
(0, config_1.task)(TASK_DEPLOY_DIAMOND, 'Deploy diamond contract and facets')
    .setAction(async (args, hre) => {
    const { run } = hre;
    await run('deploy', {
        tags: 'bridges',
    });
});
