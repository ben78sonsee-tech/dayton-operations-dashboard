const state = {
  activeRoute: "dashboard",
  activeDay: "Saturday",
  activeClub: "Eastern Blades",
  activeStatus: "All",
  activeRole: "dayton",
  fixtures: [],
  weights: {
    homeGames: 50,
    teamsPlaying: 30,
    utilisation: 20
  },
  importName: "HWA Fixtures - Round 12.xlsx",
  changes: [
    { type: "New", title: "Div 6 Men added", detail: "Saturday 2:00 PM, Turf 1", tone: "neutral" },
    { type: "Removed", title: "Div 7 Women removed", detail: "Saturday 12:30 PM", tone: "unfilled" },
    { type: "Moved", title: "Turf 2 game moved", detail: "Turf 2 changed to Turf 1", tone: "partial" },
    { type: "Time", title: "J9 Girls pushed later", detail: "Sunday 9:00 AM moved to 10:30 AM", tone: "partial" }
  ],
  sessions: [
    {
      id: "sat-am",
      day: "Saturday",
      label: "Saturday Morning",
      time: "8:00 AM - 12:00 PM",
      primaryClub: "Eastern Blades",
      games: 8,
      casual: 3,
      required: 12,
      filled: 10,
      requirements: [
        { role: "Open Facility", owner: "Casual Staff", required: 1, filled: 1 },
        { role: "Turf 1 Timekeeper", owner: "Eastern Blades", required: 2, filled: 1 },
        { role: "Canteen Support", owner: "Eastern Blades", required: 2, filled: 2 }
      ]
    },
    {
      id: "sat-pm",
      day: "Saturday",
      label: "Saturday Afternoon",
      time: "12:00 PM - 8:00 PM",
      primaryClub: "Harlies",
      games: 10,
      casual: 2,
      required: 16,
      filled: 11,
      requirements: [
        { role: "Bar Supervisor", owner: "Casual Staff", required: 1, filled: 1 },
        { role: "Canteen Support", owner: "Harlies", required: 4, filled: 2 },
        { role: "Close Facility", owner: "Casual Staff", required: 1, filled: 1 }
      ]
    },
    {
      id: "sun",
      day: "Sunday",
      label: "Sunday",
      time: "8:00 AM - 5:00 PM",
      primaryClub: "Harlies",
      games: 10,
      casual: 2,
      required: 17,
      filled: 16,
      requirements: [
        { role: "Facility Supervisor", owner: "Casual Staff", required: 1, filled: 1 },
        { role: "Turf 2 Timekeeper", owner: "Harlies", required: 2, filled: 2 },
        { role: "Match Day Support", owner: "Harlies", required: 3, filled: 2 }
      ]
    },
    {
      id: "midweek",
      day: "Midweek",
      label: "Wednesday Evening",
      time: "6:00 PM - 9:00 PM",
      primaryClub: "Dayton",
      games: 1,
      casual: 0,
      required: 2,
      filled: 1,
      requirements: [
        { role: "Midweek Fixture Support", owner: "Dayton Casual Staff", required: 1, filled: 0 },
        { role: "Committee Representative", owner: "Dayton Committee", required: 1, filled: 1 }
      ]
    }
  ],
  teams: [
    { club: "Eastern Blades", team: "Div 2 Men", status: "Playing at Dayton", time: "Sat 11:00 AM", venue: "Dayton Turf 1" },
    { club: "Eastern Blades", team: "Div 4 Women", status: "Away Fixture", time: "Sat 2:00 PM", venue: "Whitford Hockey Centre" },
    { club: "Eastern Blades", team: "J7 Boys", status: "No Game", time: "-", venue: "-" },
    { club: "Eastern Blades", team: "J9 Girls", status: "Bye", time: "-", venue: "-" },
    { club: "Harlies", team: "Div 1 Women", status: "Playing at Dayton", time: "Sat 4:00 PM", venue: "Dayton Turf 2" },
    { club: "Harlies", team: "Div 5 Men", status: "Playing at Dayton", time: "Sun 1:00 PM", venue: "Dayton Turf 1" },
    { club: "Harlies", team: "J5 Girls", status: "Away Fixture", time: "Sun 9:00 AM", venue: "Perth Hockey Stadium" },
    { club: "Harlies", team: "J11 Boys", status: "No Game", time: "-", venue: "-" }
  ],
  casualShifts: [
    { role: "Facility Supervisor", person: "Alex", time: "Sat 8:00 AM - 4:00 PM", hours: 8, status: "Assigned" },
    { role: "Bar Supervisor", person: "Sam", time: "Sat 12:00 PM - 8:00 PM", hours: 8, status: "Assigned" },
    { role: "Open Facility", person: "Jordan", time: "Sat 8:00 AM - 12:00 PM", hours: 4, status: "Assigned" },
    { role: "Close Facility", person: "Casey", time: "Sun 1:00 PM - 5:00 PM", hours: 4, status: "Assigned" },
    { role: "Canteen Lead", person: "Morgan", time: "Sat 12:00 PM - 4:00 PM", hours: 4, status: "Assigned" }
  ],
  openCasual: [
    { role: "Midweek Fixture Support", time: "Wed 6:00 PM - 9:00 PM", hours: 3 },
    { role: "Canteen Lead", time: "Sat 12:00 PM - 4:00 PM", hours: 4 },
    { role: "Facility Support", time: "Sun 9:00 AM - 1:00 PM", hours: 4 }
  ],
  roles: [
    { role: "Open Facility", owner: "Casual Staff", shift: "4 hrs", active: true },
    { role: "Close Facility", owner: "Casual Staff", shift: "4 hrs", active: true },
    { role: "Canteen Support", owner: "Primary Club", shift: "2 hrs", active: true },
    { role: "Bar Supervisor", owner: "Casual Staff", shift: "8 hrs", active: true },
    { role: "Turf Timekeeper", owner: "Rule-based Club", shift: "2 hrs", active: true },
    { role: "Midweek Fixture Support", owner: "Dayton Casual Staff", shift: "3 hrs", active: true }
  ],
  overrides: [
    {
      id: "override-1",
      sessionId: "sat-pm",
      sessionLabel: "Saturday Afternoon",
      originalClub: "Eastern Blades",
      newClub: "Harlies",
      reason: "Harlies has highest afternoon usage after late fixture movement.",
      user: "Dayton Admin",
      timestamp: "2026-06-12 08:42",
      alertSent: true,
      affectedClubs: ["Eastern Blades", "Harlies"]
    }
  ]
};

const accessProfiles = {
  dayton: {
    label: "Dayton Admin",
    club: "",
    copy: "Full operational visibility, fixture upload, casual allocation, allocation override, alerts, and reports.",
    permissions: ["Upload fixtures", "Allocate casual staff", "Override club allocation", "Run reports", "Trigger alerts"]
  },
  blades: {
    label: "Eastern Blades Admin",
    club: "Eastern Blades",
    copy: "Can view Blades requirements, team availability, volunteer coverage, and exports. Cannot edit Harlies or override Dayton allocations.",
    permissions: ["View Blades requirements", "Mark volunteer positions", "Export requirements", "View Blades reports"]
  },
  harlies: {
    label: "Harlies Admin",
    club: "Harlies",
    copy: "Can view Harlies requirements, team availability, volunteer coverage, and exports. Cannot edit Blades or override Dayton allocations.",
    permissions: ["View Harlies requirements", "Mark volunteer positions", "Export requirements", "View Harlies reports"]
  }
};

const routes = [
  { id: "dashboard", label: "Dashboard", icon: "DH", title: "Dashboard", subtitle: "Weekend operational visibility" },
  { id: "upload", label: "Upload", icon: "UP", title: "Fixture Upload", subtitle: "Weekly spreadsheet import" },
  { id: "weekend", label: "Weekend Ops", icon: "WO", title: "Weekend Operations", subtitle: "Sessions and requirements" },
  { id: "teams", label: "Teams", icon: "TA", title: "Team Availability", subtitle: "Club status visibility" },
  { id: "casual", label: "Casual Staff", icon: "CS", title: "Casual Staff", subtitle: "Shifts and open casual roles" },
  { id: "reports", label: "Reports", icon: "RP", title: "Reports", subtitle: "Coverage and hours" },
  { id: "rules", label: "Rules & Setup", icon: "RS", title: "Rules & Setup", subtitle: "Allocation and role configuration" }
];

const sampleCsv = `Date,Time,Venue,Surface,Grade,Home Team,Away Team
2026-06-13,08:00,Dayton,Turf 1,Div 6 Men,Eastern Blades,Whitford
2026-06-13,10:00,Dayton,Turf 2,Div 4 Women,Harlies,Reds
2026-06-13,14:00,Dayton,Turf 1,Div 6 Men,Eastern Blades,Reds
2026-06-14,13:00,Dayton,Turf 2,Div 5 Men,Harlies,Whitford`;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  renderNavigation();
  bindEvents();
  renderAll();
  setRoute("dashboard");
}

function bindEvents() {
  $("#menuButton").addEventListener("click", toggleMenu);
  $("#mobileBackdrop").addEventListener("click", closeMenu);
  $("#roleSelect").addEventListener("change", (event) => {
    state.activeRole = event.target.value;
    const profile = currentProfile();
    if (profile.club) {
      state.activeClub = profile.club;
    }
    renderAll();
    setRoute(state.activeRoute);
    toast(`Switched to ${profile.label}.`);
  });
  $("#sampleImportButton").addEventListener("click", importSample);
  $("#loadFixtureCsvButton").addEventListener("click", importSample);
  $("#processFileButton").addEventListener("click", processSelectedFile);
  $("#autoAssignButton").addEventListener("click", autoAssignOpenCasual);
  $("#saveRulesButton").addEventListener("click", saveRules);
  $("#exportAlertsButton").addEventListener("click", exportOverrideAlerts);
  $("#clubFilter").addEventListener("change", (event) => {
    state.activeClub = event.target.value;
    renderTeams();
  });
  document.body.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      if (routeButton.disabled || routeButton.classList.contains("is-disabled")) return;
      setRoute(routeButton.dataset.route);
    }
  });
}

function renderNavigation() {
  $("#sideNav").innerHTML = routes.map((route) => `
    <button class="nav-button" type="button" data-route="${route.id}" aria-label="${route.label}">
      <span>${route.icon}</span>
      <span>${route.label}</span>
    </button>
  `).join("");
}

function renderAll() {
  renderAccess();
  renderDashboard();
  renderUpload();
  renderWeekendFilters();
  renderWeekend();
  renderTeamControls();
  renderTeams();
  renderCasual();
  renderReports();
  renderRules();
}

function setRoute(routeId) {
  if (!canAccessRoute(routeId)) {
    routeId = "dashboard";
  }
  state.activeRoute = routeId;
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === `view-${routeId}`));
  $$(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.route === routeId));
  const route = routes.find((item) => item.id === routeId);
  $("#pageTitle").textContent = route.title;
  $("#pageSubtitle").textContent = route.subtitle;
  closeMenu();
}

function currentProfile() {
  return accessProfiles[state.activeRole];
}

function isDaytonAdmin() {
  return state.activeRole === "dayton";
}

function canAccessRoute(routeId) {
  if (isDaytonAdmin()) return true;
  return !["upload", "rules"].includes(routeId);
}

function renderAccess() {
  const profile = currentProfile();
  $("#roleSelect").value = state.activeRole;
  $("#accessTitle").textContent = profile.label;
  $("#accessCopy").textContent = profile.copy;
  $("#permissionChips").innerHTML = profile.permissions.map((permission) => `<span>${permission}</span>`).join("");
  $$(".nav-button").forEach((button) => {
    const allowed = canAccessRoute(button.dataset.route);
    button.disabled = !allowed;
    button.classList.toggle("is-disabled", !allowed);
  });
  $$(".topbar-actions [data-route='upload']").forEach((button) => {
    button.disabled = !isDaytonAdmin();
    button.classList.toggle("is-disabled", !isDaytonAdmin());
  });
  $("#sampleImportButton").disabled = !isDaytonAdmin();
  $("#sampleImportButton").classList.toggle("is-disabled", !isDaytonAdmin());
}

function toggleMenu() {
  $(".sidebar").classList.toggle("is-open");
  $("#mobileBackdrop").classList.toggle("is-visible");
}

function closeMenu() {
  $(".sidebar").classList.remove("is-open");
  $("#mobileBackdrop").classList.remove("is-visible");
}

function totals() {
  const scopedSessions = visibleSessions();
  const required = scopedSessions.reduce((sum, session) => sum + session.required, 0);
  const filled = scopedSessions.reduce((sum, session) => sum + session.filled, 0);
  const games = scopedSessions.reduce((sum, session) => sum + session.games, 0);
  const casualAssigned = state.casualShifts.length;
  const open = Math.max(0, required - filled);
  const coverage = required ? Math.round((filled / required) * 100) : 0;
  const volunteerRequired = scopedSessions.reduce((sum, session) => {
    return sum + session.requirements
      .filter((requirement) => requirement.owner.includes("Blades") || requirement.owner.includes("Harlies") || requirement.owner.includes("Club"))
      .reduce((inner, requirement) => inner + Math.max(0, requirement.required - requirement.filled), 0);
  }, 0);
  return { required, filled, games, casualAssigned, open, coverage, volunteerRequired };
}

function visibleSessions() {
  const profile = currentProfile();
  if (!profile.club) return state.sessions;
  return state.sessions
    .map((session) => {
      const requirements = session.requirements.filter((requirement) => requirement.owner === profile.club);
      const required = requirements.reduce((sum, item) => sum + item.required, 0);
      const filled = requirements.reduce((sum, item) => sum + item.filled, 0);
      return { ...session, requirements, required, filled };
    })
    .filter((session) => session.requirements.length);
}

function statusTone(filled, required) {
  if (filled >= required) return "filled";
  if (filled > 0) return "partial";
  return "unfilled";
}

function statusLabel(filled, required) {
  if (filled >= required) return "Filled";
  if (filled > 0) return "Partial";
  return "Unfilled";
}

function badgeClass(tone) {
  if (tone === "filled") return "badge-filled";
  if (tone === "unfilled") return "badge-unfilled";
  if (tone === "neutral") return "badge-neutral";
  return "badge-partial";
}

function renderDashboard() {
  const t = totals();
  const sessionsForView = visibleSessions();
  $("#summaryGrid").innerHTML = [
    metricCard(t.games, "Games this weekend", `${state.sessions.length} operating sessions`, "teal"),
    metricCard(t.volunteerRequired, "Volunteer gaps", "Remaining after casual allocation", t.volunteerRequired ? "partial" : "filled"),
    metricCard(t.casualAssigned, "Casual staff assigned", `${casualHours()} hours allocated`, "filled"),
    metricCard(t.open, "Open positions", `${t.filled} of ${t.required} filled`, t.open ? "unfilled" : "filled")
  ].join("");

  $("#coverageFill").style.width = `${t.coverage}%`;
  $("#coveragePercent").textContent = `${t.coverage}%`;
  $("#heroCoverage").textContent = `${t.coverage}%`;
  $("#coverageText").textContent = `${t.filled} of ${t.required} requirement units filled`;
  $("#sidebarCoverage").textContent = `${t.coverage}% covered`;
  const tone = t.coverage >= 95 ? "filled" : t.coverage > 60 ? "partial" : "unfilled";
  $("#coverageBadge").className = `badge ${badgeClass(tone)}`;
  $("#coverageBadge").textContent = tone === "filled" ? "Filled" : tone === "partial" ? "Partial" : "Risk";
  $("#heroTitle").textContent = tone === "filled" ? "Operations are fully covered" : tone === "partial" ? "Operations are partially covered" : "Operations need attention";
  $("#heroCopy").textContent = `${t.open} positions remain open after ${state.casualShifts.length} casual staff assignments. Clubs keep autonomy over their own volunteer coverage.`;

  const risks = sessionsForView
    .flatMap((session) => session.requirements.map((requirement) => ({ session, requirement })))
    .filter(({ requirement }) => requirement.filled < requirement.required);
  $("#riskList").innerHTML = risks.map(({ session, requirement }) => quickItem(
    requirement.role,
    `${session.label} - ${requirement.owner}`,
    `${requirement.required - requirement.filled} open`,
    statusTone(requirement.filled, requirement.required)
  )).join("");

  renderChangeLists();
  renderDashboardSections();
  renderOverrideTools();
  $("#allocationTable").innerHTML = sessionsForView.map((session) => {
    const tone = statusTone(session.filled, session.required);
    return `
      <tr>
        <td><strong>${session.label}</strong><br><span>${session.time}</span></td>
        <td>${session.primaryClub}</td>
        <td>${session.games}</td>
        <td>${Math.max(0, session.required - session.filled)}</td>
        <td><span class="badge ${badgeClass(tone)}">${statusLabel(session.filled, session.required)}</span></td>
      </tr>
    `;
  }).join("");
}

function metricCard(value, label, detail, tone = "info") {
  return `
    <div class="metric-card" data-tone="${tone}">
      <strong>${value}</strong>
      <span>${label}</span>
      <small>${detail}</small>
    </div>
  `;
}

function renderDashboardSections() {
  const assignedCasual = state.casualShifts.slice(0, 3);
  const openCasual = state.openCasual.slice(0, 1);
  $("#dashboardCasualCards").innerHTML = [
    ...assignedCasual.map((shift) => dashboardCard(
      shift.role,
      `${shift.person} - ${shift.time}`,
      `${shift.hours} hrs`,
      "filled",
      "card-filled"
    )),
    ...openCasual.map((shift) => dashboardCard(
      shift.role,
      `${shift.time} still needs casual coverage`,
      `${shift.hours} hrs`,
      "unfilled",
      "card-unfilled"
    ))
  ].join("");

  const volunteerGaps = visibleSessions()
    .flatMap((session) => session.requirements.map((requirement) => ({ session, requirement })))
    .filter(({ requirement }) => {
      const owner = requirement.owner;
      return requirement.filled < requirement.required && (owner.includes("Blades") || owner.includes("Harlies") || owner.includes("Club"));
    })
    .slice(0, 4);
  $("#dashboardVolunteerCards").innerHTML = volunteerGaps.map(({ session, requirement }) => dashboardCard(
    requirement.role,
    `${session.label} - ${requirement.owner}`,
    `${requirement.required - requirement.filled} open`,
    statusTone(requirement.filled, requirement.required),
    statusTone(requirement.filled, requirement.required) === "unfilled" ? "card-unfilled" : "card-partial"
  )).join("") || dashboardCard("All volunteer requirements covered", "No club gaps remaining", "Filled", "filled", "card-filled");

  const profile = currentProfile();
  const scopedTeams = profile.club ? state.teams.filter((team) => team.club === profile.club) : state.teams;
  const teamSignals = [
    { title: "Playing at Dayton", status: "Playing at Dayton", tone: "partial", card: "card-partial" },
    { title: "Away fixtures", status: "Away Fixture", tone: "unfilled", card: "card-unfilled" },
    { title: "No game / bye", status: "No Game", tone: "filled", card: "card-filled" }
  ];
  $("#dashboardTeamCards").innerHTML = teamSignals.map((signal) => {
    const count = signal.status === "No Game"
      ? scopedTeams.filter((team) => team.status === "No Game" || team.status === "Bye").length
      : scopedTeams.filter((team) => team.status === signal.status).length;
    const detail = signal.status === "Playing at Dayton"
      ? "Good volunteer opportunity pool"
      : signal.status === "Away Fixture"
        ? "Lower availability for club coverage"
        : "Potentially available volunteers";
    return dashboardCard(signal.title, detail, String(count), signal.tone, signal.card);
  }).join("");

  $("#dashboardChangeCards").innerHTML = state.changes.slice(0, 4).map((change) => dashboardCard(
    change.title,
    change.detail,
    change.type,
    change.tone,
    change.tone === "unfilled" ? "card-unfilled" : change.tone === "partial" ? "card-partial" : change.tone === "filled" ? "card-filled" : "card-info"
  )).join("");
  renderOverrideAlerts();
}

function dashboardCard(title, detail, label, tone = "neutral", cardClass = "card-info") {
  return `
    <div class="dashboard-card ${cardClass}">
      <div>
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
      <span class="badge ${badgeClass(tone)}">${label}</span>
    </div>
  `;
}

function quickItem(title, detail, label, tone = "neutral") {
  return `
    <div class="quick-item">
      <div>
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
      <span class="badge ${badgeClass(tone)}">${label}</span>
    </div>
  `;
}

function renderChangeLists() {
  const html = state.changes.map((change) => quickItem(change.title, change.detail, change.type, change.tone)).join("");
  $("#changeList").innerHTML = html;
  $("#uploadChangeList").innerHTML = html;
  $("#changeCountLabel").textContent = `${state.changes.length} changes`;
}

function renderUpload() {
  const t = totals();
  $("#activeImportLabel").textContent = `${state.importName} active`;
  $("#importResult").innerHTML = [
    quickItem("Fixtures imported", `${t.games} games currently active`, String(t.games), "filled"),
    quickItem("Required fields", "Date, Time, Venue, Surface, Grade, Home Team, Away Team", "Mapped", "filled"),
    quickItem("Dashboard recalculation", "Staffing, clubs, coverage, and team statuses updated", "Done", "filled")
  ].join("");
}

function renderWeekendFilters() {
  const days = ["Saturday", "Sunday", "Midweek"];
  $("#dayFilter").innerHTML = days.map((day) => `
    <button class="segment ${state.activeDay === day ? "is-active" : ""}" type="button" data-day="${day}">${day}</button>
  `).join("");
  $$("#dayFilter .segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDay = button.dataset.day;
      renderWeekendFilters();
      renderWeekend();
    });
  });
}

function renderWeekend() {
  const sessions = visibleSessions().filter((session) => session.day === state.activeDay);
  $("#operationsList").innerHTML = sessions.map((session) => {
    const tone = statusTone(session.filled, session.required);
    return `
      <article class="operation-card">
        <div class="operation-top">
          <div>
            <strong>${session.label}</strong>
            <span>${session.time} - Primary Club: ${session.primaryClub}</span>
          </div>
          <span class="badge ${badgeClass(tone)}">${statusLabel(session.filled, session.required)}</span>
        </div>
        <div class="summary-grid">
          ${metricCard(session.games, "Games", "Imported fixtures")}
          ${metricCard(session.casual, "Casual shifts", "Allocated first")}
          ${metricCard(session.required, "Required units", "Operational roles")}
          ${metricCard(Math.max(0, session.required - session.filled), "Open units", "Remaining gaps")}
        </div>
        <div class="requirement-grid">
          ${session.requirements.map((requirement) => `
            <div class="requirement">
              <strong>${requirement.role}</strong>
              <span>${requirement.owner}</span>
              <p>${requirement.filled} of ${requirement.required} filled</p>
              ${volunteerAction(session, requirement)}
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function volunteerAction(session, requirement) {
  const profile = currentProfile();
  if (!profile.club || requirement.owner !== profile.club || requirement.filled >= requirement.required) return "";
  return `<button class="ghost-button requirement-action" type="button" onclick="markVolunteerFilled('${session.id}', '${requirement.role}')">Mark filled</button>`;
}

window.markVolunteerFilled = function markVolunteerFilled(sessionId, role) {
  const profile = currentProfile();
  const session = state.sessions.find((item) => item.id === sessionId);
  const requirement = session?.requirements.find((item) => item.role === role && item.owner === profile.club);
  if (!requirement) {
    toast("You cannot edit another club's requirements.");
    return;
  }
  requirement.filled = Math.min(requirement.required, requirement.filled + 1);
  session.filled = session.requirements.reduce((sum, item) => sum + item.filled, 0);
  renderAll();
  toast(`${role} marked filled for ${profile.club}.`);
};

function renderTeamControls() {
  const clubs = [...new Set(state.teams.map((team) => team.club))];
  $("#clubFilter").innerHTML = clubs.map((club) => `<option ${club === state.activeClub ? "selected" : ""}>${club}</option>`).join("");
  $("#clubFilter").disabled = Boolean(currentProfile().club);
  const statuses = ["All", "Playing at Dayton", "Away Fixture", "No Game", "Bye"];
  $("#statusFilter").innerHTML = statuses.map((status) => `
    <button class="segment ${state.activeStatus === status ? "is-active" : ""}" type="button" data-status="${status}">${status}</button>
  `).join("");
  $$("#statusFilter .segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeStatus = button.dataset.status;
      renderTeamControls();
      renderTeams();
    });
  });
}

function renderTeams() {
  const teams = state.teams.filter((team) => {
    const clubMatch = team.club === state.activeClub;
    const statusMatch = state.activeStatus === "All" || team.status === state.activeStatus;
    return clubMatch && statusMatch;
  });
  $("#teamGrid").innerHTML = teams.map((team) => `
    <div class="team-card">
      <div class="panel-heading">
        <strong>${team.team}</strong>
        <span class="badge ${teamStatusBadge(team.status)}">${team.status.replace("Playing at Dayton", "At Dayton")}</span>
      </div>
      <span>${team.time}</span>
      <p>${team.venue}</p>
    </div>
  `).join("");
}

function teamStatusBadge(status) {
  if (status === "Playing at Dayton") return "badge-partial";
  if (status === "Away Fixture") return "badge-unfilled";
  return "badge-filled";
}

function renderCasual() {
  $("#casualHoursLabel").textContent = `${casualHours()} hours`;
  $("#openCasualLabel").textContent = `${state.openCasual.length} open`;
  $("#casualShiftList").innerHTML = state.casualShifts.map((shift) => quickItem(
    shift.role,
    `${shift.person} - ${shift.time}`,
    `${shift.hours} hrs`,
    "filled"
  )).join("");
  $("#openCasualList").innerHTML = state.openCasual.map((shift) => quickItem(
    shift.role,
    shift.time,
    `${shift.hours} hrs`,
    "unfilled"
  )).join("") || `<div class="notice">All casual shifts have been assigned.</div>`;
}

function casualHours() {
  return state.casualShifts.reduce((sum, shift) => sum + shift.hours, 0);
}

function autoAssignOpenCasual() {
  const next = state.openCasual.shift();
  if (!next) {
    toast("No open casual shifts remain.");
    return;
  }
  state.casualShifts.push({ ...next, person: "Available staff", status: "Assigned" });
  const midweek = state.sessions.find((session) => session.id === "midweek");
  if (midweek && midweek.filled < midweek.required) midweek.filled += 1;
  renderAll();
  toast(`${next.role} assigned to available casual staff.`);
}

function renderReports() {
  const t = totals();
  $("#reportSummaryGrid").innerHTML = [
    metricCard(42, "Volunteer hours", "Club-managed coverage"),
    metricCard(casualHours(), "Casual hours", "Assigned first"),
    metricCard(8, "Committee hours", "Fallback coverage"),
    metricCard(`${t.coverage}%`, "Coverage", `${t.open} positions open`)
  ].join("");
  let clubHours = [
    { club: "Eastern Blades", hours: 22 },
    { club: "Harlies", hours: 20 },
    { club: "Dayton Committee", hours: 8 }
  ];
  if (currentProfile().club) {
    clubHours = clubHours.filter((item) => item.club === currentProfile().club);
  }
  const max = Math.max(...clubHours.map((item) => item.hours));
  $("#clubHoursChart").innerHTML = clubHours.map((item) => `
    <div class="bar-row">
      <strong>${item.club}</strong>
      <div class="bar-track"><span style="width: ${(item.hours / max) * 100}%"></span></div>
      <span>${item.hours}</span>
    </div>
  `).join("");
  $("#coverageExceptions").innerHTML = state.sessions
    .filter((session) => session.filled < session.required)
    .map((session) => quickItem(session.label, `${session.primaryClub} - ${session.time}`, `${session.required - session.filled} open`, statusTone(session.filled, session.required)))
    .join("");
}

function renderOverrideTools() {
  $("#overrideAccessBadge").textContent = isDaytonAdmin() ? "Enabled" : "Read only";
  $("#overrideAccessBadge").className = `badge ${isDaytonAdmin() ? "badge-filled" : "badge-neutral"}`;
  if (!isDaytonAdmin()) {
    $("#overrideFormWrap").innerHTML = `<div class="notice">Club administrators can view override alerts but cannot override Dayton allocations.</div>`;
    return;
  }
  $("#overrideFormWrap").innerHTML = `
    <label>
      <span>Session</span>
      <select id="overrideSession">
        ${state.sessions.map((session) => `<option value="${session.id}">${session.label} - ${session.primaryClub}</option>`).join("")}
      </select>
    </label>
    <label>
      <span>New volunteer club</span>
      <select id="overrideClub">
        <option>Eastern Blades</option>
        <option>Harlies</option>
      </select>
    </label>
    <label>
      <span>Reason for override</span>
      <input id="overrideReason" type="text" placeholder="Explain why Dayton is changing allocation">
    </label>
    <button class="primary-button" id="applyOverrideButton" type="button">Apply override & alert clubs</button>
  `;
  $("#applyOverrideButton").addEventListener("click", applyOverride);
}

function applyOverride() {
  const session = state.sessions.find((item) => item.id === $("#overrideSession").value);
  const newClub = $("#overrideClub").value;
  const reason = cleanCell($("#overrideReason").value);
  if (!session) return;
  if (!reason) {
    toast("Enter a reason before applying an override.");
    return;
  }
  const originalClub = session.primaryClub;
  session.primaryClub = newClub;
  session.requirements.forEach((requirement) => {
    if (requirement.owner === originalClub) requirement.owner = newClub;
  });
  const record = {
    id: `override-${Date.now()}`,
    sessionId: session.id,
    sessionLabel: session.label,
    originalClub,
    newClub,
    reason,
    user: currentProfile().label,
    timestamp: new Date().toLocaleString(),
    alertSent: true,
    affectedClubs: [...new Set([originalClub, newClub])]
  };
  state.overrides.unshift(record);
  renderAll();
  toast(`Override recorded and alert sent to ${record.affectedClubs.join(" and ")} admins.`);
}

function renderOverrideAlerts() {
  const profile = currentProfile();
  const alerts = state.overrides.filter((override) => !profile.club || override.affectedClubs.includes(profile.club));
  $("#overrideAlertCards").innerHTML = alerts.map((override) => dashboardCard(
    `${override.sessionLabel}: ${override.originalClub} to ${override.newClub}`,
    `${override.reason} By ${override.user} at ${override.timestamp}`,
    override.alertSent ? "Alert sent" : "Pending",
    override.alertSent ? "filled" : "partial",
    override.alertSent ? "card-violet" : "card-partial"
  )).join("") || dashboardCard("No override alerts", "No affected allocation changes for this access level", "Clear", "filled", "card-filled");
}

function exportOverrideAlerts() {
  const profile = currentProfile();
  const alerts = state.overrides.filter((override) => !profile.club || override.affectedClubs.includes(profile.club));
  const lines = [
    "Session,Original Allocation,New Allocation,Reason,User,Date Time,Alert Sent,Affected Clubs",
    ...alerts.map((override) => [
      override.sessionLabel,
      override.originalClub,
      override.newClub,
      override.reason,
      override.user,
      override.timestamp,
      override.alertSent ? "Yes" : "No",
      override.affectedClubs.join(" | ")
    ].map(csvEscape).join(","))
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "dayton-override-alerts.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  toast("Override alert export created.");
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function renderRules() {
  $("#ruleForm").innerHTML = [
    ruleInput("Home games", "homeGames", "Primary factor for day/session ownership"),
    ruleInput("Teams playing", "teamsPlaying", "Counts club participation across fixtures"),
    ruleInput("Facility utilisation", "utilisation", "Weights sessions with heavier surface load")
  ].join("");
  $$("#ruleForm input").forEach((input) => {
    input.addEventListener("input", () => {
      state.weights[input.name] = Number(input.value || 0);
      updateWeightBadge();
    });
  });
  $("#roleTemplateTable").innerHTML = state.roles.map((role) => `
    <tr>
      <td>${role.role}</td>
      <td>${role.owner}</td>
      <td>${role.shift}</td>
      <td>${role.active ? "Yes" : "No"}</td>
    </tr>
  `).join("");
  updateWeightBadge();
}

function ruleInput(label, name, help) {
  return `
    <div class="rule-row">
      <label>
        <strong>${label}</strong>
        <span>${help}</span>
      </label>
      <input type="number" min="0" max="100" name="${name}" value="${state.weights[name]}" aria-label="${label} weight">
    </div>
  `;
}

function updateWeightBadge() {
  const total = Object.values(state.weights).reduce((sum, value) => sum + Number(value), 0);
  $("#weightTotalBadge").textContent = `${total}%`;
  $("#weightTotalBadge").className = `badge ${total === 100 ? "badge-filled" : "badge-partial"}`;
}

function saveRules() {
  const total = Object.values(state.weights).reduce((sum, value) => sum + Number(value), 0);
  if (total !== 100) {
    toast("Rule weights should total 100% before saving.");
    return;
  }
  toast("Primary club allocation rules saved.");
}

function processSelectedFile() {
  const file = $("#fixtureFile").files[0];
  if (!file) {
    toast("Select a fixture file first.");
    return;
  }
  if (file.name.toLowerCase().endsWith(".csv") || file.name.toLowerCase().endsWith(".txt")) {
    const reader = new FileReader();
    reader.onload = () => parseCsvImport(String(reader.result || ""), file.name);
    reader.readAsText(file);
    return;
  }
  if (file.name.toLowerCase().endsWith(".xlsx")) {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        await parseXlsxImport(reader.result, file.name);
      } catch (error) {
        showImportError(error.message || "The workbook could not be parsed.");
      }
    };
    reader.readAsArrayBuffer(file);
    return;
  }
  showImportError("Unsupported file type. Please upload an .xlsx workbook or CSV export.");
}

function importSample() {
  parseCsvImport(sampleCsv, "sample-fixtures.csv");
}

function parseCsvImport(csv, name) {
  try {
    const rows = csv.trim().split(/\r?\n/).map(parseCsvLine);
    const fixtures = rowsToFixtures(rows);
    applyImportedFixtures(fixtures, name);
  } catch (error) {
    showImportError(error.message || "The CSV file could not be parsed.");
  }
}

async function parseXlsxImport(buffer, name) {
  if (!window.JSZip) {
    throw new Error("Excel support is not loaded. Refresh the page and try again.");
  }

  const zip = await JSZip.loadAsync(buffer);
  const workbookXml = await readZipText(zip, "xl/workbook.xml");
  const workbookRelsXml = await readZipText(zip, "xl/_rels/workbook.xml.rels");
  const sheetPath = getFirstWorksheetPath(workbookXml, workbookRelsXml);
  const sheetXml = await readZipText(zip, sheetPath);
  const sharedStrings = await readSharedStrings(zip);
  const rows = worksheetToRows(sheetXml, sharedStrings);
  const fixtures = rowsToFixtures(rows);
  applyImportedFixtures(fixtures, name);
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

function rowsToFixtures(rows) {
  const headers = (rows.shift() || []).map((header) => String(header || "").trim());
  const required = ["Date", "Time", "Venue", "Surface", "Grade", "Home Team", "Away Team"];
  const headerMap = createHeaderMap(headers);
  const missing = required.filter((field) => headerMap[field] === undefined);
  if (missing.length) {
    throw new Error(`Missing required columns: ${missing.join(", ")}`);
  }

  return rows
    .map((row, index) => {
      const fixture = {
        id: `fixture-${Date.now()}-${index}`,
        date: normaliseExcelDate(cleanCell(row[headerMap.Date])),
        time: normaliseExcelTime(cleanCell(row[headerMap.Time])),
        venue: cleanCell(row[headerMap.Venue]),
        surface: cleanCell(row[headerMap.Surface]),
        grade: cleanCell(row[headerMap.Grade]),
        homeTeam: cleanCell(row[headerMap["Home Team"]]),
        awayTeam: cleanCell(row[headerMap["Away Team"]])
      };
      fixture.key = fixtureKey(fixture);
      return fixture;
    })
    .filter((fixture) => fixture.date && fixture.time && fixture.homeTeam && fixture.awayTeam);
}

function normaliseExcelDate(value) {
  if (!/^\d+(\.\d+)?$/.test(value)) return value;
  const serial = Number(value);
  if (serial < 20000 || serial > 80000) return value;
  const utc = Math.round((serial - 25569) * 86400 * 1000);
  return new Date(utc).toISOString().slice(0, 10);
}

function normaliseExcelTime(value) {
  if (!/^\d+(\.\d+)?$/.test(value)) return value;
  const number = Number(value);
  if (number >= 1) return value;
  const totalMinutes = Math.round(number * 24 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hour12 = hours % 12 || 12;
  const suffix = hours >= 12 ? "PM" : "AM";
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function createHeaderMap(headers) {
  const aliases = {
    Date: ["date", "fixture date", "match date"],
    Time: ["time", "start time", "fixture time", "match time"],
    Venue: ["venue", "location", "ground"],
    Surface: ["surface", "turf", "field", "pitch"],
    Grade: ["grade", "division", "competition"],
    "Home Team": ["home team", "home", "team 1"],
    "Away Team": ["away team", "away", "team 2"]
  };
  const normalisedHeaders = headers.map(normaliseHeader);
  return Object.fromEntries(Object.entries(aliases).map(([field, options]) => [
    field,
    normalisedHeaders.findIndex((header) => options.includes(header))
  ]).filter(([, index]) => index >= 0));
}

function applyImportedFixtures(fixtures, name) {
  if (!fixtures.length) {
    showImportError("No valid fixture rows were found in the uploaded file.");
    return;
  }

  const previousFixtures = state.fixtures.length ? state.fixtures : flattenSessionFixtures();
  state.importName = name;
  state.fixtures = fixtures;
  state.changes = detectFixtureChanges(previousFixtures, fixtures);
  if (!state.changes.length) {
    state.changes = [{ type: "No changes", title: "No fixture changes detected", detail: name, tone: "filled" }];
  }
  rebuildDashboardFromFixtures(fixtures);
  $("#importStatusBadge").className = "badge badge-filled";
  $("#importStatusBadge").textContent = "Imported";
  renderAll();
  toast(`${fixtures.length} fixtures imported from ${name}.`);
}

function showImportError(message) {
  $("#importStatusBadge").className = "badge badge-unfilled";
  $("#importStatusBadge").textContent = "Invalid";
  $("#importResult").innerHTML = quickItem("Import failed", message, "Fix file", "unfilled");
  toast("Import failed validation.");
}

async function readZipText(zip, path) {
  const file = zip.file(path);
  if (!file) throw new Error(`Workbook part missing: ${path}`);
  return file.async("text");
}

async function readSharedStrings(zip) {
  const file = zip.file("xl/sharedStrings.xml");
  if (!file) return [];
  const xml = await file.async("text");
  const doc = parseXml(xml);
  return Array.from(doc.getElementsByTagName("si")).map((item) => {
    return Array.from(item.getElementsByTagName("t")).map((node) => node.textContent || "").join("");
  });
}

function getFirstWorksheetPath(workbookXml, relsXml) {
  const workbook = parseXml(workbookXml);
  const rels = parseXml(relsXml);
  const firstSheet = workbook.getElementsByTagName("sheet")[0];
  if (!firstSheet) throw new Error("No worksheets found in workbook.");
  const relId = firstSheet.getAttribute("r:id");
  const rel = Array.from(rels.getElementsByTagName("Relationship")).find((item) => item.getAttribute("Id") === relId);
  if (!rel) throw new Error("Could not resolve the first worksheet relationship.");
  const target = rel.getAttribute("Target") || "worksheets/sheet1.xml";
  return `xl/${target.replace(/^\/?xl\//, "")}`;
}

function worksheetToRows(sheetXml, sharedStrings) {
  const doc = parseXml(sheetXml);
  return Array.from(doc.getElementsByTagName("row")).map((row) => {
    const cells = Array.from(row.getElementsByTagName("c"));
    const values = [];
    cells.forEach((cell) => {
      const ref = cell.getAttribute("r") || "";
      const column = columnIndex(ref.replace(/\d/g, "")) || values.length;
      values[column] = readCellValue(cell, sharedStrings);
    });
    return values.map((value) => value ?? "");
  }).filter((row) => row.some((cell) => String(cell).trim()));
}

function readCellValue(cell, sharedStrings) {
  const type = cell.getAttribute("t");
  if (type === "inlineStr") {
    return Array.from(cell.getElementsByTagName("t")).map((node) => node.textContent || "").join("");
  }
  const value = cell.getElementsByTagName("v")[0]?.textContent || "";
  if (type === "s") return sharedStrings[Number(value)] || "";
  if (type === "b") return value === "1" ? "TRUE" : "FALSE";
  return value;
}

function parseXml(xml) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.getElementsByTagName("parsererror").length) throw new Error("Invalid workbook XML.");
  return doc;
}

function columnIndex(columnLetters) {
  if (!columnLetters) return 0;
  return columnLetters.split("").reduce((sum, letter) => sum * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}

function cleanCell(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normaliseHeader(value) {
  return cleanCell(value).toLowerCase();
}

function normaliseValue(value) {
  return cleanCell(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function fixtureKey(fixture) {
  return [
    normaliseValue(fixture.date),
    normaliseValue(fixture.time),
    normaliseValue(fixture.surface || fixture.venue),
    normaliseValue(fixture.grade),
    normaliseValue(fixture.homeTeam),
    normaliseValue(fixture.awayTeam)
  ].join("|");
}

function comparableFixtureKey(fixture) {
  return [
    normaliseValue(fixture.date),
    normaliseValue(fixture.grade),
    normaliseValue(fixture.homeTeam),
    normaliseValue(fixture.awayTeam)
  ].join("|");
}

function detectFixtureChanges(previousFixtures, currentFixtures) {
  const changes = [];
  const previousByKey = new Map(previousFixtures.map((fixture) => [fixture.key || fixtureKey(fixture), fixture]));
  const currentByKey = new Map(currentFixtures.map((fixture) => [fixture.key || fixtureKey(fixture), fixture]));
  const previousComparable = new Map(previousFixtures.map((fixture) => [comparableFixtureKey(fixture), fixture]));
  const currentComparable = new Map(currentFixtures.map((fixture) => [comparableFixtureKey(fixture), fixture]));

  currentFixtures.forEach((fixture) => {
    if (previousByKey.has(fixture.key)) return;
    const prior = previousComparable.get(comparableFixtureKey(fixture));
    if (prior) {
      if (normaliseValue(prior.time) !== normaliseValue(fixture.time)) {
        changes.push({ type: "Time", title: `${fixture.grade} time changed`, detail: `${prior.time} to ${fixture.time}`, tone: "partial" });
      }
      if (normaliseValue(prior.surface || prior.venue) !== normaliseValue(fixture.surface || fixture.venue)) {
        changes.push({ type: "Moved", title: `${fixture.grade} moved`, detail: `${prior.surface || prior.venue} to ${fixture.surface || fixture.venue}`, tone: "partial" });
      }
    } else {
      changes.push({ type: "New", title: `${fixture.grade} added`, detail: `${fixture.date} ${fixture.time} - ${fixture.surface || fixture.venue}`, tone: "neutral" });
    }
  });

  previousFixtures.forEach((fixture) => {
    if (!currentByKey.has(fixture.key) && !currentComparable.has(comparableFixtureKey(fixture))) {
      changes.push({ type: "Removed", title: `${fixture.grade} removed`, detail: `${fixture.date} ${fixture.time} - ${fixture.surface || fixture.venue}`, tone: "unfilled" });
    }
  });

  return changes.slice(0, 12);
}

function flattenSessionFixtures() {
  return [];
}

function rebuildDashboardFromFixtures(fixtures) {
  const grouped = new Map();
  fixtures.forEach((fixture) => {
    const label = sessionLabel(fixture);
    if (!grouped.has(label)) grouped.set(label, []);
    grouped.get(label).push(fixture);
  });

  state.sessions = Array.from(grouped.entries()).map(([label, items], index) => {
    const primaryClub = calculatePrimaryClub(items);
    const casualCount = label.includes("Midweek") ? 0 : Math.max(1, Math.ceil(items.length / 6));
    const requirements = buildRequirementsForSession(label, items, primaryClub);
    const required = requirements.reduce((sum, item) => sum + item.required, 0);
    const filled = requirements.reduce((sum, item) => sum + item.filled, 0);
    return {
      id: `imported-${index}`,
      day: label.includes("Sunday") ? "Sunday" : label.includes("Midweek") ? "Midweek" : "Saturday",
      label,
      time: sessionTime(items),
      primaryClub,
      games: items.length,
      casual: casualCount,
      required,
      filled,
      requirements
    };
  });

  state.teams = buildTeamsFromFixtures(fixtures);
  state.activeDay = state.sessions.some((session) => session.day === state.activeDay) ? state.activeDay : state.sessions[0]?.day || "Saturday";
  state.activeClub = state.teams[0]?.club || "Eastern Blades";
}

function buildRequirementsForSession(label, fixtures, primaryClub) {
  const isMidweek = label.includes("Midweek");
  const timekeeperOwner = primaryClub;
  const timekeeperCount = Math.max(1, new Set(fixtures.map((fixture) => fixture.surface || fixture.venue)).size);
  const requirements = [
    { role: "Facility Supervisor", owner: isMidweek ? "Dayton Committee" : "Casual Staff", required: 1, filled: 1 },
    { role: "Turf Timekeeper", owner: timekeeperOwner, required: timekeeperCount, filled: Math.max(0, timekeeperCount - 1) }
  ];
  if (!isMidweek) {
    requirements.push({ role: "Canteen Support", owner: primaryClub, required: Math.max(1, Math.ceil(fixtures.length / 4)), filled: Math.max(0, Math.ceil(fixtures.length / 4) - 1) });
  } else {
    requirements.push({ role: "Midweek Fixture Support", owner: "Dayton Casual Staff", required: 1, filled: 0 });
  }
  return requirements;
}

function calculatePrimaryClub(fixtures) {
  const scores = { "Eastern Blades": 0, Harlies: 0 };
  fixtures.forEach((fixture) => {
    const text = `${fixture.homeTeam} ${fixture.awayTeam}`;
    if (/blade|eastern/i.test(text)) scores["Eastern Blades"] += /blade|eastern/i.test(fixture.homeTeam) ? 3 : 1;
    if (/harl/i.test(text)) scores.Harlies += /harl/i.test(fixture.homeTeam) ? 3 : 1;
  });
  return scores["Eastern Blades"] >= scores.Harlies ? "Eastern Blades" : "Harlies";
}

function buildTeamsFromFixtures(fixtures) {
  const teams = [];
  fixtures.forEach((fixture) => {
    [fixture.homeTeam, fixture.awayTeam].forEach((teamName) => {
      const club = inferClub(teamName);
      if (!club) return;
      teams.push({
        club,
        team: `${fixture.grade} - ${teamName}`,
        status: isDaytonFixture(fixture) ? "Playing at Dayton" : "Away Fixture",
        time: `${fixture.date} ${fixture.time}`,
        venue: fixture.venue || fixture.surface || "-"
      });
    });
  });
  teams.push({ club: "Eastern Blades", team: "Unscheduled Team", status: "No Game", time: "-", venue: "-" });
  teams.push({ club: "Harlies", team: "Junior Bye Team", status: "Bye", time: "-", venue: "-" });
  return teams;
}

function inferClub(teamName) {
  if (/blade|eastern/i.test(teamName)) return "Eastern Blades";
  if (/harl/i.test(teamName)) return "Harlies";
  return "";
}

function isDaytonFixture(fixture) {
  return /dayton/i.test(`${fixture.venue} ${fixture.surface}`);
}

function sessionLabel(fixture) {
  const day = dayName(fixture.date);
  if (!["Saturday", "Sunday"].includes(day)) return "Midweek";
  if (day === "Sunday") return "Sunday";
  const hour = Number(String(fixture.time).match(/\d{1,2}/)?.[0] || 0);
  const isPm = /pm/i.test(fixture.time) && hour < 12;
  const hour24 = isPm ? hour + 12 : hour;
  return hour24 < 12 ? "Saturday Morning" : "Saturday Afternoon";
}

function dayName(dateValue) {
  const cleaned = cleanCell(dateValue);
  if (/sat/i.test(cleaned)) return "Saturday";
  if (/sun/i.test(cleaned)) return "Sunday";
  const date = new Date(cleaned);
  if (Number.isNaN(date.getTime())) return "Midweek";
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}

function sessionTime(fixtures) {
  const times = fixtures.map((fixture) => fixture.time).filter(Boolean);
  return times.length ? `${times[0]} - ${times[times.length - 1]}` : "Time TBC";
}

function toast(message) {
  const toastEl = $("#toast");
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  window.clearTimeout(toastEl._timer);
  toastEl._timer = window.setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
}

init();
