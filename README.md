# XSS-Ad-blocker-extension
Description: This is a chrome extension adding XSS / Ad blocking functionalities. After installation one can control whether to disable either XSS/Ad blocker via simple popup UI. Extension will be enabled by default after installation. 

Components:
1.) manifest.json : This is the most important and manager of all other files. Any functionalities to the extension can be enabled or disabled from here.
2.) background.js : This script runs for the lifetime of the extension. All request listeners and their functions are added here.
3.) UI.html : The source code for a simple UI providing Enabling and Disabling functionalities for both the components.
4.) UI.js : Content script which communicates User interaction to the background script.
5.) Images : Folder containing icons for extension.

Steps to install:
1.) Download the zip and extract.
2.) Open Chrome > manage extensions.
3.) Toggle developer mode on.
4.) Load unpacked > select extension folder and you are good to go.
