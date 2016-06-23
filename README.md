pouchdb-legacy-utils
====

PouchDB 5.4.0 removed undocumented globals like `PouchDB.ajax`, `PouchDB.utils`, and `PouchDB.Errors`. This plugin adds them back in, in case you need it for backwards compatibility or for your tests.

Requires PouchDB 5.4.0+.

Install
---

    npm install pouchdb-legacy-utils

Usage
-----

```js
var PouchDB = require('pouchdb'); // or pouchdb-core, etc.
PouchDB.plugin(require('pouchdb-legacy-utils'));
```

Now you have `PouchDB.utils`, `PouchDB.Errors`, and `PouchDB.ajax`, just like in PouchDB pre-5.4.0.

Shouldn't 5.4.0 have been a major version bump?
----

Yeah, probably. We didn't realize how many people were using these undocumented, unrecommended APIs, though. Hence this plugin.
