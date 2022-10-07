/**
 회원 가입 체크 javascript
 */
 
 function infoCheck() {
	
	if(document.join_form.id.value.length == 0) {
		alert("아이디는 필수 입력사항입니다!");
		document.join_form.id.focus();
		return;
	}
	
	if(document.join_form.id.value.length < 4 ||document.join_form.id.value.length >15) {
		alert("아이디는 4자 이상 15자 이하이어야 합니다!");
		document.join_form.id.focus();
		return;
	}
	/* 아이디를 모두 대문자로 입력하도록 유효성 검사 설정 */
	
	for(i = 0;i<document.join_form.id.value.length;i++) {
		var ch = document.join_form.id.value.charAt(i);
			if(ch < 'A'|| ch >'Z'){
		alert("아이디의 첫글자는 대문자이어야 합니다!");
		document.join_form.id.focus();
		return;
		}
	}
	
	if(document.join_form.pw.value.length == 0) {
		alert("비밀번호는 필수 입력사항입니다!");
		document.join_form.pw.focus();
		return;
	}
	if(document.join_form.pw.value.length < 4 ||document.join_form.pw.value.length > 15 ) {
		alert("비밀번호는 4자 이상 15자 이하이어야 합니다!");
		document.join_form.pw.focus();
		return;
	}
		if(document.join_form.pw.value!= document.join_form.pw_check.value) {
		alert("비밀번호가 일치 하지 않습니다!");
		document.join_form.pw_check.focus();
		return;
	}
		if(document.join_form.name.value.length == 0 ) {
		alert("이름은 필수 입력사항입니다!");
		document.join_form.name.focus();
		return;
	}
		if(document.join_form.email.value.length == 0) {
		alert("이메일은 필수 입력사항입니다");
		document.join_form.email.focus();
		return;
	}
	
	
	document.join_form.submit();
	
	
}
 