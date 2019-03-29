// juery.ajax({});
// "modify the old method in class which typically will use the new method;
// "modify the new method in class which typically will use the old method;
var newAjax = function (params) {
    fetch(params.url)
        .then(function (response) { return response.json(); })
        .then(function (json) {
        params.success();
    });
};
var juery = {
    ajax: function (params) {
        newAjax(params);
    }
};
//# sourceMappingURL=old-new-conflict.js.map