// juery.ajax({});
// "modify the old method in class which typically will use the new method;
// "modify the new method in class which typically will use the old method;
let newAjax = (params: {url: string, success: any}) => {
    fetch(params.url)
        .then((response: Response) => response.json())
        .then((json: {}) => {
            params.success();
        });
};

let juery = {
    ajax: (params: {url: string, success: any}) => {
        newAjax(params);
    }
};