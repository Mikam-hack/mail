$("#searhc").on('click',function(e){
	e.preventDefault();
	$('.search_form input').focus();
});


$("#enterPass").on('click', function(e){
	e.preventDefault();
	let mailField = $('#indexMail');
	let mailVal = mailField.val();
	if(mailVal.length  < 3){
		//alert('поле недолжно быть пустым')
	let message = ' Поле недолжно быть пустым';
	$('.invalid-feedback').css('display', 'block').text(message);
	}else{
		if ($('.invalid-feedback').css('display') === 'block'){
			$('.invalid-feedback').css('display', 'none');
		}

		let selectVal = $('#indexSelect').val()
		
		if(selectVal == 1){
			selectVal ='@mail.ru'
			var falback = mailVal+selectVal;
			console.log(falback);
		}
		let btn = `<button id="enter" class="btn btn-primary" type="sumbit">Войти</button>`;
		let block = `<div id="falback"><a href="#"><i class="fa fa-arrow-left"></i>${falback}</a></div>`;	
	$("form-row").eq(1).append(btn);	
	$("#indexPass").slideToggle();
	$("#indexPass").hide();
	$("#indexSelect").hide();
	$("#enterPass").hide();
	mailField.hide();
	}
	
});

$('.authIndex').on('click', '#falback', function(e){
		e.preventDefault();
		$('#falback').hide();
		$('#enter').hide();
		$("#indexPass").hide();
		$("#indexMail").show();
		$("#indexSelect").show();
		$("#enterPass").show();
	    console.log('hide');
})