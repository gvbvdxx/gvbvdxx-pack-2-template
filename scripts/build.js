var fs = require("fs");

var html = fs.readFileSync("src/hello.html"); //your html template goes here, its optional.

var gvbvdxxPack = require("gvbvdxx-pack-2"); //load gvbvdxx pack 2

var files = gvbvdxxPack.scanFiles("./src/"); //Scan for all files in "./src/"

var compiled = gvbvdxxPack.compile(files); //compile the files for gvbvdxx pack to read.


gvbvdxxPack.build(compiled, html); //open up a devlopment server for you to see your creation.
