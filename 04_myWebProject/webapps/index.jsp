<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Web page</title>
<link rel="stylesheet" href="assets/css/header.css" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="assets/js/jquery-3.6.0.min.js"></script>
<style>
.background {
	width: 100%;
	height: 450px;
}

.tile {
	width: 150px;
	height: 150px;
	background: black;
	display: inline-block;
	color: white;
}

.first-line {
	margin-top: 10%;
}

.tile1 {
	background: darkgray;
}

.tile-menu:hover {
	background: skyblue;
	cursor: pointer;
	color: white;
}

.notile {
	visibility: hidden;
}

img {
	height : 400px;
	width : 100%;
}
</style>
</head>
<body>
	<%-- <%@ include file="views/common/header.jsp"%> --%>
	<c:import url="/views/common/header.jsp" />

	<!--  타일 모양 화면  -->
	<div class="background" align="center">
		<div class="first-line">
			<div class="tile tile-menu"></div>
			<div class="tile tile1"></div>
			<div class="tile tile-menu"></div>
			<div class="tile notile"></div>
			<div class="tile tile1"></div>
		</div>
		<div class="second-line">
			<div class="tile notile"></div>
			<div class="tile tile1"></div>
			<div class="tile notile"></div>
			<div class="tile tile1"></div>
			<div class="tile tile-menu"></div>
		</div>
	</div>

	<hr />
	<!--  이미지 슬라이더 ( 캐러셀 : carousel) -->
	<h2 class="w3-center">Animal Album</h2>
	<div class="w3-content w3-display-container">
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample1.jpg">
			<div
				class="w3-display-bottomright w3-container w3-padding-16 w3-black">
				귀여운 화이트 초코 고슴도치</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample2.jpg">
			<div class="w3-display-topleft w3-container w3-padding-16 w3-black">
				귀여운 강아지</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample3.jpg">
			<div
				class="w3-display-bottomright w3-container w3-padding-16 w3-black">
				귀여운 고양이</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample4.jpg">
			<div class="w3-display-topleft w3-container w3-padding-16 w3-black">
				귀여운 강아지2</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample5.gif">
			<div
				class="w3-display-bottomleft w3-container w3-padding-16 w3-black">
				제발 주말 과제만은...</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample6.gif">
			<div class="w3-display-topright w3-container w3-padding-16 w3-black">
				사이좋게 나눠먹어야지, 토끼야</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample7.gif">
			<div
				class="w3-display-bottomright w3-container w3-padding-16 w3-black">
				질서있는 라쿤 친구들</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample8.gif">
			<div class="w3-display-topleft w3-container w3-padding-16 w3-black">
				귀여운 강아지의 움직이는 사진</div>
		</div>
		<div class="w3-display-container mySlides w3-animate-fading">
			<img src="assets/images/sample/img_sample9.gif">
			<div class="w3-display-topright w3-container w3-padding-16 w3-black">
				포동포동 그대여</div>
		</div>
		<button class="w3-button w3-black w3-display-left"
			onclick="plusDivs(-1)">&#10094;</button>
		<button class="w3-button w3-black w3-display-right"
			onclick="plusDivs(1)">&#10095;</button>
		<hr>
	</div>
	<br>
	<br>
	<br>

	<table align="center" id="boardTop5"
		    style="border : 3px solid black; background : white;">
		<thead>
			<tr>
				<th>글번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>
		</thead>	    
		
		
    </table>

	<script>
		var slideIndex = 1;
		showDivs(slideIndex);

		function plusDivs(n) {
			showDivs(slideIndex += n);
		}

		function showDivs(n) {
			var i;
			var x = document.getElementsByClassName("mySlides");
			if (n > x.length) {
				slideIndex = 1
			}
			if (n < 1) {
				slideIndex = x.length
			}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			x[slideIndex - 1].style.display = "block";
		}
		
		// top-N 분석
		$(function(){	// document.ready ( 문서 로딩 완료 시 바로 실행)
			$.ajax({
				url : '/myWeb/top5.bo',
				type : 'get',
				success : function (data) {
					console.log(data);
					
					var $tbody = $('<tbody>');
					
					for(var i in data){
						// 내용을 모두 담을 tr 생성
						var $tr = $('<tr>');
						
						// 내용을 각각 표현할 td 태그 생성
						var $bno = $('<td>').text(data[i].bno);
						var $title = $('<td>').text(data[i].btitle);
						var $writer = $('<td>').text(data[i].bwriter);
						var $bdate = $('<td>').text(data[i].bdate);
						var $bcount = $('<td>').text(data[i].bcount);
						
						$tr.append($bno).append($title)
						   .append($writer).append($bdate)
						   .append($bcount);
						
						$tbody.append($tr);
					}
					
					$('#boardTop5>tbody').remove();
					
					$('#boardTop5').append($tbody);
					
				}, error : function() {
					console.log("에러 발생!");
				}
			});
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</script>
	<%-- <%@ include file="views/common/footer.jsp"%> --%>
	<c:import url="/views/common/footer.jsp"/>
	
</body>
</html>











