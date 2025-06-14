import fonts from './fonts'
import igloos from './igloos'
import interfaces from './interfaces'
import rooms from './rooms'
import pin from './pin'


if (!localStorage.getItem('webgl')) { localStorage.setItem('webgl', 'true')}
if (!localStorage.getItem('debugMode')) { localStorage.setItem('debugMode', 'false')}

const cpforever = {
    type: (localStorage.getItem('webgl') == 'true')
        ? Phaser.WEBGL
        : Phaser.CANVAS,

    width: 1520,
    height: 960,
    transparent: true,
    roundPixels: true,

    loader: {
        baseURL:  window.location.hostname != 'localhost' ? CDN_URL : ""
    },

    dom: {
        createContainer: true
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: (localStorage.getItem('debugMode') === 'true') ? true : false,
                renderLine: (localStorage.getItem('debugMode') === 'true') ? true : false,
                showInternalEdges: true
            },
            gravity: false
        }
    },

    plugins: {
        global: [ NineSlice.Plugin.DefaultCfg ]
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    crumbs: {
        fonts: fonts,
        pin: pin,
        scenes: {
            igloos: igloos,
            interfaces: interfaces,
            rooms: rooms
        },
        iglooIdOffset: 2000
    }
}

export default cpforever