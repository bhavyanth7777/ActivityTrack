Path.map("#/home").to(function () {
    $("#stage").load("screens/home.html");
    $('#bars').show();
});

Path.map("#/createPin").to(function () {
    $("#stage").load("screens/createPin.html");
    $('#bars').show();
});

Path.map("#/ActivityList").to(function () {
    $("#stage").load("screens/ActivityList.html");
    $('#bars').show();
});

Path.map("#/Task").to(function () {
    $("#stage").load("screens/Task.html");
    $('#bars').show();
});

Path.map("#/ReportTask").to(function () {
    $("#stage").load("screens/ReportTask.html");
    $('#bars').show();
});



Path.map("#/TaskList").to(function () {
    $("#stage").load("screens/TaskList.html");
    $('#bars').show();
});

Path.map("#/ActivityorDelay").to(function () {
    $("#stage").load("screens/ActivityorDelay.html");
    $('#bars').show();
});
Path.map("#/loations").to(function () {
    $("#stage").load("screens/location.html");
    $('#bars').show();
});

Path.map("#/workers").to(function () {
    $("#stage").load("screens/workers.html");
    $('#bars').show();
});

Path.map("#/messages").to(function () {
    $("#stage").load("screens/messages.html");
    $('#bars').show();
});

Path.map("#/login").to(function () {
    $("#stage").load("screens/login.html");
    $('#bars').show();
});

Path.map("#/login").to(function () {
    $("#stage").load("screens/login.html");
    $('#bars').hide();
});

Path.map("#/currentStatus").to(function () {
    $("#stage").load("screens/currentStatus.html");
    $('#bars').show();
});

Path.root("#/login");
Path.listen();