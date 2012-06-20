var ROBOHORNET_DATA = {
  /**
   * Benchmark version.
   *
   * @type {string}
   */
  version: 'RH-A1',

  /**
   * List of product, application and library tags.
   *
   * name: Short human readable name of tag.
   */
  productTags: {
    G_SPREADSHEETS: {
      name: 'Google Spreadsheets'
    },
    G_PRESENTATIONS: {
      name: 'Google Presentations'
    },
    G_MAPS: {
      name: 'Google Maps'
    },
    YUI: {
      name: 'YUI'
    },
    JQUERY: {
      name: 'jQuery'
    },
    EMBER: {
      name: 'Ember'
    },
    HANDLEBARS: {
      name: 'Handlebars'
    },
    METAMORPH: {
      name: 'Metamorph.js'
    }
  },
  

  /**
   * List of technology tags.
   *
   * name: Short human readable name of tag.
   */
  technologyTags: {
    TABLE: {
      name: 'Table'
    },
    DOM: {
      name: 'DOM'
    },
    CSS_SELECTORS: {
      name: 'CSS Selectors'
    },
    CANVAS: {
      name: 'Canvas'
    },
    SCROLLING: {
      name: 'Scrolling'
    },
    SVG: {
      name: 'SVG'
    },
    JS: {
      name: 'Javascript'
    },
    MATH: {
      name: 'Math'
    }
  },

  /**
   * List of benchmarks. Array of objects.
   *
   * name:         Short human readable name of benchmark.
   * description:  Description of benchmark.
   * filename:     Filename of benchmark, each benchmark file must implement a test
   *               function and may implement a setUp and tearDown function.
   * runs:         List of parameters to feed to test, setUp and tearDown
   *               functions. For each entry a test run is constructed and the
   *               parameter in the second field is fed to the test function.
   *               The first field is a short human readable description of the
   *               parameter.
   * weight:       Weight of test as relative to the other tests in the file.
   *               A percentage weight will be computed based on the relative
   *               weight of each benchmark.
   * baselineTime: Baseline time, in milliseconds.
   */
  benchmarks: [
    {
      name: 'Add Rows to Table',
      issueNumber: 10,
      description: 'Tests adding rows to an existing table',
      filename: 'tests/addrow.html',
      runs: [
        ['250 rows',   250],
        ['1000 rows', 1000]
      ],
      weight: 2,
      baselineTime: 43.61,
      tags: ['G_SPREADSHEETS', 'TABLE', 'DOM', 'YUI', 'JQUERY', 'EMBER'],
      extended: false
    },

    {
      name: 'Add Columns to Table',
      issueNumber: 11,
      description: 'Tests adding columns to an existing table',
      filename: 'tests/addcol.html',      
      runs: [
        ['250 columns',   250],
        ['1000 columns', 1000]
      ],
      weight: 1.5,
      baselineTime: 73.25,
      tags: ['G_SPREADSHEETS', 'TABLE', 'DOM', 'YUI'],
      extended: false
    },

    {
      name: 'Descendant Selector',
      issueNumber: 12,
      description: 'Tests descendant selectors at different DOM depths',
      filename: 'tests/descendantselector.html',
      runs: [
        ['1000 nodes deep', 1000]
      ],
      weight: 2.5,
      baselineTime: 35.27,
      tags: ['DOM', 'CSS_SELECTORS', 'YUI'],
      extended: false
    },

    {
      name: '2D Canvas Draw',
      issueNumber: 13,
      description: 'Test 2D canvas line painting.',
      filename: 'tests/canvasdrawline.html',
      runs: [
        ['500 lines', 500],
        ['2500 lines', 2500]
      ],
      weight: 3.5,
      baselineTime: 97.79,
      tags: ['CANVAS', 'G_PRESENTATIONS', 'YUI'],
      extended: false
    },

    {
      name: '2D Canvas toDataURL',
      issueNumber: 14,
      description: 'Test converting a 2D canvas to a data URI',
      filename: 'tests/canvastodataurl.html',
      runs: [
        ['256x256, 1000 lines', [256, 1000]],
        ['512x512, 1000 lines', [512, 1000]],
        ['1024x1024, 1000 lines', [1024, 1000]]
      ],
      weight: 2,
      baselineTime: 724.78,
      tags: ['CANVAS', 'G_PRESENTATIONS'],
      extended: false
    },

    {
      name: 'innerHTML Table',
      issueNumber: 15,
      description: 'Test table render speed after innerHTML.',
      filename: 'tests/createtable.html',
      runs: [
        ['200x10', [200, 10]],
        ['200x50', [200, 50]],
        ['200x100', [200, 100]]
      ],
      weight: 2,
      baselineTime: 392.75,
      tags: ['DOM', 'G_SPREADSHEETS', 'TABLE', 'YUI', 'JQUERY', 'EMBER'],
      extended: false
    },

    {
      name: 'Table scrolling',
      issueNumber: 16,
      description: 'Test scrolling speed using scrollTop',
      filename: 'tests/table_scrolltop.html',
      runs: [
        ['500x10', [500, 10]],
        ['500x50', [500, 50]],
        ['1000,10', [1000, 10]],
        ['1000,50', [1000, 50]]
      ],
      weight: 2,
      baselineTime: 1306.62,
      tags: ['DOM', 'G_SPREADSHEETS', 'TABLE', 'SCROLLING', 'YUI'],
      extended: false
    },

    {
      name: 'Resize columns',
      issueNumber: 17,
      description: 'Test resizing columns in a table',
      filename: 'tests/resizecol.html',
      runs: [
        ['500x10', [500, 10]],
        ['500x50', [500, 50]]
      ],
      weight: 2,
      baselineTime: 1944.59,
      tags: ['DOM', 'TABLE', 'G_SPREADSHEETS', 'YUI'],
      extended: false
    },

    {
      name: 'SVG resize',
      issueNumber: 18,
      description: 'Test resizing SVGs',
      filename: 'tests/svgresize.html',
      runs: [
        ['50 SVGs', 50],
        ['100 SVGs', 100]
      ],
      weight: 2,
      baselineTime: 234.91,
      tags: ['SVG', 'G_PRESENTATIONS', 'YUI'],
      extended: false
    },

    {
      name: 'ES5 Property Accessors',
      issueNumber: 19,
      description: 'Test ES5 getter/setters',
      filename: 'tests/property_accessors.html',
      runs: [
        ['Getter', 'GET'],
        ['Setter', 'SET'],
        ['Combined', '']
      ],
      weight: 1,
      baselineTime: 84.50,
      tags: ['JS', 'EMBER'],
      extended: false
    },

    {
      name: 'Calculate primes',
      issueNumber: 20,
      description: 'Test calculating primes from 2 to N',
      filename: 'tests/primes.html',
      runs: [
        ['Primes up to 1000', 1000],
        ['Primes up to 10000', 10000],
        ['Primes up to 100000', 100000]
      ],
      weight: 1,
      baselineTime: 98.52,
      tags: ['MATH', 'G_MAPS', 'JQUERY', 'EMBER', 'HANDLEBARS'],
      extended: false
    },

    {
      name: 'Argument instantiation',
      issueNumber: 21,
      description: 'Test referencing the arguments array',
      filename: 'tests/varargs.html',
      runs: [
        ['100 Instantiations', 100],
        ['1000 Instantiations', 1000],
        ['1000000 Instantiations', 1000000]
      ],
      weight: 2,
      baselineTime: 272.89,
      tags: ['JS', 'YUI', 'JQUERY', 'EMBER'],
      extended: false
    },

    {
      name: 'Animated GIFS',
      issueNumber: 22,
      description: 'Test scrolling lots of animated GIFs',
      filename: 'tests/animated_gifs.html',
      runs: [
        ['20x10 GIFs', [20, 10]],
        ['100x10 GIFs', [100, 10]],
        ['100x100 GIFs', [100, 100]]
      ],
      weight: 0.25,
      baselineTime: 187.83,
      tags: ['DOM', 'SCROLLING'],
      extended: false
    },

    {
      name: 'offsetHeight triggers reflow',
      issueNumber: 30,
      description: 'Test the affect of forcing a reflow by calling offsetHeight',
      filename: 'tests/offsetreflow.html',
      runs: [
        ['100 Reflows', 100],
        ['1000 Reflows', 1000],
        ['10000 Reflows', 10000]
      ],
      weight: 3,
      baselineTime: 587.35,
      tags: ['DOM', 'G_SPREADSHEETS', 'YUI', 'JQUERY', 'EMBER'],
      extended: false
    },

    {
      name: 'DOM Range API',
      issueNumber: 9,
      description: 'Test replacing a number of DOM nodes using the Range API',
      filename: 'tests/range.html',
      runs: [
        ['50 Nodes', 50],
        ['100 Nodes', 100]
      ],
      weight: 1,
      baselineTime: 105.99,
      tags: ['DOM', 'YUI', 'METAMORPH'],
      extended: false
    },

    {
      name: 'Write to localStorage',
      issueNumber: 23,
      description: 'Test the localStorage write performance',
      filename: 'tests/localstorage_write.html',
      runs: [
        ['50 Writes', 50],
        ['100 Writes', 100],
        ['1000 Writes', 1000]
      ],
      weight: 2,
      baselineTime: 43.34,
      tags: ['JS', 'YUI'],
      extended: false
    },

    {
      name: 'Read from localStorage',
      issueNumber: 24,
      description: 'Test the localStorage read performance',
      filename: 'tests/localstorage_read.html',
      runs: [
        ['50 Reads', 50],
        ['100 Reads', 100],
        ['1000 Reads', 1000]
      ],
      weight: 2,
      baselineTime: 33.48,
      tags: ['JS', 'YUI'],
      extended: false
    }
  ]
};
