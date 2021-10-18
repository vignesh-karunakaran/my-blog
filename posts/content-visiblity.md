---
title: Why we need to use content-visiblity?
description: content-visibility is mainly used to optimize initial rendering.
date: December 20, 2020
ogImg: 'images/content-visiblity-browser-support.png'
---

# Why we need to use content-visiblity ?
***
Applying `content-visiblity: auto` to an element tells the browser to skip rendering work for that particular element until it is scrolled into the viewport,
we can use it for each section, where it optimizes initial rendering.



It is available from chrome 85 and in edge 85.


![](../images/content-visiblity-browser-support.png)


And even we can use `content-visibility: hidden` which is similar to `display: none` which will remove the element from render tree.

