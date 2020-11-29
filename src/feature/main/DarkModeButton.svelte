<script>
  function toggleDarkMode() {
    const currentlyDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    if (currentlyDark) {
      document.querySelector("html")?.classList.remove("dark")
      localStorage.theme = "light"
    } else {
      document.querySelector("html")?.classList.add("dark")
      localStorage.theme = "dark"
    }
  }
</script>

<!-- markup (zero or more items) goes here -->
<button
  class="p-2 text-white bg-gray-700 rounded-md dark:text-black dark:bg-gray-50"
  on:click={toggleDarkMode}>toggle dark mode</button>
