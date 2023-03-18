const containEl = document.querySelector(".contain");

const headings = ["Apple announces a new partnership...", "Samsung Releases S23 Ultra in February...", "Earthquake in Turkey...", "Elon Musk's Starlink arrives in Nigeria...", "Tecno Releases new Foldable phone...", "Marvel Releases Antman and the Wasp Quantumania...", "John Wick 4 Release Date...", "Fast X Release Date..."];

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

