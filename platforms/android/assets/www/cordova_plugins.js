cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-universal-links-plugin.universalLinks",
        "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
        "pluginId": "cordova-universal-links-plugin",
        "clobbers": [
            "universalLinks"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-custom-config": "3.1.2",
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-crosswalk-webview": "2.2.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-universal-links-plugin": "1.2.1"
};
// BOTTOM OF METADATA
});