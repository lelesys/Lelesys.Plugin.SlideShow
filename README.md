Lelesys SlideShow Plugin
=======

This plugin adds SlideShow to your websites.

##### Important note: Initial package development was done when TYPO3 Neos was at alpha3/4. We are working hard continuously to get this to work perfectly and to beautify source code using best practices/concepts of Flow/Neos. Stay tuned!

Quick start
-----------

Include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'Stylesheets/bootstrap-carousel.css', package: 'Lelesys.Plugin.SlideShow')}" rel="stylesheet" media="screen">
```

```
<link href="{f:uri.resource(path: 'Stylesheets/slideShow.css', package: 'Lelesys.Plugin.SlideShow')}" rel="stylesheet" media="screen">
```

```
<link href="{f:uri.resource(path: 'Stylesheets/jquery.lightbox-0.5.css', package: 'Lelesys.Plugin.SlideShow')}" rel="stylesheet" media="screen">
```

Include the plugin's Javascript to your own one's where you add other javascript of the site.

```<script src="{f:uri.resource(path: 'JavaScript/bootstrap.min.js', package: 'Lelesys.Plugin.SlideShow')}"></script>```

```<script src="{f:uri.resource(path: 'JavaScript/carousel.js', package: 'Lelesys.Plugin.SlideShow')}"></script>```

```<script src="{f:uri.resource(path: 'JavaScript/tab.js', package: 'Lelesys.Plugin.SlideShow')}"</script>```

```<script src="{f:uri.resource(path: 'JavaScript/slideShow.js', package: 'Lelesys.Plugin.SlideShow')}"></script>```

```<script src="{f:uri.resource(path: 'JavaScript/jquery.lightbox-0.5.js', package: 'Lelesys.Plugin.SlideShow')}"></script>```

Usage
-----
* add the plugin content element "Lelesys Slideshow Container" to the position of your choice.
   * This will add container to add all the slides.
* add the plugin content element "Lelesys Slideshow Item" under "Lelesys Slideshow Container".
   * Inside "Lelesys Slideshow Item" add images which you want in slideshow.

You will see added images in one tab in thumbnailview and in other tab you will see slideshow view.
When you select slide show container you will see some extended page properties at the right in the inspector.
With this option you can make changes like controls for navigation,slide image title,slide image description, slide interval time, gallery size and light box.