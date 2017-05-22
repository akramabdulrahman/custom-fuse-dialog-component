var Observable = require('FuseJS/Observable');

var isDialogShowing = Observable(false);

function showDialog() {
    console.log("showing dialog...");
    isDialogShowing.value = true;
}

function closeDialog() {
    isDialogShowing.value = false;
}

module.exports = {
    isDialogShowing: isDialogShowing,
    showDialog: showDialog,
    closeDialog: closeDialog
};