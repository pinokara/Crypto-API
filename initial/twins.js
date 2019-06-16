module.exports = {
    name: "twins",
    symbol: "TWINS",
    update_timeout: 10,
    check_timeout: 250,
    wallet: {
        host: "localhost",
        port: 37818,
        user: "sha1",
        pass: "sha1",
        timeout: 8000
    },
    confirmations: 40,
    display: {
        api: true,
        markets: true,
        richlist: true,
        twitter: true,
        facebook: false,
        googleplus: false,
        bitcointalk: false,
        website: false,
        slack: false,
        github: false,
        search: true,
        movement: true,
        network: true
    },
    index: {
        show_hashrate: true,
        difficulty: "POW",
        last_txs: 100
    },
    api: {
        blockindex: 1337,
        blockhash: "00000000001b8c30360db57b575b3c2bf668b0ed50683f567afd47ae1773efb8",
        txhash: "285feead54e322aa69f649c4078766171df358a12f5f1517d61f303780e25511",
        address: "CaxX1HVWzbQ516w61XbtHR63vNmp2mvLMZ"
    },
    richlist: {
        distribution: true,
        received: true,
        balance: true
    },
    movement: {
        min_amount: 100,
        low_flag: 1000,
        high_flag: 5000
    },
    twitter: "suprnurd",
    facebook: "yourfacebookpage",
    googleplus: "yourgooglepluspage",
    bitcointalk: "yourbitcointalktopicvalue",
    github: "yourgithubusername/yourgithubrepo",
    slack: "yourfullslackinviteurl",
    website: "yourfullwebsiteurl",
    genesis_tx: "fa6ef9872494fa9662cf0fecf8c0135a6932e76d7a8764e1155207f3205c7c88",
    genesis_block: "00000f639db5734b2b861ef8dbccc33aebd7de44d13de000a12d093bcc866c64",
    heavy: false,
    txcount: 100,
    show_sent_received: true,

    // how to calculate current coin supply
    // COINBASE : total sent from coinbase (PoW)
    // GETINFO : retreive from getinfo api call (PoS)
    // HEAVY: retreive from heavys getsupply api call
    // BALANCES : total of all address balances
    // TXOUTSET : retreive from gettxoutsetinfo api call
    supply: "TXOUTSET",
    nethash: "getnetworkhashps",
    nethash_units: "G",
    labels: {
        //  "CLkWg5YSLod772uLzsFRxHgHiWVGAJSezm": {"label": "Donation Address", "type":"primary", "url":"http://example.com"},
        //  "CaxX1HVWzbQ516w61XbtHR63vNmp2mvLMZ": {"label": "Max Lee War Chest"}
    }
}