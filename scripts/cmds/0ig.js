const fs = require('fs');

module.exports = {
	config: {
		name: "ig",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Badol Project Video" },
		category: "no prefix",
		guide: { en: "Prefix Event" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		var rbbadol = ["•—»✨「𝙈 𝘾 𝙎」✨«—•\n༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n᭄࿐-ইচ্ছে!!!গুলো!!!যদি!!!পবিত্র!!হয়!✿᭄\n\n✿᭄তাহলে!!!স্বপ্ন!!! গুলো..🖤🥀\n\n✿᭄ ࿐- একদিন!!!পূরণ!!!হবেই!!! ✿᭄\n\n✿᭄࿐ইনশাআল্লাহ..🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
" •—»✨「𝙈 𝘾 𝙎」✨«—•\n ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐ \n╭•┄┅════❁🌺❁════┅┄•╮\n\n_____✵♡︎\n\n___কি  হবে  এত  মানুষের প্রিয় হয়ে__🦋🌻\n\n__যদি আল্লাহ   প্রিয় না হতে পারি__🙂🦋\n\n_____✵♡︎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"___•—»✨「𝙈𝙪𝙨𝙡𝙞𝙢 𝘾𝙮𝙗𝙚𝙧」  ✨«—•\n ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 Program༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n┏╮/╱╰️❥☆••\n╱/╰┛🍁࿐চিরস্থায়ী কি \nজানেন͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌༒࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n༄আপনার সুন্দর ব্যবহার!!🍁!!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌🍁যেটা মৃত্যুর পরও সবার সৃতিতে থাকবে🥰❁ཻ͜͡ღ᭄\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋\n\n-মক্কা তুমি ধন্য.༏༏😽🕋࿐\n\n-তোমার বুকে হয়েছিলো বিশ্ব নবীর জন্ম.༏༏࿐💛🙆\n\n🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n●══❥𝄞⋆⃝🥰 ভাগ্যর ༅༎༅ উপর ༅༎༅ কারো ༅༎༅ হাত নেই !!💚🌺🥀\n\n────😕\n🦋🌺-༅༎༅ সব ༅ ༎༅ কিছু ༅༎༅ পরিবর্তন ლ🌼\n༅༎༅ করার  মালিক  🌻😽💖\n\n🕊༎༅ একমাত্র ༅༎༅ আল্লাহ \n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\nwish 🤗\n\nমৃত্যুর কয়েক সেকেন্ড আগে যেন প্রত্যেকটা\nমুসলমানের মুখে\nউচ্চারিত হয় !\nলা ইলাহা ইল্লাল্লাহু\n মুহাম্মাদুর রাসূলুল্লাহ ( সঃ )\n\nআমিন🤲🤲🥰\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n ༅༎❥~🦋\n\n༅༎❥━-কালি ছাড়া যেমন কলম 🖊️\nমূল্যহীন🗑️\n\nতেমনি নামাজ ছাড়া মুসলিম মূল্যহীন!!❥༅༎\n\n🖤~🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n°\n\n—𝐒𝐮𝐩𝐞𝐫𝐦𝐚𝐧 𝐎𝐟 𝐓𝐡𝐞 𝐖𝐨𝐫𝐥𝐝—\n—হযরত মুহাম্মদ (সা:)💚🌼\n\n°\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",

"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋࿐\n\nহীরার চেয়েও দামি\nহযরত মুহাম্মদ (সাঃ) এর মুখের বাণী🫰🖤\n\n🦋࿐\nসুবহানাল্লাহ-🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🥀\n- প্রতিশোধ নয়.!🙂💌\n- হ্মমা করাই ইসলামের আদর্শ.!❤️🥰\n\n- হযরত মোহাম্মদ (সাঃ)😍🤎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
 ];
;
  var rbbadolMsg = rbbadol[Math.floor(Math.random() * rbbadol.length)];
		const imgur = ["https://i.postimg.cc/ZR0SLZyy/received-104854222681538.jpg",
"https://i.postimg.cc/CM3RdrW4/received-1077131053254543.jpg",
"https://i.postimg.cc/mhWWRHpQ/received-1202913210365646.jpg",
"https://i.postimg.cc/yxZCwPj1/received-179416495132916.jpg",
"https://i.postimg.cc/8kJFpgn5/received-201956602842877.jpg",
"https://i.postimg.cc/8c2N53cf/received-2183981171798286.jpg",
"https://i.postimg.cc/6QWwyCWc/received-259795433354586.jpg",
"https://i.postimg.cc/JzWRC9S9/received-317063074088232.jpg",
"https://i.postimg.cc/5tsJvjjV/received-583147497311518.jpg",
"https://i.postimg.cc/7ZMwHKkb/received-598373762409967.jpg",
"https://i.postimg.cc/wTD7NczY/received-649778976784401.jpg",
"https://i.postimg.cc/DZDKjDqp/received-659497149400143.jpg",
"https://i.postimg.cc/WpC2XD8p/received-659559285696847.jpg",
"https://i.postimg.cc/4NcXMJ26/received-819496329472643.jpg"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${rbbadolMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("/")==0 || 
event.body.indexOf("?")==0) {
			this.onStart({ message });
		}
	}
};
