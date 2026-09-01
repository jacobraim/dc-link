/*
 * DC Link daily puzzle data
 *
 * Add each new puzzle using its Washington, DC publication date.
 * The game changes puzzles at 6:00 AM Eastern Time and falls back to the
 * most recent available puzzle if today's date has not yet been added.
 */

const DC_LINK_PUZZLES = {

  '2026-09-01': {
    number: 1,
    groups: [
      {
        id: 'green',
        label: 'Places beginning with “Union”',
        color: 'blue',
        items: [
          'STATION',
          'MARKET',
          'STAGE',
          'PUB'
        ]
      },
      {
        id: 'yellow',
        label: 'DC traffic circles',
        color: 'yellow',
        items: [
          'DUPONT',
          'LOGAN',
          'THOMAS',
          'SCOTT'
        ]
      },
      {
        id: 'blue',
        label: 'DC music venues',
        color: 'green',
        items: [
          '9:30',
          'BLACK CAT',
          'ANTHEM',
          'HOWARD'
        ]
      },
      {
        id: 'purple',
        label: 'Green Line stations',
        color: 'purple',
        items: [
          'WATERFRONT',
          'U STREET',
          'SHAW',
          'NAVY YARD'
        ]
      }
    ]
  },

  '2026-09-02': {
    number: 2,
    groups: [
      {
        id: 'green',
        label: 'DC universities',
        color: 'green',
        items: [
          'HOWARD',
          'AMERICAN',
          'CATHOLIC',
          'GALLAUDET'
        ]
      },
      {
        id: 'yellow',
        label: 'Historic DC hotels',
        color: 'yellow',
        items: [
          'MAYFLOWER',
          'WILLARD',
          'JEFFERSON',
          'HAY-ADAMS'
        ]
      },
      {
        id: 'blue',
        label: 'Washington publications',
        color: 'blue',
        items: [
          'WASHINGTONIAN',
          'POLITICO',
          'HILL',
          'ROLL CALL'
        ]
      },
      {
        id: 'purple',
        label: '___ Park neighborhoods',
        color: 'purple',
        items: [
          'CLEVELAND',
          'WOODLEY',
          'GLOVER',
          'TAKOMA'
        ]
      }
    ]
  },

  '2026-09-03': {
    number: 3,
    groups: [
      {
        id: 'green',
        label: 'DC pro sports teams',
        color: 'green',
        items: [
          'CAPITALS',
          'MYSTICS',
          'DEFENDERS',
          'UNITED'
        ]
      },
      {
        id: 'yellow',
        label: 'Single-letter DC streets',
        color: 'yellow',
        items: [
          'H',
          'K',
          'M',
          'U'
        ]
      },
      {
        id: 'blue',
        label: 'First words of DC restaurants',
        color: 'blue',
        items: [
          'OLD',
          "BEN'S",
          "MARTIN'S",
          "DUKE'S"
        ]
      },
      {
        id: 'purple',
        label: 'Washington ___',
        color: 'purple',
        items: [
          'POST',
          'BALLET',
          'MONUMENT',
          'NATIONALS'
        ]
      }
    ]
  },

  '2026-09-04': {
    number: 4,
    groups: [
      {
        id: 'green',
        label: 'Metro lines',
        color: 'green',
        items: [
          'RED',
          'BLUE',
          'GREEN',
          'SILVER'
        ]
      },
      {
        id: 'yellow',
        label: 'DC universities',
        color: 'yellow',
        items: [
          'HOWARD',
          'AMERICAN',
          'CATHOLIC',
          'GALLAUDET'
        ]
      },
      {
        id: 'blue',
        label: '___ House',
        color: 'blue',
        items: [
          'WHITE',
          'BLAIR',
          'OCTAGON',
          'DUMBARTON'
        ]
      },
      {
        id: 'purple',
        label: 'Washington ___',
        color: 'purple',
        items: [
          'POST',
          'BALLET',
          'NATIONALS',
          'MONUMENT'
        ]
      }
    ]
  },

  '2026-09-05': {
    number: 5,
    groups: [
      {
        id: 'green',
        label: 'Smithsonian museums',
        color: 'green',
        items: [
          'HIRSHHORN',
          'RENWICK',
          'PORTRAIT',
          'ANACOSTIA'
        ]
      },
      {
        id: 'yellow',
        label: 'DC neighborhoods',
        color: 'yellow',
        items: [
          'BLOOMINGDALE',
          'TRUXTON',
          'ECKINGTON',
          'LEDROIT'
        ]
      },
      {
        id: 'blue',
        label: 'DC theaters',
        color: 'blue',
        items: [
          'FORD’S',
          'WOOLLY',
          'ARENA',
          'STUDIO'
        ]
      },
      {
        id: 'purple',
        label: 'Words that can precede “Stage”',
        color: 'purple',
        items: [
          'UNION',
          'CENTER',
          'MAIN',
          'SECOND'
        ]
      }
    ]
  },

  '2026-09-06': {
    number: 6,
    groups: [
      {
        id: 'green',
        label: 'DC restaurant names',
        color: 'green',
        items: [
          'ALBI',
          'MAYDĀN',
          'ROOSTER',
          'IMPERFECTO'
        ]
      },
      {
        id: 'yellow',
        label: 'Places on the National Mall',
        color: 'yellow',
        items: [
          'LINCOLN',
          'JEFFERSON',
          'HIRSHHORN',
          'CASTLE'
        ]
      },
      {
        id: 'blue',
        label: 'DC neighborhoods with “Heights”',
        color: 'blue',
        items: [
          'COLUMBIA',
          'CONGRESS',
          'WASHINGTON',
          'LINCOLN'
        ]
      },
      {
        id: 'purple',
        label: 'Presidential surnames',
        color: 'purple',
        items: [
          'ADAMS',
          'MONROE',
          'GARFIELD',
          'CLEVELAND'
        ]
      }
    ]
  },

  '2026-09-07': {
    number: 7,
    groups: [
      {
        id: 'green',
        label: 'DC music venues',
        color: 'green',
        items: [
          'ANTHEM',
          'ATLANTIS',
          'BLACK CAT',
          'HOWARD'
        ]
      },
      {
        id: 'yellow',
        label: 'Metro stations with “Square”',
        color: 'yellow',
        items: [
          'MCPHERSON',
          'JUDICIARY',
          'MOUNT VERNON',
          'FARRAGUT'
        ]
      },
      {
        id: 'blue',
        label: 'First words of famous DC restaurants',
        color: 'blue',
        items: [
          'OLD',
          'IRON',
          'BLUE',
          'RED'
        ]
      },
      {
        id: 'purple',
        label: '___ Line',
        color: 'purple',
        items: [
          'RED',
          'BLUE',
          'GREEN',
          'YELLOW'
        ]
      }
    ]
  }

};
