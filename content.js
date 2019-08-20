window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = "Go Dark Mode"
    

    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = "darksetting";

    document.querySelector('#end').prepend(button, input, 'Auto');

    button.addEventListener('click', () => enableDarkMode());
    input.addEventListener('click', () => storeSetting());
}
function checkSetting() {
    chrome.storage.local.get(['enabled'], (result) => {
        const isEnabled = result.enabled
        console.log(isEnabled);

        document.getElementById('darkSetting') = isEnabled;

        if (isEnabled){
            enableDarkMode();
        }
    });
}

function storeSetting() {
    const isEnabled = document.getElementById('darkSetting');
    const setting = {enabled: isEnabled};

    chrome.storage.local.set(setting, () => {
        console.log('stored', setting)
    })
}

function enableDarkMode () {
    document.getElementsByTagName('#page-manager')[0].style.backgroundColor = 'brown'
}
