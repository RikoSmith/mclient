export function ScriptInjector() {
    var scriptList = [
        "vendor/jquery/jquery.min.js",
        "vendor/bootstrap/js/bootstrap.bundle.min.js",
        "vendor/jquery-easing/jquery.easing.min.js",
        "vendor/magnific-popup/jquery.magnific-popup.min.js",
        "js/jqBootstrapValidation.js",
        "js/contact_me.js",
        "js/freelancer.min.js"
    ];
    for (let i = 0; i < scriptList.length; i++) {
        const script = document.createElement('script');
        script.src = scriptList[i];
        script.async = false;
        script.type = 'text/javascript';
        document.body.appendChild(script);
    }
}