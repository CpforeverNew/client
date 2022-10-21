let rooms;


rooms = {
	100: {
		key: 'Town',
		scene: require(`@rooms/old/town/Town`).default,
		x: 760,
		y: 660
	},
	110: {
		key: 'Coffee',
		scene: require(`@rooms/old/coffee/Coffee`).default,
		x: 640,
		y: 480
	},
	111: {
		key: 'Book',
		scene: require(`@rooms/old/book/Book`).default,
		x: 1260,
		y: 560
	},
	120: {
		key: 'Dance',
		scene: require(`@rooms/old/dance/spf/Dance`).default,
		x: 360,
		y: 560
	},
	121: {
		key: 'Lounge',
		scene: require(`@rooms/old/lounge/Lounge`).default,
		x: 1120,
		y: 640
	},
	130: {
		key: 'Shop',
		scene: require(`@rooms/spooky_fair/shop/Shop`).default,
		x: 1000,
		y: 560
	},
	200: {
		key: 'Village',
		scene: require(`@rooms/spooky_fair/village/Village`).default,
		x: 800,
		y: 640
	},
	210: {
		key: 'Sport',
		scene: require(`@rooms/old/sport/Sport`).default,
		x: 1000,
		y: 560
	},
	220: {
		key: 'Lodge',
		scene: require(`@rooms/old/lodge/Lodge`).default,
		x: 760,
		y: 800
	},
	221: {
		key: 'Attic',
		scene: require(`@rooms/old/attic/Attic`).default,
		x: 966,
		y: 560
	},
	230: {
		key: 'Mtn',
		scene: require(`@rooms/spooky_fair/mtn/Mtn`).default,
		x: 760,
		y: 440
	},
	300: {
		key: 'Plaza',
		scene: require(`@rooms/spooky_fair/plaza/Plaza`).default,
		x: 760,
		y: 680
	},
	310: {
		key: 'Pet',
		scene: require(`@rooms/old/pet/Pet`).default,
		x: 828,
		y: 520
	},
	320: {
		key: 'Dojo',
		scene: require(`@rooms/old/dojo/Dojo`).default,
		x: 780,
		y: 790
	},
	321: {
		key: 'DojoExt',
		scene: require(`@rooms/spooky_fair/dojoext/DojoExt`).default,
		x: 780,
		y: 790
	},
	330: {
		key: 'Pizza',
		scene: require(`@rooms/spooky_fair/pizza/Pizza`).default,
		x: 780,
		y: 790
	},
	340: {
		key: 'Stage',
		scene: require(`@rooms/old/stage/Stage`).default,
		x: 240,
		y: 660
	},
	341: {
		key: 'Theatre',
		scene: require(`@rooms/old/theatre/Theatre`).default,
		x: 783,
		y: 730
	},
	400: {
		key: 'Beach',
		scene: require(`@rooms/spooky_fair/beach/Beach`).default,
		x: 840,
		y: 680
	},
	410: {
		key: 'Lighthouse',
		scene: require(`@rooms/old/lighthouse/Lighthouse`).default,
		x: 840,
		y: 680
	},
	411: {
		key: 'Beacon',
		scene: require(`@rooms/spooky_fair/beacon/Beacon`).default,
		x: 410,
		y: 800
	},
	800: {
		key: 'Dock',
		scene: require(`@rooms/spooky_fair/dock/Dock`).default,
		x: 800,
		y: 400
	},
	801: {
		key: 'Forts',
		scene: require(`@rooms/spooky_fair/forts/Forts`).default,
		x: 960,
		y: 610
	},
	802: {
		key: 'Rink',
		scene: require(`@rooms/old/rink/spf/Rink`).default,
		x: 770,
		y: 400
	},
	803: {
		key: 'HQ',
		scene: require(`@rooms/old/hq/HQ`).default,
		x: 700,
		y: 700
	},
	804: {
		key: 'Boiler',
		scene: require(`@rooms/old/boiler/Boiler`).default,
		x: 770,
		y: 400
	},
	805: {
		key: 'Berg',
		scene: require(`@rooms/spooky_fair/berg/Berg`).default,
		x: 652,
		y: 448
	},
	806: {
		key: 'Cave',
		scene: require(`@rooms/old/cave/Cave`).default,
		x: 780,
		y: 700
	},
	807: {
		key: 'Shack',
		scene: require(`@rooms/spooky_fair/shack/Shack`).default,
		x: 760,
		y: 680
	},
	808: {
		key: 'Mine',
		scene: require(`@rooms/old/mine/Mine`).default,
		x: 760,
		y: 680
	},
	809: {
		key: 'Forest',
		scene: require(`@rooms/old/forest/Forest`).default,
		x: 760,
		y: 430
	},
	810: {
		key: 'Cove',
		scene: require(`@rooms/old/cove/Cove`).default,
		x: 840,
		y: 480
	},
	813: {
		key: 'Cavemine',
		scene: require(`@rooms/old/cavemine/Cavemine`).default,
		x: 840,
		y: 480
	},
	841: {
		key: 'WinterPart1',
		scene: require(`@rooms/old/winterparty/part1/WinterPart1`).default,
		x: 1000,
		y: 560
	},
	842: {
		key: 'WinterPart2',
		scene: require(`@rooms/old/winterparty/part2/WinterPart2`).default,
		x: 1000,
		y: 560
	},
	843: {
		key: 'WinterPart3',
		scene: require(`@rooms/old/winterparty/part3/WinterPart3`).default,
		x: 1000,
		y: 560
	},
	844: {
		key: 'WinterPart4',
		scene: require(`@rooms/old/winterparty/part4/WinterPart4`).default,
		x: 1000,
		y: 560
	},
	845: {
		key: 'WinterPart5',
		scene: require(`@rooms/old/winterparty/part5/WinterPart5`).default,
		x: 1000,
		y: 560
	},
	846: {
		key: 'WinterPart6',
		scene: require(`@rooms/old/winterparty/part6/WinterPart6`).default,
		x: 1000,
		y: 560
	},
	847: {
		key: 'WinterPart7',
		scene: require(`@rooms/old/winterparty/part7/WinterPart7`).default,
		x: 1000,
		y: 560
	},
	848: {
		key: 'WinterPart8',
		scene: require(`@rooms/old/winterparty/part8/WinterPart8`).default,
		x: 1000,
		y: 560
	},
	849: {
		key: 'WinterPart9',
		scene: require(`@rooms/old/winterparty/part9/WinterPart9`).default,
		x: 1000,
		y: 560
	},
	850: {
		key: 'WinterPart10',
		scene: require(`@rooms/old/winterparty/part10/WinterPart10`).default,
		x: 1000,
		y: 560
	},
	861: {
		key: 'YetiCave',
		scene: require(`@rooms/old/winterparty/yeticave/YetiCave`).default,
		x: 234, 
		y: 547
	},
	898: {
		key: 'Observatory',
		scene: require(`@rooms/old/observatory/Observatory`).default,
		x: 760,
		y: 660
	},
	899: {
		key: 'Circusext',
		scene: require(`@rooms/spooky_fair/circusext/Circusext`).default,
		x: 760,
		y: 660
	},
	916: {
		key: 'AquaGrabber',
		scene: require('@games/aquagrabber/AquaGrabber').default
	},
	900: {
		key: 'AstroBarrier',
		scene: require('@games/astrobarrier/AstroBarrier').default
	},
	905: {
		key: 'CartSurfer',
		scene: require('@games/cartsurfer/CartSurfer').default
	},
	924: {
		key: 'HydroHopper',
		scene: require('@games/hydrohopper/HydroHopper').default
	},
	904: {
		key: 'IceFishing',
		scene: require('@games/icefishing/IceFishing').default
	},
	910: {
		key: 'Pizzatron',
		scene: require('@games/pizzatron/Pizzatron').default
	},
	925: {
		key: 'PuffleRoundup',
		scene: require('@games/puffleroundup/PuffleRoundup').default
	},
	926: {
		key: 'JetPackAdventure',
		scene: require('@games/jetpackadventure/JetPackAdventure').default
	},
	927: {
		key: 'PuffleRescue',
		scene: require('@games/pufflerescue/PuffleRescue').default
	},
	909: {
		key: 'ThinIce',
		scene: require('@games/thinice/ThinIce').default
	},
	908: {
		key: 'BeanCounters',
		scene: require('@games/beanCounters/beanCounters').default
	},
	911: {
		key: 'YumYuck',
		scene: require('@games/yumYuck/yumYuck').default
	},
	928: {
		key: 'PuffleLaunch',
		scene: require('@games/pufflelaunch/PuffleLaunch').default
	},
	998: {
		key: 'Card',
		scene: require('@games/card/Card').default
	},
	999: {
		key: 'Sled',
		scene: require('@games/sled/Sled').default
	},
	1000: {
		key: 'Paddle',
		scene: require('@games/paddle/Paddle').default
	},
	1001: {
		key: 'Spin',
		scene: require('@games/spin/Spin').default
	},
	1002: {
		key: 'RingTheBell',
		scene: require('@games/ringthebell/RingTheBell').default
	},
	1003: {
		key: 'PuffleSuffle',
		scene: require('@games/pufflesuffle/PuffleSuffle').default
	}
}


export default rooms
