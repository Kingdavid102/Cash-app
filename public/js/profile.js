// Load user profile data
function loadProfileData() {
  // Check if user is logged in
  const userJson = localStorage.getItem("user")
  if (!userJson) {
    window.location.href = "/index.html"
    return
  }

  const user = JSON.parse(userJson)

  // Update UI with user data
  document.getElementById("profile-name").textContent = user.name
  document.getElementById("profile-email").textContent = user.email
  document.getElementById("profile-account").textContent = user.accountNumber
  document.getElementById("profile-routing").textContent = user.routingNumber
  document.getElementById("profile-balance").textContent = "$" + formatCurrency(user.balance)
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Load profile data
  loadProfileData()

  // Back button
  const backBtn = document.getElementById("back-btn")
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "/dashboard.html"
    })
  }

  // Logout button
  const logoutBtn = document.getElementById("logout-btn")
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      window.location.href = "/index.html"
    })
  }
})
