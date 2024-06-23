const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const information = data.data.tools;
    displayData(information.slice(0, 6)); // Display first 6 items initially
}

const displayData = (infoData) => {
    const dataDivision = document.getElementById('data-div');
    
    infoData.forEach(info => {
        const aiCard = document.createElement('div');
        aiCard.classList = `card w-96 bg-base-100 shadow-xl mb-10`;
        aiCard.innerHTML = `
            <figure><img src="${info.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="font-bold card-title">
                    Features
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>1. Natural Language Processing</p>
                <p>2. Contextual Understanding</p>
                <p class="border-b border-red-500 pb-10">3. Text Generation</p>
                <h3 class="font-bold">${info.name}</h3>
                <div class="flex items-center mt-2">
                    <i class="fa fa-calendar mr-2"></i>
                    <span>${info.published_in}</span>
                </div>
            </div>
        `;
        dataDivision.appendChild(aiCard);
    });

    // Show or hide "Show All" button based on the number of items
    const showAllButton = document.getElementById('show-all-button');
    if (infoData.length <= 6) {
        showAllButton.classList.remove('hidden'); // Hide button if less than 6 items
    } else {
        showAllButton.classList.add('hidden'); // Show button if 6 or more items
    }
}

// Function to handle "Show All" button click
const handleShowAll = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const information = data.data.tools;
    displayData(information); // Display all items
}

// Add event listener to "Show All" button
document.getElementById('show-all-button').addEventListener('click', handleShowAll);

// Call loadData to initially load data with default of first 6 items
loadData();
