let rooms;
let type = localStorage.clientMode == "vanilla" ? 'new' : 'old';



rooms = {
	100: {
		key: 'Town',
		scene: require(`@rooms/${type}/town/ffc/Town`).default,
		x: 760,
		y: 660
	},
	110: {
		key: 'Coffee',
		scene: require(`@rooms/${type}/coffee/Coffee`).default,
		x: 640,
		y: 480
	},
	111: {
		key: 'Book',
		scene: require(`@rooms/${type}/book/Book`).default,
		x: 1260,
		y: 560
	},
	120: {
		key: 'Dance',
		scene: require(`@rooms/${type}/dance/Dance`).default,
		x: 360,
		y: 560
	},
	121: {
		key: 'Lounge',
		scene: require(`@rooms/${type}/lounge/Lounge`).default,
		x: 1120,
		y: 640
	},
	130: {
		key: 'Shop',
		scene: require(`@rooms/${type}/shop/Shop`).default,
		x: 1000,
		y: 560
	},
	200: {
		key: 'Village',
		scene: require(`@rooms/${type}/village/Village`).default,
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
		scene: require(`@rooms/${type}/lodge/Lodge`).default,
		x: 760,
		y: 800
	},
	221: {
		key: 'Attic',
		scene: require(`@rooms/${type}/attic/Attic`).default,
		x: 966,
		y: 560
	},
	230: {
		key: 'Mtn',
		scene: require(`@rooms/${type}/mtn/Mtn`).default,
		x: 760,
		y: 440
	},
	300: {
		key: 'Plaza',
		scene: require(`@rooms/${type}/plaza/ffc/Plaza`).default,
		x: 760,
		y: 680
	},
	310: {
		key: 'Pet',
		scene: require(`@rooms/${type}/pet/Pet`).default,
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
		scene: require(`@rooms/${type}/dojoext/DojoExt`).default,
		x: 780,
		y: 790
	},
	330: {
		key: 'Pizza',
		scene: require(`@rooms/${type}/pizza/Pizza`).default,
		x: 780,
		y: 790
	},
	340: {
		key: 'Stage',
		scene: require(`@rooms/${type}/stage/Stage`).default,
		x: 240,
		y: 660
	},
	341: {
		key: 'Theatre',
		scene: require(`@rooms/${type}/theatre/Theatre`).default,
		x: 240,
		y: 660
	},
	400: {
		key: 'Beach',
		scene: require(`@rooms/${type}/beach/ffc/Beach`).default,
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
		scene: require(`@rooms/old/beacon/Beacon`).default,
		x: 410,
		y: 800
	},
	430: {
		key: 'HotelLobby',
		scene: require('@rooms/new/hotellobby/HotelLobby').default,
		x: 800,
		y: 350
	},
	431: {
		key: 'HotelSpa',
		scene: require('@rooms/new/hotelspa/HotelSpa').default,
		x: 220,
		y: 600
	},
	432: {
		key: 'HotelRoof',
		scene: require('@rooms/new/hotelroof/HotelRoof').default,
		x: 220,
		y: 600
	},
	800: {
		key: 'Dock',
		scene: require(`@rooms/${type}/dock/ffc/Dock`).default,
		x: 800,
		y: 400
	},
	801: {
		key: 'Forts',
		scene: require(`@rooms/${type}/forts/Forts`).default,
		x: 960,
		y: 610
	},
	802: {
		key: 'Rink',
		scene: require(`@rooms/${type}/rink/Rink`).default,
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
		scene: require(`@rooms/old/berg/Berg`).default,
		x: 652,
		y: 448
	},
	806: {
		key: 'Cave',
		scene: require(`@rooms/${type}/cave/Cave`).default,
		x: 780,
		y: 700
	},
	807: {
		key: 'Shack',
		scene: require(`@rooms/${type}/shack/Shack`).default,
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
		scene: require(`@rooms/${type}/forest/ffc/Forest`).default,
		x: 760,
		y: 430
	},
	810: {
		key: 'Cove',
		scene: require(`@rooms/${type}/cove/Cove`).default,
		x: 840,
		y: 480
	},
	813: {
		key: 'Cavemine',
		scene: require(`@rooms/old/cavemine/Cavemine`).default,
		x: 840,
		y: 480
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
		scene: require('@games/beancounters/beanCounters').default
	},
	911: {
		key: 'YumYuck',
		scene: require('@games/yumyuck/yumYuck').default
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
	}
}

export default rooms
