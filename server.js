const dockerUsername = process.env.DOCKER_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('containers are awesome!');
    await sleep(5000);
  }
}

main();
