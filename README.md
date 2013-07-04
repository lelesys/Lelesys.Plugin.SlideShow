Lelesys SlideShow Plugin
=======

TYPO3 Neos plugin that will allow user to add Slideshow.

Setup
-----

Enter the following line in the Root.ts2 of your sites package

``include: resource://Lelesys.Plugin.SlideShow/Private/TypoScripts/Library/NodeTypes.ts2
``

Include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

``<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/Stylesheets/bootstrap-carousel.css')}" rel="stylesheet" media="screen">
``

``<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/Stylesheets/slideShow.css')}" rel="stylesheet" media="screen">
``

``<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/Stylesheets/jquery.lightbox-0.5.css')}" rel="stylesheet" media="screen">
``

Include the plugin's Javascript to your own one's where you add other javascript of the site.

``	<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/JavaScript/bootstrap-carousel.js')}"></script>
``

``	<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/JavaScript/bootstrap-tab.js')}"></script>
``

``	<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/JavaScript/slideShow.js')}"></script>
``

``	<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.SlideShow/Public/JavaScript/jquery.lightbox-0.5.js')}"></script>
``

Usage
-----
Add the plugin content element "Lelesys Slideshow Container" to the position of your choice.
This will add container to add all the slides.
Add the plugin content element "Lelesys Slideshow Item" under "Lelesys Slideshow Container".
Add images which you want in slideshow. You will see added images in one tab in thumbnailview and in other tab you will see slideshow view.
When you select slide shoe container you will some extended page properties at the left.
With this option you can make changes like controls for navigation, slide interval time, gallery size and light box.