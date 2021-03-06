System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "arva-ds": "github:Bizboard/arva-ds@1.0.0-beta-1",
    "arva-utils": "github:Bizboard/arva-utils@1.0.0-beta-1",
    "di.js": "github:Bizboard/di.js@master",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:Bizboard/arva-ds@1.0.0-beta-1": {
      "arva-context": "github:Bizboard/arva-utils@1.0.0-beta-1",
      "di.js": "github:Bizboard/di.js@master",
      "eventemitter3": "npm:eventemitter3@1.1.0",
      "firebase": "github:firebase/firebase-bower@2.2.6",
      "lodash": "npm:lodash@3.9.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash@3.9.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

