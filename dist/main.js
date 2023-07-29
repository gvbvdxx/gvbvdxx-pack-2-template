var GPDATA = {
 "fileTemplate": {
  "src_hello.html": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\hello.html\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\hello.html\";\n    <!DOCTYPE HTML>\r\n    \r\n    <html>\r\n        <head>\r\n            \r\n            <title>Hello, Gvbvdxx Pack 2!</title>\r\n            \r\n        </head>\r\n        <body>\r\n            \r\n            <script src=\"main.js?n=1\"></script>\r\n            \r\n        </body>\r\n    </html>\n    return module;\n})();",
   "name": "src\\hello.html",
   "dirname": "src_hello.html",
   "realdir": "src_hello.html",
   "realdirNoReplacer": "src\\hello.html",
   "uncompileddata": "<!DOCTYPE HTML>\r\n\r\n<html>\r\n\t<head>\r\n\t\t\r\n\t\t<title>Hello, Gvbvdxx Pack 2!</title>\r\n\t\t\r\n\t</head>\r\n\t<body>\r\n\t\t\r\n\t\t<script src=\"main.js?n=1\"></script>\r\n\t\t\r\n\t</body>\r\n</html>"
  },
  "src_index.js": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\index.js\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js\";\n    var log = require(\"log\");\r\n    var elements = require(\"elements\");\r\n    var fileLoader = require(\"file-loader\");\r\n    \r\n    var elementJSON = [{\r\n            element: \"style\",\r\n            innerHTML: fileLoader.read(\"src/stylesheet.css\") //file loader can read other files in this gvbvdxx-pack program.\r\n        }, {\r\n            element: \"div\",\r\n            children: [{\r\n                    element: \"h1\",\r\n                    //innerHTML can be used, but this is better.\r\n                    textContent: \"Hello, Gvbvdxx Pack 2!\"\r\n                }, {\r\n                    element: \"p\",\r\n                    textContent: \"This is a program, simular to react and webpack, all of this is coded inside your index.js file.\"\r\n                },\r\n                {\r\n                    element:\"p\",\r\n                    textContent:\"Click the button below to see what happens!\"\r\n                },\r\n                {\r\n                    gid:\"myButton\", //gid is only readable using elements.getGPId, that only makes it visible via the current gvbvdxx pack program.\r\n                    element:\"button\",\r\n                    textContent:\"Click me!\"\r\n                }\r\n            ]\r\n        }\r\n    ];\r\n    \r\n    elements.appendElements(elements.body, elements.createElementsFromJSON(elementJSON));\r\n    \r\n    var myButton = elements.getGPId(\"myButton\");\r\n    \r\n    myButton.onclick = function () {\r\n        window.alert(\"Coded with gvbvdxx pack.\");\r\n    };\r\n    \r\n    log.log(\"This is your very first, gvbvdxx pack program, feel free to modify it and do stuff!\");\n    return module;\n})();",
   "name": "src\\index.js",
   "dirname": "src_index.js",
   "realdir": "src_index.js",
   "realdirNoReplacer": "src\\index.js",
   "uncompileddata": "var log = require(\"log\");\r\nvar elements = require(\"elements\");\r\nvar fileLoader = require(\"file-loader\");\r\n\r\nvar elementJSON = [{\r\n        element: \"style\",\r\n        innerHTML: fileLoader.read(\"src/stylesheet.css\") //file loader can read other files in this gvbvdxx-pack program.\r\n    }, {\r\n        element: \"div\",\r\n        children: [{\r\n                element: \"h1\",\r\n\t\t\t\t//innerHTML can be used, but this is better.\r\n                textContent: \"Hello, Gvbvdxx Pack 2!\"\r\n            }, {\r\n                element: \"p\",\r\n                textContent: \"This is a program, simular to react and webpack, all of this is coded inside your index.js file.\"\r\n            },\r\n\t\t\t{\r\n\t\t\t\telement:\"p\",\r\n\t\t\t\ttextContent:\"Click the button below to see what happens!\"\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tgid:\"myButton\", //gid is only readable using elements.getGPId, that only makes it visible via the current gvbvdxx pack program.\r\n\t\t\t\telement:\"button\",\r\n\t\t\t\ttextContent:\"Click me!\"\r\n\t\t\t}\r\n        ]\r\n    }\r\n];\r\n\r\nelements.appendElements(elements.body, elements.createElementsFromJSON(elementJSON));\r\n\r\nvar myButton = elements.getGPId(\"myButton\");\r\n\r\nmyButton.onclick = function () {\r\n\twindow.alert(\"Coded with gvbvdxx pack.\");\r\n};\r\n\r\nlog.log(\"This is your very first, gvbvdxx pack program, feel free to modify it and do stuff!\");"
  },
  "src_stylesheet.css": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\stylesheet.css\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\stylesheet.css\";\n    body {\r\n        font-family:arial;\r\n        background:#495057;\r\n        color:white;\r\n    }\n    return module;\n})();",
   "name": "src\\stylesheet.css",
   "dirname": "src_stylesheet.css",
   "realdir": "src_stylesheet.css",
   "realdirNoReplacer": "src\\stylesheet.css",
   "uncompileddata": "body {\r\n\tfont-family:arial;\r\n\tbackground:#495057;\r\n\tcolor:white;\r\n}"
  }
 },
 "files": [
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\hello.html\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\hello.html\";\n    <!DOCTYPE HTML>\r\n    \r\n    <html>\r\n        <head>\r\n            \r\n            <title>Hello, Gvbvdxx Pack 2!</title>\r\n            \r\n        </head>\r\n        <body>\r\n            \r\n            <script src=\"main.js?n=1\"></script>\r\n            \r\n        </body>\r\n    </html>\n    return module;\n})();",
   "name": "src\\hello.html",
   "dirname": "src_hello.html",
   "realdir": "src_hello.html",
   "realdirNoReplacer": "src\\hello.html",
   "uncompileddata": "<!DOCTYPE HTML>\r\n\r\n<html>\r\n\t<head>\r\n\t\t\r\n\t\t<title>Hello, Gvbvdxx Pack 2!</title>\r\n\t\t\r\n\t</head>\r\n\t<body>\r\n\t\t\r\n\t\t<script src=\"main.js?n=1\"></script>\r\n\t\t\r\n\t</body>\r\n</html>"
  },
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\index.js\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js\";\n    var log = require(\"log\");\r\n    var elements = require(\"elements\");\r\n    var fileLoader = require(\"file-loader\");\r\n    \r\n    var elementJSON = [{\r\n            element: \"style\",\r\n            innerHTML: fileLoader.read(\"src/stylesheet.css\") //file loader can read other files in this gvbvdxx-pack program.\r\n        }, {\r\n            element: \"div\",\r\n            children: [{\r\n                    element: \"h1\",\r\n                    //innerHTML can be used, but this is better.\r\n                    textContent: \"Hello, Gvbvdxx Pack 2!\"\r\n                }, {\r\n                    element: \"p\",\r\n                    textContent: \"This is a program, simular to react and webpack, all of this is coded inside your index.js file.\"\r\n                },\r\n                {\r\n                    element:\"p\",\r\n                    textContent:\"Click the button below to see what happens!\"\r\n                },\r\n                {\r\n                    gid:\"myButton\", //gid is only readable using elements.getGPId, that only makes it visible via the current gvbvdxx pack program.\r\n                    element:\"button\",\r\n                    textContent:\"Click me!\"\r\n                }\r\n            ]\r\n        }\r\n    ];\r\n    \r\n    elements.appendElements(elements.body, elements.createElementsFromJSON(elementJSON));\r\n    \r\n    var myButton = elements.getGPId(\"myButton\");\r\n    \r\n    myButton.onclick = function () {\r\n        window.alert(\"Coded with gvbvdxx pack.\");\r\n    };\r\n    \r\n    log.log(\"This is your very first, gvbvdxx pack program, feel free to modify it and do stuff!\");\n    return module;\n})();",
   "name": "src\\index.js",
   "dirname": "src_index.js",
   "realdir": "src_index.js",
   "realdirNoReplacer": "src\\index.js",
   "uncompileddata": "var log = require(\"log\");\r\nvar elements = require(\"elements\");\r\nvar fileLoader = require(\"file-loader\");\r\n\r\nvar elementJSON = [{\r\n        element: \"style\",\r\n        innerHTML: fileLoader.read(\"src/stylesheet.css\") //file loader can read other files in this gvbvdxx-pack program.\r\n    }, {\r\n        element: \"div\",\r\n        children: [{\r\n                element: \"h1\",\r\n\t\t\t\t//innerHTML can be used, but this is better.\r\n                textContent: \"Hello, Gvbvdxx Pack 2!\"\r\n            }, {\r\n                element: \"p\",\r\n                textContent: \"This is a program, simular to react and webpack, all of this is coded inside your index.js file.\"\r\n            },\r\n\t\t\t{\r\n\t\t\t\telement:\"p\",\r\n\t\t\t\ttextContent:\"Click the button below to see what happens!\"\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tgid:\"myButton\", //gid is only readable using elements.getGPId, that only makes it visible via the current gvbvdxx pack program.\r\n\t\t\t\telement:\"button\",\r\n\t\t\t\ttextContent:\"Click me!\"\r\n\t\t\t}\r\n        ]\r\n    }\r\n];\r\n\r\nelements.appendElements(elements.body, elements.createElementsFromJSON(elementJSON));\r\n\r\nvar myButton = elements.getGPId(\"myButton\");\r\n\r\nmyButton.onclick = function () {\r\n\twindow.alert(\"Coded with gvbvdxx pack.\");\r\n};\r\n\r\nlog.log(\"This is your very first, gvbvdxx pack program, feel free to modify it and do stuff!\");"
  },
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var require = function (a) {return gp_require(a,\"src\\\\stylesheet.css\");};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\stylesheet.css\";\n    body {\r\n        font-family:arial;\r\n        background:#495057;\r\n        color:white;\r\n    }\n    return module;\n})();",
   "name": "src\\stylesheet.css",
   "dirname": "src_stylesheet.css",
   "realdir": "src_stylesheet.css",
   "realdirNoReplacer": "src\\stylesheet.css",
   "uncompileddata": "body {\r\n\tfont-family:arial;\r\n\tbackground:#495057;\r\n\tcolor:white;\r\n}"
  }
 ]
};/**
 * Genarated By: Gvbvdxx-Pack
 * do not copy or use this code for other programs, its only for this program,
 * do not edit or modify unless you know what your doing!
 **/


(function () {
    var dirname = "";
 var __GP_elements = {};
 var __GP_global_vars = {};
    var __gvbvdxx_pack_log = {
        log: function (a, b) {
            console.log("%c[" + a + "]:" + b, "color:black;font-weight:bold;");
        },
        warn: function (a, b) {
            console.warn("%c[" + a + "]:" + b, "color:#ffa94d;font-weight:bold;background:#d9480f;");
        },
        error: function (a, b) {
            console.error("%c[" + a + "]:" + b, "color:#ff8787;font-weight:bold;background:#c92a2a;");
        }
    };
    var gp_require = (a,filename) => {
  if (!filename) {
   throw new Error("Do NOT use gp_require, instead use require.");
  }
  if (!a) {
   throw new Error("Module must have a path to the file.");
  }
        if (a == "log") {
   //should display the modules filename now.
            return {
                log: function (b) {
     
                    console.log("%c[" + filename + "]:" + b, "color:black;font-weight:bold;");
                },
                warn: function (b) {
                    console.warn("%c[" + filename + "]:" + b, "color:#e67700;font-weight:bold;background:yellow;");
                },
                error: function (b) {
                    console.error("%c[" + filename + "]:" + b, "color:#f03e3e;font-weight:bold;background:#c92a2a;");
                }
            };
        }
  if (a == "globalvars") { //global variables across the current gvbvdxx pack program, but not available for the full window. (for better security)
   return {
    setVar:function (name,val) {
     __GP_global_vars[name] = val;
     return val;
    },
    getVar:function () {
     return __GP_global_vars[name];
    }
   };
  }
  if (a == "elements") {//Quick alternative for document access.
   return {
    appendElements: function (elm,appendArray) {
     for (var appendElm of appendArray) {
      elm.append(appendElm);
     }
    },
    createElementsFromJSON: function (jsonelmArray) { //converts an array of json's with element properties to a element list.
     function runElements(arry) {
      var myRealElms = [];
      for (var elm of arry) {
       var realElm = document.createElement(elm.element);
       for (var attriName of Object.keys(elm)) {
        if (!(
        (attriName == "element") ||
        (attriName == "children")
        )){
         var attributeValue = elm[attriName];
         var setattri = true;
         if (attriName == "gid") {
          __GP_elements[attributeValue] = realElm;
          setattri = false;
         }
         if (attriName == "style") {
          for (var styleName of Object.keys(attributeValue)) {
           var styleValue = attributeValue[styleName];
           realElm.style[styleName] = styleValue;
          }
          setattri = false;
         }
         if (attriName == "innerHTML") {
          realElm.innerHTML = attributeValue;
          setattri = false;
         }
         if (attriName == "textContent") {
          realElm.textContent = attributeValue;
          setattri = false;
         }
         if (attriName == "src") {
          realElm.src = attributeValue;
          setattri = false;
         }
         if (attriName == "value") {
          realElm.value = attributeValue;
          setattri = false;
         }
         if (attriName == "min") {
          realElm.min = attributeValue;
          setattri = false;
         }
         if (attriName == "max") {
          realElm.max = attributeValue;
          setattri = false;
         }
         if (attriName == "width") {
          realElm.width = attributeValue;
          setattri = false;
         }
         if (attriName == "height") {
          realElm.height = attributeValue;
          setattri = false;
         }
         if (attriName == "className") {
          realElm.className = attributeValue;
          setattri = false;
         }
         if (setattri) {
          realElm.setAttribute(attriName,attributeValue);
         }
        }
       }
       
       
       if (elm.children) {
        var elmsToAppend = runElements(elm.children);
        for (var elmAppend of elmsToAppend) {
         realElm.append(elmAppend);
        }
       }
       myRealElms.push(realElm);
      }
      return myRealElms;
     }
     return runElements(jsonelmArray);
    },
    getById: function (id) {
     return document.getElementById(id);
    },
    setGPId: function (el,id) {
     __GP_elements[id] = el;
     return el;
    },
    getGPId: function (id) {
     if (__GP_elements[id]) {
      return __GP_elements[id];
     }
     return null;
    },
    body:document.body
   };
  }
        if (a == "html") {
            return class HTMLEmmitter {
                constructor() {
     /*support for writing html*/
     this.writeHTML = (contents, object) => {
      var subject = null;
      if (object) {
       subject = object;
      } else {
       subject = document.body;
      }
      subject.innerHTML += contents;
      return subject;
     };
     /*support for setting html*/
     this.setHTML = (contents, object) => {
      var subject = null;
      if (object) {
       subject = object;
      } else {
       subject = document.body;
      }
      subject.innerHTML = contents;
      return subject;
     };
    }

            };
        }
        if (a == "file-loader") {
            return {
                read: function (a) {
                    for (var i in var__gvbvdxx_pack_filedata) {
                        if (var__gvbvdxx_pack_filedata[i].realdirNoReplacer.replaceAll("\\", "/") == a) {
                            return var__gvbvdxx_pack_filedata[i].uncompileddata;
                        }
                    }
                    return null;
                }
            };
        }
        for (var i in var__gvbvdxx_pack_filedata) {
            if (var__gvbvdxx_pack_filedata[i].realdirNoReplacer.replaceAll("\\", "/") == a) {
    try{
     var module = eval(var__gvbvdxx_pack_filedata[i].data);
     if (module && module.filename) {
      return module.exports;
     } else {
      __gvbvdxx_pack_log.warn("Gvbvdxx Pack", "The current module \"+"+a+"+\" is using a old exporting method, please upgrade it to \"module.exports\" and not \"return\", the module value cannot be overwitten, this module will return null.");
      return null;
     }
    } catch(e) {
     __gvbvdxx_pack_log.error("Gvbvdxx Pack", "Failed To Extucute "+var__gvbvdxx_pack_filedata[i].realdirNoReplacer+". "+e);
     throw Error(e);
     return;
    }
            }
        }
        throw Error("Unable To Find Module " + a)
    };
    var dirs = () => {
        var dirsgen = [];
        for (var i in var__gvbvdxx_pack_filedata) {
            dirsgen.push(var__gvbvdxx_pack_filedata[i].name.replaceAll("\\", "/"));
        }
        return dirsgen;
    };
    var var__gvbvdxx_pack_filedata = {};
    var__gvbvdxx_pack_filedata = GPDATA.fileTemplate;
    //__gvbvdxx_pack_log.log("Gvbvdxx Pack", "Loaded Files");
 try{
  gp_require("src/index.js","src/index.js");
 }catch(e){
  __gvbvdxx_pack_log.error("Gvbvdxx Pack", "Faild to start the program, check and make sure index.js is programmed correctly.");
 }
 delete GPDATA;
})();
