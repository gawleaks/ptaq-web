module.exports = {
  apps: [
    {
      name: "ptaq-web",
      script: "./node_modules/.bin/next",
      args: "start -p 2137",
      cwd: ".",
      interpreter: "/usr/local/bin/node22",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "ptaq-web-stg",
      script: "./node_modules/.bin/next",
      args: "start -p 2237",
      cwd: ".",
      interpreter: "/usr/local/bin/node22",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
