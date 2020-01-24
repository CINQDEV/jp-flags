$(document).ready(function() {
    var tabMarque = [];
  
    $.getJSON('data.json', function(data) {
  
      // alert(data);
  
      $.each(data, function(index, val) {
        tabMarque[index] = val;
      });
    });
  
    $('#Marque').change(function(event) {
      // alert('Marque_change');
      var marque = $(this).val();
      // alert(marque);
  
      var htmlOption = '<option value="0">Choix du serie</option>';
      if (marque !== '0') {
        var itemsMarque = tabMarque[marque];
        //alert(JSON.stringify(itemsMarque));
        $.each(itemsMarque, function(key, value) {
          //alert("k=" + key + " v=" + JSON.stringify(value));
          htmlOption += '<option value="' + value[0] + '" data-href="' + value[2] + '">' + value[1] + '</option>';
        });
      }
      $('#Serie').html(htmlOption);
    });
  
    $('#go').click(function() {
      //alert('go_click');
      var selected = $('#Serie').find('option:selected');
      var href = selected.data('href');
      // alert('Go to: '+href);
      window.location = href;
    });
  });