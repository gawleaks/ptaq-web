module.exports = {
  apps: [
    {
      name: "ptaq-web",
      script: "npm22",
      args: "start -- -p 2137",
      cwd: ".",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
