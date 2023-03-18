const containEl = document.querySelector(".contain");

const headings = ["Apple announces a new partnership...", "Samsung S23 Ultra Release date...", "Earthquake in Turkey...", "Elon Musk's Starlink arrives in Nigeria...", "Tecno Releases new Foldable phone..."];

let headingIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containEl.innerHTML = `
    ${headings[headingIndex].slice(0, characterIndex)}
    `;

    if (characterIndex === headings[headingIndex].length) {
        headingIndex++;
        characterIndex = 0;
    }

    if (headingIndex === headings.length) {
        headingIndex = 0;
    }

    setTimeout(updateText, 250);

}

