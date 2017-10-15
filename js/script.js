$(document).ready(function () {
    var ctx = $("#mycanvas").get(0).getContext("2d");

    var data = [{
            value: 90,
            color: "cornflowerblue",
            highlight: "red",
            label: "Coach"
        },
        {
            value: 60,
            color: "lightgreen",
            highlight: "red",
            label: "C++"
        },
        {
            value: 45,
            color: "orange",
            highlight: "red",
            label: "Web Development"
        },

        {
            value: 75,
            color: "DarkGoldenRod",
            highlight: "red",
            label: "Project Management"
        },

        {
            value: 90,
            color: "Fuchsia",
            highlight: "red",
            label: "Teacher"
        },

    ];

    var chart = new Chart(ctx).Pie(data);
});