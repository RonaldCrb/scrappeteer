# scrappeteer
just playing with puppeteer node and PG for fun hehehe

basically this is just an experiment on how to integrate Scraping into a REST API
in order to serve other apps with data for charting purposes and just Data Analisys in general
as well as serving as an appropriate playground to boost your Puppeteer game. 

just clone + npm install

it will take a while for puppeteer to be ready to scrape as in the present the library will require 
an installation of the chromium browser engine that is guaranteed to be compatible with the version
of puppeteer declared in package.json (a little over 100 mb), this is specially important to consider
if one plans to deploy the app to a server where puppeteer cannot use a local chrome installation 
(there may not be one available in the server). as an alternative, one can configure puppeteer in a way
that uses the local chrome installation but it will not guarantee puppeteer to work with ANY chrome version
and it will only work with certain versions of Chrome.

any comments just message me :)

