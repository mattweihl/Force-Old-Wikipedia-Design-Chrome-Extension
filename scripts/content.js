const FORCE_OLD_DESIGN_PARAM = 'useskin=vector';

if (window) {
    const url = window.location.href;
    const paramStrings = url.split('?');

    let redirect = true;

    // Already at redirect, since it's present in the url params
    if (paramStrings && paramStrings.includes(FORCE_OLD_DESIGN_PARAM)) {
        redirect = false;
    }

    if (redirect) {
        const newUrl = `${url}?${FORCE_OLD_DESIGN_PARAM}`;
        document.location = newUrl;
    }
}