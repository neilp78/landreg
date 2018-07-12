/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

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
    var gotoPersonal = 'createaccount-yourdetails';
    var gotoUK = 'createaccount-uk';
    var gotoOversea = 'createaccount-overseas';

    var thisradio = $(this).find('.govuk-radios__item input');
    $('#user-select input').on('change', function() {
       var target = ($(this).val());

       switch(target) {
            case 'personal':
                $('.govuk-form-group a').attr('href', gotoPersonal);
                break;
            case 'uk-organisation':
                alert(target);
                $('.govuk-form-group a').attr('href', gotoUK);
                break;
            case 'overseas-organisation':
                alert(target);
                $('.govuk-form-group a').attr('href', gotoOversea);
                break;
        }
       //$(updatedLink).attr('href',target)
    });
  });
})
