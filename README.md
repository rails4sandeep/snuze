# snuze

snuze provides a simple unconditional wait that does not depend on callbacks and promises.
I felt the need for a simple wait when driving web browsers using webdrivers and testing APIs where I should not throttle them to limits.

##Installation

```javascript
$ npm install --save-dev snuze
```

##Usage

###Basic Usage

In your test file

``` javascript
var snuze = require ('snuze');
//specify the time in millisec to wait
snuze.snooze(2000);
```

There is an additional countDown flag that you can pass which when true will display a timer

```javascript
snuze.snooze(2000,true);
```

It is suggested to set the `countDown` flag to `false` when using on CI where you need to depend on logs to verify the build 
