<script lang="ts">
    export let direction: "down" | "up" | "left" | "right" = "down";
    export let color: string = "white";
    let class_dir = "";
    if (direction === "down") {
        class_dir = "rotate(0deg)";
    } else if (direction === "up") {
        class_dir = "rotate(180deg)";
    } else if (direction === "left") {
        class_dir = "rotate(90deg)";
    } else if (direction === "right") {
        class_dir = "rotate(-90deg)";
    }
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke={color}
    class={`w-6 h-6 inline-block`}
    style="transform: {class_dir}"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
    />
</svg>
