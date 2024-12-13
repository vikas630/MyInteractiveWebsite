function toggleContactSection() {
    const contactSection = document.getElementById("contact");
    const heroSection = document.getElementById("hero");
    const arrowIcon = document.getElementById("arrow-icon");

    contactSection.classList.toggle("hidden");
    heroSection.classList.toggle("blurred");

    if (contactSection.classList.contains("hidden")) {
        arrowIcon.classList.remove("fa-chevron-up");
        arrowIcon.classList.add("fa-chevron-down");
    } else {
        arrowIcon.classList.remove("fa-chevron-down");
        arrowIcon.classList.add("fa-chevron-up");
    }
}

function scrollToHome() {
    const heroSection = document.getElementById("hero");
    const contactSection = document.getElementById("contact");
    const arrowIcon = document.getElementById("arrow-icon");

    heroSection.classList.remove("blurred");
    contactSection.classList.add("hidden");

    arrowIcon.classList.remove("fa-chevron-up");
    arrowIcon.classList.add("fa-chevron-down");

    heroSection.scrollIntoView({ behavior: "smooth" });
}
// Content for each field
const aboutMeContent = `
    Software Engineering Analyst with 2 years’ experience at Accenture, specializing in ASP.NET Core,
    Microsoft SQL Server, Azure services, and having good knowledge in Power BI. Demonstrated expertise
    in creating data-driven reports, automating manual tasks, and ensuring application availability. Proven
    ability to analyze data for informed decision-making and improve team efficiency through active participation
    in scrum meetings. Adept at handling major issues promptly and delivering high-quality solutions on time.
    Career goal: to leverage technical skills and analytical abilities to drive innovation in software development.
`;

const myExperienceContent = `
    <strong>Accenture</strong><br>
    <strong>Software Engineering Analyst</strong><br>
    January 2023 – November 2024<br>
    Bangalore, Karnataka<br>
    <strong>Technologies/tools:</strong> ASP.NET Core API, Microsoft SQL Server, Azure Data Factory, Azure Services, Jira, ServiceNow<br><br>
    <strong>Roles and responsibilities:</strong>
    <ul>
        <li>Monitored application availability to quickly spot and fix issues, reducing downtime. Worked with different teams to schedule tasks efficiently within available time slots.</li>
        <li>Responded quickly to application issues, ensuring smooth operations and improving team efficiency through regular monitoring.</li>
        <li>Created scripts and stored procedures for repetitive tasks from users and created email alerts to trigger when search indexers failed, removing the need for manual monitoring.</li>
        <li>Actively participated in scrum meetings, helping with sprint planning, estimating tasks, and giving demos at the end of each sprint. Engaged fully in retrospectives to improve future work.</li>
        <li>Took on tasks from business stakeholders, delivering work on time and maintaining high quality.</li>
        <li>Handled major issues promptly, providing workarounds or fixing problems at the root to keep users satisfied.</li>
        <li>Automated manual tasks to save time and improve efficiency. Worked closely with users to understand their needs and delivered solutions on time while resolving bugs.</li>
    </ul>
    <br>
    <strong>Accenture</strong><br>
    <strong>Software Engineering Associate</strong><br>
    October 2022 – December 2022<br>
    Bangalore, Karnataka<br>
    <strong>Technologies/tools:</strong> Power BI Desktop, Microsoft SQL Server, Excel<br><br>
    <strong>Roles and responsibilities:</strong>
    <ul>
        <li>Created reports based on stakeholders' requirements.</li>
        <li>Used Microsoft SQL Server and Excel for data processing and converted raw data into reports.</li>
        <li>Analyzed previous and present data for better decision-making.</li>
        <li>Actively participated in scrum meetings and retrospectives for better understanding and improving future work.</li>
    </ul>
`;


const toolsContent = `
    <ul>
        <li><strong>Programming Languages:</strong> ASP.NET Web API, ASP.NET Core, Java, SQL</li>
        <li><strong>Data & Analytics:</strong> Power BI, Azure services, Entity Framework</li>
        <li><strong>Developer Tools:</strong> Visual Studio, Eclipse, Microsoft SQL Server</li>
        <li><strong>Other Tools:</strong> Jira, ServiceNow, Power BI Desktop</li>
        <li><strong>Workflow Models:</strong> Agile, Waterfall, V-Model</li>
    </ul>
`;

const certificationsContent = `
    <ul>
        <li>Microsoft Azure Fundamentals - AZ-900</li>
        <li>Designing and Implementing a Microsoft Azure AI Solution - AI-102</li>
        <li>Microsoft Certified: Power BI Data Analyst Associate - PL-300</li>
        <li>SQL Advanced Certification from HackerRank</li>
        <li>REST API (Intermediate)</li>
    </ul>
`;

const talkToMeContent = `
    <ul>
        <li>Email: <a href="mailto:vikasvickky2305@gmail.com">vikasvickky2305@gmail.com</a></li>
        <li>Phone: <a href="tel:6301510040">6301510040</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/manchalavikas" target="_blank">manchalavikas</a></li>
        <li>Instagram: <a href="https://www.instagram.com/vikas_manchala?igsh=MW1tMzV2MWR5OHdh" target="_blank">@vikas_manchala</a></li>
    </ul>
`;

const hobbiesContent = `
    <ul>
        <li>Badminton</li>
        <li>Swimming</li>
    </ul>
`;

// Show Modal
function showModal(title, content) {
    const modal = document.getElementById("dynamicModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    modalTitle.innerHTML = title;
    modalBody.innerHTML = content;

    // Show modal and blur background
    modal.classList.add("active");
    document.body.classList.add("blurred");
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("dynamicModal");

    // Hide modal and remove blur effect
    modal.classList.remove("active");
    document.body.classList.remove("blurred");
}

