// PM2 process file:  pm2 start ecosystem.config.cjs --env production
module.exports = {
  apps: [
    {
      name: "portfolio-api",
      script: "src/server.js",
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "300M",
      env: { NODE_ENV: "development" },
      env_production: { NODE_ENV: "production" },
    },
  ],
};
