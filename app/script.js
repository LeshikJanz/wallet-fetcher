import "babel-polyfill";

import { fetchWallet } from "./api"
import { showDatabases } from "./db"

async function fetchWallets() {
  try {
    const fullData = await fetchWallet("http://api.bsod.pw/api/walletEx?address=LM494cj2PFbVqFvbau8vdrH9rxi4MRVkUr");
    const parsedData = JSON.parse(JSON.stringify(fullData))

    console.log("")
    console.log("parsedData")
    console.log(parsedData)
    // showDatabases()
  } catch (error) {
    console.error(error)
  }
}

function runDaemon() {
  fetchWallets()

  // Fetching wallet every 10 sec
  setInterval(() => {
    fetchWallets()
  }, 10000)
}


// Start point
runDaemon()