#!/usr/bin/env node

const arg = require('arg');
const path = require('path');
const c = require('ansi-colors');
const pkgUp = import('pkg-up');

const usage = () => {
    console.log(c.greenBright(`tool [cmd]\n --start\tStart the app\n --build\tBuild the app`));
}




try {

    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    if (args['--start']) {
        const packageJsonPath = pkgUp.sync(process.cwd()) 
        // path.join(process.cwd(), 'package.json');
        // const pkg = require(packageJsonPath);
        console.log("hello:", packageJsonPath);

        if (pkg.tool) {
            console.log('found the tool', pkg.tool);
        } else {
            console.log(c.yellow('config not found, using default'));
        }

        console.log(c.green('Starting the server...'));
    } else {
        console.log(c.redBright('No command specified'));
        usage();

    }

} catch (error) {
    console.log(c.blue(error.message));
    usage();
}

