$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

// 회원가입 하기

// 1. 회원가입 버튼 함수 만들기

function register() {
    // 내용 체크 하기

    const checkResult = checkJoinFields();

    if(!checkResult){
        return;
    }

    // 회원가입 진행
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    const newUser = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    }

    console.log(newUser); // 통신을 안 하므로 console 사용

    // 회원가입 완료 메시지
    alert("회원가입이 완료 되었습니다.");
    // 페이지 이동
    // window.location.href = "이동페이지"; // 이동할 곳이 없으니 주석
}

// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields(){
    // id들
    // username
    // email
    // password
    // confirm-password

    const usernameElement = document.getElementById("username");  // 보통 const로 시작
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const confirmPasswordElement = document.getElementById("confirmPassword");

    // 유저네임이 없으면 안 됨
    if(usernameElement.value == ""){
        alert("username을 입력해주세요.");
        usernameElement.focus();  // 커서 이동
        return false;
    }

    // 이메일이 없으면 안 됨
    if(emailElement.value == ""){
        alert("email를 입력해주세요.");
        emailElement.focus();
        return false;
    }

    // 비밀번호가 없으면 안 됨
    if(passwordElement.value == ""){
        alert("password를 입력해주세요.");
        passwordElement.focus();
        return false;
    }

    // 비밀번호 확인이 없으면 안 됨
    if(confirmPasswordElement.value == ""){
        alert("confirmPassword를 입력해주세요.");
        confirmPasswordElement.focus();
        return false;
    }

    // 비밀번호와 비밀번호 확인이 동일해야함
    // if(passwordElement.value != confirmPasswordElement.value){
    //     // confirmPasswordElement.setCustomValidity("Passwords Don't Match")
    //     alert("password를 확인해주세요.")
    //     return false;
    // }

    // 모두 통과함
    return true;

}

// 로그인 하기

// 1. 로그인 버튼 함수 만들기
function login() {
    alert("로그인이 완료 되었습니다.");
}

// 2. 로그인 내용 체크 함수 만들기
function checkLoginFields() {
    // id들
    // loginUsername
    // loginPassword

    const loginUsernameElement = document.getElementById("loginUsername");
    const loginPasswordElement = document.getElementById("loginPassword");

    // loginUsername이 없으면 안 됨
    if(loginUsernameElement.value == ""){
        alert("ID를 입력해주세요.");
        loginUsernameElement.focus();  // 커서 이동
        return false;
    }

    // loginPassword가 없으면 안 됨
    if(loginPasswordElement.value == ""){
        alert("비밀번호를 입력해주세요.");
        loginPasswordElement.focus();
        return false;
    }

    return true;
}