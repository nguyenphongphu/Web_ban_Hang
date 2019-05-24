$(function () {
    if (window.location.hash && window.location.hash == '#_=_') {
        window.location.hash = '';
    }
});
var strError = 'Đăng nhập không thực hiện được';

var googleUser = {};

function initLoginGoogle() {
    gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: SocialGoogleClientId,
            cookiepolicy: 'single_host_origin',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        });
        auth2.attachClickHandler('customBtn', {}, onSignIn, onSignInFailure);
    });
};
initLoginGoogle();

// Google Sign-in (new)
function onSignIn(googleUser) {
    // Handle successful sign-in
    var userToken = googleUser.getAuthResponse();
    $.ajax({
        type: 'POST',
        url: '/Account/GoogleLoginCallback',
        data: { id_token: userToken.id_token },
        dataType: "JSON",
        success: function (result) {
            if (result.ErrorCode == 'success') {
                document.cookie = "savedProductIds=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                location.href = '/quan-ly-tin-rao';
            }
            else if (result.ErrorCode == 'error') location.href = '/';
            else
                location.href = '/thong-tin-ca-nhan';
        }
    });
}
function onSignInFailure() {
    // Handle sign-in errors    
    alert(strError);
}