/*
 * DC Link daily puzzle data
 *
 * Add each new puzzle using its Washington, DC publication date.
 * The game changes puzzles at 6:00 AM Eastern Time and falls back to the
 * most recent available puzzle if today's date has not yet been added.
 */

const DC_LINK_PUZZLES = {
'2026-07-28': {
  number: 1,
  groups: [
    {
      id: 'green',
      label: 'Places beginning with “Union”',
      color: 'green',
      items: [
        'Union Station',
        'Union Market',
        'Union Stage',
        'Union Pub'
      ]
    },
    {
      id: 'yellow',
      label: 'DC traffic circles',
      color: 'yellow',
      items: [
        'Dupont Circle',
        'Logan Circle',
        'Thomas Circle',
        'Scott Circle'
      ]
    },
    {
      id: 'blue',
      label: 'DC music venues',
      color: 'blue',
      items: [
        '9:30 Club',
        'Black Cat',
        'The Anthem',
        'Howard Theatre'
      ]
    },
    {
      id: 'purple',
      label: 'Green Line Metro stations',
      color: 'purple',
      items: [
        'Navy Yard-Ballpark',
        'Shaw-Howard U',
        'U Street',
        'Waterfront'
      ]
    }
  ]
};
