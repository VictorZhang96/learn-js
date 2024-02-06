window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const MAX_ITEMS = 5;

    btn.onclick = () => {
        // Get the text entered by the user
        const newText = inp.value.trim();

        // Add the text to the list
        if (newText !== '') {
            // Add the new text to the list
            const listItem = document.createElement('li');
            listItem.textContent = newText;
            list.appendChild(listItem);

            // Sort the list items by the length of their text
            const sortedItems = Array.from(list.children).sort((a, b) => a.textContent.length - b.textContent.length);
            list.innerHTML = ''; // Clear the list

            // Append the sorted items back to the list
            for (const item of sortedItems) {
                list.appendChild(item);
            }

            // If the list has more than MAX_ITEMS, remove the first item
            if (list.children.length > MAX_ITEMS) {
                list.removeChild(list.firstChild);
            }

            // Clear the input field
            inp.value = '';
        }

        // Focus on the input field
        inp.focus();
    }
}
