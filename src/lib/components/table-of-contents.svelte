<script>
  export let headings
</script>

{#if headings.length}
  <aside
    class="rounded-md shadow w-64 table-of-contents lg:block hidden"
  >
    <h3 class="font-extrabold text-lg mb-2" id="table-of-contents">
      Table of Contents
    </h3>
    <ul class="max-h-72 overflow-auto">
      {#each headings as heading}
        <li class="mb-2" key={`heading-${heading.href}`}>
          <a href={heading.href}>{heading.label}</a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
