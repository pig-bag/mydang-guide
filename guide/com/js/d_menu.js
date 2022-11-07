//TopArea
function TopArea() {
  document.write('<!-- header s -->');
  document.write('<div id="wgHeader" class="clfix">');
  document.write('<span class="logo"><a href="../../index.html"><img src="../img/logo.png" alt="" title="" /></a></span>');
  document.write('<div id="gnbBox">');
  document.write('<div id="gnbBox_ov"></div>');
  document.write('<ul class="clfix">');
  document.write('<li><a href="../../index.html">서비스정의 및 목표</a></li>');
  document.write('<li><a href="../../html/mobile/m_menuList0101.html">타플랫폼비교</a></li>');
  document.write('<li><a href="../../html/menu/menuList0201.html">IA(정보구조설계)</a></li>');
  document.write('<li><a href="../../management/guide/html/menu/menuList0101.html">플로우차트</a></li>');
  document.write('<li><a href="html/history/historyList0101.html">변경이력</a></li>');
  document.write('<li><a href="../../wahGuide.html">WAH가이드라인</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgHeader div -->');
}

// 서비스정의 및 목표
function LeftMenu01() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  document.write('<li><a href="">서비스정의</a></li>');
  document.write('<li><a href="html/rule/rule0301.html">목표</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// 타 플랫폼 비교
function LeftMenu02() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  document.write('<li><a href="../guide/index.html">수익모델비교</a></li>');
  document.write('<li><a href="html/rule/rule0301.html">기능비교</a></li>');
  document.write('<li><a href="#">서비스구현가능여부</a></li>');
  document.write('<li><a href="#">비교를 통한 시사점 및 개발방향</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// IA 정보구조설계
function LeftMenuIA() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  document.write('<li><a href="#">사이트맵</a>');
  document.write('<ul class="lnb2depth">');
  document.write('<li><a href="menuListAI01.html">유저</a></li>');
  document.write('<li><a href="menuListAI02.html">파트너사</a></li>');
  document.write('</ul>');
  document.write('</li>');
  document.write('<li><a href="#">정보구조도</a>');
  document.write('<ul class="lnb2depth">');
  document.write('<li><a href="menuListAI03.html">유저</a></li>');
  document.write('<li><a href="menuListAI04.html">파트너사</a></li>');
  document.write('</ul>');
  document.write('</li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// 플로우차트(화면흐름도)
function LeftMenuFC() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  document.write('<li><a href="rule0201.html">유저</a></li>');
  document.write('<li><a href="rule0202.html">파트너사</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// 변경이력
function LeftMenu03() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  //document.write('<li><a href="../../html/menu/menuList0101.html">보성</a></li>');
  document.write('<li><a href="../../html/menu/menuList0201.html">KAM</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// 가이드라인
function LeftMenu04() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  //document.write('<li><a href="../../html/menu/menuList0101.html">보성</a></li>');
  document.write('<li><a href="../../html/menu/menuList0201.html">KAM</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

//MOBILE MENU LIST
function LeftMenuMobile01() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  document.write('<ul id="lnb">');
  document.write('<li><a href="../../html/mobile/m_menuList0101.html">Global</a></li>');
  document.write('<li><a href="../../html/mobile/m_menuList0201.html">Chain</a>');
  document.write('<ul class="lnb2depth">');
  document.write('<li><a href="../../html/mobile/m_menuList0201.html" target="_blank">Chain</a></li>');
  document.write('<li><a href="../../html/mobile/m_menuList0202.html">city Chain</a></li>');
  document.write('</ul>');
  document.write('</li>');
  document.write('</li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

// GUIDE - 지우거나 수정하지 말것
function LeftMenuTMP() {
  document.write('<div id="wgLnb">');
  document.write('<div id="lnbArea">');
  //	document.write('<h2 class="lnbtit">LNB 타이틀</h2>');
  document.write('<ul id="lnb">');
  document.write('<li><a href="">lnb 1depth - 01</a>');
  document.write('<ul class="lnb2depth">');
  document.write('<li><a href="">lnb 2depth - 01</a></li>');
  document.write('<li><a href="">lnb 2depth - 02</a></li>');
  document.write('<li><a href="">lnb 2depth - 03</a></li>');
  document.write('</ul>');
  document.write('</li>');
  document.write('<li><a href="#">lnb 1depth - 04</a></li>');
  document.write('<li><a href="#">lnb 1depth - 05</a></li>');
  document.write('</ul>');
  document.write('</div>');
  document.write('</div><!--// wgLnb div -->');
  document.write('<hr />');
}

function locationprint() {

  // 제작 : 박시영(major_artist@naver.com)
  // 용도 : 현재 페이지의 위치를 표시

  this.makelink = true;
  this.delimiter = ' > ';
  this.home = {
    name: 'Home',
    link: '#'
  }

  var data = new Array();

  this.add = function () {
    if (isNaN(arguments[0]) || !arguments[1]) return;
    var args = new Array();
    for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
    data.push(args);
  }

  this.print = function () {
    var temp, args = new Array();
    for (var i = 0; i < arguments.length; i++) {
      if (isNaN(arguments[i])) return;
      else {
        temp = '';
        for (var j = 0; j <= i; j++) temp += arguments[j];
        args.push(parseInt(temp));
      }
    }
    html = (this.makelink) ? '<a href="' + this.home.link + '" class="lc_home">' + this.home.name + '</a>' : this.home.name;
    for (var i = 0, max = args.length; i < max; i++) {
      for (var j = 0, jmax = data.length; j < jmax; j++) {
        if (args[i] == data[j][0]) {
          html += this.delimiter;
          if (this.makelink && data[j][2] && i != (max - 1)) {
            html += '<a href="';
            if (data[j][2].indexOf('javascript:') != -1) html += '#" onclick="' + data[j][2].replace('javascript:', '') + '">';
            else {
              html += data[j][2] + '" ';
              html += (data[j][3]) ? 'target="' + data[j][3] + '">' : '>';
            }
            html += data[j][1] + '</a>';
          } else if (i == (max - 1)) {
            html += '<span>' + data[j][1] + '</span>';
          } else {
            html += data[j][1];
          }
        }
      }
    }
    document.write(html);
  }

}
var map = new locationprint();

map.home.name = 'Home';
map.home.link = '/';

//(depthinfo,이름,링크,타켓);
map.add(1, "게시판", "#LINK");
map.add(2, "테이블", "#LINK");
map.add(3, "폼디자인", "#LINK");
map.add(4, "버튼/탭/이미지", "#LINK");
map.add(5, "박스/팝업", "#LINK");
map.add(6, "자바스크립트", "#LINK");

map.add(11, "일반게시판", "LINK");
map.add(12, "갤러리게시판(바둑판)", "#LINK");
map.add(13, "갤러리게시판(일반형)", "#LINK");

map.add(111, "리스트", "#LINK");
map.add(112, "내용보기", "#LINK");
map.add(113, "글작성", "#LINK");

map.add(1111, "가나다라1111", "#LINK");
map.add(1112, "가나다라1112", "#LINK");
map.add(1113, "가나다라1113", "#LINK");

map.add(21, "가나다라21", "http://www.naver.com", "_blank");
map.add(211, "가나다라211", "javascript:alert('aaa')", "_blank");
map.add(2114, "가나다라2114");

map.makelink = true;