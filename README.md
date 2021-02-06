# XSS-Ad-blocker-extension
This is a chrome extension adding XSS / Ad blocking functionalities.
Components:
1.) manifest.json : This is the most important and manager of all other files. Any functionalities to the extension can be enabled or disabled from here.
2.) background.js : This script runs for the lifetime of the extension. All request listeners and their functions are added here.
3.) UI.html : The source code for a simple UI providing Enabling and Disabling functionalities for both the components.
4.) UI.js : Content script which communicates User interaction to the background script.
5.) Images : Folder containing icons for extension.
