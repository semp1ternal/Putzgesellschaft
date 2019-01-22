module.exports = {
  apps : [{
    name: 'putzgesellschaft',
    script: 'main.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    // instances: 1,
    // autorestart: true,
    // watch: false,
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'virtcon-eb6a72g1',
      host : '185.230.160.16',
      ref  : 'origin/master',
      repo : 'https://github.com/semp1ternal/Putzgesellschaft.git',
      path : '/DiscordBots/putzgesellschaft',
      'post-deploy' : 'npm install && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
};
