# What is PWA ?

PWA (Progressive Web App) have the following property
1. Can be searched in Google (SEO)
2. Is web app.
3. Can be installed.
4. Can be shared as link
5. Can work off line
6. Can be used in Old Browser
7. Can notify the user 
8. Can work on any device with any screen size.
9. Secure 

Architect
1. Manifest
* JSON file that specify how the PWA is treated as an installed app.
2. Service Worker
* Script that run independently from the website.
* Handle network request and cache
* Make the app able to work off line 
3. HTTPS 
4. App CORE 
* It is based on Java Script Framework e.g. Vue, React, Next, Nuxt etc

Reference
* https://youtu.be/1WWweyBaWZk?si=0NFTRAK4LM_fhucU

Open 2 URL to learn how to creating PWA React project.
* https://youtu.be/XG-ts366EYQ?si=mn2nvq0FLZQVG2uh
* https://create-react-app.dev/docs/making-a-progressive-web-app/

# PWA Consideration

Things to Considers

Topic No. 1 : Cache is not Updated.

Sometimes there might be too much caching, which cause the 
users to end up seeing older content until they 
close (reloading is not enough) their existing, open tabs.

Topic No. 2 : User is confused with PWA.

It is a good idea to notify the user if 
1. The app works off line when the internet connection is poor or unavailable.
2. When will the catch is updated (showing a "New content is available once existing tabs are closed." message). 

Topic No. 3 : Cache require HTTPS

Service worker require HTTPS.
PWA can work without HTTPS, but the Service worker (and cache) is not available.

Topic No. 4 : Turn the Cache off 

The service worker is only enabled in the production environment
It's recommended that you do not enable an offline-first service worker in a development environment
, as it can lead to more debugging difficulty.

* https://youtu.be/dboiIn_rAs0?si=JoH_FQIWlShnJ3zE

Topic No. 5 : Debug the Cache

If you need to test your offline-first service worker locally
1. use an incognito window to avoid complications with your browser cache.
2. npm run build // build the application
3. // run a standard http server from your build directory
4. create-react-app // give instructions for one way to test your production build locally and the deployment instructions. 

Topic No. 6 : Cache is working independently

By default, the generated service worker file will not intercept or cache any cross-origin traffic, 
like HTTP API requests, images, or embeds loaded from a different domain. 

Reference
* https://create-react-app.dev/docs/making-a-progressive-web-app/

# PWA Service Consideration

As the comment states, switching `serviceWorker.unregister()` to `serviceWorker.register()` will opt you in to using the service worker.

The reason is that 
* `serviceWorker.register()` make the app work better but harder to debug.

See PWA_Consideration.txt

Reference
* https://create-react-app.dev/docs/making-a-progressive-web-app/

# Customization

Starting with Create React App 4
you have full control over customizing the logic in this service worker, by creating your own src/service-worker.js file, or

customizing the one added by the cra-template-pwa (or cra-template-pwa-typescript) template. You can use additional modules from the Workbox project, add in a push notification library, or remove some of the default caching logic. The one requirement is that you keep self.__WB_MANIFEST somewhere in your file, as the Workbox compilation plugin checks for this value when generating a manifest of URLs to precache. 

Customizing server worker
1. src/service-worker.js
2. The one requirement is that you keep `self.__WB_MANIFEST` somewhere in your file

If you would prefer not to use precaching, you can assign `self.__WB_MANIFEST`
to a variable that will be ignored, like:

```
// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST;

// Your custom service worker code goes here.
```

## Progressive Web App Metadata

The default configuration includes a web app manifest located at `public/manifest.json`
The metadata in manifest.json determines what icons, names, 
and branding colors to use when the web app is displayed. 

Reference
* https://create-react-app.dev/docs/making-a-progressive-web-app/

# How to create React PWA ?

```
imac@iMacs-iMac Wheel-of-Fortune % npx create-react-app frontendpwa --template cra-template-pwa-typescript
...

Success! Created frontendpwa at /Users/imac/Desktop/Wheel-of-Fortune/frontendpwa
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontendpwa
  npm start

Happy hacking!
```
