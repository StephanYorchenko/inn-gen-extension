import {generatorConfig} from "@/shared/generator-congig";


function insertText(text) {
  const activeElement = document.activeElement;
  if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
    const input = activeElement;

    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;
    input.value = value.substring(0, start) + text + value.substring(end);

    const cursorPosition = start + text.length;
    input.selectionStart = input.selectionEnd = cursorPosition;

    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("Расширение установлено и работает.");
  for (const [name, _] of Object.entries(generatorConfig)){
    chrome.contextMenus.create({
      id: `innGenExt__${name}`,
      title: `Вставить ${name}`,
      contexts: ["editable"]
    });
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId.startsWith("innGenExt__")) {
    console.log(info.menuItemId);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: insertText,
      args: [generatorConfig[info.menuItemId.replace("innGenExt__", "")]()]
    });
  }
});