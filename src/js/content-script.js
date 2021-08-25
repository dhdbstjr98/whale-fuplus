const matchUplus = /^<head><noscript><meta http\-equiv=\"refresh\"content=\"2;url=(.*)\"\/><\/noscript><\/head><body><iframe id=\"f\" frameborder=\"0\" style=\"width:100%;height:100%\" src=\"http\:\/\/.+?\/tm\/\?a=.+\"><\/iframe>/.exec(document.documentElement.innerHTML);
if(!!matchUplus) {
	location.replace(matchUplus[1]);
}