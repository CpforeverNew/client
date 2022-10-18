const fonts = {
    custom: {
        families: [
            'Arial:n4,n7',
            'Arial Narrow:n4,n7',
            'Asterisk:n4',
            'Burbank Small:n4,n7',
            'CCComiccrazy:n4',
            'CCFaceFront:i7'
        ],
        urls: [
            window.location.hostname != 'localhost' ? CDN_URL + 'assets/styles/fonts.css' : '/assets/styles/fonts.css'
        ]
    }
}

export default fonts
