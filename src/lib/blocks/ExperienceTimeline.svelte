<script lang="ts">
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent,
    } from "svelte-vertical-timeline";
    export let values = [
        {
            title: "UKZN",
            subtitle: "BSc Computer Science",
            startDate: "2021",
            endDate: "2023",
            side: "left",
        },
        {
            title: "UKZN",
            subtitle: "BSc Computer Science Honors",
            startDate: "2024",
            endDate: null,
            side: "left",
        },
        {
            title: "Star College",
            subtitle: "C++ Tutor",
            startDate: "2021",
            endDate: "2022",
            side: "right",
        },
        {
            title: "QuickAI",
            subtitle: "Software Engineer",
            startDate: "2022",
            endDate: "2023",
            side: "right",
        },
        {
            title: "Freelance",
            subtitle: "Software Engineer",
            startDate: "2022",
            endDate: null,
            side: "right",
        },
    ];

    // sort by start date
    values.sort((a, b) => {
        if (a.startDate < b.startDate) {
            return 1;
        }
        if (a.startDate > b.startDate) {
            return -1;
        }
        return 0;
    });

    // sort by end date
    values.sort((a, b) => {
        // null is higher than any date
        if (a.endDate === null) {
            return -1;
        } else if (b.endDate === null) {
            return 1;
        }

        if (a.endDate < b.endDate) {
            return 1;
        }
        if (a.endDate > b.endDate) {
            return -1;
        }
        return 0;
    });
</script>

<Timeline position="alternate">
    {#each values as option}
        <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
                <p>{option.startDate} - {option.endDate ?? "Present"}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot style={"background-color: rgb(118 169 250);"}
                ></TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3 class="text-blue-400">{option.title}</h3>
                <h3 class="text-blue-400">{option.subtitle}</h3>
            </TimelineContent>
        </TimelineItem>
    {/each}
</Timeline>
