<script>
  import { onMount } from "svelte"
  import DarkModeButton from "./DarkModeButton.svelte"
  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }

  .App-header {
    background-color: #f9f6f6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }
  .App-logo {
    height: 36vmin;
    pointer-events: none;
    margin-bottom: 3rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div
  class="flex flex-col items-center justify-center flex-grow w-screen h-screen p-5 bg-white dark:bg-black">
  <a
    class="text-blue-800 dark:text-blue-300"
    href="https://svelte.dev"
    target="_blank"
    rel="noopener noreferrer">
    Svelte + TS + Snowpack + TW + Dark Mode Woo
  </a>
  <div class="p-2">
    <DarkModeButton />
  </div>
</div>
