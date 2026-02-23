const jobCards = document.querySelectorAll(".job-card");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCountLabel = document.getElementById("jobCountLabel");


const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");


let total = jobCards.length;
let interview = 0;
let rejected = 0;


const noJobsMessage = document.createElement("div");
noJobsMessage.className = "no-jobs-message text-center py-10";
noJobsMessage.innerHTML = `
  <img src="jobs.png" alt="No Jobs" class="mx-auto mb-4 w-16 h-16">
  <h3 class="text-lg font-semibold text-gray-800">No jobs available</h3>
  <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
`;


const jobContainer = document.querySelector(".space-y-6");
jobContainer.appendChild(noJobsMessage);
noJobsMessage.style.display = "none";


function updateDashboard() {
    totalCount.textContent = total;
    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}

function updateTabCount(status) {
    let count = 0;
    document.querySelectorAll(".job-card").forEach(card => {
        if (status === "all" || card.dataset.status === status) {
            count++;
        }
    });
    jobCountLabel.textContent = count + " jobs";

    noJobsMessage.style.display = count === 0 ? "block" : "none";
}

function filterTab(status) {
    document.querySelectorAll(".job-card").forEach(card => {
        card.style.display = (status === "all" || card.dataset.status === status) ? "block" : "none";
    });
    updateTabCount(status);
}

function getActiveTab() {
    if (interviewTab.classList.contains("bg-blue-600")) return "interview";
    if (rejectedTab.classList.contains("bg-blue-600")) return "rejected";
    return "all";
}



function setActiveTab(activeBtn) {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-gray-100", "text-gray-600");
    });

    activeBtn.classList.remove("bg-gray-100", "text-gray-600");
    activeBtn.classList.add("bg-blue-600", "text-white");
}

jobCards.forEach(card => {
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");
    const deleteBtn = card.querySelector(".delete-btn");
    const statusBadge = card.querySelector(".status-badge");


    interviewBtn?.addEventListener("click", () => {
        const currentStatus = card.dataset.status;
        statusBadge.classList.remove(
            "bg-gray-100", "text-gray-800",
            "bg-green-600", "text-white", "border-green-600",
            "bg-red-600", "text-white", "border-red-600"
        );

        if (currentStatus === "interview") {
            card.dataset.status = "all";
            interview--;
            statusBadge.textContent = "NOT APPLIED";

            statusBadge.classList.add("bg-gray-100", "text-gray-800");

        } else {
            if (currentStatus === "rejected") rejected--;
            card.dataset.status = "interview";
            interview++;
            statusBadge.textContent = "INTERVIEW";

            statusBadge.classList.add("bg-green-600", "text-white");
        }

        updateDashboard();
        filterTab(getActiveTab());
    });


    rejectedBtn?.addEventListener("click", () => {
        const currentStatus = card.dataset.status;
        statusBadge.classList.remove(
            "bg-gray-100", "text-gray-800",
            "bg-green-600", "text-white",
            "bg-red-600"
        );

        if (currentStatus === "rejected") {
            card.dataset.status = "all";
            rejected--;
            statusBadge.textContent = "NOT APPLIED";
            statusBadge.classList.add("bg-gray-100", "text-gray-800");

        } else {
            if (currentStatus === "interview") interview--;
            card.dataset.status = "rejected";
            rejected++;
            statusBadge.textContent = "REJECTED";
            statusBadge.classList.add("bg-red-600", "text-white");
        }

        updateDashboard();
        filterTab(getActiveTab());
    });

    deleteBtn?.addEventListener("click", () => {
        const currentStatus = card.dataset.status;

        if (currentStatus === "interview") interview--;
        if (currentStatus === "rejected") rejected--;
        total--;
        card.remove();

        updateDashboard();
        filterTab(getActiveTab());
    });
});

allTab.addEventListener("click", () => {
    setActiveTab(allTab);
    filterTab("all");
});

interviewTab.addEventListener("click", () => {
    setActiveTab(interviewTab);
    filterTab("interview");
});

rejectedTab.addEventListener("click", () => {
    setActiveTab(rejectedTab);
    filterTab("rejected");
});

updateDashboard();
filterTab("all");

