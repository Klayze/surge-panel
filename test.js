//$httpClient.post({
//		url: "https://dlercloud.me/auth/login",
//		headers: {
//			"Content-Type": "application/json"
//		},
//		body: {
//			"email": "619478198@qq.com",
//			"passwd": "qq940614",
//			"number-me": "",
//			"code": "",
//			"remember_me": "on"
//		}
//});

const a = $httpClient.post("https://dlercloud.me/user/checkin");
console.log(a)
$done();
