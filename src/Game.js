import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'

import cpforever from './data/game'

import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        
        Sentry.init({
            dsn: "https://f7e3403138e048508f9c37c678744cc9@o1384363.ingest.sentry.io/6702712",
            integrations: [new BrowserTracing()],
        
            tracesSampleRate: 1.0,
        });

        if (window.location.hostname == 'play.cpforever.org' || window.location.hostname == 'staging.cpforever.org' || window.location.hostname == 'localhost' || window.location.hostname.match(/^[0-9].+$/) != null) {
            this.crumbs = config.crumbs
            this.network = new Network(this)

            this.scene.add('Boot', Boot, true)

            this.logBanner()
        }
        else {
            console.log("%c%s", "color: #ff0000; font-size: 20px;", "You are not on the correct domain.\nPlease visit https://play.cpforever.org to play.")
			window.open("https://play.cpforever.org","_self")
        }
    }
	
	logBanner() {
        // Please leave this line here for credit purposes
        console.log('CPF is based on the Yukon client - https://github.com/wizguin/yukon')

        // Edit this line if you want to display a custom name
		console.log(`%cCPForever ${VERSION}`, 'color: white; background: black; border-left: 8px solid #0280cd; padding: 0px 8px 0px 8px;')
    }

}

window.onload = () => {
    new Game(cpforever)
}
