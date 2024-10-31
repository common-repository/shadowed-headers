=== Shadowed Headers ===
Contributors: Dietrich Koch
Tags: header, 3d, shadow, css
Requires at least: 2.7
Tested up to: 2.9.2
Stable tag: 1.1.3
Headers h1 and h2 and block elements with class=shadow are given a fine shadow to create a 3d effect.
== Description ==

All h1 and h2 headers and block elements with the class="shadow" of the website are given a small shadow via css and javacript manipulation such that you get a plastic or 3d impression. The main color is inherited. 
We tried to choose the style values in such a way that you can use this plugin without further style adaption. But this is not possible for any case of template, color configuration and font-size such that I give the possibility to create an css-file with name "shadowed-headers_custom.css"  in the main plugin folder where you can make necessary adaption to your environment. This file is your own - not present in the beginning - and will not be overwritten by plugin update.
Why no options for this plugin? I cannot know your CSS-selectors where you have to make your changes so you are much more flexible than with predefined options.
== Installation ==

1. Download shadow_header.zip and unzip it.
2. Upload this directory to your plugin directory
3. Activate the plugin Shadowed Headers in your dashboard
4. Thats all if you like my preferences, otherwise change the css-file. 
== Frequently Asked Questions ==

= The 3d effect cannot be seen or is too small =

Enlarge font-size of your block element if possible 

= My color is black and your shadow too =
 
set your preferred color in "your selector" p.before and "your selector"{text-shadow:...} in shadowed-headers_custom.cs

= Why didn't you give the possibility to change the style via backend preferences? =
It is more simple to adapt the values with the help of the development tools of the browser and to copy the values in the css-File.
== Screenshots ==
1. Example for 3D headers. color=white is very good choice if the background suitable.
2. With other colors you can find good effects too.
== Changelog ==

= 1.0.1 =
Youses your text-shadow oder if not present creates a default for non-IE-browser, hacks the IE-browser for simulating text-shadow
= 1.0.2 =
Improving text-shadow default
= 1.0.3 =
Making text-shadow mor decent
= 1.1.0 =
Giving the user a custom CSS-File for better adaption to his environment
= 1.1.1 =
Style tags as em in headers are taken into account
p and span cannot be shadowed, class shadow for those are removed, perhaps later I will find a solution
custom.css cannot be saved automatically befor updating this plugin. I'm looking for an solution
= 1.1.2 =
span can be shadowed, technil improvement of js-file
= 1.1.3 =
Opera works for class='shadow'
