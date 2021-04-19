---
title: What is cross site scripting?
date: January 20, 2021
description: Cross-site Scripting (XSS) is a javascript code injection attack.
---

# What is cross site scripting?
***
Cross-site Scripting (XSS) is a javascript code injection attack.
it enables attackers to inject their codes and steal user cookies by those vunlerable websites.


```
<script> document.write(document.cookie) </script>
```


### Types of XSS:

### Persistent XSS (Stored XSS)

When our injected malicous script is stored in server DB, which can be retrived and executed in client app they are called as Stored XSS.

### Non-persistent XSS (Relfected XSS)

When malicous payload is injected and an immediate response in an unsafe way is called Relfected XSS.

### Prevention:

Use DOMPurifer in front-end client app to santize the unsafe html entiry points.

Use AntiSamy in server-side which is proposed by OWASP  to filter the unsafe input from the http request.



