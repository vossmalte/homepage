<script lang="ts">
  export let name: string;
</script>

<div class="card">
  <span class="name">{name}</span>
  <div class="attributes">
    <slot name="attributes" />
  </div>
  <div class="methods">
    <slot name="methods" />
  </div>
</div>

<style>
  .card {
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  .name {
    display: flex;
    justify-content: center;
  }

  .attributes {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }

  .card > div {
    padding: 0 4px;
    min-height: 4px;
  }
</style>
