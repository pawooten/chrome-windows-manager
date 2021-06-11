let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  // the storage api requires the extension manifest to declare the storage permission
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});