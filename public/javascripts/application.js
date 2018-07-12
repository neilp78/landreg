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
    var gotoPersonal = '1-1-createaccount-yourdetails';
    var gotoUK = '2-1-createaccount-uk';
    var gotoOversea = '3-1-createaccount-overseas';

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
})
