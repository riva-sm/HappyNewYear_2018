if($(window).width() > 1024)
{
    $('body').parallax({
        'elements': [
            {
                'selector': '.snow1',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.1,
                            'invert': false
                        }
                    }
                }
            },
            {
                'selector': '.snow2',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.2,
                            'invert': true
                        }
                    }
                }
            },
            {
                'selector': '.santa',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 50,
                            'multiplier': 0.002,
                            'unit': '%',
                            'invert': false
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': 50,
                            'multiplier': 0.01,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
            }
        ]
    });
} else {
   // change functionality for larger screens
}

