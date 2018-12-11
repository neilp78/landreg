/* global $ */

// Warn about using the kit in production
/*if (window.console && window.console.info) {
  //window.console.info('GOV.UK Prototype Kit - do not use for production')
  //session
  if (typeof(Storage) !== "undefined") {

  } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
} */



$(document).ready(function () {
  window.GOVUKFrontend.initAll();
/*
  if ($(".product-page")[0]){
    var currentDataSet = $('h1').text();
    currentDataSet = currentDataSet.replace(/\s+/g, '-').toLowerCase();
    sessionStorage.setItem("dataset", currentDataSet);

  }
  console.log(sessionStorage.getItem("dataset"));

  switch(sessionStorage.getItem("dataset")) {
      case '-registered-leases-':
        $(".registered-leases .historic").text('this is downloaded').css('font-weight','bold');;
            //console.log('Rl');
          break;
      case '-overseas-companies-that-own-property-in-england-and-wales-':
           $(".overseas .historic").text('this is downloaded').css('font-weight','bold');
           //console.log('oS');
          break;
      //default:
          //code block
  }
*/
//Contexts



//Get data attribute of prototype
$('.context').each(function(){
  var contextState = $(this).attr("data-id");
  console.log(contextState);

  switch(contextState) {
    case 'id-1':
      var context = 'context1'; //logged out
      break;
    case 'id-2':
      var context = 'context2'; //logged-in, but not agreed to licence
      break;
    case 'id-3':
      var context = 'context3'; //logged-in, has already agreed to licence
      break;
  }

});

$('.download-started').hide();
  $('.hide').hide();
  $('.download-now').click(function() {
    $('.download-started').fadeIn().delay( 800 );
    $('.download-otopn-selected').hide().delay( 800 );
    $(this).hide();
    var h1text = $('.download-started h2.hide').text();
    $('h1').replaceWith('<div class="govuk-panel govuk-panel--confirmation"><h2 class="govuk-panel__title">Your dataset is downloading</h2></div>');
  });

$('.non-js').replaceWith('<div class="state-1 toggle-states"><a class="govuk-button" href="#">View licence</a></div><div class="state-2 toggle-states"><ul><li>Point 1</li><li>Point 2</li><li>Point 3</li><li>Point 4</li><li>Point 5</li></ul><br><br><a class="govuk-button" href="#">Agree</a></div><div class="state-3 toggle-states"><h3>Latest version</h3><p>Last updated: 12 Demeber 2019</p><a class="govuk-button" href="#" download>Dowload latest</a><br><a class="govuk-button" href="#" download>Dowload Changle only</a></div>');

//          </div>
$('.listingspage-flat').each(function(){
  var toggleState = $(this).find('.toggle-states');
  var state1 = $(this).find('.state-1');
  var state2 = $(this).find('.state-2');
  var state3 = $(this).find('.state-3');

  toggleState.hide();
  state1.show();

  $('.state-1 a').click(function() {
    state1.hide();
    state2.show();
    event.preventDefault();
  });
  $('.state-2 a').click(function() {
    state2.hide();
    state3.show();
    event.preventDefault();
    //licence agreed
  });
  $('.state-3 a').click(function() {
    //state2.show();
    //state2.show();
    event.preventDefault();
  });
});

$('#createaccount').submit(function () {
  alert('fired');
});

  $('.table-hack').each(function() {
    $(this).find('td').addClass('govuk-table__cell');
    $(this).find('tr td:first-child').addClass('add_bold');
    $(this).find('thead td').addClass('add_bold');
  });

  $(".fixed-view-downloads").hide();
  $(".add-to-download").click(function() {
    var thisText = $(this).parent().find('h2').text();
    //console.log(thisText);
    $('.fixed-view-downloads span').text(thisText);
    $(".fixed-view-downloads").fadeIn();
  });
  $(".closethis").click(function() {
    $(".fixed-view-downloads").hide();
  });

  $('.filter-user-type').each(function() {
    //$( this ).addClass( "foo" );
    var gotoPersonal = 'create-personal-account/1-create-account';
    var gotoUK = 'create-uk-business-account/2-1-createaccount-uk';
    var gotoOversea = 'create-overseas-account/3-1-createaccount-overseas';

    var thisradio = $(this).find('.govuk-radios__item input');
    $('#user-select input').on('change', function() {
       var target = ($(this).val());

       switch(target) {
            case 'personal':
                $('.govuk-form-group a').attr('href', gotoPersonal);
                break;
            case 'uk-organisation':
                //alert(target);
                $('.govuk-form-group a').attr('href', gotoUK);
                break;
            case 'overseas-organisation':
                //alert(target);
                $('.govuk-form-group a').attr('href', gotoOversea);
                break;
        }
       //$(updatedLink).attr('href',target)
    });
  });

  //prettify JSON snippetsif (!library)
   var library = {};

    library.json = {
       replacer: function(match, pIndent, pKey, pVal, pEnd) {
          var key = '<span class=json-key>';
          var val = '<span class=json-value>';
          var str = '<span class=json-string>';
          var r = pIndent || '';
          if (pKey)
             r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
          if (pVal)
             r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
          return r + (pEnd || '');
          },
       prettyPrint: function(obj) {
          var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
          return JSON.stringify(obj, null, 3)
             .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
             .replace(/</g, '&lt;').replace(/>/g, '&gt;')
             .replace(jsonLine, library.json.replacer);
          }
       };

    var account = { active: true, codes: [48348, 28923, 39080], city: "London" };
    var planets = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];
    $('#account').html(library.json.prettyPrint(account));
    $('#planets').html(library.json.prettyPrint(planets));



    //download page
    $(".terms").each(function() {
      var checkDataTypeSelection = $(this).find('.govuk-checkboxes checkbox');
      var enableDownload = $(this).find(".govuk-button");
//console.log('fojnd htis');
      $(this).find(":checkbox").bind('change', function(){
      //  val = this.checked; //<---
          $(enableDownload).removeAttr('disabled');
          $(enableDownload).attr('aria-disabled', 'false').removeClass('govuk-button--disabled');

        //  $(this).parent().parent().parent().parent().parent().find('.govuk-tag').hide();
      });
    });

    $(".remove-dataset").click(function() {
      $(this).parent().parent().hide();
    });

    //download page
    $(".download-file-page").each(function() {
      var checkDataTypeSelection = $(this).find('.govuk-checkboxes checkbox');

//console.log('fojnd htis');
      $(this).find(":checkbox").bind('change', function(){
          alert($(this).attr("value"));
      });
    });

    $(".full-screen").each(function(){
      $(this).parent().parent().parent().addClass('full-width');
    })
    //GDS Alpha banner
    $('<div class="govuk-phase-banner"><p class="govuk-phase-banner__content"><strong class="govuk-tag govuk-phase-banner__content__tag ">beta</strong>  <span class="govuk-phase-banner__text">This is a new service – your <a class="govuk-link" href="mailto:n.phillips@kainos.com">feedback</a> will help us to improve it.</span>  </p></div>').insertAfter('.govuk-header');

    //sticky inpage nav on details pageTitle
    //var stickyTop = $('.js-stick-at-top-when-scrolling').offset().top;

  /*  $(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= stickyTop) {
            $('.js-stick-at-top-when-scrolling').css({position: "fixed", top: "0px"});
            $('.govuk-grid-column-two-thirds').css('margin-left','33%');
        } else {
            $('.js-stick-at-top-when-scrolling').css({position: "relative", top: "0px"});
            $('.govuk-grid-column-two-thirds').css('margin-left','0');
        }
    });
*/
    //
    //back buttons

    //Eilis, will this mess anything uop for you?
    $("a.govuk-back-link").click(function() {
        return false;
    });

    $("a.govuk-back-link").click(function(){
  		parent.history.back();
  		return false;
  	});

    $('.sprint-wrap').find('tr:even').css({'background-color':'red'}).end().find('tr:odd').css({'background-color':'blue'});

})
