<script>
  export let headings
</script>

{#if headings.length}
  <aside
    class="table-of-contents fixed right-5 w-64 lg:block hidden shadow rounded-md"
  >
    <h3 class="font-extrabold text-lg mb-2" id="table-of-contents">
      Table of Contents
    </h3>
    <ul class="overflow-auto h-72">
      {#each headings as heading}
        <li class="mb-2" key={`heading-${heading.href}`}>
          <a href={heading.href}>{heading.label}</a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
