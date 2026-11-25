self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{const d=e.data?e.data.json():{title:'VR AI',body:'உங்களுக்கு ஒரு நினைவூட்டல் உள்ளது'};e.waitUntil(self.registration.showNotification(d.title||'VR AI',{body:d.body||'',icon:'/icon-192.png'}));});
