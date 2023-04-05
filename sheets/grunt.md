---
title: Grunt
createdDate: 2023-04-01
updatedDate: 2023-04-01
published: true
slug: grunt
description: Grunt Task Runner is a JavaScript Task Runner.
---

Use Grunt when performing repetitive tasks like minification, compilation, unit testing, linting, etc. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

## Prerequisites

Install Node.js (https://nodejs.org/en/download), NPM or Yarn, and Grunt CLI:

```bash
# NPM
npm install -g npm

# Or Yarn
sudo npm install --global yarn

# Grunt: First you need to install Grunt for the command line as a global module, after which you have grunt command available globally.
npm install -g grunt-cli
```

## Example Project Folder Structure
```bash
project
├── Gruntfile.js
├── index.html
├── package.json
├── scripts
│   └── somefile.js
└── styles
    └── main.scss
```

## Configure a Gruntfile.js

Example Gruntfile.js configuration below enables 'watch', which looks for changes and processes desired tasks based on options you set inside watch object. 

Tasks inside of the 'watch' object refer to the grunt.registerTasks toward bottom, which can run multiple subtasks. Any combination of tasks can be added. This is just one example. In this gruntfile config, SASS and Minification tasks are run each time you save your files with CTRL + S.

```bash
module.exports = function(grunt) {

grunt.initConfig({

	watch: {
	  sass: {
	    files: '**/*.scss', // ** any directory; * any file
	    tasks: ['css']
	  },

	  uglify: {
	    files: 'features/js/util.js',
	    tasks: ['uglify']
	  }
	},

	cssmin: {
          build: {
            src: 'common/css/main.css',
            dest: 'common/css/main.min.css'
          }
        },

          sass: {
            dev: {    // indicates that it will be used only during development
            files: {
              // destination          // source file
              'common/css/main.css': 'common/scss/main.scss'
            }
          }
        },

          uglify: {
            build: {
              files: {
              'features/js/util.min.js': ['features/js/util.js']
            }
          }
        }	
});

grunt.registerTask('css', ['sass', 'cssmin']);
grunt.registerTask('js', ['uglify']);

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
};
```

## devDependencies: package.json

The package.json file will need to be populated with a devDependencies object listing all of the dependencies your project relies on. 

```bash
{
  "devDependencies": {
    "grunt": "^1.5.3",
    "grunt-contrib-cssmin": "^3.0.0",
    "grunt-contrib-jshint": "^3.2.0",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-uglify": "^4.0.1",
    "grunt-contrib-watch": "^1.1.0"
  }
}

```

Open a Terminal and run 'npm install' to install the following packages for your particular project.


```bash
npm install
```

## Enable Watch

In your Terminal, execute the following command in your project's directory to start watching your changes as you begin working.

```bash
grunt watch
```

To stop watching

```bash
CTLR + C
```

