module.exports.config = {
	name: "status",
	version: "1.0.1",
	role: 0,
	author: "Badol",
	description: "get status+video",
   category: "media",
	usages: "status+video",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐒𝐓𝐀𝐓𝐔𝐒-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=1EIb4-oLJ_rYorvSnrdkUcBvSpx1Npi6R",
    "https://drive.google.com/uc?id=1E9kEJQqsbG0wCPeFSv0BoVbEomRQMpqn",
    "https://drive.google.com/uc?id=1E0INIbfWBO6flhfsZt3KeFfhPIYsy3Eg",
    "https://drive.google.com/uc?id=1E03OPSypd0rJFKSWr_JY8Z_6psryqjlz",
    "https://drive.google.com/uc?id=1Dt6IBBoaxpUYuXTA6QM3Nm4MJ__lOVIE",
    "https://drive.google.com/uc?id=1DflI5mf-irqYkvqN5Gx86CvXJqU6Os78",
    "https://drive.google.com/uc?id=1DenhEeDNqXwxRTXJWFwjmt3xsXZfzWVn",
    "https://drive.google.com/uc?id=1EKhW8Z2MuWmM2crIYTVer3XEBc0AZWz3",
    "https://drive.google.com/uc?id=1EUIMopqHE8jK5mTH7x4ZWG7BlmVGo9T5",
    "https://drive.google.com/uc?id=1ESEea8QJhsJbck99uh6yR6c6DIK2-9nE",
    "https://drive.google.com/uc?id=1EJiyiD7Ss6YVzdW25iKyDrDgCm80YEFE",
    "https://drive.google.com/uc?id=1E5BYhcFPSmgGuuSrwlpymtRniafE0dnL",
    "https://drive.google.com/uc?id=1E1DVUGbVZJG7fFFZkkvSVpJrNYU9sP0F",
    "https://drive.google.com/uc?id=1Dou9vhbzKnJP4YOW8Hy_yvXPNQVWF0hp",
    "https://drive.google.com/uc?id=1DjfinbQBT6wprpQFCOntL9AOvOY-1Q8H",
    "https://drive.google.com/uc?id=1DhubQELrP5FA96d_85gL6A7NmzulI5tz",
    "https://drive.google.com/uc?id=1Dg7DR2X-8avTyHu3MHtaEOvxRXJ-nNy0",
    "https://drive.google.com/uc?id=1De7LMrZrkBCgmfVuf55KlnAfYt8CgEzk",
    "https://drive.google.com/uc?id=1Ec3zJJDBVK_7ZsecUeEVH-XbX-h1E768",
    "https://drive.google.com/uc?id=1EWFeO0xiGzFylIpg7UcDHG8lxbkRXVan",
    "https://drive.google.com/uc?id=1b8k86wyyYHurZccy4dhJC9dWek1iw_QB",
"https://drive.google.com/uc?id=1bRiFX_VkawzmMAFjCSXT2bJI9E_-BbmV",
"https://drive.google.com/uc?id=1brQ8-zOpyYrgOoyCuf73_tW9ReIwxKYb",
"https://drive.google.com/uc?id=1bBIjnWHQC8W-weW8i8ucnM06Pby6qyAI",
"https://drive.google.com/uc?id=1axdTBfFzRJDAX_rj9td0ANQ8rHcLxpeA",
"https://drive.google.com/uc?id=1bDA5PxC5X66_ynQ1hKjqRfYCwnkQkntx",
"https://drive.google.com/uc?id=1bDA5PxC5X66_ynQ1hKjqRfYCwnkQkntx",
"https://drive.google.com/uc?id=1aYVlVZB2sdNzkRZYxVLBvcJecAiu3DAo",
"https://drive.google.com/uc?id=1bJFcL20POufLT49fp7sp9pOKHrJ17X7K",
"https://drive.google.com/uc?id=1a_FMG5SNNOgs005ST-lbAewzsX6-5qUM",
"https://drive.google.com/uc?id=1a_FMG5SNNOgs005ST-lbAewzsX6-5qUM",
"https://drive.google.com/uc?id=1aw4-8C8d4Gk4ooSi6B4Q4W29rnqLqV3p",
"https://drive.google.com/uc?id=1aeWDnykHL3TRNEdIO4YmqOKUwUbhXiup",
"https://drive.google.com/uc?id=1bDFnnIEcNpxLJxTca3bKva1mGVjHlubO",
"https://drive.google.com/uc?id=1bDFnnIEcNpxLJxTca3bKva1mGVjHlubO",
"https://drive.google.com/uc?id=1akWkNVX5sMlIZ-7Bhb7S1ZZmQzGqDy7t",
"https://drive.google.com/uc?id=1auftpUCJaDYitf8aavIYaEu8G2Prqo1H",
"https://drive.google.com/uc?id=1bWj1i1MjXXGtJQHtrq-8ShAkqgjE5389",
"https://drive.google.com/uc?id=1aXHesMaX4RX1KF93RMyqxIV9KtiJCaJO",
"https://drive.google.com/uc?id=1bAHK5Ss3g_N7U5jQ3p3KG7Ie5czFVZHY",
"https://drive.google.com/uc?id=1bmjqnmUqKrArjUdXnTJPu2FWjzfz51S4",
"https://drive.google.com/uc?id=1atJ1H-UBZVCWXCFlF7tQ-KKLvr70aH3q",
"https://drive.google.com/uc?id=1atJ1H-UBZVCWXCFlF7tQ-KKLvr70aH3q",
"https://drive.google.com/uc?id=1bGMxfDMaSsIyqfm20ACNEpUXttNeBudm",
"https://drive.google.com/uc?id=1bXd7VDkFlUwjjXGcD7DrwkRLjmdvqKQg",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.mp4")).on("close",() => callback());
   };
