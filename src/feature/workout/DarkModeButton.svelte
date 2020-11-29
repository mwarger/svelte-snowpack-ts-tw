<script>
  function toggleDarkMode() {
    window.document.querySelector("html")?.classList.toggle("dark")
  }
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<button type="button" on:click={toggleDarkMode}>toggle dark mode</button>
